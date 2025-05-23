// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CoinsAPI from './coins';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Retrieve extends APIResource {
  /**
   * This endpoint allows you to **query all the metadata (image, websites, socials,
   * description, contract address, etc.) and market data (price, ATH, exchange
   * tickers, etc.) of a coin from the CoinGecko coin page based on a particular coin
   * ID**
   *
   * @example
   * ```ts
   * const coinsData = await client.coins.retrieve.byID(
   *   'bitcoin',
   * );
   * ```
   */
  byID(
    id: string,
    query: RetrieveByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CoinsAPI.CoinsData> {
    return this._client.get(path`/coins/${id}`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query the historical data (price, market cap,
   * 24hrs volume, ...) at a given date for a coin based on a particular coin ID**
   *
   * @example
   * ```ts
   * const response =
   *   await client.coins.retrieve.historicalDataByID(
   *     'bitcoin',
   *     { date: '30-12-2017' },
   *   );
   * ```
   */
  historicalDataByID(
    id: string,
    query: RetrieveHistoricalDataByIDParams,
    options?: RequestOptions,
  ): APIPromise<RetrieveHistoricalDataByIDResponse> {
    return this._client.get(path`/coins/${id}/history`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query the coin tickers on both centralized
   * exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID**
   *
   * @example
   * ```ts
   * const coinsTickers =
   *   await client.coins.retrieve.tickersByID('bitcoin');
   * ```
   */
  tickersByID(
    id: string,
    query: RetrieveTickersByIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CoinsAPI.CoinsTickers> {
    return this._client.get(path`/coins/${id}/tickers`, { query, ...options });
  }
}

export interface RetrieveHistoricalDataByIDResponse {
  /**
   * coin ID
   */
  id?: string;

  /**
   * coin community data
   */
  community_data?: RetrieveHistoricalDataByIDResponse.CommunityData;

  /**
   * coin developer data
   */
  developer_data?: RetrieveHistoricalDataByIDResponse.DeveloperData;

  /**
   * coin image url
   */
  image?: RetrieveHistoricalDataByIDResponse.Image;

  /**
   * coin localization
   */
  localization?: Record<string, string>;

  /**
   * coin market data
   */
  market_data?: RetrieveHistoricalDataByIDResponse.MarketData;

  /**
   * coin name
   */
  name?: string;

  /**
   * coin public interest stats
   */
  public_interest_stats?: RetrieveHistoricalDataByIDResponse.PublicInterestStats;

  /**
   * coin symbol
   */
  symbol?: string;
}

export namespace RetrieveHistoricalDataByIDResponse {
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

    /**
     * coin twitter followers
     */
    twitter_followers?: number;
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

export interface RetrieveByIDParams {
  /**
   * include community data, default: true
   */
  community_data?: boolean;

  /**
   * include developer data, default: true
   */
  developer_data?: boolean;

  /**
   * include all the localized languages in the response, default: true
   */
  localization?: boolean;

  /**
   * include market data, default: true
   */
  market_data?: boolean;

  /**
   * include sparkline 7 days data, default: false
   */
  sparkline?: boolean;

  /**
   * include tickers data, default: true
   */
  tickers?: boolean;
}

export interface RetrieveHistoricalDataByIDParams {
  /**
   * the date of data snapshot Format: `dd-mm-yyyy`
   */
  date: string;

  /**
   * include all the localized languages in response, default: true
   */
  localization?: boolean;
}

export interface RetrieveTickersByIDParams {
  /**
   * include 2% orderbook depth, ie. `cost_to_move_up_usd` and
   * `cost_to_move_down_usd` Default: false
   */
  depth?: boolean;

  /**
   * exchange ID \*refers to [`/exchanges/list`](/reference/exchanges-list).
   */
  exchange_ids?: string;

  /**
   * include exchange logo, default: false
   */
  include_exchange_logo?: boolean;

  /**
   * use this to sort the order of responses, default: trust_score_desc
   */
  order?: 'trust_score_desc' | 'trust_score_asc' | 'volume_desc' | 'volume_asc';

  /**
   * page through results
   */
  page?: number;
}

export declare namespace Retrieve {
  export {
    type RetrieveHistoricalDataByIDResponse as RetrieveHistoricalDataByIDResponse,
    type RetrieveByIDParams as RetrieveByIDParams,
    type RetrieveHistoricalDataByIDParams as RetrieveHistoricalDataByIDParams,
    type RetrieveTickersByIDParams as RetrieveTickersByIDParams,
  };
}
