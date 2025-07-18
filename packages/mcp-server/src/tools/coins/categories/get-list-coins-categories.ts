// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins.categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/categories/list',
  operationId: 'coins-categories-list',
};

export const tool: Tool = {
  name: 'get_list_coins_categories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query all the coins categories on CoinGecko**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    category_id: {\n      type: 'string',\n      description: 'category ID'\n    },\n    name: {\n      type: 'string',\n      description: 'category name'\n    }\n  }\n}\n```",
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
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await maybeFilter(args, await client.coins.categories.getList()));
};

export default { metadata, tool, handler };
