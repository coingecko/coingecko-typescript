// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PoolsAPI from './pools';
import { PoolGetParams, PoolGetResponse, Pools } from './pools';

export class Search extends APIResource {
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
}

Search.Pools = Pools;

export declare namespace Search {
  export { Pools as Pools, type PoolGetResponse as PoolGetResponse, type PoolGetParams as PoolGetParams };
}
