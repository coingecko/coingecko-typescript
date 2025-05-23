// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TotalSupplyChart extends APIResource {
  /**
   * This endpoint allows you to **query historical total supply of a coin by number
   * of days away from now based on provided coin ID**
   *
   * @example
   * ```ts
   * const totalSupplyChart =
   *   await client.coins.totalSupplyChart.get('bitcoin', {
   *     days: 'days',
   *   });
   * ```
   */
  get(
    id: string,
    query: TotalSupplyChartGetParams,
    options?: RequestOptions,
  ): APIPromise<TotalSupplyChartGetResponse> {
    return this._client.get(path`/coins/${id}/total_supply_chart`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query historical total supply of a coin, within a
   * range of timestamp based on the provided coin ID**
   *
   * @example
   * ```ts
   * const response =
   *   await client.coins.totalSupplyChart.getRange('bitcoin', {
   *     from: 0,
   *     to: 0,
   *   });
   * ```
   */
  getRange(
    id: string,
    query: TotalSupplyChartGetRangeParams,
    options?: RequestOptions,
  ): APIPromise<TotalSupplyChartGetRangeResponse> {
    return this._client.get(path`/coins/${id}/total_supply_chart/range`, { query, ...options });
  }
}

export interface TotalSupplyChartGetResponse {
  total_supply?: Array<Array<number | string>>;
}

export interface TotalSupplyChartGetRangeResponse {
  total_supply?: Array<Array<number | string>>;
}

export interface TotalSupplyChartGetParams {
  /**
   * data up to number of days ago Valid values: any integer or `max`
   */
  days: string;

  /**
   * data interval
   */
  interval?: 'daily';
}

export interface TotalSupplyChartGetRangeParams {
  /**
   * starting date in UNIX timestamp
   */
  from: number;

  /**
   * ending date in UNIX timestamp
   */
  to: number;
}

export declare namespace TotalSupplyChart {
  export {
    type TotalSupplyChartGetResponse as TotalSupplyChartGetResponse,
    type TotalSupplyChartGetRangeResponse as TotalSupplyChartGetRangeResponse,
    type TotalSupplyChartGetParams as TotalSupplyChartGetParams,
    type TotalSupplyChartGetRangeParams as TotalSupplyChartGetRangeParams,
  };
}
