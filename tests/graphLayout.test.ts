import { describe, expect, it } from 'vitest';
import { computeGraphFromRows } from '../src/views/graphLayout';
import { Change, LogRow } from '../src/jj/types';

function makeChange(id: string, commitId: string, parentIds: string[] = []): Change {
  return {
    changeId: id,
    changeIdShort: id.slice(0, 8),
    commitId,
    commitIdShort: commitId.slice(0, 8),
    description: 'desc',
    authorName: 'a',
    authorEmail: 'a@example.com',
    authorTimestamp: new Date('2024-01-01T00:00:00Z'),
    committerName: 'c',
    committerEmail: 'c@example.com',
    committerTimestamp: new Date('2024-01-01T00:00:00Z'),
    isWorkingCopy: false,
    isEmpty: false,
    hasConflict: false,
    isImmutable: false,
    parentIds,
    bookmarks: [],
    tags: [],
    gitRefs: [],
  };
}

describe('computeGraphFromRows', () => {
  it('maps node columns from prefixes', () => {
    const c1 = makeChange('c1', 'k1', []);
    const c2 = makeChange('c2', 'k2', ['k1']);
    const c3 = makeChange('c3', 'k3', ['k2']);

    const rows: LogRow[] = [
      { graphPrefix: '@ ', change: c1 },
      { graphPrefix: '│ ○ ', change: c2 },
      { graphPrefix: '│ ○ ', change: c3 },
    ];

    const graph = computeGraphFromRows(rows);

    expect(graph.get('c1')?.nodeColumn).toBe(0);
    expect(graph.get('c2')?.nodeColumn).toBe(1);
    expect(graph.get('c3')?.nodeColumn).toBe(1);
  });
});
