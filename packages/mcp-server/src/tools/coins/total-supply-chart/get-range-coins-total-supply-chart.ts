// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins.total_supply_chart',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/{id}/total_supply_chart/range',
  operationId: 'coins-id-total-supply-chart-range',
};

export const tool: Tool = {
  name: 'get_range_coins_total_supply_chart',
  description:
    'This endpoint allows you to **query historical total supply of a coin, within a range of timestamp based on the provided coin ID**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      from: {
        type: 'number',
        description: 'starting date in UNIX timestamp ',
      },
      to: {
        type: 'number',
        description: 'ending date in UNIX timestamp ',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.coins.totalSupplyChart.getRange(id, body);
};

export default { metadata, tool, handler };
