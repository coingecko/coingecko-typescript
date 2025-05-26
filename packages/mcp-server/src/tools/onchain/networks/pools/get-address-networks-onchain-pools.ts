// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.pools',
  operation: 'read',
  tags: [],
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
          'attributes to include, comma-separated if more than one to include <br> Available values: `base_token`, `quote_token`, `dex`',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { address, ...body } = args as any;
  return client.onchain.networks.pools.getAddress(address, body);
};

export default { metadata, tool, handler };
