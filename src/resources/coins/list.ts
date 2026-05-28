// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class List extends APIResource {
  /**
   * To query all the supported coins on CoinGecko with coin ID, name and symbol
   */
  get(query: ListGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<ListGetResponse> {
    return this._client.get('/coins/list', { query, ...options });
  }

  /**
   * To query the latest 200 coins that recently listed on CoinGecko
   */
  getNew(options?: RequestOptions): APIPromise<ListGetNewResponse> {
    return this._client.get('/coins/list/new', options);
  }
}

export type ListGetResponse = Array<ListGetResponse.ListGetResponseItem>;

export namespace ListGetResponse {
  export interface ListGetResponseItem {
    /**
     * Coin ID
     */
    id: string;

    /**
     * Coin name
     */
    name: string;

    /**
     * Coin symbol
     */
    symbol: string;

    /**
     * Asset platform and contract address
     */
    platforms?: { [key: string]: string | null };
  }
}

export type ListGetNewResponse = Array<ListGetNewResponse.ListGetNewResponseItem>;

export namespace ListGetNewResponse {
  export interface ListGetNewResponseItem {
    /**
     * Coin ID
     */
    id: string;

    /**
     * Timestamp when coin was activated on CoinGecko
     */
    activated_at: number;

    /**
     * Coin name
     */
    name: string;

    /**
     * Coin symbol
     */
    symbol: string;
  }
}

export interface ListGetParams {
  /**
   * Include platform and token's contract addresses. Default: false
   */
  include_platform?: boolean;

  /**
   * Filter by status of coins. Default: active
   */
  status?: 'active' | 'inactive';
}

export declare namespace List {
  export {
    type ListGetResponse as ListGetResponse,
    type ListGetNewResponse as ListGetNewResponse,
    type ListGetParams as ListGetParams,
  };
}
