// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class TopTraders extends APIResource {
  /**
   * This endpoint allows you to **query top token traders based on the provided
   * token contract address on a network**
   *
   * @example
   * ```ts
   * const topTrader =
   *   await client.onchain.networks.tokens.topTraders.get(
   *     '0x6921b130d297cc43754afba22e5eac0fbf8db75b',
   *     { network_id: 'base' },
   *   );
   * ```
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
  data?: TopTraderGetResponse.Data;
}

export namespace TopTraderGetResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      traders?: Array<Attributes.Trader>;
    }

    export namespace Attributes {
      export interface Trader {
        address?: string;

        average_buy_price_usd?: string;

        average_sell_price_usd?: string;

        explorer_url?: string;

        label?: string;

        name?: string;

        realized_pnl_usd?: string;

        token_balance?: string;

        total_buy_count?: number;

        total_buy_token_amount?: string;

        total_buy_usd?: string;

        total_sell_count?: number;

        total_sell_token_amount?: string;

        total_sell_usd?: string;

        type?: string;

        unrealized_pnl_usd?: string;
      }
    }
  }
}

export interface TopTraderGetParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network_id: string;

  /**
   * Query param: include address label data, default: false
   */
  include_address_label?: boolean;

  /**
   * Query param: sort the traders by field Default value: realized_pnl_usd_desc
   */
  sort?: 'realized_pnl_usd_desc' | 'unrealized_pnl_usd_desc' | 'total_buy_usd_desc' | 'total_sell_usd_desc';

  /**
   * Query param: number of top token traders to return, you may use any integer or
   * `max` Default value: 10
   */
  traders?: string;
}

export declare namespace TopTraders {
  export { type TopTraderGetResponse as TopTraderGetResponse, type TopTraderGetParams as TopTraderGetParams };
}
