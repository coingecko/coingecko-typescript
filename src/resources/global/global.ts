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
   * To query cryptocurrency global data including active cryptocurrencies, markets,
   * total crypto market cap and etc
   */
  get(options?: RequestOptions): APIPromise<GlobalGetResponse> {
    return this._client.get('/global', options);
  }
}

export interface GlobalGetResponse {
  data: GlobalGetResponse.Data;
}

export namespace GlobalGetResponse {
  export interface Data {
    /**
     * Number of active cryptocurrencies
     */
    active_cryptocurrencies: number;

    /**
     * Number of ended ICOs
     */
    ended_icos: number;

    /**
     * Market cap change percentage in 24 hours in USD
     */
    market_cap_change_percentage_24h_usd: number;

    /**
     * Market cap percentage by coin
     */
    market_cap_percentage: { [key: string]: number };

    /**
     * Number of exchanges
     */
    markets: number;

    /**
     * Number of ongoing ICOs
     */
    ongoing_icos: number;

    /**
     * Total cryptocurrency market cap by currency
     */
    total_market_cap: { [key: string]: number };

    /**
     * Total cryptocurrency volume by currency
     */
    total_volume: { [key: string]: number };

    /**
     * Number of upcoming ICOs
     */
    upcoming_icos: number;

    /**
     * Last updated time in UNIX timestamp
     */
    updated_at: number;

    /**
     * Volume change percentage in 24 hours in USD
     */
    volume_change_percentage_24h_usd: number;
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
