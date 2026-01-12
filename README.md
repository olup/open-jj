# Open JJ (VS Code)

Jujutsu (jj) integration for VS Code with a fast, visual log view and bookmark tooling.

## Features
- Graphical jj log with a column-based DAG renderer.
- Working copy highlight, immutable (locked) change markers, and elided-history dashed lines.
- Inline file list per change, with open/diff/revert actions.
- Drag-and-drop rebase: drag a change node onto another change.
- Bookmark badges, management, and drag-to-move.
- JJ Bookmarks view for listing local/remote bookmarks.
- GitHub integration: authenticate, show PR status badges, create PRs from bookmarks.
- Status bar summary of the current change (id, bookmarks, conflicts, file count).

## UI And Menus
### View title buttons (JJ Log)
- Refresh
- Fetch
- GitHub auth

### Change context menu (log rows)
- Describe / Edit
- Squash into parent
- Abandon
- Manage bookmarks
- New change from here
- Copy change id

### File context menu (expanded files)
- Open file
- Open diff
- Revert file
- Move file to change

## Bookmark Colors
Badges appear next to a change title and reflect bookmark/PR state:
- Local: VS Code badge colors (not pushed)
- Tracked: blue (pushed, no PR)
- PR open: purple
- PR draft: gray-purple
- PR closed: red
- PR merged: green
- Remote-only: dim
- Conflicted: amber border

## Graph Colors
- Lines: VS Code description foreground
- Nodes: hollow circles by default
- Working copy: filled blue circle
- Immutable (locked): hollow squares

## Commands
Available in the Command Palette:
- Initialize Repository / Initialize with Git Backend
- New Change, Describe, Edit, Squash, Abandon
- Manage / Create / Delete / Set Bookmark
- Refresh, Fetch, GitHub Auth
- Rebase Change, Move File to Change

## Requirements
- `jj` installed and on your PATH (or set `open-jj.path`).

## Configuration
- `open-jj.path`: path to the jj executable
- `open-jj.autoRefresh`: refresh views on file changes
- `open-jj.logLimit`: max log entries to load (set to 0 for unlimited)
