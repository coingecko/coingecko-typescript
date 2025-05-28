// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'nfts.contract',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/nfts/{asset_platform_id}/contract/{contract_address}',
  operationId: 'nfts-contract-address',
};

export const tool: Tool = {
  name: 'get_contract_address_nfts_contract',
  description:
    'This endpoint allows you to **query all the NFT data (name, floor price, 24hr volume ...) based on the NFT collection contract address and respective asset platform**',
  inputSchema: {
    type: 'object',
    properties: {
      asset_platform_id: {
        type: 'string',
      },
      contract_address: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { contract_address, ...body } = args as any;
  return client.nfts.contract.getContractAddress(contract_address, body);
};

export default { metadata, tool, handler };
