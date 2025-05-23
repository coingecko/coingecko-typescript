// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Exchanges extends APIResource {
  /**
   * This endpoint allows you to **query all the derivatives exchanges with related
   * data (ID, name, open interest, ...) on CoinGecko**
   *
   * @example
   * ```ts
   * const exchange = await client.derivatives.exchanges.get();
   * ```
   */
  get(
    query: ExchangeGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExchangeGetResponse> {
    return this._client.get('/derivatives/exchanges', { query, ...options });
  }

  /**
   * This endpoint allows you to **query the derivatives exchange’s related data (ID,
   * name, open interest, ...) based on the exchanges’ ID**
   *
   * @example
   * ```ts
   * const response = await client.derivatives.exchanges.getID(
   *   'binance_futures',
   * );
   * ```
   */
  getID(
    id: string,
    query: ExchangeGetIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExchangeGetIDResponse> {
    return this._client.get(path`/derivatives/exchanges/${id}`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the derivatives exchanges with ID and
   * name on CoinGecko**
   *
   * @example
   * ```ts
   * const response =
   *   await client.derivatives.exchanges.getList();
   * ```
   */
  getList(options?: RequestOptions): APIPromise<ExchangeGetListResponse> {
    return this._client.get('/derivatives/exchanges/list', options);
  }
}

export interface ExchangeGetResponse {
  /**
   * derivatives exchange ID
   */
  id?: string;

  /**
   * derivatives exchange incorporated country
   */
  country?: string | null;

  /**
   * derivatives exchange description
   */
  description?: string;

  /**
   * derivatives exchange image url
   */
  image?: string;

  /**
   * derivatives exchange name
   */
  name?: string;

  /**
   * number of futures pairs in the derivatives exchange
   */
  number_of_futures_pairs?: number;

  /**
   * number of perpetual pairs in the derivatives exchange
   */
  number_of_perpetual_pairs?: number;

  /**
   * derivatives exchange open interest in BTC
   */
  open_interest_btc?: number;

  /**
   * derivatives exchange trade volume in BTC in 24 hours
   */
  trade_volume_24h_btc?: string;

  /**
   * derivatives exchange website url
   */
  url?: string;

  /**
   * derivatives exchange established year
   */
  year_established?: number | null;
}

export interface ExchangeGetIDResponse {
  /**
   * derivatives exchange incorporated country
   */
  country?: string | null;

  /**
   * derivatives exchange description
   */
  description?: string;

  /**
   * derivatives exchange image url
   */
  image?: string;

  /**
   * derivatives exchange name
   */
  name?: string;

  /**
   * number of futures pairs in the derivatives exchange
   */
  number_of_futures_pairs?: number;

  /**
   * number of perpetual pairs in the derivatives exchange
   */
  number_of_perpetual_pairs?: number;

  /**
   * derivatives exchange open interest in BTC
   */
  open_interest_btc?: number;

  tickers?: Array<ExchangeGetIDResponse.Ticker>;

  /**
   * derivatives exchange trade volume in BTC in 24 hours
   */
  trade_volume_24h_btc?: string;

  /**
   * derivatives exchange website url
   */
  url?: string;

  /**
   * derivatives exchange established year
   */
  year_established?: number | null;
}

export namespace ExchangeGetIDResponse {
  export interface Ticker {
    /**
     * difference of derivative price and index price
     */
    basis?: number;

    /**
     * derivative contract type
     */
    contract_type?: string;

    expired_at?: string | null;

    /**
     * derivative funding rate
     */
    funding_rate?: number;

    /**
     * derivative underlying asset price
     */
    index?: number;

    /**
     * derivative underlying asset
     */
    index_id?: string;

    /**
     * derivative last updated time
     */
    last_traded_at?: number;

    /**
     * derivative market name
     */
    market?: string;

    /**
     * derivative open interest
     */
    open_interest?: number;

    /**
     * derivative ticker price
     */
    price?: string;

    /**
     * derivative ticker price percentage change in 24 hours
     */
    price_percentage_change_24h?: number;

    /**
     * derivative bid ask spread
     */
    spread?: number;

    /**
     * derivative ticker symbol
     */
    symbol?: string;

    /**
     * derivative volume in 24 hours
     */
    volume_24h?: number;
  }
}

export interface ExchangeGetListResponse {
  /**
   * derivatives exchange ID
   */
  id?: string;

  /**
   * derivatives exchange name
   */
  name?: string;
}

export interface ExchangeGetParams {
  /**
   * use this to sort the order of responses, default: open_interest_btc_desc
   */
  order?:
    | 'name_asc'
    | 'name_desc'
    | 'open_interest_btc_asc'
    | 'open_interest_btc_desc'
    | 'trade_volume_24h_btc_asc'
    | 'trade_volume_24h_btc_desc';

  /**
   * page through results, default: 1
   */
  page?: number;

  /**
   * total results per page
   */
  per_page?: number;
}

export interface ExchangeGetIDParams {
  /**
   * include tickers data
   */
  include_tickers?: 'all' | 'unexpired';
}

export declare namespace Exchanges {
  export {
    type ExchangeGetResponse as ExchangeGetResponse,
    type ExchangeGetIDResponse as ExchangeGetIDResponse,
    type ExchangeGetListResponse as ExchangeGetListResponse,
    type ExchangeGetParams as ExchangeGetParams,
    type ExchangeGetIDParams as ExchangeGetIDParams,
  };
}
