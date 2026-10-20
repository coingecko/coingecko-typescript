// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class LiquidityEvents extends APIResource {
  /**
   * To query the add and remove liquidity events based on the provided pool address
   */
  get(
    poolAddress: string,
    params: LiquidityEventGetParams,
    options?: RequestOptions,
  ): APIPromise<LiquidityEventGetResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/pools/${poolAddress}/liquidity_events`, {
      query,
      ...options,
    });
  }
}

export interface LiquidityEventGetResponse {
  data: Array<LiquidityEventGetResponse.Data>;

  meta?: LiquidityEventGetResponse.Meta;
}

export namespace LiquidityEventGetResponse {
  export interface Data {
    /**
     * Liquidity event identifier
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
       * Base token contract address
       */
      base_token_address: string;

      /**
       * Amount of base token added or removed
       */
      base_token_amount: string;

      /**
       * Price of base token in USD at the time of the event
       */
      base_token_price_in_usd: string;

      /**
       * Block number of the liquidity event
       */
      block_number: number;

      /**
       * Block timestamp
       */
      block_timestamp: string;

      /**
       * Liquidity event kind (add or remove)
       */
      kind: 'add' | 'remove';

      /**
       * Quote token contract address
       */
      quote_token_address: string;

      /**
       * Amount of quote token added or removed
       */
      quote_token_amount: string;

      /**
       * Price of quote token in USD at the time of the event
       */
      quote_token_price_in_usd: string;

      /**
       * Transaction sender address
       */
      tx_from_address: string;

      /**
       * Transaction hash
       */
      tx_hash: string;

      /**
       * Total value of the liquidity event in USD
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

export interface LiquidityEventGetParams {
  /**
   * Path param: Network ID. \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  network: string;

  /**
   * Query param: Cursor from the previous response, passed back unchanged to fetch
   * the next page.
   */
  cursor?: string;

  /**
   * Query param: Filter by liquidity event kind, omit to return both. Available
   * values: `add`, `remove`
   */
  kind?: 'add' | 'remove';

  /**
   * Query param: Total results per page. Default value: 20 Valid values: 1...50
   */
  per_page?: number;

  /**
   * Query param: Filter liquidity events by volume in USD greater than this value.
   * Must be a positive number.
   */
  volume_in_usd_greater_than?: number;
}

export declare namespace LiquidityEvents {
  export {
    type LiquidityEventGetResponse as LiquidityEventGetResponse,
    type LiquidityEventGetParams as LiquidityEventGetParams,
  };
}
