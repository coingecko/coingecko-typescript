// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins.history',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/{id}/history',
  operationId: 'coins-id-history',
};

export const tool: Tool = {
  name: 'get_coins_history',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query the historical data (price, market cap, 24hrs volume, ...) at a given date for a coin based on a particular coin ID**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    id: {\n      type: 'string',\n      description: 'coin ID'\n    },\n    community_data: {\n      type: 'object',\n      description: 'coin community data',\n      properties: {\n        facebook_likes: {\n          type: 'number',\n          description: 'coin facebook likes'\n        },\n        reddit_accounts_active_48h: {\n          type: 'number',\n          description: 'coin reddit accounts active 48h'\n        },\n        reddit_average_comments_48h: {\n          type: 'number',\n          description: 'coin reddit average comments 48h'\n        },\n        reddit_average_posts_48h: {\n          type: 'number',\n          description: 'coin reddit average posts 48h'\n        },\n        reddit_subscribers: {\n          type: 'number',\n          description: 'coin reddit subscribers'\n        }\n      }\n    },\n    developer_data: {\n      type: 'object',\n      description: 'coin developer data',\n      properties: {\n        closed_issues: {\n          type: 'number',\n          description: 'coin repository closed issues'\n        },\n        code_additions_deletions_4_weeks: {\n          type: 'object',\n          description: 'coin code additions deletions 4 weeks',\n          properties: {\n            additions: {\n              type: 'number'\n            },\n            deletions: {\n              type: 'number'\n            }\n          }\n        },\n        commit_count_4_weeks: {\n          type: 'number',\n          description: 'coin commit count 4 weeks'\n        },\n        forks: {\n          type: 'number',\n          description: 'coin repository forks'\n        },\n        pull_request_contributors: {\n          type: 'number',\n          description: 'coin repository pull request contributors'\n        },\n        pull_requests_merged: {\n          type: 'number',\n          description: 'coin repository pull requests merged'\n        },\n        stars: {\n          type: 'number',\n          description: 'coin repository stars'\n        },\n        subscribers: {\n          type: 'number',\n          description: 'coin repository subscribers'\n        },\n        total_issues: {\n          type: 'number',\n          description: 'coin repository total issues'\n        }\n      }\n    },\n    image: {\n      type: 'object',\n      description: 'coin image url',\n      properties: {\n        small: {\n          type: 'string'\n        },\n        thumb: {\n          type: 'string'\n        }\n      }\n    },\n    localization: {\n      type: 'object',\n      description: 'coin localization'\n    },\n    market_data: {\n      type: 'object',\n      description: 'coin market data',\n      properties: {\n        current_price: {\n          type: 'object',\n          description: 'coin current price',\n          properties: {\n            btc: {\n              type: 'number'\n            },\n            eur: {\n              type: 'number'\n            },\n            usd: {\n              type: 'number'\n            }\n          }\n        },\n        market_cap: {\n          type: 'object',\n          description: 'coin market cap',\n          properties: {\n            btc: {\n              type: 'number'\n            },\n            eur: {\n              type: 'number'\n            },\n            usd: {\n              type: 'number'\n            }\n          }\n        },\n        total_volume: {\n          type: 'object',\n          description: 'coin total volume',\n          properties: {\n            btc: {\n              type: 'number'\n            },\n            eur: {\n              type: 'number'\n            },\n            usd: {\n              type: 'number'\n            }\n          }\n        }\n      }\n    },\n    name: {\n      type: 'string',\n      description: 'coin name'\n    },\n    public_interest_stats: {\n      type: 'object',\n      description: 'coin public interest stats',\n      properties: {\n        alexa_rank: {\n          type: 'number',\n          description: 'coin alexa rank'\n        },\n        bing_matches: {\n          type: 'number',\n          description: 'coin bing matches'\n        }\n      }\n    },\n    symbol: {\n      type: 'string',\n      description: 'coin symbol'\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      date: {
        type: 'string',
        description: 'the date of data snapshot <br> Format: `dd-mm-yyyy`',
      },
      localization: {
        type: 'boolean',
        description: 'include all the localized languages in response, default: true',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'date'],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.coins.history.get(id, body)));
};

export default { metadata, tool, handler };
