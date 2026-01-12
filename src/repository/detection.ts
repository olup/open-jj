import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';
import { RepositoryInfo } from '../jj/types';

/**
 * Detection result for a workspace folder
 */
export interface DetectionResult {
  /** Whether a jj repository was found */
  hasJJ: boolean;
  /** Whether a git repository was found */
  hasGit: boolean;
  /** Repository info if jj was found */
  repositoryInfo?: RepositoryInfo;
}

/**
 * Check if a directory contains a jj repository
 */
export function hasJJRepository(dir: string): boolean {
  const jjPath = path.join(dir, '.jj');
  try {
    return fs.existsSync(jjPath) && fs.statSync(jjPath).isDirectory();
  } catch {
    return false;
  }
}

/**
 * Check if a directory contains a git repository
 */
export function hasGitRepository(dir: string): boolean {
  const gitPath = path.join(dir, '.git');
  try {
    // .git can be a directory or a file (for worktrees)
    return fs.existsSync(gitPath);
  } catch {
    return false;
  }
}

/**
 * Find the root of a jj repository by walking up the directory tree
 */
export function findJJRoot(startDir: string): string | null {
  let current = startDir;
  const root = path.parse(current).root;

  while (current !== root) {
    if (hasJJRepository(current)) {
      return current;
    }
    current = path.dirname(current);
  }

  // Check root as well
  if (hasJJRepository(root)) {
    return root;
  }

  return null;
}

/**
 * Find the root of a git repository by walking up the directory tree
 */
export function findGitRoot(startDir: string): string | null {
  let current = startDir;
  const root = path.parse(current).root;

  while (current !== root) {
    if (hasGitRepository(current)) {
      return current;
    }
    current = path.dirname(current);
  }

  // Check root as well
  if (hasGitRepository(root)) {
    return root;
  }

  return null;
}

/**
 * Detect repositories in a directory
 */
export function detectRepositories(dir: string): DetectionResult {
  const jjRoot = findJJRoot(dir);
  const gitRoot = findGitRoot(dir);

  if (!jjRoot) {
    return {
      hasJJ: false,
      hasGit: !!gitRoot,
    };
  }

  // Check if this is a colocated repo (git inside jj)
  const isColocated = gitRoot !== null && gitRoot === jjRoot;

  return {
    hasJJ: true,
    hasGit: !!gitRoot,
    repositoryInfo: {
      rootPath: jjRoot,
      hasGit: !!gitRoot,
      isColocated,
    },
  };
}

/**
 * Detect repositories in all workspace folders
 */
export function detectWorkspaceRepositories(): Map<string, DetectionResult> {
  const results = new Map<string, DetectionResult>();

  const workspaceFolders = vscode.workspace.workspaceFolders;
  if (!workspaceFolders) {
    return results;
  }

  for (const folder of workspaceFolders) {
    results.set(folder.uri.fsPath, detectRepositories(folder.uri.fsPath));
  }

  return results;
}

/**
 * Get a human-readable description of the repository state
 */
export function getRepositoryDescription(result: DetectionResult): string {
  if (!result.hasJJ && !result.hasGit) {
    return 'No repository';
  }

  if (!result.hasJJ && result.hasGit) {
    return 'Git repository (no jj)';
  }

  if (result.repositoryInfo?.isColocated) {
    return 'JJ repository (colocated with Git)';
  }

  if (result.hasJJ && result.hasGit) {
    return 'JJ repository with Git backend';
  }

  return 'JJ repository';
}
