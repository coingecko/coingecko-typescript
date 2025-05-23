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
   * const volumeCharts =
   *   await client.exchanges.volumeChart.retrieve('id', {
   *     days: '1',
   *   });
   * ```
   */
  retrieve(
    id: string,
    query: VolumeChartRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<VolumeChartRetrieveResponse> {
    return this._client.get(path`/exchanges/${id}/volume_chart`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query the historical volume chart data in BTC by
   * specifying date range in UNIX based on exchange’s ID**
   *
   * @example
   * ```ts
   * const response =
   *   await client.exchanges.volumeChart.retrieveRange('id', {
   *     from: 0,
   *     to: 0,
   *   });
   * ```
   */
  retrieveRange(
    id: string,
    query: VolumeChartRetrieveRangeParams,
    options?: RequestOptions,
  ): APIPromise<VolumeChartRetrieveRangeResponse> {
    return this._client.get(path`/exchanges/${id}/volume_chart/range`, { query, ...options });
  }
}

export type VolumeChartRetrieveResponse = Array<Array<number>>;

export type VolumeChartRetrieveRangeResponse = Array<Array<number>>;

export interface VolumeChartRetrieveParams {
  /**
   * data up to number of days ago
   */
  days: '1' | '7' | '14' | '30' | '90' | '180' | '365';
}

export interface VolumeChartRetrieveRangeParams {
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
    type VolumeChartRetrieveResponse as VolumeChartRetrieveResponse,
    type VolumeChartRetrieveRangeResponse as VolumeChartRetrieveRangeResponse,
    type VolumeChartRetrieveParams as VolumeChartRetrieveParams,
    type VolumeChartRetrieveRangeParams as VolumeChartRetrieveRangeParams,
  };
}
