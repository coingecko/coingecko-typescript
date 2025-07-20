// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'onchain.pools.megafilter',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/onchain/pools/megafilter',
  operationId: 'pools-megafilter',
};

export const tool: Tool = {
  name: 'get_pools_onchain_megafilter',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query pools based on various filters across all networks on GeckoTerminal**",
  inputSchema: {
    type: 'object',
    properties: {
      buy_tax_percentage_max: {
        type: 'number',
        description: 'maximum buy tax percentage',
      },
      buy_tax_percentage_min: {
        type: 'number',
        description: 'minimum buy tax percentage',
      },
      buys_duration: {
        type: 'string',
        description: 'duration for buy transactions metric <br> Default value: 24h',
        enum: ['5m', '1h', '6h', '24h'],
      },
      buys_max: {
        type: 'integer',
        description: 'maximum number of buy transactions',
      },
      buys_min: {
        type: 'integer',
        description: 'minimum number of buy transactions',
      },
      checks: {
        type: 'string',
        description:
          'filter options for various checks, comma-separated if more than one <br> Available values: `no_honeypot`, `good_gt_score`, `on_coingecko`, `has_social`',
      },
      dexes: {
        type: 'string',
        description:
          'filter pools by DEXes, comma-separated if more than one <br> DEX ID refers to [/networks/{network}/dexes](/reference/dexes-list)',
      },
      fdv_usd_max: {
        type: 'number',
        description: 'maximum fully diluted value in USD',
      },
      fdv_usd_min: {
        type: 'number',
        description: 'minimum fully diluted value in USD',
      },
      h24_volume_usd_max: {
        type: 'number',
        description: 'maximum 24hr volume in USD',
      },
      h24_volume_usd_min: {
        type: 'number',
        description: 'minimum 24hr volume in USD',
      },
      include: {
        type: 'string',
        description:
          'attributes to include, comma-separated if more than one to include <br> Available values: `base_token`, `quote_token`, `dex`, `network`',
      },
      include_unknown_honeypot_tokens: {
        type: 'boolean',
        description:
          "when `checks` includes `no_honeypot`, set to **`true`** to also include  'unknown honeypot' tokens. Default value: `false`",
      },
      networks: {
        type: 'string',
        description:
          'filter pools by networks, comma-separated if more than one <br> Network ID refers to [/networks](/reference/networks-list)',
      },
      page: {
        type: 'integer',
        description: 'page through results <br> Default value: 1',
      },
      pool_created_hour_max: {
        type: 'number',
        description: 'maximum pool age in hours',
      },
      pool_created_hour_min: {
        type: 'number',
        description: 'minimum pool age in hours',
      },
      reserve_in_usd_max: {
        type: 'number',
        description: 'maximum reserve in USD',
      },
      reserve_in_usd_min: {
        type: 'number',
        description: 'minimum reserve in USD',
      },
      sell_tax_percentage_max: {
        type: 'number',
        description: 'maximum sell tax percentage',
      },
      sell_tax_percentage_min: {
        type: 'number',
        description: 'minimum sell tax percentage',
      },
      sells_duration: {
        type: 'string',
        description: 'duration for sell transactions metric <br> Default value: 24h',
        enum: ['5m', '1h', '6h', '24h'],
      },
      sells_max: {
        type: 'integer',
        description: 'maximum number of sell transactions',
      },
      sells_min: {
        type: 'integer',
        description: 'minimum number of sell transactions',
      },
      sort: {
        type: 'string',
        description: 'sort the pools by field <br> Default value: h6_trending',
        enum: [
          'm5_trending',
          'h1_trending',
          'h6_trending',
          'h24_trending',
          'h24_tx_count_desc',
          'h24_volume_usd_desc',
          'h24_price_change_percentage_desc',
          'pool_created_at_desc',
        ],
      },
      tx_count_duration: {
        type: 'string',
        description: 'duration for transaction count metric <br> Default value: 24h',
        enum: ['5m', '1h', '6h', '24h'],
      },
      tx_count_max: {
        type: 'integer',
        description: 'maximum transaction count',
      },
      tx_count_min: {
        type: 'integer',
        description: 'minimum transaction count',
      },
    },
    required: [],
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.onchain.pools.megafilter.get(body));
};

export default { metadata, tool, handler };
