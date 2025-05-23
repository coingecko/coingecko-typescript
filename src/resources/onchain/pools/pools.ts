// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MegafilterAPI from './megafilter';
import { Megafilter, MegafilterGetParams, MegafilterGetResponse } from './megafilter';
import * as TrendingSearchAPI from './trending-search';
import { TrendingSearch, TrendingSearchGetParams, TrendingSearchGetResponse } from './trending-search';

export class Pools extends APIResource {
  megafilter: MegafilterAPI.Megafilter = new MegafilterAPI.Megafilter(this._client);
  trendingSearch: TrendingSearchAPI.TrendingSearch = new TrendingSearchAPI.TrendingSearch(this._client);
}

Pools.Megafilter = Megafilter;
Pools.TrendingSearch = TrendingSearch;

export declare namespace Pools {
  export {
    Megafilter as Megafilter,
    type MegafilterGetResponse as MegafilterGetResponse,
    type MegafilterGetParams as MegafilterGetParams,
  };

  export {
    TrendingSearch as TrendingSearch,
    type TrendingSearchGetResponse as TrendingSearchGetResponse,
    type TrendingSearchGetParams as TrendingSearchGetParams,
  };
}
