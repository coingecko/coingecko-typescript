// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TrendingAPI from './trending';
import { Trending, TrendingGetParams, TrendingGetResponse } from './trending';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Search extends APIResource {
  trending: TrendingAPI.Trending = new TrendingAPI.Trending(this._client);

  /**
   * This endpoint allows you to **search for coins, categories and markets listed on
   * CoinGecko**
   *
   * @example
   * ```ts
   * const search = await client.search.get({ query: 'query' });
   * ```
   */
  get(query: SearchGetParams, options?: RequestOptions): APIPromise<SearchGetResponse> {
    return this._client.get('/search', { query, ...options });
  }
}

export interface SearchGetResponse {
  categories?: Array<SearchGetResponse.Category>;

  coins?: Array<SearchGetResponse.Coin>;

  exchanges?: Array<SearchGetResponse.Exchange>;

  icos?: Array<string>;

  nfts?: Array<SearchGetResponse.NFT>;
}

export namespace SearchGetResponse {
  export interface Category {
    /**
     * category ID
     */
    id?: string;

    /**
     * category name
     */
    name?: string;
  }

  export interface Coin {
    /**
     * coin ID
     */
    id?: string;

    /**
     * coin api symbol
     */
    api_symbol?: string;

    /**
     * coin large image url
     */
    large?: string;

    /**
     * coin market cap rank
     */
    market_cap_rank?: number;

    /**
     * coin name
     */
    name?: string;

    /**
     * coin symbol
     */
    symbol?: string;

    /**
     * coin thumb image url
     */
    thumb?: string;
  }

  export interface Exchange {
    /**
     * exchange ID
     */
    id?: string;

    /**
     * exchange large image url
     */
    large?: string;

    /**
     * exchange market type
     */
    market_type?: string;

    /**
     * exchange name
     */
    name?: string;

    /**
     * exchange thumb image url
     */
    thumb?: string;
  }

  export interface NFT {
    /**
     * NFT collection ID
     */
    id?: string;

    /**
     * NFT name
     */
    name?: string;

    /**
     * NFT collection symbol
     */
    symbol?: string;

    /**
     * NFT collection thumb image url
     */
    thumb?: string;
  }
}

export interface SearchGetParams {
  /**
   * search query
   */
  query: string;
}

Search.Trending = Trending;

export declare namespace Search {
  export { type SearchGetResponse as SearchGetResponse, type SearchGetParams as SearchGetParams };

  export {
    Trending as Trending,
    type TrendingGetResponse as TrendingGetResponse,
    type TrendingGetParams as TrendingGetParams,
  };
}
