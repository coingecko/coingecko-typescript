// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins.list',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/list/new',
  operationId: 'coins-list-new',
};

export const tool: Tool = {
  name: 'get_new_coins_list',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query the latest 200 coins that recently listed on CoinGecko**\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/list_get_new_response',\n  $defs: {\n    list_get_new_response: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'coin ID'\n          },\n          activated_at: {\n            type: 'number',\n            description: 'timestamp when coin was activated on CoinGecko'\n          },\n          name: {\n            type: 'string',\n            description: 'coin name'\n          },\n          symbol: {\n            type: 'string',\n            description: 'coin symbol'\n          }\n        }\n      }\n    }\n  }\n}\n```",
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
    return asTextContentResult(await maybeFilter(jq_filter, await client.coins.list.getNew()));
  } catch (error) {
    if (error instanceof Coingecko.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
