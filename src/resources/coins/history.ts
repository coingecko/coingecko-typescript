// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class History extends APIResource {
  /**
   * To query the historical data (price, market cap, 24hrs volume, etc.) at a given
   * date for a coin based on a particular coin ID
   */
  get(id: string, query: HistoryGetParams, options?: RequestOptions): APIPromise<HistoryGetResponse> {
    return this._client.get(path`/coins/${id}/history`, { query, ...options });
  }
}

export interface HistoryGetResponse {
  /**
   * Coin ID
   */
  id: string;

  /**
   * Community engagement data
   */
  community_data: HistoryGetResponse.CommunityData;

  /**
   * Developer activity data
   */
  developer_data: HistoryGetResponse.DeveloperData;

  /**
   * Coin image URLs
   */
  image: HistoryGetResponse.Image;

  /**
   * Market data at the given date
   */
  market_data: HistoryGetResponse.MarketData;

  /**
   * Coin name
   */
  name: string;

  /**
   * Public interest statistics
   */
  public_interest_stats: HistoryGetResponse.PublicInterestStats;

  /**
   * Coin symbol
   */
  symbol: string;

  /**
   * Localized coin names keyed by locale code
   */
  localization?: { [key: string]: string };
}

export namespace HistoryGetResponse {
  /**
   * Community engagement data
   */
  export interface CommunityData {
    /**
     * Number of Facebook likes
     */
    facebook_likes?: number | null;

    /**
     * Active Reddit accounts in 48 hours
     */
    reddit_accounts_active_48h?: number;

    /**
     * Average Reddit comments in 48 hours
     */
    reddit_average_comments_48h?: number;

    /**
     * Average Reddit posts in 48 hours
     */
    reddit_average_posts_48h?: number;

    /**
     * Number of Reddit subscribers
     */
    reddit_subscribers?: number | null;
  }

  /**
   * Developer activity data
   */
  export interface DeveloperData {
    /**
     * Closed issues
     */
    closed_issues?: number | null;

    /**
     * Code additions and deletions in the last 4 weeks
     */
    code_additions_deletions_4_weeks?: DeveloperData.CodeAdditionsDeletions4Weeks;

    /**
     * Commit count in the last 4 weeks
     */
    commit_count_4_weeks?: number | null;

    /**
     * Repository forks
     */
    forks?: number | null;

    /**
     * Pull request contributors
     */
    pull_request_contributors?: number | null;

    /**
     * Pull requests merged
     */
    pull_requests_merged?: number | null;

    /**
     * Repository stars
     */
    stars?: number | null;

    /**
     * Repository subscribers
     */
    subscribers?: number | null;

    /**
     * Total issues
     */
    total_issues?: number | null;
  }

  export namespace DeveloperData {
    /**
     * Code additions and deletions in the last 4 weeks
     */
    export interface CodeAdditionsDeletions4Weeks {
      /**
       * Lines added
       */
      additions?: number | null;

      /**
       * Lines deleted
       */
      deletions?: number | null;
    }
  }

  /**
   * Coin image URLs
   */
  export interface Image {
    /**
     * Small image URL
     */
    small?: string;

    /**
     * Thumbnail image URL
     */
    thumb?: string;
  }

  /**
   * Market data at the given date
   */
  export interface MarketData {
    /**
     * Current price keyed by currency
     */
    current_price?: { [key: string]: number };

    /**
     * Market capitalization keyed by currency
     */
    market_cap?: { [key: string]: number };

    /**
     * Total trading volume keyed by currency
     */
    total_volume?: { [key: string]: number };
  }

  /**
   * Public interest statistics
   */
  export interface PublicInterestStats {
    /**
     * Alexa rank
     */
    alexa_rank?: number | null;

    /**
     * Bing search matches
     */
    bing_matches?: number | null;
  }
}

export interface HistoryGetParams {
  /**
   * The date of data snapshot. Format: `YYYY-MM-DD`
   */
  date: string;

  /**
   * Include all the localized languages in response. Default: true
   */
  localization?: boolean;
}

export declare namespace History {
  export { type HistoryGetResponse as HistoryGetResponse, type HistoryGetParams as HistoryGetParams };
}
