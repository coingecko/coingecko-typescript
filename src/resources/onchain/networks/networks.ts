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
  PoolAddressItem,
  PoolGetAddressParams,
  PoolGetAddressResponse,
  PoolGetParams,
  PoolGetResponse,
  Pools,
} from './pools/pools';
import * as TokensAPI from './tokens/tokens';
import { TokenGetAddressParams, TokenGetAddressResponse, TokenItem, Tokens } from './tokens/tokens';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Networks extends APIResource {
  dexes: DexesAPI.Dexes = new DexesAPI.Dexes(this._client);
  newPools: NewPoolsAPI.NewPools = new NewPoolsAPI.NewPools(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
  trendingPools: TrendingPoolsAPI.TrendingPools = new TrendingPoolsAPI.TrendingPools(this._client);

  /**
   * To retrieve a list of all supported networks on GeckoTerminal
   */
  get(
    query: NetworkGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworkGetResponse> {
    return this._client.get('/onchain/networks', { query, ...options });
  }
}

export interface NetworkGetResponse {
  data: Array<NetworkGetResponse.Data>;
}

export namespace NetworkGetResponse {
  export interface Data {
    /**
     * Network identifier
     */
    id: string;

    attributes: Data.Attributes;

    /**
     * Resource type
     */
    type: string;
  }

  export namespace Data {
    export interface Attributes {
      /**
       * Corresponding CoinGecko asset platform ID
       */
      coingecko_asset_platform_id: string;

      /**
       * Network name
       */
      name: string;
    }
  }
}

export interface NetworkGetParams {
  /**
   * Page through results. Default value: 1
   */
  page?: number;
}

Networks.Dexes = Dexes;
Networks.NewPools = NewPools;
Networks.Pools = Pools;
Networks.Tokens = Tokens;
Networks.TrendingPools = TrendingPools;

export declare namespace Networks {
  export { type NetworkGetResponse as NetworkGetResponse, type NetworkGetParams as NetworkGetParams };

  export {
    Dexes as Dexes,
    type DexGetResponse as DexGetResponse,
    type DexGetPoolsResponse as DexGetPoolsResponse,
    type DexGetPoolsParams as DexGetPoolsParams,
    type DexGetParams as DexGetParams,
  };

  export {
    NewPools as NewPools,
    type NewPoolGetResponse as NewPoolGetResponse,
    type NewPoolGetNetworkResponse as NewPoolGetNetworkResponse,
    type NewPoolGetParams as NewPoolGetParams,
    type NewPoolGetNetworkParams as NewPoolGetNetworkParams,
  };

  export {
    Pools as Pools,
    type PoolAddressItem as PoolAddressItem,
    type PoolGetResponse as PoolGetResponse,
    type PoolGetAddressResponse as PoolGetAddressResponse,
    type PoolGetAddressParams as PoolGetAddressParams,
    type PoolGetParams as PoolGetParams,
  };

  export {
    Tokens as Tokens,
    type TokenItem as TokenItem,
    type TokenGetAddressResponse as TokenGetAddressResponse,
    type TokenGetAddressParams as TokenGetAddressParams,
  };

  export {
    TrendingPools as TrendingPools,
    type TrendingPoolGetResponse as TrendingPoolGetResponse,
    type TrendingPoolGetNetworkResponse as TrendingPoolGetNetworkResponse,
    type TrendingPoolGetParams as TrendingPoolGetParams,
    type TrendingPoolGetNetworkParams as TrendingPoolGetNetworkParams,
  };
}
