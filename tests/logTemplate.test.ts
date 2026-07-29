import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { parseLogOutput } from '../src/jj/logParser';
import { LOG_GRAPH_TEMPLATE } from '../src/jj/logTemplate';

describe('jj log template', () => {
  let repositoryPath: string;

  beforeAll(() => {
    repositoryPath = mkdtempSync(join(tmpdir(), 'open-jj-log-template-'));
    const init = spawnSync('jj', ['git', 'init', repositoryPath], {
      encoding: 'utf8',
    });

    expect(init.status, init.stderr).toBe(0);
  });

  afterAll(() => {
    rmSync(repositoryPath, { recursive: true, force: true });
  });

  it('produces log output that OpenJJ can parse with the installed jj version', () => {
    const log = spawnSync(
      'jj',
      [
        '--color=never',
        'log',
        '--no-pager',
        '-r',
        '@',
        '--config',
        'ui.graph.style=ascii',
        '-T',
        LOG_GRAPH_TEMPLATE,
      ],
      {
        cwd: repositoryPath,
        encoding: 'utf8',
      },
    );

    expect(log.status, log.stderr).toBe(0);
    expect(parseLogOutput(log.stdout).changes).toHaveLength(1);
  });
});
