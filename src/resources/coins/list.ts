// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class List extends APIResource {
  /**
   * This endpoint allows you to **query all the supported coins on CoinGecko with
   * coins ID, name and symbol**
   *
   * @example
   * ```ts
   * const response = await client.coins.list.all();
   * ```
   */
  all(query: ListAllParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListAllResponse> {
    return this._client.get('/coins/list', { query, ...options });
  }

  /**
   * This endpoint allows you to **query the latest 200 coins that recently listed on
   * CoinGecko**
   *
   * @example
   * ```ts
   * const response = await client.coins.list.recentlyAdded();
   * ```
   */
  recentlyAdded(options?: RequestOptions): APIPromise<ListRecentlyAddedResponse> {
    return this._client.get('/coins/list/new', options);
  }

  /**
   * This endpoint allows you to **query the top 30 coins with largest price gain and
   * loss by a specific time duration**
   *
   * @example
   * ```ts
   * const response = await client.coins.list.topGainersLosers({
   *   vs_currency: 'usd',
   * });
   * ```
   */
  topGainersLosers(
    query: ListTopGainersLosersParams,
    options?: RequestOptions,
  ): APIPromise<ListTopGainersLosersResponse> {
    return this._client.get('/coins/top_gainers_losers', { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the supported coins with price, market
   * cap, volume and market related data**
   *
   * @example
   * ```ts
   * const response = await client.coins.list.withMarketData({
   *   vs_currency: 'usd',
   * });
   * ```
   */
  withMarketData(
    query: ListWithMarketDataParams,
    options?: RequestOptions,
  ): APIPromise<ListWithMarketDataResponse> {
    return this._client.get('/coins/markets', { query, ...options });
  }
}

export type ListAllResponse = Array<ListAllResponse.ListAllResponseItem>;

export namespace ListAllResponse {
  export interface ListAllResponseItem {
    /**
     * coin ID
     */
    id?: string;

    /**
     * coin name
     */
    name?: string;

    /**
     * coin asset platform and contract address
     */
    platforms?: Record<string, string>;

    /**
     * coin symbol
     */
    symbol?: string;
  }
}

export type ListRecentlyAddedResponse = Array<ListRecentlyAddedResponse.ListRecentlyAddedResponseItem>;

export namespace ListRecentlyAddedResponse {
  export interface ListRecentlyAddedResponseItem {
    /**
     * coin ID
     */
    id?: string;

    /**
     * timestamp when coin was activated on CoinGecko
     */
    activated_at?: number;

    /**
     * coin name
     */
    name?: string;

    /**
     * coin symbol
     */
    symbol?: string;
  }
}

export type ListTopGainersLosersResponse =
  Array<ListTopGainersLosersResponse.ListTopGainersLosersResponseItem>;

export namespace ListTopGainersLosersResponse {
  export interface ListTopGainersLosersResponseItem {
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

export interface ListWithMarketDataResponse {
  /**
   * coin ID
   */
  id?: string;

  /**
   * coin all time high (ATH) in currency
   */
  ath?: number;

  /**
   * coin all time high (ATH) change in percentage
   */
  ath_change_percentage?: number;

  /**
   * coin all time high (ATH) date
   */
  ath_date?: string;

  /**
   * coin all time low (atl) in currency
   */
  atl?: number;

  /**
   * coin all time low (atl) change in percentage
   */
  atl_change_percentage?: number;

  /**
   * coin all time low (atl) date
   */
  atl_date?: string;

  /**
   * coin circulating supply
   */
  circulating_supply?: number;

  /**
   * coin current price in currency
   */
  current_price?: number;

  /**
   * coin fully diluted valuation (fdv) in currency
   */
  fully_diluted_valuation?: number;

  /**
   * coin 24hr price high in currency
   */
  high_24h?: number;

  /**
   * coin image url
   */
  image?: string;

  /**
   * coin last updated timestamp
   */
  last_updated?: string;

  /**
   * coin 24hr price low in currency
   */
  low_24h?: number;

  /**
   * coin market cap in currency
   */
  market_cap?: number;

  /**
   * coin 24hr market cap change in currency
   */
  market_cap_change_24h?: number;

  /**
   * coin 24hr market cap change in percentage
   */
  market_cap_change_percentage_24h?: number;

  /**
   * coin rank by market cap
   */
  market_cap_rank?: number;

  /**
   * coin max supply
   */
  max_supply?: number;

  /**
   * coin name
   */
  name?: string;

  /**
   * coin 24hr price change in currency
   */
  price_change_24h?: number;

  /**
   * coin 1h price change in percentage
   */
  price_change_percentage_1h?: number;

  /**
   * coin 24hr price change in percentage
   */
  price_change_percentage_24h?: number;

  roi?: string;

  /**
   * coin price sparkline in 7 days
   */
  sparkline_in_7d?: ListWithMarketDataResponse.SparklineIn7d;

  /**
   * coin symbol
   */
  symbol?: string;

  /**
   * coin total supply
   */
  total_supply?: number;

  /**
   * coin total trading volume in currency
   */
  total_volume?: number;
}

export namespace ListWithMarketDataResponse {
  /**
   * coin price sparkline in 7 days
   */
  export interface SparklineIn7d {
    price?: Array<number>;
  }
}

export interface ListAllParams {
  /**
   * include platform and token's contract addresses, default: false
   */
  include_platform?: boolean;

  /**
   * filter by status of coins, default: active
   */
  status?: 'active' | 'inactive';
}

export interface ListTopGainersLosersParams {
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

export interface ListWithMarketDataParams {
  /**
   * target currency of coins and market data \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;

  /**
   * filter based on coins' category \*refers to
   * [`/coins/categories/list`](/reference/coins-categories-list).
   */
  category?: string;

  /**
   * coins' IDs, comma-separated if querying more than 1 coin. \*refers to
   * [`/coins/list`](/reference/coins-list).
   */
  ids?: string;

  /**
   * for `symbols` lookups, specify `all` to include all matching tokens Default
   * `top` returns top-ranked tokens (by market cap or volume)
   */
  include_tokens?: 'top' | 'all';

  /**
   * language background, default: en
   */
  locale?:
    | 'ar'
    | 'bg'
    | 'cs'
    | 'da'
    | 'de'
    | 'el'
    | 'en'
    | 'es'
    | 'fi'
    | 'fr'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lt'
    | 'nl'
    | 'no'
    | 'pl'
    | 'pt'
    | 'ro'
    | 'ru'
    | 'sk'
    | 'sl'
    | 'sv'
    | 'th'
    | 'tr'
    | 'uk'
    | 'vi'
    | 'zh'
    | 'zh-tw';

  /**
   * coins' names, comma-separated if querying more than 1 coin.
   */
  names?: string;

  /**
   * sort result by field, default: market_cap_desc
   */
  order?: 'market_cap_asc' | 'market_cap_desc' | 'volume_asc' | 'volume_desc' | 'id_asc' | 'id_desc';

  /**
   * page through results, default: 1
   */
  page?: number;

  /**
   * total results per page, default: 100 Valid values: 1...250
   */
  per_page?: number;

  /**
   * decimal place for currency price value
   */
  precision?:
    | 'full'
    | '0'
    | '1'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | '11'
    | '12'
    | '13'
    | '14'
    | '15'
    | '16'
    | '17'
    | '18';

  /**
   * include price change percentage timeframe, comma-separated if query more than 1
   * price change percentage timeframe Valid values: 1h, 24h, 7d, 14d, 30d, 200d, 1y
   */
  price_change_percentage?: string;

  /**
   * include sparkline 7 days data, default: false
   */
  sparkline?: boolean;

  /**
   * coins' symbols, comma-separated if querying more than 1 coin.
   */
  symbols?: string;
}

export declare namespace List {
  export {
    type ListAllResponse as ListAllResponse,
    type ListRecentlyAddedResponse as ListRecentlyAddedResponse,
    type ListTopGainersLosersResponse as ListTopGainersLosersResponse,
    type ListWithMarketDataResponse as ListWithMarketDataResponse,
    type ListAllParams as ListAllParams,
    type ListTopGainersLosersParams as ListTopGainersLosersParams,
    type ListWithMarketDataParams as ListWithMarketDataParams,
  };
}
