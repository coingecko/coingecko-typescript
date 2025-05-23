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
  name: 'get_networks_onchain_pools',
  description: 'This endpoint allows you to **query all the top pools based on the provided network**',
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      include: {
        type: 'string',
        description:
          'attributes to include, comma-separated if more than one to include <br> Available values: `base_token`, `quote_token`, `dex`',
      },
      page: {
        type: 'integer',
        description: 'page through results <br> Default value: 1',
      },
      sort: {
        type: 'string',
        description: 'sort the pools by field <br> Default value: h24_tx_count_desc',
        enum: ['h24_tx_count_desc', 'h24_volume_usd_desc'],
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { network, ...body } = args as any;
  return client.onchain.networks.pools.get(network, body);
};

export default { metadata, tool, handler };
