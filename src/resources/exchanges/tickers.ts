// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tickers extends APIResource {
  /**
   * This endpoint allows you to **query exchange's tickers based on exchange’s ID**
   *
   * @example
   * ```ts
   * const ticker = await client.exchanges.tickers.get(
   *   'binance',
   * );
   * ```
   */
  get(
    id: string,
    query: TickerGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TickerGetResponse> {
    return this._client.get(path`/exchanges/${id}/tickers`, { query, ...options });
  }
}

export interface TickerGetResponse {
  /**
   * coin name
   */
  name?: string;

  /**
   * list of tickers
   */
  tickers?: Array<TickerGetResponse.Ticker>;
}

export namespace TickerGetResponse {
  export interface Ticker {
    /**
     * coin ticker base currency
     */
    base?: string;

    /**
     * coin ticker bid ask spread percentage
     */
    bid_ask_spread_percentage?: number;

    /**
     * coin ticker base currency coin ID
     */
    coin_id?: string;

    /**
     * coin ticker converted last price
     */
    converted_last?: Ticker.ConvertedLast;

    /**
     * coin ticker converted volume
     */
    converted_volume?: Ticker.ConvertedVolume;

    /**
     * coin ticker cost to move down in usd
     */
    cost_to_move_down_usd?: number;

    /**
     * coin ticker cost to move up in usd
     */
    cost_to_move_up_usd?: number;

    /**
     * coin ticker anomaly
     */
    is_anomaly?: boolean;

    /**
     * coin ticker stale
     */
    is_stale?: boolean;

    /**
     * coin ticker last price
     */
    last?: number;

    /**
     * coin ticker last fetch timestamp
     */
    last_fetch_at?: string;

    /**
     * coin ticker last traded timestamp
     */
    last_traded_at?: string;

    /**
     * coin ticker exchange
     */
    market?: Ticker.Market;

    /**
     * coin ticker target currency
     */
    target?: string;

    /**
     * coin ticker target currency coin ID
     */
    target_coin_id?: string;

    /**
     * coin ticker timestamp
     */
    timestamp?: string;

    /**
     * coin ticker token info url
     */
    token_info_url?: string | null;

    /**
     * coin ticker trade url
     */
    trade_url?: string;

    /**
     * coin ticker trust score
     */
    trust_score?: string;

    /**
     * coin ticker volume
     */
    volume?: number;
  }

  export namespace Ticker {
    /**
     * coin ticker converted last price
     */
    export interface ConvertedLast {
      btc?: number;

      eth?: number;

      usd?: number;
    }

    /**
     * coin ticker converted volume
     */
    export interface ConvertedVolume {
      btc?: number;

      eth?: number;

      usd?: number;
    }

    /**
     * coin ticker exchange
     */
    export interface Market {
      /**
       * exchange trading incentive
       */
      has_trading_incentive: boolean;

      /**
       * exchange identifier
       */
      identifier: string;

      /**
       * exchange name
       */
      name: string;

      /**
       * exchange image url
       */
      logo?: string;
    }
  }
}

export interface TickerGetParams {
  /**
   * filter tickers by coin IDs, comma-separated if querying more than 1 coin
   * \*refers to [`/coins/list`](/reference/coins-list).
   */
  coin_ids?: string;

  /**
   * include 2% orderbook depth (Example: cost_to_move_up_usd &
   * cost_to_move_down_usd),default: false
   */
  depth?: boolean;

  /**
   * set to `symbol` to display DEX pair base and target as symbols, default:
   * `contract_address`
   */
  dex_pair_format?: 'contract_address' | 'symbol';

  /**
   * include exchange logo, default: false
   */
  include_exchange_logo?: boolean;

  /**
   * use this to sort the order of responses, default: trust_score_desc
   */
  order?: 'trust_score_desc' | 'trust_score_asc' | 'volume_desc' | 'volume_asc' | 'base_target';

  /**
   * page through results
   */
  page?: number;
}

export declare namespace Tickers {
  export { type TickerGetResponse as TickerGetResponse, type TickerGetParams as TickerGetParams };
}
