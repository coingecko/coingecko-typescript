// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Underlyings extends APIResource {
  /**
   * To query all the supported derivatives underlying assets with price, open
   * interest, funding rate and volume data
   */
  get(
    query: UnderlyingGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnderlyingGetResponse> {
    return this._client.get('/derivatives/underlyings', { query, ...options });
  }

  /**
   * To query all the supported derivatives underlying assets with ID, name, symbol
   * and underlying type
   */
  getList(
    query: UnderlyingGetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<UnderlyingGetListResponse> {
    return this._client.get('/derivatives/underlyings/list', { query, ...options });
  }
}

export type UnderlyingGetResponse = Array<UnderlyingGetResponse.UnderlyingGetResponseItem>;

export namespace UnderlyingGetResponse {
  export interface UnderlyingGetResponseItem {
    /**
     * Underlying asset ID (coin ID or RWA ID)
     */
    id: string;

    /**
     * Underlying asset price in USD
     */
    current_price: number;

    /**
     * Derivative funding rate
     */
    funding_rate: number;

    /**
     * Underlying asset name
     */
    name: string;

    /**
     * Derivative open interest in USD
     */
    open_interest: number | null;

    /**
     * Derivative 1-hour open interest change percentage
     */
    open_interest_change_percentage_1h: number;

    /**
     * Derivative 24-hour open interest change percentage
     */
    open_interest_change_percentage_24h: number;

    /**
     * Underlying asset 24-hour price change percentage
     */
    price_change_percentage_24h: number;

    /**
     * Underlying asset symbol
     */
    symbol: string;

    /**
     * Derivative total trading volume in USD
     */
    total_volume: number | null;

    /**
     * Underlying asset type
     */
    underlying_type: 'coin' | 'rwa';
  }
}

export type UnderlyingGetListResponse = Array<UnderlyingGetListResponse.UnderlyingGetListResponseItem>;

export namespace UnderlyingGetListResponse {
  export interface UnderlyingGetListResponseItem {
    /**
     * Underlying asset ID (coin ID or RWA ID)
     */
    id: string;

    /**
     * Underlying asset name
     */
    name: string;

    /**
     * Underlying asset symbol
     */
    symbol: string;

    /**
     * Underlying asset type
     */
    underlying_type: 'coin' | 'rwa';
  }
}

export interface UnderlyingGetParams {
  /**
   * Coins' IDs, comma-separated if querying more than 1 coin. \*refers to
   * [`/coins/list`](/reference/coins-list)
   */
  coin_ids?: string;

  /**
   * Sort result by field. Default: open_interest_desc
   */
  order?: 'open_interest_desc' | 'open_interest_asc' | 'volume_desc' | 'volume_asc';

  /**
   * Page through results. Default: 1
   */
  page?: number;

  /**
   * Total results per page. Default: 100 Valid values: 1...250
   */
  per_page?: number;

  /**
   * RWAs' IDs, comma-separated if querying more than 1 RWA. \*refers to
   * [`/rwas/list`](/reference/rwas-list)
   */
  rwa_ids?: string;

  /**
   * Filter by underlying type.
   */
  underlying_type?: 'coin' | 'rwa';
}

export interface UnderlyingGetListParams {
  /**
   * Filter by underlying type.
   */
  underlying_type?: 'coin' | 'rwa';
}

export declare namespace Underlyings {
  export {
    type UnderlyingGetResponse as UnderlyingGetResponse,
    type UnderlyingGetListResponse as UnderlyingGetListResponse,
    type UnderlyingGetParams as UnderlyingGetParams,
    type UnderlyingGetListParams as UnderlyingGetListParams,
  };
}
