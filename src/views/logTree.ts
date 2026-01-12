import * as vscode from 'vscode';
import * as path from 'path';
import { Repository } from '../repository/repository';
import { Change, Bookmark, FileChange, FileStatus } from '../jj/types';

type LogTreeItem = ChangeTreeItem | FileTreeItem;

/**
 * Tree item representing a file within a change
 */
class FileTreeItem extends vscode.TreeItem {
  constructor(
    public readonly file: FileChange,
    public readonly repository: Repository,
    public readonly changeId?: string
  ) {
    super(path.basename(file.path), vscode.TreeItemCollapsibleState.None);

    const absPath = repository.getAbsolutePath(file.path);
    this.id = `file-${changeId || 'wc'}-${file.path}`;
    this.contextValue = 'file';
    this.description = path.dirname(file.path) === '.' ? '' : path.dirname(file.path);
    this.resourceUri = vscode.Uri.file(absPath);

    // Set icon based on status
    this.iconPath = this.getIconForStatus(file.status);

    // Tooltip
    this.tooltip = `${file.path} (${this.getStatusLabel(file.status)})`;

    // Command to open diff view
    const rightUri = vscode.Uri.file(absPath);
    const leftUri = rightUri.with({
      scheme: 'jj-original',
      query: JSON.stringify({ path: absPath, revision: changeId }),
    });

    if (file.status === 'added') {
      // New file - just open it
      this.command = {
        command: 'vscode.open',
        title: 'Open File',
        arguments: [rightUri],
      };
    } else if (file.status === 'deleted') {
      // Deleted file - show original
      this.command = {
        command: 'vscode.open',
        title: 'Open Original',
        arguments: [leftUri],
      };
    } else {
      // Modified - show diff
      this.command = {
        command: 'vscode.diff',
        title: 'Show Diff',
        arguments: [leftUri, rightUri, `${path.basename(file.path)} (diff)`],
      };
    }
  }

  private getIconForStatus(status: FileStatus): vscode.ThemeIcon {
    switch (status) {
      case 'added':
        return new vscode.ThemeIcon('diff-added', new vscode.ThemeColor('gitDecoration.addedResourceForeground'));
      case 'modified':
        return new vscode.ThemeIcon('diff-modified', new vscode.ThemeColor('gitDecoration.modifiedResourceForeground'));
      case 'deleted':
        return new vscode.ThemeIcon('diff-removed', new vscode.ThemeColor('gitDecoration.deletedResourceForeground'));
      case 'renamed':
        return new vscode.ThemeIcon('diff-renamed', new vscode.ThemeColor('gitDecoration.renamedResourceForeground'));
      case 'conflict':
        return new vscode.ThemeIcon('warning', new vscode.ThemeColor('gitDecoration.conflictingResourceForeground'));
      default:
        return new vscode.ThemeIcon('file');
    }
  }

  private getStatusLabel(status: FileStatus): string {
    switch (status) {
      case 'added': return 'Added';
      case 'modified': return 'Modified';
      case 'deleted': return 'Deleted';
      case 'renamed': return 'Renamed';
      case 'copied': return 'Copied';
      case 'conflict': return 'Conflict';
      default: return 'Unknown';
    }
  }
}

/**
 * Tree item representing a change in the log
 */
class ChangeTreeItem extends vscode.TreeItem {
  constructor(
    public readonly change: Change,
    public readonly repository: Repository
  ) {
    // All non-empty changes are collapsible
    const collapsible = change.isEmpty
      ? vscode.TreeItemCollapsibleState.None
      : vscode.TreeItemCollapsibleState.Collapsed;

    // Label: @ prefix for working copy + description
    const label = change.isWorkingCopy
      ? `@ ${change.description}`
      : change.description;

    super(label, collapsible);

    this.id = change.changeId;
    this.contextValue = 'change';

    // Description: change ID, then bookmark tags as boxes, then file count
    const descParts: string[] = [change.changeIdShort];

    // Add bookmarks as tag-style boxes using Unicode
    if (change.bookmarks.length > 0) {
      const tags = change.bookmarks.map(b => `⌜${b}⌟`).join(' ');
      descParts.push(tags);
    }

    if (change.isWorkingCopy && repository.changedFiles.length > 0) {
      descParts.push(`${repository.changedFiles.length} files`);
    }
    this.description = descParts.join('  ');

    // Set icon based on state - use git-commit, highlight working copy with color
    if (change.hasConflict) {
      this.iconPath = new vscode.ThemeIcon('git-commit', new vscode.ThemeColor('charts.yellow'));
    } else if (change.isWorkingCopy) {
      this.iconPath = new vscode.ThemeIcon('git-commit', new vscode.ThemeColor('charts.green'));
    } else if (change.isEmpty) {
      this.iconPath = new vscode.ThemeIcon('git-commit', new vscode.ThemeColor('disabledForeground'));
    } else {
      this.iconPath = new vscode.ThemeIcon('git-commit');
    }

    // Tooltip with full details
    this.tooltip = new vscode.MarkdownString();
    if (change.isWorkingCopy) {
      this.tooltip.appendMarkdown(`**@ Working Copy**\n\n`);
    }
    this.tooltip.appendMarkdown(`**${change.description}**\n\n`);
    this.tooltip.appendMarkdown(`- Change ID: \`${change.changeIdShort}\`\n`);
    this.tooltip.appendMarkdown(`- Commit ID: \`${change.commitIdShort}\`\n`);
    this.tooltip.appendMarkdown(`- Author: ${change.authorName}\n`);
    this.tooltip.appendMarkdown(`- Date: ${change.authorTimestamp.toLocaleString()}\n`);
    if (change.bookmarks.length > 0) {
      this.tooltip.appendMarkdown(`- Bookmarks: ${change.bookmarks.join(', ')}\n`);
    }

    // No command on click - just expand/collapse or select
  }
}

/**
 * Tree item representing a bookmark
 */
class BookmarkTreeItem extends vscode.TreeItem {
  constructor(
    public readonly bookmark: Bookmark,
    public readonly repository: Repository
  ) {
    super(bookmark.name, vscode.TreeItemCollapsibleState.None);

    this.id = `bookmark-${bookmark.name}${bookmark.remote ? `@${bookmark.remote}` : ''}`;
    this.contextValue = 'bookmark';
    this.description = bookmark.changeId.slice(0, 12);

    if (bookmark.isRemote) {
      this.iconPath = new vscode.ThemeIcon('cloud');
    } else if (bookmark.isConflicted) {
      this.iconPath = new vscode.ThemeIcon('warning', new vscode.ThemeColor('charts.yellow'));
    } else {
      this.iconPath = new vscode.ThemeIcon('bookmark');
    }

    this.tooltip = new vscode.MarkdownString();
    this.tooltip.appendMarkdown(`**${bookmark.name}**\n\n`);
    this.tooltip.appendMarkdown(`Points to: \`${bookmark.changeId.slice(0, 12)}\`\n`);
    if (bookmark.isRemote) {
      this.tooltip.appendMarkdown(`Remote: ${bookmark.remote}\n`);
    }
    if (bookmark.isConflicted) {
      this.tooltip.appendMarkdown(`\n*Conflicted*`);
    }
  }
}

/**
 * Tree data provider for the JJ log view
 */
export class LogTreeProvider implements vscode.TreeDataProvider<LogTreeItem> {
  private repository: Repository | null = null;
  private _onDidChangeTreeData = new vscode.EventEmitter<LogTreeItem | undefined>();
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

  private _disposables: vscode.Disposable[] = [];

  setRepository(repository: Repository | null): void {
    // Dispose old subscription
    this._disposables.forEach((d) => d.dispose());
    this._disposables = [];

    this.repository = repository;

    if (repository) {
      repository.onDidChange(() => this.refresh(), null, this._disposables);
    }

    this.refresh();
  }

  refresh(): void {
    this._onDidChangeTreeData.fire(undefined);
  }

  getTreeItem(element: LogTreeItem): vscode.TreeItem {
    return element;
  }

  async getChildren(element?: LogTreeItem): Promise<LogTreeItem[]> {
    if (!this.repository) {
      return [];
    }

    // If element is a change, return its files
    if (element instanceof ChangeTreeItem) {
      let files: FileChange[];
      const changeId = element.change.isWorkingCopy ? undefined : element.change.changeIdShort;

      if (element.change.isWorkingCopy) {
        // Use cached files for working copy
        files = this.repository.changedFiles;
      } else {
        // Fetch files for other revisions
        files = await this.repository.getFilesForRevision(element.change.changeIdShort);
      }
      return files.map((file) => new FileTreeItem(file, this.repository!, changeId));
    }

    // Root level: return all changes
    return this.repository.log.map((change) => new ChangeTreeItem(change, this.repository!));
  }

  getParent(element: LogTreeItem): LogTreeItem | undefined {
    if (element instanceof FileTreeItem) {
      // Find the working copy change
      const workingCopy = this.repository?.log.find((c) => c.isWorkingCopy);
      if (workingCopy) {
        return new ChangeTreeItem(workingCopy, this.repository!);
      }
    }
    return undefined;
  }

  dispose(): void {
    this._disposables.forEach((d) => d.dispose());
    this._onDidChangeTreeData.dispose();
  }
}

/**
 * Tree data provider for the bookmarks view
 */
export class BookmarksTreeProvider implements vscode.TreeDataProvider<BookmarkTreeItem> {
  private repository: Repository | null = null;
  private _onDidChangeTreeData = new vscode.EventEmitter<BookmarkTreeItem | undefined>();
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

  private _disposables: vscode.Disposable[] = [];

  setRepository(repository: Repository | null): void {
    // Dispose old subscription
    this._disposables.forEach((d) => d.dispose());
    this._disposables = [];

    this.repository = repository;

    if (repository) {
      repository.onDidChange(() => this.refresh(), null, this._disposables);
    }

    this.refresh();
  }

  refresh(): void {
    this._onDidChangeTreeData.fire(undefined);
  }

  getTreeItem(element: BookmarkTreeItem): vscode.TreeItem {
    return element;
  }

  async getChildren(element?: BookmarkTreeItem): Promise<BookmarkTreeItem[]> {
    if (element || !this.repository) {
      return [];
    }

    // Sort bookmarks: local first, then remote
    const sorted = [...this.repository.bookmarks].sort((a, b) => {
      if (a.isRemote !== b.isRemote) {
        return a.isRemote ? 1 : -1;
      }
      return a.name.localeCompare(b.name);
    });

    return sorted.map((bookmark) => new BookmarkTreeItem(bookmark, this.repository!));
  }

  dispose(): void {
    this._disposables.forEach((d) => d.dispose());
    this._onDidChangeTreeData.dispose();
  }
}
