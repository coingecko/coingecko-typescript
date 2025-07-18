// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query all the supported coins with price, market cap, volume and market related data**\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      id: {\n        type: 'string',\n        description: 'coin ID'\n      },\n      ath: {\n        type: 'number',\n        description: 'coin all time high (ATH) in currency'\n      },\n      ath_change_percentage: {\n        type: 'number',\n        description: 'coin all time high (ATH) change in percentage'\n      },\n      ath_date: {\n        type: 'string',\n        description: 'coin all time high (ATH) date',\n        format: 'date-time'\n      },\n      atl: {\n        type: 'number',\n        description: 'coin all time low (atl) in currency'\n      },\n      atl_change_percentage: {\n        type: 'number',\n        description: 'coin all time low (atl) change in percentage'\n      },\n      atl_date: {\n        type: 'string',\n        description: 'coin all time low (atl) date',\n        format: 'date-time'\n      },\n      circulating_supply: {\n        type: 'number',\n        description: 'coin circulating supply'\n      },\n      current_price: {\n        type: 'number',\n        description: 'coin current price in currency'\n      },\n      fully_diluted_valuation: {\n        type: 'number',\n        description: 'coin fully diluted valuation (fdv) in currency'\n      },\n      high_24h: {\n        type: 'number',\n        description: 'coin 24hr price high in currency'\n      },\n      image: {\n        type: 'string',\n        description: 'coin image url'\n      },\n      last_updated: {\n        type: 'string',\n        description: 'coin last updated timestamp',\n        format: 'date-time'\n      },\n      low_24h: {\n        type: 'number',\n        description: 'coin 24hr price low in currency'\n      },\n      market_cap: {\n        type: 'number',\n        description: 'coin market cap in currency'\n      },\n      market_cap_change_24h: {\n        type: 'number',\n        description: 'coin 24hr market cap change in currency'\n      },\n      market_cap_change_percentage_24h: {\n        type: 'number',\n        description: 'coin 24hr market cap change in percentage'\n      },\n      market_cap_rank: {\n        type: 'number',\n        description: 'coin rank by market cap'\n      },\n      max_supply: {\n        type: 'number',\n        description: 'coin max supply'\n      },\n      name: {\n        type: 'string',\n        description: 'coin name'\n      },\n      price_change_24h: {\n        type: 'number',\n        description: 'coin 24hr price change in currency'\n      },\n      price_change_percentage_24h: {\n        type: 'number',\n        description: 'coin 24hr price change in percentage'\n      },\n      roi: {\n        type: 'object',\n        description: 'return on investment data',\n        properties: {\n          currency: {\n            type: 'string',\n            description: 'ROI currency'\n          },\n          percentage: {\n            type: 'number',\n            description: 'ROI percentage'\n          },\n          times: {\n            type: 'number',\n            description: 'ROI multiplier'\n          }\n        },\n        required: [          'currency',\n          'percentage',\n          'times'\n        ]\n      },\n      symbol: {\n        type: 'string',\n        description: 'coin symbol'\n      },\n      total_supply: {\n        type: 'number',\n        description: 'coin total supply'\n      },\n      total_volume: {\n        type: 'number',\n        description: 'coin total trading volume in currency'\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['vs_currency'],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.coins.markets.get(body)));
};

export default { metadata, tool, handler };
