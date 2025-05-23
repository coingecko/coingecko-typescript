// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class MarketChart extends APIResource {
  /**
   * This endpoint allows you **query historical market data of a NFT collection,
   * including floor price, market cap, and 24hr volume, by number of days away from
   * now based on the provided contract address**
   *
   * @example
   * ```ts
   * const marketChart =
   *   await client.nfts.contract.marketChart.get(
   *     '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
   *     { asset_platform_id: 'ethereum', days: 'days' },
   *   );
   * ```
   */
  get(
    contractAddress: string,
    params: MarketChartGetParams,
    options?: RequestOptions,
  ): APIPromise<MarketChartGetResponse> {
    const { asset_platform_id, ...query } = params;
    return this._client.get(path`/nfts/${asset_platform_id}/contract/${contractAddress}/market_chart`, {
      query,
      ...options,
    });
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
   * Path param: asset platform ID \*refers to
   * [`/asset_platforms`](/reference/asset-platforms-list)
   */
  asset_platform_id: string;

  /**
   * Query param: data up to number of days ago Valid values: any integer or max
   */
  days: string;
}

export declare namespace MarketChart {
  export {
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetParams as MarketChartGetParams,
  };
}
