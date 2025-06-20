// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'This endpoint allows you to **query all the asset platforms on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {
      filter: {
        type: 'string',
        description: 'apply relevant filters to results',
        enum: ['nft'],
      },
    },
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.assetPlatforms.get(body));
};

export default { metadata, tool, handler };
