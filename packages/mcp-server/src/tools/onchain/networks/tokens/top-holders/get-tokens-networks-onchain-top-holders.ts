// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.tokens.top_holders',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/tokens/{address}/top_holders',
  operationId: 'top-token-holders-token-address',
};

export const tool: Tool = {
  name: 'get_tokens_networks_onchain_top_holders',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query top token holders based on the provided token contract address on a network**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            holders: {\n              type: 'array',\n              items: {\n                type: 'object',\n                properties: {\n                  address: {\n                    type: 'string'\n                  },\n                  amount: {\n                    type: 'string'\n                  },\n                  label: {\n                    type: 'string'\n                  },\n                  percentage: {\n                    type: 'string'\n                  },\n                  rank: {\n                    type: 'number'\n                  },\n                  value: {\n                    type: 'string'\n                  }\n                }\n              }\n            },\n            last_updated_at: {\n              type: 'string'\n            }\n          }\n        },\n        type: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      address: {
        type: 'string',
      },
      holders: {
        type: 'string',
        description:
          'number of top token holders to return, you may use any integer or `max` <br> Default value: 10',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['network', 'address'],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { address, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.onchain.networks.tokens.topHolders.get(address, body)),
  );
};

export default { metadata, tool, handler };
