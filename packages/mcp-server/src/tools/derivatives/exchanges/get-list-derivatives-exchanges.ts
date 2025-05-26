// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'derivatives.exchanges',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_list_derivatives_exchanges',
  description:
    'This endpoint allows you to **query all the derivatives exchanges with ID and name on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  return client.derivatives.exchanges.getList();
};

export default { metadata, tool, handler };
