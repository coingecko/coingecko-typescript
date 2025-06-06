// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'search.trending',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/search/trending',
  operationId: 'trending-search',
};

export const tool: Tool = {
  name: 'get_search_trending',
  description:
    'This endpoint allows you **query trending search coins, NFTs and categories on CoinGecko in the last 24 hours**',
  inputSchema: {
    type: 'object',
    properties: {
      show_max: {
        type: 'string',
        description:
          'show max number of results available for the given type <br> Available values: `coins`, `nfts`, `categories` <br> Example: `coins` or `coins,nfts,categories`',
      },
    },
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.search.trending.get(body));
};

export default { metadata, tool, handler };
