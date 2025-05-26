// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'exchanges.volume_chart',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_exchanges_volume_chart',
  description:
    'This endpoint allows you to **query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange’s ID**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      days: {
        type: 'string',
        description: 'data up to number of days ago',
        enum: ['1', '7', '14', '30', '90', '180', '365'],
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.exchanges.volumeChart.get(id, body);
};

export default { metadata, tool, handler };
