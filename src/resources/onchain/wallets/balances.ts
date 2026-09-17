// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Balances extends APIResource {
  /**
   * To query the token balances of a wallet address across networks
   */
  get(address: string, query: BalanceGetParams, options?: RequestOptions): APIPromise<BalanceGetResponse> {
    return this._client.get(path`/onchain/wallets/${address}/balances`, { query, ...options });
  }
}

export interface BalanceGetResponse {
  data: BalanceGetResponse.Data;
}

export namespace BalanceGetResponse {
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
       * Token holdings, one entry per token
       */
      balances: Array<Attributes.Balance>;

      /**
       * Value and holding count per network, listing only networks holding a matching
       * balance
       */
      networks: Array<Attributes.Network>;

      /**
       * Number of matching holdings across the requested networks only
       */
      total_holdings: number;

      /**
       * Total value of matching holdings in USD, across the requested networks only
       */
      total_value_usd: string;

      /**
       * Wallet address queried
       */
      wallet_address: string;
    }

    export namespace Attributes {
      export interface Balance {
        /**
         * Token contract address
         */
        address: string;

        /**
         * Token balance at full precision
         */
        balance: string | null;

        /**
         * Token balance in the smallest unit, before decimals are applied
         */
        balance_raw: string;

        /**
         * CoinGecko coin ID
         */
        coingecko_coin_id: string | null;

        /**
         * Token decimals
         */
        decimals: number;

        /**
         * 24hr price change percentage
         */
        h24_price_change_percentage: string | null;

        /**
         * Token name
         */
        name: string;

        /**
         * Network ID
         */
        network: string;

        /**
         * Token price in USD
         */
        price_usd: string | null;

        /**
         * Token symbol
         */
        symbol: string;

        /**
         * Token type, such as native, erc20 or spl
         */
        token_type: string;

        /**
         * Total reserve in USD across all pools of the token
         */
        total_reserve_in_usd: string | null;

        /**
         * Value of the holding in USD
         */
        value_usd: string | null;
      }

      export interface Network {
        /**
         * Number of matching holdings on this network
         */
        holdings: number;

        /**
         * Last updated timestamp
         */
        last_updated_at: string;

        /**
         * Network ID
         */
        network: string;

        /**
         * Total value of matching holdings on this network in USD
         */
        value_usd: string;
      }
    }
  }
}

export interface BalanceGetParams {
  /**
   * Query balances by networks, comma-separated if more than one. \*refers to
   * [supported networks](/reference/wallet-token-balances#supported-networks).
   */
  networks: string;

  /**
   * Page through results. Default value: 1
   */
  page?: number;

  /**
   * Total results per page. Default value: 50 Valid values: 1...100
   */
  per_page?: number;

  /**
   * Minimum total reserve in USD of the holding's token.
   */
  reserve_in_usd_min?: number;

  /**
   * Sort the holdings by field. Default: `value_usd_desc`
   */
  sort?: 'value_usd_desc' | 'value_usd_asc';

  /**
   * Filter holdings by token type. Omit to return both.
   */
  token_type?: 'native' | 'non_native';

  /**
   * Minimum holding value in USD.
   */
  value_usd_min?: number;
}

export declare namespace Balances {
  export { type BalanceGetResponse as BalanceGetResponse, type BalanceGetParams as BalanceGetParams };
}
