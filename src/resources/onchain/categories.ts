// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Categories extends APIResource {
  /**
   * To query all the supported categories on GeckoTerminal
   */
  get(
    query: CategoryGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryGetResponse> {
    return this._client.get('/onchain/categories', { query, ...options });
  }

  /**
   * To query all the pools based on the provided category ID
   */
  getPools(
    categoryID: string,
    query: CategoryGetPoolsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryGetPoolsResponse> {
    return this._client.get(path`/onchain/categories/${categoryID}/pools`, { query, ...options });
  }
}

export interface CategoryGetResponse {
  data: Array<CategoryGetResponse.Data>;
}

export namespace CategoryGetResponse {
  export interface Data {
    /**
     * Category ID
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
       * Category description
       */
      description: string;

      /**
       * Fully diluted valuation in USD
       */
      fdv_usd: string;

      /**
       * 24hr transaction count
       */
      h24_tx_count: number;

      /**
       * 24hr volume in USD
       */
      h24_volume_usd: string;

      /**
       * Category name
       */
      name: string;

      /**
       * Total reserve in USD
       */
      reserve_in_usd: string;

      /**
       * Volume change percentage over various timeframes
       */
      volume_change_percentage: Attributes.VolumeChangePercentage;
    }

    export namespace Attributes {
      /**
       * Volume change percentage over various timeframes
       */
      export interface VolumeChangePercentage {
        h1?: string;

        h12?: string;

        h24?: string;

        h6?: string;
      }
    }
  }
}

export interface CategoryGetPoolsResponse {
  data: Array<CategoryGetPoolsResponse.Data>;

  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<CategoryGetPoolsResponse.Included>;
}

export namespace CategoryGetPoolsResponse {
  export interface Data {
    /**
     * Pool identifier
     */
    id: string;

    attributes: Data.Attributes;

    /**
     * Related resources
     */
    relationships: Data.Relationships;

    /**
     * Resource type
     */
    type: string;
  }

  export namespace Data {
    export interface Attributes {
      /**
       * Pool contract address
       */
      address: string;

      /**
       * Base token price in native currency
       */
      base_token_price_native_currency: string | null;

      /**
       * Base token price in quote token
       */
      base_token_price_quote_token: string | null;

      /**
       * Base token price in USD
       */
      base_token_price_usd: string;

      /**
       * Fully diluted valuation in USD
       */
      fdv_usd: string | null;

      /**
       * 24hr transaction count
       */
      h24_tx_count: number;

      /**
       * 24hr volume in USD
       */
      h24_volume_usd: string;

      /**
       * Market cap in USD
       */
      market_cap_usd: string | null;

      /**
       * Pool name
       */
      name: string;

      /**
       * Pool creation timestamp
       */
      pool_created_at: string;

      /**
       * Price change percentage over various timeframes
       */
      price_change_percentage: Attributes.PriceChangePercentage;

      /**
       * Quote token price in base token
       */
      quote_token_price_base_token: string | null;

      /**
       * Quote token price in native currency
       */
      quote_token_price_native_currency: string | null;

      /**
       * Quote token price in USD
       */
      quote_token_price_usd: string;

      /**
       * Total reserve in USD
       */
      reserve_in_usd: string | null;
    }

    export namespace Attributes {
      /**
       * Price change percentage over various timeframes
       */
      export interface PriceChangePercentage {
        h1?: string;

        h24?: string;

        h6?: string;

        m15?: string;

        m30?: string;

        m5?: string;
      }
    }

    /**
     * Related resources
     */
    export interface Relationships {
      base_token?: Relationships.BaseToken;

      dex?: Relationships.Dex;

      network?: Relationships.Network;

      quote_token?: Relationships.QuoteToken;
    }

    export namespace Relationships {
      export interface BaseToken {
        data?: BaseToken.Data;
      }

      export namespace BaseToken {
        export interface Data {
          id?: string;

          type?: string;
        }
      }

      export interface Dex {
        data?: Dex.Data;
      }

      export namespace Dex {
        export interface Data {
          id?: string;

          type?: string;
        }
      }

      export interface Network {
        data?: Network.Data;
      }

      export namespace Network {
        export interface Data {
          id?: string;

          type?: string;
        }
      }

      export interface QuoteToken {
        data?: QuoteToken.Data;
      }

      export namespace QuoteToken {
        export interface Data {
          id?: string;

          type?: string;
        }
      }
    }
  }

  export interface Included {
    id?: string;

    attributes?: Included.Attributes;

    type?: string;
  }

  export namespace Included {
    export interface Attributes {
      address?: string;

      coingecko_asset_platform_id?: string;

      coingecko_coin_id?: string | null;

      decimals?: number;

      image_url?: string | null;

      name?: string;

      symbol?: string;
    }
  }
}

export interface CategoryGetParams {
  /**
   * Page through results. Default value: 1
   */
  page?: number;

  /**
   * Sort the categories by field. Default: `h6_volume_percentage_desc`
   */
  sort?:
    | 'h1_volume_percentage_desc'
    | 'h6_volume_percentage_desc'
    | 'h12_volume_percentage_desc'
    | 'h24_tx_count_desc'
    | 'h24_volume_usd_desc'
    | 'fdv_usd_desc'
    | 'reserve_in_usd_desc';
}

export interface CategoryGetPoolsParams {
  /**
   * Attributes to include, comma-separated if more than one. Available values:
   * `base_token`, `quote_token`, `dex`, `network`
   */
  include?: string;

  /**
   * Page through results. Default value: 1
   */
  page?: number;

  /**
   * Sort the pools by field. Default: `pool_created_at_desc`
   */
  sort?:
    | 'm5_trending'
    | 'h1_trending'
    | 'h6_trending'
    | 'h24_trending'
    | 'h24_tx_count_desc'
    | 'h24_volume_usd_desc'
    | 'pool_created_at_desc'
    | 'h24_price_change_percentage_desc';
}

export declare namespace Categories {
  export {
    type CategoryGetResponse as CategoryGetResponse,
    type CategoryGetPoolsResponse as CategoryGetPoolsResponse,
    type CategoryGetParams as CategoryGetParams,
    type CategoryGetPoolsParams as CategoryGetPoolsParams,
  };
}
