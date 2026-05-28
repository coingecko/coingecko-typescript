// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TrendingAPI from './trending';
import { Trending, TrendingGetParams, TrendingGetResponse } from './trending';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Search extends APIResource {
  trending: TrendingAPI.Trending = new TrendingAPI.Trending(this._client);

  /**
   * To search for coins, categories and markets listed on CoinGecko
   */
  get(query: SearchGetParams, options?: RequestOptions): APIPromise<SearchGetResponse> {
    return this._client.get('/search', { query, ...options });
  }
}

export interface SearchGetResponse {
  categories: Array<SearchGetResponse.Category>;

  coins: Array<SearchGetResponse.Coin>;

  exchanges: Array<SearchGetResponse.Exchange>;

  icos: Array<SearchGetResponse.Ico>;

  nfts: Array<SearchGetResponse.NFT>;
}

export namespace SearchGetResponse {
  export interface Category {
    /**
     * Category ID
     */
    id: string;

    /**
     * Category name
     */
    name: string;
  }

  export interface Coin {
    /**
     * Coin ID
     */
    id: string;

    /**
     * Coin API symbol
     */
    api_symbol: string;

    /**
     * Coin large image URL
     */
    large: string;

    /**
     * Coin market cap rank
     */
    market_cap_rank: number | null;

    /**
     * Coin name
     */
    name: string;

    /**
     * Coin symbol
     */
    symbol: string;

    /**
     * Coin thumb image URL
     */
    thumb: string;
  }

  export interface Exchange {
    /**
     * Exchange ID
     */
    id: string;

    /**
     * Exchange large image URL
     */
    large: string;

    /**
     * Exchange market type
     */
    market_type: string;

    /**
     * Exchange name
     */
    name: string;

    /**
     * Exchange thumb image URL
     */
    thumb: string;
  }

  export interface Ico {}

  export interface NFT {
    /**
     * NFT collection ID
     */
    id: string;

    /**
     * NFT collection name
     */
    name: string;

    /**
     * NFT collection symbol
     */
    symbol: string;

    /**
     * NFT collection thumb image URL
     */
    thumb: string;
  }
}

export interface SearchGetParams {
  /**
   * Search query
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
