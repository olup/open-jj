import * as vscode from 'vscode';
import * as path from 'path';
import { JJCli } from '../jj/cli';
import { Change, Bookmark, WorkingCopyStatus, FileChange, PullRequestInfo, LogRow, CommandResult } from '../jj/types';
import { detectRepositories, DetectionResult } from './detection';
import { GitHubService } from '../services/github';

/**
 * Represents a jj repository and its state
 */
export class Repository implements vscode.Disposable {
  private cli: JJCli;
  private _rootPath: string;
  private _workspacePath: string;
  private _hasGit: boolean;
  private _isColocated: boolean;
  private _disposables: vscode.Disposable[] = [];
  private _githubService: GitHubService;
  private _githubInfo: { owner: string; repo: string } | null = null;
  private _refreshTimer: NodeJS.Timeout | null = null;
  private _refreshPromise: Promise<void> | null = null;
  private _refreshResolve: (() => void) | null = null;
  private _refreshInFlight = false;
  private _refreshQueued = false;
  private _refreshPrInfoRequested = false;

  private _onDidChange = new vscode.EventEmitter<void>();
  readonly onDidChange = this._onDidChange.event;

  private _status: WorkingCopyStatus | null = null;
  private _log: Change[] = [];
  private _logRows: LogRow[] = [];
  private _fullLog: Change[] = [];
  private _bookmarks: Bookmark[] = [];
  private _prInfo: Map<string, PullRequestInfo> = new Map();

  get isRefreshing(): boolean {
    return this._refreshInFlight || this._refreshQueued || this._refreshTimer !== null;
  }

  constructor(workspacePath: string, rootPath: string, hasGit: boolean, isColocated: boolean, githubService?: GitHubService) {
    this._workspacePath = workspacePath;
    this._rootPath = rootPath;
    this._hasGit = hasGit;
    this._isColocated = isColocated;
    this.cli = new JJCli(rootPath);
    this._githubService = githubService ?? new GitHubService();

    this.setupFileWatcher();
  }

  /**
   * Initialize GitHub info from remote URL (call after construction)
   */
  async initGitHubInfo(): Promise<void> {
    const remoteUrl = await this.getRemoteUrl();
    console.log('[open-jj] Remote URL:', remoteUrl);
    if (remoteUrl) {
      this._githubInfo = GitHubService.parseGitHubUrl(remoteUrl);
      console.log('[open-jj] GitHub info:', this._githubInfo);
    }
  }

  get rootPath(): string {
    return this._rootPath;
  }

  get workspacePath(): string {
    return this._workspacePath;
  }

  get hasGit(): boolean {
    return this._hasGit;
  }

  get isColocated(): boolean {
    return this._isColocated;
  }

  get status(): WorkingCopyStatus | null {
    return this._status;
  }

  get log(): Change[] {
    return this._log;
  }

  get logRows(): LogRow[] {
    return this._logRows;
  }

  get fullLog(): Change[] {
    return this._fullLog;
  }

  get bookmarks(): Bookmark[] {
    return this._bookmarks;
  }

  get currentChange(): Change | null {
    return this._status?.currentChange ?? null;
  }

  get changedFiles(): FileChange[] {
    return this._status?.files ?? [];
  }

  get prInfo(): Map<string, PullRequestInfo> {
    return this._prInfo;
  }

  get isGitHub(): boolean {
    return this._githubInfo !== null;
  }

  /**
   * Get PR info for a specific bookmark
   */
  getPrInfoForBookmark(bookmarkName: string): PullRequestInfo | undefined {
    return this._prInfo.get(bookmarkName);
  }

  /**
   * Set up file system watcher
   */
  private setupFileWatcher(): void {
    const autoRefresh = vscode.workspace.getConfiguration('open-jj').get('autoRefresh', true);
    if (!autoRefresh) {
      return;
    }

    // Watch for file changes in the workspace
    const watcher = vscode.workspace.createFileSystemWatcher(
      new vscode.RelativePattern(this._rootPath, '**/*'),
      false,
      false,
      false
    );

    const scheduleRefresh = (event: 'change' | 'create' | 'delete', uri: vscode.Uri) => {
      const relPath = path.relative(this._rootPath, uri.fsPath);
      if (this._isIgnoredRefreshPath(relPath)) {
        return;
      }
      console.log(`[open-jj] refresh trigger: ${event} ${uri.fsPath}`);
      void this.refresh();
    };

    watcher.onDidChange((uri) => scheduleRefresh('change', uri), null, this._disposables);
    watcher.onDidCreate((uri) => scheduleRefresh('create', uri), null, this._disposables);
    watcher.onDidDelete((uri) => scheduleRefresh('delete', uri), null, this._disposables);

    this._disposables.push(watcher);
  }

  private _isIgnoredRefreshPath(relPath: string): boolean {
    const normalized = relPath.split(path.sep).join('/');
    if (!normalized.startsWith('.jj/')) {
      return false;
    }
    if (normalized.startsWith('.jj/working_copy/.tmp')) {
      return true;
    }
    if (normalized.endsWith('.jj/working_copy/working_copy.lock')) {
      return true;
    }
    if (normalized.endsWith('.jj/repo/git_import_export.lock')) {
      return true;
    }
    return false;
  }

  /**
   * Refresh all repository state
   */
  async refresh(options?: { refreshPrInfo?: boolean }): Promise<void> {
    if (options?.refreshPrInfo) {
      this._refreshPrInfoRequested = true;
    }

    if (!this._refreshPromise) {
      this._refreshPromise = new Promise((resolve) => {
        this._refreshResolve = resolve;
      });
    }

    if (this._refreshTimer) {
      clearTimeout(this._refreshTimer);
    }

    this._refreshTimer = setTimeout(() => {
      void this._runRefresh();
    }, 500);

    return this._refreshPromise;
  }

  private async _runRefresh(): Promise<void> {
    if (this._refreshTimer) {
      clearTimeout(this._refreshTimer);
      this._refreshTimer = null;
    }

    if (this._refreshInFlight) {
      this._refreshQueued = true;
      return;
    }

    this._refreshInFlight = true;
    const refreshPrInfo = this._refreshPrInfoRequested;
    this._refreshPrInfoRequested = false;

    await this._refreshNow({ refreshPrInfo });

    this._refreshInFlight = false;

    if (this._refreshQueued) {
      this._refreshQueued = false;
      this._refreshTimer = setTimeout(() => {
        void this._runRefresh();
      }, 200);
      return;
    }

    const resolve = this._refreshResolve;
    this._refreshPromise = null;
    this._refreshResolve = null;
    resolve?.();
  }

  private async _refreshNow(options?: { refreshPrInfo?: boolean }): Promise<void> {
    const logLimit = vscode.workspace.getConfiguration('open-jj').get('logLimit', 0);
    const logRevset = '::';
    const effectiveLimit = logLimit && logLimit > 0 ? logLimit : undefined;

    const [status, logResult, fullLogResult, bookmarks] = await Promise.all([
      this.cli.status(),
      this.cli.log(logRevset, effectiveLimit),
      this.cli.log('::'),
      this.cli.bookmarkList(),
    ]);

    this._status = status;
    this._log = logResult.changes;
    this._logRows = logResult.rows;
    this._fullLog = fullLogResult.changes;
    this._bookmarks = bookmarks;

    if (options?.refreshPrInfo) {
      // Fetch PR info for tracked bookmarks (non-blocking)
      this.refreshPrInfo();
    }

    this._onDidChange.fire();
  }

  /**
   * Refresh PR info for tracked bookmarks
   */
  async refreshPrInfo(): Promise<void> {
    console.log('[open-jj] refreshPrInfo called, githubInfo:', this._githubInfo);

    if (!this._githubInfo) {
      console.log('[open-jj] No GitHub info, skipping PR fetch');
      return;
    }

    const normalizeBookmarkName = (name: string): string => {
      const withoutConflict = name.endsWith('*') ? name.slice(0, -1) : name;
      const atIndex = withoutConflict.indexOf('@');
      return atIndex === -1 ? withoutConflict : withoutConflict.slice(0, atIndex);
    };

    const candidateBookmarks = new Set<string>();
    for (const bookmark of this._bookmarks) {
      const normalized = normalizeBookmarkName(bookmark.name);
      if (normalized) {
        candidateBookmarks.add(normalized);
      }
    }

    for (const change of this._log) {
      for (const name of change.bookmarks) {
        const normalized = normalizeBookmarkName(name);
        if (normalized) {
          candidateBookmarks.add(normalized);
        }
      }
    }

    const trackedBookmarks = Array.from(candidateBookmarks);

    console.log('[open-jj] Bookmark candidates for PR fetch:', trackedBookmarks);

    if (trackedBookmarks.length === 0) {
      console.log('[open-jj] No bookmark candidates, skipping PR fetch');
      return;
    }

    try {
      const prInfoMap = await this._githubService.getPullRequestsForBranches(
        this._githubInfo.owner,
        this._githubInfo.repo,
        trackedBookmarks
      );

      console.log('[open-jj] PR info fetched:', prInfoMap.size, 'PRs found');
      this._prInfo = prInfoMap;
      // Fire change event to update UI with PR info
      this._onDidChange.fire();
    } catch (error) {
      console.error('[open-jj] Error fetching PR info:', error);
    }
  }

  /**
   * Initialize a new jj repository
   */
  async init(withGit: boolean): Promise<boolean> {
    const result = await this.cli.init(withGit);
    if (result.success) {
      await this.refresh({ refreshPrInfo: true });
    }
    return result.success;
  }

  /**
   * Create a new change
   */
  async newChange(message?: string, revision?: string): Promise<boolean> {
    const result = await this.cli.new(message, revision);
    if (result.success) {
      await this.refresh();
    }
    return result.success;
  }

  /**
   * Describe (set message for) a change
   */
  async describe(revision: string, message: string): Promise<boolean> {
    const result = await this.cli.describe(revision, message);
    if (result.success) {
      await this.refresh();
    }
    return result.success;
  }

  /**
   * Squash a change into its parent
   */
  async squash(revision?: string, options?: { ignoreImmutable?: boolean }): Promise<boolean> {
    const result = await this.cli.squash(revision, options);
    if (result.success) {
      await this.refresh();
    }
    return result.success;
  }

  /**
   * Edit a change (make it the working copy)
   */
  async edit(revision: string, options?: { ignoreImmutable?: boolean }): Promise<boolean> {
    const result = await this.cli.edit(revision, options);
    if (result.success) {
      await this.refresh();
    }
    return result.success;
  }

  /**
   * Abandon a change
   */
  async abandon(revision: string, options?: { ignoreImmutable?: boolean }): Promise<boolean> {
    const result = await this.cli.abandon(revision, options);
    if (result.success) {
      await this.refresh();
    }
    return result.success;
  }

  /**
   * Restore a file
   */
  async restore(filePath: string): Promise<boolean> {
    const result = await this.cli.restore(filePath);
    if (result.success) {
      await this.refresh();
    }
    return result.success;
  }

  /**
   * Rebase a change onto a new parent
   */
  async rebase(revision: string, destination: string, options?: { ignoreImmutable?: boolean }): Promise<boolean> {
    const result = await this.cli.rebase(revision, destination, options);
    if (result.success) {
      await this.refresh();
    }
    return result.success;
  }

  /**
   * Move files from one change to another
   */
  async moveFiles(fromRevision: string, toRevision: string, paths: string[], options?: { ignoreImmutable?: boolean }): Promise<boolean> {
    const result = await this.cli.moveFiles(fromRevision, toRevision, paths, options);
    if (result.success) {
      await this.refresh();
    }
    return result.success;
  }

  /**
   * Get diff for a file or the whole working copy
   */
  async diff(filePath?: string): Promise<string> {
    return this.cli.diff(filePath);
  }

  /**
   * Get files changed in a specific revision
   */
  async getFilesForRevision(revision: string, includeConflicts = false): Promise<FileChange[]> {
    return this.cli.showFiles(revision, includeConflicts);
  }

  /**
   * Get file content from parent revision
   */
  async getOriginalFileContent(relativePath: string, revision?: string): Promise<string | null> {
    return this.cli.catFile(relativePath, revision);
  }

  /**
   * Create a bookmark
   */
  async createBookmark(name: string, revision?: string): Promise<boolean> {
    const result = await this.cli.bookmarkCreate(name, revision);
    if (result.success) {
      await this.refresh();
    }
    return result.success;
  }

  /**
   * Set (move) a bookmark
   */
  async setBookmark(name: string, revision: string): Promise<boolean> {
    const result = await this.cli.bookmarkSet(name, revision);
    if (result.success) {
      await this.refresh();
    }
    return result.success;
  }

  /**
   * Delete a bookmark
   */
  async deleteBookmark(name: string): Promise<boolean> {
    const result = await this.cli.bookmarkDelete(name);
    if (result.success) {
      await this.refresh();
    }
    return result.success;
  }

  /**
   * Push a bookmark to remote
   */
  async pushBookmark(name: string): Promise<CommandResult> {
    const result = await this.cli.gitPush(name);
    if (result.success) {
      await this.refresh({ refreshPrInfo: true });
      return result;
    }

    const shouldAllowNew = result.stderr?.includes('Refusing to create new remote bookmark');
    if (!shouldAllowNew) {
      return result;
    }

    const bookmark = this._bookmarks.find((b) => !b.isRemote && b.name === name);
    if (!bookmark) {
      return result;
    }

    const retry = await this.cli.gitPushNamed(name, bookmark.changeId);
    if (retry.success) {
      await this.refresh({ refreshPrInfo: true });
    }
    if (retry.stderr?.includes('Bookmark already exists')) {
      const trackResult = await this.cli.bookmarkTrack(`${name}@origin`);
      if (trackResult.success) {
        const pushResult = await this.cli.gitPush(name);
        if (pushResult.success) {
          await this.refresh({ refreshPrInfo: true });
        }
        return pushResult;
      }
      return trackResult;
    }
    return retry;
  }

  /**
   * Fetch from remote
   */
  async fetch(remote?: string): Promise<boolean> {
    const result = await this.cli.gitFetch(remote);
    if (result.success) {
      await this.refresh({ refreshPrInfo: true });
    }
    return result.success;
  }

  /**
   * Get the remote URL (origin)
   */
  async getRemoteUrl(): Promise<string | null> {
    return this.cli.getRemoteUrl();
  }

  /**
   * Authenticate with GitHub
   */
  async authenticateGitHub(): Promise<boolean> {
    return this._githubService.authenticate();
  }

  /**
   * Check if GitHub is authenticated
   */
  async isGitHubAuthenticated(): Promise<boolean> {
    const session = await this._githubService.getSession();
    return session !== null;
  }

  /**
   * Get the absolute path for a relative file path
   */
  getAbsolutePath(relativePath: string): string {
    return path.join(this._rootPath, relativePath);
  }

  /**
   * Get the relative path for an absolute file path
   */
  getRelativePath(absolutePath: string): string {
    return path.relative(this._rootPath, absolutePath);
  }

  dispose(): void {
    this._disposables.forEach((d) => d.dispose());
    this._onDidChange.dispose();
  }
}

/**
 * Create a Repository from a detection result
 */
export async function createRepository(
  workspacePath: string,
  detection: DetectionResult
): Promise<Repository | null> {
  if (!detection.hasJJ || !detection.repositoryInfo) {
    return null;
  }

  const repo = new Repository(
    workspacePath,
    detection.repositoryInfo.rootPath,
    detection.repositoryInfo.hasGit,
    detection.repositoryInfo.isColocated
  );

  // Initialize GitHub info asynchronously
  await repo.initGitHubInfo();

  return repo;
}
