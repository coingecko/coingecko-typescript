// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins.top_gainers_losers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/top_gainers_losers',
  operationId: 'coins-top-gainers-losers',
};

export const tool: Tool = {
  name: 'get_coins_top_gainers_losers',
  description:
    'This endpoint allows you to **query the top 30 coins with largest price gain and loss by a specific time duration**',
  inputSchema: {
    type: 'object',
    properties: {
      vs_currency: {
        type: 'string',
        description:
          'target currency of coins <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).',
      },
      duration: {
        type: 'string',
        description: 'filter result by time range <br> Default value: `24h`',
        enum: ['1h', '24h', '7d', '14d', '30d', '60d', '1y'],
      },
      top_coins: {
        type: 'string',
        description:
          'filter result by market cap ranking (top 300 to 1000) or all coins (including coins that do not have market cap) <br> Default value: `1000`',
        enum: ['300', '500', '1000', 'all'],
      },
    },
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.coins.topGainersLosers.get(body));
};

export default { metadata, tool, handler };
