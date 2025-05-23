// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'companies.public_treasury',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_coin_id_companies_public_treasury',
  description: 'This endpoint allows you **query public companies’ Bitcoin or Ethereum holdings**',
  inputSchema: {
    type: 'object',
    properties: {
      coin_id: {
        type: 'string',
        enum: ['bitcoin', 'ethereum'],
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { coin_id, ...body } = args as any;
  return client.companies.publicTreasury.getCoinID(coin_id);
};

export default { metadata, tool, handler };
