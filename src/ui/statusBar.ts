import * as vscode from 'vscode';
import { Repository } from '../repository/repository';

/**
 * Status bar item showing jj repository state
 */
export class StatusBar implements vscode.Disposable {
  private statusBarItem: vscode.StatusBarItem;
  private repository: Repository | null = null;
  private _disposables: vscode.Disposable[] = [];

  constructor() {
    this.statusBarItem = vscode.window.createStatusBarItem(
      vscode.StatusBarAlignment.Left,
      100
    );
    this.statusBarItem.command = 'open-jj.new';
    this.statusBarItem.name = 'JJ Status';
    this._disposables.push(this.statusBarItem);
  }

  /**
   * Set the repository to show status for
   */
  setRepository(repository: Repository | null): void {
    // Dispose old subscription
    this._disposables
      .filter((d) => d !== this.statusBarItem)
      .forEach((d) => d.dispose());

    this.repository = repository;

    if (repository) {
      repository.onDidChange(() => this.update(), null, this._disposables);
      this.update();
      this.statusBarItem.show();
    } else {
      this.statusBarItem.hide();
    }
  }

  /**
   * Update the status bar item
   */
  private update(): void {
    if (!this.repository) {
      this.statusBarItem.hide();
      return;
    }

    const status = this.repository.status;
    const currentChange = status?.currentChange;

    if (!currentChange) {
      this.statusBarItem.text = '$(git-branch) jj';
      this.statusBarItem.tooltip = 'JJ Repository';
      return;
    }

    // Build status text
    const parts: string[] = ['$(git-branch)'];

    // Add change ID
    parts.push(currentChange.changeIdShort);

    // Add bookmark if any
    if (currentChange.bookmarks.length > 0) {
      parts.push(`[${currentChange.bookmarks[0]}]`);
    }

    // Add conflict indicator
    if (currentChange.hasConflict) {
      parts.push('$(warning)');
    }

    // Add change count
    const fileCount = status?.files.length ?? 0;
    if (fileCount > 0) {
      parts.push(`$(edit) ${fileCount}`);
    }

    this.statusBarItem.text = parts.join(' ');

    // Build tooltip
    const tooltipParts: string[] = [];
    tooltipParts.push(`**JJ Repository**`);
    tooltipParts.push('');
    tooltipParts.push(`Change: \`${currentChange.changeIdShort}\``);

    if (currentChange.description && currentChange.description !== '(no description)') {
      tooltipParts.push(`Description: ${currentChange.description}`);
    }

    if (currentChange.bookmarks.length > 0) {
      tooltipParts.push(`Bookmarks: ${currentChange.bookmarks.join(', ')}`);
    }

    if (fileCount > 0) {
      tooltipParts.push(`${fileCount} file(s) changed`);
    }

    if (currentChange.hasConflict) {
      tooltipParts.push('');
      tooltipParts.push('⚠️ Working copy has conflicts');
    }

    tooltipParts.push('');
    tooltipParts.push('_Click to create new change_');

    const tooltip = new vscode.MarkdownString(tooltipParts.join('\n'));
    this.statusBarItem.tooltip = tooltip;

    // Set background color for conflicts
    if (currentChange.hasConflict) {
      this.statusBarItem.backgroundColor = new vscode.ThemeColor(
        'statusBarItem.warningBackground'
      );
    } else {
      this.statusBarItem.backgroundColor = undefined;
    }
  }

  /**
   * Show the status bar (when no repository, shows init prompt)
   */
  showNoRepository(): void {
    this.statusBarItem.text = '$(git-branch) Initialize JJ';
    this.statusBarItem.tooltip = 'Click to initialize a jj repository';
    this.statusBarItem.command = 'open-jj.init';
    this.statusBarItem.show();
  }

  dispose(): void {
    this._disposables.forEach((d) => d.dispose());
  }
}
