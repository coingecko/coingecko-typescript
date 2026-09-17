// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Trades extends APIResource {
  /**
   * To query the trades, across all pools, based on the provided token contract
   * address on a network
   */
  get(tokenAddress: string, params: TradeGetParams, options?: RequestOptions): APIPromise<TradeGetResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/tokens/${tokenAddress}/trades`, {
      query,
      ...options,
    });
  }

  /**
   * To query the trades, across all pools, within a range of timestamp based on the
   * provided token contract address on a network
   */
  getRange(
    tokenAddress: string,
    params: TradeGetRangeParams,
    options?: RequestOptions,
  ): APIPromise<TradeGetRangeResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/tokens/${tokenAddress}/trades/range`, {
      query,
      ...options,
    });
  }
}

export interface TradeGetResponse {
  data: Array<TradeGetResponse.Data>;

  meta?: TradeGetResponse.Meta;
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

export interface TradeGetRangeResponse {
  data: Array<TradeGetRangeResponse.Data>;

  meta?: TradeGetRangeResponse.Meta;
}

export namespace TradeGetRangeResponse {
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
   * Query param: Cursor from the previous response, passed back unchanged to fetch
   * the next page.
   */
  cursor?: string;

  /**
   * Query param: Total results per page. Default value: 300 Valid values: 1...300
   */
  per_page?: number;

  /**
   * Query param: Filter trades by trade volume in USD greater than this value.
   * Default value: 0
   */
  trade_volume_in_usd_greater_than?: number;

  /**
   * Query param: Lookback period for trades. Default: `1d`
   */
  trading_period?: '1d' | '7d' | '30d';
}

export interface TradeGetRangeParams {
  /**
   * Path param: Network ID. \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  network: string;

  /**
   * Query param: Starting date in ISO date string (`YYYY-MM-DD` or
   * `YYYY-MM-DDTHH:MM`) or UNIX timestamp. **Use ISO date string for best
   * compatibility.**
   */
  from: string;

  /**
   * Query param: Ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`)
   * or UNIX timestamp. **Use ISO date string for best compatibility.**
   */
  to: string;

  /**
   * Query param: Cursor from the previous response, passed back unchanged to fetch
   * the next page.
   */
  cursor?: string;

  /**
   * Query param: Total results per page. Default value: 100 Valid values: 1...300
   */
  per_page?: number;

  /**
   * Query param: Filter trades by trade volume in USD greater than this value.
   * Default value: 0
   */
  trade_volume_in_usd_greater_than?: number;
}

export declare namespace Trades {
  export {
    type TradeGetResponse as TradeGetResponse,
    type TradeGetRangeResponse as TradeGetRangeResponse,
    type TradeGetParams as TradeGetParams,
    type TradeGetRangeParams as TradeGetRangeParams,
  };
}
