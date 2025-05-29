// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'exchange_rates',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/exchange_rates',
  operationId: 'exchange-rates',
};

export const tool: Tool = {
  name: 'get_exchange_rates',
  description: 'This endpoint allows you to **query BTC exchange rates with other currencies**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  return client.exchangeRates.get();
};

export default { metadata, tool, handler };
