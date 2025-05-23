// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class AssetPlatforms extends APIResource {
  /**
   * This endpoint allows you to **query all the asset platforms on CoinGecko**
   *
   * @example
   * ```ts
   * const assetPlatforms = await client.assetPlatforms.get();
   * ```
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
     * asset platform ID
     */
    id?: string;

    /**
     * chainlist's chain ID
     */
    chain_identifier?: number | null;

    /**
     * image of the asset platform
     */
    image?: AssetPlatformGetResponseItem.Image;

    /**
     * chain name
     */
    name?: string;

    /**
     * chain native coin ID
     */
    native_coin_id?: string;

    /**
     * chain shortname
     */
    shortname?: string;
  }

  export namespace AssetPlatformGetResponseItem {
    /**
     * image of the asset platform
     */
    export interface Image {
      large?: string;

      small?: string;

      thumb?: string;
    }
  }
}

export interface AssetPlatformGetParams {
  /**
   * apply relevant filters to results
   */
  filter?: 'nft';
}

export declare namespace AssetPlatforms {
  export {
    type AssetPlatformGetResponse as AssetPlatformGetResponse,
    type AssetPlatformGetParams as AssetPlatformGetParams,
  };
}
