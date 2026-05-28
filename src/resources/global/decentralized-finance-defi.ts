// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class DecentralizedFinanceDefi extends APIResource {
  /**
   * To query top 100 cryptocurrency global decentralized finance (DeFi) data
   * including DeFi market cap, trading volume
   */
  get(options?: RequestOptions): APIPromise<DecentralizedFinanceDefiGetResponse> {
    return this._client.get('/global/decentralized_finance_defi', options);
  }
}

export interface DecentralizedFinanceDefiGetResponse {
  data: DecentralizedFinanceDefiGetResponse.Data;
}

export namespace DecentralizedFinanceDefiGetResponse {
  export interface Data {
    /**
     * DeFi dominance percentage
     */
    defi_dominance: string;

    /**
     * DeFi market cap
     */
    defi_market_cap: string;

    /**
     * DeFi to ETH ratio
     */
    defi_to_eth_ratio: string;

    /**
     * ETH market cap
     */
    eth_market_cap: string;

    /**
     * DeFi top coin dominance percentage
     */
    top_coin_defi_dominance: number;

    /**
     * DeFi top coin name
     */
    top_coin_name: string;

    /**
     * DeFi trading volume in 24 hours
     */
    trading_volume_24h: string;
  }
}

export declare namespace DecentralizedFinanceDefi {
  export { type DecentralizedFinanceDefiGetResponse as DecentralizedFinanceDefiGetResponse };
}
