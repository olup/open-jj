import * as vscode from 'vscode';
import { Repository } from '../repository/repository';
import { Change, Bookmark, FileChange, PullRequestInfo, PullRequestState, LogRow } from '../jj/types';
import { GraphInfo, computeDistantParents, computeGraph } from './graphLayout';
import { PadLine } from './renderDag';

type SerializedChange = Omit<Change, 'authorTimestamp' | 'committerTimestamp'> & {
  authorTimestamp: string;
  committerTimestamp: string;
};

type WebviewState = {
  hasRepository: boolean;
  changes: SerializedChange[];
  workingCopyFiles: FileChange[];
  expandedCommitIds: string[];
  changeFiles: Record<string, FileChange[]>;
  graphInfo: Record<string, GraphInfo>;
  prInfo: Record<string, PullRequestInfo>;
  bookmarks: Bookmark[];
};

interface ChangeFilesEntry {
  files: FileChange[];
  version: number;
}

const GRAPH_COL_WIDTH = 12;

class ChangeFilesCache {
  private entries = new Map<string, ChangeFilesEntry>();
  private inflight = new Map<string, Promise<FileChange[]>>();
  private version = 0;

  invalidateAll(): void {
    this.version += 1;
  }

  invalidate(changeIds: string[]): void {
    for (const changeId of changeIds) {
      this.entries.delete(changeId);
      this.inflight.delete(changeId);
    }
  }

  get(changeId: string): FileChange[] | undefined {
    return this.entries.get(changeId)?.files;
  }

  isStale(changeId: string): boolean {
    const entry = this.entries.get(changeId);
    if (!entry) {
      return true;
    }
    return entry.version < this.version;
  }

  ensure(
    changeId: string,
    fetcher: () => Promise<FileChange[]>,
    forceFetch: boolean
  ): Promise<FileChange[]> {
    const entry = this.entries.get(changeId);
    const needsFetch = forceFetch || !entry || entry.version < this.version;
    if (!needsFetch && entry) {
      return Promise.resolve(entry.files);
    }

    const inflight = this.inflight.get(changeId);
    if (inflight) {
      return inflight;
    }

    const requestVersion = this.version;
    const promise = fetcher()
      .then((files) => {
        this.entries.set(changeId, { files, version: requestVersion });
        return files;
      })
      .finally(() => {
        const current = this.inflight.get(changeId);
        if (current === promise) {
          this.inflight.delete(changeId);
        }
      });

    this.inflight.set(changeId, promise);
    return promise;
  }
}

/**
 * WebviewView provider for the JJ log - provides custom styled view
 */
export class LogWebviewProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = 'open-jj.logWebview';

  private _view?: vscode.WebviewView;
  private _repository: Repository | null = null;
  private _disposables: vscode.Disposable[] = [];
  private _expandedChanges: Set<string> = new Set();
  private _changeFiles = new ChangeFilesCache();
  private _hasRendered = false;

  constructor(private readonly _extensionUri: vscode.Uri) {}

  setRepository(repository: Repository | null): void {
    this._repository = repository;

    if (repository) {
      repository.onDidChange(() => this.refresh(), null, this._disposables);
    }

    this.refresh();
  }

  public resolveWebviewView(
    webviewView: vscode.WebviewView,
    _context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ): void {
    this._view = webviewView;
    this._hasRendered = false;

    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this._extensionUri],
    };

    webviewView.webview.onDidReceiveMessage(
      async (message) => {
        await this._handleMessage(message);
      },
      null,
      this._disposables
    );

    this.refresh();
  }

  public refresh(): void {
    this._changeFiles.invalidateAll();
    this._prefetchExpandedChanges(true);
    this._render();
  }

  private _render(): void {
    if (!this._view) {
      return;
    }
    if (!this._hasRendered) {
      this._view.webview.html = this._getHtmlContent();
      this._hasRendered = true;
      return;
    }
    this._postState();
  }

  private _prefetchExpandedChanges(forceFetch: boolean): void {
    if (!this._repository || this._expandedChanges.size === 0) {
      return;
    }

    const changeIds = Array.from(this._expandedChanges);
    this._prefetchChanges(changeIds, forceFetch);
  }

  private _prefetchChanges(changeIds: string[], forceFetch: boolean): void {
    if (!this._repository || changeIds.length === 0) {
      return;
    }

    const pending: Promise<void>[] = [];
    for (const changeId of changeIds) {
      const change = this._findChangeByCommitId(changeId);
      if (!change || change.isWorkingCopy) {
        continue;
      }

      pending.push(
        this._changeFiles
          .ensure(changeId, () => this._repository!.getFilesForRevision(change.commitIdShort, change.hasConflict), forceFetch)
          .then(() => undefined)
      );
    }

    if (pending.length > 0) {
      Promise.all(pending).then(() => this._postState());
    }
  }

  private _serializeChange(change: Change): SerializedChange {
    return {
      ...change,
      authorTimestamp: change.authorTimestamp.toISOString(),
      committerTimestamp: change.committerTimestamp.toISOString(),
    };
  }

  private _getWebviewState(): WebviewState {
    if (!this._repository) {
      return {
        hasRepository: false,
        changes: [],
        workingCopyFiles: [],
        expandedCommitIds: [],
        changeFiles: {},
        graphInfo: {},
        prInfo: {},
        bookmarks: [],
      };
    }

    const changes = this._repository.log;
    const fullChanges = this._repository.fullLog ?? changes;
    const { parentOverrides, dashedParents } = computeDistantParents(changes, fullChanges);
    const graphInfoMap = computeGraph(changes, { parentOverrides, dashedParents });
    const graphInfo: Record<string, GraphInfo> = {};
    for (const [commitId, info] of graphInfoMap.entries()) {
      graphInfo[commitId] = info;
    }

    const changeFiles: Record<string, FileChange[]> = {};
    for (const commitId of this._expandedChanges) {
      const files = this._changeFiles.get(commitId);
      if (files) {
        changeFiles[commitId] = files;
      }
    }

    const prInfo: Record<string, PullRequestInfo> = {};
    for (const [name, info] of this._repository.prInfo.entries()) {
      prInfo[name] = info;
    }

    return {
      hasRepository: true,
      changes: changes.map((change) => this._serializeChange(change)),
      workingCopyFiles: this._repository.changedFiles ?? [],
      expandedCommitIds: Array.from(this._expandedChanges),
      changeFiles,
      graphInfo,
      prInfo,
      bookmarks: this._repository.bookmarks ?? [],
    };
  }

  private _postState(): void {
    if (!this._view) {
      return;
    }
    void this._view.webview.postMessage({ type: 'state', state: this._getWebviewState() });
  }

  private async _handleMessage(message: { command: string; [key: string]: unknown }): Promise<void> {
    if (!this._repository) {
      if (message.command === 'ready') {
        this._postState();
      } else if (message.command === 'init') {
        vscode.commands.executeCommand('open-jj.init');
      } else if (message.command === 'initWithGit') {
        vscode.commands.executeCommand('open-jj.initWithGit');
      }
      return;
    }
    const repo = this._repository;

    try {
    switch (message.command) {
      case 'toggleChange':
        const commitId = message.commitId as string;
        if (this._expandedChanges.has(commitId)) {
          this._expandedChanges.delete(commitId);
        } else {
          this._expandedChanges.add(commitId);
          // Load files for this change if not working copy
          const change = this._findChangeByCommitId(commitId);
          if (change && !change.isWorkingCopy) {
            this._changeFiles
              .ensure(commitId, () => repo.getFilesForRevision(change.commitIdShort, change.hasConflict), false)
              .then(() => this._postState());
          }
        }
        this._postState();
        break;

      case 'editChange':
        vscode.commands.executeCommand('open-jj.edit', { change: this._findChange(message.changeId as string) });
        break;

      case 'manageBookmarks':
        vscode.commands.executeCommand('open-jj.bookmark.manage', { change: this._findChange(message.changeId as string) });
        break;

      case 'describeChange':
        vscode.commands.executeCommand('open-jj.describe', this._findChange(message.changeId as string));
        break;

      case 'squashChange':
        vscode.commands.executeCommand('open-jj.squash', this._findChange(message.changeId as string));
        break;

      case 'abandonChange':
        vscode.commands.executeCommand('open-jj.abandon', { change: this._findChange(message.changeId as string) });
        break;

      case 'openFile':
        const filePath = message.path as string;
        const uri = vscode.Uri.file(repo.getAbsolutePath(filePath));
        vscode.window.showTextDocument(uri);
        break;

      case 'openDiff':
        const diffPath = message.path as string;
        const revision = message.revision as string | undefined;
        const absPath = repo.getAbsolutePath(diffPath);
        const rightUri = vscode.Uri.file(absPath);
        const leftUri = rightUri.with({
          scheme: 'jj-original',
          query: JSON.stringify({ path: absPath, revision }),
        });
        vscode.commands.executeCommand('vscode.diff', leftUri, rightUri, `${diffPath} (diff)`);
        break;

      case 'newChange':
        vscode.commands.executeCommand('open-jj.new');
        break;

      case 'newChangeFrom':
        vscode.commands.executeCommand('open-jj.new', { revision: message.changeId });
        break;

      case 'refresh':
        await repo.refresh({ refreshPrInfo: true });
        break;

      case 'ready':
        this._postState();
        break;

      case 'init':
        vscode.commands.executeCommand('open-jj.init');
        break;

      case 'initWithGit':
        vscode.commands.executeCommand('open-jj.initWithGit');
        break;


      case 'rebaseChange':
        const sourceId = message.sourceChangeId as string;
        const targetId = message.targetChangeId as string;
        vscode.commands.executeCommand('open-jj.rebase', { sourceChangeId: sourceId, targetChangeId: targetId });
        break;

      case 'moveBookmark':
        const bookmarkName = message.bookmarkName as string;
        const bookmarkTargetId = message.targetChangeId as string;
        const moveSuccess = await repo.setBookmark(bookmarkName, bookmarkTargetId);
        if (!moveSuccess) {
          vscode.window.showErrorMessage(`Failed to move bookmark "${bookmarkName}"`);
        }
        break;

      case 'moveFile':
        const moveFilePath = message.filePath as string;
        const fromChange = message.fromChangeId as string;
        const toChange = message.targetChangeId as string;
        vscode.commands.executeCommand('open-jj.moveFile', { filePath: moveFilePath, fromChangeId: fromChange, toChangeId: toChange });
        const fromCommitIds = this._findCommitsByChangeId(fromChange).map((c) => c.commitId);
        const toCommitIds = this._findCommitsByChangeId(toChange).map((c) => c.commitId);
        const commitIds = Array.from(new Set([...fromCommitIds, ...toCommitIds]));
        if (commitIds.length > 0) {
          this._changeFiles.invalidate(commitIds);
          this._prefetchChanges(commitIds, true);
        }
        break;

      case 'pushBookmark':
        const pushName = message.bookmarkName as string;
        const pushResult = await repo.pushBookmark(pushName);
        if (pushResult.success) {
          vscode.window.showInformationMessage(`Pushed bookmark "${pushName}"`);
        } else {
          const details = pushResult.stderr?.trim();
          vscode.window.showErrorMessage(`Failed to push bookmark "${pushName}"${details ? `: ${details}` : ''}`);
        }
        break;

      case 'deleteBookmark':
        const deleteName = message.bookmarkName as string;
        const deleteSuccess = await repo.deleteBookmark(deleteName);
        if (!deleteSuccess) {
          vscode.window.showErrorMessage(`Failed to delete bookmark "${deleteName}"`);
        }
        break;

      case 'createPullRequest':
        const prBookmark = message.bookmarkName as string;
        const remoteUrl = await repo.getRemoteUrl();
        if (remoteUrl) {
          const githubUrl = this._convertToGitHubPrUrl(remoteUrl, prBookmark);
          if (githubUrl) {
            vscode.env.openExternal(vscode.Uri.parse(githubUrl));
          } else {
            vscode.window.showErrorMessage('Could not determine GitHub URL for this repository');
          }
        } else {
          vscode.window.showErrorMessage('No remote URL found');
        }
        break;

      case 'authenticateGitHub':
        const authenticated = await repo.authenticateGitHub();
        if (authenticated) {
          vscode.window.showInformationMessage('GitHub authenticated! Refreshing PR status...');
          await repo.refreshPrInfo();
        } else {
          vscode.window.showErrorMessage('GitHub authentication failed');
        }
        break;

      case 'pushAndCreatePr':
        const pushPrBookmark = message.bookmarkName as string;
        const pushPrResult = await repo.pushBookmark(pushPrBookmark);
        if (pushPrResult.success) {
          vscode.window.showInformationMessage(`Pushed bookmark "${pushPrBookmark}"`);
          // Now open PR creation page
          const pushPrRemoteUrl = await repo.getRemoteUrl();
          if (pushPrRemoteUrl) {
            const pushPrGitHubUrl = this._convertToGitHubPrUrl(pushPrRemoteUrl, pushPrBookmark);
            if (pushPrGitHubUrl) {
              vscode.env.openExternal(vscode.Uri.parse(pushPrGitHubUrl));
            } else {
              vscode.window.showErrorMessage('Could not determine GitHub URL for this repository');
            }
          } else {
            vscode.window.showErrorMessage('No remote URL found');
          }
        } else {
          const details = pushPrResult.stderr?.trim();
          vscode.window.showErrorMessage(`Failed to push bookmark "${pushPrBookmark}"${details ? `: ${details}` : ''}`);
        }
        break;

      case 'openUrl':
        const urlToOpen = message.url as string;
        vscode.env.openExternal(vscode.Uri.parse(urlToOpen));
        break;
    }
    } catch (error) {
      vscode.window.showErrorMessage(`Error: ${error}`);
    }
  }

  private _findChange(changeId: string): Change | undefined {
    return this._repository?.log.find(c => c.changeId === changeId || c.changeIdShort === changeId);
  }

  private _findChangeByCommitId(commitId: string): Change | undefined {
    return this._repository?.log.find(c => c.commitId === commitId || c.commitIdShort === commitId);
  }

  private _findCommitsByChangeId(changeId: string): Change[] {
    return this._repository?.log.filter(c => c.changeId === changeId || c.changeIdShort === changeId) ?? [];
  }

  private _convertToGitHubPrUrl(remoteUrl: string, branchName: string): string | null {
    // Convert git remote URL to GitHub PR creation URL
    // Handles: git@github.com:owner/repo.git, https://github.com/owner/repo.git
    let match = remoteUrl.match(/github\.com[:/]([^/]+)\/([^/]+?)(\.git)?$/);
    if (match) {
      const owner = match[1];
      const repo = match[2];
      return `https://github.com/${owner}/${repo}/compare/${branchName}?expand=1`;
    }
    return null;
  }

  private _getHtmlContent(): string {
    if (!this._view) {
      return '';
    }

    const webview = this._view.webview;
    const nonce = this._getNonce();

    const codiconsUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'resources', 'codicons', 'codicon.css')
    );
    const scriptUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'resources', 'webview', 'webview.js')
    );
    const styleUri = webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'resources', 'webview', 'webview.css')
    );

    const stateJson = JSON.stringify(this._getWebviewState()).replace(/</g, '\u003c');

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${webview.cspSource} https: data:; style-src ${webview.cspSource}; font-src ${webview.cspSource}; script-src 'nonce-${nonce}'; connect-src ${webview.cspSource};">
  <link href="${codiconsUri}" rel="stylesheet" />
  <link href="${styleUri}" rel="stylesheet" />
</head>
<body>
  <div id="root"></div>
  <script nonce="${nonce}">window.__INITIAL_STATE__ = ${stateJson};</script>
  <script type="module" nonce="${nonce}" src="${scriptUri}"></script>
</body>
</html>`;
  }

  private _renderChange(
    change: Change,
    workingCopyFiles: FileChange[],
    changeFiles: ChangeFilesCache,
    index: number,
    total: number,
    graphInfo?: GraphInfo
  ): string {
    const isExpanded = this._expandedChanges.has(change.commitId);
    const isWorkingCopy = change.isWorkingCopy;
    const files = isWorkingCopy ? workingCopyFiles : (changeFiles.get(change.commitId) ?? []);
    const hasFiles = files.length > 0 || !change.isEmpty;

    // Get bookmarks with their types
    const localBookmarks = change.bookmarks.filter(b => !b.includes('@'));
    const remoteBookmarks = change.bookmarks.filter(b => b.includes('@'));

    const isFirst = index === 0;
    const isLast = index === total - 1;
    const graphMarkup = this._renderNodeSvg(change, isFirst, isLast, graphInfo);
    const hasDescription = change.description && change.description !== '(no description)';
    const descriptionHtml = hasDescription
      ? `<span class="change-desc">${isWorkingCopy ? '@ ' : ''}${this._escapeHtml(change.description)}</span>`
      : `<span class="change-desc placeholder">${isWorkingCopy ? '@ ' : ''}</span>
         <button class="describe-btn" data-action="describe-change" data-change-id="${change.changeId}" title="Describe change">Describe</button>`;

    return `
      <div class="change ${isWorkingCopy ? 'working-copy' : ''} ${change.hasConflict ? 'conflict' : ''}" data-change-id="${change.changeId}" data-commit-id="${change.commitId}" data-parent-ids='${JSON.stringify(change.parentIds)}'>
        <div class="change-header" data-change-id="${change.changeId}" data-commit-id="${change.commitId}" data-working-copy="${isWorkingCopy}">
          <span class="graph-node" draggable="true" data-drag-type="change" data-change-id="${change.changeId}" title="Double-click to edit change">
            ${graphMarkup}
          </span>
          <span class="expand-icon codicon ${hasFiles ? '' : 'hidden'} ${isExpanded ? 'codicon-chevron-down' : 'codicon-chevron-right'}"></span>
          ${descriptionHtml}
          ${this._renderBookmarks(localBookmarks, remoteBookmarks, change.changeId)}
          <span class="change-actions">
            <button class="icon-button small" data-action="new-change-from" data-change-id="${change.changeId}" title="New change from here">
              <span class="codicon codicon-add"></span>
            </button>
          </span>
        </div>
        ${isExpanded && files.length > 0 ? this._renderFiles(files, isWorkingCopy ? undefined : change.commitIdShort, change.changeId, graphInfo) : ''}
      </div>
    `;
  }

  private _renderNodeSvg(change: Change, isFirst: boolean, isLast: boolean, graphInfo?: GraphInfo): string {
    const colWidth = GRAPH_COL_WIDTH;
    const height = 28;
    const nodeSize = 4;
    const cy = height / 2;
    const linkY = height;

    // Use graph info if available
    const nodeColumn = graphInfo?.nodeColumn ?? 0;
    const maxColumns = graphInfo?.maxColumns ?? 1;
    const width = Math.max(maxColumns * colWidth + colWidth, 16);
    const nodeX = nodeColumn * colWidth + colWidth / 2;

    // Determine colors
    const lineColor = 'var(--vscode-descriptionForeground)';
    const nodeStroke = change.isWorkingCopy
      ? 'var(--vscode-textLink-foreground)'
      : change.hasConflict
        ? 'var(--vscode-gitDecoration-conflictingResourceForeground)'
        : 'var(--vscode-descriptionForeground)';
    const nodeFill = change.isWorkingCopy
      ? 'var(--vscode-textLink-foreground)'
      : 'var(--vscode-editor-background)';

    let svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;

    const preNodeLine = graphInfo?.preNodeLine ?? [];
    const postNodeLine = graphInfo?.postNodeLine ?? [];
    const parentColumns = graphInfo?.parentColumns ?? [];
    const dashedParentColumns = new Set(graphInfo?.dashedParentColumns ?? []);
    const dashedRanges = Array.from(dashedParentColumns).map((parentCol) => {
      const min = Math.min(nodeColumn, parentCol);
      const max = Math.max(nodeColumn, parentCol);
      return { min, max };
    });

    const isDashedColumn = (col: number) =>
      dashedRanges.some((range) => col > range.min && col < range.max);

    for (let col = 0; col < maxColumns; col++) {
      const x = col * colWidth + colWidth / 2;
      if (preNodeLine[col] !== undefined && preNodeLine[col] !== PadLine.Blank) {
        svg += `<line x1="${x}" y1="0" x2="${x}" y2="${cy}" stroke="${lineColor}" stroke-width="1"/>`;
      }
      const hasStraightParent = graphInfo?.parentColumns?.includes(nodeColumn) ?? false;
      if (col === nodeColumn && !hasStraightParent) {
        continue;
      }
      if (postNodeLine[col] !== undefined && postNodeLine[col] !== PadLine.Blank) {
        svg += `<line x1="${x}" y1="${cy}" x2="${x}" y2="${height}" stroke="${lineColor}" stroke-width="1"/>`;
      }
    }

    for (const parentCol of parentColumns) {
      if (parentCol === nodeColumn) {
        continue;
      }
      const parentX = parentCol * colWidth + colWidth / 2;
      const dashed = dashedParentColumns.has(parentCol) ? ' stroke-dasharray="3 3"' : '';
      const midY = (cy + linkY) / 2;
      svg += `<path d="M ${nodeX} ${cy} C ${nodeX} ${midY} ${parentX} ${midY} ${parentX} ${linkY}" stroke="${lineColor}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${dashed}/>`;
    }

    // Draw node shape on top of lines
    if (change.isImmutable) {
      const d = Math.max(3, nodeSize);
      svg += `<polygon points="${nodeX},${cy - d} ${nodeX + d},${cy} ${nodeX},${cy + d} ${nodeX - d},${cy}" fill="${nodeFill}" stroke="${nodeStroke}" stroke-width="1.5"/>`;
    } else {
      svg += `<circle cx="${nodeX}" cy="${cy}" r="${nodeSize}" fill="${nodeFill}" stroke="${nodeStroke}" stroke-width="1.5"/>`;
    }

    svg += '</svg>';
    return svg;
  }

  private _renderGraphRow(row: LogRow): string {
    const label = row.isElided ? '' : (row.label ? this._escapeHtml(row.label) : '');
    if (!label) {
      return row.isElided ? `
        <div class="graph-row elided">
          <span class="graph-prefix">${this._renderElidedSvg(row.graphPrefix, true)}</span>
        </div>
      ` : '';
    }
    const rowClass = row.isElided ? 'graph-row elided' : 'graph-row';
    const graphCell = row.isElided ? this._renderElidedSvg(row.graphPrefix, true) : '';
    return `
      <div class="${rowClass}">
        <span class="graph-prefix">${graphCell}</span>
        ${label ? `<span class="graph-row-label">${label}</span>` : ''}
      </div>
    `;
  }

  private _renderElidedSvg(graphPrefix: string, verticalOnly: boolean): string {
    const colWidth = GRAPH_COL_WIDTH;
    const height = 20;
    const cy = height / 2;
    const cellWidth = 2;
    const chars = Array.from(graphPrefix ?? '');
    const columns = Math.max(1, Math.ceil(chars.length / cellWidth));
    const width = Math.max(columns * colWidth + colWidth, 16);

    let svg = `<svg class="graph-elided-svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`;
    for (let col = 0; col < columns; col++) {
      const ch = chars[col * cellWidth] ?? ' ';
      if (ch !== ' ') {
        const x = col * colWidth + colWidth / 2;
        svg += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" class="graph-elided-line"/>`;
      }
    }
    if (!verticalOnly) {
      svg += `<line x1="0" y1="${cy}" x2="${width}" y2="${cy}" class="graph-elided-line"/>`;
    }
    svg += '</svg>';
    return svg;
  }

  private _renderBookmarks(local: string[], remote: string[], changeId: string): string {
    const badges: string[] = [];
    const prInfo = this._repository?.prInfo ?? new Map();
    const allBookmarks = this._repository?.bookmarks ?? [];

    for (const name of local) {
      // Check if bookmark name has asterisk (conflicted) - jj adds this
      const isConflicted = name.endsWith('*');
      const cleanName = isConflicted ? name.slice(0, -1) : name;

      // Look up full bookmark info from repository
      const bookmarkInfo = allBookmarks.find(b => b.name === cleanName && !b.isRemote);
      const isTracked = bookmarkInfo?.isTracked ?? false;

      // Get PR info for this bookmark
      const pr = prInfo.get(cleanName);

      // Determine badge class based on status
      // Priority: merged > pr-open > tracked > local
      let badgeClass = 'badge local';
      let tooltip = 'Local bookmark (not pushed)';

      if (pr) {
        if (pr.state === 'merged') {
          badgeClass = 'badge merged';
          tooltip = `PR #${pr.number} merged`;
        } else if (pr.state === 'open' || pr.state === 'draft') {
          badgeClass = pr.state === 'draft' ? 'badge pr-draft' : 'badge pr-open';
          tooltip = `PR #${pr.number} ${pr.state}`;
        } else if (pr.state === 'closed') {
          badgeClass = 'badge pr-closed';
          tooltip = `PR #${pr.number} closed`;
        }
      } else if (isTracked) {
        badgeClass = 'badge tracked';
        tooltip = 'Pushed to remote (no PR)';
      }

      const isDiverged = isConflicted || bookmarkInfo?.isConflicted;
      if (isDiverged) {
        tooltip += ' - DIVERGED from remote';
      }

      const safeName = this._escapeHtml(cleanName);
      const displayName = cleanName;
      const conflictIcon = isDiverged
        ? '<span class="codicon codicon-cloud badge-cloud-icon diverged" title="Diverged"></span>'
        : '';
      const syncedIcon = isTracked
        ? '<span class="codicon codicon-cloud badge-cloud-icon" title="Synced"></span>'
        : '';
      const prIcon = pr ? '<span class="codicon codicon-git-merge badge-pr-icon" title="Pull request"></span>' : '';
      const prUrl = pr?.url ? this._escapeHtml(pr.url) : '';
      const clickableClass = prUrl ? ' clickable' : '';
      badges.push(`<span class="${badgeClass}${clickableClass}" draggable="true" data-drag-type="bookmark" data-bookmark-name="${safeName}" data-change-id="${changeId}" data-tracked="${isTracked}" data-pr-url="${prUrl}" title="${tooltip}">${this._escapeHtml(displayName)}${prIcon}${syncedIcon}${conflictIcon}</span>`);
    }

    // Show remote-only bookmarks (not draggable - can't move remote-only)
    for (const name of remote) {
      const localName = name.split('@')[0];
      if (!local.includes(localName) && !local.includes(localName + '*')) {
        const cloudIcon = '<span class="codicon codicon-cloud badge-cloud-icon" title="Remote"></span>';
        badges.push(`<span class="badge remote" title="Remote only">${this._escapeHtml(name)}${cloudIcon}</span>`);
      }
    }

    if (badges.length === 0) return '';
    return `<span class="bookmarks" data-action="manage-bookmarks" data-change-id="${changeId}" title="Manage Bookmarks">${badges.join('')}</span>`;
  }

  private _renderFiles(files: FileChange[], revision?: string, changeId?: string, graphInfo?: GraphInfo): string {
    const gutter = graphInfo ? this._renderFilesGutterSvg(graphInfo) : { svg: '', width: 0 };
    const gutterStyle = gutter.width > 0 ? ` style="width: ${gutter.width}px"` : '';
    const listStyle = gutter.width > 0 ? ` style="margin-left: ${gutter.width + 6}px"` : '';
    return `
      <div class="files">
        <div class="files-gutter"${gutterStyle}>${gutter.svg}</div>
        <div class="files-list"${listStyle}>
          ${files.map(file => `
            <div class="file" draggable="true" data-drag-type="file" data-file-path="${this._escapeHtml(file.path)}" data-change-id="${changeId || ''}" title="Drag to move to another change">
              <span class="file-icon ${file.status}"><span class="codicon ${this._getFileIcon(file.status)}"></span></span>
              <span class="file-path" data-action="open-diff" data-file-path="${this._escapeHtml(file.path)}" data-revision="${revision ?? ''}">
                ${this._escapeHtml(file.path)}
              </span>
              <button class="icon-button small" data-action="open-file" data-file-path="${this._escapeHtml(file.path)}" title="Open File">
                <span class="codicon codicon-go-to-file"></span>
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  private _renderFilesGutterSvg(graphInfo: GraphInfo): { svg: string; width: number } {
    const colWidth = GRAPH_COL_WIDTH;
    const activeColumns = graphInfo.activeColumns;
    const nodeColumn = graphInfo.nodeColumn;
    const lastActiveCol = activeColumns.reduce((last, isActive, index) => {
      return isActive ? index : last;
    }, nodeColumn);
    const widthColumns = Math.max(lastActiveCol, nodeColumn) + 1;
    const width = Math.max(widthColumns * colWidth + colWidth, 16);
    const hasStraightParent = graphInfo.parentColumns?.includes(nodeColumn) ?? false;
    const hasBottomLine = hasStraightParent && (graphInfo.hasBottomLine ?? graphInfo.hasParents ?? true);
    const lineColor = 'var(--vscode-descriptionForeground)';

    let svg = `<svg class="graph-file-svg" width="${width}" height="100%" viewBox="0 0 ${width} 1" preserveAspectRatio="none">`;
    for (let col = 0; col < activeColumns.length; col++) {
      if (!activeColumns[col]) continue;
      if (col === nodeColumn && !hasBottomLine) continue;
      const x = col * colWidth + colWidth / 2;
      svg += `<line x1="${x}" y1="0" x2="${x}" y2="1" stroke="${lineColor}" stroke-width="1"/>`;
    }
    svg += '</svg>';
    return { svg, width };
  }

  private _getFileIcon(status: string): string {
    switch (status) {
      case 'added': return 'codicon-diff-added';
      case 'modified': return 'codicon-diff-modified';
      case 'deleted': return 'codicon-diff-removed';
      case 'renamed': return 'codicon-diff-renamed';
      case 'copied': return 'codicon-copy';
      case 'conflict': return 'codicon-warning';
      default: return 'codicon-diff-modified';
    }
  }

  private _escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  private _getNonce(): string {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let nonce = '';
    for (let i = 0; i < 32; i += 1) {
      nonce += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return nonce;
  }


  dispose(): void {
    this._disposables.forEach(d => d.dispose());
  }
}
