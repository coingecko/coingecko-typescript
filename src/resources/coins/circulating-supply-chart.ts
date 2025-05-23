// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CirculatingSupplyChart extends APIResource {
  /**
   * This endpoint allows you to **query historical circulating supply of a coin by
   * number of days away from now based on provided coin ID**
   *
   * @example
   * ```ts
   * const circulatingSupplyChart =
   *   await client.coins.circulatingSupplyChart.get('bitcoin', {
   *     days: 'days',
   *   });
   * ```
   */
  get(
    id: string,
    query: CirculatingSupplyChartGetParams,
    options?: RequestOptions,
  ): APIPromise<CirculatingSupplyChartGetResponse> {
    return this._client.get(path`/coins/${id}/circulating_supply_chart`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query historical circulating supply of a coin,
   * within a range of timestamp based on the provided coin ID**
   *
   * @example
   * ```ts
   * const response =
   *   await client.coins.circulatingSupplyChart.getRange(
   *     'bitcoin',
   *     { from: 0, to: 0 },
   *   );
   * ```
   */
  getRange(
    id: string,
    query: CirculatingSupplyChartGetRangeParams,
    options?: RequestOptions,
  ): APIPromise<CirculatingSupplyChartGetRangeResponse> {
    return this._client.get(path`/coins/${id}/circulating_supply_chart/range`, { query, ...options });
  }
}

export interface CirculatingSupplyChartGetResponse {
  circulating_supply?: Array<Array<number | string>>;
}

export interface CirculatingSupplyChartGetRangeResponse {
  circulating_supply?: Array<Array<number | string>>;
}

export interface CirculatingSupplyChartGetParams {
  /**
   * data up to number of days ago Valid values: any integer or `max`
   */
  days: string;

  /**
   * data interval
   */
  interval?: 'daily';
}

export interface CirculatingSupplyChartGetRangeParams {
  /**
   * starting date in UNIX timestamp
   */
  from: number;

  /**
   * ending date in UNIX timestamp
   */
  to: number;
}

export declare namespace CirculatingSupplyChart {
  export {
    type CirculatingSupplyChartGetResponse as CirculatingSupplyChartGetResponse,
    type CirculatingSupplyChartGetRangeResponse as CirculatingSupplyChartGetRangeResponse,
    type CirculatingSupplyChartGetParams as CirculatingSupplyChartGetParams,
    type CirculatingSupplyChartGetRangeParams as CirculatingSupplyChartGetRangeParams,
  };
}
