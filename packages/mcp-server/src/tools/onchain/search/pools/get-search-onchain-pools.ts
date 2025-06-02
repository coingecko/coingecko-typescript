// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.search.pools',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/search/pools',
  operationId: 'search-pools',
};

export const tool: Tool = {
  name: 'get_search_onchain_pools',
  description: 'This endpoint allows you to **search for pools on a network**',
  inputSchema: {
    type: 'object',
    properties: {
      include: {
        type: 'string',
        description:
          'attributes to include, comma-separated if more than one to include <br> Available values: `base_token`, `quote_token`, `dex`',
      },
      network: {
        type: 'string',
        description: 'network ID <br> *refers to [/networks](/reference/networks-list)',
      },
      page: {
        type: 'integer',
        description: 'page through results <br> Default value: 1',
      },
      query: {
        type: 'string',
        description: 'search query',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.onchain.search.pools.get(body);
};

export default { metadata, tool, handler };
