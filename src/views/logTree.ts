import * as vscode from 'vscode';
import { Repository } from '../repository/repository';
import { Bookmark } from '../jj/types';

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
