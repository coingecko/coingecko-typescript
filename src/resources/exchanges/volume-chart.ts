// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class VolumeChart extends APIResource {
  /**
   * This endpoint allows you to **query the historical volume chart data with time
   * in UNIX and trading volume data in BTC based on exchange’s ID**
   *
   * @example
   * ```ts
   * const volumeCharts = await client.exchanges.volumeChart.get(
   *   'id',
   *   { days: '1' },
   * );
   * ```
   */
  get(id: string, query: VolumeChartGetParams, options?: RequestOptions): APIPromise<VolumeChartGetResponse> {
    return this._client.get(path`/exchanges/${id}/volume_chart`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query the historical volume chart data in BTC by
   * specifying date range in UNIX based on exchange’s ID**
   *
   * @example
   * ```ts
   * const response =
   *   await client.exchanges.volumeChart.getRange('id', {
   *     from: 0,
   *     to: 0,
   *   });
   * ```
   */
  getRange(
    id: string,
    query: VolumeChartGetRangeParams,
    options?: RequestOptions,
  ): APIPromise<VolumeChartGetRangeResponse> {
    return this._client.get(path`/exchanges/${id}/volume_chart/range`, { query, ...options });
  }
}

export type VolumeChartGetResponse = Array<Array<number>>;

export type VolumeChartGetRangeResponse = Array<Array<number>>;

export interface VolumeChartGetParams {
  /**
   * data up to number of days ago
   */
  days: '1' | '7' | '14' | '30' | '90' | '180' | '365';
}

export interface VolumeChartGetRangeParams {
  /**
   * starting date in UNIX timestamp
   */
  from: number;

  /**
   * ending date in UNIX timestamp
   */
  to: number;
}

export declare namespace VolumeChart {
  export {
    type VolumeChartGetResponse as VolumeChartGetResponse,
    type VolumeChartGetRangeResponse as VolumeChartGetRangeResponse,
    type VolumeChartGetParams as VolumeChartGetParams,
    type VolumeChartGetRangeParams as VolumeChartGetRangeParams,
  };
}
