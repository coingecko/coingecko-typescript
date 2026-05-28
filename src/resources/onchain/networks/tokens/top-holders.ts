// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class TopHolders extends APIResource {
  /**
   * To query top token holders based on the provided token contract address on a
   * network
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
  data: TopHolderGetResponse.Data;
}

export namespace TopHolderGetResponse {
  export interface Data {
    /**
     * Token identifier
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
      holders: Array<Attributes.Holder>;

      /**
       * Data last updated timestamp
       */
      last_updated_at: string;
    }

    export namespace Attributes {
      export interface Holder {
        /**
         * Holder wallet address
         */
        address: string;

        /**
         * Token amount held
         */
        amount: string;

        /**
         * Address label
         */
        label: string | null;

        /**
         * Percentage of total supply held
         */
        percentage: string;

        /**
         * Holder rank
         */
        rank: number;

        /**
         * Value of holdings in USD
         */
        value: string;

        /**
         * Average buy price in USD
         */
        average_buy_price_usd?: string | null;

        /**
         * Block explorer URL for the holder address
         */
        explorer_url?: string;

        /**
         * Realized PnL percentage
         */
        realized_pnl_percentage?: string | null;

        /**
         * Realized PnL in USD
         */
        realized_pnl_usd?: string | null;

        /**
         * Total number of buy transactions
         */
        total_buy_count?: number | null;

        /**
         * Total number of sell transactions
         */
        total_sell_count?: number | null;

        /**
         * Unrealized PnL percentage
         */
        unrealized_pnl_percentage?: string | null;

        /**
         * Unrealized PnL in USD
         */
        unrealized_pnl_usd?: string | null;
      }
    }
  }
}

export interface TopHolderGetParams {
  /**
   * Path param: Network ID. \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  network: string;

  /**
   * Query param: Number of top token holders to return, any integer or `max`.
   * Default value: 10
   */
  holders?: string;

  /**
   * Query param: Include PnL details for token holders. Default: `false`
   */
  include_pnl_details?: boolean;
}

export declare namespace TopHolders {
  export { type TopHolderGetResponse as TopHolderGetResponse, type TopHolderGetParams as TopHolderGetParams };
}
