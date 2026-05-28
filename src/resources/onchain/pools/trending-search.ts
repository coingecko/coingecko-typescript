// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class TrendingSearch extends APIResource {
  /**
   * To query all the trending search pools across all networks on GeckoTerminal
   */
  get(
    query: TrendingSearchGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrendingSearchGetResponse> {
    return this._client.get('/onchain/pools/trending_search', { query, ...options });
  }
}

export interface TrendingSearchGetResponse {
  data: Array<TrendingSearchGetResponse.Data>;

  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<TrendingSearchGetResponse.Included>;
}

export namespace TrendingSearchGetResponse {
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
       * Fully diluted valuation in USD
       */
      fdv_usd: string | null;

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
       * Total reserve in USD
       */
      reserve_in_usd: string | null;

      /**
       * Trending search rank (0-based)
       */
      trending_rank: number;

      /**
       * Volume in USD
       */
      volume_usd: Attributes.VolumeUsd;
    }

    export namespace Attributes {
      /**
       * Volume in USD
       */
      export interface VolumeUsd {
        h24?: string;
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

export interface TrendingSearchGetParams {
  /**
   * Attributes to include, comma-separated if more than one. Available values:
   * `base_token`, `quote_token`, `dex`, `network`
   */
  include?: string;

  /**
   * Number of pools to return, maximum 10. Default value: 4
   */
  pools?: number;
}

export declare namespace TrendingSearch {
  export {
    type TrendingSearchGetResponse as TrendingSearchGetResponse,
    type TrendingSearchGetParams as TrendingSearchGetParams,
  };
}
