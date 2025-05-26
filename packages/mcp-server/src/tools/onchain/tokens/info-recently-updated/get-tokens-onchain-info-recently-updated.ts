// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.tokens.info_recently_updated',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_tokens_onchain_info_recently_updated',
  description:
    'This endpoint allows you to **query 100 most recently updated tokens info of a specific network or across all networks on GeckoTerminal**',
  inputSchema: {
    type: 'object',
    properties: {
      include: {
        type: 'string',
        description:
          "Attributes for related resources to include, which will be returned under the top-level 'included' key",
        enum: ['network'],
      },
      network: {
        type: 'string',
        description:
          'filter tokens by provided network <br> *refers to [/networks](/reference/networks-list)',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return client.onchain.tokens.infoRecentlyUpdated.get(body);
};

export default { metadata, tool, handler };
