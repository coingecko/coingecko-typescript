// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Markets extends APIResource {
  /**
   * This endpoint allows you to **query all the supported coins with price, market
   * cap, volume and market related data**
   *
   * @example
   * ```ts
   * const markets = await client.coins.markets.get({
   *   vs_currency: 'usd',
   * });
   * ```
   */
  get(query: MarketGetParams, options?: RequestOptions): APIPromise<MarketGetResponse> {
    return this._client.get('/coins/markets', { query, ...options });
  }
}

export type MarketGetResponse = Array<MarketGetResponse.MarketGetResponseItem>;

export namespace MarketGetResponse {
  export interface MarketGetResponseItem {
    /**
     * coin ID
     */
    id?: string;

    /**
     * coin all time high (ATH) in currency
     */
    ath?: number | null;

    /**
     * coin all time high (ATH) change in percentage
     */
    ath_change_percentage?: number | null;

    /**
     * coin all time high (ATH) date
     */
    ath_date?: string | null;

    /**
     * coin all time low (atl) in currency
     */
    atl?: number | null;

    /**
     * coin all time low (atl) change in percentage
     */
    atl_change_percentage?: number | null;

    /**
     * coin all time low (atl) date
     */
    atl_date?: string | null;

    /**
     * coin circulating supply
     */
    circulating_supply?: number | null;

    /**
     * coin current price in currency
     */
    current_price?: number | null;

    /**
     * coin fully diluted valuation (fdv) in currency
     */
    fully_diluted_valuation?: number | null;

    /**
     * coin 24hr price high in currency
     */
    high_24h?: number | null;

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
    low_24h?: number | null;

    /**
     * coin market cap in currency
     */
    market_cap?: number | null;

    /**
     * coin 24hr market cap change in currency
     */
    market_cap_change_24h?: number | null;

    /**
     * coin 24hr market cap change in percentage
     */
    market_cap_change_percentage_24h?: number | null;

    /**
     * coin rank by market cap
     */
    market_cap_rank?: number | null;

    /**
     * coin max supply
     */
    max_supply?: number | null;

    /**
     * coin name
     */
    name?: string;

    /**
     * coin 24hr price change in currency
     */
    price_change_24h?: number | null;

    /**
     * coin 24hr price change in percentage
     */
    price_change_percentage_24h?: number | null;

    /**
     * return on investment data
     */
    roi?: MarketGetResponseItem.Roi | null;

    /**
     * coin symbol
     */
    symbol?: string;

    /**
     * coin total supply
     */
    total_supply?: number | null;

    /**
     * coin total trading volume in currency
     */
    total_volume?: number | null;
  }

  export namespace MarketGetResponseItem {
    /**
     * return on investment data
     */
    export interface Roi {
      /**
       * ROI currency
       */
      currency: string;

      /**
       * ROI percentage
       */
      percentage: number;

      /**
       * ROI multiplier
       */
      times: number;
    }
  }
}

export interface MarketGetParams {
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

export declare namespace Markets {
  export { type MarketGetResponse as MarketGetResponse, type MarketGetParams as MarketGetParams };
}
