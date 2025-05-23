// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Simple extends APIResource {
  /**
   * This endpoint allows you to **query the prices of one or more coins by using
   * their unique Coin API IDs**
   *
   * @example
   * ```ts
   * const response = await client.simple.getPrice({
   *   vs_currencies: 'vs_currencies',
   * });
   * ```
   */
  getPrice(query: SimpleGetPriceParams, options?: RequestOptions): APIPromise<SimpleGetPriceResponse> {
    return this._client.get('/simple/price', { query, ...options });
  }

  /**
   * This endpoint allows you to **query one or more token prices using their token
   * contract addresses**
   *
   * @example
   * ```ts
   * const response = await client.simple.getTokenPrice(
   *   'ethereum',
   *   {
   *     contract_addresses: 'contract_addresses',
   *     vs_currencies: 'vs_currencies',
   *   },
   * );
   * ```
   */
  getTokenPrice(
    id: string,
    query: SimpleGetTokenPriceParams,
    options?: RequestOptions,
  ): APIPromise<SimpleGetTokenPriceResponse> {
    return this._client.get(path`/simple/token_price/${id}`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the supported currencies on CoinGecko**
   *
   * @example
   * ```ts
   * const response =
   *   await client.simple.listSupportedCurrencies();
   * ```
   */
  listSupportedCurrencies(options?: RequestOptions): APIPromise<SimpleListSupportedCurrenciesResponse> {
    return this._client.get('/simple/supported_vs_currencies', options);
  }
}

export interface SimpleGetPriceResponse {
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

export interface SimpleGetTokenPriceResponse {
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

export type SimpleListSupportedCurrenciesResponse = Array<string>;

export interface SimpleGetPriceParams {
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

export interface SimpleGetTokenPriceParams {
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

export declare namespace Simple {
  export {
    type SimpleGetPriceResponse as SimpleGetPriceResponse,
    type SimpleGetTokenPriceResponse as SimpleGetTokenPriceResponse,
    type SimpleListSupportedCurrenciesResponse as SimpleListSupportedCurrenciesResponse,
    type SimpleGetPriceParams as SimpleGetPriceParams,
    type SimpleGetTokenPriceParams as SimpleGetTokenPriceParams,
  };
}
