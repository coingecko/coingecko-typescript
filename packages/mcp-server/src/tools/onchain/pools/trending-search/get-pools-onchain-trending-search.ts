// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.pools.trending_search',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/pools/trending_search',
  operationId: 'trending-search-pools',
};

export const tool: Tool = {
  name: 'get_pools_onchain_trending_search',
  description:
    'This endpoint allows you to **query all the trending search pools across all networks on GeckoTerminal**',
  inputSchema: {
    type: 'object',
    properties: {
      include: {
        type: 'string',
        description:
          'attributes to include, comma-separated if more than one to include <br> Available values: `base_token`, `quote_token`, `dex`, `network`',
      },
      pools: {
        type: 'integer',
        description: 'number of pools to return, maximum 10 <br> Default value: 4',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.onchain.pools.trendingSearch.get(body);
};

export default { metadata, tool, handler };
