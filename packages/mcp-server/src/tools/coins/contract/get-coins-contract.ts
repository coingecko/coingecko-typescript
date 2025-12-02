// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins.contract',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/{id}/contract/{contract_address}',
  operationId: 'coins-contract-address',
};

export const tool: Tool = {
  name: 'get_coins_contract',
  description:
    'This endpoint allows you to **query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin from the CoinGecko coin page based on an asset platform and a particular token contract address**',
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      contract_address: {
        type: 'string',
      },
    },
    required: ['id', 'contract_address'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { contract_address, ...body } = args as any;
  try {
    return asTextContentResult(await client.coins.contract.get(contract_address, body));
  } catch (error) {
    if (error instanceof Coingecko.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
