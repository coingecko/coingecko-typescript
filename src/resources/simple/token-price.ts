// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TokenPrice extends APIResource {
  /**
   * This endpoint allows you to **query one or more token prices using their token
   * contract addresses**
   *
   * @example
   * ```ts
   * const response = await client.simple.tokenPrice.getID(
   *   'ethereum',
   *   {
   *     contract_addresses: 'contract_addresses',
   *     vs_currencies: 'vs_currencies',
   *   },
   * );
   * ```
   */
  getID(
    id: string,
    query: TokenPriceGetIDParams,
    options?: RequestOptions,
  ): APIPromise<TokenPriceGetIDResponse> {
    return this._client.get(path`/simple/token_price/${id}`, { query, ...options });
  }
}

export interface TokenPriceGetIDResponse {
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

export interface TokenPriceGetIDParams {
  /**
   * the contract addresses of tokens, comma-separated if querying more than 1
   * token's contract address
   */
  contract_addresses: string;

  /**
   * target currency of coins, comma-separated if querying more than 1 currency.
   * \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currencies: string;

  /**
   * include 24hr change default: false
   */
  include_24hr_change?: boolean;

  /**
   * include 24hr volume, default: false
   */
  include_24hr_vol?: boolean;

  /**
   * include last updated price time in UNIX , default: false
   */
  include_last_updated_at?: boolean;

  /**
   * include market capitalization, default: false
   */
  include_market_cap?: boolean;

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
}

export declare namespace TokenPrice {
  export {
    type TokenPriceGetIDResponse as TokenPriceGetIDResponse,
    type TokenPriceGetIDParams as TokenPriceGetIDParams,
  };
}
