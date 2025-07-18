// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.tokens.holders_chart',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/tokens/{token_address}/holders_chart',
  operationId: 'token-holders-chart-token-address',
};

export const tool: Tool = {
  name: 'get_tokens_networks_onchain_holders_chart',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **get the historical token holders chart based on the provided token contract address on a network**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            token_holders_list: {\n              type: 'array',\n              items: {\n                type: 'array',\n                items: {\n                  type: 'string'\n                }\n              }\n            }\n          }\n        },\n        type: {\n          type: 'string'\n        }\n      }\n    },\n    meta: {\n      type: 'object',\n      properties: {\n        token: {\n          type: 'object',\n          properties: {\n            address: {\n              type: 'string'\n            },\n            coingecko_coin_id: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            symbol: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      token_address: {
        type: 'string',
      },
      days: {
        type: 'string',
        description: 'number of days to return the historical token holders chart <br> Default value: 7',
        enum: ['7', '30', 'max'],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['network', 'token_address'],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { token_address, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.onchain.networks.tokens.holdersChart.get(token_address, body)),
  );
};

export default { metadata, tool, handler };
