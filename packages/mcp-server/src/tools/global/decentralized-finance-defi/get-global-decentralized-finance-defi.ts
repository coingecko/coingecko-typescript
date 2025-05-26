// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'global.decentralized_finance_defi',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_global_decentralized_finance_defi',
  description:
    'This endpoint allows you **query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume**',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  return client.global.decentralizedFinanceDefi.get();
};

export default { metadata, tool, handler };
