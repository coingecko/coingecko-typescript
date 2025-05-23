// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MarketChart extends APIResource {
  /**
   * This endpoint allows you to **get the historical chart data of a coin including
   * time in UNIX, price, market cap and 24hr volume based on particular coin ID**
   *
   * @example
   * ```ts
   * const coinsMarketChart =
   *   await client.coins.marketChart.retrieveByID('bitcoin', {
   *     days: 'days',
   *     vs_currency: 'usd',
   *   });
   * ```
   */
  retrieveByID(
    id: string,
    query: MarketChartRetrieveByIDParams,
    options?: RequestOptions,
  ): APIPromise<CoinsMarketChart> {
    return this._client.get(path`/coins/${id}/market_chart`, { query, ...options });
  }

  /**
   * This endpoint allows you to **get the historical chart data of a coin within
   * certain time range in UNIX along with price, market cap and 24hr volume based on
   * particular coin ID**
   *
   * @example
   * ```ts
   * const coinsMarketChartRange =
   *   await client.coins.marketChart.retrieveRangeByID(
   *     'bitcoin',
   *     { from: 0, to: 0, vs_currency: 'usd' },
   *   );
   * ```
   */
  retrieveRangeByID(
    id: string,
    query: MarketChartRetrieveRangeByIDParams,
    options?: RequestOptions,
  ): APIPromise<CoinsMarketChartRange> {
    return this._client.get(path`/coins/${id}/market_chart/range`, { query, ...options });
  }
}

export interface CoinsMarketChart {
  market_caps?: Array<Array<number>>;

  prices?: Array<Array<number>>;

  total_volumes?: Array<Array<number>>;
}

export interface CoinsMarketChartRange {
  market_caps?: Array<Array<number>>;

  prices?: Array<Array<number>>;

  total_volumes?: Array<Array<number>>;
}

export interface MarketChartRetrieveByIDParams {
  /**
   * data up to number of days ago You may use any integer or `max` for number of
   * days
   */
  days: string;

  /**
   * target currency of market data \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;

  /**
   * data interval, leave empty for auto granularity
   */
  interval?: '5m' | 'hourly' | 'daily';

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

export interface MarketChartRetrieveRangeByIDParams {
  /**
   * starting date in UNIX timestamp
   */
  from: number;

  /**
   * ending date in UNIX timestamp
   */
  to: number;

  /**
   * target currency of market data \*refers to
   * [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).
   */
  vs_currency: string;

  /**
   * data interval, leave empty for auto granularity
   */
  interval?: '5m' | 'hourly' | 'daily';

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

export declare namespace MarketChart {
  export {
    type CoinsMarketChart as CoinsMarketChart,
    type CoinsMarketChartRange as CoinsMarketChartRange,
    type MarketChartRetrieveByIDParams as MarketChartRetrieveByIDParams,
    type MarketChartRetrieveRangeByIDParams as MarketChartRetrieveRangeByIDParams,
  };
}
