// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.tokens.top_holders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/tokens/{address}/top_holders',
  operationId: 'top-token-holders-token-address',
};

export const tool: Tool = {
  name: 'get_tokens_networks_onchain_top_holders',
  description:
    'This endpoint allows you to **query top token holders based on the provided token contract address on a network**',
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      address: {
        type: 'string',
      },
      holders: {
        type: 'string',
        description:
          'number of top token holders to return, you may use any integer or `max` <br> Default value: 10',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { address, ...body } = args as any;
  return client.onchain.networks.tokens.topHolders.get(address, body);
};

export default { metadata, tool, handler };
