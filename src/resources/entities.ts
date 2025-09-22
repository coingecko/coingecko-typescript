// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Entities extends APIResource {
  /**
   * This endpoint allows you to **query all the supported entities on CoinGecko with
   * entities ID, name, symbol, and country**
   *
   * @example
   * ```ts
   * const response = await client.entities.getList();
   * ```
   */
  getList(
    query: EntityGetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<EntityGetListResponse> {
    return this._client.get('/entities/list', { query, ...options });
  }
}

export type EntityGetListResponse = Array<EntityGetListResponse.EntityGetListResponseItem>;

export namespace EntityGetListResponse {
  export interface EntityGetListResponseItem {
    /**
     * entity ID
     */
    id?: string;

    /**
     * country code
     */
    country?: string;

    /**
     * entity name
     */
    name?: string;

    /**
     * ticker symbol of public company
     */
    symbol?: string;
  }
}

export interface EntityGetListParams {
  /**
   * filter by entity type, default: false
   */
  entity_type?: 'company' | 'government';

  /**
   * page through results, default: 1
   */
  page?: number;

  /**
   * total results per page, default: 100 Valid values: 1...250
   */
  per_page?: number;
}

export declare namespace Entities {
  export {
    type EntityGetListResponse as EntityGetListResponse,
    type EntityGetListParams as EntityGetListParams,
  };
}
