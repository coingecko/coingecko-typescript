// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class History extends APIResource {
  /**
   * This endpoint allows you to **query the historical data (price, market cap,
   * 24hrs volume, ...) at a given date for a coin based on a particular coin ID**
   *
   * @example
   * ```ts
   * const history = await client.coins.history.get('bitcoin', {
   *   date: '30-12-2017',
   * });
   * ```
   */
  get(id: string, query: HistoryGetParams, options?: RequestOptions): APIPromise<HistoryGetResponse> {
    return this._client.get(path`/coins/${id}/history`, { query, ...options });
  }
}

export interface HistoryGetResponse {
  /**
   * coin ID
   */
  id?: string;

  /**
   * coin community data
   */
  community_data?: HistoryGetResponse.CommunityData;

  /**
   * coin developer data
   */
  developer_data?: HistoryGetResponse.DeveloperData;

  /**
   * coin image url
   */
  image?: HistoryGetResponse.Image;

  /**
   * coin localization
   */
  localization?: { [key: string]: string };

  /**
   * coin market data
   */
  market_data?: HistoryGetResponse.MarketData;

  /**
   * coin name
   */
  name?: string;

  /**
   * coin public interest stats
   */
  public_interest_stats?: HistoryGetResponse.PublicInterestStats;

  /**
   * coin symbol
   */
  symbol?: string;
}

export namespace HistoryGetResponse {
  /**
   * coin community data
   */
  export interface CommunityData {
    /**
     * coin facebook likes
     */
    facebook_likes?: number;

    /**
     * coin reddit accounts active 48h
     */
    reddit_accounts_active_48h?: number;

    /**
     * coin reddit average comments 48h
     */
    reddit_average_comments_48h?: number;

    /**
     * coin reddit average posts 48h
     */
    reddit_average_posts_48h?: number;

    /**
     * coin reddit subscribers
     */
    reddit_subscribers?: number;
  }

  /**
   * coin developer data
   */
  export interface DeveloperData {
    /**
     * coin repository closed issues
     */
    closed_issues?: number;

    /**
     * coin code additions deletions 4 weeks
     */
    code_additions_deletions_4_weeks?: DeveloperData.CodeAdditionsDeletions4Weeks;

    /**
     * coin commit count 4 weeks
     */
    commit_count_4_weeks?: number;

    /**
     * coin repository forks
     */
    forks?: number;

    /**
     * coin repository pull request contributors
     */
    pull_request_contributors?: number;

    /**
     * coin repository pull requests merged
     */
    pull_requests_merged?: number;

    /**
     * coin repository stars
     */
    stars?: number;

    /**
     * coin repository subscribers
     */
    subscribers?: number;

    /**
     * coin repository total issues
     */
    total_issues?: number;
  }

  export namespace DeveloperData {
    /**
     * coin code additions deletions 4 weeks
     */
    export interface CodeAdditionsDeletions4Weeks {
      additions?: number;

      deletions?: number;
    }
  }

  /**
   * coin image url
   */
  export interface Image {
    small?: string;

    thumb?: string;
  }

  /**
   * coin market data
   */
  export interface MarketData {
    /**
     * coin current price
     */
    current_price?: MarketData.CurrentPrice;

    /**
     * coin market cap
     */
    market_cap?: MarketData.MarketCap;

    /**
     * coin total volume
     */
    total_volume?: MarketData.TotalVolume;
  }

  export namespace MarketData {
    /**
     * coin current price
     */
    export interface CurrentPrice {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin market cap
     */
    export interface MarketCap {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin total volume
     */
    export interface TotalVolume {
      btc?: number;

      eur?: number;

      usd?: number;
    }
  }

  /**
   * coin public interest stats
   */
  export interface PublicInterestStats {
    /**
     * coin alexa rank
     */
    alexa_rank?: number;

    /**
     * coin bing matches
     */
    bing_matches?: number;
  }
}

export interface HistoryGetParams {
  /**
   * the date of data snapshot Format: `dd-mm-yyyy`
   */
  date: string;

  /**
   * include all the localized languages in response, default: true
   */
  localization?: boolean;
}

export declare namespace History {
  export { type HistoryGetResponse as HistoryGetResponse, type HistoryGetParams as HistoryGetParams };
}
