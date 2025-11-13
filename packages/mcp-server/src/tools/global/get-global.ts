// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'global',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/global',
  operationId: 'crypto-global',
};

export const tool: Tool = {
  name: 'get_global',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you **query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc**\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/global_get_response',\n  $defs: {\n    global_get_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            active_cryptocurrencies: {\n              type: 'number',\n              description: 'number of active cryptocurrencies'\n            },\n            ended_icos: {\n              type: 'number',\n              description: 'number of ended icos'\n            },\n            market_cap_change_percentage_24h_usd: {\n              type: 'number',\n              description: 'cryptocurrencies market cap change percentage in 24 hours in usd'\n            },\n            market_cap_percentage: {\n              type: 'object',\n              description: 'cryptocurrencies market cap percentage',\n              properties: {\n                btc: {\n                  type: 'number'\n                },\n                eth: {\n                  type: 'number'\n                }\n              }\n            },\n            markets: {\n              type: 'number',\n              description: 'number of exchanges'\n            },\n            ongoing_icos: {\n              type: 'number',\n              description: 'number of ongoing icos'\n            },\n            total_market_cap: {\n              type: 'object',\n              description: 'cryptocurrencies total market cap',\n              properties: {\n                btc: {\n                  type: 'number'\n                },\n                eth: {\n                  type: 'number'\n                }\n              }\n            },\n            total_volume: {\n              type: 'object',\n              description: 'cryptocurrencies total volume',\n              properties: {\n                btc: {\n                  type: 'number'\n                },\n                eth: {\n                  type: 'number'\n                }\n              }\n            },\n            upcoming_icos: {\n              type: 'number',\n              description: 'number of upcoming icos'\n            },\n            updated_at: {\n              type: 'number'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { jq_filter } = args as any;
  try {
    return asTextContentResult(await maybeFilter(jq_filter, await client.global.get()));
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
