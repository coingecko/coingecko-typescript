// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CategoriesAPI from './categories';
import {
  Categories,
  CategoryGetParams,
  CategoryGetPoolsParams,
  CategoryGetPoolsResponse,
  CategoryGetResponse,
} from './categories';
import * as NetworksAPI from './networks/networks';
import { NetworkGetParams, NetworkGetResponse, Networks } from './networks/networks';
import * as PoolsAPI from './pools/pools';
import { Pools } from './pools/pools';
import * as SearchAPI from './search/search';
import { Search } from './search/search';
import * as SimpleAPI from './simple/simple';
import { Simple } from './simple/simple';
import * as TokensAPI from './tokens/tokens';
import { Tokens } from './tokens/tokens';

export class Onchain extends APIResource {
  categories: CategoriesAPI.Categories = new CategoriesAPI.Categories(this._client);
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  search: SearchAPI.Search = new SearchAPI.Search(this._client);
  simple: SimpleAPI.Simple = new SimpleAPI.Simple(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
}

Onchain.Categories = Categories;
Onchain.Networks = Networks;
Onchain.Pools = Pools;
Onchain.Search = Search;
Onchain.Simple = Simple;
Onchain.Tokens = Tokens;

export declare namespace Onchain {
  export {
    Categories as Categories,
    type CategoryGetResponse as CategoryGetResponse,
    type CategoryGetPoolsResponse as CategoryGetPoolsResponse,
    type CategoryGetParams as CategoryGetParams,
    type CategoryGetPoolsParams as CategoryGetPoolsParams,
  };

  export {
    Networks as Networks,
    type NetworkGetResponse as NetworkGetResponse,
    type NetworkGetParams as NetworkGetParams,
  };

  export { Pools as Pools };

  export { Search as Search };

  export { Simple as Simple };

  export { Tokens as Tokens };
}
