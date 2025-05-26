// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.pools.multi',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_addresses_pools_networks_onchain_multi',
  description:
    'This endpoint allows you to **query multiple pools based on the provided network and pool address**',
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
        description:
          'attributes to include, comma-separated if more than one to include <br> Available values: `base_token`, `quote_token`, `dex`',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { addresses, ...body } = args as any;
  return client.onchain.networks.pools.multi.getAddresses(addresses, body);
};

export default { metadata, tool, handler };
