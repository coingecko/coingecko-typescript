// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'exchanges',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_exchanges',
  description:
    'This endpoint allows you to **query all the supported exchanges with exchanges’ data (ID, name, country, ...) that have active trading volumes on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'number',
        description: 'page through results, default: 1',
      },
      per_page: {
        type: 'number',
        description: 'total results per page, default: 100 <br> Valid values: 1...250',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.exchanges.get(body);
};

export default { metadata, tool, handler };
