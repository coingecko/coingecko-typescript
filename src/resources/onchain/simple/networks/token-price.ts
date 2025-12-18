// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class TokenPrice extends APIResource {
  /**
   * This endpoint allows you to **get token price based on the provided token
   * contract address on a network**
   *
   * @example
   * ```ts
   * const response =
   *   await client.onchain.simple.networks.tokenPrice.getAddresses(
   *     'addresses',
   *     { network: 'eth' },
   *   );
   * ```
   */
  getAddresses(
    addresses: string,
    params: TokenPriceGetAddressesParams,
    options?: RequestOptions,
  ): APIPromise<TokenPriceGetAddressesResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/simple/networks/${network}/token_price/${addresses}`, {
      query,
      ...options,
    });
  }
}

export interface TokenPriceGetAddressesResponse {
  data?: TokenPriceGetAddressesResponse.Data;
}

export namespace TokenPriceGetAddressesResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      h24_price_change_percentage?: { [key: string]: string };

      h24_volume_usd?: { [key: string]: string };

      last_trade_timestamp?: { [key: string]: number };

      market_cap_usd?: { [key: string]: string };

      token_prices?: { [key: string]: string };

      total_reserve_in_usd?: { [key: string]: string };
    }
  }
}

export interface TokenPriceGetAddressesParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: include 24hr price change, default: false
   */
  include_24hr_price_change?: boolean;

  /**
   * Query param: include 24hr volume, default: false
   */
  include_24hr_vol?: boolean;

  /**
   * Query param: include token price data from inactive pools using the most recent
   * swap, default: false
   */
  include_inactive_source?: boolean;

  /**
   * Query param: include market capitalization, default: false
   */
  include_market_cap?: boolean;

  /**
   * Query param: include total reserve in USD, default: false
   */
  include_total_reserve_in_usd?: boolean;

  /**
   * Query param: return FDV if market cap is not available, default: false
   */
  mcap_fdv_fallback?: boolean;
}

export declare namespace TokenPrice {
  export {
    type TokenPriceGetAddressesResponse as TokenPriceGetAddressesResponse,
    type TokenPriceGetAddressesParams as TokenPriceGetAddressesParams,
  };
}
