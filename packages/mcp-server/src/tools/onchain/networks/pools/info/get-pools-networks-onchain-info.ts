// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.pools.info',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/pools/{pool_address}/info',
  operationId: 'pool-token-info-contract-address',
};

export const tool: Tool = {
  name: 'get_pools_networks_onchain_info',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query pool metadata (base and quote token details, image, socials, websites, description, contract address, etc.) based on a provided pool contract address on a network**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            address: {\n              type: 'string'\n            },\n            categories: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            },\n            coingecko_coin_id: {\n              type: 'string'\n            },\n            description: {\n              type: 'string'\n            },\n            discord_url: {\n              type: 'string'\n            },\n            freeze_authority: {\n              type: 'string'\n            },\n            gt_categories_id: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            },\n            gt_score: {\n              type: 'number'\n            },\n            gt_score_details: {\n              type: 'object',\n              properties: {\n                creation: {\n                  type: 'number'\n                },\n                holders: {\n                  type: 'number'\n                },\n                info: {\n                  type: 'number'\n                },\n                pool: {\n                  type: 'number'\n                },\n                transaction: {\n                  type: 'number'\n                }\n              }\n            },\n            holders: {\n              type: 'object',\n              properties: {\n                count: {\n                  type: 'integer'\n                },\n                distribution_percentage: {\n                  type: 'object',\n                  properties: {\n                    '11_30': {\n                      type: 'number'\n                    },\n                    '31_50': {\n                      type: 'number'\n                    },\n                    rest: {\n                      type: 'number'\n                    },\n                    top_10: {\n                      type: 'number'\n                    }\n                  }\n                },\n                last_updated: {\n                  type: 'string'\n                }\n              }\n            },\n            image: {\n              type: 'object',\n              properties: {\n                large: {\n                  type: 'string'\n                },\n                small: {\n                  type: 'string'\n                },\n                thumb: {\n                  type: 'string'\n                }\n              }\n            },\n            image_url: {\n              type: 'string'\n            },\n            is_honeypot: {\n              type: 'boolean'\n            },\n            mint_authority: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            symbol: {\n              type: 'string'\n            },\n            telegram_handle: {\n              type: 'string'\n            },\n            twitter_handle: {\n              type: 'string'\n            },\n            websites: {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        type: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      pool_address: {
        type: 'string',
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
    await maybeFilter(args, await client.onchain.networks.pools.info.get(pool_address, body)),
  );
};

export default { metadata, tool, handler };
