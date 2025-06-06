// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.pools.trades',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/pools/{pool_address}/trades',
  operationId: 'pool-trades-contract-address',
};

export const tool: Tool = {
  name: 'get_pools_networks_onchain_trades',
  description:
    'This endpoint allows you to **query the last 300 trades in the past 24 hours based on the provided pool address**',
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      pool_address: {
        type: 'string',
      },
      token: {
        type: 'string',
        description:
          "return trades for token <br> use this to invert the chart <br> Available values: 'base', 'quote' or token address <br> Default value: 'base'",
      },
      trade_volume_in_usd_greater_than: {
        type: 'number',
        description: 'filter trades by trade volume in USD greater than this value <br> Default value: 0',
      },
    },
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { pool_address, ...body } = args as any;
  return asTextContentResult(await client.onchain.networks.pools.trades.get(pool_address, body));
};

export default { metadata, tool, handler };
