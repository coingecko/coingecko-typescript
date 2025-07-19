// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.pools.trades',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/pools/{pool_address}/trades',
  operationId: 'pool-trades-contract-address',
};

export const tool: Tool = {
  name: 'get_pools_networks_onchain_trades',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query the last 300 trades in the past 24 hours based on the provided pool address**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          attributes: {\n            type: 'object',\n            properties: {\n              block_number: {\n                type: 'integer'\n              },\n              block_timestamp: {\n                type: 'string'\n              },\n              from_token_address: {\n                type: 'string'\n              },\n              from_token_amount: {\n                type: 'string'\n              },\n              kind: {\n                type: 'string'\n              },\n              price_from_in_currency_token: {\n                type: 'string'\n              },\n              price_from_in_usd: {\n                type: 'string'\n              },\n              price_to_in_currency_token: {\n                type: 'string'\n              },\n              price_to_in_usd: {\n                type: 'string'\n              },\n              to_token_address: {\n                type: 'string'\n              },\n              to_token_amount: {\n                type: 'string'\n              },\n              tx_from_address: {\n                type: 'string'\n              },\n              tx_hash: {\n                type: 'string'\n              },\n              volume_in_usd: {\n                type: 'string'\n              }\n            }\n          },\n          type: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      pool_address: {
        type: 'string',
      },
      token: {
        type: 'string',
        description:
          "return trades for token <br> use this to invert the chart <br> Available values: 'base', 'quote' or token address <br> Default value: 'base'",
      },
      trade_volume_in_usd_greater_than: {
        type: 'number',
        description: 'filter trades by trade volume in USD greater than this value <br> Default value: 0',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['network', 'pool_address'],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { pool_address, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.onchain.networks.pools.trades.get(pool_address, body)),
  );
};

export default { metadata, tool, handler };
