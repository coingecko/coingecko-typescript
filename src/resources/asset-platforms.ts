// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AssetPlatforms extends APIResource {
  /**
   * To query all the asset platforms (blockchain networks) on CoinGecko
   */
  get(
    query: AssetPlatformGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<AssetPlatformGetResponse> {
    return this._client.get('/asset_platforms', { query, ...options });
  }
}

export type AssetPlatformGetResponse = Array<AssetPlatformGetResponse.AssetPlatformGetResponseItem>;

export namespace AssetPlatformGetResponse {
  export interface AssetPlatformGetResponseItem {
    /**
     * Asset platform ID
     */
    id: string;

    /**
     * Chainlist's chain ID
     */
    chain_identifier: number | null;

    /**
     * Asset platform image URLs
     */
    image: AssetPlatformGetResponseItem.Image;

    /**
     * Chain name
     */
    name: string;

    /**
     * Chain native coin ID
     */
    native_coin_id: string | null;

    /**
     * Chain shortname
     */
    shortname: string;
  }

  export namespace AssetPlatformGetResponseItem {
    /**
     * Asset platform image URLs
     */
    export interface Image {
      /**
       * Large image URL
       */
      large?: string;

      /**
       * Small image URL
       */
      small?: string;

      /**
       * Thumbnail image URL
       */
      thumb?: string;
    }
  }
}

export interface AssetPlatformGetParams {
  /**
   * Apply relevant filters to results.
   */
  filter?: 'nft';
}

export declare namespace AssetPlatforms {
  export {
    type AssetPlatformGetResponse as AssetPlatformGetResponse,
    type AssetPlatformGetParams as AssetPlatformGetParams,
  };
}
