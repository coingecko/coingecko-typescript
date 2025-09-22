// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.tokens',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/tokens/{address}',
  operationId: 'token-data-contract-address',
};

export const tool: Tool = {
  name: 'get_address_networks_onchain_tokens',
  description:
    'This endpoint allows you to **query specific token data based on the provided token contract address on a network**',
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      address: {
        type: 'string',
      },
      include: {
        type: 'string',
        description: 'attributes to include',
        enum: ['top_pools'],
      },
      include_composition: {
        type: 'boolean',
        description: 'include pool composition, default: false',
      },
    },
    required: ['network', 'address'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { address, ...body } = args as any;
  return asTextContentResult(await client.onchain.networks.tokens.getAddress(address, body));
};

export default { metadata, tool, handler };
