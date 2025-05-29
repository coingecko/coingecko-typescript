// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../../../';
import Coingecko from 'coingecko-typescript';

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
    'This endpoint allows you to **get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool address on a network**',
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
    },
  },
};

export const handler = (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { timeframe, ...body } = args as any;
  return client.onchain.networks.pools.ohlcv.getTimeframe(timeframe, body);
};

export default { metadata, tool, handler };
