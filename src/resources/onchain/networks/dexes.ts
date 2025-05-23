// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TrendingPoolsAPI from './trending-pools';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Dexes extends APIResource {
  /**
   * This endpoint allows you to **query all the supported decentralized exchanges
   * (DEXs) based on the provided network on GeckoTerminal**
   *
   * @example
   * ```ts
   * const dexes = await client.onchain.networks.dexes.list(
   *   'eth',
   * );
   * ```
   */
  list(
    network: string,
    query: DexListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DexListResponse> {
    return this._client.get(path`/onchain/networks/${network}/dexes`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the top pools based on the provided
   * network and decentralized exchange (DEX)**
   *
   * @example
   * ```ts
   * const pool =
   *   await client.onchain.networks.dexes.listTopPools(
   *     'sushiswap',
   *     { network: 'eth' },
   *   );
   * ```
   */
  listTopPools(
    dex: string,
    params: DexListTopPoolsParams,
    options?: RequestOptions,
  ): APIPromise<TrendingPoolsAPI.Pool> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/dexes/${dex}/pools`, { query, ...options });
  }
}

export interface DexListResponse {
  data?: Array<DexListResponse.Data>;
}

export namespace DexListResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      name?: string;
    }
  }
}

export interface DexListParams {
  /**
   * page through results Default value: 1
   */
  page?: number;
}

export interface DexListTopPoolsParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: attributes to include, comma-separated if more than one to include
   * Available values: `base_token`, `quote_token`, `dex`
   */
  include?: string;

  /**
   * Query param: page through results Default value: 1
   */
  page?: number;

  /**
   * Query param: sort the pools by field Default value: h24_tx_count_desc
   */
  sort?: 'h24_tx_count_desc' | 'h24_volume_usd_desc';
}

export declare namespace Dexes {
  export {
    type DexListResponse as DexListResponse,
    type DexListParams as DexListParams,
    type DexListTopPoolsParams as DexListTopPoolsParams,
  };
}
