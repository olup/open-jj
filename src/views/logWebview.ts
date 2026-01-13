import * as vscode from 'vscode';
import { Repository } from '../repository/repository';
import { Change, Bookmark, FileChange, PullRequestInfo, PullRequestState, LogRow } from '../jj/types';
import { GraphInfo, computeDistantParents, computeGraph } from './graphLayout';
import { PadLine } from './renderDag';

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
    this._render();
    this._prefetchExpandedChanges(true);
  }

  private _render(): void {
    if (!this._view) {
      return;
    }

    this._view.webview.html = this._getHtmlContent();
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
      Promise.all(pending).then(() => this._render());
    }
  }

  private async _handleMessage(message: { command: string; [key: string]: unknown }): Promise<void> {
    if (!this._repository) return;

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
              .ensure(commitId, () => this._repository!.getFilesForRevision(change.commitIdShort, change.hasConflict), false)
              .then(() => this._render());
          }
        }
        this.refresh();
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
        const uri = vscode.Uri.file(this._repository.getAbsolutePath(filePath));
        vscode.window.showTextDocument(uri);
        break;

      case 'openDiff':
        const diffPath = message.path as string;
        const revision = message.revision as string | undefined;
        const absPath = this._repository.getAbsolutePath(diffPath);
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
        await this._repository.refresh({ refreshPrInfo: true });
        break;


      case 'rebaseChange':
        const sourceId = message.sourceChangeId as string;
        const targetId = message.targetChangeId as string;
        vscode.commands.executeCommand('open-jj.rebase', { sourceChangeId: sourceId, targetChangeId: targetId });
        break;

      case 'moveBookmark':
        const bookmarkName = message.bookmarkName as string;
        const bookmarkTargetId = message.targetChangeId as string;
        const moveSuccess = await this._repository.setBookmark(bookmarkName, bookmarkTargetId);
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
        const pushResult = await this._repository.pushBookmark(pushName);
        if (pushResult.success) {
          vscode.window.showInformationMessage(`Pushed bookmark "${pushName}"`);
        } else {
          const details = pushResult.stderr?.trim();
          vscode.window.showErrorMessage(`Failed to push bookmark "${pushName}"${details ? `: ${details}` : ''}`);
        }
        break;

      case 'deleteBookmark':
        const deleteName = message.bookmarkName as string;
        const deleteSuccess = await this._repository.deleteBookmark(deleteName);
        if (!deleteSuccess) {
          vscode.window.showErrorMessage(`Failed to delete bookmark "${deleteName}"`);
        }
        break;

      case 'createPullRequest':
        const prBookmark = message.bookmarkName as string;
        const remoteUrl = await this._repository.getRemoteUrl();
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
        const authenticated = await this._repository.authenticateGitHub();
        if (authenticated) {
          vscode.window.showInformationMessage('GitHub authenticated! Refreshing PR status...');
          await this._repository.refreshPrInfo();
        } else {
          vscode.window.showErrorMessage('GitHub authentication failed');
        }
        break;

      case 'pushAndCreatePr':
        const pushPrBookmark = message.bookmarkName as string;
        const pushPrResult = await this._repository.pushBookmark(pushPrBookmark);
        if (pushPrResult.success) {
          vscode.window.showInformationMessage(`Pushed bookmark "${pushPrBookmark}"`);
          // Now open PR creation page
          const pushPrRemoteUrl = await this._repository.getRemoteUrl();
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
    const changes = this._repository?.log ?? [];
    const fullChanges = this._repository?.fullLog ?? changes;
    const logRows = this._repository?.logRows ?? changes.map((change) => ({
      graphPrefix: '',
      change,
    }));
    const renderRows = logRows.filter((row) => row.change);
    const workingCopyFiles = this._repository?.changedFiles ?? [];
    const { parentOverrides, dashedParents } = computeDistantParents(changes, fullChanges);
    const graphInfo = computeGraph(changes, { parentOverrides, dashedParents });

    // Get codicon font URI
    const codiconsUri = this._view?.webview.asWebviewUri(
      vscode.Uri.joinPath(this._extensionUri, 'resources', 'codicons', 'codicon.css')
    );

    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="${codiconsUri}" rel="stylesheet" />
  <style>
    ${this._getStyles()}
  </style>
</head>
<body>
  <div class="log">
    ${changes.length === 0 ? '<div class="empty">No changes found</div>' : ''}
    ${(() => {
      return renderRows.map((row, index) => {
        if (row.change) {
          return this._renderChange(
            row.change,
            workingCopyFiles,
            this._changeFiles,
            index,
            renderRows.length,
            graphInfo.get(row.change.commitId)
          );
        }
        return this._renderGraphRow(row);
      }).join('');
    })()}
  </div>
  <script>
    const vscode = acquireVsCodeApi();
    function send(command, data = {}) {
      vscode.postMessage({ command, ...data });
    }
    function toggleChange(commitId) {
      send('toggleChange', { commitId });
    }
    function editChange(changeId, event) {
      if (event) event.stopPropagation();
      send('editChange', { changeId });
      hideContextMenu();
    }
    function manageBookmarks(changeId, event) {
      if (event) event.stopPropagation();
      send('manageBookmarks', { changeId });
      hideContextMenu();
    }
    function openFile(path, event) {
      if (event) event.stopPropagation();
      send('openFile', { path });
    }
    function openDiff(path, revision, event) {
      if (event) event.stopPropagation();
      send('openDiff', { path, revision });
    }
    function describeChange(changeId, event) {
      if (event) event.stopPropagation();
      send('describeChange', { changeId });
      hideContextMenu();
    }
    function squashChange(changeId) {
      send('squashChange', { changeId });
      hideContextMenu();
    }
    function abandonChange(changeId) {
      send('abandonChange', { changeId });
      hideContextMenu();
    }

    function newChangeFrom(changeId, event) {
      if (event) event.stopPropagation();
      send('newChangeFrom', { changeId });
      hideContextMenu();
    }

    function copyChangeId(changeId) {
      navigator.clipboard.writeText(changeId);
      hideContextMenu();
    }

    function copyBookmarkName(bookmarkName) {
      navigator.clipboard.writeText(bookmarkName);
      hideContextMenu();
    }

    function pushAndCreatePr(bookmarkName) {
      send('pushAndCreatePr', { bookmarkName });
      hideContextMenu();
    }

    function openPrUrl(url, event) {
      if (event) event.stopPropagation();
      send('openUrl', { url });
    }


    let currentContextMenu = null;
    function showContextMenu(event, changeId, isWorkingCopy) {
      event.preventDefault();
      event.stopPropagation();
      hideContextMenu();

      const menu = document.createElement('div');
      menu.className = 'context-menu';
      menu.innerHTML = \`
        <div class="context-menu-item" onclick="copyChangeId('\${changeId}')">Copy Change ID</div>
        <div class="context-menu-separator"></div>
        <div class="context-menu-item" onclick="newChangeFrom('\${changeId}')">New Change</div>
        <div class="context-menu-item" onclick="describeChange('\${changeId}')">Describe Change</div>
        <div class="context-menu-item" onclick="manageBookmarks('\${changeId}')">Manage Bookmarks</div>
        \${!isWorkingCopy ? \`<div class="context-menu-item" onclick="editChange('\${changeId}')">Edit Change</div>\` : ''}
        <div class="context-menu-item" onclick="squashChange('\${changeId}')">Squash into Parent</div>
        <div class="context-menu-separator"></div>
        <div class="context-menu-item danger" onclick="abandonChange('\${changeId}')">Abandon Change</div>
      \`;
      menu.style.left = event.pageX + 'px';
      menu.style.top = event.pageY + 'px';
      document.body.appendChild(menu);
      currentContextMenu = menu;
    }

    function hideContextMenu() {
      if (currentContextMenu) {
        currentContextMenu.remove();
        currentContextMenu = null;
      }
    }

    function showBookmarkMenu(event, bookmarkName, changeId, isTracked) {
      event.preventDefault();
      event.stopPropagation();
      hideContextMenu();

      const menu = document.createElement('div');
      menu.className = 'context-menu';

      let menuItems = '';
      menuItems += \`<div class="context-menu-item" onclick="copyBookmarkName('\${bookmarkName}')">Copy Bookmark Name</div>\`;
      menuItems += \`<div class="context-menu-separator"></div>\`;
      if (isTracked) {
        menuItems += \`<div class="context-menu-item" onclick="createPullRequest('\${bookmarkName}')">Create Pull Request</div>\`;
        menuItems += \`<div class="context-menu-item" onclick="pushBookmark('\${bookmarkName}')">Push to Remote</div>\`;
      } else {
        menuItems += \`<div class="context-menu-item" onclick="pushBookmark('\${bookmarkName}')">Push to Remote</div>\`;
        menuItems += \`<div class="context-menu-item" onclick="pushAndCreatePr('\${bookmarkName}')">Push and Create PR</div>\`;
      }
      menuItems += \`<div class="context-menu-separator"></div>\`;
      menuItems += \`<div class="context-menu-item" onclick="manageBookmarks('\${changeId}')">Manage Bookmarks</div>\`;
      menuItems += \`<div class="context-menu-separator"></div>\`;
      menuItems += \`<div class="context-menu-item danger" onclick="deleteBookmark('\${bookmarkName}')">Delete Bookmark</div>\`;

      menu.innerHTML = menuItems;
      menu.style.left = event.pageX + 'px';
      menu.style.top = event.pageY + 'px';
      document.body.appendChild(menu);
      currentContextMenu = menu;
    }

    function pushBookmark(bookmarkName) {
      send('pushBookmark', { bookmarkName });
      hideContextMenu();
    }

    function deleteBookmark(bookmarkName) {
      send('deleteBookmark', { bookmarkName });
      hideContextMenu();
    }

    function createPullRequest(bookmarkName) {
      send('createPullRequest', { bookmarkName });
      hideContextMenu();
    }

    document.addEventListener('click', hideContextMenu);

    // Drag and drop handlers - use JSON in text/plain for webview compatibility
    let dragData = null;

    function dragChange(event, changeId) {
      event.stopPropagation();
      dragData = { type: 'change', changeId: changeId };
      event.dataTransfer.setData('text/plain', JSON.stringify(dragData));
      event.dataTransfer.effectAllowed = 'move';
    }

    function dragBookmark(event, bookmarkName, fromChangeId) {
      event.stopPropagation();
      dragData = { type: 'bookmark', bookmarkName: bookmarkName, fromChangeId: fromChangeId };
      event.dataTransfer.setData('text/plain', 'bookmark');
      event.dataTransfer.effectAllowed = 'move';
    }

    function dragFile(event, filePath, fromChangeId) {
      event.stopPropagation();
      dragData = { type: 'file', filePath: filePath, fromChangeId: fromChangeId };
      event.dataTransfer.setData('text/plain', JSON.stringify(dragData));
      event.dataTransfer.effectAllowed = 'move';
    }

    // Use document-level event delegation for drag/drop to handle events on child elements
    document.addEventListener('dragover', function(event) {
      const header = event.target.closest('.change-header');
      if (header) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
      }
    });

    document.addEventListener('dragenter', function(event) {
      const header = event.target.closest('.change-header');
      if (header) {
        event.preventDefault();
        header.classList.add('drag-over');
      }
    });

    document.addEventListener('dragleave', function(event) {
      const header = event.target.closest('.change-header');
      if (header) {
        const relatedTarget = event.relatedTarget;
        // Only remove drag-over if we're actually leaving the header, not entering a child
        if (!relatedTarget || !header.contains(relatedTarget)) {
          header.classList.remove('drag-over');
        }
      }
    });

    document.addEventListener('drop', function(event) {
      const header = event.target.closest('.change-header');
      if (header) {
        event.preventDefault();
        event.stopPropagation();
        header.classList.remove('drag-over');

        const targetChangeId = header.dataset.changeId;
        if (!dragData || !targetChangeId) {
          return;
        }

        const data = dragData;
        dragData = null;

        if (data.type === 'change') {
          if (data.changeId !== targetChangeId) {
            send('rebaseChange', { sourceChangeId: data.changeId, targetChangeId: targetChangeId });
          }
        } else if (data.type === 'bookmark') {
          vscode.postMessage({
            command: 'moveBookmark',
            bookmarkName: data.bookmarkName,
            targetChangeId: targetChangeId
          });
        } else if (data.type === 'file') {
          if (data.fromChangeId !== targetChangeId) {
            send('moveFile', { filePath: data.filePath, fromChangeId: data.fromChangeId, targetChangeId: targetChangeId });
          }
        }
      }
    });
  </script>
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
         <button class="describe-btn" onclick="describeChange('${change.changeId}', event)" title="Describe change">Describe</button>`;

    return `
      <div class="change ${isWorkingCopy ? 'working-copy' : ''} ${change.hasConflict ? 'conflict' : ''}" data-change-id="${change.changeId}" data-commit-id="${change.commitId}" data-parent-ids='${JSON.stringify(change.parentIds)}'>
        <div class="change-header" data-change-id="${change.changeId}" data-commit-id="${change.commitId}" onclick="toggleChange('${change.commitId}')" oncontextmenu="showContextMenu(event, '${change.changeId}', ${isWorkingCopy})">
          <span class="graph-node" draggable="true" ondragstart="dragChange(event, '${change.changeId}')" onclick="event.stopPropagation()" ondblclick="editChange('${change.changeId}', event)" title="Double-click to edit change">
            ${graphMarkup}
          </span>
          <span class="expand-icon codicon ${hasFiles ? '' : 'hidden'} ${isExpanded ? 'codicon-chevron-down' : 'codicon-chevron-right'}"></span>
          ${descriptionHtml}
          ${this._renderBookmarks(localBookmarks, remoteBookmarks, change.changeId)}
          <span class="change-actions">
            <button class="icon-button small" onclick="newChangeFrom('${change.changeId}', event)" title="New change from here">
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

      const safeName = cleanName.replace(/'/g, "\\'").replace(/"/g, '\\"');
      const displayName = cleanName;
      const conflictIcon = isDiverged
        ? '<span class="codicon codicon-cloud badge-cloud-icon diverged" title="Diverged"></span>'
        : '';
      const syncedIcon = isTracked
        ? '<span class="codicon codicon-cloud badge-cloud-icon" title="Synced"></span>'
        : '';
      const prIcon = pr ? '<span class="codicon codicon-git-merge badge-pr-icon" title="Pull request"></span>' : '';
      const prUrl = pr?.url ? pr.url.replace(/'/g, "\\'") : '';
      const onclickHandler = prUrl ? `onclick="openPrUrl('${prUrl}', event)"` : '';
      const clickableClass = prUrl ? ' clickable' : '';
      badges.push(`<span class="${badgeClass}${clickableClass}" draggable="true" ondragstart="dragBookmark(event, '${safeName}', '${changeId}')" oncontextmenu="showBookmarkMenu(event, '${safeName}', '${changeId}', ${isTracked})" ${onclickHandler} title="${tooltip}">${this._escapeHtml(displayName)}${prIcon}${syncedIcon}${conflictIcon}</span>`);
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
    return `<span class="bookmarks" onclick="manageBookmarks('${changeId}', event)" title="Manage Bookmarks">${badges.join('')}</span>`;
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
            <div class="file" draggable="true" ondragstart="dragFile(event, '${this._escapeHtml(file.path)}', '${changeId || ''}')" title="Drag to move to another change">
              <span class="file-icon ${file.status}"><span class="codicon ${this._getFileIcon(file.status)}"></span></span>
              <span class="file-path" onclick="openDiff('${this._escapeHtml(file.path)}', ${revision ? `'${revision}'` : 'undefined'}, event)">
                ${this._escapeHtml(file.path)}
              </span>
              <button class="icon-button small" onclick="openFile('${this._escapeHtml(file.path)}', event)" title="Open File">
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

  private _getStyles(): string {
    return `
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      body {
        font-family: var(--vscode-font-family);
        font-size: var(--vscode-font-size);
        color: var(--vscode-foreground);
        background: var(--vscode-sideBar-background);
        padding: 0;
      }

      .toolbar {
        display: flex;
        gap: 4px;
        padding: 4px 8px;
        border-bottom: 1px solid var(--vscode-sideBarSectionHeader-border);
        background: var(--vscode-sideBarSectionHeader-background);
      }

      .icon-button {
        background: transparent;
        border: none;
        color: var(--vscode-foreground);
        cursor: pointer;
        padding: 4px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .icon-button:hover {
        background: var(--vscode-toolbar-hoverBackground);
      }

      .icon-button.small {
        padding: 2px;
        opacity: 0;
        transition: opacity 0.1s;
      }

      .change-header:hover .icon-button.small,
      .file:hover .icon-button.small {
        opacity: 1;
      }

      .codicon {
        font-family: codicon;
        font-size: 14px;
      }

      .codicon-add::before { content: "\\ea60"; }
      .codicon-refresh::before { content: "\\eb37"; }
      .codicon-bookmark::before { content: "\\ea67"; }
      .codicon-edit::before { content: "\\ea73"; }
      .codicon-go-to-file::before { content: "\\ea94"; }
      .codicon-chevron-right::before { content: "\\eab6"; }
      .codicon-chevron-down::before { content: "\\eab4"; }
      .codicon-github::before { content: "\\ea84"; }

      .github-btn {
        margin-left: auto;
      }

      .github-btn.authenticated {
        color: var(--vscode-gitDecoration-addedResourceForeground);
      }

      .log {
        padding: 4px 0 4px 6px;
        position: relative;
        z-index: 2;
      }

      .empty {
        padding: 16px;
        text-align: center;
        color: var(--vscode-descriptionForeground);
      }

      .change {
        /* Node styling is handled by SVG */
      }

      .change-header {
        display: flex;
        align-items: center;
        gap: 0;
        padding: 0 8px 0 0;
        cursor: pointer;
        user-select: none;
        min-height: 28px;
      }

      .change-header:hover {
        background: var(--vscode-list-hoverBackground);
      }

      .graph-cell {
        flex-shrink: 0;
        margin-right: 4px;
        display: flex;
        align-items: center;
      }

      .expand-icon {
        width: 14px;
        min-width: 14px;
        font-size: 14px;
        color: var(--vscode-descriptionForeground);
        flex-shrink: 0;
      }

      .expand-icon.hidden {
        visibility: hidden;
      }

      .graph-node {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        min-width: 12px;
        flex-shrink: 0;
        cursor: grab;
      }

      .graph-node:active {
        cursor: grabbing;
      }

      .graph-row {
        display: flex;
        align-items: center;
        padding: 0 8px 0 0;
        min-height: 20px;
        color: var(--vscode-descriptionForeground);
      }

      .graph-row.elided {
        opacity: 0.8;
        font-style: italic;
      }

      .graph-prefix {
        display: inline-block;
        white-space: pre;
        font-family: var(--vscode-editor-font-family);
        font-size: 12px;
        line-height: 1;
        min-width: 20px;
        margin-right: 4px;
        color: var(--vscode-textLink-foreground);
      }

      .graph-row-label {
        font-size: 12px;
        color: var(--vscode-descriptionForeground);
      }

      .graph-elided-svg {
        display: block;
      }

      .graph-elided-line {
        stroke: var(--vscode-descriptionForeground);
        stroke-width: 1.5;
        stroke-dasharray: 4 3;
        opacity: 1;
        stroke-linecap: round;
      }

      .graph-node svg {
        display: block;
        flex-shrink: 0;
      }

      /* Drag and drop styles */
      .change-header.drag-over {
        background: var(--vscode-list-dropBackground);
        outline: 1px dashed var(--vscode-focusBorder);
      }

      .badge[draggable="true"] {
        cursor: grab;
      }

      .badge[draggable="true"]:active {
        cursor: grabbing;
      }

      .file[draggable="true"] {
        cursor: grab;
      }

      .file[draggable="true"]:active {
        cursor: grabbing;
      }

      .change-desc {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-left: 4px;
      }

      .change-desc.placeholder {
        min-width: 4px;
      }

      .describe-btn {
        border: none;
        background: var(--vscode-button-secondaryBackground);
        color: var(--vscode-button-secondaryForeground);
        font-size: 11px;
        padding: 2px 6px;
        border-radius: 4px;
        cursor: pointer;
      }

      .describe-btn:hover {
        background: var(--vscode-button-secondaryHoverBackground);
      }

      .change-actions {
        display: flex;
        gap: 2px;
        margin-left: auto;
        padding-left: 8px;
      }

      .bookmarks {
        display: flex;
        flex-shrink: 0;
        white-space: nowrap;
        cursor: pointer;
        margin-left: 4px;
      }

      .bookmarks:hover .badge {
        opacity: 0.8;
      }

      /* Bookmark badges */
      .badge {
        display: inline-block;
        padding: 1px 6px;
        border-radius: 3px;
        font-size: 11px;
        font-weight: 500;
        margin-left: 4px;
        flex-shrink: 0;
      }

      /* Local: gray - not pushed yet */
      .badge.local {
        background: var(--vscode-badge-background);
        color: var(--vscode-badge-foreground);
      }

      /* Tracked: blue - pushed to remote but no PR */
      .badge.tracked {
        background: #0969da;
        color: white;
      }

      /* PR Open: purple - has open PR */
      .badge.pr-open {
        background: #8250df;
        color: white;
      }

      /* PR Draft: gray-purple - has draft PR */
      .badge.pr-draft {
        background: #6e7781;
        color: white;
      }

      /* PR Closed: red - PR was closed without merge */
      .badge.pr-closed {
        background: var(--vscode-editor-background);
        color: var(--vscode-descriptionForeground);
        border: 1px solid var(--vscode-editorWidget-border);
        opacity: 0.65;
      }

      /* Merged: green - PR was merged */
      .badge.merged {
        background: #1a7f37;
        color: white;
      }

      /* Remote only: dim - only exists on remote */
      .badge.remote {
        background: var(--vscode-gitDecoration-modifiedResourceForeground);
        color: var(--vscode-editor-background);
        opacity: 0.7;
      }

      /* Conflicted: add warning border */
      .badge.conflicted {
        border: 2px solid #d29922;
      }

      .badge-cloud-icon {
        margin-left: 4px;
        font-size: 10px;
        vertical-align: -1px;
        position: relative;
        display: inline-block;
      }

      .badge-cloud-icon.codicon {
        font-size: 10px;
      }

      .badge-cloud-icon.diverged::after {
        content: '';
        position: absolute;
        left: -1px;
        top: 5px;
        width: 12px;
        height: 1px;
        background: currentColor;
        transform: rotate(-35deg);
        opacity: 0.9;
      }

      .badge-pr-icon {
        margin-left: 4px;
        font-size: 10px;
        vertical-align: -1px;
        opacity: 0.9;
      }

      .badge-pr-icon.codicon {
        font-size: 10px;
      }

      /* Clickable badges (have PR URL) */
      .badge.clickable {
        cursor: pointer;
      }

      .badge.clickable:hover {
        opacity: 0.8;
        text-decoration: underline;
      }

      /* Files */
      .files {
        padding-left: 0;
        padding-bottom: 4px;
        position: relative;
      }

      .file {
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 2px 8px;
        cursor: pointer;
      }

      .file:hover {
        background: var(--vscode-list-hoverBackground);
      }

      .file-icon {
        width: 16px;
        text-align: center;
      }

      .file-icon .codicon {
        font-size: 14px;
      }

      .files-gutter {
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        pointer-events: none;
      }

      .graph-file-svg {
        display: block;
        height: 100%;
      }

      .files-list {
        display: block;
      }

      .file-icon.added { color: var(--vscode-gitDecoration-addedResourceForeground); }
      .file-icon.modified { color: var(--vscode-gitDecoration-modifiedResourceForeground); }
      .file-icon.deleted { color: var(--vscode-gitDecoration-deletedResourceForeground); }
      .file-icon.conflict { color: var(--vscode-gitDecoration-conflictingResourceForeground); }

      .file-path {
        flex: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-family: var(--vscode-font-family);
        font-size: var(--vscode-font-size);
      }

      .file-path:hover {
        text-decoration: none;
      }

      /* Context menu */
      .context-menu {
        position: absolute;
        background: var(--vscode-menu-background);
        border: 1px solid var(--vscode-menu-border);
        border-radius: 4px;
        padding: 4px 0;
        min-width: 160px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        z-index: 1000;
      }

      .context-menu-item {
        padding: 6px 12px;
        cursor: pointer;
        color: var(--vscode-menu-foreground);
      }

      .context-menu-item:hover {
        background: var(--vscode-menu-selectionBackground);
        color: var(--vscode-menu-selectionForeground);
      }

      .context-menu-item.danger {
        color: var(--vscode-errorForeground);
      }

      .context-menu-item.danger:hover {
        background: var(--vscode-inputValidation-errorBackground);
      }

      .context-menu-separator {
        height: 1px;
        background: var(--vscode-menu-separatorBackground);
        margin: 4px 0;
      }
    `;
  }

  dispose(): void {
    this._disposables.forEach(d => d.dispose());
  }
}
