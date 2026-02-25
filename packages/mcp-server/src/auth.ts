// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from '@coingecko/coingecko-typescript';
import { McpOptions } from './options';

export const parseClientAuthHeaders = (req: IncomingMessage, required?: boolean): Partial<ClientOptions> => {
  const proAPIKey =
    Array.isArray(req.headers['x-cg-pro-api-key']) ?
      req.headers['x-cg-pro-api-key'][0]
    : req.headers['x-cg-pro-api-key'];
  const demoAPIKey =
    Array.isArray(req.headers['x-cg-demo-api-key']) ?
      req.headers['x-cg-demo-api-key'][0]
    : req.headers['x-cg-demo-api-key'];
  return { proAPIKey, demoAPIKey };
};

export const getStainlessApiKey = (req: IncomingMessage, mcpOptions: McpOptions): string | undefined => {
  // Try to get the key from the x-stainless-api-key header
  const headerKey =
    Array.isArray(req.headers['x-stainless-api-key']) ?
      req.headers['x-stainless-api-key'][0]
    : req.headers['x-stainless-api-key'];
  if (headerKey && typeof headerKey === 'string') {
    return headerKey;
  }

  // Fall back to value set in the mcpOptions (e.g. from environment variable), if provided
  return mcpOptions.stainlessApiKey;
};
