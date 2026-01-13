import { spawn } from 'child_process';
import * as vscode from 'vscode';
import {
  Change,
  FileChange,
  FileStatus,
  Bookmark,
  WorkingCopyStatus,
  LogRow,
  CommandResult,
  CommandOptions,
} from './types';
import { parseLogOutput } from './logParser';

/**
 * Template for parsing jj log output
 * Uses \x00 as field separator for reliable parsing
 */
const LOG_TEMPLATE_CORE = `
change_id ++ "\\x00" ++
change_id.short() ++ "\\x00" ++
commit_id ++ "\\x00" ++
commit_id.short() ++ "\\x00" ++
if(description, description.first_line(), "(no description)") ++ "\\x00" ++
if(author.name(), author.name(), "") ++ "\\x00" ++
if(author.email(), author.email(), "") ++ "\\x00" ++
author.timestamp() ++ "\\x00" ++
if(committer.name(), committer.name(), "") ++ "\\x00" ++
if(committer.email(), committer.email(), "") ++ "\\x00" ++
committer.timestamp() ++ "\\x00" ++
working_copies ++ "\\x00" ++
if(empty, "true", "false") ++ "\\x00" ++
if(conflict, "true", "false") ++ "\\x00" ++
if(immutable, "true", "false") ++ "\\x00" ++
parents.map(|p| p.commit_id()).join(",") ++ "\\x00" ++
bookmarks.join(",") ++ "\\x00" ++
tags.join(",") ++ "\\x00" ++
git_refs.join(",") ++ "\\n"
`.trim();

const LOG_TEMPLATE = LOG_TEMPLATE_CORE;
const GRAPH_PREFIX_MARKER = '\\x1f';
const LOG_GRAPH_TEMPLATE = `"${GRAPH_PREFIX_MARKER}" ++ ${LOG_TEMPLATE_CORE}`;

/**
 * Wrapper for jj CLI commands
 */
export class JJCli {
  private jjPath: string;
  private workspaceRoot: string;

  constructor(workspaceRoot: string) {
    this.workspaceRoot = workspaceRoot;
    this.jjPath = vscode.workspace.getConfiguration('open-jj').get('path', 'jj');
  }

  /**
   * Execute a jj command
   */
  async execute(args: string[], options?: CommandOptions): Promise<CommandResult> {
    return new Promise((resolve) => {
      const cwd = options?.cwd ?? this.workspaceRoot;
      const timeout = options?.timeout ?? 30000;

      const proc = spawn(this.jjPath, ['--color=never', ...args], {
        cwd,
        env: { ...process.env, ...options?.env },
      });

      let stdout = '';
      let stderr = '';

      proc.stdout.on('data', (data) => {
        stdout += data.toString();
      });

      proc.stderr.on('data', (data) => {
        stderr += data.toString();
      });

      const timer = setTimeout(() => {
        proc.kill();
        resolve({
          success: false,
          stdout,
          stderr: stderr + '\nCommand timed out',
          exitCode: -1,
        });
      }, timeout);

      proc.on('close', (code) => {
        clearTimeout(timer);
        resolve({
          success: code === 0,
          stdout,
          stderr,
          exitCode: code ?? -1,
        });
      });

      proc.on('error', (err) => {
        clearTimeout(timer);
        resolve({
          success: false,
          stdout,
          stderr: err.message,
          exitCode: -1,
        });
      });
    });
  }

  /**
   * Check if jj is available
   */
  async isAvailable(): Promise<boolean> {
    const result = await this.execute(['version']);
    return result.success;
  }

  /**
   * Get jj version
   */
  async getVersion(): Promise<string | null> {
    const result = await this.execute(['version']);
    if (!result.success) {
      return null;
    }
    // Parse "jj 0.x.x" format
    const match = result.stdout.match(/jj\s+([\d.]+)/);
    return match ? match[1] : null;
  }

  /**
   * Initialize a new jj repository
   */
  async init(withGit: boolean = false): Promise<CommandResult> {
    if (withGit) {
      return this.execute(['git', 'init']);
    }
    return this.execute(['init']);
  }

  /**
   * Get the log of changes
   */
  async log(revset: string, limit?: number): Promise<{ changes: Change[]; rows: LogRow[] }> {
    // First get the working copy change ID
    const wcResult = await this.execute(['log', '--no-pager', '-r', '@', '--no-graph', '-T', 'change_id']);
    const workingCopyId = wcResult.success ? wcResult.stdout.trim() : '';
    console.log('[open-jj] working copy change ID:', workingCopyId);

    const baseArgs = ['log', '--no-pager', '-r', revset, '-T', LOG_GRAPH_TEMPLATE];
    const argsWithConfig = ['log', '--no-pager', '-r', revset, '--config', 'ui.graph.style=ascii', '-T', LOG_GRAPH_TEMPLATE];
    if (limit) {
      baseArgs.push('-n', limit.toString());
      argsWithConfig.push('-n', limit.toString());
    }

    let result = await this.execute(argsWithConfig);
    if (!result.success) {
      console.log('[open-jj] log with graph config failed, retrying without config');
      result = await this.execute(baseArgs);
    }
    console.log('[open-jj] log command result:', { success: result.success, stderr: result.stderr, stdoutLength: result.stdout.length });

    if (!result.success) {
      console.error('[open-jj] log command failed:', result.stderr);
      return { changes: [], rows: [] };
    }

    const { changes, rows } = parseLogOutput(result.stdout, workingCopyId);
    console.log('[open-jj] parsed changes:', changes.length);
    return { changes, rows };
  }

  /**
   * Get the current working copy status
   */
  async status(): Promise<WorkingCopyStatus> {
    const [statusResult, logResult] = await Promise.all([
      this.execute(['status']),
      this.execute(['log', '--no-pager', '-r', '@', '--no-graph', '-T', LOG_TEMPLATE]),
    ]);

    const files = this.parseStatusOutput(statusResult.stdout);
    const { changes } = parseLogOutput(logResult.stdout);
    const currentChange = changes[0] ?? null;

    return {
      currentChange,
      files,
      hasConflicts: files.some((f) => f.status === 'conflict'),
    };
  }

  /**
   * Get file diff
   */
  async diff(path?: string, revision?: string): Promise<string> {
    const args = ['diff'];
    if (revision) {
      args.push('-r', revision);
    }
    if (path) {
      args.push(path);
    }

    const result = await this.execute(args);
    return result.stdout;
  }

  /**
   * Get files changed in a specific revision
   */
  async showFiles(revision: string, includeConflicts = false): Promise<FileChange[]> {
    const result = await this.execute(['diff', '--summary', '-r', revision]);
    if (!result.success) {
      return [];
    }
    const files = this.parseStatusOutput(result.stdout);
    if (!includeConflicts) {
      return files;
    }

    const typesResult = await this.execute(['diff', '--types', '-r', revision]);
    if (!typesResult.success) {
      return files;
    }

    const conflictPaths = this.parseConflictTypes(typesResult.stdout);
    if (conflictPaths.length === 0) {
      return files;
    }

    const filesByPath = new Map(files.map((file) => [file.path, file]));
    for (const path of conflictPaths) {
      const existing = filesByPath.get(path);
      if (existing) {
        existing.status = 'conflict';
      } else {
        filesByPath.set(path, { path, status: 'conflict' });
      }
    }

    return Array.from(filesByPath.values());
  }

  /**
   * Get file content from a specific revision (parent of working copy by default)
   */
  async catFile(path: string, revision?: string): Promise<string | null> {
    // Use @- for parent of working copy, or specified revision's parent
    const rev = revision ? `${revision}-` : '@-';
    const result = await this.execute(['file', 'show', '-r', rev, path]);
    if (!result.success) {
      return null;
    }
    return result.stdout;
  }

  /**
   * Create a new change
   */
  async new(message?: string, revision?: string): Promise<CommandResult> {
    const args = ['new'];
    if (revision) {
      args.push('-r', revision);
    }
    if (message) {
      args.push('-m', message);
    }
    return this.execute(args);
  }

  /**
   * Describe (edit message of) a change
   */
  async describe(revision: string, message: string): Promise<CommandResult> {
    return this.execute(['describe', '-r', revision, '-m', message]);
  }

  /**
   * Squash the current change into its parent
   */
  async squash(revision?: string): Promise<CommandResult> {
    const args = ['squash'];
    if (revision) {
      args.push('-r', revision);
    }
    return this.execute(args);
  }

  /**
   * Edit a change (make it the working copy)
   */
  async edit(revision: string): Promise<CommandResult> {
    return this.execute(['edit', revision]);
  }

  /**
   * Abandon a change
   */
  async abandon(revision: string): Promise<CommandResult> {
    return this.execute(['abandon', revision]);
  }

  /**
   * Restore a file to its state in a revision
   */
  async restore(path: string, revision?: string): Promise<CommandResult> {
    const args = ['restore', path];
    if (revision) {
      args.push('--from', revision);
    }
    return this.execute(args);
  }

  /**
   * Rebase a change onto a new parent
   */
  async rebase(revision: string, destination: string): Promise<CommandResult> {
    return this.execute(['rebase', '-s', revision, '-d', destination]);
  }

  /**
   * Move/squash specific files from one change to another
   */
  async moveFiles(fromRevision: string, toRevision: string, paths: string[]): Promise<CommandResult> {
    // Use squash with --from and --into to move specific files
    const args = ['squash', '--from', fromRevision, '--into', toRevision, ...paths];
    return this.execute(args);
  }

  /**
   * Get list of bookmarks
   */
  async bookmarkList(): Promise<Bookmark[]> {
    const result = await this.execute(['bookmark', 'list', '--all']);
    if (!result.success) {
      return [];
    }

    return this.parseBookmarkOutput(result.stdout);
  }

  /**
   * Create a new bookmark
   */
  async bookmarkCreate(name: string, revision?: string): Promise<CommandResult> {
    const args = ['bookmark', 'create', name];
    if (revision) {
      args.push('-r', revision);
    }
    return this.execute(args);
  }

  /**
   * Set (move) a bookmark
   */
  async bookmarkSet(name: string, revision: string): Promise<CommandResult> {
    // Use -B to allow moving bookmark backwards if needed
    return this.execute(['bookmark', 'set', name, '-r', revision, '-B']);
  }

  /**
   * Delete a bookmark
   */
  async bookmarkDelete(name: string): Promise<CommandResult> {
    return this.execute(['bookmark', 'delete', name]);
  }

  /**
   * Track a remote bookmark
   */
  async bookmarkTrack(name: string): Promise<CommandResult> {
    return this.execute(['bookmark', 'track', name]);
  }

  /**
   * Push a bookmark to remote (via git)
   */
  async gitPush(bookmark?: string): Promise<CommandResult> {
    const args = ['git', 'push'];
    if (bookmark) {
      args.push('--bookmark', bookmark);
    }
    return this.execute(args);
  }

  /**
   * Push a new bookmark by name at a specific revision
   */
  async gitPushNamed(name: string, revision: string): Promise<CommandResult> {
    return this.execute(['git', 'push', '--named', `${name}=${revision}`]);
  }

  /**
   * Fetch from remote (via git)
   */
  async gitFetch(remote?: string): Promise<CommandResult> {
    const args = ['git', 'fetch'];
    if (remote) {
      args.push(remote);
    }
    return this.execute(args);
  }

  /**
   * Get the remote URL (origin)
   */
  async getRemoteUrl(): Promise<string | null> {
    const result = await this.execute(['git', 'remote', 'list']);
    if (!result.success) {
      return null;
    }
    // Parse output: "origin https://github.com/..." or "origin git@github.com:..."
    const lines = result.stdout.trim().split('\n');
    for (const line of lines) {
      const match = line.match(/^origin\s+(.+)$/);
      if (match) {
        return match[1];
      }
    }
    // Return first remote if no origin
    const firstMatch = lines[0]?.match(/^\S+\s+(.+)$/);
    return firstMatch ? firstMatch[1] : null;
  }

  /**
   * Get the root path of the repository
   */
  async root(): Promise<string | null> {
    const result = await this.execute(['root']);
    if (!result.success) {
      return null;
    }
    return result.stdout.trim();
  }

  /**
   * Parse the status output into FileChange objects
   */
  private parseStatusOutput(output: string): FileChange[] {
    const lines = output.trim().split('\n').filter((l) => l.length > 0);
    const files: FileChange[] = [];

    for (const line of lines) {
      // Skip lines that don't look like file status
      if (!line.match(/^[AMDRCU?]\s/)) {
        continue;
      }

      const status = line[0];
      const path = line.slice(2).trim();

      let fileStatus: FileStatus;
      switch (status) {
        case 'A':
          fileStatus = 'added';
          break;
        case 'M':
          fileStatus = 'modified';
          break;
        case 'D':
          fileStatus = 'deleted';
          break;
        case 'R':
          fileStatus = 'renamed';
          break;
        case 'C':
          fileStatus = 'conflict';
          break;
        case 'U':
          fileStatus = 'conflict';
          break;
        default:
          fileStatus = 'modified';
      }

      files.push({ path, status: fileStatus });
    }

    return files;
  }

  private parseConflictTypes(output: string): string[] {
    const lines = output.trim().split('\n').filter((l) => l.length > 0);
    const conflictPaths: string[] = [];

    for (const line of lines) {
      const match = line.match(/^([A-Z-]{2})\s+(.*)$/);
      if (!match) {
        continue;
      }
      const [, types, path] = match;
      if (types.includes('C')) {
        conflictPaths.push(path.trim());
      }
    }

    return conflictPaths;
  }

  /**
   * Parse the bookmark list output
   */
  private parseBookmarkOutput(output: string): Bookmark[] {
    const lines = output.trim().split('\n').filter((l) => l.length > 0);
    const bookmarks: Bookmark[] = [];
    let currentLocalBookmark: string | null = null;
    const trackedBookmarks = new Set<string>();

    // First pass: identify which local bookmarks have tracking refs
    // Two formats to detect:
    // 1. Indented @origin: under local bookmark
    // 2. Separate "name@origin:" line (marks the local "name" as tracked)
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Check if this is a local bookmark (not indented, no @remote in name)
      if (!line.startsWith(' ') && !line.match(/^\S+@\S+:/)) {
        const match = line.match(/^(\S+?)(\*)?:/);
        if (match) {
          currentLocalBookmark = match[1];
        }
      }
      // Check if this is an indented tracking ref (  @origin: ... or other remote, but NOT @git)
      // @git is just the local git ref, not a remote
      else if (line.startsWith('  @') && currentLocalBookmark) {
        const refMatch = line.match(/^\s+@(\S+):/);
        if (refMatch && refMatch[1] !== 'git') {
          // Only count actual remotes (origin, upstream, etc.), not @git
          trackedBookmarks.add(currentLocalBookmark);
        }
      }
      // Remote bookmark line "name@origin:" - marks local "name" as tracked
      else if (line.match(/^\S+@\S+:/)) {
        const remoteMatch = line.match(/^(\S+?)@(\S+):/);
        if (remoteMatch && remoteMatch[2] !== 'git') {
          // This remote entry means the local bookmark with same name is tracked
          trackedBookmarks.add(remoteMatch[1]);
        }
        currentLocalBookmark = null;
      }
    }

    // Second pass: parse all bookmarks
    currentLocalBookmark = null;
    for (const line of lines) {
      // Skip indented tracking ref lines (  @origin: ...)
      if (line.startsWith('  @')) {
        continue;
      }

      // Remote-only bookmark: "name@remote: changeId" (not indented)
      const remoteMatch = line.match(/^(\S+?)@(\S+):\s+(\S+)/);
      if (remoteMatch) {
        const [, name, remote, changeId] = remoteMatch;
        bookmarks.push({
          name,
          changeId,
          isRemote: true,
          remote,
          isConflicted: false,
          isTracked: false,
        });
        continue;
      }

      // Local bookmark: "name: changeId" or "name*: changeId" (conflicted)
      const localMatch = line.match(/^(\S+?)(\*)?:\s+(\S+)/);
      if (localMatch) {
        const [, name, asterisk, changeId] = localMatch;
        const isConflicted = !!asterisk;
        const isTracked = trackedBookmarks.has(name);

        bookmarks.push({
          name,
          changeId,
          isRemote: false,
          remote: undefined,
          isConflicted,
          isTracked,
        });
      }
    }

    return bookmarks;
  }
}
