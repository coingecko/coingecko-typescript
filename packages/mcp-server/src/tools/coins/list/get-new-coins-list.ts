// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'This endpoint allows you to **query the latest 200 coins that recently listed on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.coins.list.getNew());
};

export default { metadata, tool, handler };
