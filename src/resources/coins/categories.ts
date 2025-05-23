// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Categories extends APIResource {
  /**
   * This endpoint allows you to **query all the coins categories with market data
   * (market cap, volume, ...) on CoinGecko**
   *
   * @example
   * ```ts
   * const category = await client.coins.categories.get();
   * ```
   */
  get(
    query: CategoryGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryGetResponse> {
    return this._client.get('/coins/categories', { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the coins categories on CoinGecko**
   *
   * @example
   * ```ts
   * const response = await client.coins.categories.getList();
   * ```
   */
  getList(options?: RequestOptions): APIPromise<CategoryGetListResponse> {
    return this._client.get('/coins/categories/list', options);
  }
}

export interface CategoryGetResponse {
  /**
   * category ID
   */
  id?: string;

  /**
   * category description
   */
  content?: string;

  /**
   * category market cap
   */
  market_cap?: number;

  /**
   * category market cap change in 24 hours
   */
  market_cap_change_24h?: number;

  /**
   * category name
   */
  name?: string;

  /**
   * images of top 3 coins in the category
   */
  top_3_coins?: Array<string>;

  /**
   * IDs of top 3 coins in the category
   */
  top_3_coins_id?: Array<string>;

  /**
   * category last updated time
   */
  updated_at?: string;

  /**
   * category volume in 24 hours
   */
  volume_24h?: number;
}

export interface CategoryGetListResponse {
  /**
   * category ID
   */
  category_id?: string;

  /**
   * category name
   */
  name?: string;
}

export interface CategoryGetParams {
  /**
   * sort results by field, default: market_cap_desc
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
