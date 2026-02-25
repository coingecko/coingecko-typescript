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
    const { entity, ...query } = params;
    return this._client.get(path`/${entity}/public_treasury/${coinID}`, { query, ...options });
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
  getEntityID(
    entityID: string,
    query: PublicTreasuryGetEntityIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PublicTreasuryGetEntityIDResponse> {
    return this._client.get(path`/public_treasury/${entityID}`, { query, ...options });
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

export type PublicTreasuryGetCoinIDResponse =
  | PublicTreasuryGetCoinIDResponse.CompaniesTreasury
  | PublicTreasuryGetCoinIDResponse.GovernmentsTreasury;

export namespace PublicTreasuryGetCoinIDResponse {
  export interface CompaniesTreasury {
    companies: Array<CompaniesTreasury.Company>;

    /**
     * market cap dominance
     */
    market_cap_dominance: number;

    /**
     * total crypto holdings of companies
     */
    total_holdings: number;

    /**
     * total crypto holdings value in usd
     */
    total_value_usd: number;
  }

  export namespace CompaniesTreasury {
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
       * total crypto holdings
       */
      total_holdings?: number;
    }
  }

  export interface GovernmentsTreasury {
    governments: Array<GovernmentsTreasury.Government>;

    /**
     * market cap dominance
     */
    market_cap_dominance: number;

    /**
     * total crypto holdings of governments
     */
    total_holdings: number;

    /**
     * total crypto holdings value in usd
     */
    total_value_usd: number;
  }

  export namespace GovernmentsTreasury {
    export interface Government {
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
       * total crypto holdings
       */
      total_holdings?: number;
    }
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
   * market to net asset value ratio
   */
  m_nav?: number;

  /**
   * entity name
   */
  name?: string;

  /**
   * stock market symbol for public company
   */
  symbol?: string;

  /**
   * total asset value per share in USD
   */
  total_asset_value_per_share_usd?: number;

  /**
   * total current value of all holdings in USD
   */
  total_treasury_value_usd?: number;

  /**
   * official Twitter handle of the entity
   */
  twitter_screen_name?: string;

  /**
   * entity type: company or government
   */
  type?: string;

  /**
   * unrealized profit and loss (current value - total entry value)
   */
  unrealized_pnl?: number;

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
     * amount of cryptocurrency per share
     */
    amount_per_share?: number;

    /**
     * average entry cost per unit in USD
     */
    average_entry_value_usd?: number;

    /**
     * coin ID
     */
    coin_id?: string;

    /**
     * current value of holdings in USD
     */
    current_value_usd?: number;

    /**
     * percentage of entity's total treasury value
     */
    entity_value_usd_percentage?: number;

    /**
     * holding amount changes over different timeframes (only present if
     * holding_amount_change param is used)
     */
    holding_amount_change?: Holding.HoldingAmountChange;

    /**
     * holding change percentages over different timeframes (only present if
     * holding_change_percentage param is used)
     */
    holding_change_percentage?: Holding.HoldingChangePercentage;

    /**
     * percentage of total crypto supply
     */
    percentage_of_total_supply?: number;

    /**
     * total entry cost/purchase value in USD
     */
    total_entry_value_usd?: number;

    /**
     * unrealized profit and loss for this holding
     */
    unrealized_pnl?: number;
  }

  export namespace Holding {
    /**
     * holding amount changes over different timeframes (only present if
     * holding_amount_change param is used)
     */
    export interface HoldingAmountChange {
      '14d'?: number;

      '1y'?: number;

      '30d'?: number;

      '7d'?: number;

      '90d'?: number;

      ytd?: number;
    }

    /**
     * holding change percentages over different timeframes (only present if
     * holding_change_percentage param is used)
     */
    export interface HoldingChangePercentage {
      '14d'?: number;

      '1y'?: number;

      '30d'?: number;

      '7d'?: number;

      '90d'?: number;

      ytd?: number;
    }
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
   * Path param: public company or government entity
   */
  entity: 'companies' | 'governments';

  /**
   * Query param: Sort order for results
   */
  order?: 'total_holdings_usd_desc' | 'total_holdings_usd_asc';

  /**
   * Query param: Page number to return
   */
  page?: number;

  /**
   * Query param: Number of results to return per page
   */
  per_page?: number;
}

export interface PublicTreasuryGetEntityIDParams {
  /**
   * include holding amount change for specified timeframes, comma-separated if
   * querying more than 1 timeframe Valid values: 7d, 14d, 30d, 90d, 1y, ytd
   */
  holding_amount_change?: string;

  /**
   * include holding change percentage for specified timeframes, comma-separated if
   * querying more than 1 timeframe Valid values: 7d, 14d, 30d, 90d, 1y, ytd
   */
  holding_change_percentage?: string;
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
    type PublicTreasuryGetEntityIDParams as PublicTreasuryGetEntityIDParams,
    type PublicTreasuryGetHoldingChartParams as PublicTreasuryGetHoldingChartParams,
    type PublicTreasuryGetTransactionHistoryParams as PublicTreasuryGetTransactionHistoryParams,
  };
}
