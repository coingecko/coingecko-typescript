// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DerivativesAPI from './derivatives';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Exchanges extends APIResource {
  /**
   * This endpoint allows you to **query the derivatives exchange’s related data (ID,
   * name, open interest, ...) based on the exchanges’ ID**
   *
   * @example
   * ```ts
   * const exchange =
   *   await client.derivatives.exchanges.retrieve(
   *     'binance_futures',
   *   );
   * ```
   */
  retrieve(
    id: string,
    query: ExchangeRetrieveParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExchangeRetrieveResponse> {
    return this._client.get(path`/derivatives/exchanges/${id}`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the derivatives exchanges with related
   * data (ID, name, open interest, ...) on CoinGecko**
   *
   * @example
   * ```ts
   * const exchanges = await client.derivatives.exchanges.list();
   * ```
   */
  list(
    query: ExchangeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExchangeListResponse> {
    return this._client.get('/derivatives/exchanges', { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the derivatives exchanges with ID and
   * name on CoinGecko**
   *
   * @example
   * ```ts
   * const response = await client.derivatives.exchanges.idMap();
   * ```
   */
  idMap(options?: RequestOptions): APIPromise<ExchangeIDMapResponse> {
    return this._client.get('/derivatives/exchanges/list', options);
  }
}

export interface ExchangeRetrieveResponse {
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

  tickers?: Array<DerivativesAPI.TickersList>;

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

export interface ExchangeListResponse {
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

export interface ExchangeIDMapResponse {
  /**
   * derivatives exchange ID
   */
  id?: string;

  /**
   * derivatives exchange name
   */
  name?: string;
}

export interface ExchangeRetrieveParams {
  /**
   * include tickers data
   */
  include_tickers?: 'all' | 'unexpired';
}

export interface ExchangeListParams {
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

export declare namespace Exchanges {
  export {
    type ExchangeRetrieveResponse as ExchangeRetrieveResponse,
    type ExchangeListResponse as ExchangeListResponse,
    type ExchangeIDMapResponse as ExchangeIDMapResponse,
    type ExchangeRetrieveParams as ExchangeRetrieveParams,
    type ExchangeListParams as ExchangeListParams,
  };
}
