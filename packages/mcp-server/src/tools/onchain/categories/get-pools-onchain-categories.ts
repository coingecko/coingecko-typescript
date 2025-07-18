// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.categories',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/categories/{category_id}/pools',
  operationId: 'pools-category',
};

export const tool: Tool = {
  name: 'get_pools_onchain_categories',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query all the pools based on the provided category ID**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          attributes: {\n            type: 'object',\n            properties: {\n              address: {\n                type: 'string'\n              },\n              base_token_price_native_currency: {\n                type: 'string'\n              },\n              base_token_price_quote_token: {\n                type: 'string'\n              },\n              base_token_price_usd: {\n                type: 'string'\n              },\n              fdv_usd: {\n                type: 'string'\n              },\n              h24_tx_count: {\n                type: 'integer'\n              },\n              h24_volume_usd: {\n                type: 'string'\n              },\n              market_cap_usd: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              pool_created_at: {\n                type: 'string',\n                format: 'date-time'\n              },\n              price_change_percentage: {\n                type: 'object',\n                properties: {\n                  h1: {\n                    type: 'string'\n                  },\n                  h24: {\n                    type: 'string'\n                  },\n                  h6: {\n                    type: 'string'\n                  },\n                  m15: {\n                    type: 'string'\n                  },\n                  m30: {\n                    type: 'string'\n                  },\n                  m5: {\n                    type: 'string'\n                  }\n                }\n              },\n              quote_token_price_base_token: {\n                type: 'string'\n              },\n              quote_token_price_native_currency: {\n                type: 'string'\n              },\n              quote_token_price_usd: {\n                type: 'string'\n              },\n              reserve_in_usd: {\n                type: 'string'\n              }\n            }\n          },\n          relationships: {\n            type: 'object',\n            properties: {\n              base_token: {\n                type: 'object',\n                properties: {\n                  data: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string'\n                      }\n                    }\n                  }\n                }\n              },\n              dex: {\n                type: 'object',\n                properties: {\n                  data: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string'\n                      }\n                    }\n                  }\n                }\n              },\n              network: {\n                type: 'object',\n                properties: {\n                  data: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string'\n                      }\n                    }\n                  }\n                }\n              },\n              quote_token: {\n                type: 'object',\n                properties: {\n                  data: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string'\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          },\n          type: {\n            type: 'string'\n          }\n        }\n      }\n    },\n    included: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          attributes: {\n            type: 'object',\n            properties: {\n              address: {\n                type: 'string'\n              },\n              coingecko_coin_id: {\n                type: 'string'\n              },\n              decimals: {\n                type: 'integer'\n              },\n              image_url: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              symbol: {\n                type: 'string'\n              }\n            }\n          },\n          type: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      category_id: {
        type: 'string',
      },
      include: {
        type: 'string',
        description:
          'attributes to include, comma-separated if more than one to include <br> Available values: `base_token`, `quote_token`, `dex`, `network`. <br> Example: `base_token` or `base_token,dex`',
      },
      page: {
        type: 'integer',
        description: 'page through results <br> Default value: `1`',
      },
      sort: {
        type: 'string',
        description: 'sort the pools by field <br> Default value: `pool_created_at_desc`',
        enum: [
          'm5_trending',
          'h1_trending',
          'h6_trending',
          'h24_trending',
          'h24_tx_count_desc',
          'h24_volume_usd_desc',
          'pool_created_at_desc',
          'h24_price_change_percentage_desc',
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['category_id'],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { category_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.onchain.categories.getPools(category_id, body)),
  );
};

export default { metadata, tool, handler };
