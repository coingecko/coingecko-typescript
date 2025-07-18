// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'search.trending',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/search/trending',
  operationId: 'trending-search',
};

export const tool: Tool = {
  name: 'get_search_trending',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you **query trending search coins, NFTs and categories on CoinGecko in the last 24 hours**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    categories: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'number'\n          },\n          coins_count: {\n            type: 'number',\n            description: 'category number of coins'\n          },\n          data: {\n            type: 'object',\n            properties: {\n              market_cap: {\n                type: 'number',\n                description: 'category market cap'\n              },\n              market_cap_btc: {\n                type: 'number',\n                description: 'category market cap in btc'\n              },\n              market_cap_change_percentage_24h: {\n                type: 'object',\n                description: 'category market cap change percentage in 24 hours',\n                properties: {\n                  btc: {\n                    type: 'number'\n                  },\n                  usd: {\n                    type: 'number'\n                  }\n                }\n              },\n              sparkline: {\n                type: 'string',\n                description: 'category sparkline image url'\n              },\n              total_volume: {\n                type: 'number',\n                description: 'category total volume'\n              },\n              total_volume_btc: {\n                type: 'number',\n                description: 'category total volume in btc'\n              }\n            }\n          },\n          market_cap_1h_change: {\n            type: 'number',\n            description: 'category market cap 1 hour change'\n          },\n          name: {\n            type: 'string',\n            description: 'category name'\n          },\n          slug: {\n            type: 'string',\n            description: 'category web slug'\n          }\n        }\n      }\n    },\n    coins: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'coin ID'\n          },\n          coin_id: {\n            type: 'number'\n          },\n          data: {\n            type: 'object',\n            properties: {\n              content: {\n                type: 'string'\n              },\n              market_cap: {\n                type: 'string',\n                description: 'coin market cap in usd'\n              },\n              market_cap_btc: {\n                type: 'string',\n                description: 'coin market cap in btc'\n              },\n              price: {\n                type: 'number',\n                description: 'coin price in usd'\n              },\n              price_btc: {\n                type: 'string',\n                description: 'coin price in btc'\n              },\n              price_change_percentage_24h: {\n                type: 'object',\n                description: 'coin price change percentage in 24 hours',\n                properties: {\n                  btc: {\n                    type: 'number'\n                  },\n                  usd: {\n                    type: 'number'\n                  }\n                }\n              },\n              sparkline: {\n                type: 'string',\n                description: 'coin sparkline image url'\n              },\n              total_volume: {\n                type: 'string',\n                description: 'coin total volume in usd'\n              },\n              total_volume_btc: {\n                type: 'string',\n                description: 'coin total volume in btc'\n              }\n            }\n          },\n          large: {\n            type: 'string',\n            description: 'coin large image url'\n          },\n          market_cap_rank: {\n            type: 'number',\n            description: 'coin market cap rank'\n          },\n          name: {\n            type: 'string',\n            description: 'coin name'\n          },\n          price_btc: {\n            type: 'number',\n            description: 'coin price in btc'\n          },\n          score: {\n            type: 'number',\n            description: 'coin sequence in the list'\n          },\n          slug: {\n            type: 'string',\n            description: 'coin web slug'\n          },\n          small: {\n            type: 'string',\n            description: 'coin small image url'\n          },\n          symbol: {\n            type: 'string',\n            description: 'coin symbol'\n          },\n          thumb: {\n            type: 'string',\n            description: 'coin thumb image url'\n          }\n        }\n      }\n    },\n    nfts: {\n      type: 'array',\n      items: {\n        type: 'object',\n        properties: {\n          id: {\n            type: 'string',\n            description: 'NFT collection ID'\n          },\n          data: {\n            type: 'object',\n            properties: {\n              content: {\n                type: 'string'\n              },\n              floor_price: {\n                type: 'string',\n                description: 'NFT collection floor price'\n              },\n              floor_price_in_usd_24h_percentage_change: {\n                type: 'string',\n                description: 'NFT collection floor price in usd 24 hours percentage change'\n              },\n              h24_average_sale_price: {\n                type: 'string',\n                description: 'NFT collection 24 hours average sale price'\n              },\n              h24_volume: {\n                type: 'string',\n                description: 'NFT collection volume in 24 hours'\n              },\n              sparkline: {\n                type: 'string',\n                description: 'NFT collection sparkline image url'\n              }\n            }\n          },\n          floor_price_24h_percentage_change: {\n            type: 'number',\n            description: 'NFT collection floor price 24 hours percentage change'\n          },\n          floor_price_in_native_currency: {\n            type: 'number',\n            description: 'NFT collection floor price in native currency'\n          },\n          name: {\n            type: 'string',\n            description: 'NFT collection name'\n          },\n          native_currency_symbol: {\n            type: 'string',\n            description: 'NFT collection native currency symbol'\n          },\n          nft_contract_id: {\n            type: 'number'\n          },\n          symbol: {\n            type: 'string',\n            description: 'NFT collection symbol'\n          },\n          thumb: {\n            type: 'string',\n            description: 'NFT collection thumb image url'\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      show_max: {
        type: 'string',
        description:
          'show max number of results available for the given type <br> Available values: `coins`, `nfts`, `categories` <br> Example: `coins` or `coins,nfts,categories`',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.search.trending.get(body)));
};

export default { metadata, tool, handler };
