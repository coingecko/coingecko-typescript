// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class TrendingSearch extends APIResource {
  /**
   * This endpoint allows you to **query all the trending search pools across all
   * networks on GeckoTerminal**
   *
   * @example
   * ```ts
   * const trendingSearch =
   *   await client.onchain.pools.trendingSearch.get();
   * ```
   */
  get(
    query: TrendingSearchGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrendingSearchGetResponse> {
    return this._client.get('/onchain/pools/trending_search', { query, ...options });
  }
}

export interface TrendingSearchGetResponse {
  data?: Array<TrendingSearchGetResponse.Data>;

  included?: Array<TrendingSearchGetResponse.Included>;
}

export namespace TrendingSearchGetResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      address?: string;

      fdv_usd?: string;

      market_cap_usd?: string;

      name?: string;

      pool_created_at?: string;

      reserve_in_usd?: string;

      trending_rank?: number;

      volume_usd?: Attributes.VolumeUsd;
    }

    export namespace Attributes {
      export interface VolumeUsd {
        h24?: string;
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

      coingecko_coin_id?: string;

      decimals?: number;

      image_url?: string;

      name?: string;

      symbol?: string;
    }
  }
}

export interface TrendingSearchGetParams {
  /**
   * attributes to include, comma-separated if more than one to include Available
   * values: `base_token`, `quote_token`, `dex`, `network`
   */
  include?: string;

  /**
   * number of pools to return, maximum 10 Default value: 4
   */
  pools?: number;
}

export declare namespace TrendingSearch {
  export {
    type TrendingSearchGetResponse as TrendingSearchGetResponse,
    type TrendingSearchGetParams as TrendingSearchGetParams,
  };
}
