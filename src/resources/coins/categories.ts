// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Categories extends APIResource {
  /**
   * To query all the supported coins categories on CoinGecko
   */
  getList(options?: RequestOptions): APIPromise<CategoryGetListResponse> {
    return this._client.get('/coins/categories/list', options);
  }

  /**
   * To query all the coins categories with market data (market cap, volume, etc.) on
   * CoinGecko
   */
  get(
    query: CategoryGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryGetResponse> {
    return this._client.get('/coins/categories', { query, ...options });
  }
}

export type CategoryGetResponse = Array<CategoryGetResponse.CategoryGetResponseItem>;

export namespace CategoryGetResponse {
  export interface CategoryGetResponseItem {
    /**
     * Category ID
     */
    id: string;

    /**
     * Category description
     */
    content: string;

    /**
     * Category market cap
     */
    market_cap: number;

    /**
     * Category market cap change in 24 hours
     */
    market_cap_change_24h: number;

    /**
     * Category name
     */
    name: string;

    /**
     * Image URLs of top 3 coins in the category
     */
    top_3_coins: Array<string>;

    /**
     * IDs of top 3 coins in the category
     */
    top_3_coins_id: Array<string>;

    /**
     * Category last updated timestamp
     */
    updated_at: string;

    /**
     * Category trading volume in 24 hours
     */
    volume_24h: number;
  }
}

export type CategoryGetListResponse = Array<CategoryGetListResponse.CategoryGetListResponseItem>;

export namespace CategoryGetListResponse {
  export interface CategoryGetListResponseItem {
    /**
     * Category ID
     */
    category_id: string;

    /**
     * Category name
     */
    name: string;
  }
}

export interface CategoryGetParams {
  /**
   * Sort results by field. Default: `market_cap_desc`
   */
  order?:
    | 'market_cap_desc'
    | 'market_cap_asc'
    | 'name_desc'
    | 'name_asc'
    | 'market_cap_change_24h_desc'
    | 'market_cap_change_24h_asc';
}

export declare namespace Categories {
  export {
    type CategoryGetResponse as CategoryGetResponse,
    type CategoryGetListResponse as CategoryGetListResponse,
    type CategoryGetParams as CategoryGetParams,
  };
}
