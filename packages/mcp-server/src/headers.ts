// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { IncomingMessage } from 'node:http';
import { ClientOptions } from '@coingecko/coingecko-typescript';

export const parseAuthHeaders = (req: IncomingMessage, required?: boolean): Partial<ClientOptions> => {
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
