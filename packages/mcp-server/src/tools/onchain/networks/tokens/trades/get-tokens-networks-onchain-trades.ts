// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.tokens.trades',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/tokens/{token_address}/trades',
  operationId: 'token-trades-contract-address',
};

export const tool: Tool = {
  name: 'get_tokens_networks_onchain_trades',
  description:
    'This endpoint allows you to **query the last 300 trades in the past 24 hours, across all pools, based on the provided token contract address on a network**',
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      token_address: {
        type: 'string',
      },
      trade_volume_in_usd_greater_than: {
        type: 'number',
        description: 'filter trades by trade volume in USD greater than this value <br> Default value: 0',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { token_address, ...body } = args as any;
  return client.onchain.networks.tokens.trades.get(token_address, body);
};

export default { metadata, tool, handler };
