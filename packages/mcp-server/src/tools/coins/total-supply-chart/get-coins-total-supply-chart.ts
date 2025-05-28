// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins.total_supply_chart',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/{id}/total_supply_chart',
  operationId: 'coins-id-total-supply-chart',
};

export const tool: Tool = {
  name: 'get_coins_total_supply_chart',
  description:
    'This endpoint allows you to **query historical total supply of a coin by number of days away from now based on provided coin ID**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      days: {
        type: 'string',
        description: 'data up to number of days ago <br> Valid values: any integer or `max`',
      },
      interval: {
        type: 'string',
        description: 'data interval',
        enum: ['daily'],
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.coins.totalSupplyChart.get(id, body);
};

export default { metadata, tool, handler };
