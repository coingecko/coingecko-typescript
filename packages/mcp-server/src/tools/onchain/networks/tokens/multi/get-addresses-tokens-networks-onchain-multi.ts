// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.tokens.multi',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/tokens/multi/{addresses}',
  operationId: 'tokens-data-contract-addresses',
};

export const tool: Tool = {
  name: 'get_addresses_tokens_networks_onchain_multi',
  description:
    'This endpoint allows you to **query multiple tokens data based on the provided token contract addresses on a network**',
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      addresses: {
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
    required: ['network', 'addresses'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { addresses, ...body } = args as any;
  try {
    return asTextContentResult(await client.onchain.networks.tokens.multi.getAddresses(addresses, body));
  } catch (error) {
    if (error instanceof Coingecko.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
