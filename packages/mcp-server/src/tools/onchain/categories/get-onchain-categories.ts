// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/categories',
  operationId: 'categories-list',
};

export const tool: Tool = {
  name: 'get_onchain_categories',
  description: 'This endpoint allows you to **query all the supported categories on GeckoTerminal**',
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'integer',
        description: 'page through results <br> Default value: `1`',
      },
      sort: {
        type: 'string',
        description: 'sort the categories by field <br> Default value: `h6_volume_percentage_desc`',
        enum: [
          'h1_volume_percentage_desc',
          'h6_volume_percentage_desc',
          'h12_volume_percentage_desc',
          'h24_tx_count_desc',
          'h24_volume_usd_desc',
          'fdv_usd_desc',
          'reserve_in_usd_desc',
        ],
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.onchain.categories.get(body);
};

export default { metadata, tool, handler };
