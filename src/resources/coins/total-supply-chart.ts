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
   * const totalSupplyChartBase =
   *   await client.coins.totalSupplyChart.retrieveByID(
   *     'bitcoin',
   *     { days: 'days' },
   *   );
   * ```
   */
  retrieveByID(
    id: string,
    query: TotalSupplyChartRetrieveByIDParams,
    options?: RequestOptions,
  ): APIPromise<TotalSupplyChartBase> {
    return this._client.get(path`/coins/${id}/total_supply_chart`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query historical total supply of a coin, within a
   * range of timestamp based on the provided coin ID**
   *
   * @example
   * ```ts
   * const totalSupplyChartBase =
   *   await client.coins.totalSupplyChart.retrieveRangeByID(
   *     'bitcoin',
   *     { from: 0, to: 0 },
   *   );
   * ```
   */
  retrieveRangeByID(
    id: string,
    query: TotalSupplyChartRetrieveRangeByIDParams,
    options?: RequestOptions,
  ): APIPromise<TotalSupplyChartBase> {
    return this._client.get(path`/coins/${id}/total_supply_chart/range`, { query, ...options });
  }
}

export interface TotalSupplyChartBase {
  total_supply?: Array<Array<number | string>>;
}

export interface TotalSupplyChartRetrieveByIDParams {
  /**
   * data up to number of days ago Valid values: any integer or `max`
   */
  days: string;

  /**
   * data interval
   */
  interval?: 'daily';
}

export interface TotalSupplyChartRetrieveRangeByIDParams {
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
    type TotalSupplyChartBase as TotalSupplyChartBase,
    type TotalSupplyChartRetrieveByIDParams as TotalSupplyChartRetrieveByIDParams,
    type TotalSupplyChartRetrieveRangeByIDParams as TotalSupplyChartRetrieveRangeByIDParams,
  };
}
