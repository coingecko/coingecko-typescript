// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'nfts.market_chart',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/nfts/{id}/market_chart',
  operationId: 'nfts-id-market-chart',
};

export const tool: Tool = {
  name: 'get_nfts_market_chart',
  description:
    'This endpoint allows you **query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      days: {
        type: 'string',
        description: 'data up to number of days <br> Valid values: any integer or max',
      },
    },
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await client.nfts.marketChart.get(id, body));
};

export default { metadata, tool, handler };
