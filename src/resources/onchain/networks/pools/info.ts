// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Info extends APIResource {
  /**
   * To query pool metadata (base and quote token details, image, socials, websites,
   * description, contract address, etc.) based on a provided pool contract address
   * on a network
   */
  get(poolAddress: string, params: InfoGetParams, options?: RequestOptions): APIPromise<InfoGetResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/pools/${poolAddress}/info`, {
      query,
      ...options,
    });
  }
}

export interface InfoGetResponse {
  data: Array<InfoGetResponse.Data>;

  /**
   * Included pool data, present when include=pool is specified
   */
  included?: Array<InfoGetResponse.Included>;
}

export namespace InfoGetResponse {
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
       * Token banner image URL
       */
      banner_image_url: string | null;

      /**
       * Token categories
       */
      categories: Array<string>;

      /**
       * CoinGecko coin ID
       */
      coingecko_coin_id: string | null;

      /**
       * Token decimals
       */
      decimals: number;

      /**
       * Token description
       */
      description: string | null;

      /**
       * Developer wallet address
       */
      developer_address: string | null;

      /**
       * Developer holding as a percentage of total supply
       */
      developer_holding_percentage: string | null;

      /**
       * Discord URL
       */
      discord_url: string | null;

      /**
       * Farcaster URL
       */
      farcaster_url: string | null;

      /**
       * Freeze authority status
       */
      freeze_authority: string | null;

      /**
       * GeckoTerminal category IDs
       */
      gt_category_ids: Array<string>;

      /**
       * GeckoTerminal trust score
       */
      gt_score: number;

      /**
       * GeckoTerminal trust score breakdown
       */
      gt_score_details: Attributes.GtScoreDetails;

      /**
       * Whether the token is verified on GeckoTerminal
       */
      gt_verified: boolean;

      /**
       * Token holder information
       */
      holders: Attributes.Holders;

      /**
       * Token image URLs in different sizes
       */
      image: Attributes.Image;

      /**
       * Token image URL
       */
      image_url: string | null;

      /**
       * Whether the token is a honeypot (boolean or 'unknown')
       */
      is_honeypot: boolean | string;

      /**
       * Mint authority status
       */
      mint_authority: string | null;

      /**
       * Token name
       */
      name: string;

      /**
       * Token symbol
       */
      symbol: string;

      /**
       * Telegram handle
       */
      telegram_handle: string | null;

      /**
       * Twitter handle
       */
      twitter_handle: string | null;

      /**
       * Token websites
       */
      websites: Array<string>;

      /**
       * Zora URL
       */
      zora_url: string | null;
    }

    export namespace Attributes {
      /**
       * GeckoTerminal trust score breakdown
       */
      export interface GtScoreDetails {
        creation?: number;

        holders?: number;

        info?: number;

        pool?: number;

        transaction?: number;
      }

      /**
       * Token holder information
       */
      export interface Holders {
        /**
         * Number of holders
         */
        count?: number;

        /**
         * Holder distribution percentage (keys vary by chain, e.g. top_10, 11_30, 31_50,
         * rest)
         */
        distribution_percentage?: { [key: string]: string };

        /**
         * Last updated timestamp
         */
        last_updated?: string;
      }

      /**
       * Token image URLs in different sizes
       */
      export interface Image {
        large?: string;

        small?: string;

        thumb?: string;
      }
    }

    export interface Relationships {
      pool?: Relationships.Pool;
    }

    export namespace Relationships {
      export interface Pool {
        data?: Pool.Data;
      }

      export namespace Pool {
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
      /**
       * Base token contract address
       */
      base_token_address?: string;

      /**
       * GeckoTerminal community suspicious reports count
       */
      community_sus_report?: number;

      /**
       * Quote token contract address
       */
      quote_token_address?: string;

      /**
       * Quote token contract addresses, present for pools with more than 2 tokens
       */
      quote_token_addresses?: Array<string>;

      /**
       * GeckoTerminal community negative sentiment vote percentage
       */
      sentiment_vote_negative_percentage?: number;

      /**
       * GeckoTerminal community positive sentiment vote percentage
       */
      sentiment_vote_positive_percentage?: number;
    }
  }
}

export interface InfoGetParams {
  /**
   * Path param: Network ID. \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  network: string;

  /**
   * Query param: Attributes to include.
   */
  include?: 'pool';
}

export declare namespace Info {
  export { type InfoGetResponse as InfoGetResponse, type InfoGetParams as InfoGetParams };
}
