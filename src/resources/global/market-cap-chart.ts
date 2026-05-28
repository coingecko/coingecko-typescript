// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class MarketCapChart extends APIResource {
  /**
   * To query historical global market cap and volume data by number of days away
   * from now
   */
  get(query: MarketCapChartGetParams, options?: RequestOptions): APIPromise<MarketCapChartGetResponse> {
    return this._client.get('/global/market_cap_chart', { query, ...options });
  }
}

export interface MarketCapChartGetResponse {
  market_cap_chart: MarketCapChartGetResponse.MarketCapChart;
}

export namespace MarketCapChartGetResponse {
  export interface MarketCapChart {
    /**
     * Market cap data as [timestamp, market_cap] pairs
     */
    market_cap: Array<Array<number>>;

    /**
     * Volume data as [timestamp, volume] pairs
     */
    volume: Array<Array<number>>;
  }
}

export interface MarketCapChartGetParams {
  /**
   * Data up to number of days ago.
   */
  days: '1' | '7' | '14' | '30' | '90' | '180' | '365' | 'max';

  /**
   * Target currency of market cap. Default: `usd` \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency?: string;
}

export declare namespace MarketCapChart {
  export {
    type MarketCapChartGetResponse as MarketCapChartGetResponse,
    type MarketCapChartGetParams as MarketCapChartGetParams,
  };
}
