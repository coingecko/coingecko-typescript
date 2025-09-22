// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.pools',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/pools/{address}',
  operationId: 'pool-address',
};

export const tool: Tool = {
  name: 'get_address_networks_onchain_pools',
  description:
    'This endpoint allows you to **query the specific pool based on the provided network and pool address**',
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
        description:
          'attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`',
      },
      include_composition: {
        type: 'boolean',
        description: 'include pool composition, default: false',
      },
      include_volume_breakdown: {
        type: 'boolean',
        description: 'include volume breakdown, default: false',
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
  return asTextContentResult(await client.onchain.networks.pools.getAddress(address, body));
};

export default { metadata, tool, handler };
