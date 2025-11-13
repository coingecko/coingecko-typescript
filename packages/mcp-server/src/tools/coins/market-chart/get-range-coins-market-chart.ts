// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins.market_chart',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/{id}/market_chart/range',
  operationId: 'coins-id-market-chart-range',
};

export const tool: Tool = {
  name: 'get_range_coins_market_chart',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hr volume based on particular coin ID**\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/market_chart_get_range_response',\n  $defs: {\n    market_chart_get_range_response: {\n      type: 'object',\n      properties: {\n        market_caps: {\n          type: 'array',\n          items: {\n            type: 'array',\n            items: {\n              type: 'number'\n            }\n          }\n        },\n        prices: {\n          type: 'array',\n          items: {\n            type: 'array',\n            items: {\n              type: 'number'\n            }\n          }\n        },\n        total_volumes: {\n          type: 'array',\n          items: {\n            type: 'array',\n            items: {\n              type: 'number'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      from: {
        type: 'string',
        description:
          'starting date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp. \n **use ISO date string for best compatibility**',
      },
      to: {
        type: 'string',
        description:
          'ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp. \n **use ISO date string for best compatibility**',
      },
      vs_currency: {
        type: 'string',
        description:
          'target currency of market data \n *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).',
      },
      interval: {
        type: 'string',
        description: 'data interval, leave empty for auto granularity',
        enum: ['5m', 'hourly', 'daily'],
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'from', 'to', 'vs_currency'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.coins.marketChart.getRange(id, body)),
    );
  } catch (error) {
    if (isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
