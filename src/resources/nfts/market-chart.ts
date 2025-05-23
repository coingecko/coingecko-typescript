// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MarketChart extends APIResource {
  /**
   * This endpoint allows you **query historical market data of a NFT collection,
   * including floor price, market cap, and 24hr volume, by number of days away from
   * now**
   *
   * @example
   * ```ts
   * const marketChart = await client.nfts.marketChart.get(
   *   'pudgy-penguins',
   *   { days: 'days' },
   * );
   * ```
   */
  get(id: string, query: MarketChartGetParams, options?: RequestOptions): APIPromise<MarketChartGetResponse> {
    return this._client.get(path`/nfts/${id}/market_chart`, { query, ...options });
  }
}

export interface MarketChartGetResponse {
  /**
   * NFT collection floor price in native currency
   */
  floor_price_native?: Array<Array<number>>;

  /**
   * NFT collection floor price in usd
   */
  floor_price_usd?: Array<Array<number>>;

  /**
   * NFT collection volume in 24 hours in native currency
   */
  h24_volume_native?: Array<Array<number>>;

  /**
   * NFT collection volume in 24 hours in usd
   */
  h24_volume_usd?: Array<Array<number>>;

  /**
   * NFT collection market cap in native currency
   */
  market_cap_native?: Array<Array<number>>;

  /**
   * NFT collection market cap in usd
   */
  market_cap_usd?: Array<Array<number>>;
}

export interface MarketChartGetParams {
  /**
   * data up to number of days Valid values: any integer or max
   */
  days: string;
}

export declare namespace MarketChart {
  export {
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetParams as MarketChartGetParams,
  };
}
