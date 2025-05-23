// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class TrendingPools extends APIResource {
  /**
   * This endpoint allows you to **query all the trending pools across all networks
   * on GeckoTerminal**
   *
   * @example
   * ```ts
   * const pool =
   *   await client.onchain.networks.trendingPools.list();
   * ```
   */
  list(query: TrendingPoolListParams | null | undefined = {}, options?: RequestOptions): APIPromise<Pool> {
    return this._client.get('/onchain/networks/trending_pools', { query, ...options });
  }

  /**
   * This endpoint allows you to **query the trending pools based on the provided
   * network**
   *
   * @example
   * ```ts
   * const pool =
   *   await client.onchain.networks.trendingPools.listByNetwork(
   *     'eth',
   *   );
   * ```
   */
  listByNetwork(
    network: string,
    query: TrendingPoolListByNetworkParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Pool> {
    return this._client.get(path`/onchain/networks/${network}/trending_pools`, { query, ...options });
  }
}

export interface Pool {
  data?: Array<Pool.Data>;

  included?: Array<Pool.Included>;
}

export namespace Pool {
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

      fdv_usd?: string;

      market_cap_usd?: string;

      name?: string;

      pool_created_at?: string;

      price_change_percentage?: Attributes.PriceChangePercentage;

      quote_token_price_base_token?: string;

      quote_token_price_native_currency?: string;

      quote_token_price_usd?: string;

      reserve_in_usd?: string;

      transactions?: Attributes.Transactions;

      volume_usd?: Attributes.VolumeUsd;
    }

    export namespace Attributes {
      export interface PriceChangePercentage {
        h1?: string;

        h24?: string;

        h6?: string;

        m5?: string;
      }

      export interface Transactions {
        h1?: Transactions.H1;

        h24?: Transactions.H24;

        m15?: Transactions.M15;

        m30?: Transactions.M30;

        m5?: Transactions.M5;
      }

      export namespace Transactions {
        export interface H1 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }

        export interface H24 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }

        export interface M15 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }

        export interface M30 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }

        export interface M5 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }
      }

      export interface VolumeUsd {
        h1?: string;

        h24?: string;

        h6?: string;

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

      coingecko_coin_id?: string;

      decimals?: number;

      image_url?: string;

      name?: string;

      symbol?: string;
    }
  }
}

export interface TrendingPoolListParams {
  /**
   * duration to sort trending list by Default value: 24h
   */
  duration?: '5m' | '1h' | '6h' | '24h';

  /**
   * attributes to include, comma-separated if more than one to include Available
   * values: `base_token`, `quote_token`, `dex`, `network`. Example: `base_token` or
   * `base_token,dex`
   */
  include?: string;

  /**
   * page through results Default value: 1
   */
  page?: number;
}

export interface TrendingPoolListByNetworkParams {
  /**
   * duration to sort trending list by Default value: 24h
   */
  duration?: '5m' | '1h' | '6h' | '24h';

  /**
   * attributes to include, comma-separated if more than one to include Available
   * values: `base_token`, `quote_token`, `dex`
   */
  include?: string;

  /**
   * page through results Default value: 1
   */
  page?: number;
}

export declare namespace TrendingPools {
  export {
    type Pool as Pool,
    type TrendingPoolListParams as TrendingPoolListParams,
    type TrendingPoolListByNetworkParams as TrendingPoolListByNetworkParams,
  };
}
