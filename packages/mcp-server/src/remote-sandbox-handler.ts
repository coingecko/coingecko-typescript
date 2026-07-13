// Custom code — not generated. Do not remove during regeneration.
//
// Runs the `execute` tool in a remote sandbox (coingecko/coingecko-mcp-sandbox)
// instead of a local Deno subprocess. Serverless runtimes like Cloudflare
// Workers cannot spawn subprocesses, so hosted deployments must use this mode.
//
// Wire contract (matches what coingecko-mcp-sandbox serves):
//   POST <endpoint>
//     headers: x-stainless-mcp-client-envs: JSON of env vars for the sandboxed SDK client
//     body:    { project_name, code, intent, client_opts }
//   response: { is_error, result, log_lines, err_lines }

import { McpRequestContext, ToolCallResult, asErrorResult, asTextContentResult } from './types';
import { WorkerInput, WorkerOutput } from './code-tool-types';
import { readEnv } from './util';

export const remoteSandboxHandler = async ({
  reqContext,
  args,
  endpoint,
  fetcher,
}: {
  reqContext: McpRequestContext;
  args: any;
  endpoint: string | undefined;
  fetcher?: typeof fetch | undefined;
}): Promise<ToolCallResult> => {
  if (!endpoint) {
    return asErrorResult(
      "Code execution mode 'remote-sandbox' requires a sandbox endpoint. Set the sandboxEndpoint MCP option.",
    );
  }

  const code = args.code as string;
  const intent = args.intent as string | undefined;
  const client = reqContext.client;
  const environment = readEnv('COINGECKO_ENVIRONMENT') || undefined;

  // Credentials and base URL for the SDK client that runs inside the sandbox.
  // When a base URL or environment is configured via env vars, the sandbox
  // resolves the URL itself; otherwise forward this client's configured baseURL.
  const clientEnvs = {
    COINGECKO_PRO_API_KEY: readEnv('COINGECKO_PRO_API_KEY') ?? client.proAPIKey ?? undefined,
    COINGECKO_DEMO_API_KEY: readEnv('COINGECKO_DEMO_API_KEY') ?? client.demoAPIKey ?? undefined,
    COINGECKO_BASE_URL:
      readEnv('COINGECKO_BASE_URL') ?? environment ? undefined : client.baseURL ?? undefined,
  };
  // Env vars forwarded by an upstream proxy (request header) take precedence.
  const mergedClientEnvs = { ...clientEnvs, ...reqContext.upstreamClientEnvs };

  const doFetch = fetcher ?? fetch;
  const res = await doFetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-stainless-mcp-client-envs': JSON.stringify(mergedClientEnvs),
    },
    body: JSON.stringify({
      project_name: 'coingecko',
      code,
      intent,
      client_opts: { environment: environment as any },
    } satisfies WorkerInput),
  });

  if (!res.ok) {
    throw new Error(
      `${res.status}: ${
        res.statusText
      } error when trying to contact the code execution sandbox. Details: ${await res.text()}`,
    );
  }

  const { is_error, result, log_lines, err_lines } = (await res.json()) as WorkerOutput;
  const hasLogs = log_lines.length > 0 || err_lines.length > 0;
  const output = {
    result,
    ...(log_lines.length > 0 && { log_lines }),
    ...(err_lines.length > 0 && { err_lines }),
  };
  if (is_error) {
    return asErrorResult(typeof result === 'string' && !hasLogs ? result : JSON.stringify(output, null, 2));
  }
  return asTextContentResult(output);
};
