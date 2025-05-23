// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ListAPI from './list';
import { List, ListAllResponse, ListWithMarketDataParams, ListWithMarketDataResponse } from './list';

export class Categories extends APIResource {
  list: ListAPI.List = new ListAPI.List(this._client);
}

Categories.List = List;

export declare namespace Categories {
  export {
    List as List,
    type ListAllResponse as ListAllResponse,
    type ListWithMarketDataResponse as ListWithMarketDataResponse,
    type ListWithMarketDataParams as ListWithMarketDataParams,
  };
}
