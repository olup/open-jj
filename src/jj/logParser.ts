import { Change, LogRow } from './types';

const GRAPH_PREFIX_MARKER = '\x1f';

export function parseLogOutput(output: string, workingCopyId?: string): { changes: Change[]; rows: LogRow[] } {
  const lines = output.split('\n').filter((l) => l.length > 0);
  const changes: Change[] = [];
  const rows: LogRow[] = [];

  for (const line of lines) {
    let graphPrefix = '';
    let dataLine = line;
    const markerIndex = line.indexOf(GRAPH_PREFIX_MARKER);
    if (markerIndex !== -1) {
      graphPrefix = line.slice(0, markerIndex);
      dataLine = line.slice(markerIndex + 1);

      const parts = dataLine.split('\x00');
      if (parts.length < 19) {
        console.log('[open-jj] skipping line, not enough parts:', parts.length);
        continue;
      }

      const [
        changeId,
        changeIdShort,
        commitId,
        commitIdShort,
        description,
        authorName,
        authorEmail,
        authorTimestamp,
        committerName,
        committerEmail,
        committerTimestamp,
        _workingCopies,
        isEmpty,
        hasConflict,
        isImmutable,
        parentIdsStr,
        bookmarksStr,
        tagsStr,
        gitRefsStr,
      ] = parts;

      const isWorkingCopy = workingCopyId ? changeId === workingCopyId : false;

      const change: Change = {
        changeId,
        changeIdShort,
        commitId,
        commitIdShort,
        description: description || '(no description)',
        authorName,
        authorEmail,
        authorTimestamp: new Date(authorTimestamp),
        committerName,
        committerEmail,
        committerTimestamp: new Date(committerTimestamp),
        isWorkingCopy,
        isEmpty: isEmpty === 'true',
        hasConflict: hasConflict === 'true',
        isImmutable: isImmutable === 'true',
        parentIds: parentIdsStr ? parentIdsStr.split(',') : [],
        bookmarks: bookmarksStr ? bookmarksStr.split(',') : [],
        tags: tagsStr ? tagsStr.split(',') : [],
        gitRefs: gitRefsStr ? gitRefsStr.split(',') : [],
      };

      changes.push(change);
      rows.push({ graphPrefix, change });
      continue;
    }

    const match = line.match(/^([│├└┼╯╮╰─|\\/\s~.]*?)(\s{2,}(.*))?$/);
    if (match) {
      graphPrefix = (match[1] ?? '').trimEnd();
      const label = match[3]?.trim();
      rows.push({
        graphPrefix,
        label,
        isElided: (label ?? '').includes('elided') || line.trimStart().startsWith('~'),
      });
    } else {
      rows.push({ graphPrefix: '', label: line.trim(), isElided: false });
    }
  }

  return { changes, rows };
}
