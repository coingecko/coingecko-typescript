// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/categories/{category_id}/pools',
  operationId: 'pools-category',
};

export const tool: Tool = {
  name: 'get_pools_onchain_categories',
  description: 'This endpoint allows you to **query all the pools based on the provided category ID**',
  inputSchema: {
    type: 'object',
    properties: {
      category_id: {
        type: 'string',
      },
      include: {
        type: 'string',
        description:
          'attributes to include, comma-separated if more than one to include <br> Available values: `base_token`, `quote_token`, `dex`, `network`. <br> Example: `base_token` or `base_token,dex`',
      },
      page: {
        type: 'integer',
        description: 'page through results <br> Default value: `1`',
      },
      sort: {
        type: 'string',
        description: 'sort the pools by field <br> Default value: `pool_created_at_desc`',
        enum: [
          'm5_trending',
          'h1_trending',
          'h6_trending',
          'h24_trending',
          'h24_tx_count_desc',
          'h24_volume_usd_desc',
          'pool_created_at_desc',
          'h24_price_change_percentage_desc',
        ],
      },
    },
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { category_id, ...body } = args as any;
  return asTextContentResult(await client.onchain.categories.getPools(category_id, body));
};

export default { metadata, tool, handler };
