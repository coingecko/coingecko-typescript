// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class MarketChart extends APIResource {
  /**
   * To query historical market data of a NFT collection, including floor price,
   * market cap, and 24hr volume, by number of days away from now
   */
  get(id: string, query: MarketChartGetParams, options?: RequestOptions): APIPromise<MarketChartGetResponse> {
    return this._client.get(path`/nfts/${id}/market_chart`, { query, ...options });
  }
}

export interface MarketChartGetResponse {
  /**
   * NFT collection floor price in native currency as [timestamp, price] pairs
   */
  floor_price_native: Array<Array<number>>;

  /**
   * NFT collection floor price in USD as [timestamp, price] pairs
   */
  floor_price_usd: Array<Array<number>>;

  /**
   * NFT collection 24h volume in native currency as [timestamp, volume] pairs
   */
  h24_volume_native: Array<Array<number>>;

  /**
   * NFT collection 24h volume in USD as [timestamp, volume] pairs
   */
  h24_volume_usd: Array<Array<number>>;

  /**
   * NFT collection market cap in native currency as [timestamp, market_cap] pairs
   */
  market_cap_native: Array<Array<number>>;

  /**
   * NFT collection market cap in USD as [timestamp, market_cap] pairs
   */
  market_cap_usd: Array<Array<number>>;
}

export interface MarketChartGetParams {
  /**
   * Data up to number of days ago. Valid values: any integer or `max`
   */
  days: string;
}

export declare namespace MarketChart {
  export {
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetParams as MarketChartGetParams,
  };
}
