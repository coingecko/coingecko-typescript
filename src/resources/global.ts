// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Global extends APIResource {
  /**
   * This endpoint allows you **query cryptocurrency global data including active
   * cryptocurrencies, markets, total crypto market cap and etc**
   *
   * @example
   * ```ts
   * const global = await client.global.retrieve();
   * ```
   */
  retrieve(options?: RequestOptions): APIPromise<GlobalRetrieveResponse> {
    return this._client.get('/global', options);
  }

  /**
   * This endpoint allows you **query top 100 cryptocurrency global decentralized
   * finance (DeFi) data including DeFi market cap, trading volume**
   *
   * @example
   * ```ts
   * const response =
   *   await client.global.retrieveDecentralizedFinance();
   * ```
   */
  retrieveDecentralizedFinance(
    options?: RequestOptions,
  ): APIPromise<GlobalRetrieveDecentralizedFinanceResponse> {
    return this._client.get('/global/decentralized_finance_defi', options);
  }

  /**
   * This endpoint allows you to **query historical global market cap and volume data
   * by number of days away from now**
   *
   * @example
   * ```ts
   * const response = await client.global.retrieveMarketCapChart(
   *   { days: '1' },
   * );
   * ```
   */
  retrieveMarketCapChart(
    query: GlobalRetrieveMarketCapChartParams,
    options?: RequestOptions,
  ): APIPromise<GlobalRetrieveMarketCapChartResponse> {
    return this._client.get('/global/market_cap_chart', { query, ...options });
  }
}

export interface GlobalRetrieveResponse {
  data?: GlobalRetrieveResponse.Data;

  /**
   * cryptocurrencies market cap change percentage in 24 hours in usd
   */
  market_cap_change_percentage_24h_usd?: number;

  updated_at?: number;
}

export namespace GlobalRetrieveResponse {
  export interface Data {
    /**
     * number of active cryptocurrencies
     */
    active_cryptocurrencies?: number;

    /**
     * number of ended icos
     */
    ended_icos?: number;

    /**
     * cryptocurrencies market cap percentage
     */
    market_cap_percentage?: Data.MarketCapPercentage;

    /**
     * number of exchanges
     */
    markets?: number;

    /**
     * number of ongoing icos
     */
    ongoing_icos?: number;

    /**
     * cryptocurrencies total market cap
     */
    total_market_cap?: Data.TotalMarketCap;

    /**
     * cryptocurrencies total volume
     */
    total_volume?: Data.TotalVolume;

    /**
     * number of upcoming icos
     */
    upcoming_icos?: number;
  }

  export namespace Data {
    /**
     * cryptocurrencies market cap percentage
     */
    export interface MarketCapPercentage {
      btc?: number;

      eth?: number;
    }

    /**
     * cryptocurrencies total market cap
     */
    export interface TotalMarketCap {
      btc?: number;

      eth?: number;
    }

    /**
     * cryptocurrencies total volume
     */
    export interface TotalVolume {
      btc?: number;

      eth?: number;
    }
  }
}

export interface GlobalRetrieveDecentralizedFinanceResponse {
  data?: GlobalRetrieveDecentralizedFinanceResponse.Data;
}

export namespace GlobalRetrieveDecentralizedFinanceResponse {
  export interface Data {
    /**
     * defi dominance
     */
    defi_dominance?: string;

    /**
     * defi market cap
     */
    defi_market_cap?: string;

    /**
     * defi to eth ratio
     */
    defi_to_eth_ratio?: string;

    /**
     * eth market cap
     */
    eth_market_cap?: string;

    /**
     * defi top coin dominance
     */
    top_coin_defi_dominance?: number;

    /**
     * defi top coin name
     */
    top_coin_name?: string;

    /**
     * defi trading volume in 24 hours
     */
    trading_volume_24h?: string;
  }
}

export interface GlobalRetrieveMarketCapChartResponse {
  market_cap_chart?: GlobalRetrieveMarketCapChartResponse.MarketCapChart;
}

export namespace GlobalRetrieveMarketCapChartResponse {
  export interface MarketCapChart {
    market_cap?: Array<Array<number>>;

    volume?: Array<Array<number>>;
  }
}

export interface GlobalRetrieveMarketCapChartParams {
  /**
   * data up to number of days ago Valid values: any integer
   */
  days: '1' | '7' | '14' | '30' | '90' | '180' | '365' | 'max';

  /**
   * target currency of market cap, default: usd \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)
   */
  vs_currency?: string;
}

export declare namespace Global {
  export {
    type GlobalRetrieveResponse as GlobalRetrieveResponse,
    type GlobalRetrieveDecentralizedFinanceResponse as GlobalRetrieveDecentralizedFinanceResponse,
    type GlobalRetrieveMarketCapChartResponse as GlobalRetrieveMarketCapChartResponse,
    type GlobalRetrieveMarketCapChartParams as GlobalRetrieveMarketCapChartParams,
  };
}
