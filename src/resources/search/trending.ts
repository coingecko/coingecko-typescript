// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Trending extends APIResource {
  /**
   * This endpoint allows you **query trending search coins, NFTs and categories on
   * CoinGecko in the last 24 hours**
   *
   * @example
   * ```ts
   * const trending = await client.search.trending.get();
   * ```
   */
  get(
    query: TrendingGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrendingGetResponse> {
    return this._client.get('/search/trending', { query, ...options });
  }
}

export interface TrendingGetResponse {
  categories?: Array<TrendingGetResponse.Category>;

  coins?: Array<TrendingGetResponse.Coin>;

  nfts?: Array<TrendingGetResponse.NFT>;
}

export namespace TrendingGetResponse {
  export interface Category {
    id?: number;

    /**
     * category number of coins
     */
    coins_count?: number;

    data?: Category.Data;

    /**
     * category market cap 1 hour change
     */
    market_cap_1h_change?: number;

    /**
     * category name
     */
    name?: string;

    /**
     * category web slug
     */
    slug?: string;
  }

  export namespace Category {
    export interface Data {
      /**
       * category market cap
       */
      market_cap?: number;

      /**
       * category market cap in btc
       */
      market_cap_btc?: number;

      /**
       * category market cap change percentage in 24 hours
       */
      market_cap_change_percentage_24h?: Data.MarketCapChangePercentage24h;

      /**
       * category sparkline image url
       */
      sparkline?: string;

      /**
       * category total volume
       */
      total_volume?: number;

      /**
       * category total volume in btc
       */
      total_volume_btc?: number;
    }

    export namespace Data {
      /**
       * category market cap change percentage in 24 hours
       */
      export interface MarketCapChangePercentage24h {
        btc?: number;

        usd?: number;
      }
    }
  }

  export interface Coin {
    /**
     * coin ID
     */
    id?: string;

    coin_id?: number;

    data?: Coin.Data;

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
     * coin price in btc
     */
    price_btc?: number;

    /**
     * coin sequence in the list
     */
    score?: number;

    /**
     * coin web slug
     */
    slug?: string;

    /**
     * coin small image url
     */
    small?: string;

    /**
     * coin symbol
     */
    symbol?: string;

    /**
     * coin thumb image url
     */
    thumb?: string;
  }

  export namespace Coin {
    export interface Data {
      content?: string;

      /**
       * coin market cap in usd
       */
      market_cap?: string;

      /**
       * coin market cap in btc
       */
      market_cap_btc?: string;

      /**
       * coin price in usd
       */
      price?: number;

      /**
       * coin price in btc
       */
      price_btc?: string;

      /**
       * coin price change percentage in 24 hours
       */
      price_change_percentage_24h?: Data.PriceChangePercentage24h;

      /**
       * coin sparkline image url
       */
      sparkline?: string;

      /**
       * coin total volume in usd
       */
      total_volume?: string;

      /**
       * coin total volume in btc
       */
      total_volume_btc?: string;
    }

    export namespace Data {
      /**
       * coin price change percentage in 24 hours
       */
      export interface PriceChangePercentage24h {
        btc?: number;

        usd?: number;
      }
    }
  }

  export interface NFT {
    /**
     * NFT collection ID
     */
    id?: string;

    data?: NFT.Data;

    /**
     * NFT collection floor price 24 hours percentage change
     */
    floor_price_24h_percentage_change?: number;

    /**
     * NFT collection floor price in native currency
     */
    floor_price_in_native_currency?: number;

    /**
     * NFT collection name
     */
    name?: string;

    /**
     * NFT collection native currency symbol
     */
    native_currency_symbol?: string;

    nft_contract_id?: number;

    /**
     * NFT collection symbol
     */
    symbol?: string;

    /**
     * NFT collection thumb image url
     */
    thumb?: string;
  }

  export namespace NFT {
    export interface Data {
      content?: string;

      /**
       * NFT collection floor price
       */
      floor_price?: string;

      /**
       * NFT collection floor price in usd 24 hours percentage change
       */
      floor_price_in_usd_24h_percentage_change?: string;

      /**
       * NFT collection 24 hours average sale price
       */
      h24_average_sale_price?: string;

      /**
       * NFT collection volume in 24 hours
       */
      h24_volume?: string;

      /**
       * NFT collection sparkline image url
       */
      sparkline?: string;
    }
  }
}

export interface TrendingGetParams {
  /**
   * show max number of results available for the given type Available values:
   * `coins`, `nfts`, `categories` Example: `coins` or `coins,nfts,categories`
   */
  show_max?: string;
}

export declare namespace Trending {
  export { type TrendingGetResponse as TrendingGetResponse, type TrendingGetParams as TrendingGetParams };
}
