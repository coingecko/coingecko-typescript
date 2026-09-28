// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Pnl extends APIResource {
  /**
   * To query the PnL of a wallet address across networks
   */
  get(address: string, query: PnlGetParams, options?: RequestOptions): APIPromise<PnlGetResponse> {
    return this._client.get(path`/onchain/wallets/${address}/pnl`, { query, ...options });
  }
}

export interface PnlGetResponse {
  data: PnlGetResponse.Data;
}

export namespace PnlGetResponse {
  export interface Data {
    /**
     * Wallet address
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
       * Realized PnL, unrealized PnL and token count per network, listing only networks
       * where the wallet traded
       */
      networks: Array<Attributes.Network>;

      /**
       * Trading stats and PnL, one entry per token
       */
      token_stats: Array<Attributes.TokenStat>;

      /**
       * All-time realized PnL in USD, across the requested networks only
       */
      total_realized_pnl_usd: string;

      /**
       * Number of tokens traded across the requested networks only
       */
      total_tokens: number;

      /**
       * All-time unrealized PnL in USD, across the requested networks only
       */
      total_unrealized_pnl_usd: string;

      /**
       * Wallet address queried
       */
      wallet_address: string;
    }

    export namespace Attributes {
      export interface Network {
        /**
         * Network ID
         */
        network: string;

        /**
         * Realized PnL on this network in USD
         */
        realized_pnl_usd: string;

        /**
         * Number of tokens traded on this network
         */
        tokens: number;

        /**
         * Unrealized PnL on this network in USD
         */
        unrealized_pnl_usd: string;
      }

      export interface TokenStat {
        /**
         * Token contract address
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
         * Token decimals
         */
        decimals: number;

        /**
         * Token name
         */
        name: string;

        /**
         * Network ID
         */
        network: string;

        /**
         * Realized PnL in USD
         */
        realized_pnl_usd: string;

        /**
         * Token symbol
         */
        symbol: string;

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
      }
    }
  }
}

export interface PnlGetParams {
  /**
   * Query PnL by networks, comma-separated if more than one. \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  networks: string;

  /**
   * Page through results. Default value: 1
   */
  page?: number;

  /**
   * Total results per page. Default value: 100 Valid values: 1...300
   */
  per_page?: number;

  /**
   * Sort the token stats by field. Default: `realized_pnl_usd_desc`
   */
  sort?: 'realized_pnl_usd_desc' | 'unrealized_pnl_usd_desc' | 'total_buy_usd_desc' | 'total_sell_usd_desc';
}

export declare namespace Pnl {
  export { type PnlGetResponse as PnlGetResponse, type PnlGetParams as PnlGetParams };
}
