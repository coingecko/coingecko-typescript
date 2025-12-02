// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'exchanges.tickers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/exchanges/{id}/tickers',
  operationId: 'exchanges-id-tickers',
};

export const tool: Tool = {
  name: 'get_exchanges_tickers',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query exchange's tickers based on exchange's ID**\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ticker_get_response',\n  $defs: {\n    ticker_get_response: {\n      type: 'object',\n      properties: {\n        name: {\n          type: 'string',\n          description: 'coin name'\n        },\n        tickers: {\n          type: 'array',\n          description: 'list of tickers',\n          items: {\n            type: 'object',\n            properties: {\n              base: {\n                type: 'string',\n                description: 'coin ticker base currency'\n              },\n              bid_ask_spread_percentage: {\n                type: 'number',\n                description: 'coin ticker bid ask spread percentage'\n              },\n              coin_id: {\n                type: 'string',\n                description: 'coin ticker base currency coin ID'\n              },\n              converted_last: {\n                type: 'object',\n                description: 'coin ticker converted last price',\n                properties: {\n                  btc: {\n                    type: 'number'\n                  },\n                  eth: {\n                    type: 'number'\n                  },\n                  usd: {\n                    type: 'number'\n                  }\n                }\n              },\n              converted_volume: {\n                type: 'object',\n                description: 'coin ticker converted volume',\n                properties: {\n                  btc: {\n                    type: 'number'\n                  },\n                  eth: {\n                    type: 'number'\n                  },\n                  usd: {\n                    type: 'number'\n                  }\n                }\n              },\n              cost_to_move_down_usd: {\n                type: 'number',\n                description: 'coin ticker cost to move down in usd'\n              },\n              cost_to_move_up_usd: {\n                type: 'number',\n                description: 'coin ticker cost to move up in usd'\n              },\n              is_anomaly: {\n                type: 'boolean',\n                description: 'coin ticker anomaly'\n              },\n              is_stale: {\n                type: 'boolean',\n                description: 'coin ticker stale'\n              },\n              last: {\n                type: 'number',\n                description: 'coin ticker last price'\n              },\n              last_fetch_at: {\n                type: 'string',\n                description: 'coin ticker last fetch timestamp'\n              },\n              last_traded_at: {\n                type: 'string',\n                description: 'coin ticker last traded timestamp'\n              },\n              market: {\n                type: 'object',\n                description: 'coin ticker exchange',\n                properties: {\n                  has_trading_incentive: {\n                    type: 'boolean',\n                    description: 'exchange trading incentive'\n                  },\n                  identifier: {\n                    type: 'string',\n                    description: 'exchange identifier'\n                  },\n                  name: {\n                    type: 'string',\n                    description: 'exchange name'\n                  },\n                  logo: {\n                    type: 'string',\n                    description: 'exchange image url'\n                  }\n                },\n                required: [                  'has_trading_incentive',\n                  'identifier',\n                  'name'\n                ]\n              },\n              target: {\n                type: 'string',\n                description: 'coin ticker target currency'\n              },\n              target_coin_id: {\n                type: 'string',\n                description: 'coin ticker target currency coin ID'\n              },\n              timestamp: {\n                type: 'string',\n                description: 'coin ticker timestamp'\n              },\n              token_info_url: {\n                type: 'string',\n                description: 'coin ticker token info url'\n              },\n              trade_url: {\n                type: 'string',\n                description: 'coin ticker trade url'\n              },\n              trust_score: {\n                type: 'string',\n                description: 'coin ticker trust score'\n              },\n              volume: {\n                type: 'number',\n                description: 'coin ticker volume'\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      coin_ids: {
        type: 'string',
        description:
          'filter tickers by coin IDs, comma-separated if querying more than 1 coin \n *refers to [`/coins/list`](/reference/coins-list).',
      },
      depth: {
        type: 'boolean',
        description:
          'include 2% orderbook depth (Example: cost_to_move_up_usd & cost_to_move_down_usd),default: false',
      },
      dex_pair_format: {
        type: 'string',
        description:
          'set to `symbol` to display DEX pair base and target as symbols, default: `contract_address`',
        enum: ['contract_address', 'symbol'],
      },
      include_exchange_logo: {
        type: 'boolean',
        description: 'include exchange logo, default: false',
      },
      order: {
        type: 'string',
        description: 'use this to sort the order of responses, default: trust_score_desc',
        enum: [
          'market_cap_asc',
          'market_cap_desc',
          'trust_score_desc',
          'trust_score_asc',
          'volume_desc',
          'volume_asc',
          'base_target',
        ],
      },
      page: {
        type: 'number',
        description: 'page through results',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.exchanges.tickers.get(id, body)));
  } catch (error) {
    if (error instanceof Coingecko.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
