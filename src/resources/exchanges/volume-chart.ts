// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class VolumeChart extends APIResource {
  /**
   * To query the historical volume chart data with time in UNIX and trading volume
   * data in BTC based on exchange's ID
   */
  get(id: string, query: VolumeChartGetParams, options?: RequestOptions): APIPromise<VolumeChartGetResponse> {
    return this._client.get(path`/exchanges/${id}/volume_chart`, { query, ...options });
  }

  /**
   * To query the historical volume chart data in BTC by specifying date range in
   * UNIX based on exchange's ID
   */
  getRange(
    id: string,
    query: VolumeChartGetRangeParams,
    options?: RequestOptions,
  ): APIPromise<VolumeChartGetRangeResponse> {
    return this._client.get(path`/exchanges/${id}/volume_chart/range`, { query, ...options });
  }
}

/**
 * Volume chart data points as [timestamp, volume_in_btc] pairs
 */
export type VolumeChartGetResponse = Array<Array<number | string>>;

/**
 * Volume chart data points as [timestamp, volume_in_btc] pairs
 */
export type VolumeChartGetRangeResponse = Array<Array<number | string>>;

export interface VolumeChartGetParams {
  /**
   * Data up to number of days ago.
   */
  days: '1' | '7' | '14' | '30' | '90' | '180' | '365';
}

export interface VolumeChartGetRangeParams {
  /**
   * Starting date in UNIX timestamp.
   */
  from: number;

  /**
   * Ending date in UNIX timestamp.
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
