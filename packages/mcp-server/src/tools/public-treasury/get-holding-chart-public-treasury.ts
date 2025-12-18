// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { isJqError, maybeFilter } from '@coingecko/coingecko-mcp/filtering';
import { Metadata, asErrorResult, asTextContentResult } from '@coingecko/coingecko-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Coingecko from '@coingecko/coingecko-typescript';

export const metadata: Metadata = {
  resource: 'public_treasury',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/public_treasury/{entity_id}/{coin_id}/holding_chart',
  operationId: 'public-treasury-entity-chart',
};

export const tool: Tool = {
  name: 'get_holding_chart_public_treasury',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nThis endpoint allows you to **query historical cryptocurrency holdings chart of public companies & governments** by Entity ID and Coin ID\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/public_treasury_get_holding_chart_response',\n  $defs: {\n    public_treasury_get_holding_chart_response: {\n      type: 'object',\n      properties: {\n        holding_value_in_usd: {\n          type: 'array',\n          items: {\n            type: 'array',\n            items: {\n              type: 'number'\n            }\n          }\n        },\n        holdings: {\n          type: 'array',\n          items: {\n            type: 'array',\n            items: {\n              type: 'number'\n            }\n          }\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      entity_id: {
        type: 'string',
      },
      coin_id: {
        type: 'string',
      },
      days: {
        type: 'string',
        description: 'data up to number of days ago \n Valid values: `7, 14, 30, 90, 180, 365, 730, max`',
      },
      include_empty_intervals: {
        type: 'boolean',
        description: 'include empty intervals with no transaction data, default: false',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['entity_id', 'coin_id', 'days'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Coingecko, args: Record<string, unknown> | undefined) => {
  const { coin_id, jq_filter, ...body } = args as any;
  try {
    return asTextContentResult(
      await maybeFilter(jq_filter, await client.publicTreasury.getHoldingChart(coin_id, body)),
    );
  } catch (error) {
    if (error instanceof Coingecko.APIError || isJqError(error)) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
