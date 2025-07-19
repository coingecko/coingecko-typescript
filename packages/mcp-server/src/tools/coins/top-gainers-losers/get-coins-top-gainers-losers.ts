// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query the top 30 coins with largest price gain and loss by a specific time duration**\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      id: {\n        type: 'string',\n        description: 'coin ID'\n      },\n      image: {\n        type: 'string',\n        description: 'coin image url'\n      },\n      market_cap_rank: {\n        type: 'number',\n        description: 'coin rank by market cap'\n      },\n      name: {\n        type: 'string',\n        description: 'coin name'\n      },\n      symbol: {\n        type: 'string',\n        description: 'coin symbol'\n      },\n      usd: {\n        type: 'number',\n        description: 'coin price in USD'\n      },\n      usd_1y_change: {\n        type: 'number',\n        description: 'coin 1 year change in USD'\n      },\n      usd_24h_vol: {\n        type: 'number',\n        description: 'coin 24hr volume in USD'\n      }\n    }\n  }\n}\n```",
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
  return asTextContentResult(await maybeFilter(args, await client.coins.topGainersLosers.get(body)));
};

export default { metadata, tool, handler };
