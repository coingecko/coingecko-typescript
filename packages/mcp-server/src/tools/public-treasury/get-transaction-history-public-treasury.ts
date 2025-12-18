// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'public_treasury',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/public_treasury/{entity_id}/transaction_history',
  operationId: 'public-treasury-transaction-history',
};

export const tool: Tool = {
  name: 'get_transaction_history_public_treasury',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you **query public companies & governments' cryptocurrency transaction history** by Entity ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/public_treasury_get_transaction_history_response',\n  $defs: {\n    public_treasury_get_transaction_history_response: {\n      type: 'object',\n      properties: {\n        transactions: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              average_entry_value_usd: {\n                type: 'number',\n                description: 'average entry value in usd after the transaction'\n              },\n              coin_id: {\n                type: 'string',\n                description: 'coin ID'\n              },\n              date: {\n                type: 'number',\n                description: 'transaction date in UNIX timestamp'\n              },\n              holding_balance: {\n                type: 'number',\n                description: 'total holding balance after the transaction'\n              },\n              holding_net_change: {\n                type: 'number',\n                description: 'net change in holdings after the transaction'\n              },\n              source_url: {\n                type: 'string',\n                description: 'source document URL'\n              },\n              transaction_value_usd: {\n                type: 'number',\n                description: 'transaction value in usd'\n              },\n              type: {\n                type: 'string',\n                description: 'transaction type: buy or sell',\n                enum: [                  'buy',\n                  'sell'\n                ]\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      entity_id: {
        type: 'string',
      },
      coin_ids: {
        type: 'string',
        description:
          'filter transactions by coin IDs, comma-separated if querying more than 1 coin \n *refers to [`/coins/list`](/reference/coins-list).',
      },
      order: {
        type: 'string',
        description: 'use this to sort the order of transactions, default: `date_desc`',
        enum: [
          'date_desc',
          'date_asc',
          'holding_net_change_desc',
          'holding_net_change_asc',
          'transaction_value_usd_desc',
          'transaction_value_usd_asc',
          'average_cost_desc',
          'average_cost_asc',
        ],
      },
      page: {
        type: 'number',
        description: 'page through results, default: `1`',
      },
      per_page: {
        type: 'number',
        description: 'total results per page, default: `100` \n Valid values: 1...250',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['entity_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { entity_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.publicTreasury.getTransactionHistory(entity_id, body)),
    );
  } catch (error) {
    if (error instanceof Coingecko.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
