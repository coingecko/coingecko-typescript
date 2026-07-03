// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Dexes extends APIResource {
  /**
   * To query all the top pools based on the provided network and decentralized
   * exchange (DEX)
   */
  getPools(
    dex: string,
    params: DexGetPoolsParams,
    options?: RequestOptions,
  ): APIPromise<DexGetPoolsResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/dexes/${dex}/pools`, { query, ...options });
  }

  /**
   * To query all the supported decentralized exchanges (DEXs) based on the provided
   * network on GeckoTerminal
   */
  get(
    network: string,
    query: DexGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<DexGetResponse> {
    return this._client.get(path`/onchain/networks/${network}/dexes`, { query, ...options });
  }
}

export interface DexGetResponse {
  data: Array<DexGetResponse.Data>;
}

export namespace DexGetResponse {
  export interface Data {
    /**
     * DEX identifier
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
       * DEX name
       */
      name: string;
    }
  }
}

export interface DexGetPoolsResponse {
  data: Array<DexGetPoolsResponse.Data>;

  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<DexGetPoolsResponse.Included>;
}

export namespace DexGetPoolsResponse {
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

      /**
       * Transaction counts over various timeframes
       */
      transactions: Attributes.Transactions;

      /**
       * Volume in USD over various timeframes
       */
      volume_usd: Attributes.VolumeUsd;

      /**
       * GeckoTerminal community suspicious reports count
       */
      community_sus_report?: number;

      /**
       * GeckoTerminal community negative sentiment vote percentage
       */
      sentiment_vote_negative_percentage?: number;

      /**
       * GeckoTerminal community positive sentiment vote percentage
       */
      sentiment_vote_positive_percentage?: number;

      /**
       * Price of the queried token in USD, present when querying pools by token address
       */
      token_price_usd?: string;
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

      /**
       * Transaction counts over various timeframes
       */
      export interface Transactions {
        h1?: Transactions.H1;

        h24?: Transactions.H24;

        h6?: Transactions.H6;

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

        export interface H6 {
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

      /**
       * Volume in USD over various timeframes
       */
      export interface VolumeUsd {
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

export interface DexGetPoolsParams {
  /**
   * Path param: Network ID. \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  network: string;

  /**
   * Query param: Attributes to include, comma-separated if more than one. Available
   * values: `base_token`, `quote_token`, `dex`
   */
  include?: string;

  /**
   * Query param: Include GeckoTerminal community data (sentiment votes, suspicious
   * reports). Default: `false`
   */
  include_gt_community_data?: boolean;

  /**
   * Query param: Page through results. Default value: 1
   */
  page?: number;

  /**
   * Query param: Sort the pools by field. Default: `h24_tx_count_desc`
   */
  sort?: 'h24_tx_count_desc' | 'h24_volume_usd_desc';
}

export interface DexGetParams {
  /**
   * Page through results. Default value: 1
   */
  page?: number;
}

export declare namespace Dexes {
  export {
    type DexGetResponse as DexGetResponse,
    type DexGetPoolsResponse as DexGetPoolsResponse,
    type DexGetPoolsParams as DexGetPoolsParams,
    type DexGetParams as DexGetParams,
  };
}
