// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins.list',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/list',
  operationId: 'coins-list',
};

export const tool: Tool = {
  name: 'get_coins_list',
  description:
    'This endpoint allows you to **query all the supported coins on CoinGecko with coins ID, name and symbol**',
  inputSchema: {
    type: 'object',
    properties: {
      include_platform: {
        type: 'boolean',
        description: "include platform and token's contract addresses, default: false",
      },
      status: {
        type: 'string',
        description: 'filter by status of coins, default: active',
        enum: ['active', 'inactive'],
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.coins.list.get(body);
};

export default { metadata, tool, handler };
