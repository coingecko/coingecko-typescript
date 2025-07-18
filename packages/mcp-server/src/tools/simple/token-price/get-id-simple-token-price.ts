// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'simple.token_price',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/simple/token_price/{id}',
  operationId: 'simple-token-price',
};

export const tool: Tool = {
  name: 'get_id_simple_token_price',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query one or more token prices using their token contract addresses**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    last_updated_at: {\n      type: 'number',\n      description: 'last updated timestamp'\n    },\n    usd: {\n      type: 'number',\n      description: 'price in USD'\n    },\n    usd_24h_change: {\n      type: 'number',\n      description: '24hr change in USD'\n    },\n    usd_24h_vol: {\n      type: 'number',\n      description: '24hr volume in USD'\n    },\n    usd_market_cap: {\n      type: 'number',\n      description: 'market cap in USD'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      contract_addresses: {
        type: 'string',
        description:
          "the contract addresses of tokens, comma-separated if querying more than 1 token's contract address",
      },
      vs_currencies: {
        type: 'string',
        description:
          'target currency of coins, comma-separated if querying more than 1 currency. <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).',
      },
      include_24hr_change: {
        type: 'boolean',
        description: 'include 24hr change <br> default: false',
      },
      include_24hr_vol: {
        type: 'boolean',
        description: 'include 24hr volume, default: false',
      },
      include_last_updated_at: {
        type: 'boolean',
        description: 'include last updated price time in UNIX , default: false',
      },
      include_market_cap: {
        type: 'boolean',
        description: 'include market capitalization, default: false',
      },
      precision: {
        type: 'string',
        description: 'decimal place for currency price value',
        enum: [
          'full',
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'contract_addresses', 'vs_currencies'],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.simple.tokenPrice.getID(id, body)));
};

export default { metadata, tool, handler };
