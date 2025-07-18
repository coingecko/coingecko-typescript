// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'nfts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/nfts/list',
  operationId: 'nfts-list',
};

export const tool: Tool = {
  name: 'get_list_nfts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query all supported NFTs with ID, contract address, name, asset platform ID and symbol on CoinGecko**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'NFT collection ID'\n    },\n    asset_platform_id: {\n      type: 'string',\n      description: 'NFT collection asset platform ID'\n    },\n    contract_address: {\n      type: 'string',\n      description: 'NFT collection contract address'\n    },\n    name: {\n      type: 'string',\n      description: 'NFT collection name'\n    },\n    symbol: {\n      type: 'string',\n      description: 'NFT collection symbol'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      order: {
        type: 'string',
        description: 'use this to sort the order of responses',
        enum: [
          'h24_volume_usd_asc',
          'h24_volume_usd_desc',
          'h24_volume_native_asc',
          'h24_volume_native_desc',
          'floor_price_native_asc',
          'floor_price_native_desc',
          'market_cap_native_asc',
          'market_cap_native_desc',
          'market_cap_usd_asc',
          'market_cap_usd_desc',
        ],
      },
      page: {
        type: 'number',
        description: 'page through results',
      },
      per_page: {
        type: 'number',
        description: 'total results per page <br> Valid values: 1...250',
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
  return asTextContentResult(await maybeFilter(args, await client.nfts.getList(body)));
};

export default { metadata, tool, handler };
