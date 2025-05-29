// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'derivatives.exchanges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/derivatives/exchanges',
  operationId: 'derivatives-exchanges',
};

export const tool: Tool = {
  name: 'get_derivatives_exchanges',
  description:
    'This endpoint allows you to **query all the derivatives exchanges with related data (ID, name, open interest, ...) on CoinGecko**',
  inputSchema: {
    type: 'object',
    properties: {
      order: {
        type: 'string',
        description: 'use this to sort the order of responses, default: open_interest_btc_desc',
        enum: [
          'name_asc',
          'name_desc',
          'open_interest_btc_asc',
          'open_interest_btc_desc',
          'trade_volume_24h_btc_asc',
          'trade_volume_24h_btc_desc',
        ],
      },
      page: {
        type: 'number',
        description: 'page through results, default: 1',
      },
      per_page: {
        type: 'number',
        description: 'total results per page',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.derivatives.exchanges.get(body);
};

export default { metadata, tool, handler };
