// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as IssuersAPI from './issuers';
import { IssuerGetIDResponse, IssuerGetListResponse, Issuers } from './issuers';
import * as MarketChartAPI from './market-chart';
import { MarketChart, MarketChartGetParams, MarketChartGetResponse } from './market-chart';
import * as TickersAPI from './tickers';
import { TickerGetParams, TickerGetResponse, Tickers } from './tickers';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Rwas extends APIResource {
  issuers: IssuersAPI.Issuers = new IssuersAPI.Issuers(this._client);
  marketChart: MarketChartAPI.MarketChart = new MarketChartAPI.MarketChart(this._client);
  tickers: TickersAPI.Tickers = new TickersAPI.Tickers(this._client);

  /**
   * To query all the metadata, market data and tokens of a RWA based on a particular
   * RWA ID
   */
  getID(
    id: string,
    query: RwaGetIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RwaGetIDResponse> {
    return this._client.get(path`/rwas/${id}`, { query, ...options });
  }

  /**
   * To query all the supported tokenized real world assets (RWAs) on CoinGecko with
   * RWA ID, name and symbol
   */
  getList(
    query: RwaGetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RwaGetListResponse> {
    return this._client.get('/rwas/list', { query, ...options });
  }

  /**
   * To query all the supported RWAs with price, market cap, volume and market
   * related data
   */
  getMarkets(
    query: RwaGetMarketsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<RwaGetMarketsResponse> {
    return this._client.get('/rwas/markets', { query, ...options });
  }
}

export interface RwaGetIDResponse {
  /**
   * RWA ID
   */
  id: string;

  /**
   * RWA asset type
   */
  asset_type: 'stock' | 'commodity' | 'etf';

  /**
   * Image URLs of the token with the largest market cap
   */
  image: RwaGetIDResponse.Image;

  /**
   * Last updated timestamp
   */
  last_updated: string;

  /**
   * RWA name
   */
  name: string;

  /**
   * RWA symbol
   */
  symbol: string;

  /**
   * RWA web slug
   */
  web_slug: string;

  /**
   * Aggregated tokenized market data
   */
  tokenized_market_data?: RwaGetIDResponse.TokenizedMarketData;

  /**
   * Tokens tracking this RWA
   */
  tokens?: Array<RwaGetIDResponse.Token>;
}

export namespace RwaGetIDResponse {
  /**
   * Image URLs of the token with the largest market cap
   */
  export interface Image {
    /**
     * Large image URL
     */
    large?: string;

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
   * Aggregated tokenized market data
   */
  export interface TokenizedMarketData {
    /**
     * Current price in target currency
     */
    current_price?: number | null;

    /**
     * 24-hour price high in target currency
     */
    high_24h?: number | null;

    /**
     * Last updated timestamp
     */
    last_updated?: string;

    /**
     * 24-hour price low in target currency
     */
    low_24h?: number | null;

    /**
     * Market cap in target currency
     */
    market_cap?: number | null;

    /**
     * 24-hour market cap change in target currency
     */
    market_cap_change_24h?: number | null;

    /**
     * 24-hour market cap change percentage
     */
    market_cap_change_percentage_24h?: number | null;

    /**
     * 24-hour price change in target currency
     */
    price_change_24h?: number | null;

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
     * 24-hour price change percentage
     */
    price_change_percentage_24h?: number | null;

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
    sparkline_in_7d?: TokenizedMarketData.SparklineIn7d;

    /**
     * Total trading volume in target currency
     */
    total_volume?: number | null;
  }

  export namespace TokenizedMarketData {
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

  export interface Token {
    /**
     * Token ID
     */
    id?: string;

    /**
     * Token issuer details
     */
    issuer_details?: Token.IssuerDetails;

    /**
     * Token name
     */
    name?: string;

    /**
     * Token asset platform and contract address
     */
    platforms?: { [key: string]: string };

    /**
     * Token symbol
     */
    symbol?: string;
  }

  export namespace Token {
    /**
     * Token issuer details
     */
    export interface IssuerDetails {
      /**
       * Issuer ID
       */
      id?: string;

      /**
       * Issuer name
       */
      name?: string;
    }
  }
}

export type RwaGetListResponse = Array<RwaGetListResponse.RwaGetListResponseItem>;

export namespace RwaGetListResponse {
  export interface RwaGetListResponseItem {
    /**
     * RWA ID
     */
    id: string;

    /**
     * RWA asset type
     */
    asset_type: 'stock' | 'commodity' | 'etf';

    /**
     * RWA name
     */
    name: string;

    /**
     * RWA symbol
     */
    symbol: string;
  }
}

export type RwaGetMarketsResponse = Array<RwaGetMarketsResponse.RwaGetMarketsResponseItem>;

export namespace RwaGetMarketsResponse {
  export interface RwaGetMarketsResponseItem {
    /**
     * RWA ID
     */
    id: string;

    /**
     * RWA asset type
     */
    asset_type: 'stock' | 'commodity' | 'etf';

    /**
     * Large image URL of the token with the largest market cap
     */
    image: string;

    /**
     * RWA name
     */
    name: string;

    /**
     * RWA symbol
     */
    symbol: string;

    /**
     * Aggregated tokenized market data
     */
    tokenized_market_data: RwaGetMarketsResponseItem.TokenizedMarketData;
  }

  export namespace RwaGetMarketsResponseItem {
    /**
     * Aggregated tokenized market data
     */
    export interface TokenizedMarketData {
      /**
       * Current price in target currency
       */
      current_price?: number | null;

      /**
       * 24-hour price high in target currency
       */
      high_24h?: number | null;

      /**
       * Last updated timestamp
       */
      last_updated?: string;

      /**
       * 24-hour price low in target currency
       */
      low_24h?: number | null;

      /**
       * Market cap in target currency
       */
      market_cap?: number | null;

      /**
       * 24-hour market cap change in target currency
       */
      market_cap_change_24h?: number | null;

      /**
       * 24-hour market cap change percentage
       */
      market_cap_change_percentage_24h?: number | null;

      /**
       * 24-hour price change in target currency
       */
      price_change_24h?: number | null;

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
       * 24-hour price change percentage
       */
      price_change_percentage_24h?: number | null;

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
      sparkline_in_7d?: TokenizedMarketData.SparklineIn7d;

      /**
       * Total trading volume in target currency
       */
      total_volume?: number | null;
    }

    export namespace TokenizedMarketData {
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
}

export interface RwaGetIDParams {
  /**
   * Include sparkline 7-day data. Default: false
   */
  sparkline?: boolean;

  /**
   * Include tokenized market data. Default: false
   */
  tokenized_market_data?: boolean;

  /**
   * Include tokens data. Default: false
   */
  tokens?: boolean;
}

export interface RwaGetListParams {
  /**
   * Filter by RWA asset type.
   */
  asset_type?: 'stock' | 'commodity' | 'etf';
}

export interface RwaGetMarketsParams {
  /**
   * Filter by RWA asset type.
   */
  asset_type?: 'stock' | 'commodity' | 'etf';

  /**
   * RWAs' IDs, comma-separated if querying more than 1 RWA. \*refers to
   * [`/rwas/list`](/reference/rwas-list)
   */
  ids?: string;

  /**
   * Filter based on RWAs' issuer. \*refers to
   * [`/rwas/issuers/list`](/reference/rwas-issuers-list)
   */
  issuer?: string;

  /**
   * RWAs' names, comma-separated if querying more than 1 RWA.
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
   * RWAs' symbols, comma-separated if querying more than 1 RWA.
   */
  symbols?: string;
}

Rwas.Issuers = Issuers;
Rwas.MarketChart = MarketChart;
Rwas.Tickers = Tickers;

export declare namespace Rwas {
  export {
    type RwaGetIDResponse as RwaGetIDResponse,
    type RwaGetListResponse as RwaGetListResponse,
    type RwaGetMarketsResponse as RwaGetMarketsResponse,
    type RwaGetIDParams as RwaGetIDParams,
    type RwaGetListParams as RwaGetListParams,
    type RwaGetMarketsParams as RwaGetMarketsParams,
  };

  export {
    Issuers as Issuers,
    type IssuerGetIDResponse as IssuerGetIDResponse,
    type IssuerGetListResponse as IssuerGetListResponse,
  };

  export {
    MarketChart as MarketChart,
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetParams as MarketChartGetParams,
  };

  export {
    Tickers as Tickers,
    type TickerGetResponse as TickerGetResponse,
    type TickerGetParams as TickerGetParams,
  };
}
