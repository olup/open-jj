import React, { useEffect, useMemo, useRef, useState } from 'react';

type FileChange = {
  path: string;
  status: 'added' | 'modified' | 'deleted' | 'renamed' | 'copied' | 'conflict';
  originalPath?: string;
};

type Change = {
  changeId: string;
  changeIdShort: string;
  commitId: string;
  commitIdShort: string;
  description: string;
  authorName: string;
  authorEmail: string;
  authorTimestamp: string;
  committerName: string;
  committerEmail: string;
  committerTimestamp: string;
  isWorkingCopy: boolean;
  isEmpty: boolean;
  hasConflict: boolean;
  isImmutable: boolean;
  parentIds: string[];
  bookmarks: string[];
  tags: string[];
  gitRefs: string[];
};

type Bookmark = {
  name: string;
  changeId: string;
  isRemote: boolean;
  remote?: string;
  isConflicted: boolean;
  isTracked: boolean;
};

type PullRequestInfo = {
  number: number;
  state: 'none' | 'open' | 'merged' | 'closed' | 'draft';
  url: string;
  title: string;
};

type GraphInfo = {
  nodeColumn: number;
  activeColumns: boolean[];
  maxColumns: number;
  isTip: boolean;
  hasParents: boolean;
  mergingFrom: number[];
  branchingTo: number[];
  hasTopLine?: boolean;
  hasBottomLine?: boolean;
  preNodeLine?: number[];
  postNodeLine?: number[];
  linkLine?: number[];
  linkLineFromNode?: number[];
  parentColumns?: number[];
  dashedParentColumns?: number[];
};

type WebviewState = {
  hasRepository: boolean;
  changes: Change[];
  workingCopyFiles: FileChange[];
  expandedCommitIds: string[];
  changeFiles: Record<string, FileChange[]>;
  graphInfo: Record<string, GraphInfo>;
  prInfo: Record<string, PullRequestInfo>;
  bookmarks: Bookmark[];
};

declare global {
  interface Window {
    __INITIAL_STATE__?: WebviewState;
  }
}

const copyToClipboard = async (text: string) => {
  if (!text) {
    return;
  }
  try {
    await navigator.clipboard.writeText(text);
    return;
  } catch {
    // Fallback for environments without clipboard permissions.
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', 'true');
  textarea.style.position = 'fixed';
  textarea.style.top = '-1000px';
  textarea.style.left = '-1000px';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
  } finally {
    document.body.removeChild(textarea);
  }
};

declare const acquireVsCodeApi: () => { postMessage: (message: unknown) => void };

const vscode = acquireVsCodeApi();
const GRAPH_COL_WIDTH = 12;

function send(command: string, data: Record<string, unknown> = {}) {
  vscode.postMessage({ command, ...data });
}

function getInitialState(): WebviewState {
  return (
    window.__INITIAL_STATE__ ?? {
      hasRepository: false,
      changes: [],
      workingCopyFiles: [],
      expandedCommitIds: [],
      changeFiles: {},
      graphInfo: {},
      prInfo: {},
      bookmarks: [],
    }
  );
}

// LinkLine bit flags (must match renderDag.ts)
const LinkLine = {
  HORIZ_PARENT: 1 << 0,
  HORIZ_ANCESTOR: 1 << 1,
  VERT_PARENT: 1 << 2,
  VERT_ANCESTOR: 1 << 3,
  LEFT_FORK_PARENT: 1 << 4,
  LEFT_FORK_ANCESTOR: 1 << 5,
  RIGHT_FORK_PARENT: 1 << 6,
  RIGHT_FORK_ANCESTOR: 1 << 7,
  LEFT_MERGE_PARENT: 1 << 8,
  LEFT_MERGE_ANCESTOR: 1 << 9,
  RIGHT_MERGE_PARENT: 1 << 10,
  RIGHT_MERGE_ANCESTOR: 1 << 11,
};

function renderNodeSvg(change: Change, isFirst: boolean, isLast: boolean, graphInfo?: GraphInfo): string {
  const colWidth = GRAPH_COL_WIDTH;
  const svgHeight = 42;
  const nodeSize = 4;
  const cy = svgHeight / 2; // Node centered in full SVG height
  const linkY = svgHeight; // Where straight vertical lines end
  const curveEndY = svgHeight; // Where curves can extend to
  const r = 5; // Corner radius for orthogonal curves

  const nodeColumn = graphInfo?.nodeColumn ?? 0;
  const maxColumns = graphInfo?.maxColumns ?? 1;
  const width = Math.max(maxColumns * colWidth + colWidth, 16);
  const nodeX = nodeColumn * colWidth + colWidth / 2;

  const lineColor = 'var(--graph-line-color, var(--vscode-descriptionForeground))';
  const baseNodeStroke = change.isWorkingCopy
    ? 'var(--vscode-textLink-foreground)'
    : change.hasConflict
      ? 'var(--vscode-gitDecoration-conflictingResourceForeground)'
      : 'var(--vscode-descriptionForeground)';
  const baseNodeFill = change.isWorkingCopy
    ? 'var(--vscode-textLink-foreground)'
    : change.hasConflict
      ? 'var(--vscode-gitDecoration-conflictingResourceForeground)'
      : 'var(--vscode-editor-background)';
  const nodeStroke = `var(--graph-node-stroke, ${baseNodeStroke})`;
  const nodeFill = `var(--graph-node-fill, ${baseNodeFill})`;

  let svg = `<svg width="${width}" height="${svgHeight}" viewBox="0 0 ${width} ${svgHeight}" xmlns="http://www.w3.org/2000/svg">`;

  const preNodeLine = graphInfo?.preNodeLine ?? [];
  const postNodeLine = graphInfo?.postNodeLine ?? [];
  const parentColumns = graphInfo?.parentColumns ?? [];
  const dashedParentColumns = new Set(graphInfo?.dashedParentColumns ?? []);
  const linkLine = graphInfo?.linkLine ?? [];
  const linkLineFromNode = graphInfo?.linkLineFromNode ?? [];

  const dashedRanges = (graphInfo?.dashedParentColumns ?? []).map((col) => ({ min: col - 0.5, max: col + 0.5 }));
  const isDashedColumn = (col: number) => dashedRanges.some((range) => col > range.min && col < range.max);

  // Pre-compute isFromNode for vertical line drawing
  const nodeFromFlags = linkLineFromNode[nodeColumn] ?? 0;
  const isFromNode = nodeFromFlags !== 0;

  // Find the column where the fromNode curve starts (right column with LEFT_MERGE when isFromNode)
  let fromNodeCurveStartCol = -1;
  if (isFromNode) {
    const nodeFlags = linkLine[nodeColumn] ?? 0;
    const hasRightFork = (nodeFlags & (LinkLine.RIGHT_FORK_PARENT | LinkLine.RIGHT_FORK_ANCESTOR)) !== 0;
    if (hasRightFork) {
      for (let col = nodeColumn + 1; col < linkLine.length; col++) {
        const colFlags = linkLine[col] ?? 0;
        if ((colFlags & (LinkLine.LEFT_MERGE_PARENT | LinkLine.LEFT_MERGE_ANCESTOR)) !== 0) {
          fromNodeCurveStartCol = col;
          break;
        }
      }
    }
  }

  for (let col = 0; col < maxColumns; col += 1) {
    const x = col * colWidth + colWidth / 2;
    if (preNodeLine[col] !== undefined && preNodeLine[col] !== 0) {
      svg += `<line x1="${x}" y1="0" x2="${x}" y2="${cy}" stroke="${lineColor}" stroke-width="1"/>`;
    }
    const hasStraightParent = graphInfo?.parentColumns?.includes(nodeColumn) ?? false;
    if (col === nodeColumn && !hasStraightParent) {
      continue;
    }
    // Skip bottom vertical line on fromNode curve start column (curve replaces it)
    if (col === fromNodeCurveStartCol) {
      continue;
    }
    if (postNodeLine[col] !== undefined && postNodeLine[col] !== 0) {
      svg += `<line x1="${x}" y1="${cy}" x2="${x}" y2="${linkY}" stroke="${lineColor}" stroke-width="1"/>`;
    }
  }

  // Draw curves from parentColumns (for multi-parent merges)
  // Using orthogonal paths with rounded corners, extending into overflow area
  for (const parentCol of parentColumns) {
    if (parentCol === nodeColumn) {
      continue;
    }
    const parentX = parentCol * colWidth + colWidth / 2;
    const dashed = dashedParentColumns.has(parentCol) ? ' stroke-dasharray="3 3"' : '';
    const startY = cy + nodeSize + 1;
    const horizY = curveEndY - r; // Horizontal segment near bottom of overflow area
    const goingRight = parentX > nodeX;
    const dir = goingRight ? 1 : -1;

    // Orthogonal path: down -> rounded corner -> horizontal -> rounded corner -> down
    const path = [
      `M ${nodeX} ${startY}`,
      `L ${nodeX} ${horizY - r}`,
      `A ${r} ${r} 0 0 ${goingRight ? 0 : 1} ${nodeX + dir * r} ${horizY}`,
      `L ${parentX - dir * r} ${horizY}`,
      `A ${r} ${r} 0 0 ${goingRight ? 1 : 0} ${parentX} ${horizY + r}`,
      `L ${parentX} ${curveEndY}`,
    ].join(' ');
    svg += `<path d="${path}" stroke="${lineColor}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${dashed}/>`;
  }

  // Draw curves from linkLine (for fork/merge patterns after column swap)
  // Using orthogonal paths with rounded corners
  const nodeFlags = linkLine[nodeColumn] ?? 0;
  const hasRightFork = (nodeFlags & (LinkLine.RIGHT_FORK_PARENT | LinkLine.RIGHT_FORK_ANCESTOR)) !== 0;
  if (hasRightFork) {
    // Find the column with LEFT_MERGE
    for (let col = nodeColumn + 1; col < linkLine.length; col++) {
      const colFlags = linkLine[col] ?? 0;
      const hasLeftMerge = (colFlags & (LinkLine.LEFT_MERGE_PARENT | LinkLine.LEFT_MERGE_ANCESTOR)) !== 0;
      if (hasLeftMerge) {
        const targetX = col * colWidth + colWidth / 2;
        const dashed = isDashedColumn(col) ? ' stroke-dasharray="3 3"' : '';
        if (isFromNode) {
          // Branching out from right column down to node column (going left)
          const startY = cy;
          const horizY = curveEndY - r;
          const path = [
            `M ${targetX} ${startY}`,
            `L ${targetX} ${horizY - r}`,
            `A ${r} ${r} 0 0 1 ${targetX - r} ${horizY}`,
            `L ${nodeX + r} ${horizY}`,
            `A ${r} ${r} 0 0 0 ${nodeX} ${horizY + r}`,
            `L ${nodeX} ${curveEndY}`,
          ].join(' ');
          svg += `<path d="${path}" stroke="${lineColor}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${dashed}/>`;
        } else {
          // From node going right to target column
          const startY = cy + nodeSize + 1;
          const horizY = curveEndY - r;
          const path = [
            `M ${nodeX} ${startY}`,
            `L ${nodeX} ${horizY - r}`,
            `A ${r} ${r} 0 0 0 ${nodeX + r} ${horizY}`,
            `L ${targetX - r} ${horizY}`,
            `A ${r} ${r} 0 0 1 ${targetX} ${horizY + r}`,
            `L ${targetX} ${curveEndY}`,
          ].join(' ');
          svg += `<path d="${path}" stroke="${lineColor}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${dashed}/>`;
        }
        break;
      }
    }
  }

  // Check for LEFT_FORK pattern (curve going left)
  const hasLeftFork = (nodeFlags & (LinkLine.LEFT_FORK_PARENT | LinkLine.LEFT_FORK_ANCESTOR)) !== 0;
  if (hasLeftFork) {
    // Find the column with RIGHT_MERGE
    for (let col = nodeColumn - 1; col >= 0; col--) {
      const colFlags = linkLine[col] ?? 0;
      const hasRightMerge = (colFlags & (LinkLine.RIGHT_MERGE_PARENT | LinkLine.RIGHT_MERGE_ANCESTOR)) !== 0;
      if (hasRightMerge) {
        const targetX = col * colWidth + colWidth / 2;
        const dashed = isDashedColumn(col) ? ' stroke-dasharray="3 3"' : '';
        if (isFromNode) {
          // Branching out from left column down to node column (going right)
          const startY = cy;
          const horizY = curveEndY - r;
          const path = [
            `M ${targetX} ${startY}`,
            `L ${targetX} ${horizY - r}`,
            `A ${r} ${r} 0 0 0 ${targetX + r} ${horizY}`,
            `L ${nodeX - r} ${horizY}`,
            `A ${r} ${r} 0 0 1 ${nodeX} ${horizY + r}`,
            `L ${nodeX} ${curveEndY}`,
          ].join(' ');
          svg += `<path d="${path}" stroke="${lineColor}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${dashed}/>`;
        } else {
          // From node going left to target column
          const startY = cy + nodeSize + 1;
          const horizY = curveEndY - r;
          const path = [
            `M ${nodeX} ${startY}`,
            `L ${nodeX} ${horizY - r}`,
            `A ${r} ${r} 0 0 1 ${nodeX - r} ${horizY}`,
            `L ${targetX + r} ${horizY}`,
            `A ${r} ${r} 0 0 0 ${targetX} ${horizY + r}`,
            `L ${targetX} ${curveEndY}`,
          ].join(' ');
          svg += `<path d="${path}" stroke="${lineColor}" stroke-width="1" fill="none" stroke-linecap="round" stroke-linejoin="round"${dashed}/>`;
        }
        break;
      }
    }
  }

  if (change.isImmutable) {
    const d = Math.max(4, nodeSize + 1);
    svg += `<polygon points="${nodeX},${cy - d} ${nodeX + d},${cy} ${nodeX},${cy + d} ${nodeX - d},${cy}" fill="${nodeFill}" stroke="${nodeStroke}" stroke-width="1.5"/>`;
  } else {
    svg += `<circle cx="${nodeX}" cy="${cy}" r="${nodeSize}" fill="${nodeFill}" stroke="${nodeStroke}" stroke-width="1.5"/>`;
  }

  svg += '</svg>';
  return svg;
}

function renderFilesGutterSvg(graphInfo: GraphInfo): { svg: string; width: number } {
  const colWidth = GRAPH_COL_WIDTH;
  const activeColumns = graphInfo.activeColumns;
  const nodeColumn = graphInfo.nodeColumn;
  const lastActiveCol = activeColumns.reduce((last, isActive, index) => (isActive ? index : last), 0);
  const width = Math.max((lastActiveCol + 1) * colWidth, colWidth);
  const height = 1;
  const cy = height / 2;

  let svg = `<svg class="graph-file-svg" width="${width}" height="100%" viewBox="0 0 ${width} ${height}" preserveAspectRatio="none">`;
  const postNodeLine = graphInfo.postNodeLine ?? [];
  const parentColumns = graphInfo.parentColumns ?? [];
  const hasStraightParent = parentColumns.includes(nodeColumn);
  for (let col = 0; col < activeColumns.length; col += 1) {
    if (!activeColumns[col]) continue;
    if (col === nodeColumn) {
      if (!hasStraightParent) {
        continue;
      }
      const hasBottom = postNodeLine[col] !== undefined && postNodeLine[col] !== 0;
      if (!hasBottom) {
        continue;
      }
    }
    const x = col * colWidth + colWidth / 2;
    svg += `<line x1="${x}" y1="0" x2="${x}" y2="${height}" class="graph-file-line" vector-effect="non-scaling-stroke"/>`;
  }

  svg += '</svg>';
  return { svg, width };
}

function App() {
  const [state, setState] = useState<WebviewState>(() => getInitialState());
  const dragDataRef = useRef<{ type: string; [key: string]: string } | null>(null);
  const [draggingChange, setDraggingChange] = useState<{ changeId: string; commitId: string } | null>(null);
  const [dragTargetChangeId, setDragTargetChangeId] = useState<string | null>(null);
  const [dragBranchCommitIds, setDragBranchCommitIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    const listener = (event: MessageEvent) => {
      const message = event.data as { type?: string; state?: WebviewState };
      if (message?.type === 'state' && message.state) {
        setState(message.state);
      }
    };
    window.addEventListener('message', listener);
    send('ready');
    return () => window.removeEventListener('message', listener);
  }, []);

  const expandedSet = useMemo(() => new Set(state.expandedCommitIds), [state.expandedCommitIds]);
  const childrenByParent = useMemo(() => {
    const map = new Map<string, string[]>();
    for (const change of state.changes) {
      for (const parentId of change.parentIds) {
        const entry = map.get(parentId);
        if (entry) {
          entry.push(change.commitId);
        } else {
          map.set(parentId, [change.commitId]);
        }
      }
    }
    return map;
  }, [state.changes]);

  const clearDragState = () => {
    setDraggingChange(null);
    setDragTargetChangeId(null);
    setDragBranchCommitIds(new Set());
  };

  const handleToggle = (commitId: string) => {
    const change = state.changes.find((item) => item.commitId === commitId);
    const graphInfo = state.graphInfo[commitId];
    const files = change?.isWorkingCopy ? state.workingCopyFiles : state.changeFiles[commitId];
    console.log('[open-jj] toggleChange', {
      commitId,
      changeId: change?.changeId,
      isWorkingCopy: change?.isWorkingCopy,
      hasConflict: change?.hasConflict,
      graphInfo,
      postNodeLine: graphInfo?.postNodeLine,
      preNodeLine: graphInfo?.preNodeLine,
      parentColumns: graphInfo?.parentColumns,
      activeColumns: graphInfo?.activeColumns,
      filesCount: files?.length ?? 0,
    });
    send('toggleChange', { commitId });
  };

  const handleContextMenu = (event: React.MouseEvent, change: Change) => {
    event.preventDefault();
    showContextMenu(event.nativeEvent, change.changeId, change.isWorkingCopy);
  };

  const showContextMenu = (event: MouseEvent, changeId: string, isWorkingCopy: boolean) => {
    const menuEvent = new CustomEvent('open-jj:context-menu', {
      detail: { type: 'change', x: event.pageX, y: event.pageY, changeId, isWorkingCopy },
    });
    window.dispatchEvent(menuEvent);
  };

  const showBookmarkMenu = (event: React.MouseEvent, bookmarkName: string, changeId: string, isTracked: boolean) => {
    event.preventDefault();
    event.stopPropagation();
    const menuEvent = new CustomEvent('open-jj:context-menu', {
      detail: { type: 'bookmark', x: event.pageX, y: event.pageY, bookmarkName, changeId, isTracked },
    });
    window.dispatchEvent(menuEvent);
  };

  const applyMenuVisibility = (menu: HTMLElement, type: 'change' | 'bookmark', isWorkingCopy: boolean) => {
    const changeItems = menu.querySelectorAll<HTMLElement>('.menu-change');
    const bookmarkItems = menu.querySelectorAll<HTMLElement>('.menu-bookmark');
    changeItems.forEach((item) => {
      item.style.display = type === 'change' ? '' : 'none';
    });
    bookmarkItems.forEach((item) => {
      item.style.display = type === 'bookmark' ? '' : 'none';
    });

    const editItem = menu.querySelector<HTMLElement>('[data-action=\"edit-change\"]');
    if (editItem) {
      editItem.style.display = type === 'change' && !isWorkingCopy ? '' : 'none';
    }
  };

  useEffect(() => {
    const handler = (event: Event) => {
      const detail = (event as CustomEvent).detail as {
        type: 'change' | 'bookmark';
        x: number;
        y: number;
        changeId?: string;
        isWorkingCopy?: boolean;
        bookmarkName?: string;
        isTracked?: boolean;
      };
      const menu = document.getElementById('context-menu');
      if (!menu) {
        return;
      }
      menu.setAttribute('data-type', detail.type);
      menu.setAttribute('data-x', String(detail.x));
      menu.setAttribute('data-y', String(detail.y));
      menu.setAttribute('data-change-id', detail.changeId ?? '');
      menu.setAttribute('data-working-copy', String(detail.isWorkingCopy ?? false));
      menu.setAttribute('data-bookmark-name', detail.bookmarkName ?? '');
      menu.setAttribute('data-tracked', String(detail.isTracked ?? false));
      applyMenuVisibility(menu, detail.type, detail.isWorkingCopy ?? false);
      menu.classList.add('visible');
      menu.style.left = `${detail.x}px`;
      menu.style.top = `${detail.y}px`;
    };
    window.addEventListener('open-jj:context-menu', handler as EventListener);
    return () => window.removeEventListener('open-jj:context-menu', handler as EventListener);
  }, []);

  useEffect(() => {
    const hide = () => {
      const menu = document.getElementById('context-menu');
      if (menu) {
        menu.classList.remove('visible');
      }
    };
    document.addEventListener('click', hide);
    return () => document.removeEventListener('click', hide);
  }, []);

  const handleMenuClick = (event: React.MouseEvent) => {
    const target = event.target as HTMLElement | null;
    if (!target) return;
    const menu = target.closest('#context-menu') as HTMLElement | null;
    const actionEl = target.closest('[data-action]') as HTMLElement | null;
    if (!menu || !actionEl) return;

    const action = actionEl.dataset.action;
    const changeId = menu.dataset.changeId;
    const bookmarkName = menu.dataset.bookmarkName;

    switch (action) {
      case 'copy-change-id':
        if (changeId) copyToClipboard(changeId);
        break;
      case 'new-change-from':
        if (changeId) send('newChangeFrom', { changeId });
        break;
      case 'describe-change':
        if (changeId) send('describeChange', { changeId });
        break;
      case 'manage-bookmarks':
        if (changeId) send('manageBookmarks', { changeId });
        break;
      case 'edit-change':
        if (changeId) send('editChange', { changeId });
        break;
      case 'squash-change':
        if (changeId) send('squashChange', { changeId });
        break;
      case 'abandon-change':
        if (changeId) send('abandonChange', { changeId });
        break;
      case 'copy-bookmark-name':
        if (bookmarkName) copyToClipboard(bookmarkName);
        break;
      case 'push-bookmark':
        if (bookmarkName) send('pushBookmark', { bookmarkName });
        break;
      case 'push-and-create-pr':
        if (bookmarkName) send('pushAndCreatePr', { bookmarkName });
        break;
      case 'create-pull-request':
        if (bookmarkName) send('createPullRequest', { bookmarkName });
        break;
      case 'delete-bookmark':
        if (bookmarkName) send('deleteBookmark', { bookmarkName });
        break;
      default:
        break;
    }

    menu.classList.remove('visible');
  };

  const handleDragStart = (event: React.DragEvent, payload: { type: string; [key: string]: string }) => {
    dragDataRef.current = payload;
    event.dataTransfer.setData('text/plain', JSON.stringify(payload));
    event.dataTransfer.effectAllowed = 'move';
    if (payload.type !== 'change') {
      clearDragState();
      return;
    }
    const change = state.changes.find((item) => item.changeId === payload.changeId);
    if (!change) {
      clearDragState();
      return;
    }
    const stack = [change.commitId];
    const seen = new Set<string>();
    while (stack.length > 0) {
      const current = stack.pop();
      if (!current || seen.has(current)) continue;
      seen.add(current);
      const children = childrenByParent.get(current) ?? [];
      for (const child of children) {
        if (!seen.has(child)) {
          stack.push(child);
        }
      }
    }
    setDraggingChange({ changeId: change.changeId, commitId: change.commitId });
    setDragTargetChangeId(null);
    setDragBranchCommitIds(seen);
  };

  const handleDrop = (event: React.DragEvent, targetChangeId: string) => {
    event.preventDefault();
    event.stopPropagation();
    const data = dragDataRef.current;
    dragDataRef.current = null;
    if (!data) {
      clearDragState();
      return;
    }

    if (data.type === 'change') {
      if (data.changeId !== targetChangeId) {
        send('rebaseChange', { sourceChangeId: data.changeId, targetChangeId });
      }
    } else if (data.type === 'bookmark') {
      send('moveBookmark', { bookmarkName: data.bookmarkName, targetChangeId });
    } else if (data.type === 'file') {
      if (data.fromChangeId !== targetChangeId) {
        send('moveFile', { filePath: data.filePath, fromChangeId: data.fromChangeId, targetChangeId });
      }
    }
    clearDragState();
  };

  if (!state.hasRepository) {
    return (
      <div className="empty">
        <div>No JJ repository found.</div>
        <div className="init-actions">
          <button className="init-btn" onClick={() => send('init')}>Initialize Repository</button>
          <button className="init-btn" onClick={() => send('initWithGit')}>
            Initialize with Git Backend
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`log ${draggingChange ? 'dragging-change' : ''}`}>
      {state.changes.length === 0 ? (
        <div className="empty">No changes found</div>
      ) : (
        state.changes.map((change, index) => {
          const isExpanded = expandedSet.has(change.commitId);
          const isWorkingCopy = change.isWorkingCopy;
          const files = isWorkingCopy
            ? state.workingCopyFiles
            : state.changeFiles[change.commitId] ?? [];
          const hasFiles = files.length > 0 || !change.isEmpty;
          const graphInfo = state.graphInfo[change.commitId];
          const graphMarkup = renderNodeSvg(change, index === 0, index === state.changes.length - 1, graphInfo);
          const hasDescription = change.description && change.description !== '(no description)';
          const localBookmarks = change.bookmarks.filter((b) => !b.includes('@'));
          const remoteBookmarks = change.bookmarks.filter((b) => b.includes('@'));
          const isDragSource = draggingChange?.changeId === change.changeId;
          const isDragDescendant = dragBranchCommitIds.has(change.commitId) && !isDragSource;
          const isDragTarget = dragTargetChangeId === change.changeId && !isDragSource;
          const dragBranchCount = dragBranchCommitIds.size;

          return (
            <div
              key={change.commitId}
              className={`change ${isWorkingCopy ? 'working-copy' : ''} ${change.hasConflict ? 'conflict' : ''} ${
                isDragSource ? 'drag-source' : ''
              } ${isDragDescendant ? 'drag-descendant' : ''} ${isDragTarget ? 'drag-target' : ''}`}
              data-change-id={change.changeId}
            >
              <div
                className="change-header"
                data-change-id={change.changeId}
                data-commit-id={change.commitId}
                onClick={() => handleToggle(change.commitId)}
                onContextMenu={(event) => handleContextMenu(event, change)}
                onDragOver={(event) => {
                  event.preventDefault();
                  event.dataTransfer.dropEffect = 'move';
                }}
                onDragEnter={(event) => {
                  event.preventDefault();
                  if (dragDataRef.current?.type === 'change') {
                    setDragTargetChangeId(change.changeId);
                  }
                  event.currentTarget.classList.add('drag-over');
                }}
                onDragLeave={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                    setDragTargetChangeId((current) => (current === change.changeId ? null : current));
                    event.currentTarget.classList.remove('drag-over');
                  }
                }}
                onDrop={(event) => {
                  event.currentTarget.classList.remove('drag-over');
                  handleDrop(event, change.changeId);
                }}
              >
                <span
                  className="graph-node"
                  draggable
                  onDragStart={(event) =>
                    handleDragStart(event, { type: 'change', changeId: change.changeId })
                  }
                  onDragEnd={() => clearDragState()}
                  onDoubleClick={(event) => {
                    event.stopPropagation();
                    send('editChange', { changeId: change.changeId });
                  }}
                  onClick={(event) => event.stopPropagation()}
                  dangerouslySetInnerHTML={{ __html: graphMarkup }}
                />
                <span
                  className={`expand-icon codicon ${hasFiles ? '' : 'hidden'} ${
                    isExpanded ? 'codicon-chevron-down' : 'codicon-chevron-right'
                  }`}
                  style={graphInfo ? { marginLeft: -((graphInfo.maxColumns - graphInfo.nodeColumn - 1) * GRAPH_COL_WIDTH) } : undefined}
                />
                {hasDescription ? (
                  <span className="change-desc">{isWorkingCopy ? '@ ' : ''}{change.description}</span>
                ) : (
                  <>
                    <span className="change-desc placeholder">{isWorkingCopy ? '@ ' : ''}</span>
                    <button
                      className="describe-btn"
                      onClick={(event) => {
                        event.stopPropagation();
                        send('describeChange', { changeId: change.changeId });
                      }}
                    >
                      Describe
                    </button>
                  </>
                )}
                {isDragSource && dragBranchCount > 1 ? (
                  <span className="drag-badge">Moving {dragBranchCount} commits</span>
                ) : null}
                <span className="bookmarks" onClick={(event) => {
                  event.stopPropagation();
                  send('manageBookmarks', { changeId: change.changeId });
                }}>
                  {localBookmarks.map((name) => {
                    const isConflicted = name.endsWith('*');
                    const cleanName = isConflicted ? name.slice(0, -1) : name;
                    const bookmarkInfo = state.bookmarks.find((b) => b.name === cleanName && !b.isRemote);
                    const isTracked = bookmarkInfo?.isTracked ?? false;
                    const pr = state.prInfo[cleanName];

                    let badgeClass = 'badge local';
                    let tooltip = 'Local bookmark (not pushed)';
                    if (pr) {
                      // Only show "merged" if branch no longer exists on remote (not tracked)
                      // If still tracked, the branch is still active despite the merged PR
                      if (pr.state === 'merged' && !isTracked) {
                        badgeClass = 'badge merged';
                        tooltip = `PR #${pr.number} merged`;
                      } else if (pr.state === 'merged' && isTracked) {
                        badgeClass = 'badge tracked';
                        tooltip = `PR #${pr.number} merged - branch still active`;
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

                    return (
                      <span
                        key={name}
                        className={`${badgeClass}${pr?.url ? ' clickable' : ''}`}
                        draggable
                        title={tooltip}
                        onDragStart={(event) =>
                          handleDragStart(event, { type: 'bookmark', bookmarkName: cleanName, fromChangeId: change.changeId })
                        }
                        onContextMenu={(event) => showBookmarkMenu(event, cleanName, change.changeId, isTracked)}
                        onClick={(event) => {
                          event.stopPropagation();
                          if (pr?.url) {
                            send('openUrl', { url: pr.url });
                          }
                        }}
                      >
                        {cleanName}
                        {pr ? <span className="codicon codicon-git-merge badge-pr-icon" title="Pull request" /> : null}
                        {isTracked ? <span className="codicon codicon-cloud badge-cloud-icon" title="Synced" /> : null}
                        {isDiverged ? <span className="codicon codicon-cloud badge-cloud-icon diverged" title="Diverged" /> : null}
                      </span>
                    );
                  })}
                  {remoteBookmarks.map((name) => {
                    const localName = name.split('@')[0];
                    if (localBookmarks.includes(localName) || localBookmarks.includes(`${localName}*`)) {
                      return null;
                    }
                    // Check for PR info using the base bookmark name
                    const pr = state.prInfo[localName];

                    let badgeClass = 'badge remote';
                    let tooltip = 'Remote only';
                    if (pr) {
                      // Remote bookmark exists, so branch is still active - don't show as merged
                      if (pr.state === 'merged') {
                        // Keep as remote since the branch still exists
                        tooltip = `PR #${pr.number} merged - branch still active`;
                      } else if (pr.state === 'open' || pr.state === 'draft') {
                        badgeClass = pr.state === 'draft' ? 'badge pr-draft' : 'badge pr-open';
                        tooltip = `PR #${pr.number} ${pr.state}`;
                      } else if (pr.state === 'closed') {
                        badgeClass = 'badge pr-closed';
                        tooltip = `PR #${pr.number} closed`;
                      }
                    }

                    return (
                      <span
                        key={name}
                        className={`${badgeClass}${pr?.url ? ' clickable' : ''}`}
                        title={tooltip}
                        onClick={(event) => {
                          event.stopPropagation();
                          if (pr?.url) {
                            send('openUrl', { url: pr.url });
                          }
                        }}
                      >
                        {name}
                        {pr ? <span className="codicon codicon-git-merge badge-pr-icon" title="Pull request" /> : null}
                        {!pr ? <span className="codicon codicon-cloud badge-cloud-icon" title="Remote" /> : null}
                      </span>
                    );
                  })}
                </span>
                <span className="change-actions">
                  <button
                    className="icon-button small"
                    onClick={(event) => {
                      event.stopPropagation();
                      send('newChangeFrom', { changeId: change.changeId });
                    }}
                  >
                    <span className="codicon codicon-add" />
                  </button>
                </span>
              </div>
              {isExpanded && files.length > 0 ? (
                <div className="files">
                  {graphInfo ? (() => {
                    const gutter = renderFilesGutterSvg(graphInfo);
                    return (
                      <>
                        <div
                          className="files-gutter"
                          style={{ width: gutter.width }}
                          dangerouslySetInnerHTML={{ __html: gutter.svg }}
                        />
                        <div className="files-list" style={{ marginLeft: `${gutter.width + 6}px` }}>
                          {files.map((file) => (
                            <div
                              key={file.path}
                              className="file"
                              draggable
                              title="Drag to move to another change"
                              onDragStart={(event) =>
                                handleDragStart(event, { type: 'file', filePath: file.path, fromChangeId: change.changeId })
                              }
                            >
                              <span className={`file-icon ${file.status}`}>
                                <span className={`codicon ${getFileIcon(file.status)}`} />
                              </span>
                              <span
                                className="file-path"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  send('openDiff', { path: file.path, revision: isWorkingCopy ? undefined : change.commitIdShort });
                                }}
                              >
                                {file.path}
                              </span>
                              <button
                                className="icon-button small"
                                title="Open File"
                                onClick={(event) => {
                                  event.stopPropagation();
                                  send('openFile', { path: file.path });
                                }}
                              >
                                <span className="codicon codicon-go-to-file" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </>
                    );
                  })() : (
                    <div className="files-list">
                      {files.map((file) => (
                        <div
                          key={file.path}
                          className="file"
                          draggable
                          title="Drag to move to another change"
                          onDragStart={(event) =>
                            handleDragStart(event, { type: 'file', filePath: file.path, fromChangeId: change.changeId })
                          }
                        >
                          <span className={`file-icon ${file.status}`}>
                            <span className={`codicon ${getFileIcon(file.status)}`} />
                          </span>
                          <span
                            className="file-path"
                            onClick={(event) => {
                              event.stopPropagation();
                              send('openDiff', { path: file.path, revision: isWorkingCopy ? undefined : change.commitIdShort });
                            }}
                          >
                            {file.path}
                          </span>
                          <button
                            className="icon-button small"
                            title="Open File"
                            onClick={(event) => {
                              event.stopPropagation();
                              send('openFile', { path: file.path });
                            }}
                          >
                            <span className="codicon codicon-go-to-file" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : null}
            </div>
          );
        })
      )}
      <div
        id="context-menu"
        className="context-menu"
        onClick={handleMenuClick}
      >
        <div className="context-menu-item menu-change" data-action="edit-change">Edit Change</div>
        <div className="context-menu-separator menu-change"></div>
        <div className="context-menu-item menu-change" data-action="new-change-from">New Change</div>
        <div className="context-menu-item menu-change" data-action="describe-change">Describe Change</div>
        <div className="context-menu-item menu-change" data-action="manage-bookmarks">Manage Bookmarks</div>
        <div className="context-menu-item menu-change" data-action="squash-change">Squash into Parent</div>
        <div className="context-menu-item menu-change" data-action="copy-change-id">Copy Change ID</div>
        <div className="context-menu-separator menu-change"></div>
        <div className="context-menu-item danger menu-change" data-action="abandon-change">Abandon Change</div>
        <div className="context-menu-item menu-bookmark" data-action="push-bookmark">Push to Remote</div>
        <div className="context-menu-separator menu-bookmark"></div>
        <div className="context-menu-item menu-bookmark" data-action="create-pull-request">Create Pull Request</div>
        <div className="context-menu-item menu-bookmark" data-action="push-and-create-pr">Push and Create PR</div>
        <div className="context-menu-item menu-bookmark" data-action="copy-bookmark-name">Copy Bookmark Name</div>
        <div className="context-menu-separator menu-bookmark"></div>
        <div className="context-menu-item danger menu-bookmark" data-action="delete-bookmark">Delete Bookmark</div>
      </div>
    </div>
  );
}

function getFileIcon(status: FileChange['status']) {
  switch (status) {
    case 'added':
      return 'codicon-diff-added';
    case 'modified':
      return 'codicon-diff-modified';
    case 'deleted':
      return 'codicon-diff-removed';
    case 'renamed':
      return 'codicon-diff-renamed';
    case 'copied':
      return 'codicon-copy';
    case 'conflict':
      return 'codicon-warning';
    default:
      return 'codicon-diff-modified';
  }
}

export default App;
