// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'search',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_search',
  description: 'This endpoint allows you to **search for coins, categories and markets listed on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'search query',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.search.get(body);
};

export default { metadata, tool, handler };
