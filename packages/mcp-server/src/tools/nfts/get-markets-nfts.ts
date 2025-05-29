// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'nfts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/nfts/markets',
  operationId: 'nfts-markets',
};

export const tool: Tool = {
  name: 'get_markets_nfts',
  description:
    'This endpoint allows you to **query all the supported NFT collections with floor price, market cap, volume and market related data on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {
      asset_platform_id: {
        type: 'string',
        description:
          'filter result by asset platform (blockchain network) <br> *refers to [`/asset_platforms`](/reference/asset-platforms-list) filter=`nft`',
      },
      order: {
        type: 'string',
        description: 'sort results by field <br> Default: `market_cap_usd_desc`',
        enum: [
          'h24_volume_native_asc',
          'h24_volume_native_desc',
          'h24_volume_usd_asc',
          'h24_volume_usd_desc',
          'market_cap_usd_asc',
          'market_cap_usd_desc',
        ],
      },
      page: {
        type: 'number',
        description: 'page through results <br> Default: `1`',
      },
      per_page: {
        type: 'number',
        description:
          'total results per page <br> Valid values: any integer between 1 and 250 <br> Default: `100`',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.nfts.getMarkets(body);
};

export default { metadata, tool, handler };
