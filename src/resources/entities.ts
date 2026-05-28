// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Entities extends APIResource {
  /**
   * To query all the supported entities on CoinGecko with entity ID, name, symbol,
   * and country
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
     * Entity ID
     */
    id: string;

    /**
     * Country code
     */
    country: string;

    /**
     * Entity name
     */
    name: string;

    /**
     * Ticker symbol of public company
     */
    symbol: string;
  }
}

export interface EntityGetListParams {
  /**
   * Filter by entity type.
   */
  entity_type?: 'company' | 'government';

  /**
   * Page through results. Default value: 1
   */
  page?: number;

  /**
   * Total results per page. Default value: 100 Valid values: 1...250
   */
  per_page?: number;
}

export declare namespace Entities {
  export {
    type EntityGetListResponse as EntityGetListResponse,
    type EntityGetListParams as EntityGetListParams,
  };
}
