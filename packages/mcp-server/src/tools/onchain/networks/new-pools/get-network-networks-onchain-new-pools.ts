// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
          'attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`',
      },
      include_gt_community_data: {
        type: 'boolean',
        description:
          'include GeckoTerminal community data (Sentiment votes, Suspicious reports) \n Default value: false',
      },
      page: {
        type: 'integer',
        description: 'page through results \n Default value: 1',
      },
    },
    required: ['network'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { network, ...body } = args as any;
  try {
    return asTextContentResult(await client.onchain.networks.newPools.getNetwork(network, body));
  } catch (error) {
    if (error instanceof Coingecko.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
