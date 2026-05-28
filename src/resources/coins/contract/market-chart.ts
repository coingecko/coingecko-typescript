// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class MarketChart extends APIResource {
  /**
   * To get the historical chart data including time in UNIX, price, market cap and
   * 24hrs volume based on asset platform and particular token contract address
   */
  get(
    contractAddress: string,
    params: MarketChartGetParams,
    options?: RequestOptions,
  ): APIPromise<MarketChartGetResponse> {
    const { id, ...query } = params;
    return this._client.get(path`/coins/${id}/contract/${contractAddress}/market_chart`, {
      query,
      ...options,
    });
  }

  /**
   * To get the historical chart data within certain time range in UNIX along with
   * price, market cap and 24hrs volume based on asset platform and particular token
   * contract address
   */
  getRange(
    contractAddress: string,
    params: MarketChartGetRangeParams,
    options?: RequestOptions,
  ): APIPromise<MarketChartGetRangeResponse> {
    const { id, ...query } = params;
    return this._client.get(path`/coins/${id}/contract/${contractAddress}/market_chart/range`, {
      query,
      ...options,
    });
  }
}

export interface MarketChartGetResponse {
  /**
   * Market cap data points as [timestamp, market_cap] pairs
   */
  market_caps: Array<Array<number>>;

  /**
   * Price data points as [timestamp, price] pairs
   */
  prices: Array<Array<number>>;

  /**
   * Total volume data points as [timestamp, volume] pairs
   */
  total_volumes: Array<Array<number>>;
}

export interface MarketChartGetRangeResponse {
  /**
   * Market cap data points as [timestamp, market_cap] pairs
   */
  market_caps: Array<Array<number>>;

  /**
   * Price data points as [timestamp, price] pairs
   */
  prices: Array<Array<number>>;

  /**
   * Total volume data points as [timestamp, volume] pairs
   */
  total_volumes: Array<Array<number>>;
}

export interface MarketChartGetParams {
  /**
   * Path param: Asset platform ID. \*refers to
   * [`/asset_platforms`](/reference/asset-platforms-list).
   */
  id: string;

  /**
   * Query param: Data up to number of days ago. You may use any integer or `max` for
   * number of days.
   */
  days: string;

  /**
   * Query param: Target currency of market data. \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;

  /**
   * Query param: Data interval, leave empty for auto granularity.
   */
  interval?: '5m' | 'hourly' | 'daily';

  /**
   * Query param: Decimal place for currency price value.
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

export interface MarketChartGetRangeParams {
  /**
   * Path param: Asset platform ID. \*refers to
   * [`/asset_platforms`](/reference/asset-platforms-list).
   */
  id: string;

  /**
   * Query param: Starting date in ISO date string (`YYYY-MM-DD` or
   * `YYYY-MM-DDTHH:MM`) or UNIX timestamp. **Use ISO date string for best
   * compatibility.**
   */
  from: string;

  /**
   * Query param: Ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`)
   * or UNIX timestamp. **Use ISO date string for best compatibility.**
   */
  to: string;

  /**
   * Query param: Target currency of market data. \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;

  /**
   * Query param: Data interval, leave empty for auto granularity.
   */
  interval?: '5m' | 'hourly' | 'daily';

  /**
   * Query param: Decimal place for currency price value.
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

export declare namespace MarketChart {
  export {
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetRangeResponse as MarketChartGetRangeResponse,
    type MarketChartGetParams as MarketChartGetParams,
    type MarketChartGetRangeParams as MarketChartGetRangeParams,
  };
}
