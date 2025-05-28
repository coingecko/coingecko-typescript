// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'key',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/key',
  operationId: 'api-usage',
};

export const tool: Tool = {
  name: 'get_key',
  description:
    "This endpoint allows you to **monitor your account's API usage, including rate limits, monthly total credits, remaining credits, and more**",
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  return client.key.get();
};

export default { metadata, tool, handler };
