import { describe, expect, it } from 'vitest';
import { parseLogOutput } from '../src/jj/logParser';

function buildLogLine(prefix: string, fields: string[]): string {
  return `${prefix}\x1f${fields.join('\x00')}`;
}

function baseFields(overrides?: Partial<Record<number, string>>): string[] {
  const defaults = [
    'changeid',
    'changeidshort',
    'commitid',
    'commitidshort',
    'desc',
    'author',
    'author@example.com',
    '2024-01-01T00:00:00Z',
    'committer',
    'committer@example.com',
    '2024-01-01T00:00:00Z',
    '',
    'false',
    'false',
    'false',
    '',
    '',
    '',
    '',
  ];
  if (!overrides) return defaults;
  return defaults.map((value, index) => overrides[index] ?? value);
}

describe('parseLogOutput', () => {
  it('parses change rows and non-change rows', () => {
    const line1 = buildLogLine('@ ', baseFields({ 0: 'c1', 2: 'k1', 15: 'p0' }));
    const line2 = '~  (elided revisions)';
    const line3 = buildLogLine('│ ○ ', baseFields({ 0: 'c2', 2: 'k2', 15: 'k1' }));

    const output = [line1, line2, line3].join('\n');
    const result = parseLogOutput(output, 'c1');

    expect(result.changes).toHaveLength(2);
    expect(result.rows).toHaveLength(3);

    expect(result.changes[0].isWorkingCopy).toBe(true);
    expect(result.rows[1].isElided).toBe(true);
  });
});
