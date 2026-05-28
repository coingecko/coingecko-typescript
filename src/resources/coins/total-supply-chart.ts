// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class TotalSupplyChart extends APIResource {
  /**
   * To query historical total supply of a coin by number of days away from now based
   * on provided coin ID
   */
  get(
    id: string,
    query: TotalSupplyChartGetParams,
    options?: RequestOptions,
  ): APIPromise<TotalSupplyChartGetResponse> {
    return this._client.get(path`/coins/${id}/total_supply_chart`, { query, ...options });
  }

  /**
   * To query historical total supply of a coin, within a range of timestamp based on
   * the provided coin ID
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
  /**
   * Total supply data points as [timestamp, supply] pairs
   */
  total_supply: Array<Array<number | string>>;
}

export interface TotalSupplyChartGetRangeResponse {
  /**
   * Total supply data points as [timestamp, supply] pairs
   */
  total_supply: Array<Array<number | string>>;
}

export interface TotalSupplyChartGetParams {
  /**
   * Data up to number of days ago. Valid values: any integer or `max`.
   */
  days: string;

  /**
   * Data interval.
   */
  interval?: 'daily';
}

export interface TotalSupplyChartGetRangeParams {
  /**
   * Starting date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX
   * timestamp. **Use ISO date string for best compatibility.**
   */
  from: string;

  /**
   * Ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX
   * timestamp. **Use ISO date string for best compatibility.**
   */
  to: string;
}

export declare namespace TotalSupplyChart {
  export {
    type TotalSupplyChartGetResponse as TotalSupplyChartGetResponse,
    type TotalSupplyChartGetRangeResponse as TotalSupplyChartGetRangeResponse,
    type TotalSupplyChartGetParams as TotalSupplyChartGetParams,
    type TotalSupplyChartGetRangeParams as TotalSupplyChartGetRangeParams,
  };
}
