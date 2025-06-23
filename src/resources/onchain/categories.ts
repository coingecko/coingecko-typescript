// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Categories extends APIResource {
  /**
   * This endpoint allows you to **query all the supported categories on
   * GeckoTerminal**
   *
   * @example
   * ```ts
   * const category = await client.onchain.categories.get();
   * ```
   */
  get(
    query: CategoryGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<CategoryGetResponse> {
    return this._client.get('/onchain/categories', { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the pools based on the provided category
   * ID**
   *
   * @example
   * ```ts
   * const response = await client.onchain.categories.getPools(
   *   'pump-fun',
   * );
   * ```
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
  data?: Array<CategoryGetResponse.Data>;
}

export namespace CategoryGetResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      description?: string;

      fdv_usd?: string;

      h24_tx_count?: number;

      h24_volume_usd?: string;

      name?: string;

      reserve_in_usd?: string;

      volume_change_percentage?: Attributes.VolumeChangePercentage;
    }

    export namespace Attributes {
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
  data?: Array<CategoryGetPoolsResponse.Data>;

  included?: Array<CategoryGetPoolsResponse.Included>;
}

export namespace CategoryGetPoolsResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      address?: string;

      base_token_price_native_currency?: string;

      base_token_price_quote_token?: string;

      base_token_price_usd?: string;

      fdv_usd?: string | null;

      h24_tx_count?: number;

      h24_volume_usd?: string;

      market_cap_usd?: string | null;

      name?: string;

      pool_created_at?: string;

      price_change_percentage?: Attributes.PriceChangePercentage;

      quote_token_price_base_token?: string;

      quote_token_price_native_currency?: string;

      quote_token_price_usd?: string;

      reserve_in_usd?: string;
    }

    export namespace Attributes {
      export interface PriceChangePercentage {
        h1?: string;

        h24?: string;

        h6?: string;

        m15?: string;

        m30?: string;

        m5?: string;
      }
    }

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

      coingecko_coin_id?: string | null;

      decimals?: number;

      image_url?: string;

      name?: string;

      symbol?: string;
    }
  }
}

export interface CategoryGetParams {
  /**
   * page through results Default value: `1`
   */
  page?: number;

  /**
   * sort the categories by field Default value: `h6_volume_percentage_desc`
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
   * attributes to include, comma-separated if more than one to include Available
   * values: `base_token`, `quote_token`, `dex`, `network`. Example: `base_token` or
   * `base_token,dex`
   */
  include?: string;

  /**
   * page through results Default value: `1`
   */
  page?: number;

  /**
   * sort the pools by field Default value: `pool_created_at_desc`
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
