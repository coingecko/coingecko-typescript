// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.tokens.pools',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/tokens/{token_address}/pools',
  operationId: 'top-pools-contract-address',
};

export const tool: Tool = {
  name: 'get_tokens_networks_onchain_pools',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query top pools based on the provided token contract address on a network**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          attributes: {\n            type: 'object',\n            properties: {\n              address: {\n                type: 'string'\n              },\n              base_token_price_native_currency: {\n                type: 'string'\n              },\n              base_token_price_quote_token: {\n                type: 'string'\n              },\n              base_token_price_usd: {\n                type: 'string'\n              },\n              fdv_usd: {\n                type: 'string'\n              },\n              market_cap_usd: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              pool_created_at: {\n                type: 'string'\n              },\n              price_change_percentage: {\n                type: 'object',\n                properties: {\n                  h1: {\n                    type: 'string'\n                  },\n                  h24: {\n                    type: 'string'\n                  },\n                  h6: {\n                    type: 'string'\n                  },\n                  m15: {\n                    type: 'string'\n                  },\n                  m30: {\n                    type: 'string'\n                  },\n                  m5: {\n                    type: 'string'\n                  }\n                }\n              },\n              quote_token_price_base_token: {\n                type: 'string'\n              },\n              quote_token_price_native_currency: {\n                type: 'string'\n              },\n              quote_token_price_usd: {\n                type: 'string'\n              },\n              reserve_in_usd: {\n                type: 'string'\n              },\n              transactions: {\n                type: 'object',\n                properties: {\n                  h1: {\n                    type: 'object',\n                    properties: {\n                      buyers: {\n                        type: 'integer'\n                      },\n                      buys: {\n                        type: 'integer'\n                      },\n                      sellers: {\n                        type: 'integer'\n                      },\n                      sells: {\n                        type: 'integer'\n                      }\n                    }\n                  },\n                  h24: {\n                    type: 'object',\n                    properties: {\n                      buyers: {\n                        type: 'integer'\n                      },\n                      buys: {\n                        type: 'integer'\n                      },\n                      sellers: {\n                        type: 'integer'\n                      },\n                      sells: {\n                        type: 'integer'\n                      }\n                    }\n                  },\n                  m15: {\n                    type: 'object',\n                    properties: {\n                      buyers: {\n                        type: 'integer'\n                      },\n                      buys: {\n                        type: 'integer'\n                      },\n                      sellers: {\n                        type: 'integer'\n                      },\n                      sells: {\n                        type: 'integer'\n                      }\n                    }\n                  },\n                  m30: {\n                    type: 'object',\n                    properties: {\n                      buyers: {\n                        type: 'integer'\n                      },\n                      buys: {\n                        type: 'integer'\n                      },\n                      sellers: {\n                        type: 'integer'\n                      },\n                      sells: {\n                        type: 'integer'\n                      }\n                    }\n                  },\n                  m5: {\n                    type: 'object',\n                    properties: {\n                      buyers: {\n                        type: 'integer'\n                      },\n                      buys: {\n                        type: 'integer'\n                      },\n                      sellers: {\n                        type: 'integer'\n                      },\n                      sells: {\n                        type: 'integer'\n                      }\n                    }\n                  }\n                }\n              },\n              volume_usd: {\n                type: 'object',\n                properties: {\n                  h1: {\n                    type: 'string'\n                  },\n                  h24: {\n                    type: 'string'\n                  },\n                  h6: {\n                    type: 'string'\n                  },\n                  m15: {\n                    type: 'string'\n                  },\n                  m30: {\n                    type: 'string'\n                  },\n                  m5: {\n                    type: 'string'\n                  }\n                }\n              }\n            }\n          },\n          relationships: {\n            type: 'object',\n            properties: {\n              base_token: {\n                type: 'object',\n                properties: {\n                  data: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string'\n                      }\n                    }\n                  }\n                }\n              },\n              dex: {\n                type: 'object',\n                properties: {\n                  data: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string'\n                      }\n                    }\n                  }\n                }\n              },\n              quote_token: {\n                type: 'object',\n                properties: {\n                  data: {\n                    type: 'object',\n                    properties: {\n                      id: {\n                        type: 'string'\n                      },\n                      type: {\n                        type: 'string'\n                      }\n                    }\n                  }\n                }\n              }\n            }\n          },\n          type: {\n            type: 'string'\n          }\n        }\n      }\n    },\n    included: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string'\n          },\n          attributes: {\n            type: 'object',\n            properties: {\n              address: {\n                type: 'string'\n              },\n              coingecko_coin_id: {\n                type: 'string'\n              },\n              decimals: {\n                type: 'integer'\n              },\n              image_url: {\n                type: 'string'\n              },\n              name: {\n                type: 'string'\n              },\n              symbol: {\n                type: 'string'\n              }\n            }\n          },\n          type: {\n            type: 'string'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      token_address: {
        type: 'string',
      },
      include: {
        type: 'string',
        description:
          'attributes to include, comma-separated if more than one to include <br> Available values: `base_token`, `quote_token`, `dex`',
      },
      page: {
        type: 'integer',
        description: 'page through results <br> Default value: 1',
      },
      sort: {
        type: 'string',
        description: 'sort the pools by field <br> Default value: h24_volume_usd_liquidity_desc',
        enum: ['h24_volume_usd_liquidity_desc', 'h24_tx_count_desc', 'h24_volume_usd_desc'],
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
    await maybeFilter(args, await client.onchain.networks.tokens.pools.get(token_address, body)),
  );
};

export default { metadata, tool, handler };
