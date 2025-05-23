// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TrendingPoolsAPI from './networks/trending-pools';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Search extends APIResource {
  /**
   * This endpoint allows you to **search for pools on a network**
   *
   * @example
   * ```ts
   * const pool = await client.onchain.search.pools();
   * ```
   */
  pools(
    query: SearchPoolsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrendingPoolsAPI.Pool> {
    return this._client.get('/onchain/search/pools', { query, ...options });
  }
}

export interface SearchPoolsParams {
  /**
   * attributes to include, comma-separated if more than one to include Available
   * values: `base_token`, `quote_token`, `dex`
   */
  include?: string;

  /**
   * network ID \*refers to [/networks](/reference/networks-list)
   */
  network?: string;

  /**
   * page through results Default value: 1
   */
  page?: number;

  /**
   * search query
   */
  query?: string;
}

export declare namespace Search {
  export { type SearchPoolsParams as SearchPoolsParams };
}
