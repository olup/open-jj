import { Change, LogRow } from '../jj/types';

export interface GraphInfo {
  nodeColumn: number;
  activeColumns: boolean[];
  maxColumns: number;
  isTip: boolean;
  hasParents: boolean;
  mergingFrom: number[];
  branchingTo: number[];
  hasTopLine?: boolean;
  hasBottomLine?: boolean;
}

export function computeGraph(changes: Change[]): Map<string, GraphInfo> {
  const graphMap = new Map<string, GraphInfo>();

  const columns: (string | null)[] = [];
  let maxColumnsEver = 0;

  const findEmpty = () => columns.indexOf(null);
  const findCommit = (commitId: string) => columns.indexOf(commitId);

  for (let i = 0; i < changes.length; i++) {
    const change = changes[i];
    const parentIds = change.parentIds;
    const commitId = change.commitId;

    let nodeCol = findCommit(commitId);
    const isTip = nodeCol === -1;

    if (nodeCol === -1) {
      nodeCol = findEmpty();
      if (nodeCol === -1) {
        nodeCol = columns.length;
        columns.push(null);
      }
    }

    const mergingFrom: number[] = [];
    for (let col = 0; col < columns.length; col++) {
      if (col !== nodeCol && columns[col] === commitId) {
        mergingFrom.push(col);
      }
    }

    const activeColumns = columns.map((c, idx) => c !== null || idx === nodeCol);

    columns[nodeCol] = null;
    for (const col of mergingFrom) {
      columns[col] = null;
    }

    const branchingTo: number[] = [];

    if (parentIds.length > 0) {
      const firstParent = parentIds[0];
      const existingFirstParentCol = findCommit(firstParent);

      if (existingFirstParentCol !== -1) {
        branchingTo.push(existingFirstParentCol);
      } else {
        columns[nodeCol] = firstParent;
      }

      for (let p = 1; p < parentIds.length; p++) {
        const parentId = parentIds[p];
        const existingCol = findCommit(parentId);

        if (existingCol !== -1) {
          branchingTo.push(existingCol);
        } else {
          let newCol = findEmpty();
          if (newCol === -1) {
            newCol = columns.length;
            columns.push(parentId);
          } else {
            columns[newCol] = parentId;
          }
          branchingTo.push(newCol);
        }
      }
    }

    if (nodeCol > 0 && columns[nodeCol] !== null) {
      for (let col = 0; col < nodeCol; col++) {
        if (columns[col] === null) {
          columns[col] = columns[nodeCol];
          columns[nodeCol] = null;
          break;
        }
      }
    }

    maxColumnsEver = Math.max(maxColumnsEver, columns.length);

    while (columns.length > 0 && columns[columns.length - 1] === null) {
      columns.pop();
    }

    if (columns.length === 0) {
      columns.push(null);
    }

    graphMap.set(change.changeId, {
      nodeColumn: nodeCol,
      activeColumns,
      maxColumns: 0,
      isTip,
      hasParents: parentIds.length > 0,
      mergingFrom,
      branchingTo,
      hasTopLine: !isTip,
      hasBottomLine: parentIds.length > 0,
    });
  }

  for (const info of graphMap.values()) {
    info.maxColumns = maxColumnsEver;
  }

  return graphMap;
}

export function computeGraphFromRows(rows: LogRow[]): Map<string, GraphInfo> {
  const graphMap = new Map<string, GraphInfo>();
  const nodeSymbols = new Set(['@', '○', 'o', '●', '◆', '*']);
  const cellWidth = 2;
  const nodeColumnByCommitId = new Map<string, number>();
  let maxColumnsEver = 1;
  const rowActiveColumns: boolean[][] = [];

  for (const row of rows) {
    const prefix = row.graphPrefix ?? '';
    const chars = Array.from(prefix);
    const nodeIndex = chars.findIndex((ch) => nodeSymbols.has(ch));
    const nodeColumn = nodeIndex >= 0 ? Math.floor(nodeIndex / cellWidth) : 0;
    const columns = Math.max(1, Math.ceil(chars.length / cellWidth));

    if (row.change) {
      nodeColumnByCommitId.set(row.change.commitId, nodeColumn);
    }
    maxColumnsEver = Math.max(maxColumnsEver, columns);
  }

  for (let i = 0; i < rows.length; i++) {
    const prefix = rows[i].graphPrefix ?? '';
    const chars = Array.from(prefix);
    const columns = Math.max(1, Math.ceil(chars.length / cellWidth));
    const activeColumns = new Array(maxColumnsEver).fill(false);

    for (let col = 0; col < columns; col++) {
      const ch = chars[col * cellWidth] ?? ' ';
      if (ch !== ' ') {
        activeColumns[col] = true;
      }
    }
    rowActiveColumns[i] = activeColumns;
  }

  let prevActiveColumns: boolean[] = [];
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const prefix = row.graphPrefix ?? '';
    const activeColumns = rowActiveColumns[i] ?? new Array(maxColumnsEver).fill(false);

    if (!row.change) {
      const hasPrefix = prefix.trim().length > 0;
      if (hasPrefix) {
        prevActiveColumns = activeColumns;
      }
      continue;
    }

    const change = row.change;
    const nodeColumn = nodeColumnByCommitId.get(change.commitId) ?? 0;

    const parentColumns = change.parentIds
      .map((id) => nodeColumnByCommitId.get(id))
      .filter((col): col is number => col !== undefined);

    const mergingFrom: number[] = [];
    const branchingTo: number[] = [];
    const hasTopLine = prevActiveColumns[nodeColumn] === true;
    let hasBottomLine = false;

    let nextActiveColumns: boolean[] | undefined;
    for (let j = i + 1; j < rows.length; j++) {
      const nextPrefix = rows[j].graphPrefix ?? '';
      if (nextPrefix.trim().length === 0) {
        continue;
      }
      nextActiveColumns = rowActiveColumns[j];
      break;
    }

    if (change.parentIds.length > 1) {
      for (const col of parentColumns) {
        if (col !== nodeColumn && !mergingFrom.includes(col)) {
          mergingFrom.push(col);
        }
      }
      hasBottomLine = parentColumns.includes(nodeColumn) || (nextActiveColumns?.[nodeColumn] ?? false);
    } else if (change.parentIds.length === 1) {
      const col = parentColumns[0];
      if (col !== undefined) {
        if (col !== nodeColumn) {
          branchingTo.push(col);
          hasBottomLine = nextActiveColumns?.[nodeColumn] ?? false;
        } else {
          hasBottomLine = true;
        }
      }
      if (col === undefined && nextActiveColumns?.[nodeColumn]) {
        hasBottomLine = true;
      }
    } else if (nextActiveColumns?.[nodeColumn]) {
      hasBottomLine = true;
    }

    graphMap.set(change.changeId, {
      nodeColumn,
      activeColumns,
      maxColumns: maxColumnsEver,
      isTip: i === 0,
      hasParents: change.parentIds.length > 0,
      mergingFrom,
      branchingTo,
      hasTopLine,
      hasBottomLine,
    });
    prevActiveColumns = activeColumns;
  }

  return graphMap;
}
