// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Trades extends APIResource {
  /**
   * This endpoint allows you to **query the last 300 trades in the past 24 hours
   * based on the provided pool address**
   *
   * @example
   * ```ts
   * const trade =
   *   await client.onchain.networks.pools.trades.get(
   *     '0x06da0fd433c1a5d7a4faa01111c044910a184553',
   *     { network: 'eth' },
   *   );
   * ```
   */
  get(poolAddress: string, params: TradeGetParams, options?: RequestOptions): APIPromise<TradeGetResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/pools/${poolAddress}/trades`, {
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
   * Query param: return trades for token use this to invert the chart Available
   * values: 'base', 'quote' or token address Default value: 'base'
   */
  token?: string;

  /**
   * Query param: filter trades by trade volume in USD greater than this value
   * Default value: 0
   */
  trade_volume_in_usd_greater_than?: number;
}

export declare namespace Trades {
  export { type TradeGetResponse as TradeGetResponse, type TradeGetParams as TradeGetParams };
}
