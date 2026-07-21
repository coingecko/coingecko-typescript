// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Info extends APIResource {
  /**
   * To query token metadata (name, symbol, CoinGecko ID, image, socials, websites,
   * description, etc.) based on a provided token contract address on a network
   */
  get(address: string, params: InfoGetParams, options?: RequestOptions): APIPromise<InfoGetResponse> {
    const { network } = params;
    return this._client.get(path`/onchain/networks/${network}/tokens/${address}/info`, options);
  }
}

export interface InfoGetResponse {
  data: InfoGetResponse.Data;
}

export namespace InfoGetResponse {
  export interface Data {
    /**
     * Token identifier
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
  }
}

export interface InfoGetParams {
  /**
   * Network ID. \*refers to [`/onchain/networks`](/reference/networks-list).
   */
  network: string;
}

export declare namespace Info {
  export { type InfoGetResponse as InfoGetResponse, type InfoGetParams as InfoGetParams };
}
