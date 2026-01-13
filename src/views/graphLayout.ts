import { Change, LogRow } from '../jj/types';
import { Ancestor, AncestorType, PadLine, Renderer } from './renderDag';

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
  preNodeLine?: PadLine[];
  postNodeLine?: PadLine[];
  linkLine?: number[];
  linkLineFromNode?: number[];
  parentColumns?: number[];
  dashedParentColumns?: number[];
}

export type DistantParentResult = {
  parentOverrides: Map<string, string[]>;
  dashedParents: Map<string, Set<string>>;
};

export function computeDistantParents(
  changes: Change[],
  fullChanges: Change[]
): DistantParentResult {
  const parentOverrides = new Map<string, string[]>();
  const dashedParents = new Map<string, Set<string>>();

  const visible = new Set(changes.map((change) => change.commitId));
  const fullParents = new Map<string, string[]>();
  for (const change of fullChanges) {
    fullParents.set(change.commitId, change.parentIds);
  }

  const nearestCache = new Map<string, string | null>();

  const findNearestVisible = (startId: string): string | null => {
    if (nearestCache.has(startId)) {
      return nearestCache.get(startId) ?? null;
    }
    const visited = new Set<string>();
    const queue: string[] = [startId];
    while (queue.length > 0) {
      const current = queue.shift();
      if (!current || visited.has(current)) {
        continue;
      }
      visited.add(current);
      if (visible.has(current)) {
        nearestCache.set(startId, current);
        return current;
      }
      const parents = fullParents.get(current) ?? [];
      for (const parentId of parents) {
        if (!visited.has(parentId)) {
          queue.push(parentId);
        }
      }
    }
    nearestCache.set(startId, null);
    return null;
  };

  for (const change of changes) {
    const effectiveParents: string[] = [];
    const dashed = new Set<string>();
    const seen = new Set<string>();

    for (const parentId of change.parentIds) {
      if (visible.has(parentId)) {
        if (!seen.has(parentId)) {
          effectiveParents.push(parentId);
          seen.add(parentId);
        }
        continue;
      }
      const distant = findNearestVisible(parentId);
      if (distant && !seen.has(distant)) {
        effectiveParents.push(distant);
        dashed.add(distant);
        seen.add(distant);
      }
    }

    if (effectiveParents.length > 0) {
      parentOverrides.set(change.commitId, effectiveParents);
    }
    if (dashed.size > 0) {
      dashedParents.set(change.commitId, dashed);
    }
  }

  return { parentOverrides, dashedParents };
}

export function computeGraph(
  changes: Change[],
  options?: { parentOverrides?: Map<string, string[]>; dashedParents?: Map<string, Set<string>> }
): Map<string, GraphInfo> {
  const graphMap = new Map<string, GraphInfo>();
  const renderer = new Renderer();
  let maxColumnsEver = 1;

  const addUnique = (list: number[], value: number) => {
    if (!list.includes(value)) {
      list.push(value);
    }
  };

  for (let i = 0; i < changes.length; i++) {
    const change = changes[i];
    const effectiveParents = options?.parentOverrides?.get(change.commitId) ?? change.parentIds;
    const parents = effectiveParents.map(
      (id) => new Ancestor({ type: AncestorType.Parent, hash: id })
    );
    const row = renderer.nextRow(change.commitId, parents);

    const activeColumns = row.preNodeLine.map((line, idx) => {
      const node = row.nodeLine[idx] ?? 0;
      const ancestry = row.ancestryLine[idx] ?? 0;
      return line !== PadLine.Blank || node !== 0 || ancestry !== PadLine.Blank;
    });

    const branchingTo: number[] = [];
    const mergingFrom: number[] = [];
    for (const col of row.parentColumns) {
      if (col !== row.nodeColumn) {
        addUnique(branchingTo, col);
        addUnique(mergingFrom, col);
      }
    }

    const dashedSet = options?.dashedParents?.get(change.commitId);
    const dashedParentColumns: number[] = [];
    if (dashedSet && row.parentColumnsByHash.length > 0) {
      for (const entry of row.parentColumnsByHash) {
        if (dashedSet.has(entry.hash)) {
          addUnique(dashedParentColumns, entry.column);
        }
      }
    }

    maxColumnsEver = Math.max(maxColumnsEver, row.nodeLine.length);

    graphMap.set(change.commitId, {
      nodeColumn: row.nodeColumn,
      activeColumns,
      maxColumns: 0,
      isTip: row.isHead,
      hasParents: change.parentIds.length > 0,
      mergingFrom,
      branchingTo,
      hasTopLine: row.preNodeLine[row.nodeColumn] !== PadLine.Blank,
      hasBottomLine: row.postNodeLine[row.nodeColumn] !== PadLine.Blank,
      preNodeLine: row.preNodeLine,
      postNodeLine: row.postNodeLine,
      linkLine: row.linkLine?.map((line) => line.valueOf()),
      linkLineFromNode: row.linkLineFromNode?.map((line) => line.valueOf()),
      parentColumns: row.parentColumns,
      dashedParentColumns,
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

    graphMap.set(change.commitId, {
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
