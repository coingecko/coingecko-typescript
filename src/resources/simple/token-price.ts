// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TokenPrice extends APIResource {
  /**
   * To query one or more token prices by using their token contract addresses
   */
  getID(
    id: string,
    query: TokenPriceGetIDParams,
    options?: RequestOptions,
  ): APIPromise<TokenPriceGetIDResponse> {
    return this._client.get(path`/simple/token_price/${id}`, { query, ...options });
  }
}

export type TokenPriceGetIDResponse = { [key: string]: TokenPriceGetIDResponse.item };

export namespace TokenPriceGetIDResponse {
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

export interface TokenPriceGetIDParams {
  /**
   * Token contract addresses, comma-separated if querying more than 1 token
   */
  contract_addresses: string;

  /**
   * Target currency of coins, comma-separated if querying more than 1 currency.
   * \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
   */
  vs_currencies: string;

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
}

export declare namespace TokenPrice {
  export {
    type TokenPriceGetIDResponse as TokenPriceGetIDResponse,
    type TokenPriceGetIDParams as TokenPriceGetIDParams,
  };
}
