// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DexesAPI from './dexes';
import { DexGetParams, DexGetPoolsParams, DexGetPoolsResponse, DexGetResponse, Dexes } from './dexes';
import * as NewPoolsAPI from './new-pools';
import {
  NewPoolGetNetworkParams,
  NewPoolGetNetworkResponse,
  NewPoolGetParams,
  NewPoolGetResponse,
  NewPools,
} from './new-pools';
import * as TrendingPoolsAPI from './trending-pools';
import {
  TrendingPoolGetNetworkParams,
  TrendingPoolGetNetworkResponse,
  TrendingPoolGetParams,
  TrendingPoolGetResponse,
  TrendingPools,
} from './trending-pools';
import * as PoolsAPI from './pools/pools';
import {
  PoolGetAddressParams,
  PoolGetAddressResponse,
  PoolGetParams,
  PoolGetResponse,
  Pools,
} from './pools/pools';
import * as TokensAPI from './tokens/tokens';
import { TokenGetAddressParams, TokenGetAddressResponse, Tokens } from './tokens/tokens';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Networks extends APIResource {
  newPools: NewPoolsAPI.NewPools = new NewPoolsAPI.NewPools(this._client);
  trendingPools: TrendingPoolsAPI.TrendingPools = new TrendingPoolsAPI.TrendingPools(this._client);
  dexes: DexesAPI.Dexes = new DexesAPI.Dexes(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);

  /**
   * This endpoint allows you to **query all the supported networks on
   * GeckoTerminal**
   *
   * @example
   * ```ts
   * const network = await client.onchain.networks.get();
   * ```
   */
  get(
    query: NetworkGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworkGetResponse> {
    return this._client.get('/onchain/networks', { query, ...options });
  }
}

export interface NetworkGetResponse {
  data?: Array<NetworkGetResponse.Data>;
}

export namespace NetworkGetResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      coingecko_asset_platform_id?: string;

      name?: string;
    }
  }
}

export interface NetworkGetParams {
  /**
   * page through results Default value: 1
   */
  page?: number;
}

Networks.NewPools = NewPools;
Networks.TrendingPools = TrendingPools;
Networks.Dexes = Dexes;
Networks.Pools = Pools;
Networks.Tokens = Tokens;

export declare namespace Networks {
  export { type NetworkGetResponse as NetworkGetResponse, type NetworkGetParams as NetworkGetParams };

  export {
    NewPools as NewPools,
    type NewPoolGetResponse as NewPoolGetResponse,
    type NewPoolGetNetworkResponse as NewPoolGetNetworkResponse,
    type NewPoolGetParams as NewPoolGetParams,
    type NewPoolGetNetworkParams as NewPoolGetNetworkParams,
  };

  export {
    TrendingPools as TrendingPools,
    type TrendingPoolGetResponse as TrendingPoolGetResponse,
    type TrendingPoolGetNetworkResponse as TrendingPoolGetNetworkResponse,
    type TrendingPoolGetParams as TrendingPoolGetParams,
    type TrendingPoolGetNetworkParams as TrendingPoolGetNetworkParams,
  };

  export {
    Dexes as Dexes,
    type DexGetResponse as DexGetResponse,
    type DexGetPoolsResponse as DexGetPoolsResponse,
    type DexGetParams as DexGetParams,
    type DexGetPoolsParams as DexGetPoolsParams,
  };

  export {
    Pools as Pools,
    type PoolGetResponse as PoolGetResponse,
    type PoolGetAddressResponse as PoolGetAddressResponse,
    type PoolGetParams as PoolGetParams,
    type PoolGetAddressParams as PoolGetAddressParams,
  };

  export {
    Tokens as Tokens,
    type TokenGetAddressResponse as TokenGetAddressResponse,
    type TokenGetAddressParams as TokenGetAddressParams,
  };
}
