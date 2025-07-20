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
   * This endpoint allows you to **query all the metadata (image, websites, socials,
   * description, contract address, etc.) and market data (price, ATH, exchange
   * tickers, etc.) of a coin from the CoinGecko coin page based on an asset platform
   * and a particular token contract address**
   *
   * @example
   * ```ts
   * const contract = await client.coins.contract.get(
   *   '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
   *   { id: 'ethereum' },
   * );
   * ```
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
   * coin ID
   */
  id?: string;

  /**
   * additional notices
   */
  additional_notices?: Array<string>;

  /**
   * coin asset platform ID
   */
  asset_platform_id?: string;

  /**
   * blockchain block time in minutes
   */
  block_time_in_minutes?: number;

  /**
   * coin categories
   */
  categories?: Array<string>;

  /**
   * coin community data
   */
  community_data?: ContractGetResponse.CommunityData;

  /**
   * coin country of origin
   */
  country_origin?: string;

  /**
   * coin description
   */
  description?: { [key: string]: string };

  /**
   * detailed coin asset platform and contract address
   */
  detail_platforms?: { [key: string]: ContractGetResponse.DetailPlatforms };

  /**
   * coin developer data
   */
  developer_data?: ContractGetResponse.DeveloperData;

  /**
   * coin genesis date
   */
  genesis_date?: string;

  /**
   * blockchain hashing algorithm
   */
  hashing_algorithm?: string;

  /**
   * coin image url
   */
  image?: ContractGetResponse.Image;

  /**
   * coin last updated timestamp
   */
  last_updated?: string;

  /**
   * links
   */
  links?: ContractGetResponse.Links;

  /**
   * coin name localization
   */
  localization?: { [key: string]: string };

  /**
   * coin rank by market cap
   */
  market_cap_rank?: number;

  /**
   * coin market data
   */
  market_data?: ContractGetResponse.MarketData;

  /**
   * coin name
   */
  name?: string;

  /**
   * coin asset platform and contract address
   */
  platforms?: { [key: string]: string };

  /**
   * preview listing coin
   */
  preview_listing?: boolean;

  /**
   * public notice
   */
  public_notice?: string;

  /**
   * coin sentiment votes down percentage
   */
  sentiment_votes_down_percentage?: number;

  /**
   * coin sentiment votes up percentage
   */
  sentiment_votes_up_percentage?: number;

  /**
   * coin status updates
   */
  status_updates?: Array<string>;

  /**
   * coin symbol
   */
  symbol?: string;

  /**
   * coin tickers
   */
  tickers?: Array<ContractGetResponse.Ticker>;

  /**
   * number of users watching this coin in portfolio
   */
  watchlist_portfolio_users?: number;

  /**
   * coin web slug
   */
  web_slug?: string;
}

export namespace ContractGetResponse {
  /**
   * coin community data
   */
  export interface CommunityData {
    /**
     * coin facebook likes
     */
    facebook_likes?: number;

    /**
     * coin reddit active accounts in 48 hours
     */
    reddit_accounts_active_48h?: number;

    /**
     * coin reddit average comments in 48 hours
     */
    reddit_average_comments_48h?: number;

    /**
     * coin reddit average posts in 48 hours
     */
    reddit_average_posts_48h?: number;

    /**
     * coin reddit subscribers
     */
    reddit_subscribers?: number;

    /**
     * coin telegram channel user count
     */
    telegram_channel_user_count?: number;
  }

  export interface DetailPlatforms {
    /**
     * contract address on the platform
     */
    contract_address?: string;

    /**
     * decimal places for the token
     */
    decimal_place?: number | null;
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
     * coin code additions and deletions in 4 weeks
     */
    code_additions_deletions_4_weeks?: DeveloperData.CodeAdditionsDeletions4Weeks;

    /**
     * coin repository commit count in 4 weeks
     */
    commit_count_4_weeks?: number;

    /**
     * coin repository forks
     */
    forks?: number;

    /**
     * coin repository last 4 weeks commit activity series
     */
    last_4_weeks_commit_activity_series?: Array<number>;

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
     * coin code additions and deletions in 4 weeks
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
    large?: string;

    small?: string;

    thumb?: string;
  }

  /**
   * links
   */
  export interface Links {
    /**
     * coin announcement url
     */
    announcement_url?: Array<string>;

    /**
     * coin bitcointalk thread identifier
     */
    bitcointalk_thread_identifier?: string;

    /**
     * coin block explorer url
     */
    blockchain_site?: Array<string>;

    /**
     * coin chat url
     */
    chat_url?: Array<string>;

    /**
     * coin facebook username
     */
    facebook_username?: string;

    /**
     * coin website url
     */
    homepage?: Array<string>;

    /**
     * coin official forum url
     */
    official_forum_url?: Array<string>;

    /**
     * coin repository url
     */
    repos_url?: Links.ReposURL;

    /**
     * coin snapshot url
     */
    snapshot_url?: string;

    /**
     * coin subreddit url
     */
    subreddit_url?: string;

    /**
     * coin telegram channel identifier
     */
    telegram_channel_identifier?: string;

    /**
     * coin twitter handle
     */
    twitter_screen_name?: string;

    /**
     * coin whitepaper url
     */
    whitepaper?: Array<string>;
  }

  export namespace Links {
    /**
     * coin repository url
     */
    export interface ReposURL {
      /**
       * coin bitbucket repository url
       */
      bitbucket?: Array<string>;

      /**
       * coin github repository url
       */
      github?: Array<string>;
    }
  }

  /**
   * coin market data
   */
  export interface MarketData {
    /**
     * coin all time high (ATH) in currency
     */
    ath?: MarketData.Ath;

    /**
     * coin all time high (ATH) change in percentage
     */
    ath_change_percentage?: MarketData.AthChangePercentage;

    /**
     * coin all time high (ATH) date
     */
    ath_date?: MarketData.AthDate;

    /**
     * coin all time low (atl) in currency
     */
    atl?: MarketData.Atl;

    /**
     * coin all time low (atl) change in percentage
     */
    atl_change_percentage?: MarketData.AtlChangePercentage;

    /**
     * coin all time low (atl) date
     */
    atl_date?: MarketData.AtlDate;

    /**
     * coin circulating supply
     */
    circulating_supply?: number;

    /**
     * coin current price in currency
     */
    current_price?: MarketData.CurrentPrice;

    /**
     * fully diluted valuation to total value locked ratio
     */
    fdv_to_tvl_ratio?: number;

    /**
     * coin fully diluted valuation (fdv) in currency
     */
    fully_diluted_valuation?: MarketData.FullyDilutedValuation;

    /**
     * coin 24hr price high in currency
     */
    high_24h?: MarketData.High24h;

    /**
     * coin market data last updated timestamp
     */
    last_updated?: string;

    /**
     * coin 24hr price low in currency
     */
    low_24h?: MarketData.Low24h;

    /**
     * coin market cap in currency
     */
    market_cap?: MarketData.MarketCap;

    /**
     * coin 24hr market cap change in currency
     */
    market_cap_change_24h?: number;

    /**
     * coin 24hr market cap change in currency
     */
    market_cap_change_24h_in_currency?: MarketData.MarketCapChange24hInCurrency;

    /**
     * coin 24hr market cap change in percentage
     */
    market_cap_change_percentage_24h?: number;

    /**
     * coin 24hr market cap change in percentage
     */
    market_cap_change_percentage_24h_in_currency?: MarketData.MarketCapChangePercentage24hInCurrency;

    /**
     * market cap to fully diluted valuation ratio
     */
    market_cap_fdv_ratio?: number;

    /**
     * coin rank by market cap
     */
    market_cap_rank?: number;

    /**
     * coin max supply
     */
    max_supply?: number;

    /**
     * market cap to total value locked ratio
     */
    mcap_to_tvl_ratio?: number;

    /**
     * coin 24hr price change in currency
     */
    price_change_24h?: number;

    /**
     * coin 14d price change in percentage
     */
    price_change_percentage_14d?: number;

    /**
     * coin 14d price change in currency
     */
    price_change_percentage_14d_in_currency?: MarketData.PriceChangePercentage14dInCurrency;

    /**
     * coin 1h price change in currency
     */
    price_change_percentage_1h_in_currency?: MarketData.PriceChangePercentage1hInCurrency;

    /**
     * coin 1y price change in percentage
     */
    price_change_percentage_1y?: number;

    /**
     * coin 1y price change in currency
     */
    price_change_percentage_1y_in_currency?: MarketData.PriceChangePercentage1yInCurrency;

    /**
     * coin 200d price change in percentage
     */
    price_change_percentage_200d?: number;

    /**
     * coin 200d price change in currency
     */
    price_change_percentage_200d_in_currency?: MarketData.PriceChangePercentage200dInCurrency;

    /**
     * coin 24hr price change in percentage
     */
    price_change_percentage_24h?: number;

    /**
     * coin 24hr price change in currency
     */
    price_change_percentage_24h_in_currency?: MarketData.PriceChangePercentage24hInCurrency;

    /**
     * coin 30d price change in percentage
     */
    price_change_percentage_30d?: number;

    /**
     * coin 30d price change in currency
     */
    price_change_percentage_30d_in_currency?: MarketData.PriceChangePercentage30dInCurrency;

    /**
     * coin 60d price change in percentage
     */
    price_change_percentage_60d?: number;

    /**
     * coin 60d price change in currency
     */
    price_change_percentage_60d_in_currency?: MarketData.PriceChangePercentage60dInCurrency;

    /**
     * coin 7d price change in percentage
     */
    price_change_percentage_7d?: number;

    /**
     * coin 7d price change in currency
     */
    price_change_percentage_7d_in_currency?: MarketData.PriceChangePercentage7dInCurrency;

    /**
     * coin return on investment
     */
    roi?: number;

    /**
     * coin total supply
     */
    total_supply?: number;

    /**
     * total value locked
     */
    total_value_locked?: number;

    /**
     * coin total trading volume in currency
     */
    total_volume?: MarketData.TotalVolume;
  }

  export namespace MarketData {
    /**
     * coin all time high (ATH) in currency
     */
    export interface Ath {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin all time high (ATH) change in percentage
     */
    export interface AthChangePercentage {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin all time high (ATH) date
     */
    export interface AthDate {
      btc?: string;

      eur?: string;

      usd?: string;
    }

    /**
     * coin all time low (atl) in currency
     */
    export interface Atl {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin all time low (atl) change in percentage
     */
    export interface AtlChangePercentage {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin all time low (atl) date
     */
    export interface AtlDate {
      btc?: string;

      eur?: string;

      usd?: string;
    }

    /**
     * coin current price in currency
     */
    export interface CurrentPrice {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin fully diluted valuation (fdv) in currency
     */
    export interface FullyDilutedValuation {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 24hr price high in currency
     */
    export interface High24h {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 24hr price low in currency
     */
    export interface Low24h {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin market cap in currency
     */
    export interface MarketCap {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 24hr market cap change in currency
     */
    export interface MarketCapChange24hInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 24hr market cap change in percentage
     */
    export interface MarketCapChangePercentage24hInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 14d price change in currency
     */
    export interface PriceChangePercentage14dInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 1h price change in currency
     */
    export interface PriceChangePercentage1hInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 1y price change in currency
     */
    export interface PriceChangePercentage1yInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 200d price change in currency
     */
    export interface PriceChangePercentage200dInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 24hr price change in currency
     */
    export interface PriceChangePercentage24hInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 30d price change in currency
     */
    export interface PriceChangePercentage30dInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 60d price change in currency
     */
    export interface PriceChangePercentage60dInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin 7d price change in currency
     */
    export interface PriceChangePercentage7dInCurrency {
      btc?: number;

      eur?: number;

      usd?: number;
    }

    /**
     * coin total trading volume in currency
     */
    export interface TotalVolume {
      btc?: number;

      eur?: number;

      usd?: number;
    }
  }

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
    token_info_url?: string;

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
       * coin ticker exchange trading incentive
       */
      has_trading_incentive?: boolean;

      /**
       * coin ticker exchange identifier
       */
      identifier?: string;

      /**
       * coin ticker exchange name
       */
      name?: string;
    }
  }
}

export interface ContractGetParams {
  /**
   * asset platform ID \*refers to
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
