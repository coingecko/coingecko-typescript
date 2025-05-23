// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TrendingPoolsAPI from './networks/trending-pools';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Pools extends APIResource {
  /**
   * This endpoint allows you to **query all the trending search pools across all
   * networks on GeckoTerminal**
   *
   * @example
   * ```ts
   * const response =
   *   await client.onchain.pools.listTrendingSearch();
   * ```
   */
  listTrendingSearch(
    query: PoolListTrendingSearchParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PoolListTrendingSearchResponse> {
    return this._client.get('/onchain/pools/trending_search', { query, ...options });
  }

  /**
   * This endpoint allows you to **query pools based on various filters across all
   * networks on GeckoTerminal**
   *
   * @example
   * ```ts
   * const pool = await client.onchain.pools.megafilter();
   * ```
   */
  megafilter(
    query: PoolMegafilterParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrendingPoolsAPI.Pool> {
    return this._client.get('/onchain/pools/megafilter', { query, ...options });
  }
}

export interface PoolListTrendingSearchResponse {
  data?: Array<PoolListTrendingSearchResponse.Data>;

  included?: Array<PoolListTrendingSearchResponse.Included>;
}

export namespace PoolListTrendingSearchResponse {
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

export interface PoolListTrendingSearchParams {
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

export interface PoolMegafilterParams {
  /**
   * maximum buy tax percentage
   */
  buy_tax_percentage_max?: number;

  /**
   * minimum buy tax percentage
   */
  buy_tax_percentage_min?: number;

  /**
   * duration for buy transactions metric Default value: 24h
   */
  buys_duration?: '5m' | '1h' | '6h' | '24h';

  /**
   * maximum number of buy transactions
   */
  buys_max?: number;

  /**
   * minimum number of buy transactions
   */
  buys_min?: number;

  /**
   * filter options for various checks, comma-separated if more than one Available
   * values: `no_honeypot`, `good_gt_score`, `on_coingecko`, `has_social`
   */
  checks?: string;

  /**
   * filter pools by DEXes, comma-separated if more than one DEX ID refers to
   * [/networks/{network}/dexes](/reference/dexes-list)
   */
  dexes?: string;

  /**
   * maximum fully diluted value in USD
   */
  fdv_usd_max?: number;

  /**
   * minimum fully diluted value in USD
   */
  fdv_usd_min?: number;

  /**
   * maximum 24hr volume in USD
   */
  h24_volume_usd_max?: number;

  /**
   * minimum 24hr volume in USD
   */
  h24_volume_usd_min?: number;

  /**
   * attributes to include, comma-separated if more than one to include Available
   * values: `base_token`, `quote_token`, `dex`, `network`
   */
  include?: string;

  /**
   * filter pools by networks, comma-separated if more than one Network ID refers to
   * [/networks](/reference/networks-list)
   */
  networks?: string;

  /**
   * page through results Default value: 1
   */
  page?: number;

  /**
   * maximum pool age in hours
   */
  pool_created_hour_max?: number;

  /**
   * minimum pool age in hours
   */
  pool_created_hour_min?: number;

  /**
   * maximum reserve in USD
   */
  reserve_in_usd_max?: number;

  /**
   * minimum reserve in USD
   */
  reserve_in_usd_min?: number;

  /**
   * maximum sell tax percentage
   */
  sell_tax_percentage_max?: number;

  /**
   * minimum sell tax percentage
   */
  sell_tax_percentage_min?: number;

  /**
   * duration for sell transactions metric Default value: 24h
   */
  sells_duration?: '5m' | '1h' | '6h' | '24h';

  /**
   * maximum number of sell transactions
   */
  sells_max?: number;

  /**
   * minimum number of sell transactions
   */
  sells_min?: number;

  /**
   * sort the pools by field Default value: h6_trending
   */
  sort?:
    | 'm5_trending'
    | 'h1_trending'
    | 'h6_trending'
    | 'h24_trending'
    | 'h24_tx_count_desc'
    | 'h24_volume_usd_desc'
    | 'h24_price_change_percentage_desc'
    | 'pool_created_at_desc';

  /**
   * duration for transaction count metric Default value: 24h
   */
  tx_count_duration?: '5m' | '1h' | '6h' | '24h';

  /**
   * maximum transaction count
   */
  tx_count_max?: number;

  /**
   * minimum transaction count
   */
  tx_count_min?: number;
}

export declare namespace Pools {
  export {
    type PoolListTrendingSearchResponse as PoolListTrendingSearchResponse,
    type PoolListTrendingSearchParams as PoolListTrendingSearchParams,
    type PoolMegafilterParams as PoolMegafilterParams,
  };
}
