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
   * const topGainersLosers =
   *   await client.coins.topGainersLosers.get({
   *     vs_currency: 'usd',
   *   });
   * ```
   */
  get(query: TopGainersLoserGetParams, options?: RequestOptions): APIPromise<TopGainersLoserGetResponse> {
    return this._client.get('/coins/top_gainers_losers', { query, ...options });
  }
}

export type TopGainersLoserGetResponse = Array<TopGainersLoserGetResponse.TopGainersLoserGetResponseItem>;

export namespace TopGainersLoserGetResponse {
  export interface TopGainersLoserGetResponseItem {
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
     * coin 1 year change in USD
     */
    usd_1y_change?: number;

    /**
     * coin 24hr volume in USD
     */
    usd_24h_vol?: number;
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
