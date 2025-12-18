// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.tokens.top_traders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network_id}/tokens/{token_address}/top_traders',
  operationId: 'top-token-traders-token-address',
};

export const tool: Tool = {
  name: 'get_tokens_networks_onchain_top_traders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query top token traders based on the provided token contract address on a network**\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/top_trader_get_response',\n  $defs: {\n    top_trader_get_response: {\n      type: 'object',\n      properties: {\n        data: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            attributes: {\n              type: 'object',\n              properties: {\n                traders: {\n                  type: 'array',\n                  items: {\n                    type: 'object',\n                    properties: {\n                      address: {\n                        type: 'string'\n                      },\n                      average_buy_price_usd: {\n                        type: 'string'\n                      },\n                      average_sell_price_usd: {\n                        type: 'string'\n                      },\n                      explorer_url: {\n                        type: 'string'\n                      },\n                      label: {\n                        type: 'string'\n                      },\n                      name: {\n                        type: 'string'\n                      },\n                      realized_pnl_usd: {\n                        type: 'string'\n                      },\n                      token_balance: {\n                        type: 'string'\n                      },\n                      total_buy_count: {\n                        type: 'integer'\n                      },\n                      total_buy_token_amount: {\n                        type: 'string'\n                      },\n                      total_buy_usd: {\n                        type: 'string'\n                      },\n                      total_sell_count: {\n                        type: 'integer'\n                      },\n                      total_sell_token_amount: {\n                        type: 'string'\n                      },\n                      total_sell_usd: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string'\n                      },\n                      unrealized_pnl_usd: {\n                        type: 'string'\n                      }\n                    }\n                  }\n                }\n              }\n            },\n            type: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      network_id: {
        type: 'string',
      },
      token_address: {
        type: 'string',
      },
      include_address_label: {
        type: 'boolean',
        description: 'include address label data, default: false',
      },
      sort: {
        type: 'string',
        description: 'sort the traders by field \n Default value: realized_pnl_usd_desc',
        enum: [
          'realized_pnl_usd_desc',
          'unrealized_pnl_usd_desc',
          'total_buy_usd_desc',
          'total_sell_usd_desc',
        ],
      },
      traders: {
        type: 'string',
        description:
          'number of top token traders to return, you may use any integer or `max` \n Default value: 10',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['network_id', 'token_address'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { token_address, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.onchain.networks.tokens.topTraders.get(token_address, body)),
    );
  } catch (error) {
    if (error instanceof Coingecko.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
