import * as vscode from 'vscode';
import * as path from 'path';
import { Repository } from '../repository/repository';
import { FileChange, FileStatus } from '../jj/types';

/**
 * Source Control provider for jj repositories
 */
export class JJSourceControl implements vscode.Disposable {
  private repository: Repository;
  private scm: vscode.SourceControl;
  private changesGroup: vscode.SourceControlResourceGroup;
  private _disposables: vscode.Disposable[] = [];

  constructor(repository: Repository) {
    this.repository = repository;

    // Create the SCM provider
    this.scm = vscode.scm.createSourceControl('jj', 'JJ', vscode.Uri.file(repository.rootPath));
    this.scm.acceptInputCommand = {
      command: 'open-jj.describe',
      title: 'Describe',
      arguments: [repository],
    };
    this.scm.quickDiffProvider = this;
    this.scm.inputBox.placeholder = 'Change description (press Ctrl+Enter to describe)';

    // Create resource groups
    this.changesGroup = this.scm.createResourceGroup('changes', 'Changes');
    this.changesGroup.hideWhenEmpty = false;

    // Listen for repository changes
    this.repository.onDidChange(() => this.update(), null, this._disposables);

    // Initial update
    this.update();

    this._disposables.push(this.scm);
  }

  /**
   * Update the source control view
   */
  private update(): void {
    const status = this.repository.status;
    if (!status) {
      return;
    }

    // Update input box with current description
    if (status.currentChange) {
      const desc = status.currentChange.description;
      if (desc !== '(no description)' && !this.scm.inputBox.value) {
        this.scm.inputBox.value = desc;
      }
    }

    // Update changed files
    this.changesGroup.resourceStates = status.files.map((file) =>
      this.createResourceState(file)
    );

    // Update count badge
    this.scm.count = status.files.length;
  }

  /**
   * Create a resource state for a file change
   */
  private createResourceState(file: FileChange): vscode.SourceControlResourceState {
    const uri = vscode.Uri.file(this.repository.getAbsolutePath(file.path));

    const resourceState: vscode.SourceControlResourceState = {
      resourceUri: uri,
      decorations: this.getDecorations(file),
      command: {
        command: 'vscode.diff',
        title: 'Show Changes',
        arguments: [
          this.getOriginalUri(uri),
          uri,
          `${path.basename(file.path)} (Working Copy)`,
        ],
      },
    };

    return resourceState;
  }

  /**
   * Get decorations for a file status
   */
  private getDecorations(file: FileChange): vscode.SourceControlResourceDecorations {
    const tooltip = this.getStatusLabel(file.status);

    switch (file.status) {
      case 'added':
        return {
          tooltip,
          iconPath: new vscode.ThemeIcon('diff-added', new vscode.ThemeColor('gitDecoration.addedResourceForeground')),
        };
      case 'modified':
        return {
          tooltip,
          iconPath: new vscode.ThemeIcon('diff-modified', new vscode.ThemeColor('gitDecoration.modifiedResourceForeground')),
        };
      case 'deleted':
        return {
          tooltip,
          iconPath: new vscode.ThemeIcon('diff-removed', new vscode.ThemeColor('gitDecoration.deletedResourceForeground')),
          strikeThrough: true,
        };
      case 'renamed':
        return {
          tooltip,
          iconPath: new vscode.ThemeIcon('diff-renamed', new vscode.ThemeColor('gitDecoration.renamedResourceForeground')),
        };
      case 'conflict':
        return {
          tooltip,
          iconPath: new vscode.ThemeIcon('warning', new vscode.ThemeColor('gitDecoration.conflictingResourceForeground')),
        };
      default:
        return {
          tooltip,
          iconPath: new vscode.ThemeIcon('file'),
        };
    }
  }

  /**
   * Get a human-readable label for a file status
   */
  private getStatusLabel(status: FileStatus): string {
    switch (status) {
      case 'added':
        return 'Added';
      case 'modified':
        return 'Modified';
      case 'deleted':
        return 'Deleted';
      case 'renamed':
        return 'Renamed';
      case 'copied':
        return 'Copied';
      case 'conflict':
        return 'Conflict';
      default:
        return 'Unknown';
    }
  }

  /**
   * Get the original URI for diff comparison
   * This implements QuickDiffProvider
   */
  provideOriginalResource(uri: vscode.Uri): vscode.Uri | undefined {
    return this.getOriginalUri(uri);
  }

  /**
   * Create a URI for the original (parent) version of a file
   */
  private getOriginalUri(uri: vscode.Uri): vscode.Uri {
    // Use a custom scheme for jj original files
    return uri.with({
      scheme: 'jj-original',
      query: JSON.stringify({ path: uri.fsPath }),
    });
  }

  dispose(): void {
    this._disposables.forEach((d) => d.dispose());
  }
}

/**
 * Content provider for original (parent revision) file contents
 */
export class JJOriginalContentProvider implements vscode.TextDocumentContentProvider {
  private repository: Repository | null = null;

  setRepository(repository: Repository): void {
    this.repository = repository;
  }

  async provideTextDocumentContent(uri: vscode.Uri): Promise<string> {
    if (!this.repository) {
      return '';
    }

    try {
      const { path: filePath, revision } = JSON.parse(uri.query);
      const relativePath = this.repository.getRelativePath(filePath);

      // Get file content from parent revision
      const content = await this.repository.getOriginalFileContent(relativePath, revision);
      return content ?? '';
    } catch {
      return '';
    }
  }
}
