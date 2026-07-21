// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Exchanges extends APIResource {
  /**
   * To query all the derivatives exchanges with related data (ID, name, open
   * interest, ...) on CoinGecko
   */
  get(
    query: ExchangeGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExchangeGetResponse> {
    return this._client.get('/derivatives/exchanges', { query, ...options });
  }

  /**
   * To query the derivatives exchange's related data (name, open interest, trade
   * volume, ...) based on the exchange's ID
   */
  getID(
    id: string,
    query: ExchangeGetIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExchangeGetIDResponse> {
    return this._client.get(path`/derivatives/exchanges/${id}`, { query, ...options });
  }

  /**
   * To query all the supported derivatives exchanges with ID and name on CoinGecko
   */
  getList(options?: RequestOptions): APIPromise<ExchangeGetListResponse> {
    return this._client.get('/derivatives/exchanges/list', options);
  }
}

export type ExchangeGetResponse = Array<ExchangeGetResponse.ExchangeGetResponseItem>;

export namespace ExchangeGetResponse {
  export interface ExchangeGetResponseItem {
    /**
     * Derivatives exchange ID
     */
    id: string;

    /**
     * Derivatives exchange incorporated country
     */
    country: string | null;

    /**
     * Derivatives exchange description
     */
    description: string;

    /**
     * Derivatives exchange image URL
     */
    image: string;

    /**
     * Derivatives exchange name
     */
    name: string;

    /**
     * Number of futures pairs in the derivatives exchange
     */
    number_of_futures_pairs: number;

    /**
     * Number of perpetual pairs in the derivatives exchange
     */
    number_of_perpetual_pairs: number;

    /**
     * Derivatives exchange open interest in BTC
     */
    open_interest_btc: number;

    /**
     * Derivatives exchange trade volume in BTC in 24 hours
     */
    trade_volume_24h_btc: string;

    /**
     * Derivatives exchange website URL
     */
    url: string;

    /**
     * Derivatives exchange established year
     */
    year_established: number | null;
  }
}

export interface ExchangeGetIDResponse {
  /**
   * Derivatives exchange incorporated country
   */
  country: string | null;

  /**
   * Derivatives exchange description
   */
  description: string;

  /**
   * Derivatives exchange image URL
   */
  image: string;

  /**
   * Derivatives exchange name
   */
  name: string;

  /**
   * Number of futures pairs in the derivatives exchange
   */
  number_of_futures_pairs: number;

  /**
   * Number of perpetual pairs in the derivatives exchange
   */
  number_of_perpetual_pairs: number;

  /**
   * Derivatives exchange open interest in BTC
   */
  open_interest_btc: number | null;

  /**
   * Derivatives exchange trade volume in BTC in 24 hours
   */
  trade_volume_24h_btc: string;

  /**
   * Derivatives exchange website URL
   */
  url: string;

  /**
   * Derivatives exchange established year
   */
  year_established: number | null;

  /**
   * Derivative tickers data, available when include_tickers is specified
   */
  tickers?: Array<ExchangeGetIDResponse.Ticker>;
}

export namespace ExchangeGetIDResponse {
  export interface Ticker {
    /**
     * Derivative base asset
     */
    base: string;

    /**
     * Derivative bid-ask spread
     */
    bid_ask_spread: number;

    /**
     * Derivative base asset coin ID
     */
    coin_id: string;

    /**
     * Derivative contract type
     */
    contract_type: string;

    /**
     * Derivative converted last price
     */
    converted_last: Ticker.ConvertedLast;

    /**
     * Derivative converted volume
     */
    converted_volume: Ticker.ConvertedVolume;

    /**
     * Derivative expiry time in UNIX timestamp
     */
    expired_at: number | null;

    /**
     * Derivative funding rate
     */
    funding_rate: number;

    /**
     * Derivative price percentage change in 24 hours
     */
    h24_percentage_change: number;

    /**
     * Derivative volume in 24 hours
     */
    h24_volume: number;

    /**
     * Derivative underlying asset price
     */
    index: number;

    /**
     * Difference of derivative price and index price in percentage
     */
    index_basis_percentage: number;

    /**
     * Derivative last price
     */
    last: number;

    /**
     * Derivative last traded time in UNIX timestamp
     */
    last_traded: number;

    /**
     * Derivative open interest in USD
     */
    open_interest_usd: number;

    /**
     * Derivative ticker symbol
     */
    symbol: string;

    /**
     * Derivative target asset
     */
    target: string;

    /**
     * Derivative target asset coin ID
     */
    target_coin_id: string;

    /**
     * Derivative trade URL
     */
    trade_url: string;
  }

  export namespace Ticker {
    /**
     * Derivative converted last price
     */
    export interface ConvertedLast {
      btc?: string;

      eth?: string;

      usd?: string;
    }

    /**
     * Derivative converted volume
     */
    export interface ConvertedVolume {
      btc?: string;

      eth?: string;

      usd?: string;
    }
  }
}

export type ExchangeGetListResponse = Array<ExchangeGetListResponse.ExchangeGetListResponseItem>;

export namespace ExchangeGetListResponse {
  export interface ExchangeGetListResponseItem {
    /**
     * Derivatives exchange ID
     */
    id: string;

    /**
     * Derivatives exchange name
     */
    name: string;
  }
}

export interface ExchangeGetParams {
  /**
   * Sort order of responses. Default: `open_interest_btc_desc`
   */
  order?:
    | 'name_asc'
    | 'name_desc'
    | 'open_interest_btc_asc'
    | 'open_interest_btc_desc'
    | 'trade_volume_24h_btc_asc'
    | 'trade_volume_24h_btc_desc';

  /**
   * Page through results. Default value: 1
   */
  page?: number;

  /**
   * Total results per page.
   */
  per_page?: number;
}

export interface ExchangeGetIDParams {
  /**
   * Include tickers data. Default: tickers data is not included.
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
