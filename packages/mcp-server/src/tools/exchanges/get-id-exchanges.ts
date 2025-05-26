// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'exchanges',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_id_exchanges',
  description:
    'This endpoint allows you to **query exchange’s data (name, year established, country, ...), exchange volume in BTC and top 100 tickers based on exchange’s ID**',
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
  return client.exchanges.getID(id);
};

export default { metadata, tool, handler };
