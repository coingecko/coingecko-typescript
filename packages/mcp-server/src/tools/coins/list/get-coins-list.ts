// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query all the supported coins on CoinGecko with coins ID, name and symbol**\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      id: {\n        type: 'string',\n        description: 'coin ID'\n      },\n      name: {\n        type: 'string',\n        description: 'coin name'\n      },\n      platforms: {\n        type: 'object',\n        description: 'coin asset platform and contract address'\n      },\n      symbol: {\n        type: 'string',\n        description: 'coin symbol'\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.coins.list.get(body)));
};

export default { metadata, tool, handler };
