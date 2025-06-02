// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/{id}',
  operationId: 'coins-id',
};

export const tool: Tool = {
  name: 'get_id_coins',
  description:
    'This endpoint allows you to **query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin from the CoinGecko coin page based on a particular coin ID**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      community_data: {
        type: 'boolean',
        description: 'include community data, default: true',
      },
      developer_data: {
        type: 'boolean',
        description: 'include developer data, default: true',
      },
      dex_pair_format: {
        type: 'string',
        description:
          'set to `symbol` to display DEX pair base and target as symbols, default: `contract_address`',
        enum: ['contract_address', 'symbol'],
      },
      localization: {
        type: 'boolean',
        description: 'include all the localized languages in the response, default: true',
      },
      market_data: {
        type: 'boolean',
        description: 'include market data, default: true',
      },
      sparkline: {
        type: 'boolean',
        description: 'include sparkline 7 days data, default: false',
      },
      tickers: {
        type: 'boolean',
        description: 'include tickers data, default: true',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return client.coins.getID(id, body);
};

export default { metadata, tool, handler };
