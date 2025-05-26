// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.trending_pools',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_network_networks_onchain_trending_pools',
  description: 'This endpoint allows you to **query the trending pools based on the provided network**',
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      duration: {
        type: 'string',
        description: 'duration to sort trending list by <br> Default value: 24h',
        enum: ['5m', '1h', '6h', '24h'],
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
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { network, ...body } = args as any;
  return client.onchain.networks.trendingPools.getNetwork(network, body);
};

export default { metadata, tool, handler };
