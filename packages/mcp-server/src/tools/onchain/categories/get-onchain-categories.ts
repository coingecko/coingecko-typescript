// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/categories',
  operationId: 'categories-list',
};

export const tool: Tool = {
  name: 'get_onchain_categories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query all the supported categories on GeckoTerminal**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          attributes: {\n            type: 'object',\n            properties: {\n              description: {\n                type: 'string'\n              },\n              fdv_usd: {\n                type: 'string'\n              },\n              h24_tx_count: {\n                type: 'integer'\n              },\n              h24_volume_usd: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              reserve_in_usd: {\n                type: 'string'\n              },\n              volume_change_percentage: {\n                type: 'object',\n                properties: {\n                  h1: {\n                    type: 'string'\n                  },\n                  h12: {\n                    type: 'string'\n                  },\n                  h24: {\n                    type: 'string'\n                  },\n                  h6: {\n                    type: 'string'\n                  }\n                }\n              }\n            }\n          },\n          type: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'integer',
        description: 'page through results <br> Default value: `1`',
      },
      sort: {
        type: 'string',
        description: 'sort the categories by field <br> Default value: `h6_volume_percentage_desc`',
        enum: [
          'h1_volume_percentage_desc',
          'h6_volume_percentage_desc',
          'h12_volume_percentage_desc',
          'h24_tx_count_desc',
          'h24_volume_usd_desc',
          'fdv_usd_desc',
          'reserve_in_usd_desc',
        ],
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
  return asTextContentResult(await maybeFilter(args, await client.onchain.categories.get(body)));
};

export default { metadata, tool, handler };
