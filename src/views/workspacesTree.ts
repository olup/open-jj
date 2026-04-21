import * as vscode from 'vscode';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';
import { Repository } from '../repository/repository';
import { Workspace } from '../jj/types';

/**
 * Compute the on-disk tmpdir path for a workspace created by this extension.
 * Extension-created workspaces follow the naming convention
 * `${repoName}-${changeIdShort}`; returns undefined for other workspaces.
 */
export function getExtensionWorkspacePath(repoRootPath: string, workspaceName: string): string | undefined {
  const repoName = path.basename(repoRootPath);
  if (!workspaceName.startsWith(`${repoName}-`)) {
    return undefined;
  }
  return path.join(os.tmpdir(), 'jj-workspaces', workspaceName);
}

class WorkspaceTreeItem extends vscode.TreeItem {
  constructor(
    public readonly workspace: Workspace,
    public readonly repository: Repository
  ) {
    super(workspace.name, vscode.TreeItemCollapsibleState.None);

    this.id = `workspace-${workspace.name}`;
    this.description = workspace.changeIdShort.slice(0, 12);

    const knownPath = getExtensionWorkspacePath(repository.rootPath, workspace.name);
    const knownPathExists = knownPath ? safeExistsSync(knownPath) : false;

    const tags: string[] = [];
    if (workspace.isCurrent) {
      tags.push('current');
    }
    if (workspace.isDefault) {
      tags.push('default');
    }
    if (knownPath && !knownPathExists) {
      tags.push('folder missing');
    }

    if (workspace.isCurrent) {
      this.iconPath = new vscode.ThemeIcon('circle-filled', new vscode.ThemeColor('charts.green'));
    } else if (workspace.isDefault) {
      this.iconPath = new vscode.ThemeIcon('root-folder');
    } else {
      this.iconPath = new vscode.ThemeIcon('window');
    }

    // contextValue controls which menu items appear on right-click. The
    // current workspace is protected from forgetting (it would leave
    // the session in a broken state).
    const canForget = !workspace.isCurrent;
    const canReopen = Boolean(knownPath && knownPathExists && !workspace.isCurrent);
    const parts: string[] = ['workspace'];
    if (canForget) parts.push('canForget');
    if (canReopen) parts.push('canReopen');
    this.contextValue = parts.join('.');

    const tooltip = new vscode.MarkdownString();
    tooltip.appendMarkdown(`**${workspace.name}**`);
    if (tags.length > 0) {
      tooltip.appendMarkdown(` _(${tags.join(', ')})_`);
    }
    tooltip.appendMarkdown(`\n\nPoints to: \`${workspace.changeIdShort.slice(0, 12)}\``);
    if (knownPath) {
      tooltip.appendMarkdown(`\n\nFolder: \`${knownPath}\``);
      if (!knownPathExists) {
        tooltip.appendMarkdown(`\n\n*(folder no longer exists on disk)*`);
      }
    }
    if (workspace.isCurrent) {
      tooltip.appendMarkdown(`\n\n*This is the workspace your current VSCode session is using.*`);
    }
    this.tooltip = tooltip;
  }
}

function safeExistsSync(p: string): boolean {
  try {
    return fs.existsSync(p);
  } catch {
    return false;
  }
}

export class WorkspacesTreeProvider implements vscode.TreeDataProvider<WorkspaceTreeItem> {
  private repository: Repository | null = null;
  private _onDidChangeTreeData = new vscode.EventEmitter<WorkspaceTreeItem | undefined>();
  readonly onDidChangeTreeData = this._onDidChangeTreeData.event;

  private _disposables: vscode.Disposable[] = [];

  setRepository(repository: Repository | null): void {
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

  getTreeItem(element: WorkspaceTreeItem): vscode.TreeItem {
    return element;
  }

  async getChildren(element?: WorkspaceTreeItem): Promise<WorkspaceTreeItem[]> {
    if (element || !this.repository) {
      return [];
    }
    // Sort: current first, then default, then others alphabetically.
    const sorted = [...this.repository.workspaces].sort((a, b) => {
      if (a.isCurrent !== b.isCurrent) return a.isCurrent ? -1 : 1;
      if (a.isDefault !== b.isDefault) return a.isDefault ? -1 : 1;
      return a.name.localeCompare(b.name);
    });
    return sorted.map((ws) => new WorkspaceTreeItem(ws, this.repository!));
  }

  dispose(): void {
    this._disposables.forEach((d) => d.dispose());
    this._onDidChangeTreeData.dispose();
  }
}
