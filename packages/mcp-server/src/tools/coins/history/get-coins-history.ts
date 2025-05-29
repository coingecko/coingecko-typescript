// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/{id}/history',
  operationId: 'coins-id-history',
};

export const tool: Tool = {
  name: 'get_coins_history',
  description:
    'This endpoint allows you to **query the historical data (price, market cap, 24hrs volume, ...) at a given date for a coin based on a particular coin ID**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      date: {
        type: 'string',
        description: 'the date of data snapshot <br> Format: `dd-mm-yyyy`',
      },
      localization: {
        type: 'boolean',
        description: 'include all the localized languages in response, default: true',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.coins.history.get(id, body);
};

export default { metadata, tool, handler };
