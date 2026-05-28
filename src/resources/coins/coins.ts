// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CategoriesAPI from './categories';
import { Categories, CategoryGetListResponse, CategoryGetParams, CategoryGetResponse } from './categories';
import * as CirculatingSupplyChartAPI from './circulating-supply-chart';
import {
  CirculatingSupplyChart,
  CirculatingSupplyChartGetParams,
  CirculatingSupplyChartGetRangeParams,
  CirculatingSupplyChartGetRangeResponse,
  CirculatingSupplyChartGetResponse,
} from './circulating-supply-chart';
import * as HistoryAPI from './history';
import { History, HistoryGetParams, HistoryGetResponse } from './history';
import * as ListAPI from './list';
import { List, ListGetNewResponse, ListGetParams, ListGetResponse } from './list';
import * as MarketChartAPI from './market-chart';
import {
  MarketChart,
  MarketChartGetParams,
  MarketChartGetRangeParams,
  MarketChartGetRangeResponse,
  MarketChartGetResponse,
} from './market-chart';
import * as MarketsAPI from './markets';
import { MarketGetParams, MarketGetResponse, Markets } from './markets';
import * as OhlcAPI from './ohlc';
import { Ohlc, OhlcGetParams, OhlcGetRangeParams, OhlcGetRangeResponse, OhlcGetResponse } from './ohlc';
import * as TickersAPI from './tickers';
import { TickerGetParams, TickerGetResponse, Tickers } from './tickers';
import * as TopGainersLosersAPI from './top-gainers-losers';
import {
  TopGainersLoserGetParams,
  TopGainersLoserGetResponse,
  TopGainersLosers,
  TopGainersLosersItem,
} from './top-gainers-losers';
import * as TotalSupplyChartAPI from './total-supply-chart';
import {
  TotalSupplyChart,
  TotalSupplyChartGetParams,
  TotalSupplyChartGetRangeParams,
  TotalSupplyChartGetRangeResponse,
  TotalSupplyChartGetResponse,
} from './total-supply-chart';
import * as ContractAPI from './contract/contract';
import { Contract, ContractGetParams, ContractGetResponse } from './contract/contract';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Coins extends APIResource {
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  circulatingSupplyChart: CirculatingSupplyChartAPI.CirculatingSupplyChart =
    new CirculatingSupplyChartAPI.CirculatingSupplyChart(this._client);
  contract: ContractAPI.Contract = new ContractAPI.Contract(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  list: ListAPI.List = new ListAPI.List(this._client);
  marketChart: MarketChartAPI.MarketChart = new MarketChartAPI.MarketChart(this._client);
  markets: MarketsAPI.Markets = new MarketsAPI.Markets(this._client);
  ohlc: OhlcAPI.Ohlc = new OhlcAPI.Ohlc(this._client);
  tickers: TickersAPI.Tickers = new TickersAPI.Tickers(this._client);
  topGainersLosers: TopGainersLosersAPI.TopGainersLosers = new TopGainersLosersAPI.TopGainersLosers(
    this._client,
  );
  totalSupplyChart: TotalSupplyChartAPI.TotalSupplyChart = new TotalSupplyChartAPI.TotalSupplyChart(
    this._client,
  );

  /**
   * To query all the metadata (image, websites, socials, description, contract
   * address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin
   * based on a particular coin ID
   */
  getID(
    id: string,
    query: CoinGetIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CoinGetIDResponse> {
    return this._client.get(path`/coins/${id}`, { query, ...options });
  }
}

export interface CoinGetIDResponse {
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
  detail_platforms: { [key: string]: CoinGetIDResponse.DetailPlatforms };

  /**
   * Genesis date
   */
  genesis_date: string | null;

  /**
   * Blockchain hashing algorithm
   */
  hashing_algorithm: string | null;

  /**
   * Coin image URL
   */
  image: CoinGetIDResponse.Image;

  /**
   * Last updated timestamp
   */
  last_updated: string;

  /**
   * Links
   */
  links: CoinGetIDResponse.Links;

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
  status_updates: Array<CoinGetIDResponse.StatusUpdate>;

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
   * Detailed coin categories
   */
  categories_details?: Array<CoinGetIDResponse.CategoriesDetail>;

  /**
   * Community data
   */
  community_data?: CoinGetIDResponse.CommunityData;

  /**
   * Developer data
   */
  developer_data?: CoinGetIDResponse.DeveloperData;

  /**
   * ICO data
   */
  ico_data?: CoinGetIDResponse.IcoData | null;

  /**
   * Coin name localization
   */
  localization?: { [key: string]: string };

  /**
   * Market data
   */
  market_data?: CoinGetIDResponse.MarketData;

  /**
   * Tickers
   */
  tickers?: Array<CoinGetIDResponse.Ticker>;
}

export namespace CoinGetIDResponse {
  export interface DetailPlatforms {
    /**
     * Token contract address
     */
    contract_address?: string;

    /**
     * Token decimal place
     */
    decimal_place?: number | null;
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

  export interface CategoriesDetail {
    /**
     * Category ID
     */
    id?: string;

    /**
     * Category name
     */
    name?: string;
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
   * ICO data
   */
  export interface IcoData {
    /**
     * Accepting currencies
     */
    accepting_currencies?: string;

    /**
     * Amount for sale
     */
    amount_for_sale?: number;

    /**
     * Base pre-sale amount
     */
    base_pre_sale_amount?: number;

    /**
     * Base public sale amount
     */
    base_public_sale_amount?: number;

    /**
     * Bounty detail URL
     */
    bounty_detail_url?: string;

    /**
     * Country of origin
     */
    country_origin?: string;

    /**
     * Detailed description
     */
    description?: string;

    /**
     * Hardcap amount
     */
    hardcap_amount?: number;

    /**
     * Hardcap currency
     */
    hardcap_currency?: string;

    /**
     * ICO end date
     */
    ico_end_date?: string;

    /**
     * ICO start date
     */
    ico_start_date?: string;

    /**
     * KYC required
     */
    kyc_required?: boolean;

    /**
     * ICO related links
     */
    links?: { [key: string]: string };

    /**
     * Pre-sale available
     */
    pre_sale_available?: boolean;

    /**
     * Pre-sale end date
     */
    pre_sale_end_date?: string;

    /**
     * Pre-sale ended
     */
    pre_sale_ended?: boolean;

    /**
     * Pre-sale start date
     */
    pre_sale_start_date?: string;

    /**
     * Quote pre-sale amount
     */
    quote_pre_sale_amount?: number;

    /**
     * Quote pre-sale currency
     */
    quote_pre_sale_currency?: string;

    /**
     * Quote public sale amount
     */
    quote_public_sale_amount?: number;

    /**
     * Quote public sale currency
     */
    quote_public_sale_currency?: string;

    /**
     * Short description
     */
    short_desc?: string;

    /**
     * Softcap amount
     */
    softcap_amount?: number;

    /**
     * Softcap currency
     */
    softcap_currency?: string;

    /**
     * Total raised amount
     */
    total_raised?: number;

    /**
     * Total raised currency
     */
    total_raised_currency?: string;

    /**
     * Whitelist available
     */
    whitelist_available?: boolean;

    /**
     * Whitelist end date
     */
    whitelist_end_date?: string;

    /**
     * Whitelist start date
     */
    whitelist_start_date?: string;

    /**
     * Whitelist URL
     */
    whitelist_url?: string;
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

export interface CoinGetIDParams {
  /**
   * Include community data. Default: true
   */
  community_data?: boolean;

  /**
   * Include developer data. Default: true
   */
  developer_data?: boolean;

  /**
   * Set to `symbol` to display DEX pair base and target as symbols. Default:
   * `contract_address`
   */
  dex_pair_format?: 'contract_address' | 'symbol';

  /**
   * Include categories details. Default: false
   */
  include_categories_details?: boolean;

  /**
   * Include all localized languages in the response. Default: true
   */
  localization?: boolean;

  /**
   * Include market data. Default: true
   */
  market_data?: boolean;

  /**
   * Include sparkline 7-day data. Default: false
   */
  sparkline?: boolean;

  /**
   * Include tickers data. Default: true
   */
  tickers?: boolean;
}

Coins.Categories = Categories;
Coins.CirculatingSupplyChart = CirculatingSupplyChart;
Coins.Contract = Contract;
Coins.History = History;
Coins.List = List;
Coins.MarketChart = MarketChart;
Coins.Markets = Markets;
Coins.Ohlc = Ohlc;
Coins.Tickers = Tickers;
Coins.TopGainersLosers = TopGainersLosers;
Coins.TotalSupplyChart = TotalSupplyChart;

export declare namespace Coins {
  export { type CoinGetIDResponse as CoinGetIDResponse, type CoinGetIDParams as CoinGetIDParams };

  export {
    Categories as Categories,
    type CategoryGetResponse as CategoryGetResponse,
    type CategoryGetListResponse as CategoryGetListResponse,
    type CategoryGetParams as CategoryGetParams,
  };

  export {
    CirculatingSupplyChart as CirculatingSupplyChart,
    type CirculatingSupplyChartGetResponse as CirculatingSupplyChartGetResponse,
    type CirculatingSupplyChartGetRangeResponse as CirculatingSupplyChartGetRangeResponse,
    type CirculatingSupplyChartGetParams as CirculatingSupplyChartGetParams,
    type CirculatingSupplyChartGetRangeParams as CirculatingSupplyChartGetRangeParams,
  };

  export {
    Contract as Contract,
    type ContractGetResponse as ContractGetResponse,
    type ContractGetParams as ContractGetParams,
  };

  export {
    History as History,
    type HistoryGetResponse as HistoryGetResponse,
    type HistoryGetParams as HistoryGetParams,
  };

  export {
    List as List,
    type ListGetResponse as ListGetResponse,
    type ListGetNewResponse as ListGetNewResponse,
    type ListGetParams as ListGetParams,
  };

  export {
    MarketChart as MarketChart,
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetRangeResponse as MarketChartGetRangeResponse,
    type MarketChartGetParams as MarketChartGetParams,
    type MarketChartGetRangeParams as MarketChartGetRangeParams,
  };

  export {
    Markets as Markets,
    type MarketGetResponse as MarketGetResponse,
    type MarketGetParams as MarketGetParams,
  };

  export {
    Ohlc as Ohlc,
    type OhlcGetResponse as OhlcGetResponse,
    type OhlcGetRangeResponse as OhlcGetRangeResponse,
    type OhlcGetParams as OhlcGetParams,
    type OhlcGetRangeParams as OhlcGetRangeParams,
  };

  export {
    Tickers as Tickers,
    type TickerGetResponse as TickerGetResponse,
    type TickerGetParams as TickerGetParams,
  };

  export {
    TopGainersLosers as TopGainersLosers,
    type TopGainersLosersItem as TopGainersLosersItem,
    type TopGainersLoserGetResponse as TopGainersLoserGetResponse,
    type TopGainersLoserGetParams as TopGainersLoserGetParams,
  };

  export {
    TotalSupplyChart as TotalSupplyChart,
    type TotalSupplyChartGetResponse as TotalSupplyChartGetResponse,
    type TotalSupplyChartGetRangeResponse as TotalSupplyChartGetRangeResponse,
    type TotalSupplyChartGetParams as TotalSupplyChartGetParams,
    type TotalSupplyChartGetRangeParams as TotalSupplyChartGetRangeParams,
  };
}
