// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class DecentralizedFinanceDefi extends APIResource {
  /**
   * This endpoint allows you **query top 100 cryptocurrency global decentralized
   * finance (DeFi) data including DeFi market cap, trading volume**
   *
   * @example
   * ```ts
   * const decentralizedFinanceDefi =
   *   await client.global.decentralizedFinanceDefi.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<DecentralizedFinanceDefiGetResponse> {
    return this._client.get('/global/decentralized_finance_defi', options);
  }
}

export interface DecentralizedFinanceDefiGetResponse {
  data?: DecentralizedFinanceDefiGetResponse.Data;
}

export namespace DecentralizedFinanceDefiGetResponse {
  export interface Data {
    /**
     * defi dominance
     */
    defi_dominance?: string;

    /**
     * defi market cap
     */
    defi_market_cap?: string;

    /**
     * defi to eth ratio
     */
    defi_to_eth_ratio?: string;

    /**
     * eth market cap
     */
    eth_market_cap?: string;

    /**
     * defi top coin dominance
     */
    top_coin_defi_dominance?: number;

    /**
     * defi top coin name
     */
    top_coin_name?: string;

    /**
     * defi trading volume in 24 hours
     */
    trading_volume_24h?: string;
  }
}

export declare namespace DecentralizedFinanceDefi {
  export { type DecentralizedFinanceDefiGetResponse as DecentralizedFinanceDefiGetResponse };
}
