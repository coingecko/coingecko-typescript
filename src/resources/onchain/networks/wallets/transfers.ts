// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Transfers extends APIResource {
  /**
   * To query the token transfers of a wallet address on a network
   */
  get(address: string, params: TransferGetParams, options?: RequestOptions): APIPromise<TransferGetResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/wallets/${address}/transfers`, {
      query,
      ...options,
    });
  }
}

export interface TransferGetResponse {
  data: Array<TransferGetResponse.Data>;

  meta: TransferGetResponse.Meta;
}

export namespace TransferGetResponse {
  export interface Data {
    /**
     * Transfer identifier
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
       * Transfer amount at full precision
       */
      amount: string | null;

      /**
       * Transfer amount in the smallest unit, before decimals are applied
       */
      amount_raw: string;

      /**
       * Block number of the transfer
       */
      block_number: number;

      /**
       * Block timestamp of the transfer
       */
      block_timestamp: string;

      /**
       * Token decimals
       */
      decimals: number;

      /**
       * Transfer direction relative to the queried wallet, either in or out
       */
      direction: string;

      /**
       * Sender address
       */
      from_address: string;

      /**
       * Token name
       */
      name: string;

      /**
       * Token symbol
       */
      symbol: string;

      /**
       * Recipient address
       */
      to_address: string;

      /**
       * Token contract address
       */
      token_address: string;

      /**
       * Transaction hash
       */
      tx_hash: string;
    }
  }

  export interface Meta {
    /**
     * Cursor for the next page, null when there are no further pages
     */
    next_cursor: string | null;
  }
}

export interface TransferGetParams {
  /**
   * Path param: Network ID. \*refers to
   * [supported networks](/reference/wallet-token-transfers#supported-networks).
   */
  network: string;

  /**
   * Query param: Filter transfers by token contract address.
   */
  token?: string;

  /**
   * Query param: Cursor from the previous response, passed back unchanged to fetch
   * the next page.
   */
  cursor?: string;

  /**
   * Query param: Filter transfers by direction, relative to the queried wallet. Omit
   * to return both.
   */
  direction?: 'in' | 'out';

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

export declare namespace Transfers {
  export { type TransferGetResponse as TransferGetResponse, type TransferGetParams as TransferGetParams };
}
