// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Trades extends APIResource {
  /**
   * This endpoint allows you to **query the last 300 trades in the past 24 hours,
   * across all pools, based on the provided token contract address on a network**
   *
   * @example
   * ```ts
   * const trade =
   *   await client.onchain.networks.tokens.trades.get(
   *     '0xdac17f958d2ee523a2206206994597c13d831ec7',
   *     { network: 'eth' },
   *   );
   * ```
   */
  get(tokenAddress: string, params: TradeGetParams, options?: RequestOptions): APIPromise<TradeGetResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/tokens/${tokenAddress}/trades`, {
      query,
      ...options,
    });
  }
}

export interface TradeGetResponse {
  data?: Array<TradeGetResponse.Data>;
}

export namespace TradeGetResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      block_number?: number;

      block_timestamp?: string;

      from_token_address?: string;

      from_token_amount?: string;

      kind?: string;

      pool_address?: string;

      pool_dex?: string;

      price_from_in_currency_token?: string;

      price_from_in_usd?: string;

      price_to_in_currency_token?: string;

      price_to_in_usd?: string;

      to_token_address?: string;

      to_token_amount?: string;

      tx_from_address?: string;

      tx_hash?: string;

      volume_in_usd?: string;
    }
  }
}

export interface TradeGetParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: filter trades by trade volume in USD greater than this value
   * Default value: 0
   */
  trade_volume_in_usd_greater_than?: number;
}

export declare namespace Trades {
  export { type TradeGetResponse as TradeGetResponse, type TradeGetParams as TradeGetParams };
}
