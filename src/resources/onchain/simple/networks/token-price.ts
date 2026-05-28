// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class TokenPrice extends APIResource {
  /**
   * To get token price based on the provided token contract address on a network
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
  data: TokenPriceGetAddressesResponse.Data;
}

export namespace TokenPriceGetAddressesResponse {
  export interface Data {
    /**
     * Request ID
     */
    id: string;

    attributes: Data.Attributes;

    /**
     * Response type
     */
    type: string;
  }

  export namespace Data {
    export interface Attributes {
      /**
       * Token prices keyed by contract address
       */
      token_prices: { [key: string]: string };

      /**
       * 24hr price change percentage keyed by contract address
       */
      h24_price_change_percentage?: { [key: string]: string };

      /**
       * 24hr volume in USD keyed by contract address
       */
      h24_volume_usd?: { [key: string]: string };

      /**
       * Last trade timestamp keyed by contract address
       */
      last_trade_timestamp?: { [key: string]: string };

      /**
       * Market cap in USD keyed by contract address
       */
      market_cap_usd?: { [key: string]: string };

      /**
       * Total reserve in USD keyed by contract address
       */
      total_reserve_in_usd?: { [key: string]: string };
    }
  }
}

export interface TokenPriceGetAddressesParams {
  /**
   * Path param: Network ID. \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  network: string;

  /**
   * Query param: Include 24hr price change. Default: `false`
   */
  include_24hr_price_change?: boolean;

  /**
   * Query param: Include 24hr volume. Default: `false`
   */
  include_24hr_vol?: boolean;

  /**
   * Query param: Include token price data from inactive pools using the most recent
   * swap. Default: `false`
   */
  include_inactive_source?: boolean;

  /**
   * Query param: Include market capitalization. Default: `false`
   */
  include_market_cap?: boolean;

  /**
   * Query param: Include total reserve in USD. Default: `false`
   */
  include_total_reserve_in_usd?: boolean;

  /**
   * Query param: Return FDV if market cap is not available. Default: `false`
   */
  mcap_fdv_fallback?: boolean;
}

export declare namespace TokenPrice {
  export {
    type TokenPriceGetAddressesResponse as TokenPriceGetAddressesResponse,
    type TokenPriceGetAddressesParams as TokenPriceGetAddressesParams,
  };
}
