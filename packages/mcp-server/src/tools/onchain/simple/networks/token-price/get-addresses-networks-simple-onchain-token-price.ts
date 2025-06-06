// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.simple.networks.token_price',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/simple/networks/{network}/token_price/{addresses}',
  operationId: 'onchain-simple-price',
};

export const tool: Tool = {
  name: 'get_addresses_networks_simple_onchain_token_price',
  description:
    'This endpoint allows you to **get token price based on the provided token contract address on a network**',
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      addresses: {
        type: 'string',
      },
      include_24hr_price_change: {
        type: 'boolean',
        description: 'include 24hr price change, default: false',
      },
      include_24hr_vol: {
        type: 'boolean',
        description: 'include 24hr volume, default: false',
      },
      include_market_cap: {
        type: 'boolean',
        description: 'include market capitalization, default: false',
      },
      include_total_reserve_in_usd: {
        type: 'boolean',
        description: 'include total reserve in USD, default: false',
      },
      mcap_fdv_fallback: {
        type: 'boolean',
        description: 'return FDV if market cap is not available, default: false',
      },
    },
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { addresses, ...body } = args as any;
  return asTextContentResult(await client.onchain.simple.networks.tokenPrice.getAddresses(addresses, body));
};

export default { metadata, tool, handler };
