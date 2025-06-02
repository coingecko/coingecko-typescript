// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'nfts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/nfts/{id}',
  operationId: 'nfts-id',
};

export const tool: Tool = {
  name: 'get_id_nfts',
  description:
    'This endpoint allows you to **query all the NFT data (name, floor price, 24hr volume ...) based on the NFT collection ID**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.nfts.getID(id);
};

export default { metadata, tool, handler };
