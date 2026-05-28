// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tickers extends APIResource {
  /**
   * To query exchange's tickers based on exchange's ID
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
   * Coin name
   */
  name: string;

  /**
   * List of tickers
   */
  tickers: Array<TickerGetResponse.Ticker>;
}

export namespace TickerGetResponse {
  export interface Ticker {
    /**
     * Ticker base currency
     */
    base: string;

    /**
     * Bid-ask spread percentage
     */
    bid_ask_spread_percentage: number;

    /**
     * Base currency coin ID
     */
    coin_id: string;

    /**
     * Coin market cap in USD
     */
    coin_mcap_usd: number;

    /**
     * Converted last price
     */
    converted_last: Ticker.ConvertedLast;

    /**
     * Converted trading volume
     */
    converted_volume: Ticker.ConvertedVolume;

    /**
     * Whether ticker is anomalous
     */
    is_anomaly: boolean;

    /**
     * Whether ticker is stale
     */
    is_stale: boolean;

    /**
     * Last price
     */
    last: number;

    /**
     * Last fetch timestamp
     */
    last_fetch_at: string;

    /**
     * Last traded timestamp
     */
    last_traded_at: string;

    /**
     * Exchange information
     */
    market: Ticker.Market;

    /**
     * Ticker target currency
     */
    target: string;

    /**
     * Target currency coin ID
     */
    target_coin_id: string;

    /**
     * Ticker timestamp
     */
    timestamp: string;

    /**
     * Token info URL
     */
    token_info_url: string | null;

    /**
     * Trade URL
     */
    trade_url: string;

    /**
     * Trust score
     */
    trust_score: string | null;

    /**
     * Trading volume
     */
    volume: number;

    /**
     * Cost to move price down by 2% in USD
     */
    cost_to_move_down_usd?: number;

    /**
     * Cost to move price up by 2% in USD
     */
    cost_to_move_up_usd?: number;
  }

  export namespace Ticker {
    /**
     * Converted last price
     */
    export interface ConvertedLast {
      btc?: number;

      eth?: number;

      usd?: number;
    }

    /**
     * Converted trading volume
     */
    export interface ConvertedVolume {
      btc?: number;

      eth?: number;

      usd?: number;
    }

    /**
     * Exchange information
     */
    export interface Market {
      /**
       * Exchange trading incentive
       */
      has_trading_incentive?: boolean;

      /**
       * Exchange identifier
       */
      identifier?: string;

      /**
       * Exchange logo URL
       */
      logo?: string;

      /**
       * Exchange name
       */
      name?: string;
    }
  }
}

export interface TickerGetParams {
  /**
   * Filter tickers by coin IDs, comma-separated if querying more than 1 coin.
   * \*refers to [`/coins/list`](/reference/coins-list).
   */
  coin_ids?: string;

  /**
   * Include 2% orderbook depth (cost_to_move_up_usd and cost_to_move_down_usd).
   * Default: false
   */
  depth?: boolean;

  /**
   * Set to `symbol` to display DEX pair base and target as symbols. Default:
   * `contract_address`
   */
  dex_pair_format?: 'contract_address' | 'symbol';

  /**
   * Include exchange logo. Default: false
   */
  include_exchange_logo?: boolean;

  /**
   * Sort the order of responses. Default: `trust_score_desc`
   */
  order?:
    | 'market_cap_asc'
    | 'market_cap_desc'
    | 'trust_score_desc'
    | 'trust_score_asc'
    | 'volume_desc'
    | 'volume_asc'
    | 'base_target';

  /**
   * Page through results.
   */
  page?: number;
}

export declare namespace Tickers {
  export { type TickerGetResponse as TickerGetResponse, type TickerGetParams as TickerGetParams };
}
