// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'asset_platforms',
  operation: 'read',
  tags: [],
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

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.assetPlatforms.get(body);
};

export default { metadata, tool, handler };
