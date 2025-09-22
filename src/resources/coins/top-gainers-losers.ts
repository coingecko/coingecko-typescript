// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class TopGainersLosers extends APIResource {
  /**
   * This endpoint allows you to **query the top 30 coins with largest price gain and
   * loss by a specific time duration**
   *
   * @example
   * ```ts
   * const topGainersLoser =
   *   await client.coins.topGainersLosers.get({
   *     vs_currency: 'usd',
   *   });
   * ```
   */
  get(query: TopGainersLoserGetParams, options?: RequestOptions): APIPromise<TopGainersLoserGetResponse> {
    return this._client.get('/coins/top_gainers_losers', { query, ...options });
  }
}

export interface TopGainersLoserGetResponse {
  top_gainers?: Array<TopGainersLoserGetResponse.TopGainer>;

  top_losers?: Array<TopGainersLoserGetResponse.TopLoser>;
}

export namespace TopGainersLoserGetResponse {
  export interface TopGainer {
    /**
     * coin ID
     */
    id?: string;

    /**
     * coin image url
     */
    image?: string;

    /**
     * coin rank by market cap
     */
    market_cap_rank?: number;

    /**
     * coin name
     */
    name?: string;

    /**
     * coin symbol
     */
    symbol?: string;

    /**
     * coin price in USD
     */
    usd?: number;

    /**
     * coin 14 day change percentage in USD
     */
    usd_14d_change?: number | null;

    /**
     * coin 1hr change percentage in USD
     */
    usd_1h_change?: number | null;

    /**
     * coin 1 year change percentage in USD
     */
    usd_1y_change?: number | null;

    /**
     * coin 200 day change percentage in USD
     */
    usd_200d_change?: number | null;

    /**
     * coin 24hr change percentage in USD
     */
    usd_24h_change?: number | null;

    /**
     * coin 24hr volume in USD
     */
    usd_24h_vol?: number;

    /**
     * coin 30 day change percentage in USD
     */
    usd_30d_change?: number | null;

    /**
     * coin 7 day change percentage in USD
     */
    usd_7d_change?: number | null;
  }

  export interface TopLoser {
    /**
     * coin ID
     */
    id?: string;

    /**
     * coin image url
     */
    image?: string;

    /**
     * coin rank by market cap
     */
    market_cap_rank?: number;

    /**
     * coin name
     */
    name?: string;

    /**
     * coin symbol
     */
    symbol?: string;

    /**
     * coin price in USD
     */
    usd?: number;

    /**
     * coin 14 day change percentage in USD
     */
    usd_14d_change?: number | null;

    /**
     * coin 1hr change percentage in USD
     */
    usd_1h_change?: number | null;

    /**
     * coin 1 year change percentage in USD
     */
    usd_1y_change?: number | null;

    /**
     * coin 200 day change percentage in USD
     */
    usd_200d_change?: number | null;

    /**
     * coin 24hr change percentage in USD
     */
    usd_24h_change?: number | null;

    /**
     * coin 24hr volume in USD
     */
    usd_24h_vol?: number;

    /**
     * coin 30 day change percentage in USD
     */
    usd_30d_change?: number | null;

    /**
     * coin 7 day change percentage in USD
     */
    usd_7d_change?: number | null;
  }
}

export interface TopGainersLoserGetParams {
  /**
   * target currency of coins \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;

  /**
   * filter result by time range Default value: `24h`
   */
  duration?: '1h' | '24h' | '7d' | '14d' | '30d' | '60d' | '1y';

  /**
   * include price change percentage timeframe, comma-separated if query more than 1
   * price change percentage timeframe Valid values: 1h, 24h, 7d, 14d, 30d, 200d, 1y
   */
  price_change_percentage?: string;

  /**
   * filter result by market cap ranking (top 300 to 1000) or all coins (including
   * coins that do not have market cap) Default value: `1000`
   */
  top_coins?: '300' | '500' | '1000' | 'all';
}

export declare namespace TopGainersLosers {
  export {
    type TopGainersLoserGetResponse as TopGainersLoserGetResponse,
    type TopGainersLoserGetParams as TopGainersLoserGetParams,
  };
}
