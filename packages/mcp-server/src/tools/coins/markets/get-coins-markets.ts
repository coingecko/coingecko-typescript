// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins.markets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/markets',
  operationId: 'coins-markets',
};

export const tool: Tool = {
  name: 'get_coins_markets',
  description:
    'This endpoint allows you to **query all the supported coins with price, market cap, volume and market related data**',
  inputSchema: {
    type: 'object',
    properties: {
      vs_currency: {
        type: 'string',
        description:
          'target currency of coins and market data <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).',
      },
      category: {
        type: 'string',
        description:
          "filter based on coins' category <br> *refers to [`/coins/categories/list`](/reference/coins-categories-list).",
      },
      ids: {
        type: 'string',
        description:
          "coins' IDs, comma-separated if querying more than 1 coin. <br> *refers to [`/coins/list`](/reference/coins-list).",
      },
      include_tokens: {
        type: 'string',
        description:
          'for `symbols` lookups, specify `all` to include all matching tokens <br> Default `top` returns top-ranked tokens (by market cap or volume)',
        enum: ['top', 'all'],
      },
      locale: {
        type: 'string',
        description: 'language background, default: en',
        enum: [
          'ar',
          'bg',
          'cs',
          'da',
          'de',
          'el',
          'en',
          'es',
          'fi',
          'fr',
          'he',
          'hi',
          'hr',
          'hu',
          'id',
          'it',
          'ja',
          'ko',
          'lt',
          'nl',
          'no',
          'pl',
          'pt',
          'ro',
          'ru',
          'sk',
          'sl',
          'sv',
          'th',
          'tr',
          'uk',
          'vi',
          'zh',
          'zh-tw',
        ],
      },
      names: {
        type: 'string',
        description: "coins' names, comma-separated if querying more than 1 coin.",
      },
      order: {
        type: 'string',
        description: 'sort result by field, default: market_cap_desc',
        enum: ['market_cap_asc', 'market_cap_desc', 'volume_asc', 'volume_desc', 'id_asc', 'id_desc'],
      },
      page: {
        type: 'number',
        description: 'page through results, default: 1',
      },
      per_page: {
        type: 'number',
        description: 'total results per page, default: 100 <br> Valid values: 1...250',
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
      price_change_percentage: {
        type: 'string',
        description:
          'include price change percentage timeframe, comma-separated if query more than 1 price change percentage timeframe <br> Valid values: 1h, 24h, 7d, 14d, 30d, 200d, 1y',
      },
      sparkline: {
        type: 'boolean',
        description: 'include sparkline 7 days data, default: false',
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
  return client.coins.markets.get(body);
};

export default { metadata, tool, handler };
