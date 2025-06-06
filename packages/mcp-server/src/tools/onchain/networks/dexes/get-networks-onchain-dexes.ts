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
  httpPath: '/onchain/networks/{network}/dexes',
  operationId: 'dexes-list',
};

export const tool: Tool = {
  name: 'get_networks_onchain_dexes',
  description:
    'This endpoint allows you to **query all the supported decentralized exchanges (DEXs) based on the provided network on GeckoTerminal**',
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
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
  return asTextContentResult(await client.onchain.networks.dexes.get(network, body));
};

export default { metadata, tool, handler };
