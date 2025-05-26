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
  name: 'get_id_derivatives_exchanges',
  description:
    'This endpoint allows you to **query the derivatives exchange’s related data (ID, name, open interest, ...) based on the exchanges’ ID**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      include_tickers: {
        type: 'string',
        description: 'include tickers data',
        enum: ['all', 'unexpired'],
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.derivatives.exchanges.getID(id, body);
};

export default { metadata, tool, handler };
