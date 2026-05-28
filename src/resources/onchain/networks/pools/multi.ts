// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as PoolsAPI from './pools';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Multi extends APIResource {
  /**
   * To query multiple pools based on the provided network and pool addresses
   */
  getAddresses(
    addresses: string,
    params: MultiGetAddressesParams,
    options?: RequestOptions,
  ): APIPromise<MultiGetAddressesResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/pools/multi/${addresses}`, {
      query,
      ...options,
    });
  }
}

export interface MultiGetAddressesResponse {
  data: Array<PoolsAPI.PoolAddressItem>;

  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<MultiGetAddressesResponse.Included>;
}

export namespace MultiGetAddressesResponse {
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

export interface MultiGetAddressesParams {
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
   * Query param: Include pool composition. Default: `false`
   */
  include_composition?: boolean;

  /**
   * Query param: Include volume breakdown. Default: `false`
   */
  include_volume_breakdown?: boolean;
}

export declare namespace Multi {
  export {
    type MultiGetAddressesResponse as MultiGetAddressesResponse,
    type MultiGetAddressesParams as MultiGetAddressesParams,
  };
}
