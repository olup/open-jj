/**
 * Template for parsing jj log output.
 * Uses \x00 as field separator for reliable parsing.
 */
export const LOG_TEMPLATE_CORE = `
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
tags.join(",") ++ "\\n"
`.trim();

export const GRAPH_PREFIX_MARKER = '\\x1f';
export const LOG_TEMPLATE = LOG_TEMPLATE_CORE;
export const LOG_GRAPH_TEMPLATE = `"${GRAPH_PREFIX_MARKER}" ++ ${LOG_TEMPLATE_CORE}`;
