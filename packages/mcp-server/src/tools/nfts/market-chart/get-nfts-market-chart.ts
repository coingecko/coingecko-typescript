// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'nfts.market_chart',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/nfts/{id}/market_chart',
  operationId: 'nfts-id-market-chart',
};

export const tool: Tool = {
  name: 'get_nfts_market_chart',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you **query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    floor_price_native: {\n      type: 'array',\n      description: 'NFT collection floor price in native currency',\n      items: {\n        type: 'array',\n        items: {\n          type: 'number'\n        }\n      }\n    },\n    floor_price_usd: {\n      type: 'array',\n      description: 'NFT collection floor price in usd',\n      items: {\n        type: 'array',\n        items: {\n          type: 'number'\n        }\n      }\n    },\n    h24_volume_native: {\n      type: 'array',\n      description: 'NFT collection volume in 24 hours in native currency',\n      items: {\n        type: 'array',\n        items: {\n          type: 'number'\n        }\n      }\n    },\n    h24_volume_usd: {\n      type: 'array',\n      description: 'NFT collection volume in 24 hours in usd',\n      items: {\n        type: 'array',\n        items: {\n          type: 'number'\n        }\n      }\n    },\n    market_cap_native: {\n      type: 'array',\n      description: 'NFT collection market cap in native currency',\n      items: {\n        type: 'array',\n        items: {\n          type: 'number'\n        }\n      }\n    },\n    market_cap_usd: {\n      type: 'array',\n      description: 'NFT collection market cap in usd',\n      items: {\n        type: 'array',\n        items: {\n          type: 'number'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      days: {
        type: 'string',
        description: 'data up to number of days <br> Valid values: any integer or max',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'days'],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.nfts.marketChart.get(id, body)));
};

export default { metadata, tool, handler };
