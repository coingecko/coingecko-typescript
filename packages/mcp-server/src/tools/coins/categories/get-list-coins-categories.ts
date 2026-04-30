// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins.categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/categories/list',
  operationId: 'coins-categories-list',
};

export const tool: Tool = {
  name: 'get_list_coins_categories',
  description: 'This endpoint allows you to **query all the coins categories on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.coins.categories.getList());
};

export default { metadata, tool, handler };
