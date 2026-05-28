// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Markets extends APIResource {
  /**
   * To query all the supported coins with price, market cap, volume and market
   * related data
   */
  get(query: MarketGetParams, options?: RequestOptions): APIPromise<MarketGetResponse> {
    return this._client.get('/coins/markets', { query, ...options });
  }
}

export type MarketGetResponse = Array<MarketGetResponse.MarketGetResponseItem>;

export namespace MarketGetResponse {
  export interface MarketGetResponseItem {
    /**
     * Coin ID
     */
    id: string;

    /**
     * All-time high price in target currency
     */
    ath: number | null;

    /**
     * All-time high change percentage
     */
    ath_change_percentage: number | null;

    /**
     * All-time high date
     */
    ath_date: string | null;

    /**
     * All-time low price in target currency
     */
    atl: number | null;

    /**
     * All-time low change percentage
     */
    atl_change_percentage: number | null;

    /**
     * All-time low date
     */
    atl_date: string | null;

    /**
     * Circulating supply
     */
    circulating_supply: number | null;

    /**
     * Current price in target currency
     */
    current_price: number | null;

    /**
     * Fully diluted valuation in target currency
     */
    fully_diluted_valuation: number | null;

    /**
     * 24-hour price high in target currency
     */
    high_24h: number | null;

    /**
     * Coin image URL
     */
    image: string;

    /**
     * Last updated timestamp
     */
    last_updated: string;

    /**
     * 24-hour price low in target currency
     */
    low_24h: number | null;

    /**
     * Market cap in target currency
     */
    market_cap: number | null;

    /**
     * 24-hour market cap change in target currency
     */
    market_cap_change_24h: number | null;

    /**
     * 24-hour market cap change percentage
     */
    market_cap_change_percentage_24h: number | null;

    /**
     * Market cap rank
     */
    market_cap_rank: number | null;

    /**
     * Max supply
     */
    max_supply: number | null;

    /**
     * Coin name
     */
    name: string;

    /**
     * 24-hour price change in target currency
     */
    price_change_24h: number | null;

    /**
     * 24-hour price change percentage
     */
    price_change_percentage_24h: number | null;

    /**
     * Return on investment data
     */
    roi: MarketGetResponseItem.Roi | null;

    /**
     * Coin symbol
     */
    symbol: string;

    /**
     * Total supply
     */
    total_supply: number | null;

    /**
     * Total trading volume in target currency
     */
    total_volume: number | null;

    /**
     * Market cap rank including rehypothecated tokens
     */
    market_cap_rank_with_rehypothecated?: number | null;

    /**
     * 14-day price change percentage in target currency
     */
    price_change_percentage_14d_in_currency?: number | null;

    /**
     * 1-hour price change percentage in target currency
     */
    price_change_percentage_1h_in_currency?: number | null;

    /**
     * 1-year price change percentage in target currency
     */
    price_change_percentage_1y_in_currency?: number | null;

    /**
     * 200-day price change percentage in target currency
     */
    price_change_percentage_200d_in_currency?: number | null;

    /**
     * 24-hour price change percentage in target currency
     */
    price_change_percentage_24h_in_currency?: number | null;

    /**
     * 30-day price change percentage in target currency
     */
    price_change_percentage_30d_in_currency?: number | null;

    /**
     * 7-day price change percentage in target currency
     */
    price_change_percentage_7d_in_currency?: number | null;

    /**
     * Sparkline price data for the last 7 days
     */
    sparkline_in_7d?: MarketGetResponseItem.SparklineIn7d;
  }

  export namespace MarketGetResponseItem {
    /**
     * Return on investment data
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

    /**
     * Sparkline price data for the last 7 days
     */
    export interface SparklineIn7d {
      /**
       * Array of price values
       */
      price?: Array<number>;
    }
  }
}

export interface MarketGetParams {
  /**
   * Target currency of coins and market data. \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
   */
  vs_currency: string;

  /**
   * Filter based on coins' category. \*refers to
   * [`/coins/categories/list`](/reference/coins-categories-list)
   */
  category?: string;

  /**
   * Coins' IDs, comma-separated if querying more than 1 coin. \*refers to
   * [`/coins/list`](/reference/coins-list)
   */
  ids?: string;

  /**
   * Include rehypothecated tokens in results. When true, returns
   * `market_cap_rank_with_rehypothecated` field. Default: false
   */
  include_rehypothecated?: boolean;

  /**
   * For `symbols` lookups, specify `all` to include all matching tokens. Default
   * `top` returns top-ranked tokens by market cap or volume.
   */
  include_tokens?: 'top' | 'all';

  /**
   * Language background. Default: en
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
   * Coins' names, comma-separated if querying more than 1 coin.
   */
  names?: string;

  /**
   * Sort result by field. Default: market_cap_desc
   */
  order?: 'market_cap_asc' | 'market_cap_desc' | 'volume_asc' | 'volume_desc' | 'id_asc' | 'id_desc';

  /**
   * Page through results. Default: 1
   */
  page?: number;

  /**
   * Total results per page. Default: 100 Valid values: 1...250
   */
  per_page?: number;

  /**
   * Decimal places for currency price value
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
   * Include price change percentage timeframe, comma-separated if querying more than
   * 1 timeframe. Valid values: `1h`, `24h`, `7d`, `14d`, `30d`, `200d`, `1y`
   */
  price_change_percentage?: string;

  /**
   * Include sparkline 7-day data. Default: false
   */
  sparkline?: boolean;

  /**
   * Coins' symbols, comma-separated if querying more than 1 coin.
   */
  symbols?: string;
}

export declare namespace Markets {
  export { type MarketGetResponse as MarketGetResponse, type MarketGetParams as MarketGetParams };
}
