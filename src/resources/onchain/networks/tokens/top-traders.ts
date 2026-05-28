// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class TopTraders extends APIResource {
  /**
   * To query top token traders based on the provided token contract address on a
   * network
   */
  get(
    tokenAddress: string,
    params: TopTraderGetParams,
    options?: RequestOptions,
  ): APIPromise<TopTraderGetResponse> {
    const { network_id, ...query } = params;
    return this._client.get(path`/onchain/networks/${network_id}/tokens/${tokenAddress}/top_traders`, {
      query,
      ...options,
    });
  }
}

export interface TopTraderGetResponse {
  data: TopTraderGetResponse.Data;
}

export namespace TopTraderGetResponse {
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
      traders: Array<Attributes.Trader>;
    }

    export namespace Attributes {
      export interface Trader {
        /**
         * Trader wallet address
         */
        address: string;

        /**
         * Average buy price in USD
         */
        average_buy_price_usd: string;

        /**
         * Average sell price in USD
         */
        average_sell_price_usd: string;

        /**
         * Block explorer URL for the trader address
         */
        explorer_url: string;

        /**
         * Realized PnL in USD
         */
        realized_pnl_usd: string;

        /**
         * Current token balance
         */
        token_balance: string | null;

        /**
         * Total number of buy transactions
         */
        total_buy_count: number;

        /**
         * Total buy token amount
         */
        total_buy_token_amount: string;

        /**
         * Total buy amount in USD
         */
        total_buy_usd: string;

        /**
         * Total number of sell transactions
         */
        total_sell_count: number;

        /**
         * Total sell token amount
         */
        total_sell_token_amount: string;

        /**
         * Total sell amount in USD
         */
        total_sell_usd: string;

        /**
         * Unrealized PnL in USD
         */
        unrealized_pnl_usd: string | null;

        /**
         * Address label
         */
        label?: string | null;

        /**
         * Address label name
         */
        name?: string | null;

        /**
         * Address type
         */
        type?: string | null;
      }
    }
  }
}

export interface TopTraderGetParams {
  /**
   * Path param: Network ID. \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  network_id: string;

  /**
   * Query param: Include address label data. Default: `false`
   */
  include_address_label?: boolean;

  /**
   * Query param: Sort the traders by field. Default: `realized_pnl_usd_desc`
   */
  sort?: 'realized_pnl_usd_desc' | 'unrealized_pnl_usd_desc' | 'total_buy_usd_desc' | 'total_sell_usd_desc';

  /**
   * Query param: Number of top token traders to return, any integer or `max`.
   * Default value: 10
   */
  traders?: string;
}

export declare namespace TopTraders {
  export { type TopTraderGetResponse as TopTraderGetResponse, type TopTraderGetParams as TopTraderGetParams };
}
