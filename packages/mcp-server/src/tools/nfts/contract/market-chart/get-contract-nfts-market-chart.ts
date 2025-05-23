// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'nfts.contract.market_chart',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_contract_nfts_market_chart',
  description:
    'This endpoint allows you **query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now based on the provided contract address**',
  inputSchema: {
    type: 'object',
    properties: {
      asset_platform_id: {
        type: 'string',
      },
      contract_address: {
        type: 'string',
      },
      days: {
        type: 'string',
        description: 'data up to number of days ago <br> Valid values: any integer or max',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { contract_address, ...body } = args as any;
  return client.nfts.contract.marketChart.get(contract_address, body);
};

export default { metadata, tool, handler };
