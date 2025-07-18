// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'coins.contract.market_chart',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/coins/{id}/contract/{contract_address}/market_chart/range',
  operationId: 'contract-address-market-chart-range',
};

export const tool: Tool = {
  name: 'get_range_contract_coins_market_chart',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **get the historical chart data within certain time range in UNIX along with price, market cap and 24hr volume based on asset platform and particular token contract address**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    market_caps: {\n      type: 'array',\n      items: {\n        type: 'array',\n        items: {\n          type: 'number'\n        }\n      }\n    },\n    prices: {\n      type: 'array',\n      items: {\n        type: 'array',\n        items: {\n          type: 'number'\n        }\n      }\n    },\n    total_volumes: {\n      type: 'array',\n      items: {\n        type: 'array',\n        items: {\n          type: 'number'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      id: {
        type: 'string',
      },
      contract_address: {
        type: 'string',
      },
      from: {
        type: 'number',
        description: 'starting date in UNIX timestamp',
      },
      to: {
        type: 'number',
        description: 'ending date in UNIX timestamp',
      },
      vs_currency: {
        type: 'string',
        description:
          'target currency of market data <br> *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).',
      },
      interval: {
        type: 'string',
        description: 'data interval, leave empty for auto granularity',
        enum: ['5m', 'hourly', 'daily'],
      },
      precision: {
        type: 'string',
        description: 'decimal place for currency price value',
        enum: [
          'full',
          '0',
          '1',
          '2',
          '3',
          '4',
          '5',
          '6',
          '7',
          '8',
          '9',
          '10',
          '11',
          '12',
          '13',
          '14',
          '15',
          '16',
          '17',
          '18',
        ],
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['id', 'contract_address', 'from', 'to', 'vs_currency'],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { contract_address, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.coins.contract.marketChart.getRange(contract_address, body)),
  );
};

export default { metadata, tool, handler };
