// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins.tickers',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/{id}/tickers',
  operationId: 'coins-id-tickers',
};

export const tool: Tool = {
  name: 'get_coins_tickers',
  description:
    'This endpoint allows you to **query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      depth: {
        type: 'boolean',
        description:
          'include 2% orderbook depth, ie. `cost_to_move_up_usd` and `cost_to_move_down_usd` <br> Default: false',
      },
      dex_pair_format: {
        type: 'string',
        description:
          'set to `symbol` to display DEX pair base and target as symbols, default: `contract_address`',
        enum: ['contract_address', 'symbol'],
      },
      exchange_ids: {
        type: 'string',
        description: 'exchange ID <br> *refers to [`/exchanges/list`](/reference/exchanges-list).',
      },
      include_exchange_logo: {
        type: 'boolean',
        description: 'include exchange logo, default: false',
      },
      order: {
        type: 'string',
        description: 'use this to sort the order of responses, default: trust_score_desc',
        enum: ['trust_score_desc', 'trust_score_asc', 'volume_desc', 'volume_asc'],
      },
      page: {
        type: 'number',
        description: 'page through results',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.coins.tickers.get(id, body);
};

export default { metadata, tool, handler };
