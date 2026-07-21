// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarketChartAPI from './market-chart';
import {
  MarketChart,
  MarketChartGetParams,
  MarketChartGetRangeParams,
  MarketChartGetRangeResponse,
  MarketChartGetResponse,
} from './market-chart';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Contract extends APIResource {
  marketChart: MarketChartAPI.MarketChart = new MarketChartAPI.MarketChart(this._client);

  /**
   * To query all the metadata (image, websites, socials, description, contract
   * address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin
   * based on an asset platform and a particular token contract address
   */
  get(
    contractAddress: string,
    params: ContractGetParams,
    options?: RequestOptions,
  ): APIPromise<ContractGetResponse> {
    const { id } = params;
    return this._client.get(path`/coins/${id}/contract/${contractAddress}`, options);
  }
}

export interface ContractGetResponse {
  /**
   * Coin ID
   */
  id: string;

  /**
   * Additional notices
   */
  additional_notices: Array<string>;

  /**
   * Coin asset platform ID
   */
  asset_platform_id: string | null;

  /**
   * Blockchain block time in minutes
   */
  block_time_in_minutes: number;

  /**
   * Coin categories
   */
  categories: Array<string>;

  /**
   * Coin contract address
   */
  contract_address: string;

  /**
   * Country of origin
   */
  country_origin: string;

  /**
   * Coin description
   */
  description: { [key: string]: string };

  /**
   * Detailed coin asset platform and contract address
   */
  detail_platforms: { [key: string]: ContractGetResponse.DetailPlatforms };

  /**
   * Genesis date
   */
  genesis_date: string | null;

  /**
   * Whether detailed supply breakdown data is available via /coins/supply_breakdown
   */
  has_supply_breakdown: boolean;

  /**
   * Blockchain hashing algorithm
   */
  hashing_algorithm: string | null;

  /**
   * Coin image URL
   */
  image: ContractGetResponse.Image;

  /**
   * Last updated timestamp
   */
  last_updated: string;

  /**
   * Links
   */
  links: ContractGetResponse.Links;

  /**
   * Market cap rank
   */
  market_cap_rank: number | null;

  /**
   * Market cap rank including rehypothecated tokens
   */
  market_cap_rank_with_rehypothecated: number | null;

  /**
   * Coin name
   */
  name: string;

  /**
   * Coin asset platform and contract address
   */
  platforms: { [key: string]: string };

  /**
   * Preview listing coin
   */
  preview_listing: boolean;

  /**
   * Public notice
   */
  public_notice: string | null;

  /**
   * Sentiment votes down percentage
   */
  sentiment_votes_down_percentage: number | null;

  /**
   * Sentiment votes up percentage
   */
  sentiment_votes_up_percentage: number | null;

  /**
   * Status updates
   */
  status_updates: Array<ContractGetResponse.StatusUpdate>;

  /**
   * Coin symbol
   */
  symbol: string;

  /**
   * Number of users watching this coin in portfolio
   */
  watchlist_portfolio_users: number;

  /**
   * Coin web slug
   */
  web_slug: string;

  /**
   * Community data
   */
  community_data?: ContractGetResponse.CommunityData;

  /**
   * Developer data
   */
  developer_data?: ContractGetResponse.DeveloperData;

  /**
   * Coin name localization
   */
  localization?: { [key: string]: string };

  /**
   * Market data
   */
  market_data?: ContractGetResponse.MarketData;

  /**
   * Tickers
   */
  tickers?: Array<ContractGetResponse.Ticker>;
}

export namespace ContractGetResponse {
  export interface DetailPlatforms {
    /**
     * Token contract address
     */
    contract_address?: string;

    /**
     * Token decimal place
     */
    decimal_place?: number | null;

    /**
     * GeckoTerminal URL
     */
    geckoterminal_url?: string;
  }

  /**
   * Coin image URL
   */
  export interface Image {
    large?: string;

    small?: string;

    thumb?: string;
  }

  /**
   * Links
   */
  export interface Links {
    /**
     * Announcement URL
     */
    announcement_url?: Array<string>;

    /**
     * Bitcointalk thread identifier
     */
    bitcointalk_thread_identifier?: number | null;

    /**
     * Block explorer URL
     */
    blockchain_site?: Array<string>;

    /**
     * Chat URL
     */
    chat_url?: Array<string>;

    /**
     * Facebook username
     */
    facebook_username?: string;

    /**
     * Website URL
     */
    homepage?: Array<string>;

    /**
     * Official forum URL
     */
    official_forum_url?: Array<string>;

    /**
     * Repository URL
     */
    repos_url?: Links.ReposURL;

    /**
     * Snapshot URL
     */
    snapshot_url?: string | null;

    /**
     * Subreddit URL
     */
    subreddit_url?: string;

    /**
     * Telegram channel identifier
     */
    telegram_channel_identifier?: string;

    /**
     * Twitter handle
     */
    twitter_screen_name?: string;

    /**
     * Whitepaper URL
     */
    whitepaper?: string;
  }

  export namespace Links {
    /**
     * Repository URL
     */
    export interface ReposURL {
      /**
       * Bitbucket repository URL
       */
      bitbucket?: Array<string>;

      /**
       * GitHub repository URL
       */
      github?: Array<string>;
    }
  }

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
     * Status update user
     */
    user?: string;

    /**
     * Status update user title
     */
    user_title?: string;
  }

  /**
   * Community data
   */
  export interface CommunityData {
    /**
     * Facebook likes
     */
    facebook_likes?: number | null;

    /**
     * Reddit active accounts in 48 hours
     */
    reddit_accounts_active_48h?: number;

    /**
     * Reddit average comments in 48 hours
     */
    reddit_average_comments_48h?: number;

    /**
     * Reddit average posts in 48 hours
     */
    reddit_average_posts_48h?: number;

    /**
     * Reddit subscribers
     */
    reddit_subscribers?: number;

    /**
     * Telegram channel user count
     */
    telegram_channel_user_count?: number | null;
  }

  /**
   * Developer data
   */
  export interface DeveloperData {
    /**
     * Repository closed issues
     */
    closed_issues?: number;

    /**
     * Code additions and deletions in 4 weeks
     */
    code_additions_deletions_4_weeks?: DeveloperData.CodeAdditionsDeletions4Weeks;

    /**
     * Repository commit count in 4 weeks
     */
    commit_count_4_weeks?: number;

    /**
     * Repository forks
     */
    forks?: number;

    /**
     * Repository last 4 weeks commit activity series
     */
    last_4_weeks_commit_activity_series?: Array<number>;

    /**
     * Repository pull request contributors
     */
    pull_request_contributors?: number;

    /**
     * Repository pull requests merged
     */
    pull_requests_merged?: number;

    /**
     * Repository stars
     */
    stars?: number;

    /**
     * Repository subscribers
     */
    subscribers?: number;

    /**
     * Repository total issues
     */
    total_issues?: number;
  }

  export namespace DeveloperData {
    /**
     * Code additions and deletions in 4 weeks
     */
    export interface CodeAdditionsDeletions4Weeks {
      additions?: number;

      deletions?: number;
    }
  }

  /**
   * Market data
   */
  export interface MarketData {
    /**
     * All-time high in target currency
     */
    ath?: { [key: string]: number };

    /**
     * All-time high change percentage
     */
    ath_change_percentage?: { [key: string]: number };

    /**
     * All-time high date
     */
    ath_date?: { [key: string]: string };

    /**
     * All-time low in target currency
     */
    atl?: { [key: string]: number };

    /**
     * All-time low change percentage
     */
    atl_change_percentage?: { [key: string]: number };

    /**
     * All-time low date
     */
    atl_date?: { [key: string]: string };

    /**
     * Circulating supply
     */
    circulating_supply?: number;

    /**
     * Current price in target currency
     */
    current_price?: { [key: string]: number };

    /**
     * FDV to TVL ratio
     */
    fdv_to_tvl_ratio?: number | null;

    /**
     * Fully diluted valuation in target currency
     */
    fully_diluted_valuation?: { [key: string]: number };

    /**
     * 24h price high in target currency
     */
    high_24h?: { [key: string]: number };

    /**
     * Market data last updated timestamp
     */
    last_updated?: string;

    /**
     * 24h price low in target currency
     */
    low_24h?: { [key: string]: number };

    /**
     * Market cap in target currency
     */
    market_cap?: { [key: string]: number };

    /**
     * 24h market cap change in target currency
     */
    market_cap_change_24h?: number;

    /**
     * 24h market cap change in target currency
     */
    market_cap_change_24h_in_currency?: { [key: string]: number };

    /**
     * 24h market cap change percentage
     */
    market_cap_change_percentage_24h?: number;

    /**
     * 24h market cap change percentage per currency
     */
    market_cap_change_percentage_24h_in_currency?: { [key: string]: number };

    /**
     * Market cap to FDV ratio
     */
    market_cap_fdv_ratio?: number;

    /**
     * Market cap rank
     */
    market_cap_rank?: number | null;

    /**
     * Market cap rank including rehypothecated tokens
     */
    market_cap_rank_with_rehypothecated?: number | null;

    /**
     * Max supply
     */
    max_supply?: number | null;

    /**
     * Max supply infinite
     */
    max_supply_infinite?: boolean;

    /**
     * Market cap to TVL ratio
     */
    mcap_to_tvl_ratio?: number | null;

    /**
     * Tokens outstanding in the market
     */
    outstanding_supply?: number | null;

    /**
     * Outstanding token value in USD
     */
    outstanding_token_value_usd?: number | null;

    /**
     * 24h price change in target currency
     */
    price_change_24h?: number;

    /**
     * 24h price change in target currency
     */
    price_change_24h_in_currency?: { [key: string]: number };

    /**
     * 14d price change percentage
     */
    price_change_percentage_14d?: number;

    /**
     * 14d price change percentage per currency
     */
    price_change_percentage_14d_in_currency?: { [key: string]: number };

    /**
     * 1h price change percentage per currency
     */
    price_change_percentage_1h_in_currency?: { [key: string]: number };

    /**
     * 1y price change percentage
     */
    price_change_percentage_1y?: number;

    /**
     * 1y price change percentage per currency
     */
    price_change_percentage_1y_in_currency?: { [key: string]: number };

    /**
     * 200d price change percentage
     */
    price_change_percentage_200d?: number;

    /**
     * 200d price change percentage per currency
     */
    price_change_percentage_200d_in_currency?: { [key: string]: number };

    /**
     * 24h price change percentage
     */
    price_change_percentage_24h?: number;

    /**
     * 24h price change percentage per currency
     */
    price_change_percentage_24h_in_currency?: { [key: string]: number };

    /**
     * 30d price change percentage
     */
    price_change_percentage_30d?: number;

    /**
     * 30d price change percentage per currency
     */
    price_change_percentage_30d_in_currency?: { [key: string]: number };

    /**
     * 60d price change percentage
     */
    price_change_percentage_60d?: number;

    /**
     * 60d price change percentage per currency
     */
    price_change_percentage_60d_in_currency?: { [key: string]: number };

    /**
     * 7d price change percentage
     */
    price_change_percentage_7d?: number;

    /**
     * 7d price change percentage per currency
     */
    price_change_percentage_7d_in_currency?: { [key: string]: number };

    /**
     * Return on investment
     */
    roi?: MarketData.Roi | null;

    /**
     * Sparkline 7-day price data
     */
    sparkline_7d?: Array<number>;

    /**
     * Total supply
     */
    total_supply?: number;

    /**
     * Total value locked
     */
    total_value_locked?: number | null;

    /**
     * Total trading volume in target currency
     */
    total_volume?: { [key: string]: number };
  }

  export namespace MarketData {
    /**
     * Return on investment
     */
    export interface Roi {
      /**
       * ROI currency
       */
      currency?: string;

      /**
       * ROI percentage
       */
      percentage?: number;

      /**
       * ROI multiplier
       */
      times?: number;
    }
  }

  export interface Ticker {
    /**
     * Ticker base currency
     */
    base?: string;

    /**
     * Ticker bid-ask spread percentage
     */
    bid_ask_spread_percentage?: number;

    /**
     * Ticker base currency coin ID
     */
    coin_id?: string;

    /**
     * Market cap in USD
     */
    coin_mcap_usd?: number;

    /**
     * Ticker converted last price
     */
    converted_last?: Ticker.ConvertedLast;

    /**
     * Ticker converted volume
     */
    converted_volume?: Ticker.ConvertedVolume;

    /**
     * Ticker anomaly
     */
    is_anomaly?: boolean;

    /**
     * Ticker stale
     */
    is_stale?: boolean;

    /**
     * Ticker last price
     */
    last?: number;

    /**
     * Ticker last fetch timestamp
     */
    last_fetch_at?: string;

    /**
     * Ticker last traded timestamp
     */
    last_traded_at?: string;

    /**
     * Ticker exchange
     */
    market?: Ticker.Market;

    /**
     * Ticker target currency
     */
    target?: string;

    /**
     * Ticker target currency coin ID
     */
    target_coin_id?: string;

    /**
     * Ticker timestamp
     */
    timestamp?: string;

    /**
     * Ticker token info URL
     */
    token_info_url?: string | null;

    /**
     * Ticker trade URL
     */
    trade_url?: string;

    /**
     * Ticker trust score
     */
    trust_score?: string | null;

    /**
     * Ticker volume
     */
    volume?: number;
  }

  export namespace Ticker {
    /**
     * Ticker converted last price
     */
    export interface ConvertedLast {
      btc?: number;

      eth?: number;

      usd?: number;
    }

    /**
     * Ticker converted volume
     */
    export interface ConvertedVolume {
      btc?: number;

      eth?: number;

      usd?: number;
    }

    /**
     * Ticker exchange
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

export interface ContractGetParams {
  /**
   * Asset platform ID. \*refers to
   * [`/asset_platforms`](/reference/asset-platforms-list).
   */
  id: string;
}

Contract.MarketChart = MarketChart;

export declare namespace Contract {
  export { type ContractGetResponse as ContractGetResponse, type ContractGetParams as ContractGetParams };

  export {
    MarketChart as MarketChart,
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetRangeResponse as MarketChartGetRangeResponse,
    type MarketChartGetParams as MarketChartGetParams,
    type MarketChartGetRangeParams as MarketChartGetRangeParams,
  };
}
