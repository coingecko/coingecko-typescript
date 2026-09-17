// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InfoRecentlyUpdatedAPI from './info-recently-updated';
import {
  InfoRecentlyUpdated,
  InfoRecentlyUpdatedGetParams,
  InfoRecentlyUpdatedGetResponse,
} from './info-recently-updated';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class Tokens extends APIResource {
  infoRecentlyUpdated: InfoRecentlyUpdatedAPI.InfoRecentlyUpdated =
    new InfoRecentlyUpdatedAPI.InfoRecentlyUpdated(this._client);

  /**
   * To query multiple tokens data based on the provided token contract addresses
   * across multiple networks in a single request
   */
  getMulti(query: TokenGetMultiParams, options?: RequestOptions): APIPromise<TokenGetMultiResponse> {
    return this._client.get('/onchain/tokens/multi', { query, ...options });
  }
}

export interface TokenGetMultiResponse {
  data: Array<TokenGetMultiResponse.Data>;

  /**
   * Included top pool data, present when include=top_pools is specified
   */
  included?: Array<TokenGetMultiResponse.Included>;
}

export namespace TokenGetMultiResponse {
  export interface Data {
    /**
     * Token identifier
     */
    id: string;

    attributes: Data.Attributes;

    relationships: Data.Relationships;

    /**
     * Resource type
     */
    type: string;
  }

  export namespace Data {
    export interface Attributes {
      /**
       * Token contract address
       */
      address: string;

      /**
       * CoinGecko coin ID
       */
      coingecko_coin_id: string | null;

      /**
       * Token decimals
       */
      decimals: number;

      /**
       * Fully diluted valuation in USD
       */
      fdv_usd: string | null;

      /**
       * Token image URL
       */
      image_url: string | null;

      /**
       * Market cap in USD
       */
      market_cap_usd: string | null;

      /**
       * Token name
       */
      name: string;

      /**
       * Network ID of the token
       */
      network: string;

      /**
       * Normalized token total supply
       */
      normalized_total_supply: string;

      /**
       * Token price in USD
       */
      price_usd: string | null;

      /**
       * Token symbol
       */
      symbol: string;

      /**
       * Total reserve in USD across all pools
       */
      total_reserve_in_usd: string;

      /**
       * Token total supply
       */
      total_supply: string;

      /**
       * Volume in USD
       */
      volume_usd: Attributes.VolumeUsd;

      /**
       * Last trade timestamp in UNIX
       */
      last_trade_timestamp?: string;

      /**
       * Launchpad details for pump-style tokens
       */
      launchpad_details?: Attributes.LaunchpadDetails;
    }

    export namespace Attributes {
      /**
       * Volume in USD
       */
      export interface VolumeUsd {
        h24?: string;
      }

      /**
       * Launchpad details for pump-style tokens
       */
      export interface LaunchpadDetails {
        completed?: boolean;

        completed_at?: string | null;

        graduation_percentage?: number;

        migrated_destination_pool_address?: string | null;
      }
    }

    export interface Relationships {
      top_pools?: Relationships.TopPools;
    }

    export namespace Relationships {
      export interface TopPools {
        data?: Array<TopPools.Data>;
      }

      export namespace TopPools {
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

    relationships?: Included.Relationships;

    type?: string;
  }

  export namespace Included {
    export interface Attributes {
      address?: string;

      /**
       * Base token balance in pool
       */
      base_token_balance?: string;

      /**
       * Base token liquidity in USD
       */
      base_token_liquidity_usd?: string;

      base_token_price_native_currency?: string;

      base_token_price_quote_token?: string;

      base_token_price_usd?: string;

      fdv_usd?: string | null;

      /**
       * Last trade timestamp in UNIX
       */
      last_trade_timestamp?: string;

      market_cap_usd?: string | null;

      name?: string;

      pool_created_at?: string;

      price_change_percentage?: Attributes.PriceChangePercentage;

      /**
       * Quote token balance in pool
       */
      quote_token_balance?: string;

      /**
       * Quote token liquidity in USD
       */
      quote_token_liquidity_usd?: string;

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
}

export interface TokenGetMultiParams {
  /**
   * Network ID and token contract address pairs in `network_id:token_address`
   * format, comma-separated if more than one. Maximum: 50 \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  tokens: string;

  /**
   * Attributes to include.
   */
  include?: 'top_pools';

  /**
   * Include pool composition. Default: `false`
   */
  include_composition?: boolean;

  /**
   * Include tokens from inactive pools using the most recent swap. Default: `false`
   */
  include_inactive_source?: boolean;
}

Tokens.InfoRecentlyUpdated = InfoRecentlyUpdated;

export declare namespace Tokens {
  export {
    type TokenGetMultiResponse as TokenGetMultiResponse,
    type TokenGetMultiParams as TokenGetMultiParams,
  };

  export {
    InfoRecentlyUpdated as InfoRecentlyUpdated,
    type InfoRecentlyUpdatedGetResponse as InfoRecentlyUpdatedGetResponse,
    type InfoRecentlyUpdatedGetParams as InfoRecentlyUpdatedGetParams,
  };
}
