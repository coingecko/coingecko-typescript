// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.simple.networks.token_price',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/simple/networks/{network}/token_price/{addresses}',
  operationId: 'onchain-simple-price',
};

export const tool: Tool = {
  name: 'get_addresses_networks_simple_onchain_token_price',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **get token price based on the provided token contract address on a network**\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        attributes: {\n          type: 'object',\n          properties: {\n            token_prices: {\n              type: 'object'\n            }\n          }\n        },\n        type: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      network: {
        type: 'string',
      },
      addresses: {
        type: 'string',
      },
      include_24hr_price_change: {
        type: 'boolean',
        description: 'include 24hr price change, default: false',
      },
      include_24hr_vol: {
        type: 'boolean',
        description: 'include 24hr volume, default: false',
      },
      include_market_cap: {
        type: 'boolean',
        description: 'include market capitalization, default: false',
      },
      include_total_reserve_in_usd: {
        type: 'boolean',
        description: 'include total reserve in USD, default: false',
      },
      mcap_fdv_fallback: {
        type: 'boolean',
        description: 'return FDV if market cap is not available, default: false',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['network', 'addresses'],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { addresses, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.onchain.simple.networks.tokenPrice.getAddresses(addresses, body)),
  );
};

export default { metadata, tool, handler };
