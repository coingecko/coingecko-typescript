// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.dexes',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/dexes/{dex}/pools',
  operationId: 'top-pools-dex',
};

export const tool: Tool = {
  name: 'get_pools_networks_onchain_dexes',
  description:
    'This endpoint allows you to **query all the top pools based on the provided network and decentralized exchange (DEX)**',
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      dex: {
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

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { dex, ...body } = args as any;
  return asTextContentResult(await client.onchain.networks.dexes.getPools(dex, body));
};

export default { metadata, tool, handler };
