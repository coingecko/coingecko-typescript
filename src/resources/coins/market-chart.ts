// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MarketChart extends APIResource {
  /**
   * This endpoint allows you to **get the historical chart data of a coin including
   * time in UNIX, price, market cap and 24hr volume based on particular coin ID**
   *
   * @example
   * ```ts
   * const marketChart = await client.coins.marketChart.get(
   *   'bitcoin',
   *   { days: 'days', vs_currency: 'usd' },
   * );
   * ```
   */
  get(id: string, query: MarketChartGetParams, options?: RequestOptions): APIPromise<MarketChartGetResponse> {
    return this._client.get(path`/coins/${id}/market_chart`, { query, ...options });
  }

  /**
   * This endpoint allows you to **get the historical chart data of a coin within
   * certain time range in UNIX along with price, market cap and 24hr volume based on
   * particular coin ID**
   *
   * @example
   * ```ts
   * const response = await client.coins.marketChart.getRange(
   *   'bitcoin',
   *   { from: 0, to: 0, vs_currency: 'usd' },
   * );
   * ```
   */
  getRange(
    id: string,
    query: MarketChartGetRangeParams,
    options?: RequestOptions,
  ): APIPromise<MarketChartGetRangeResponse> {
    return this._client.get(path`/coins/${id}/market_chart/range`, { query, ...options });
  }
}

export interface MarketChartGetResponse {
  market_caps?: Array<Array<number>>;

  prices?: Array<Array<number>>;

  total_volumes?: Array<Array<number>>;
}

export interface MarketChartGetRangeResponse {
  market_caps?: Array<Array<number>>;

  prices?: Array<Array<number>>;

  total_volumes?: Array<Array<number>>;
}

export interface MarketChartGetParams {
  /**
   * data up to number of days ago You may use any integer or `max` for number of
   * days
   */
  days: string;

  /**
   * target currency of market data \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;

  /**
   * data interval, leave empty for auto granularity
   */
  interval?: '5m' | 'hourly' | 'daily';

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
}

export interface MarketChartGetRangeParams {
  /**
   * starting date in UNIX timestamp
   */
  from: number;

  /**
   * ending date in UNIX timestamp
   */
  to: number;

  /**
   * target currency of market data \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;

  /**
   * data interval, leave empty for auto granularity
   */
  interval?: '5m' | 'hourly' | 'daily';

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
}

export declare namespace MarketChart {
  export {
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetRangeResponse as MarketChartGetRangeResponse,
    type MarketChartGetParams as MarketChartGetParams,
    type MarketChartGetRangeParams as MarketChartGetRangeParams,
  };
}
