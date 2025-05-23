// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CoinsAPI from '../coins/coins';
import * as VolumeChartAPI from './volume-chart';
import {
  VolumeChart,
  VolumeChartRetrieveParams,
  VolumeChartRetrieveRangeParams,
  VolumeChartRetrieveRangeResponse,
  VolumeChartRetrieveResponse,
} from './volume-chart';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Exchanges extends APIResource {
  volumeChart: VolumeChartAPI.VolumeChart = new VolumeChartAPI.VolumeChart(this._client);

  /**
   * This endpoint allows you to **query exchange’s data (name, year established,
   * country, ...), exchange volume in BTC and top 100 tickers based on exchange’s
   * ID**
   *
   * @example
   * ```ts
   * const exchange = await client.exchanges.retrieve('binance');
   * ```
   */
  retrieve(id: string, options?: RequestOptions): APIPromise<ExchangeRetrieveResponse> {
    return this._client.get(path`/exchanges/${id}`, options);
  }

  /**
   * This endpoint allows you to **query all the supported exchanges with exchanges’
   * data (ID, name, country, ...) that have active trading volumes on CoinGecko**
   *
   * @example
   * ```ts
   * const exchanges = await client.exchanges.list();
   * ```
   */
  list(
    query: ExchangeListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExchangeListResponse> {
    return this._client.get('/exchanges', { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the exchanges with ID and name**
   *
   * @example
   * ```ts
   * const response = await client.exchanges.listIDMap();
   * ```
   */
  listIDMap(
    query: ExchangeListIDMapParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExchangeListIDMapResponse> {
    return this._client.get('/exchanges/list', { query, ...options });
  }

  /**
   * This endpoint allows you to **query exchange's tickers based on exchange’s ID**
   *
   * @example
   * ```ts
   * const coinsTickers = await client.exchanges.retrieveTickers(
   *   'binance',
   * );
   * ```
   */
  retrieveTickers(
    id: string,
    query: ExchangeRetrieveTickersParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CoinsAPI.CoinsTickers> {
    return this._client.get(path`/exchanges/${id}/tickers`, { query, ...options });
  }
}

export interface ExchangeRetrieveResponse {
  /**
   * alert notice for exchange
   */
  alert_notice?: string;

  /**
   * exchange type (true for centralized, false for decentralized)
   */
  centralized?: boolean;

  /**
   * number of coins listed on the exchange
   */
  coins?: number;

  /**
   * exchange incorporated country
   */
  country?: string;

  /**
   * exchange description
   */
  description?: string;

  /**
   * exchange facebook url
   */
  facebook_url?: string;

  /**
   * exchange trading incentive
   */
  has_trading_incentive?: boolean;

  /**
   * exchange image url
   */
  image?: string;

  /**
   * exchange name
   */
  name?: string;

  other_url_1?: string;

  other_url_2?: string;

  /**
   * number of trading pairs on the exchange
   */
  pairs?: number;

  /**
   * public notice for exchange
   */
  public_notice?: string;

  /**
   * exchange reddit url
   */
  reddit_url?: string;

  /**
   * exchange slack url
   */
  slack_url?: string;

  /**
   * exchange telegram url
   */
  telegram_url?: string;

  tickers?: Array<CoinsAPI.CoinsTickers>;

  trade_volume_24h_btc?: number;

  /**
   * normalized trading volume by traffic in BTC in 24 hours \*refers to
   * [`this blog`](https://blog.coingecko.com/trust-score/).
   */
  trade_volume_24h_btc_normalized?: number;

  /**
   * exchange trust score
   */
  trust_score?: number;

  /**
   * exchange trust score rank
   */
  trust_score_rank?: number;

  /**
   * exchange twitter handle
   */
  twitter_handle?: string;

  /**
   * exchange website url
   */
  url?: string;

  /**
   * exchange established year
   */
  year_established?: number;
}

export interface ExchangeListResponse {
  /**
   * exchange ID
   */
  id?: string;

  /**
   * exchange country
   */
  country?: string;

  /**
   * exchange description
   */
  description?: string;

  /**
   * exchange trading incentive
   */
  has_trading_incentive?: boolean;

  /**
   * exchange image url
   */
  image?: string;

  /**
   * exchange name
   */
  name?: string;

  /**
   * exchange trade volume in BTC in 24 hours
   */
  trade_volume_24h_btc?: number;

  /**
   * normalized trading volume by traffic in BTC in 24 hours \*refers to
   * [`this blog`](https://blog.coingecko.com/trust-score/).
   */
  trade_volume_24h_btc_normalized?: number;

  /**
   * exchange trust score
   */
  trust_score?: number;

  /**
   * exchange trust score rank
   */
  trust_score_rank?: number;

  /**
   * exchange website url
   */
  url?: string;

  /**
   * exchange established year
   */
  year_established?: number;
}

export interface ExchangeListIDMapResponse {
  /**
   * exchange ID
   */
  id?: string;

  /**
   * exchange name
   */
  name?: string;
}

export interface ExchangeListParams {
  /**
   * page through results, default: 1
   */
  page?: number;

  /**
   * total results per page, default: 100 Valid values: 1...250
   */
  per_page?: number;
}

export interface ExchangeListIDMapParams {
  /**
   * filter by status of exchanges, default: active
   */
  status?: 'active' | 'inactive';
}

export interface ExchangeRetrieveTickersParams {
  /**
   * filter tickers by coin IDs, comma-separated if querying more than 1 coin
   * \*refers to [`/coins/list`](/reference/coins-list).
   */
  coin_ids?: string;

  /**
   * include 2% orderbook depth (Example: cost_to_move_up_usd &
   * cost_to_move_down_usd),default: false
   */
  depth?: boolean;

  /**
   * include exchange logo, default: false
   */
  include_exchange_logo?: boolean;

  /**
   * use this to sort the order of responses, default: trust_score_desc
   */
  order?: 'trust_score_desc' | 'trust_score_asc' | 'volume_desc' | 'volume_asc' | 'base_target';

  /**
   * page through results
   */
  page?: number;
}

Exchanges.VolumeChart = VolumeChart;

export declare namespace Exchanges {
  export {
    type ExchangeRetrieveResponse as ExchangeRetrieveResponse,
    type ExchangeListResponse as ExchangeListResponse,
    type ExchangeListIDMapResponse as ExchangeListIDMapResponse,
    type ExchangeListParams as ExchangeListParams,
    type ExchangeListIDMapParams as ExchangeListIDMapParams,
    type ExchangeRetrieveTickersParams as ExchangeRetrieveTickersParams,
  };

  export {
    VolumeChart as VolumeChart,
    type VolumeChartRetrieveResponse as VolumeChartRetrieveResponse,
    type VolumeChartRetrieveRangeResponse as VolumeChartRetrieveRangeResponse,
    type VolumeChartRetrieveParams as VolumeChartRetrieveParams,
    type VolumeChartRetrieveRangeParams as VolumeChartRetrieveRangeParams,
  };
}
