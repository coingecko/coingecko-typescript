// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'asset_platforms',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/asset_platforms',
  operationId: 'asset-platforms-list',
};

export const tool: Tool = {
  name: 'get_asset_platforms',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query all the asset platforms on CoinGecko**\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    type: 'object',\n    properties: {\n      id: {\n        type: 'string',\n        description: 'asset platform ID'\n      },\n      chain_identifier: {\n        type: 'number',\n        description: 'chainlist\\'s chain ID'\n      },\n      image: {\n        type: 'object',\n        description: 'image of the asset platform',\n        properties: {\n          large: {\n            type: 'string'\n          },\n          small: {\n            type: 'string'\n          },\n          thumb: {\n            type: 'string'\n          }\n        }\n      },\n      name: {\n        type: 'string',\n        description: 'chain name'\n      },\n      native_coin_id: {\n        type: 'string',\n        description: 'chain native coin ID'\n      },\n      shortname: {\n        type: 'string',\n        description: 'chain shortname'\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'string',
        description: 'apply relevant filters to results',
        enum: ['nft'],
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
  return asTextContentResult(await maybeFilter(args, await client.assetPlatforms.get(body)));
};

export default { metadata, tool, handler };
