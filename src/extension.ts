import * as vscode from 'vscode';
import { detectRepositories, hasJJRepository, hasGitRepository } from './repository/detection';
import { Repository, createRepository } from './repository/repository';
import { JJSourceControl, JJOriginalContentProvider } from './views/sourceControl';
import { BookmarksTreeProvider } from './views/logTree';
import { LogWebviewProvider } from './views/logWebview';
import { StatusBar } from './ui/statusBar';
import { registerInitCommand, registerInitWithGitCommand } from './commands/init';
import { Change } from './jj/types';

let repository: Repository | null = null;
let sourceControl: JJSourceControl | null = null;
let statusBar: StatusBar | null = null;
let logWebviewProvider: LogWebviewProvider | null = null;
let bookmarksTreeProvider: BookmarksTreeProvider | null = null;
let originalContentProvider: JJOriginalContentProvider | null = null;

export async function activate(context: vscode.ExtensionContext): Promise<void> {
  console.log('open-jj extension is activating...');

  // Create UI components
  statusBar = new StatusBar();
  logWebviewProvider = new LogWebviewProvider(context.extensionUri);
  bookmarksTreeProvider = new BookmarksTreeProvider();
  originalContentProvider = new JJOriginalContentProvider();

  context.subscriptions.push(statusBar);
  context.subscriptions.push(bookmarksTreeProvider);

  // Register webview provider for log
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider(LogWebviewProvider.viewType, logWebviewProvider)
  );

  // Register tree view for bookmarks
  const bookmarksTreeView = vscode.window.createTreeView('open-jj.bookmarks', {
    treeDataProvider: bookmarksTreeProvider,
  });
  context.subscriptions.push(bookmarksTreeView);

  // Register content provider for diff view
  context.subscriptions.push(
    vscode.workspace.registerTextDocumentContentProvider('jj-original', originalContentProvider)
  );

  // Register commands
  registerInitCommand(context);
  registerInitWithGitCommand(context);
  registerCoreCommands(context);

  // Detect and initialize repository
  await initializeRepository(context);

  // Watch for workspace folder changes
  context.subscriptions.push(
    vscode.workspace.onDidChangeWorkspaceFolders(async () => {
      await initializeRepository(context);
    })
  );

  console.log('open-jj extension activated');
}

async function initializeRepository(context: vscode.ExtensionContext): Promise<void> {
  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders || workspaceFolders.length === 0) {
    setNoRepository();
    return;
  }

  // Check the first workspace folder for now
  const folder = workspaceFolders[0];
  const detection = detectRepositories(folder.uri.fsPath);

  if (!detection || !detection.hasJJ) {
    setNoRepository();
    // Show init button if there's a git repo or it's a folder
    if (statusBar) {
      statusBar.showNoRepository();
    }
    return;
  }

  // Create repository
  repository = await createRepository(folder.uri.fsPath, detection);
  if (!repository) {
    setNoRepository();
    return;
  }

  // Set up source control
  sourceControl = new JJSourceControl(repository);
  context.subscriptions.push(sourceControl);

  // Connect views to repository
  statusBar?.setRepository(repository);
  logWebviewProvider?.setRepository(repository);
  bookmarksTreeProvider?.setRepository(repository);
  originalContentProvider?.setRepository(repository);

  // Set context for menu visibility
  vscode.commands.executeCommand('setContext', 'open-jj.hasRepository', true);

  // Initial refresh
  await repository.refresh({ refreshPrInfo: true });
}

function setNoRepository(): void {
  repository = null;
  sourceControl = null;
  statusBar?.setRepository(null);
  logWebviewProvider?.setRepository(null);
  bookmarksTreeProvider?.setRepository(null);
  vscode.commands.executeCommand('setContext', 'open-jj.hasRepository', false);
}

function registerCoreCommands(context: vscode.ExtensionContext): void {
  // Refresh
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.refresh', async () => {
      await repository?.refresh({ refreshPrInfo: true });
    })
  );

  // Set revset
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.setRevset', async () => {
      if (!repository) {
        return;
      }
      const trunkFallback = (repo: Repository) => {
        const candidates = ['main', 'master', 'trunk'];
        const local = repo.bookmarks.filter((b) => !b.isRemote).map((b) => b.name);
        return candidates.find((candidate) => local.includes(candidate)) ?? 'trunk';
      };
      const trunkName = trunkFallback(repository);
      const options = [
        { label: 'All (trunk)', value: `present(::${trunkName})` },
        { label: 'Trunk line', value: `present(::${trunkName}) & ::present(${trunkName})` },
        { label: 'Remote bookmarks', value: 'present(::remote_bookmarks())' },
        { label: 'Root', value: 'root()' },
        { label: 'Own', value: 'mine()' },
        { label: 'Recent (week)', value: 'committer_date(after:"1 week ago")' },
      ];
      const current = vscode.workspace.getConfiguration('open-jj').get('logRevset', '');
      const pick = await vscode.window.showQuickPick(
        options.map((option) => ({
          label: option.label,
          description: option.value,
          picked: option.value === current,
        })),
        { placeHolder: 'Select revset' }
      );
      if (!pick) {
        return;
      }
      const selected = options.find((option) => option.label === pick.label);
      if (!selected) {
        return;
      }
      await vscode.workspace.getConfiguration('open-jj').update('logRevset', selected.value, vscode.ConfigurationTarget.Workspace);
      await repository.refresh();
    })
  );

  // Fetch from remote
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.fetch', async () => {
      if (!repository) {
        return;
      }
      const success = await repository.fetch();
      if (success) {
        vscode.window.showInformationMessage('Fetched from remote');
      } else {
        vscode.window.showErrorMessage('Fetch failed');
      }
    })
  );

  // GitHub auth / PR refresh
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.githubAuth', async () => {
      if (!repository) {
        return;
      }

      const authenticated = await repository.authenticateGitHub();
      if (authenticated) {
        vscode.window.showInformationMessage('GitHub authenticated! Refreshing PR status...');
        await repository.refreshPrInfo();
      } else {
        vscode.window.showErrorMessage('GitHub authentication failed');
      }
    })
  );

  // New change
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.new', async (arg?: { revision?: string }) => {
      if (!repository) {
        return;
      }

      const revision = arg?.revision;
      const success = await repository.newChange(undefined, revision);
      if (success) {
        vscode.window.showInformationMessage('Created new change');
      } else {
        vscode.window.showErrorMessage('Failed to create new change');
      }
    })
  );

  // Describe change
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.describe', async (arg?: Repository | Change) => {
      if (!repository) {
        return;
      }

      // Determine which change to describe
      let revision = '@';
      let currentDescription = '';

      if (arg && 'changeId' in arg) {
        // Called with a Change object
        revision = arg.changeIdShort;
        currentDescription = arg.description === '(no description)' ? '' : arg.description;
      } else {
        // Called from SCM input box or without args
        currentDescription = repository.currentChange?.description ?? '';
        if (currentDescription === '(no description)') {
          currentDescription = '';
        }
      }

      const message = await vscode.window.showInputBox({
        prompt: 'Enter change description',
        value: currentDescription,
        placeHolder: 'Change description',
      });

      if (message === undefined) {
        return;
      }

      const success = await repository.describe(revision, message);
      if (success) {
        vscode.window.showInformationMessage('Updated change description');
      } else {
        vscode.window.showErrorMessage('Failed to update change description');
      }
    })
  );

  // Squash
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.squash', async (change?: Change) => {
      if (!repository) {
        return;
      }

      const revision = change?.changeIdShort;
      const success = await repository.squash(revision);

      if (success) {
        vscode.window.showInformationMessage('Squashed change into parent');
      } else {
        vscode.window.showErrorMessage('Failed to squash change');
      }
    })
  );

  // Edit change
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.edit', async (arg?: Change | { change: Change }) => {
      if (!repository) {
        return;
      }

      // Handle both direct Change and tree item with change property
      const change = arg && 'change' in arg ? arg.change : arg;
      if (!change) {
        return;
      }

      const success = await repository.edit(change.changeIdShort);
      if (success) {
        vscode.window.showInformationMessage(`Now editing ${change.changeIdShort}`);
      } else {
        vscode.window.showErrorMessage('Failed to edit change');
      }
    })
  );

  // Abandon change
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.abandon', async (arg?: Change | { change: Change }) => {
      if (!repository) {
        return;
      }

      const change = arg && 'change' in arg ? arg.change : arg;
      if (!change) {
        return;
      }

      const confirm = await vscode.window.showWarningMessage(
        `Abandon change ${change.changeIdShort}?`,
        { modal: true },
        'Abandon'
      );

      if (confirm !== 'Abandon') {
        return;
      }

      const success = await repository.abandon(change.changeIdShort);
      if (success) {
        vscode.window.showInformationMessage(`Abandoned ${change.changeIdShort}`);
      } else {
        vscode.window.showErrorMessage('Failed to abandon change');
      }
    })
  );

  // Open file
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.openFile', async (arg: vscode.SourceControlResourceState | { resourceUri: vscode.Uri } | { file: { path: string } }) => {
      let uri: vscode.Uri | undefined;

      if (arg && 'resourceUri' in arg && arg.resourceUri) {
        uri = arg.resourceUri;
      } else if (arg && 'file' in arg && arg.file && repository) {
        uri = vscode.Uri.file(repository.getAbsolutePath(arg.file.path));
      }

      if (uri) {
        await vscode.window.showTextDocument(uri);
      }
    })
  );

  // Open change (show details)
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.openChange', async (change?: Change) => {
      if (!repository || !change) {
        return;
      }

      // Show diff for the change
      const diff = await repository.diff(undefined);
      const doc = await vscode.workspace.openTextDocument({
        content: diff,
        language: 'diff',
      });
      await vscode.window.showTextDocument(doc);
    })
  );

  // Revert file
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.revert', async (resource: vscode.SourceControlResourceState) => {
      if (!repository || !resource?.resourceUri) {
        return;
      }

      const confirm = await vscode.window.showWarningMessage(
        `Revert changes to ${vscode.workspace.asRelativePath(resource.resourceUri)}?`,
        { modal: true },
        'Revert'
      );

      if (confirm !== 'Revert') {
        return;
      }

      const relativePath = repository.getRelativePath(resource.resourceUri.fsPath);
      const success = await repository.restore(relativePath);

      if (success) {
        vscode.window.showInformationMessage('File reverted');
      } else {
        vscode.window.showErrorMessage('Failed to revert file');
      }
    })
  );

  // Manage bookmarks - tag-style UI
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.bookmark.manage', async (arg?: Change | { change: Change }) => {
      if (!repository) {
        return;
      }

      const change = arg && 'change' in arg ? arg.change : arg;
      const targetRevision = change?.changeIdShort ?? '@';
      const targetChangeId = change?.changeId ?? repository.currentChange?.changeId;

      // Get bookmarks on this change
      const bookmarksOnChange = repository.bookmarks.filter(
        b => !b.isRemote && targetChangeId && b.changeId === targetChangeId
      );
      const otherBookmarks = repository.bookmarks.filter(
        b => !b.isRemote && (!targetChangeId || b.changeId !== targetChangeId)
      );

      interface ActionItem extends vscode.QuickPickItem {
        action: 'remove' | 'add' | 'create';
        bookmarkName?: string;
      }

      const showPicker = async () => {
        // Refresh bookmark lists
        // Compare using startsWith since bookmark changeId might be short
        const isOnChange = (b: { changeId: string }) => {
          if (!targetChangeId) return false;
          return targetChangeId.startsWith(b.changeId) || b.changeId.startsWith(targetChangeId);
        };

        const currentOnChange = repository!.bookmarks.filter(
          b => !b.isRemote && isOnChange(b)
        );
        const currentOther = repository!.bookmarks.filter(
          b => !b.isRemote && !isOnChange(b)
        );

        const buildItems = (filter: string): ActionItem[] => {
          const items: ActionItem[] = [];
          const filterLower = filter.toLowerCase();

          // Current bookmarks on this change (removable)
          const matchingOnChange = currentOnChange.filter(b => b.name.toLowerCase().includes(filterLower));
          if (matchingOnChange.length > 0) {
            items.push({
              label: 'On this change',
              kind: vscode.QuickPickItemKind.Separator,
              action: 'remove',
            });
            for (const b of matchingOnChange) {
              items.push({
                label: `$(close)  ${b.name}`,
                description: 'click to remove',
                action: 'remove',
                bookmarkName: b.name,
              });
            }
          }

          // Other bookmarks (can be moved here)
          const matchingOther = currentOther.filter(b => b.name.toLowerCase().includes(filterLower));
          if (matchingOther.length > 0) {
            items.push({
              label: 'Move to this change',
              kind: vscode.QuickPickItemKind.Separator,
              action: 'add',
            });
            for (const b of matchingOther) {
              items.push({
                label: `$(add)  ${b.name}`,
                description: b.changeId.slice(0, 8),
                action: 'add',
                bookmarkName: b.name,
              });
            }
          }

          // Add "Create xxx" option if there's text and no exact match
          const allBookmarks = [...currentOnChange, ...currentOther];
          const hasExactMatch = allBookmarks.some(b => b.name.toLowerCase() === filterLower);
          if (filter.trim() && !hasExactMatch) {
            items.push({
              label: `$(plus)  Create "${filter.trim()}"`,
              description: 'Create new bookmark',
              action: 'create',
              bookmarkName: filter.trim(),
            });
          } else {
            // Create new option (static)
            items.push({
              label: 'Create new bookmark...',
              kind: vscode.QuickPickItemKind.Separator,
              action: 'create',
            });
            items.push({
              label: '$(plus)  Create new bookmark',
              description: 'type a name for the new bookmark',
              action: 'create',
            });
          }

          return items;
        };

        const quickPick = vscode.window.createQuickPick<ActionItem>();
        quickPick.title = `Bookmarks on ${change?.changeIdShort ?? '@'}`;
        quickPick.placeholder = currentOnChange.length > 0
          ? `Current: ${currentOnChange.map(b => b.name).join(', ')}`
          : 'No bookmarks on this change';
        quickPick.items = buildItems('');
        quickPick.matchOnDescription = true;

        quickPick.onDidChangeValue((value) => {
          quickPick.items = buildItems(value);
        });

        const picked = await new Promise<ActionItem | undefined>((resolve) => {
          quickPick.onDidAccept(() => {
            resolve(quickPick.selectedItems[0]);
            quickPick.hide();
          });
          quickPick.onDidHide(() => {
            resolve(undefined);
            quickPick.dispose();
          });
          quickPick.show();
        });

        if (!picked || picked.kind === vscode.QuickPickItemKind.Separator) {
          return;
        }

        if (picked.action === 'remove' && picked.bookmarkName) {
          // Remove = move to a new empty change (abandon it from here)
          // Actually in jj we can't easily "remove" a bookmark, we just move it
          // Let's ask where to move it or delete it
          const choice = await vscode.window.showQuickPick([
            { label: '$(trash)  Delete bookmark', value: 'delete' },
            { label: '$(arrow-right)  Move to different change...', value: 'move' },
          ], {
            title: `What to do with "${picked.bookmarkName}"?`,
          });

          if (choice?.value === 'delete') {
            await repository!.deleteBookmark(picked.bookmarkName);
            vscode.window.showInformationMessage(`Deleted bookmark "${picked.bookmarkName}"`);
          } else if (choice?.value === 'move') {
            const targetChange = await vscode.window.showInputBox({
              prompt: 'Enter change ID to move bookmark to',
              placeHolder: 'e.g., abc123',
            });
            if (targetChange) {
              await repository!.setBookmark(picked.bookmarkName, targetChange);
              vscode.window.showInformationMessage(`Moved "${picked.bookmarkName}" to ${targetChange}`);
            }
          }
          await showPicker(); // Show picker again
        } else if (picked.action === 'add' && picked.bookmarkName) {
          await repository!.setBookmark(picked.bookmarkName, targetRevision);
          vscode.window.showInformationMessage(`Moved "${picked.bookmarkName}" here`);
          await showPicker(); // Show picker again
        } else if (picked.action === 'create') {
          let name = picked.bookmarkName;
          if (!name) {
            name = await vscode.window.showInputBox({
              prompt: 'Enter new bookmark name',
              placeHolder: 'bookmark-name',
              validateInput: (v) => {
                if (!v?.trim()) return 'Name required';
                if (!/^[\w\-./]+$/.test(v)) return 'Invalid characters';
                if (repository!.bookmarks.some(b => b.name === v)) return 'Already exists';
                return null;
              },
            });
          }
          if (name) {
            // Validate the name
            if (!/^[\w\-./]+$/.test(name)) {
              vscode.window.showErrorMessage('Invalid bookmark name');
            } else if (repository!.bookmarks.some(b => b.name === name)) {
              vscode.window.showErrorMessage('Bookmark already exists');
            } else {
              await repository!.createBookmark(name, targetRevision);
              vscode.window.showInformationMessage(`Created bookmark "${name}"`);
            }
          }
          await showPicker(); // Show picker again
        }
      };

      await showPicker();
    })
  );

  // Create bookmark (simple version, kept for compatibility)
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.bookmark.create', async (arg?: Change | { change: Change }) => {
      if (!repository) {
        return;
      }

      const change = arg && 'change' in arg ? arg.change : arg;

      const name = await vscode.window.showInputBox({
        prompt: 'Enter bookmark name',
        placeHolder: 'Bookmark name',
        validateInput: (value) => {
          if (!value || value.trim().length === 0) {
            return 'Bookmark name is required';
          }
          if (!/^[\w\-./]+$/.test(value)) {
            return 'Invalid bookmark name';
          }
          return null;
        },
      });

      if (!name) {
        return;
      }

      const revision = change?.changeIdShort;
      const success = await repository.createBookmark(name, revision);

      if (success) {
        vscode.window.showInformationMessage(`Created bookmark "${name}"`);
      } else {
        vscode.window.showErrorMessage('Failed to create bookmark');
      }
    })
  );

  // Set bookmark
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.bookmark.set', async (change?: Change) => {
      if (!repository || !change) {
        return;
      }

      // Show existing bookmarks to choose from, with option to create new
      const bookmarks = repository.bookmarks.filter((b) => !b.isRemote);

      interface BookmarkItem extends vscode.QuickPickItem {
        isCreate?: boolean;
        bookmarkName?: string;
      }

      const quickPick = vscode.window.createQuickPick<BookmarkItem>();
      quickPick.placeholder = 'Select bookmark to move or type to create new';
      quickPick.matchOnDescription = true;

      const updateItems = () => {
        const filter = quickPick.value.toLowerCase();
        const matchingBookmarks: BookmarkItem[] = bookmarks
          .filter((b) => b.name.toLowerCase().includes(filter))
          .map((b) => ({
            label: b.name,
            description: `Currently at ${b.changeId.slice(0, 12)}`,
            bookmarkName: b.name,
          }));

        // Add "Create xxx" option if there's text and no exact match
        const hasExactMatch = bookmarks.some((b) => b.name.toLowerCase() === filter);
        if (quickPick.value.trim() && !hasExactMatch) {
          matchingBookmarks.push({
            label: `$(add) Create "${quickPick.value.trim()}"`,
            description: 'Create new bookmark',
            isCreate: true,
            bookmarkName: quickPick.value.trim(),
          });
        }

        quickPick.items = matchingBookmarks;
      };

      // Initial items
      quickPick.items = bookmarks.map((b) => ({
        label: b.name,
        description: `Currently at ${b.changeId.slice(0, 12)}`,
        bookmarkName: b.name,
      }));

      quickPick.onDidChangeValue(updateItems);

      const picked = await new Promise<BookmarkItem | undefined>((resolve) => {
        quickPick.onDidAccept(() => {
          resolve(quickPick.selectedItems[0]);
          quickPick.hide();
        });
        quickPick.onDidHide(() => {
          resolve(undefined);
          quickPick.dispose();
        });
        quickPick.show();
      });

      if (!picked || !picked.bookmarkName) {
        return;
      }

      let success: boolean;
      if (picked.isCreate) {
        // Validate the bookmark name
        if (!/^[\w\-./]+$/.test(picked.bookmarkName)) {
          vscode.window.showErrorMessage('Invalid bookmark name');
          return;
        }
        success = await repository.createBookmark(picked.bookmarkName, change.changeIdShort);
        if (success) {
          vscode.window.showInformationMessage(`Created bookmark "${picked.bookmarkName}"`);
        }
      } else {
        success = await repository.setBookmark(picked.bookmarkName, change.changeIdShort);
        if (success) {
          vscode.window.showInformationMessage(`Moved bookmark "${picked.bookmarkName}" to ${change.changeIdShort}`);
        }
      }

      if (!success) {
        vscode.window.showErrorMessage('Failed to set bookmark');
      }
    })
  );

  // Rebase change (drag and drop)
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.rebase', async (arg?: { sourceChangeId: string; targetChangeId: string }) => {
      if (!repository || !arg) {
        return;
      }

      const { sourceChangeId, targetChangeId } = arg;

      // Find the changes to get short IDs for display
      const sourceChange = repository.log.find(c => c.changeId === sourceChangeId);
      const targetChange = repository.log.find(c => c.changeId === targetChangeId);

      if (!sourceChange || !targetChange) {
        vscode.window.showErrorMessage('Could not find changes');
        return;
      }

      const confirm = await vscode.window.showWarningMessage(
        `Rebase "${sourceChange.description}" onto "${targetChange.description}"?`,
        { modal: true },
        'Rebase'
      );

      if (confirm !== 'Rebase') {
        return;
      }

      const success = await repository.rebase(sourceChange.changeIdShort, targetChange.changeIdShort);
      if (success) {
        vscode.window.showInformationMessage(`Rebased ${sourceChange.changeIdShort} onto ${targetChange.changeIdShort}`);
      } else {
        vscode.window.showErrorMessage('Failed to rebase change');
      }
    })
  );

  // Move file between changes (drag and drop)
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.moveFile', async (arg?: { filePath: string; fromChangeId: string; toChangeId: string }) => {
      if (!repository || !arg) {
        return;
      }

      const { filePath, fromChangeId, toChangeId } = arg;

      // Find the changes to get short IDs
      const fromChange = repository.log.find(c => c.changeId === fromChangeId);
      const toChange = repository.log.find(c => c.changeId === toChangeId);

      if (!fromChange || !toChange) {
        vscode.window.showErrorMessage('Could not find changes');
        return;
      }

      const confirm = await vscode.window.showWarningMessage(
        `Move "${filePath}" from ${fromChange.changeIdShort} to ${toChange.changeIdShort}?`,
        { modal: true },
        'Move'
      );

      if (confirm !== 'Move') {
        return;
      }

      const success = await repository.moveFiles(fromChange.changeIdShort, toChange.changeIdShort, [filePath]);
      if (success) {
        vscode.window.showInformationMessage(`Moved ${filePath} to ${toChange.changeIdShort}`);
      } else {
        vscode.window.showErrorMessage('Failed to move file');
      }
    })
  );

  // Delete bookmark
  context.subscriptions.push(
    vscode.commands.registerCommand('open-jj.bookmark.delete', async (bookmarkItem?: { bookmark: { name: string } }) => {
      if (!repository) {
        return;
      }

      let name: string | undefined;

      if (bookmarkItem?.bookmark) {
        name = bookmarkItem.bookmark.name;
      } else {
        // Show picker
        const bookmarks = repository.bookmarks.filter((b) => !b.isRemote);
        const picked = await vscode.window.showQuickPick(
          bookmarks.map((b) => b.name),
          { placeHolder: 'Select bookmark to delete' }
        );
        name = picked;
      }

      if (!name) {
        return;
      }

      const confirm = await vscode.window.showWarningMessage(
        `Delete bookmark "${name}"?`,
        { modal: true },
        'Delete'
      );

      if (confirm !== 'Delete') {
        return;
      }

      const success = await repository.deleteBookmark(name);
      if (success) {
        vscode.window.showInformationMessage(`Deleted bookmark "${name}"`);
      } else {
        vscode.window.showErrorMessage('Failed to delete bookmark');
      }
    })
  );
}

export function deactivate(): void {
  console.log('open-jj extension deactivated');
}
