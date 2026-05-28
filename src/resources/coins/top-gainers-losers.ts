// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class TopGainersLosers extends APIResource {
  /**
   * To query the top 30 coins with largest price gain and loss by a specific time
   * duration
   */
  get(query: TopGainersLoserGetParams, options?: RequestOptions): APIPromise<TopGainersLoserGetResponse> {
    return this._client.get('/coins/top_gainers_losers', { query, ...options });
  }
}

export interface TopGainersLosersItem {
  /**
   * Coin ID
   */
  id: string;

  /**
   * Coin image URL
   */
  image: string;

  /**
   * Coin market cap rank
   */
  market_cap_rank: number | null;

  /**
   * Coin name
   */
  name: string;

  /**
   * Coin symbol
   */
  symbol: string;

  /**
   * Coin price in the target currency
   */
  usd: number;

  /**
   * 24-hour price change percentage
   */
  usd_24h_change: number | null;

  /**
   * 24-hour trading volume in the target currency
   */
  usd_24h_vol: number;

  /**
   * 14-day price change percentage
   */
  usd_14d_change?: number | null;

  /**
   * 1-hour price change percentage
   */
  usd_1h_change?: number | null;

  /**
   * 1-year price change percentage
   */
  usd_1y_change?: number | null;

  /**
   * 200-day price change percentage
   */
  usd_200d_change?: number | null;

  /**
   * 30-day price change percentage
   */
  usd_30d_change?: number | null;

  /**
   * 60-day price change percentage
   */
  usd_60d_change?: number | null;

  /**
   * 7-day price change percentage
   */
  usd_7d_change?: number | null;
}

export interface TopGainersLoserGetResponse {
  top_gainers: Array<TopGainersLosersItem>;

  top_losers: Array<TopGainersLosersItem>;
}

export interface TopGainersLoserGetParams {
  /**
   * Target currency of coins. \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
   */
  vs_currency: string;

  /**
   * Filter result by time range. Default: `24h`
   */
  duration?: '1h' | '24h' | '7d' | '14d' | '30d' | '60d' | '1y';

  /**
   * Include price change percentage timeframe, comma-separated if querying more than
   * 1 timeframe. Valid values: `1h`, `24h`, `7d`, `14d`, `30d`, `60d`, `200d`, `1y`
   */
  price_change_percentage?: string;

  /**
   * Filter result by market cap ranking (top 300 to 1000) or all coins (including
   * coins that do not have market cap). Default: `1000`
   */
  top_coins?: '300' | '500' | '1000' | 'all';
}

export declare namespace TopGainersLosers {
  export {
    type TopGainersLosersItem as TopGainersLosersItem,
    type TopGainersLoserGetResponse as TopGainersLoserGetResponse,
    type TopGainersLoserGetParams as TopGainersLoserGetParams,
  };
}
