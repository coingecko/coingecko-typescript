// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TickersAPI from './tickers';
import { TickerGetParams, TickerGetResponse, Tickers } from './tickers';
import * as VolumeChartAPI from './volume-chart';
import {
  VolumeChart,
  VolumeChartGetParams,
  VolumeChartGetRangeParams,
  VolumeChartGetRangeResponse,
  VolumeChartGetResponse,
} from './volume-chart';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Exchanges extends APIResource {
  tickers: TickersAPI.Tickers = new TickersAPI.Tickers(this._client);
  volumeChart: VolumeChartAPI.VolumeChart = new VolumeChartAPI.VolumeChart(this._client);

  /**
   * This endpoint allows you to **query all the supported exchanges with exchanges’
   * data (ID, name, country, ...) that have active trading volumes on CoinGecko**
   *
   * @example
   * ```ts
   * const exchange = await client.exchanges.get();
   * ```
   */
  get(
    query: ExchangeGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExchangeGetResponse> {
    return this._client.get('/exchanges', { query, ...options });
  }

  /**
   * This endpoint allows you to **query exchange’s data (name, year established,
   * country, ...), exchange volume in BTC and top 100 tickers based on exchange’s
   * ID**
   *
   * @example
   * ```ts
   * const response = await client.exchanges.getID('binance');
   * ```
   */
  getID(
    id: string,
    query: ExchangeGetIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExchangeGetIDResponse> {
    return this._client.get(path`/exchanges/${id}`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the exchanges with ID and name**
   *
   * @example
   * ```ts
   * const response = await client.exchanges.getList();
   * ```
   */
  getList(
    query: ExchangeGetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExchangeGetListResponse> {
    return this._client.get('/exchanges/list', { query, ...options });
  }
}

export interface ExchangeGetResponse {
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

export interface ExchangeGetIDResponse {
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

  tickers?: Array<ExchangeGetIDResponse.Ticker>;

  trade_volume_24h_btc?: number;

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

export namespace ExchangeGetIDResponse {
  export interface Ticker {
    /**
     * coin name
     */
    name?: string;

    /**
     * list of tickers
     */
    tickers?: Array<Ticker.Ticker>;
  }

  export namespace Ticker {
    export interface Ticker {
      /**
       * coin ticker base currency
       */
      base?: string;

      /**
       * coin ticker bid ask spread percentage
       */
      bid_ask_spread_percentage?: number;

      /**
       * coin ticker base currency coin ID
       */
      coin_id?: string;

      /**
       * coin ticker converted last price
       */
      converted_last?: Ticker.ConvertedLast;

      /**
       * coin ticker converted volume
       */
      converted_volume?: Ticker.ConvertedVolume;

      /**
       * coin ticker cost to move down in usd
       */
      cost_to_move_down_usd?: number;

      /**
       * coin ticker cost to move up in usd
       */
      cost_to_move_up_usd?: number;

      /**
       * coin ticker anomaly
       */
      is_anomaly?: boolean;

      /**
       * coin ticker stale
       */
      is_stale?: boolean;

      /**
       * coin ticker last price
       */
      last?: number;

      /**
       * coin ticker last fetch timestamp
       */
      last_fetch_at?: string;

      /**
       * coin ticker last traded timestamp
       */
      last_traded_at?: string;

      /**
       * coin ticker exchange
       */
      market?: Ticker.Market;

      /**
       * coin ticker target currency
       */
      target?: string;

      /**
       * coin ticker target currency coin ID
       */
      target_coin_id?: string;

      /**
       * coin ticker timestamp
       */
      timestamp?: string;

      /**
       * coin ticker token info url
       */
      token_info_url?: string | null;

      /**
       * coin ticker trade url
       */
      trade_url?: string;

      /**
       * coin ticker trust score
       */
      trust_score?: string;

      /**
       * coin ticker volume
       */
      volume?: number;
    }

    export namespace Ticker {
      /**
       * coin ticker converted last price
       */
      export interface ConvertedLast {
        btc?: number;

        eth?: number;

        usd?: number;
      }

      /**
       * coin ticker converted volume
       */
      export interface ConvertedVolume {
        btc?: number;

        eth?: number;

        usd?: number;
      }

      /**
       * coin ticker exchange
       */
      export interface Market {
        /**
         * exchange trading incentive
         */
        has_trading_incentive: boolean;

        /**
         * exchange identifier
         */
        identifier: string;

        /**
         * exchange name
         */
        name: string;

        /**
         * exchange image url
         */
        logo?: string;
      }
    }
  }
}

export type ExchangeGetListResponse = Array<ExchangeGetListResponse.ExchangeGetListResponseItem>;

export namespace ExchangeGetListResponse {
  export interface ExchangeGetListResponseItem {
    /**
     * exchange ID
     */
    id: string;

    /**
     * exchange name
     */
    name: string;
  }
}

export interface ExchangeGetParams {
  /**
   * page through results, default: 1
   */
  page?: number;

  /**
   * total results per page, default: 100 Valid values: 1...250
   */
  per_page?: number;
}

export interface ExchangeGetIDParams {
  /**
   * set to `symbol` to display DEX pair base and target as symbols, default:
   * `contract_address`
   */
  dex_pair_format?: 'contract_address' | 'symbol';
}

export interface ExchangeGetListParams {
  /**
   * filter by status of exchanges, default: active
   */
  status?: 'active' | 'inactive';
}

Exchanges.Tickers = Tickers;
Exchanges.VolumeChart = VolumeChart;

export declare namespace Exchanges {
  export {
    type ExchangeGetResponse as ExchangeGetResponse,
    type ExchangeGetIDResponse as ExchangeGetIDResponse,
    type ExchangeGetListResponse as ExchangeGetListResponse,
    type ExchangeGetParams as ExchangeGetParams,
    type ExchangeGetIDParams as ExchangeGetIDParams,
    type ExchangeGetListParams as ExchangeGetListParams,
  };

  export {
    Tickers as Tickers,
    type TickerGetResponse as TickerGetResponse,
    type TickerGetParams as TickerGetParams,
  };

  export {
    VolumeChart as VolumeChart,
    type VolumeChartGetResponse as VolumeChartGetResponse,
    type VolumeChartGetRangeResponse as VolumeChartGetRangeResponse,
    type VolumeChartGetParams as VolumeChartGetParams,
    type VolumeChartGetRangeParams as VolumeChartGetRangeParams,
  };
}
