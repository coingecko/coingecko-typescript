// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class CirculatingSupplyChart extends APIResource {
  /**
   * To query historical circulating supply of a coin by number of days away from now
   * based on provided coin ID
   */
  get(
    id: string,
    query: CirculatingSupplyChartGetParams,
    options?: RequestOptions,
  ): APIPromise<CirculatingSupplyChartGetResponse> {
    return this._client.get(path`/coins/${id}/circulating_supply_chart`, { query, ...options });
  }

  /**
   * To query historical circulating supply of a coin, within a range of timestamp
   * based on the provided coin ID
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
  /**
   * Circulating supply data points as [timestamp, supply] pairs
   */
  circulating_supply: Array<Array<number | string>>;
}

export interface CirculatingSupplyChartGetRangeResponse {
  /**
   * Circulating supply data points as [timestamp, supply] pairs
   */
  circulating_supply: Array<Array<number | string>>;
}

export interface CirculatingSupplyChartGetParams {
  /**
   * Data up to number of days ago. Valid values: any integer or `max`.
   */
  days: string;

  /**
   * Data interval.
   */
  interval?: '5m' | 'hourly' | 'daily';
}

export interface CirculatingSupplyChartGetRangeParams {
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

export declare namespace CirculatingSupplyChart {
  export {
    type CirculatingSupplyChartGetResponse as CirculatingSupplyChartGetResponse,
    type CirculatingSupplyChartGetRangeResponse as CirculatingSupplyChartGetRangeResponse,
    type CirculatingSupplyChartGetParams as CirculatingSupplyChartGetParams,
    type CirculatingSupplyChartGetRangeParams as CirculatingSupplyChartGetRangeParams,
  };
}
