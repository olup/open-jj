/**
 * Types for jj (Jujutsu) data structures
 */

/** A jj change (commit) */
export interface Change {
  /** Full change ID */
  changeId: string;
  /** Short change ID (first 12 chars) */
  changeIdShort: string;
  /** Full commit ID */
  commitId: string;
  /** Short commit ID (first 12 chars) */
  commitIdShort: string;
  /** Change description (commit message) */
  description: string;
  /** Author name */
  authorName: string;
  /** Author email */
  authorEmail: string;
  /** Author timestamp */
  authorTimestamp: Date;
  /** Committer name */
  committerName: string;
  /** Committer email */
  committerEmail: string;
  /** Committer timestamp */
  committerTimestamp: Date;
  /** Whether this is the working copy */
  isWorkingCopy: boolean;
  /** Whether this change is empty (no file changes) */
  isEmpty: boolean;
  /** Whether this change has conflicts */
  hasConflict: boolean;
  /** Whether this change is immutable (locked) */
  isImmutable: boolean;
  /** Parent change IDs */
  parentIds: string[];
  /** Bookmarks pointing to this change */
  bookmarks: string[];
  /** Tags on this change */
  tags: string[];
  /** Git refs (branches, HEAD) */
  gitRefs: string[];
}

/** A row in jj log output, which may or may not be a change */
export interface LogRow {
  /** Graph prefix for this row */
  graphPrefix: string;
  /** Associated change, if this row represents a commit */
  change?: Change;
  /** Optional label for non-change rows */
  label?: string;
  /** Whether this row represents elided revisions */
  isElided?: boolean;
}

/** File status in working copy */
export type FileStatus = 'added' | 'modified' | 'deleted' | 'renamed' | 'copied' | 'conflict';

/** A file change in the working copy */
export interface FileChange {
  /** Path to the file */
  path: string;
  /** Status of the file */
  status: FileStatus;
  /** Original path (for renames/copies) */
  originalPath?: string;
}

/** Working copy status */
export interface WorkingCopyStatus {
  /** Current change */
  currentChange: Change | null;
  /** Files changed in working copy */
  files: FileChange[];
  /** Whether there are conflicts */
  hasConflicts: boolean;
}

/** A jj bookmark */
export interface Bookmark {
  /** Bookmark name */
  name: string;
  /** Change ID the bookmark points to */
  changeId: string;
  /** Whether this is a remote tracking bookmark */
  isRemote: boolean;
  /** Remote name (if remote tracking) */
  remote?: string;
  /** Whether the bookmark is conflicted (diverged from remote) */
  isConflicted: boolean;
  /** Whether this bookmark is tracked (has a remote counterpart) */
  isTracked: boolean;
}

/** Pull request state */
export type PullRequestState = 'none' | 'open' | 'merged' | 'closed' | 'draft';

/** Pull request info for a bookmark */
export interface PullRequestInfo {
  /** PR number */
  number: number;
  /** PR state */
  state: PullRequestState;
  /** PR URL */
  url: string;
  /** PR title */
  title: string;
}

/** Repository information */
export interface RepositoryInfo {
  /** Root path of the repository */
  rootPath: string;
  /** Whether there's a .git directory (git backend or colocated) */
  hasGit: boolean;
  /** Whether this is a colocated git+jj repo */
  isColocated: boolean;
}

/** jj operation log entry */
export interface Operation {
  /** Operation ID */
  id: string;
  /** Operation description */
  description: string;
  /** Timestamp */
  timestamp: Date;
  /** User who performed the operation */
  user: string;
}

/** Result of a jj command execution */
export interface CommandResult {
  /** Whether the command succeeded */
  success: boolean;
  /** stdout output */
  stdout: string;
  /** stderr output */
  stderr: string;
  /** Exit code */
  exitCode: number;
}

/** Options for running jj commands */
export interface CommandOptions {
  /** Working directory */
  cwd?: string;
  /** Additional environment variables */
  env?: Record<string, string>;
  /** Timeout in milliseconds */
  timeout?: number;
}
