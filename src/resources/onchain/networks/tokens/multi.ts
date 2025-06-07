// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Multi extends APIResource {
  /**
   * This endpoint allows you to **query multiple tokens data based on the provided
   * token contract addresses on a network**
   *
   * @example
   * ```ts
   * const response =
   *   await client.onchain.networks.tokens.multi.getAddresses(
   *     'addresses',
   *     { network: 'eth' },
   *   );
   * ```
   */
  getAddresses(
    addresses: string,
    params: MultiGetAddressesParams,
    options?: RequestOptions,
  ): APIPromise<MultiGetAddressesResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/tokens/multi/${addresses}`, {
      query,
      ...options,
    });
  }
}

export interface MultiGetAddressesResponse {
  data?: Array<MultiGetAddressesResponse.Data>;
}

export namespace MultiGetAddressesResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      address?: string;

      coingecko_coin_id?: string;

      decimals?: number;

      fdv_usd?: string;

      image_url?: string;

      market_cap_usd?: string;

      name?: string;

      normalized_total_supply?: string;

      price_usd?: string;

      symbol?: string;

      total_reserve_in_usd?: string;

      total_supply?: string;

      volume_usd?: Attributes.VolumeUsd;
    }

    export namespace Attributes {
      export interface VolumeUsd {
        h24?: string;
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
}

export interface MultiGetAddressesParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: attributes to include
   */
  include?: 'top_pools';
}

export declare namespace Multi {
  export {
    type MultiGetAddressesResponse as MultiGetAddressesResponse,
    type MultiGetAddressesParams as MultiGetAddressesParams,
  };
}
