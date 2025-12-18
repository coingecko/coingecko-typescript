// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PublicTreasury extends APIResource {
  /**
   * This endpoint allows you **query public companies & governments' cryptocurrency
   * holdings** by Coin ID
   *
   * @example
   * ```ts
   * const response = await client.publicTreasury.getCoinID(
   *   'bitcoin',
   *   { entity: 'companies' },
   * );
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

  /**
   * This endpoint allows you **query public companies & governments' cryptocurrency
   * holdings** by Entity ID
   *
   * @example
   * ```ts
   * const response = await client.publicTreasury.getEntityID(
   *   'strategy',
   * );
   * ```
   */
  getEntityID(entityID: string, options?: RequestOptions): APIPromise<PublicTreasuryGetEntityIDResponse> {
    return this._client.get(path`/public_treasury/${entityID}`, options);
  }

  /**
   * This endpoint allows you to **query historical cryptocurrency holdings chart of
   * public companies & governments** by Entity ID and Coin ID
   *
   * @example
   * ```ts
   * const response =
   *   await client.publicTreasury.getHoldingChart('bitcoin', {
   *     entity_id: 'strategy',
   *     days: 'days',
   *   });
   * ```
   */
  getHoldingChart(
    coinID: string,
    params: PublicTreasuryGetHoldingChartParams,
    options?: RequestOptions,
  ): APIPromise<PublicTreasuryGetHoldingChartResponse> {
    const { entity_id, ...query } = params;
    return this._client.get(path`/public_treasury/${entity_id}/${coinID}/holding_chart`, {
      query,
      ...options,
    });
  }

  /**
   * This endpoint allows you **query public companies & governments' cryptocurrency
   * transaction history** by Entity ID
   *
   * @example
   * ```ts
   * const response =
   *   await client.publicTreasury.getTransactionHistory(
   *     'strategy',
   *   );
   * ```
   */
  getTransactionHistory(
    entityID: string,
    query: PublicTreasuryGetTransactionHistoryParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PublicTreasuryGetTransactionHistoryResponse> {
    return this._client.get(path`/public_treasury/${entityID}/transaction_history`, { query, ...options });
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

export interface PublicTreasuryGetEntityIDResponse {
  /**
   * entity ID
   */
  id?: string;

  /**
   * country code of company or government location
   */
  country?: string;

  /**
   * list of cryptocurrency assets held by the entity
   */
  holdings?: Array<PublicTreasuryGetEntityIDResponse.Holding>;

  /**
   * entity name
   */
  name?: string;

  /**
   * stock market symbol for public company
   */
  symbol?: string;

  /**
   * official Twitter handle of the entity
   */
  twitter_screen_name?: string;

  /**
   * entity type: company or government
   */
  type?: string;

  /**
   * official website URL of the entity
   */
  website_url?: string;
}

export namespace PublicTreasuryGetEntityIDResponse {
  export interface Holding {
    /**
     * amount of the cryptocurrency held
     */
    amount?: number;

    /**
     * coin ID
     */
    coin_id?: string;

    /**
     * percentage of total crypto supply
     */
    percentage_of_total_supply?: number;
  }
}

export interface PublicTreasuryGetHoldingChartResponse {
  holding_value_in_usd?: Array<Array<number>>;

  holdings?: Array<Array<number>>;
}

export interface PublicTreasuryGetTransactionHistoryResponse {
  transactions?: Array<PublicTreasuryGetTransactionHistoryResponse.Transaction>;
}

export namespace PublicTreasuryGetTransactionHistoryResponse {
  export interface Transaction {
    /**
     * average entry value in usd after the transaction
     */
    average_entry_value_usd?: number;

    /**
     * coin ID
     */
    coin_id?: string;

    /**
     * transaction date in UNIX timestamp
     */
    date?: number;

    /**
     * total holding balance after the transaction
     */
    holding_balance?: number;

    /**
     * net change in holdings after the transaction
     */
    holding_net_change?: number;

    /**
     * source document URL
     */
    source_url?: string;

    /**
     * transaction value in usd
     */
    transaction_value_usd?: number;

    /**
     * transaction type: buy or sell
     */
    type?: 'buy' | 'sell';
  }
}

export interface PublicTreasuryGetCoinIDParams {
  /**
   * public company or government entity
   */
  entity: 'companies' | 'governments';
}

export interface PublicTreasuryGetHoldingChartParams {
  /**
   * Path param: public company or government entity ID \*refers to
   * [`/entities/list`](/reference/entities-list).
   */
  entity_id: string;

  /**
   * Query param: data up to number of days ago Valid values:
   * `7, 14, 30, 90, 180, 365, 730, max`
   */
  days: string;

  /**
   * Query param: include empty intervals with no transaction data, default: false
   */
  include_empty_intervals?: boolean;
}

export interface PublicTreasuryGetTransactionHistoryParams {
  /**
   * filter transactions by coin IDs, comma-separated if querying more than 1 coin
   * \*refers to [`/coins/list`](/reference/coins-list).
   */
  coin_ids?: string;

  /**
   * use this to sort the order of transactions, default: `date_desc`
   */
  order?:
    | 'date_desc'
    | 'date_asc'
    | 'holding_net_change_desc'
    | 'holding_net_change_asc'
    | 'transaction_value_usd_desc'
    | 'transaction_value_usd_asc'
    | 'average_cost_desc'
    | 'average_cost_asc';

  /**
   * page through results, default: `1`
   */
  page?: number;

  /**
   * total results per page, default: `100` Valid values: 1...250
   */
  per_page?: number;
}

export declare namespace PublicTreasury {
  export {
    type PublicTreasuryGetCoinIDResponse as PublicTreasuryGetCoinIDResponse,
    type PublicTreasuryGetEntityIDResponse as PublicTreasuryGetEntityIDResponse,
    type PublicTreasuryGetHoldingChartResponse as PublicTreasuryGetHoldingChartResponse,
    type PublicTreasuryGetTransactionHistoryResponse as PublicTreasuryGetTransactionHistoryResponse,
    type PublicTreasuryGetCoinIDParams as PublicTreasuryGetCoinIDParams,
    type PublicTreasuryGetHoldingChartParams as PublicTreasuryGetHoldingChartParams,
    type PublicTreasuryGetTransactionHistoryParams as PublicTreasuryGetTransactionHistoryParams,
  };
}
