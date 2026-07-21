// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class SupplyBreakdown extends APIResource {
  /**
   * To query the supply breakdown of a coin based on provided coin ID
   */
  get(id: string, options?: RequestOptions): APIPromise<SupplyBreakdownGetResponse> {
    return this._client.get(path`/coins/${id}/supply_breakdown`, options);
  }
}

export interface SupplyBreakdownGetResponse {
  /**
   * Coin ID
   */
  id: string;

  /**
   * Coin name
   */
  name: string;

  /**
   * List of non-circulating wallets
   */
  non_circulating_wallets: Array<SupplyBreakdownGetResponse.NonCirculatingWallet>;

  /**
   * Supply data
   */
  supply_data: SupplyBreakdownGetResponse.SupplyData;

  /**
   * Coin symbol
   */
  symbol: string;
}

export namespace SupplyBreakdownGetResponse {
  export interface NonCirculatingWallet {
    /**
     * Wallet address
     */
    address?: string;

    /**
     * Indicates an unreliable balance update; when true, circulating supply falls back
     * to the last known-good balance
     */
    anomaly?: boolean;

    /**
     * Wallet balance
     */
    balance?: number;

    /**
     * Wallet label
     */
    label?: string;

    /**
     * Last updated timestamp in ISO 8601 format
     */
    last_updated?: string;

    /**
     * Percentage of total supply held by this wallet
     */
    percentage_of_total_supply?: number;
  }

  /**
   * Supply data
   */
  export interface SupplyData {
    /**
     * Circulating supply
     */
    circulating_supply?: number;

    /**
     * Last updated timestamp in ISO 8601 format
     */
    last_updated?: string;

    /**
     * Non-circulating supply
     */
    non_circulating_supply?: number;

    /**
     * Outstanding supply
     */
    outstanding_supply?: number;

    /**
     * Total supply
     */
    total_supply?: number;
  }
}

export declare namespace SupplyBreakdown {
  export { type SupplyBreakdownGetResponse as SupplyBreakdownGetResponse };
}
