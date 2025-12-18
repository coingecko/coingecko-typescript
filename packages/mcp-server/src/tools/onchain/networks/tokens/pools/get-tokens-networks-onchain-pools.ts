// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.tokens.pools',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/tokens/{token_address}/pools',
  operationId: 'top-pools-contract-address',
};

export const tool: Tool = {
  name: 'get_tokens_networks_onchain_pools',
  description:
    'This endpoint allows you to **query top pools based on the provided token contract address on a network**',
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      token_address: {
        type: 'string',
      },
      include: {
        type: 'string',
        description:
          'attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`',
      },
      include_inactive_source: {
        type: 'boolean',
        description: 'include tokens from inactive pools using the most recent swap, default: false',
      },
      page: {
        type: 'integer',
        description: 'page through results \n Default value: 1',
      },
      sort: {
        type: 'string',
        description: 'sort the pools by field \n Default value: h24_volume_usd_liquidity_desc',
        enum: ['h24_volume_usd_liquidity_desc', 'h24_tx_count_desc', 'h24_volume_usd_desc'],
      },
    },
    required: ['network', 'token_address'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { token_address, ...body } = args as any;
  try {
    return asTextContentResult(await client.onchain.networks.tokens.pools.get(token_address, body));
  } catch (error) {
    if (error instanceof Coingecko.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
