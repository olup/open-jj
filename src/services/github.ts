import * as vscode from 'vscode';
import { PullRequestInfo, PullRequestState } from '../jj/types';

interface GitHubPullRequest {
  number: number;
  state: string;
  draft: boolean;
  merged: boolean;
  html_url: string;
  title: string;
  head: {
    ref: string;
  };
}

/**
 * GitHub service for PR status detection
 */
export class GitHubService {
  private _session: vscode.AuthenticationSession | null = null;
  private _prCache: Map<string, PullRequestInfo | null> = new Map();
  private _cacheExpiry: Map<string, number> = new Map();
  private _cacheDuration = 60000; // 1 minute cache

  /**
   * Get GitHub authentication session
   */
  async getSession(): Promise<vscode.AuthenticationSession | null> {
    if (this._session) {
      return this._session;
    }

    try {
      // Try to get existing session without prompting
      const session = await vscode.authentication.getSession('github', ['repo'], { createIfNone: false });
      this._session = session ?? null;
      return this._session;
    } catch {
      return null;
    }
  }

  /**
   * Authenticate with GitHub (will prompt user if needed)
   */
  async authenticate(): Promise<boolean> {
    try {
      this._session = await vscode.authentication.getSession('github', ['repo'], { createIfNone: true });
      return this._session !== null;
    } catch {
      return false;
    }
  }

  /**
   * Check if authenticated
   */
  isAuthenticated(): boolean {
    return this._session !== null;
  }

  /**
   * Get PR info for a branch/bookmark
   */
  async getPullRequestInfo(owner: string, repo: string, branch: string): Promise<PullRequestInfo | null> {
    const cacheKey = `${owner}/${repo}/${branch}`;

    // Check cache
    const cachedExpiry = this._cacheExpiry.get(cacheKey);
    if (cachedExpiry && Date.now() < cachedExpiry) {
      return this._prCache.get(cacheKey) ?? null;
    }

    const session = await this.getSession();
    if (!session) {
      return null;
    }

    try {
      // Search for PRs with this head branch
      const response = await fetch(
        `https://api.github.com/repos/${owner}/${repo}/pulls?head=${owner}:${branch}&state=all`,
        {
          headers: {
            'Authorization': `Bearer ${session.accessToken}`,
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'open-jj-vscode'
          }
        }
      );

      if (!response.ok) {
        console.error('[open-jj] GitHub API error:', response.status, response.statusText);
        return null;
      }

      const prs = await response.json() as GitHubPullRequest[];

      if (prs.length === 0) {
        this._prCache.set(cacheKey, null);
        this._cacheExpiry.set(cacheKey, Date.now() + this._cacheDuration);
        return null;
      }

      // Get the most recent PR for this branch
      const pr = prs[0];
      let state: PullRequestState;

      if (pr.merged) {
        state = 'merged';
      } else if (pr.draft) {
        state = 'draft';
      } else if (pr.state === 'open') {
        state = 'open';
      } else if (pr.state === 'closed') {
        state = 'closed';
      } else {
        state = 'none';
      }

      const info: PullRequestInfo = {
        number: pr.number,
        state,
        url: pr.html_url,
        title: pr.title
      };

      this._prCache.set(cacheKey, info);
      this._cacheExpiry.set(cacheKey, Date.now() + this._cacheDuration);

      return info;
    } catch (error) {
      console.error('[open-jj] Error fetching PR info:', error);
      return null;
    }
  }

  /**
   * Get PR info for multiple branches at once
   */
  async getPullRequestsForBranches(owner: string, repo: string, branches: string[]): Promise<Map<string, PullRequestInfo>> {
    const result = new Map<string, PullRequestInfo>();
    const session = await this.getSession();

    console.log('[open-jj] getPullRequestsForBranches:', { owner, repo, branches, hasSession: !!session });

    if (!session) {
      console.log('[open-jj] No GitHub session available');
      return result;
    }

    if (branches.length === 0) {
      console.log('[open-jj] No branches to check');
      return result;
    }

    try {
      // Fetch all open and recently closed PRs
      const [openResponse, closedResponse] = await Promise.all([
        fetch(`https://api.github.com/repos/${owner}/${repo}/pulls?state=open&per_page=100`, {
          headers: {
            'Authorization': `Bearer ${session.accessToken}`,
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'open-jj-vscode'
          }
        }),
        fetch(`https://api.github.com/repos/${owner}/${repo}/pulls?state=closed&per_page=50&sort=updated&direction=desc`, {
          headers: {
            'Authorization': `Bearer ${session.accessToken}`,
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'open-jj-vscode'
          }
        })
      ]);

      if (!openResponse.ok || !closedResponse.ok) {
        console.log('[open-jj] GitHub API error:', { openOk: openResponse.ok, closedOk: closedResponse.ok });
        return result;
      }

      const openPrs = await openResponse.json() as GitHubPullRequest[];
      const closedPrs = await closedResponse.json() as GitHubPullRequest[];
      const allPrs = [...openPrs, ...closedPrs];

      console.log('[open-jj] Fetched PRs:', { open: openPrs.length, closed: closedPrs.length });
      console.log('[open-jj] PR branches:', allPrs.map(pr => pr.head.ref));

      // Match PRs to branches
      for (const pr of allPrs) {
        const branchName = pr.head.ref;
        if (branches.includes(branchName) && !result.has(branchName)) {
          let state: PullRequestState;
          if (pr.merged) {
            state = 'merged';
          } else if (pr.draft) {
            state = 'draft';
          } else if (pr.state === 'open') {
            state = 'open';
          } else {
            state = 'closed';
          }

          result.set(branchName, {
            number: pr.number,
            state,
            url: pr.html_url,
            title: pr.title
          });
        }
      }

      // Cache results
      const now = Date.now();
      for (const branch of branches) {
        const cacheKey = `${owner}/${repo}/${branch}`;
        this._prCache.set(cacheKey, result.get(branch) ?? null);
        this._cacheExpiry.set(cacheKey, now + this._cacheDuration);
      }

      return result;
    } catch (error) {
      console.error('[open-jj] Error fetching PRs:', error);
      return result;
    }
  }

  /**
   * Clear the PR cache
   */
  clearCache(): void {
    this._prCache.clear();
    this._cacheExpiry.clear();
  }

  /**
   * Parse GitHub owner/repo from remote URL
   */
  static parseGitHubUrl(remoteUrl: string): { owner: string; repo: string } | null {
    const match = remoteUrl.match(/github\.com[:/]([^/]+)\/([^/]+?)(\.git)?$/);
    if (match) {
      return { owner: match[1], repo: match[2] };
    }
    return null;
  }
}
