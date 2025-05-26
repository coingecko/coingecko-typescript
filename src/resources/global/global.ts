// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DecentralizedFinanceDefiAPI from './decentralized-finance-defi';
import { DecentralizedFinanceDefi, DecentralizedFinanceDefiGetResponse } from './decentralized-finance-defi';
import * as MarketCapChartAPI from './market-cap-chart';
import { MarketCapChart, MarketCapChartGetParams, MarketCapChartGetResponse } from './market-cap-chart';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Global extends APIResource {
  decentralizedFinanceDefi: DecentralizedFinanceDefiAPI.DecentralizedFinanceDefi =
    new DecentralizedFinanceDefiAPI.DecentralizedFinanceDefi(this._client);
  marketCapChart: MarketCapChartAPI.MarketCapChart = new MarketCapChartAPI.MarketCapChart(this._client);

  /**
   * This endpoint allows you **query cryptocurrency global data including active
   * cryptocurrencies, markets, total crypto market cap and etc**
   *
   * @example
   * ```ts
   * const global = await client.global.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<GlobalGetResponse> {
    return this._client.get('/global', options);
  }
}

export interface GlobalGetResponse {
  data?: GlobalGetResponse.Data;
}

export namespace GlobalGetResponse {
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
     * cryptocurrencies market cap change percentage in 24 hours in usd
     */
    market_cap_change_percentage_24h_usd?: number;

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

    updated_at?: number;
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

Global.DecentralizedFinanceDefi = DecentralizedFinanceDefi;
Global.MarketCapChart = MarketCapChart;

export declare namespace Global {
  export { type GlobalGetResponse as GlobalGetResponse };

  export {
    DecentralizedFinanceDefi as DecentralizedFinanceDefi,
    type DecentralizedFinanceDefiGetResponse as DecentralizedFinanceDefiGetResponse,
  };

  export {
    MarketCapChart as MarketCapChart,
    type MarketCapChartGetResponse as MarketCapChartGetResponse,
    type MarketCapChartGetParams as MarketCapChartGetParams,
  };
}
