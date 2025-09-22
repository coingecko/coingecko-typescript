// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class PublicTreasury extends APIResource {
  /**
   * This endpoint allows you **query public companies & governments' cryptocurrency
   * holdings** by Coin ID
   *
   * @example
   * ```ts
   * const response =
   *   await client.entity.publicTreasury.getCoinID('bitcoin', {
   *     entity: 'companies',
   *   });
   * ```
   */
  getCoinID(
    coinID: string,
    params: PublicTreasuryGetCoinIDParams,
    options?: RequestOptions,
  ): APIPromise<PublicTreasuryGetCoinIDResponse> {
    const { entity } = params;
    return this._client.get(path`/${entity}/public_treasury/${coinID}`, options);
  }
}

export interface PublicTreasuryGetCoinIDResponse {
  companies?: Array<PublicTreasuryGetCoinIDResponse.Company>;

  /**
   * market cap dominance
   */
  market_cap_dominance?: number;

  /**
   * total crypto holdings of companies or government
   */
  total_holdings?: number;

  /**
   * total crypto holdings value in usd
   */
  total_value_usd?: number;
}

export namespace PublicTreasuryGetCoinIDResponse {
  export interface Company {
    /**
     * company incorporated or government country
     */
    country?: string;

    /**
     * company or government name
     */
    name?: string;

    /**
     * percentage of total crypto supply
     */
    percentage_of_total_supply?: number;

    /**
     * company symbol
     */
    symbol?: string;

    /**
     * total current value of crypto holdings in usd
     */
    total_current_value_usd?: number;

    /**
     * total entry value in usd
     */
    total_entry_value_usd?: number;

    /**
     * total crypto holdings of company
     */
    total_holdings?: number;
  }
}

export interface PublicTreasuryGetCoinIDParams {
  /**
   * public company or government entity
   */
  entity: 'companies' | 'governments';
}

export declare namespace PublicTreasury {
  export {
    type PublicTreasuryGetCoinIDResponse as PublicTreasuryGetCoinIDResponse,
    type PublicTreasuryGetCoinIDParams as PublicTreasuryGetCoinIDParams,
  };
}
