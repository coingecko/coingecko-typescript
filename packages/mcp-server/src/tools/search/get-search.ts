// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'search',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/search',
  operationId: 'search-data',
};

export const tool: Tool = {
  name: 'get_search',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **search for coins, categories and markets listed on CoinGecko**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    categories: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'category ID'\n          },\n          name: {\n            type: 'string',\n            description: 'category name'\n          }\n        }\n      }\n    },\n    coins: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'coin ID'\n          },\n          api_symbol: {\n            type: 'string',\n            description: 'coin api symbol'\n          },\n          large: {\n            type: 'string',\n            description: 'coin large image url'\n          },\n          market_cap_rank: {\n            type: 'number',\n            description: 'coin market cap rank'\n          },\n          name: {\n            type: 'string',\n            description: 'coin name'\n          },\n          symbol: {\n            type: 'string',\n            description: 'coin symbol'\n          },\n          thumb: {\n            type: 'string',\n            description: 'coin thumb image url'\n          }\n        }\n      }\n    },\n    exchanges: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'exchange ID'\n          },\n          large: {\n            type: 'string',\n            description: 'exchange large image url'\n          },\n          market_type: {\n            type: 'string',\n            description: 'exchange market type'\n          },\n          name: {\n            type: 'string',\n            description: 'exchange name'\n          },\n          thumb: {\n            type: 'string',\n            description: 'exchange thumb image url'\n          }\n        }\n      }\n    },\n    icos: {\n      type: 'array',\n      items: {\n        type: 'string'\n      }\n    },\n    nfts: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'NFT collection ID'\n          },\n          name: {\n            type: 'string',\n            description: 'NFT name'\n          },\n          symbol: {\n            type: 'string',\n            description: 'NFT collection symbol'\n          },\n          thumb: {\n            type: 'string',\n            description: 'NFT collection thumb image url'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      query: {
        type: 'string',
        description: 'search query',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['query'],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.search.get(body)));
};

export default { metadata, tool, handler };
