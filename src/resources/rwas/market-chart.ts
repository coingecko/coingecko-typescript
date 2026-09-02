// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MarketChart extends APIResource {
  /**
   * To get the historical chart data of a RWA including time in UNIX, price, market
   * cap and 24hrs volume based on a particular RWA ID
   */
  get(
    id: string,
    query: MarketChartGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<MarketChartGetResponse> {
    return this._client.get(path`/rwas/${id}/market_chart`, { query, ...options });
  }
}

export interface MarketChartGetResponse {
  /**
   * Tokenized market cap data points as [timestamp, market_cap] pairs
   */
  tokenized_market_caps: Array<Array<number>>;

  /**
   * Tokenized price data points as [timestamp, price] pairs
   */
  tokenized_prices: Array<Array<number>>;

  /**
   * Tokenized total volume data points as [timestamp, volume] pairs
   */
  tokenized_total_volumes: Array<Array<number>>;
}

export interface MarketChartGetParams {
  /**
   * Data up to number of days ago. You may use any integer or `max` for number of
   * days. Default: 1
   */
  days?: string;

  /**
   * Data interval, leave empty for auto granularity.
   */
  interval?: '5m' | 'hourly' | 'daily';

  /**
   * Decimal place for currency price value.
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
}

export declare namespace MarketChart {
  export {
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetParams as MarketChartGetParams,
  };
}
