// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'derivatives',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/derivatives',
  operationId: 'derivatives-tickers',
};

export const tool: Tool = {
  name: 'get_derivatives',
  description:
    'This endpoint allows you to **query all the tickers from derivatives exchanges on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  return client.derivatives.get();
};

export default { metadata, tool, handler };
