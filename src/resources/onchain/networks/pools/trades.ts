// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Trades extends APIResource {
  /**
   * To query the last 300 trades in the past 24 hours based on the provided pool
   * address
   */
  get(poolAddress: string, params: TradeGetParams, options?: RequestOptions): APIPromise<TradeGetResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/pools/${poolAddress}/trades`, {
      query,
      ...options,
    });
  }
}

export interface TradeGetResponse {
  data: Array<TradeGetResponse.Data>;
}

export namespace TradeGetResponse {
  export interface Data {
    /**
     * Trade identifier
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
       * Block number of the trade
       */
      block_number: number;

      /**
       * Block timestamp
       */
      block_timestamp: string;

      /**
       * From-token contract address
       */
      from_token_address: string;

      /**
       * Amount of token sent
       */
      from_token_amount: string;

      /**
       * Trade kind (buy or sell)
       */
      kind: string;

      /**
       * Price of from-token in currency token
       */
      price_from_in_currency_token: string;

      /**
       * Price of from-token in USD
       */
      price_from_in_usd: string;

      /**
       * Price of to-token in currency token
       */
      price_to_in_currency_token: string;

      /**
       * Price of to-token in USD
       */
      price_to_in_usd: string;

      /**
       * To-token contract address
       */
      to_token_address: string;

      /**
       * Amount of token received
       */
      to_token_amount: string;

      /**
       * Transaction sender address
       */
      tx_from_address: string;

      /**
       * Transaction hash
       */
      tx_hash: string;

      /**
       * Trade volume in USD
       */
      volume_in_usd: string;
    }
  }
}

export interface TradeGetParams {
  /**
   * Path param: Network ID. \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  network: string;

  /**
   * Query param: Return trades for token, use this to invert the chart. Available
   * values: `base`, `quote`, or token address. Default: `base`
   */
  token?: string;

  /**
   * Query param: Filter trades by trade volume in USD greater than this value.
   * Default value: 0
   */
  trade_volume_in_usd_greater_than?: number;
}

export declare namespace Trades {
  export { type TradeGetResponse as TradeGetResponse, type TradeGetParams as TradeGetParams };
}
