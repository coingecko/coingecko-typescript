// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.tokens.holders_chart',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/tokens/{token_address}/holders_chart',
  operationId: 'token-holders-chart-token-address',
};

export const tool: Tool = {
  name: 'get_tokens_networks_onchain_holders_chart',
  description:
    'This endpoint allows you to **get the historical token holders chart based on the provided token contract address on a network**',
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      token_address: {
        type: 'string',
      },
      days: {
        type: 'string',
        description: 'number of days to return the historical token holders chart <br> Default value: 7',
        enum: ['7', '30', 'max'],
      },
    },
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { token_address, ...body } = args as any;
  return asTextContentResult(await client.onchain.networks.tokens.holdersChart.get(token_address, body));
};

export default { metadata, tool, handler };
