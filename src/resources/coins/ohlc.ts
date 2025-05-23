// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Ohlc extends APIResource {
  /**
   * This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a
   * coin based on particular coin ID**
   *
   * @example
   * ```ts
   * const ohlcs = await client.coins.ohlc.get('bitcoin', {
   *   days: '1',
   *   vs_currency: 'usd',
   * });
   * ```
   */
  get(id: string, query: OhlcGetParams, options?: RequestOptions): APIPromise<OhlcGetResponse> {
    return this._client.get(path`/coins/${id}/ohlc`, { query, ...options });
  }

  /**
   * This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a
   * coin within a range of timestamp based on particular coin ID**
   *
   * @example
   * ```ts
   * const response = await client.coins.ohlc.getRange(
   *   'bitcoin',
   *   { from: 0, interval: 'daily', to: 0, vs_currency: 'usd' },
   * );
   * ```
   */
  getRange(
    id: string,
    query: OhlcGetRangeParams,
    options?: RequestOptions,
  ): APIPromise<OhlcGetRangeResponse> {
    return this._client.get(path`/coins/${id}/ohlc/range`, { query, ...options });
  }
}

export type OhlcGetResponse = Array<Array<number>>;

export type OhlcGetRangeResponse = Array<Array<number>>;

export interface OhlcGetParams {
  /**
   * data up to number of days ago
   */
  days: '1' | '7' | '14' | '30' | '90' | '180' | '365' | 'max';

  /**
   * target currency of price data \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;

  /**
   * data interval, leave empty for auto granularity
   */
  interval?: 'daily' | 'hourly';

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

export interface OhlcGetRangeParams {
  /**
   * starting date in UNIX timestamp
   */
  from: number;

  /**
   * data interval
   */
  interval: 'daily' | 'hourly';

  /**
   * ending date in UNIX timestamp
   */
  to: number;

  /**
   * target currency of price data \*refers to
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
