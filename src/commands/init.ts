import * as vscode from 'vscode';
import { JJCli } from '../jj/cli';
import { hasJJRepository, hasGitRepository } from '../repository/detection';

/**
 * Initialize a jj repository
 */
export async function initRepository(withGit: boolean = false): Promise<boolean> {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders || workspaceFolders.length === 0) {
    vscode.window.showErrorMessage('No workspace folder open. Open a folder first.');
    return false;
  }

  // If multiple workspace folders, let user choose
  let folder: vscode.WorkspaceFolder;
  if (workspaceFolders.length === 1) {
    folder = workspaceFolders[0];
  } else {
    const picked = await vscode.window.showWorkspaceFolderPick({
      placeHolder: 'Select folder to initialize jj repository in',
    });
    if (!picked) {
      return false;
    }
    folder = picked;
  }

  const folderPath = folder.uri.fsPath;

  // Check if already a jj repository
  if (hasJJRepository(folderPath)) {
    vscode.window.showInformationMessage('This folder is already a jj repository.');
    return false;
  }

  // Check for existing git repository
  const hasGit = hasGitRepository(folderPath);

  if (withGit && !hasGit) {
    vscode.window.showErrorMessage('No Git repository found in this folder. Initialize a Git repo first or use "Initialize Repository".');
    return false;
  }

  // If user didn't specify, ask about git backend
  if (!withGit && hasGit) {
    const choice = await vscode.window.showQuickPick(
      [
        {
          label: '$(git-branch) Use existing Git repository',
          description: 'Initialize jj colocated with the existing .git',
          value: 'colocate',
        },
        {
          label: '$(file-directory) Initialize without Git',
          description: 'Use jj native storage (no .git)',
          value: 'native',
        },
      ],
      {
        placeHolder: 'An existing Git repository was found. How would you like to initialize jj?',
      }
    );

    if (!choice) {
      return false;
    }

    withGit = choice.value === 'colocate';
  } else if (!withGit && !hasGit) {
    const choice = await vscode.window.showQuickPick(
      [
        {
          label: '$(git-branch) Initialize with Git backend',
          description: 'Creates both .jj and .git directories',
          value: 'git',
        },
        {
          label: '$(file-directory) Initialize without Git',
          description: 'Use jj native storage only',
          value: 'native',
        },
      ],
      {
        placeHolder: 'How would you like to initialize the jj repository?',
      }
    );

    if (!choice) {
      return false;
    }

    withGit = choice.value === 'git';
  }

  // Initialize the repository
  const cli = new JJCli(folderPath);

  // First check if jj is available
  const available = await cli.isAvailable();
  if (!available) {
    const action = await vscode.window.showErrorMessage(
      'jj command not found. Please install jj and ensure it is in your PATH.',
      'Open Installation Guide'
    );
    if (action === 'Open Installation Guide') {
      vscode.env.openExternal(vscode.Uri.parse('https://martinvonz.github.io/jj/latest/install-and-setup/'));
    }
    return false;
  }

  const result = await cli.init(withGit);

  if (result.success) {
    vscode.window.showInformationMessage(
      `Initialized jj repository${withGit ? ' with Git backend' : ''}.`
    );
    // Re-detect repositories now that .jj may exist.
    vscode.commands.executeCommand('open-jj.reinitialize');
    return true;
  } else {
    vscode.window.showErrorMessage(`Failed to initialize jj repository: ${result.stderr}`);
    return false;
  }
}

/**
 * Command handler for init without git
 */
export function registerInitCommand(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.init', async () => {
      await initRepository(false);
    })
  );
}

/**
 * Command handler for init with git
 */
export function registerInitWithGitCommand(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.initWithGit', async () => {
      await initRepository(true);
    })
  );
}
