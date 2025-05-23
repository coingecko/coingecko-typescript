// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TrendingPoolsAPI from './trending-pools';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class NewPools extends APIResource {
  /**
   * This endpoint allows you to **query all the latest pools across all networks on
   * GeckoTerminal**
   *
   * @example
   * ```ts
   * const pool = await client.onchain.networks.newPools.list();
   * ```
   */
  list(
    query: NewPoolListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrendingPoolsAPI.Pool> {
    return this._client.get('/onchain/networks/new_pools', { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the latest pools based on provided
   * network**
   *
   * @example
   * ```ts
   * const pool =
   *   await client.onchain.networks.newPools.listByNetwork(
   *     'eth',
   *   );
   * ```
   */
  listByNetwork(
    network: string,
    query: NewPoolListByNetworkParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrendingPoolsAPI.Pool> {
    return this._client.get(path`/onchain/networks/${network}/new_pools`, { query, ...options });
  }
}

export interface NewPoolListParams {
  /**
   * attributes to include, comma-separated if more than one to include Available
   * values: `base_token`, `quote_token`, `dex`, `network`
   */
  include?: string;

  /**
   * page through results Default value: 1
   */
  page?: number;
}

export interface NewPoolListByNetworkParams {
  /**
   * attributes to include, comma-separated if more than one to include Available
   * values: `base_token`, `quote_token`, `dex`
   */
  include?: string;

  /**
   * page through results Default value: 1
   */
  page?: number;
}

export declare namespace NewPools {
  export {
    type NewPoolListParams as NewPoolListParams,
    type NewPoolListByNetworkParams as NewPoolListByNetworkParams,
  };
}
