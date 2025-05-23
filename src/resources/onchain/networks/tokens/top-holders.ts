// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class TopHolders extends APIResource {
  /**
   * This endpoint allows you to **query top token holders based on the provided
   * token contract address on a network**
   *
   * @example
   * ```ts
   * const topHolder =
   *   await client.onchain.networks.tokens.topHolders.get(
   *     '0x6921b130d297cc43754afba22e5eac0fbf8db75b',
   *     { network: 'base' },
   *   );
   * ```
   */
  get(
    address: string,
    params: TopHolderGetParams,
    options?: RequestOptions,
  ): APIPromise<TopHolderGetResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/tokens/${address}/top_holders`, {
      query,
      ...options,
    });
  }
}

export interface TopHolderGetResponse {
  data?: TopHolderGetResponse.Data;
}

export namespace TopHolderGetResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      holders?: Array<Attributes.Holder>;

      last_updated_at?: string;
    }

    export namespace Attributes {
      export interface Holder {
        address?: string;

        amount?: string;

        label?: string;

        percentage?: string;

        rank?: number;

        value?: string;
      }
    }
  }
}

export interface TopHolderGetParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: number of top token holders to return, you may use any integer or
   * `max` Default value: 10
   */
  holders?: string;
}

export declare namespace TopHolders {
  export { type TopHolderGetResponse as TopHolderGetResponse, type TopHolderGetParams as TopHolderGetParams };
}
