// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Trades extends APIResource {
  /**
   * To query the trades of a wallet address on a network
   */
  get(address: string, params: TradeGetParams, options?: RequestOptions): APIPromise<TradeGetResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/wallets/${address}/trades`, {
      query,
      ...options,
    });
  }
}

export interface TradeGetResponse {
  data: Array<TradeGetResponse.Data>;

  meta: TradeGetResponse.Meta;
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
       * Block timestamp of the trade
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
       * Trade kind, either buy or sell
       */
      kind: string;

      /**
       * Pool contract address where the trade occurred
       */
      pool_address: string;

      /**
       * DEX identifier of the pool
       */
      pool_dex: string;

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

  export interface Meta {
    /**
     * Cursor for the next page, null when there are no further pages
     */
    next_cursor: string | null;
  }
}

export interface TradeGetParams {
  /**
   * Path param: Network ID. \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  network: string;

  /**
   * Query param: Filter trades by token contract address, returning only trades
   * involving this token.
   */
  token?: string;

  /**
   * Query param: Cursor from the previous response, passed back unchanged to fetch
   * the next page.
   */
  cursor?: string;

  /**
   * Query param: Starting date in ISO date string (`YYYY-MM-DD` or
   * `YYYY-MM-DDTHH:MM`) or UNIX timestamp. **Use ISO date string for best
   * compatibility.** Must be provided together with `to`.
   */
  from?: string;

  /**
   * Query param: Total results per page. Default value: 100 Valid values: 1...300
   */
  per_page?: number;

  /**
   * Query param: Ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`)
   * or UNIX timestamp. **Use ISO date string for best compatibility.** Must be
   * provided together with `from`.
   */
  to?: string;
}

export declare namespace Trades {
  export { type TradeGetResponse as TradeGetResponse, type TradeGetParams as TradeGetParams };
}
