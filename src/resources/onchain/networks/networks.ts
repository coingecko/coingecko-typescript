// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DexesAPI from './dexes';
import { DexListParams, DexListResponse, DexListTopPoolsParams, Dexes } from './dexes';
import * as NewPoolsAPI from './new-pools';
import { NewPoolListByNetworkParams, NewPoolListParams, NewPools } from './new-pools';
import * as PoolsAPI from './pools';
import {
  PoolInfo,
  PoolListRecentTradesParams,
  PoolListRecentTradesResponse,
  PoolListTopParams,
  PoolRetrieveInfoParams,
  PoolRetrieveMultipleParams,
  PoolRetrieveOhlcvParams,
  PoolRetrieveOhlcvResponse,
  PoolRetrieveParams,
  Pools,
} from './pools';
import * as TokensAPI from './tokens';
import {
  Token,
  TokenInfo,
  TokenListTopHoldersParams,
  TokenListTopHoldersResponse,
  TokenListTopPoolsParams,
  TokenRetrieveInfoParams,
  TokenRetrieveMultipleParams,
  TokenRetrieveParams,
  Tokens,
} from './tokens';
import * as TrendingPoolsAPI from './trending-pools';
import {
  Pool,
  TrendingPoolListByNetworkParams,
  TrendingPoolListParams,
  TrendingPools,
} from './trending-pools';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Networks extends APIResource {
  dexes: DexesAPI.Dexes = new DexesAPI.Dexes(this._client);
  trendingPools: TrendingPoolsAPI.TrendingPools = new TrendingPoolsAPI.TrendingPools(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  newPools: NewPoolsAPI.NewPools = new NewPoolsAPI.NewPools(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);

  /**
   * This endpoint allows you to **query all the supported networks on
   * GeckoTerminal**
   *
   * @example
   * ```ts
   * const networks = await client.onchain.networks.list();
   * ```
   */
  list(
    query: NetworkListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworkListResponse> {
    return this._client.get('/onchain/networks', { query, ...options });
  }
}

export interface NetworkListResponse {
  data?: Array<NetworkListResponse.Data>;
}

export namespace NetworkListResponse {
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

export interface NetworkListParams {
  /**
   * page through results Default value: 1
   */
  page?: number;
}

Networks.Dexes = Dexes;
Networks.TrendingPools = TrendingPools;
Networks.Pools = Pools;
Networks.NewPools = NewPools;
Networks.Tokens = Tokens;

export declare namespace Networks {
  export { type NetworkListResponse as NetworkListResponse, type NetworkListParams as NetworkListParams };

  export {
    Dexes as Dexes,
    type DexListResponse as DexListResponse,
    type DexListParams as DexListParams,
    type DexListTopPoolsParams as DexListTopPoolsParams,
  };

  export {
    TrendingPools as TrendingPools,
    type Pool as Pool,
    type TrendingPoolListParams as TrendingPoolListParams,
    type TrendingPoolListByNetworkParams as TrendingPoolListByNetworkParams,
  };

  export {
    Pools as Pools,
    type PoolInfo as PoolInfo,
    type PoolListRecentTradesResponse as PoolListRecentTradesResponse,
    type PoolRetrieveOhlcvResponse as PoolRetrieveOhlcvResponse,
    type PoolRetrieveParams as PoolRetrieveParams,
    type PoolListRecentTradesParams as PoolListRecentTradesParams,
    type PoolListTopParams as PoolListTopParams,
    type PoolRetrieveInfoParams as PoolRetrieveInfoParams,
    type PoolRetrieveMultipleParams as PoolRetrieveMultipleParams,
    type PoolRetrieveOhlcvParams as PoolRetrieveOhlcvParams,
  };

  export {
    NewPools as NewPools,
    type NewPoolListParams as NewPoolListParams,
    type NewPoolListByNetworkParams as NewPoolListByNetworkParams,
  };

  export {
    Tokens as Tokens,
    type Token as Token,
    type TokenInfo as TokenInfo,
    type TokenListTopHoldersResponse as TokenListTopHoldersResponse,
    type TokenRetrieveParams as TokenRetrieveParams,
    type TokenListTopHoldersParams as TokenListTopHoldersParams,
    type TokenListTopPoolsParams as TokenListTopPoolsParams,
    type TokenRetrieveInfoParams as TokenRetrieveInfoParams,
    type TokenRetrieveMultipleParams as TokenRetrieveMultipleParams,
  };
}
