// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'ping',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/ping',
  operationId: 'ping-server',
};

export const tool: Tool = {
  name: 'get_ping',
  description: 'This endpoint allows you to **check the API server status**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  return client.ping.get();
};

export default { metadata, tool, handler };
