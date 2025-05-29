// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'simple.price',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/simple/price',
  operationId: 'simple-price',
};

export const tool: Tool = {
  name: 'get_simple_price',
  description:
    'This endpoint allows you to **query the prices of one or more coins by using their unique Coin API IDs**',
  inputSchema: {
    type: 'object',
    properties: {
      vs_currencies: {
        type: 'string',
        description:
          'target currency of coins, comma-separated if querying more than 1 currency. <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).',
      },
      ids: {
        type: 'string',
        description:
          "coins' IDs, comma-separated if querying more than 1 coin. <br> *refers to [`/coins/list`](/reference/coins-list).",
      },
      include_24hr_change: {
        type: 'boolean',
        description: 'include 24hr change, default: false',
      },
      include_24hr_vol: {
        type: 'boolean',
        description: 'include 24hr volume, default: false',
      },
      include_last_updated_at: {
        type: 'boolean',
        description: 'include last updated price time in UNIX, default: false',
      },
      include_market_cap: {
        type: 'boolean',
        description: 'include market capitalization, default: false',
      },
      include_tokens: {
        type: 'string',
        description:
          'for `symbols` lookups, specify `all` to include all matching tokens <br> Default `top` returns top-ranked tokens (by market cap or volume)',
        enum: ['top', 'all'],
      },
      names: {
        type: 'string',
        description: "coins' names, comma-separated if querying more than 1 coin.",
      },
      precision: {
        type: 'string',
        description: 'decimal place for currency price value',
        enum: [
          'full',
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
        ],
      },
      symbols: {
        type: 'string',
        description: "coins' symbols, comma-separated if querying more than 1 coin.",
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.simple.price.get(body);
};

export default { metadata, tool, handler };
