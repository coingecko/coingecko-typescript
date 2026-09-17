// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class TokenPrice extends APIResource {
  /**
   * To get token prices based on the provided token contract addresses across
   * multiple networks in a single request
   */
  getMulti(
    query: TokenPriceGetMultiParams,
    options?: RequestOptions,
  ): APIPromise<TokenPriceGetMultiResponse> {
    return this._client.get('/onchain/simple/token_price/multi', { query, ...options });
  }
}

export interface TokenPriceGetMultiResponse {
  data: TokenPriceGetMultiResponse.Data;
}

export namespace TokenPriceGetMultiResponse {
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
       * Token prices keyed by network ID and contract address
       */
      token_prices: { [key: string]: string };

      /**
       * 24hr price change percentage keyed by network ID and contract address
       */
      h24_price_change_percentage?: { [key: string]: string };

      /**
       * 24hr volume in USD keyed by network ID and contract address
       */
      h24_volume_usd?: { [key: string]: string };

      /**
       * Last trade timestamp keyed by network ID and contract address
       */
      last_trade_timestamp?: { [key: string]: string };

      /**
       * Market cap in USD keyed by network ID and contract address
       */
      market_cap_usd?: { [key: string]: string };

      /**
       * Total reserve in USD keyed by network ID and contract address
       */
      total_reserve_in_usd?: { [key: string]: string };
    }
  }
}

export interface TokenPriceGetMultiParams {
  /**
   * Network ID and token contract address pairs in `network_id:token_address`
   * format, comma-separated if more than one. Maximum: 50 \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  tokens: string;

  /**
   * Include 24hr price change. Default: `false`
   */
  include_24hr_price_change?: boolean;

  /**
   * Include 24hr volume. Default: `false`
   */
  include_24hr_vol?: boolean;

  /**
   * Include token price data from inactive pools using the most recent swap.
   * Default: `false`
   */
  include_inactive_source?: boolean;

  /**
   * Include market capitalization. Default: `false`
   */
  include_market_cap?: boolean;

  /**
   * Include total reserve in USD. Default: `false`
   */
  include_total_reserve_in_usd?: boolean;

  /**
   * Return FDV if market cap is not available. Default: `false`
   */
  mcap_fdv_fallback?: boolean;
}

export declare namespace TokenPrice {
  export {
    type TokenPriceGetMultiResponse as TokenPriceGetMultiResponse,
    type TokenPriceGetMultiParams as TokenPriceGetMultiParams,
  };
}
