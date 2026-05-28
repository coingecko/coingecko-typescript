// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Ohlc extends APIResource {
  /**
   * To get the OHLC chart (Open, High, Low, Close) of a coin based on particular
   * coin ID
   */
  get(id: string, query: OhlcGetParams, options?: RequestOptions): APIPromise<OhlcGetResponse> {
    return this._client.get(path`/coins/${id}/ohlc`, { query, ...options });
  }

  /**
   * To get the OHLC chart (Open, High, Low, Close) of a coin within a range of
   * timestamp based on particular coin ID
   */
  getRange(
    id: string,
    query: OhlcGetRangeParams,
    options?: RequestOptions,
  ): APIPromise<OhlcGetRangeResponse> {
    return this._client.get(path`/coins/${id}/ohlc/range`, { query, ...options });
  }
}

/**
 * OHLC data points as [timestamp, open, high, low, close] arrays
 */
export type OhlcGetResponse = Array<Array<number>>;

/**
 * OHLC data points as [timestamp, open, high, low, close] arrays
 */
export type OhlcGetRangeResponse = Array<Array<number>>;

export interface OhlcGetParams {
  /**
   * Data up to number of days ago.
   */
  days: '1' | '7' | '14' | '30' | '90' | '180' | '365' | 'max';

  /**
   * Target currency of price data. \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;

  /**
   * Data interval, leave empty for auto granularity.
   */
  interval?: 'daily' | 'hourly';

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

export interface OhlcGetRangeParams {
  /**
   * Starting date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX
   * timestamp. **Use ISO date string for best compatibility.**
   */
  from: string;

  /**
   * Data interval.
   */
  interval: 'daily' | 'hourly';

  /**
   * Ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX
   * timestamp. **Use ISO date string for best compatibility.**
   */
  to: string;

  /**
   * Target currency of price data. \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;
}

export declare namespace Ohlc {
  export {
    type OhlcGetResponse as OhlcGetResponse,
    type OhlcGetRangeResponse as OhlcGetRangeResponse,
    type OhlcGetParams as OhlcGetParams,
    type OhlcGetRangeParams as OhlcGetRangeParams,
  };
}
