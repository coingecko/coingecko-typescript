// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Coingecko from 'coingecko-typescript';

export const metadata: Metadata = {
  resource: 'token_lists',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/token_lists/{asset_platform_id}/all.json',
  operationId: 'token-lists',
};

export const tool: Tool = {
  name: 'get_all_json_token_lists',
  description:
    'This endpoint allows you to **get full list of tokens of a blockchain network (asset platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)**',
  inputSchema: {
    type: 'object',
    properties: {
      asset_platform_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { asset_platform_id, ...body } = args as any;
  return client.tokenLists.getAllJson(asset_platform_id);
};

export default { metadata, tool, handler };
