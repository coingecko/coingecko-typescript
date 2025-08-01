// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'nfts',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/nfts/{id}',
  operationId: 'nfts-id',
};

export const tool: Tool = {
  name: 'get_id_nfts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query all the NFT data (name, floor price, 24hr volume ...) based on the NFT collection ID**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'NFT collection ID'\n    },\n    asset_platform_id: {\n      type: 'string',\n      description: 'NFT collection asset platform ID'\n    },\n    ath: {\n      type: 'object',\n      description: 'NFT collection all time highs',\n      properties: {\n        native_currency: {\n          type: 'number'\n        },\n        usd: {\n          type: 'number'\n        }\n      }\n    },\n    ath_change_percentage: {\n      type: 'object',\n      description: 'NFT collection all time highs change percentage',\n      properties: {\n        native_currency: {\n          type: 'number'\n        },\n        usd: {\n          type: 'number'\n        }\n      }\n    },\n    ath_date: {\n      type: 'object',\n      description: 'NFT collection all time highs date',\n      properties: {\n        native_currency: {\n          type: 'string',\n          format: 'date-time'\n        },\n        usd: {\n          type: 'string',\n          format: 'date-time'\n        }\n      }\n    },\n    banner_image: {\n      type: 'object',\n      description: 'NFT collection banner image url',\n      properties: {\n        small: {\n          type: 'string'\n        }\n      }\n    },\n    contract_address: {\n      type: 'string',\n      description: 'NFT collection contract address'\n    },\n    description: {\n      type: 'string',\n      description: 'NFT collection description'\n    },\n    explorers: {\n      type: 'array',\n      description: 'NFT collection block explorers links',\n      items: {\n        type: 'object',\n        properties: {\n          link: {\n            type: 'string'\n          },\n          name: {\n            type: 'string'\n          }\n        }\n      }\n    },\n    floor_price: {\n      type: 'object',\n      description: 'NFT collection floor price',\n      properties: {\n        native_currency: {\n          type: 'number'\n        },\n        usd: {\n          type: 'number'\n        }\n      }\n    },\n    floor_price_14d_percentage_change: {\n      type: 'object',\n      description: 'NFT collection floor price 14 days percentage change',\n      properties: {\n        native_currency: {\n          type: 'number'\n        },\n        usd: {\n          type: 'number'\n        }\n      }\n    },\n    floor_price_1y_percentage_change: {\n      type: 'object',\n      description: 'NFT collection floor price 1 year percentage change',\n      properties: {\n        native_currency: {\n          type: 'number'\n        },\n        usd: {\n          type: 'number'\n        }\n      }\n    },\n    floor_price_24h_percentage_change: {\n      type: 'object',\n      properties: {\n        native_currency: {\n          type: 'number'\n        },\n        usd: {\n          type: 'number'\n        }\n      }\n    },\n    floor_price_30d_percentage_change: {\n      type: 'object',\n      description: 'NFT collection floor price 30 days percentage change',\n      properties: {\n        native_currency: {\n          type: 'number'\n        },\n        usd: {\n          type: 'number'\n        }\n      }\n    },\n    floor_price_60d_percentage_change: {\n      type: 'object',\n      description: 'NFT collection floor price 60 days percentage change',\n      properties: {\n        native_currency: {\n          type: 'number'\n        },\n        usd: {\n          type: 'number'\n        }\n      }\n    },\n    floor_price_7d_percentage_change: {\n      type: 'object',\n      description: 'NFT collection floor price 7 days percentage change',\n      properties: {\n        native_currency: {\n          type: 'number'\n        },\n        usd: {\n          type: 'number'\n        }\n      }\n    },\n    floor_price_in_usd_24h_percentage_change: {\n      type: 'number',\n      description: 'NFT collection floor price in usd 24 hours percentage change'\n    },\n    image: {\n      type: 'object',\n      description: 'NFT collection image url',\n      properties: {\n        small: {\n          type: 'string'\n        },\n        small_2x: {\n          type: 'string'\n        }\n      }\n    },\n    links: {\n      type: 'object',\n      description: 'NFT collection links',\n      properties: {\n        discord: {\n          type: 'string'\n        },\n        homepage: {\n          type: 'string'\n        },\n        twitter: {\n          type: 'string'\n        }\n      }\n    },\n    market_cap: {\n      type: 'object',\n      description: 'NFT collection market cap',\n      properties: {\n        native_currency: {\n          type: 'number'\n        },\n        usd: {\n          type: 'number'\n        }\n      }\n    },\n    market_cap_24h_percentage_change: {\n      type: 'object',\n      description: 'NFT collection market cap 24 hours percentage change',\n      properties: {\n        native_currency: {\n          type: 'number'\n        },\n        usd: {\n          type: 'number'\n        }\n      }\n    },\n    market_cap_rank: {\n      type: 'number',\n      description: 'coin market cap rank'\n    },\n    name: {\n      type: 'string',\n      description: 'NFT collection name'\n    },\n    native_currency: {\n      type: 'string',\n      description: 'NFT collection native currency'\n    },\n    native_currency_symbol: {\n      type: 'string',\n      description: 'NFT collection native currency symbol'\n    },\n    number_of_unique_addresses: {\n      type: 'number',\n      description: 'number of unique address owning the NFTs'\n    },\n    number_of_unique_addresses_24h_percentage_change: {\n      type: 'number',\n      description: 'number of unique address owning the NFTs 24 hours percentage change'\n    },\n    one_day_average_sale_price: {\n      type: 'number',\n      description: 'NFT collection one day average sale price'\n    },\n    one_day_average_sale_price_24h_percentage_change: {\n      type: 'number',\n      description: 'NFT collection one day average sale price 24 hours percentage change'\n    },\n    one_day_sales: {\n      type: 'number',\n      description: 'NFT collection one day sales'\n    },\n    one_day_sales_24h_percentage_change: {\n      type: 'number',\n      description: 'NFT collection one day sales 24 hours percentage change'\n    },\n    symbol: {\n      type: 'string',\n      description: 'NFT collection symbol'\n    },\n    total_supply: {\n      type: 'number',\n      description: 'NFT collection total supply'\n    },\n    user_favorites_count: {\n      type: 'number',\n      description: 'NFT collection user favorites count'\n    },\n    volume_24h: {\n      type: 'object',\n      description: 'NFT collection volume in 24 hours',\n      properties: {\n        native_currency: {\n          type: 'number'\n        },\n        usd: {\n          type: 'number'\n        }\n      }\n    },\n    volume_24h_percentage_change: {\n      type: 'object',\n      description: 'NFT collection volume in 24 hours percentage change',\n      properties: {\n        native_currency: {\n          type: 'number'\n        },\n        usd: {\n          type: 'number'\n        }\n      }\n    },\n    volume_in_usd_24h_percentage_change: {\n      type: 'number',\n      description: 'NFT collection volume in usd 24 hours percentage change'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.nfts.getID(id)));
};

export default { metadata, tool, handler };
