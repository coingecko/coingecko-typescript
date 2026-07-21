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
   * To query all the supported exchanges with exchanges' data (ID, name, country,
   * etc.) that have active trading volumes on CoinGecko
   */
  get(
    query: ExchangeGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExchangeGetResponse> {
    return this._client.get('/exchanges', { query, ...options });
  }

  /**
   * To query all the supported exchanges with ID and name
   */
  getList(
    query: ExchangeGetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExchangeGetListResponse> {
    return this._client.get('/exchanges/list', { query, ...options });
  }

  /**
   * To query exchange's data (name, year established, country, etc.), exchange
   * volume in BTC and top 100 tickers based on exchange's ID
   */
  getID(
    id: string,
    query: ExchangeGetIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ExchangeGetIDResponse> {
    return this._client.get(path`/exchanges/${id}`, { query, ...options });
  }
}

export type ExchangeGetResponse = Array<ExchangeGetResponse.ExchangeGetResponseItem>;

export namespace ExchangeGetResponse {
  export interface ExchangeGetResponseItem {
    /**
     * Exchange ID
     */
    id: string;

    /**
     * Country where the exchange is based
     */
    country: string | null;

    /**
     * Exchange description
     */
    description: string;

    /**
     * Whether the exchange has trading incentive
     */
    has_trading_incentive: boolean;

    /**
     * Exchange logo URL
     */
    image: string;

    /**
     * Exchange name
     */
    name: string;

    /**
     * Exchange 24h trading volume in BTC
     */
    trade_volume_24h_btc: number;

    /**
     * Exchange trust score
     */
    trust_score: number | null;

    /**
     * Exchange trust score rank
     */
    trust_score_rank: number | null;

    /**
     * Exchange website URL
     */
    url: string;

    /**
     * Year the exchange was established
     */
    year_established: number | null;
  }
}

export interface ExchangeGetIDResponse {
  /**
   * Alert notice
   */
  alert_notice: string;

  /**
   * Whether the exchange is centralized
   */
  centralized: boolean;

  /**
   * Number of coins listed
   */
  coins: number;

  /**
   * Country where the exchange is based
   */
  country: string | null;

  /**
   * Exchange description
   */
  description: string;

  /**
   * Facebook URL
   */
  facebook_url: string;

  /**
   * Whether the exchange has trading incentive
   */
  has_trading_incentive: boolean;

  /**
   * Exchange logo URL
   */
  image: string;

  /**
   * Exchange name
   */
  name: string;

  /**
   * Other URL 1
   */
  other_url_1: string;

  /**
   * Other URL 2
   */
  other_url_2: string;

  /**
   * Number of trading pairs
   */
  pairs: number;

  /**
   * Public notice
   */
  public_notice: string;

  /**
   * Reddit URL
   */
  reddit_url: string;

  /**
   * Slack URL
   */
  slack_url: string;

  /**
   * Status updates
   */
  status_updates: Array<ExchangeGetIDResponse.StatusUpdate>;

  /**
   * Telegram URL
   */
  telegram_url: string;

  /**
   * Exchange tickers
   */
  tickers: Array<ExchangeGetIDResponse.Ticker>;

  /**
   * Exchange 24h trading volume in BTC
   */
  trade_volume_24h_btc: number;

  /**
   * Exchange trust score
   */
  trust_score: number | null;

  /**
   * Exchange trust score rank
   */
  trust_score_rank: number | null;

  /**
   * Twitter handle
   */
  twitter_handle: string;

  /**
   * Exchange website URL
   */
  url: string;

  /**
   * Year the exchange was established
   */
  year_established: number | null;
}

export namespace ExchangeGetIDResponse {
  export interface StatusUpdate {
    /**
     * Status update category
     */
    category?: string;

    /**
     * Status update creation time
     */
    created_at?: string;

    /**
     * Status update description
     */
    description?: string;

    /**
     * Whether status update is pinned
     */
    pin?: boolean;

    /**
     * Project information
     */
    project?: StatusUpdate.Project;

    /**
     * Status update user
     */
    user?: string;

    /**
     * Status update user title
     */
    user_title?: string;
  }

  export namespace StatusUpdate {
    /**
     * Project information
     */
    export interface Project {
      /**
       * Project ID
       */
      id?: string;

      /**
       * Project image URLs
       */
      image?: Project.Image;

      /**
       * Project name
       */
      name?: string;

      /**
       * Project type
       */
      type?: string;
    }

    export namespace Project {
      /**
       * Project image URLs
       */
      export interface Image {
        large?: string;

        small?: string;

        thumb?: string;
      }
    }
  }

  export interface Ticker {
    /**
     * Ticker base currency
     */
    base?: string;

    /**
     * Bid-ask spread percentage
     */
    bid_ask_spread_percentage?: number;

    /**
     * Base currency coin ID
     */
    coin_id?: string;

    /**
     * Coin market cap in USD
     */
    coin_mcap_usd?: number;

    /**
     * Converted last price
     */
    converted_last?: Ticker.ConvertedLast;

    /**
     * Converted trading volume
     */
    converted_volume?: Ticker.ConvertedVolume;

    /**
     * Whether ticker is anomalous
     */
    is_anomaly?: boolean;

    /**
     * Whether ticker is stale
     */
    is_stale?: boolean;

    /**
     * Last price
     */
    last?: number;

    /**
     * Last fetch timestamp
     */
    last_fetch_at?: string;

    /**
     * Last traded timestamp
     */
    last_traded_at?: string;

    /**
     * Exchange information
     */
    market?: Ticker.Market;

    /**
     * Ticker target currency
     */
    target?: string;

    /**
     * Target currency coin ID
     */
    target_coin_id?: string;

    /**
     * Ticker timestamp
     */
    timestamp?: string;

    /**
     * Token info URL
     */
    token_info_url?: string | null;

    /**
     * Trade URL
     */
    trade_url?: string;

    /**
     * Trust score
     */
    trust_score?: string | null;

    /**
     * Trading volume
     */
    volume?: number;
  }

  export namespace Ticker {
    /**
     * Converted last price
     */
    export interface ConvertedLast {
      btc?: number;

      eth?: number;

      usd?: number;
    }

    /**
     * Converted trading volume
     */
    export interface ConvertedVolume {
      btc?: number;

      eth?: number;

      usd?: number;
    }

    /**
     * Exchange information
     */
    export interface Market {
      /**
       * Exchange trading incentive
       */
      has_trading_incentive?: boolean;

      /**
       * Exchange identifier
       */
      identifier?: string;

      /**
       * Exchange name
       */
      name?: string;
    }
  }
}

export type ExchangeGetListResponse = Array<ExchangeGetListResponse.ExchangeGetListResponseItem>;

export namespace ExchangeGetListResponse {
  export interface ExchangeGetListResponseItem {
    /**
     * Exchange ID
     */
    id: string;

    /**
     * Exchange name
     */
    name: string;
  }
}

export interface ExchangeGetParams {
  /**
   * Page through results. Default: 1
   */
  page?: number;

  /**
   * Total results per page. Default: 100. Valid values: 1...250
   */
  per_page?: number;
}

export interface ExchangeGetListParams {
  /**
   * Filter by status of exchanges. Default: `active`
   */
  status?: 'active' | 'inactive';
}

export interface ExchangeGetIDParams {
  /**
   * Set to `symbol` to display DEX pair base and target as symbols. Default:
   * `contract_address`
   */
  dex_pair_format?: 'contract_address' | 'symbol';
}

Exchanges.Tickers = Tickers;
Exchanges.VolumeChart = VolumeChart;

export declare namespace Exchanges {
  export {
    type ExchangeGetResponse as ExchangeGetResponse,
    type ExchangeGetIDResponse as ExchangeGetIDResponse,
    type ExchangeGetListResponse as ExchangeGetListResponse,
    type ExchangeGetParams as ExchangeGetParams,
    type ExchangeGetListParams as ExchangeGetListParams,
    type ExchangeGetIDParams as ExchangeGetIDParams,
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
