// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Price extends APIResource {
  /**
   * To query the prices of one or more coins by using their unique Coin API IDs,
   * symbols, or names
   */
  get(query: PriceGetParams, options?: RequestOptions): APIPromise<PriceGetResponse> {
    return this._client.get('/simple/price', { query, ...options });
  }
}

export type PriceGetResponse = { [key: string]: PriceGetResponse.item };

export namespace PriceGetResponse {
  export interface item {
    /**
     * Last updated timestamp in UNIX seconds
     */
    last_updated_at?: number;

    /**
     * Price in the target currency
     */
    usd?: number;

    /**
     * 24-hour price change percentage in the target currency
     */
    usd_24h_change?: number;

    /**
     * 24-hour trading volume in the target currency
     */
    usd_24h_vol?: number;

    /**
     * Market capitalization in the target currency
     */
    usd_market_cap?: number;
  }
}

export interface PriceGetParams {
  /**
   * Target currency of coins, comma-separated if querying more than 1 currency.
   * \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
   */
  vs_currencies: string;

  /**
   * Coins' IDs, comma-separated if querying more than 1 coin. \*refers to
   * [`/coins/list`](/reference/coins-list)
   */
  ids?: string;

  /**
   * Include 24-hour change percentage. Default: false
   */
  include_24hr_change?: boolean;

  /**
   * Include 24-hour trading volume. Default: false
   */
  include_24hr_vol?: boolean;

  /**
   * Include last updated price time as a UNIX timestamp. Default: false
   */
  include_last_updated_at?: boolean;

  /**
   * Include market capitalization. Default: false
   */
  include_market_cap?: boolean;

  /**
   * For `symbols` lookups, specify `all` to include all matching tokens. Default
   * `top` returns top-ranked tokens by market cap or volume.
   */
  include_tokens?: 'top' | 'all';

  /**
   * Coins' names, comma-separated if querying more than 1 coin.
   */
  names?: string;

  /**
   * Decimal places for currency price value
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
   * Coins' symbols, comma-separated if querying more than 1 coin.
   */
  symbols?: string;
}

export declare namespace Price {
  export { type PriceGetResponse as PriceGetResponse, type PriceGetParams as PriceGetParams };
}
