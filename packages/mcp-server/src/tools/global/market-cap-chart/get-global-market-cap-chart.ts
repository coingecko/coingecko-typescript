// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'global.market_cap_chart',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_global_market_cap_chart',
  description:
    'This endpoint allows you to **query historical global market cap and volume data by number of days away from now**',
  inputSchema: {
    type: 'object',
    properties: {
      days: {
        type: 'string',
        description: 'data up to number of days ago <br> Valid values: any integer',
        enum: ['1', '7', '14', '30', '90', '180', '365', 'max'],
      },
      vs_currency: {
        type: 'string',
        description:
          'target currency of market cap, default: usd <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.global.marketCapChart.get(body);
};

export default { metadata, tool, handler };
