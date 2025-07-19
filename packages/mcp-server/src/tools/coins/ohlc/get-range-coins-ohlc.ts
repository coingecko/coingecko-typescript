// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins.ohlc',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/{id}/ohlc/range',
  operationId: 'coins-id-ohlc-range',
};

export const tool: Tool = {
  name: 'get_range_coins_ohlc',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin within a range of timestamp based on particular coin ID**\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'array',\n    items: {\n      type: 'number'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      from: {
        type: 'number',
        description: 'starting date in UNIX timestamp',
      },
      interval: {
        type: 'string',
        description: 'data interval',
        enum: ['daily', 'hourly'],
      },
      to: {
        type: 'number',
        description: 'ending date in UNIX timestamp',
      },
      vs_currency: {
        type: 'string',
        description:
          'target currency of price data <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'from', 'interval', 'to', 'vs_currency'],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.coins.ohlc.getRange(id, body)));
};

export default { metadata, tool, handler };
