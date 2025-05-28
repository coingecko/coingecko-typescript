// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks',
  operationId: 'networks-list',
};

export const tool: Tool = {
  name: 'get_onchain_networks',
  description: 'This endpoint allows you to **query all the supported networks on GeckoTerminal**',
  inputSchema: {
    type: 'object',
    properties: {
      page: {
        type: 'integer',
        description: 'page through results <br> Default value: 1',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.onchain.networks.get(body);
};

export default { metadata, tool, handler };
