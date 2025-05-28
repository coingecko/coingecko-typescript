// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'exchanges',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/exchanges/list',
  operationId: 'exchanges-list',
};

export const tool: Tool = {
  name: 'get_list_exchanges',
  description: 'This endpoint allows you to **query all the exchanges with ID and name**',
  inputSchema: {
    type: 'object',
    properties: {
      status: {
        type: 'string',
        description: 'filter by status of exchanges, default: active',
        enum: ['active', 'inactive'],
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.exchanges.getList(body);
};

export default { metadata, tool, handler };
