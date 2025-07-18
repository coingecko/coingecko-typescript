// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.networks.pools.ohlcv',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}',
  operationId: 'pool-ohlcv-contract-address',
};

export const tool: Tool = {
  name: 'get_timeframe_pools_networks_onchain_ohlcv',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool address on a network**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            ohlcv_list: {\n              type: 'array',\n              items: {\n                type: 'array',\n                items: {\n                  type: 'number'\n                }\n              }\n            }\n          }\n        },\n        type: {\n          type: 'string'\n        }\n      }\n    },\n    meta: {\n      type: 'object',\n      properties: {\n        base: {\n          type: 'object',\n          properties: {\n            address: {\n              type: 'string'\n            },\n            coingecko_coin_id: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            symbol: {\n              type: 'string'\n            }\n          }\n        },\n        quote: {\n          type: 'object',\n          properties: {\n            address: {\n              type: 'string'\n            },\n            coingecko_coin_id: {\n              type: 'string'\n            },\n            name: {\n              type: 'string'\n            },\n            symbol: {\n              type: 'string'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      pool_address: {
        type: 'string',
      },
      timeframe: {
        type: 'string',
        enum: ['day', 'hour', 'minute'],
      },
      token: {
        type: 'string',
        description:
          "return OHLCV for token <br> use this to invert the chart <br> Available values: 'base', 'quote' or token address <br> Default value: 'base'",
      },
      aggregate: {
        type: 'string',
        description:
          'time period to aggregate each OHLCV <br> Available values (day): `1` <br> Available values (hour): `1` , `4` , `12` <br> Available values (minute): `1` , `5` , `15` <br> Default value: 1',
      },
      before_timestamp: {
        type: 'integer',
        description: 'return OHLCV data before this timestamp (integer seconds since epoch)',
      },
      currency: {
        type: 'string',
        description: 'return OHLCV in USD or quote token <br> Default value: usd',
        enum: ['usd', 'token'],
      },
      include_empty_intervals: {
        type: 'boolean',
        description: 'include empty intervals with no trade data, default: false',
      },
      limit: {
        type: 'integer',
        description: 'number of OHLCV results to return, maximum 1000 <br> Default value: 100',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['network', 'pool_address', 'timeframe'],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { timeframe, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.onchain.networks.pools.ohlcv.getTimeframe(timeframe, body)),
  );
};

export default { metadata, tool, handler };
