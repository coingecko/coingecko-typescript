// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type ClientOptions } from '@coingecko/coingecko-typescript/client';

import { IncomingMessage } from 'node:http';

export const parseAuthHeaders = (req: IncomingMessage): Partial<ClientOptions> => {
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
