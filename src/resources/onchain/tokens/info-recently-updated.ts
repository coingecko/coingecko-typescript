// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class InfoRecentlyUpdated extends APIResource {
  /**
   * To query 100 most recently updated tokens info of a specific network or across
   * all networks on GeckoTerminal
   */
  get(
    query: InfoRecentlyUpdatedGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InfoRecentlyUpdatedGetResponse> {
    return this._client.get('/onchain/tokens/info_recently_updated', { query, ...options });
  }
}

export interface InfoRecentlyUpdatedGetResponse {
  data: Array<InfoRecentlyUpdatedGetResponse.Data>;

  /**
   * Included network data, present when include=network is specified
   */
  included?: Array<InfoRecentlyUpdatedGetResponse.Included>;
}

export namespace InfoRecentlyUpdatedGetResponse {
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
       * Token description
       */
      description: string | null;

      /**
       * Discord URL
       */
      discord_url: string | null;

      /**
       * Farcaster URL
       */
      farcaster_url: string | null;

      /**
       * GeckoTerminal trust score
       */
      gt_score: number | null;

      /**
       * Token image URL
       */
      image_url: string | null;

      /**
       * Metadata last updated timestamp
       */
      metadata_updated_at: string;

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

    export interface Relationships {
      network?: Relationships.Network;
    }

    export namespace Relationships {
      export interface Network {
        data?: Network.Data;
      }

      export namespace Network {
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
      coingecko_asset_platform_id?: string;

      name?: string;
    }
  }
}

export interface InfoRecentlyUpdatedGetParams {
  /**
   * Attributes for related resources to include.
   */
  include?: 'network';

  /**
   * Filter tokens by provided network. \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  network?: string;
}

export declare namespace InfoRecentlyUpdated {
  export {
    type InfoRecentlyUpdatedGetResponse as InfoRecentlyUpdatedGetResponse,
    type InfoRecentlyUpdatedGetParams as InfoRecentlyUpdatedGetParams,
  };
}
