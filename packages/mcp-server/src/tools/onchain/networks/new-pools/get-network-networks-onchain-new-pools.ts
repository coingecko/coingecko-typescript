// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.new_pools',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/new_pools',
  operationId: 'latest-pools-network',
};

export const tool: Tool = {
  name: 'get_network_networks_onchain_new_pools',
  description: 'This endpoint allows you to **query all the latest pools based on provided network**',
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
    },
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { network, ...body } = args as any;
  return asTextContentResult(await client.onchain.networks.newPools.getNetwork(network, body));
};

export default { metadata, tool, handler };
