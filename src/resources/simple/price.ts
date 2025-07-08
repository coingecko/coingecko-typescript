// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Price extends APIResource {
  /**
   * This endpoint allows you to **query the prices of one or more coins by using
   * their unique Coin API IDs**
   *
   * @example
   * ```ts
   * const price = await client.simple.price.get({
   *   vs_currencies: 'vs_currencies',
   * });
   * ```
   */
  get(query: PriceGetParams, options?: RequestOptions): APIPromise<PriceGetResponse> {
    return this._client.get('/simple/price', { query, ...options });
  }
}

export type PriceGetResponse = { [key: string]: PriceGetResponse.item };

export namespace PriceGetResponse {
  export interface item {
    /**
     * last updated timestamp
     */
    last_updated_at?: number;

    /**
     * price in USD
     */
    usd?: number;

    /**
     * 24hr change in USD
     */
    usd_24h_change?: number;

    /**
     * 24hr volume in USD
     */
    usd_24h_vol?: number;

    /**
     * market cap in USD
     */
    usd_market_cap?: number;
  }
}

export interface PriceGetParams {
  /**
   * target currency of coins, comma-separated if querying more than 1 currency.
   * \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currencies: string;

  /**
   * coins' IDs, comma-separated if querying more than 1 coin. \*refers to
   * [`/coins/list`](/reference/coins-list).
   */
  ids?: string;

  /**
   * include 24hr change, default: false
   */
  include_24hr_change?: boolean;

  /**
   * include 24hr volume, default: false
   */
  include_24hr_vol?: boolean;

  /**
   * include last updated price time in UNIX, default: false
   */
  include_last_updated_at?: boolean;

  /**
   * include market capitalization, default: false
   */
  include_market_cap?: boolean;

  /**
   * for `symbols` lookups, specify `all` to include all matching tokens Default
   * `top` returns top-ranked tokens (by market cap or volume)
   */
  include_tokens?: 'top' | 'all';

  /**
   * coins' names, comma-separated if querying more than 1 coin.
   */
  names?: string;

  /**
   * decimal place for currency price value
   */
  precision?:
    | 'full'
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18';

  /**
   * coins' symbols, comma-separated if querying more than 1 coin.
   */
  symbols?: string;
}

export declare namespace Price {
  export { type PriceGetResponse as PriceGetResponse, type PriceGetParams as PriceGetParams };
}
