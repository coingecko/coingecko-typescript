// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Dexes extends APIResource {
  /**
   * This endpoint allows you to **query all the supported decentralized exchanges
   * (DEXs) based on the provided network on GeckoTerminal**
   *
   * @example
   * ```ts
   * const dex = await client.onchain.networks.dexes.get('eth');
   * ```
   */
  get(
    network: string,
    query: DexGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DexGetResponse> {
    return this._client.get(path`/onchain/networks/${network}/dexes`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the top pools based on the provided
   * network and decentralized exchange (DEX)**
   *
   * @example
   * ```ts
   * const response =
   *   await client.onchain.networks.dexes.getPools(
   *     'sushiswap',
   *     { network: 'eth' },
   *   );
   * ```
   */
  getPools(
    dex: string,
    params: DexGetPoolsParams,
    options?: RequestOptions,
  ): APIPromise<DexGetPoolsResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/dexes/${dex}/pools`, { query, ...options });
  }
}

export interface DexGetResponse {
  data?: Array<DexGetResponse.Data>;
}

export namespace DexGetResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      name?: string;
    }
  }
}

export interface DexGetPoolsResponse {
  data?: Array<DexGetPoolsResponse.Data>;

  included?: Array<DexGetPoolsResponse.Included>;
}

export namespace DexGetPoolsResponse {
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

        m15?: string;

        m30?: string;

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

        m15?: string;

        m30?: string;

        m5?: string;
      }
    }

    export interface Relationships {
      base_token?: Relationships.BaseToken;

      dex?: Relationships.Dex;

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

export interface DexGetParams {
  /**
   * page through results Default value: 1
   */
  page?: number;
}

export interface DexGetPoolsParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: attributes to include, comma-separated if more than one to include
   * Available values: `base_token`, `quote_token`, `dex`
   */
  include?: string;

  /**
   * Query param: page through results Default value: 1
   */
  page?: number;

  /**
   * Query param: sort the pools by field Default value: h24_tx_count_desc
   */
  sort?: 'h24_tx_count_desc' | 'h24_volume_usd_desc';
}

export declare namespace Dexes {
  export {
    type DexGetResponse as DexGetResponse,
    type DexGetPoolsResponse as DexGetPoolsResponse,
    type DexGetParams as DexGetParams,
    type DexGetPoolsParams as DexGetPoolsParams,
  };
}
