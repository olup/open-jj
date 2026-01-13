#!/usr/bin/env node
/* eslint-disable no-console */
const { execSync } = require('child_process');
const path = require('path');

const repoPath = process.argv[2] || process.cwd();

function loadModule(relPath) {
  return require(path.resolve(__dirname, '..', relPath));
}

function renderTextGraph(changes, graph) {
  if (!changes.length) return '';
  const maxColumns = Math.max(
    ...changes.map((change) => (graph.get(change.commitId)?.maxColumns ?? 1))
  );
  const cellWidth = 2;
  const lines = [];

  for (const change of changes) {
    const info = graph.get(change.commitId);
    if (!info) continue;
    const width = Math.max(maxColumns * cellWidth - 1, 1);
    const chars = new Array(width).fill(' ');

    for (let col = 0; col < info.activeColumns.length; col++) {
      if (!info.activeColumns[col]) continue;
      const pos = col * cellWidth;
      if (pos >= 0 && pos < chars.length) {
        chars[pos] = '|';
      }
    }

    for (const toCol of info.branchingTo) {
      const start = Math.min(info.nodeColumn, toCol) * cellWidth;
      const end = Math.max(info.nodeColumn, toCol) * cellWidth;
      for (let i = start + 1; i < end && i < chars.length; i++) {
        chars[i] = '-';
      }
    }

    for (const fromCol of info.mergingFrom) {
      const pos = fromCol * cellWidth;
      if (pos >= 0 && pos < chars.length && chars[pos] === ' ') {
        chars[pos] = '|';
      }
    }

    const label = change.description && change.description !== '(no description)'
      ? change.description
      : 'Describe';
    const idLabel = `${change.changeIdShort} ${change.commitIdShort}`;
    lines.push(`${chars.join('')} ${idLabel} ${label}`);
  }

  return lines.join('\n');
}

function main() {
  const { parseLogOutput } = loadModule('out/jj/logParser');
  const { computeGraph } = loadModule('out/views/graphLayout');

  const LOG_TEMPLATE_CORE = `
change_id ++ "\\x00" ++
change_id.short() ++ "\\x00" ++
commit_id ++ "\\x00" ++
commit_id.short() ++ "\\x00" ++
if(description, description.first_line(), "(no description)") ++ "\\x00" ++
if(author.name(), author.name(), "") ++ "\\x00" ++
if(author.email(), author.email(), "") ++ "\\x00" ++
author.timestamp() ++ "\\x00" ++
if(committer.name(), committer.name(), "") ++ "\\x00" ++
if(committer.email(), committer.email(), "") ++ "\\x00" ++
committer.timestamp() ++ "\\x00" ++
working_copies ++ "\\x00" ++
if(empty, "true", "false") ++ "\\x00" ++
if(conflict, "true", "false") ++ "\\x00" ++
if(immutable, "true", "false") ++ "\\x00" ++
parents.map(|p| p.commit_id()).join(",") ++ "\\x00" ++
bookmarks.join(",") ++ "\\x00" ++
tags.join(",") ++ "\\x00" ++
git_refs.join(",") ++ "\\n"
`.trim();
  const GRAPH_PREFIX_MARKER = '\x1f';
  const LOG_GRAPH_TEMPLATE = `"${GRAPH_PREFIX_MARKER}" ++ ${LOG_TEMPLATE_CORE}`;

  const jjLogCmd = `jj --no-pager log --config ui.graph.style=ascii`;
  const jjTemplateCmd = `jj --no-pager log --config ui.graph.style=ascii -T '${LOG_GRAPH_TEMPLATE.replace(/'/g, "'\\''")}'`;

  const jjGraphRaw = execSync(jjLogCmd, { cwd: repoPath }).toString().trimEnd();
  const jjTemplateRaw = execSync(jjTemplateCmd, { cwd: repoPath }).toString();

  const { changes } = parseLogOutput(jjTemplateRaw);
  const graph = computeGraph(changes);
  const computedGraph = renderTextGraph(changes, graph);

  console.log('=== JJ LOG (raw) ===');
  console.log(jjGraphRaw);
  console.log('');
  console.log('=== COMPUTED GRAPH ===');
  console.log(computedGraph);
}

main();
