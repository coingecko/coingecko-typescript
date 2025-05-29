// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'exchanges.volume_chart',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/exchanges/{id}/volume_chart/range',
  operationId: 'exchanges-id-volume-chart-range',
};

export const tool: Tool = {
  name: 'get_range_exchanges_volume_chart',
  description:
    'This endpoint allows you to **query the historical volume chart data in BTC by specifying date range in UNIX based on exchange’s ID**',
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
        description: 'ending date in UNIX timestamp',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.exchanges.volumeChart.getRange(id, body);
};

export default { metadata, tool, handler };
