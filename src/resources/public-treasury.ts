// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PublicTreasury extends APIResource {
  /**
   * To query public companies' and governments' cryptocurrency holdings by coin ID
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
   * To query public companies' and governments' cryptocurrency holdings by entity ID
   */
  getEntityID(
    entityID: string,
    query: PublicTreasuryGetEntityIDParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PublicTreasuryGetEntityIDResponse> {
    return this._client.get(path`/public_treasury/${entityID}`, { query, ...options });
  }

  /**
   * To query historical cryptocurrency holdings chart of public companies and
   * governments by entity ID and coin ID
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
   * To query public companies' and governments' cryptocurrency transaction history
   * by entity ID
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
  | PublicTreasuryGetCoinIDResponse.CompanyTreasury
  | PublicTreasuryGetCoinIDResponse.GovernmentTreasury;

export namespace PublicTreasuryGetCoinIDResponse {
  export interface CompanyTreasury {
    /**
     * List of companies holding crypto
     */
    companies: Array<CompanyTreasury.Company>;

    /**
     * Market cap dominance percentage
     */
    market_cap_dominance: number;

    /**
     * Total crypto holdings
     */
    total_holdings: number;

    /**
     * Total crypto holdings value in USD
     */
    total_value_usd: number;
  }

  export namespace CompanyTreasury {
    export interface Company {
      /**
       * Country code
       */
      country: string;

      /**
       * Company name
       */
      name: string;

      /**
       * Percentage of total crypto supply
       */
      percentage_of_total_supply: number;

      /**
       * Company ticker symbol
       */
      symbol: string | null;

      /**
       * Total current value of crypto holdings in USD
       */
      total_current_value_usd: number;

      /**
       * Total entry value in USD
       */
      total_entry_value_usd: number;

      /**
       * Total crypto holdings
       */
      total_holdings: number;
    }
  }

  export interface GovernmentTreasury {
    /**
     * List of governments holding crypto
     */
    governments: Array<GovernmentTreasury.Government>;

    /**
     * Market cap dominance percentage
     */
    market_cap_dominance: number;

    /**
     * Total crypto holdings
     */
    total_holdings: number;

    /**
     * Total crypto holdings value in USD
     */
    total_value_usd: number;
  }

  export namespace GovernmentTreasury {
    export interface Government {
      /**
       * Country code
       */
      country: string;

      /**
       * Government name
       */
      name: string;

      /**
       * Percentage of total crypto supply
       */
      percentage_of_total_supply: number;

      /**
       * Government ticker symbol
       */
      symbol: string | null;

      /**
       * Total current value of crypto holdings in USD
       */
      total_current_value_usd: number;

      /**
       * Total entry value in USD
       */
      total_entry_value_usd: number;

      /**
       * Total crypto holdings
       */
      total_holdings: number;
    }
  }
}

export interface PublicTreasuryGetEntityIDResponse {
  /**
   * Entity ID
   */
  id: string;

  /**
   * Country code
   */
  country: string;

  /**
   * List of cryptocurrency assets held by the entity
   */
  holdings: Array<PublicTreasuryGetEntityIDResponse.Holding>;

  /**
   * Market to net asset value ratio
   */
  m_nav: number;

  /**
   * Entity name
   */
  name: string;

  /**
   * Stock market ticker symbol
   */
  symbol: string | null;

  /**
   * Total asset value per share in USD
   */
  total_asset_value_per_share_usd: number;

  /**
   * Total current value of all holdings in USD
   */
  total_treasury_value_usd: number;

  /**
   * Official Twitter handle
   */
  twitter_screen_name: string;

  /**
   * Entity type: company or government
   */
  type: string;

  /**
   * Unrealized profit and loss (current value minus total entry value)
   */
  unrealized_pnl: number;

  /**
   * Official website URL
   */
  website_url: string;
}

export namespace PublicTreasuryGetEntityIDResponse {
  export interface Holding {
    /**
     * Amount of cryptocurrency held
     */
    amount: number;

    /**
     * Amount of cryptocurrency per share
     */
    amount_per_share: number;

    /**
     * Average entry cost per unit in USD
     */
    average_entry_value_usd: number;

    /**
     * Coin ID
     */
    coin_id: string;

    /**
     * Current value of holdings in USD
     */
    current_value_usd: number;

    /**
     * Percentage of entity's total treasury value
     */
    entity_value_usd_percentage: number;

    /**
     * Percentage of total crypto supply
     */
    percentage_of_total_supply: number;

    /**
     * Total entry cost in USD
     */
    total_entry_value_usd: number;

    /**
     * Unrealized profit and loss for this holding
     */
    unrealized_pnl: number;

    /**
     * Holding amount changes over different timeframes
     */
    holding_amount_change?: Holding.HoldingAmountChange;

    /**
     * Holding change percentages over different timeframes
     */
    holding_change_percentage?: Holding.HoldingChangePercentage;
  }

  export namespace Holding {
    /**
     * Holding amount changes over different timeframes
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
     * Holding change percentages over different timeframes
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
  /**
   * Historical holdings value in USD as [timestamp, value_usd] pairs
   */
  holding_value_in_usd: Array<Array<number>>;

  /**
   * Historical holdings data as [timestamp, amount] pairs
   */
  holdings: Array<Array<number>>;
}

export interface PublicTreasuryGetTransactionHistoryResponse {
  transactions: Array<PublicTreasuryGetTransactionHistoryResponse.Transaction>;
}

export namespace PublicTreasuryGetTransactionHistoryResponse {
  export interface Transaction {
    /**
     * Average entry value in USD after the transaction
     */
    average_entry_value_usd: number;

    /**
     * Coin ID
     */
    coin_id: string;

    /**
     * Transaction date in UNIX timestamp
     */
    date: number;

    /**
     * Total holding balance after the transaction
     */
    holding_balance: number;

    /**
     * Net change in holdings after the transaction
     */
    holding_net_change: number;

    /**
     * Source document URL
     */
    source_url: string;

    /**
     * Transaction value in USD
     */
    transaction_value_usd: number;

    /**
     * Transaction type
     */
    type: 'buy' | 'sell';
  }
}

export interface PublicTreasuryGetCoinIDParams {
  /**
   * Path param: Public company or government entity.
   */
  entity: 'companies' | 'governments';

  /**
   * Query param: Sort order for results. Default: `total_holdings_usd_desc`
   */
  order?: 'total_holdings_usd_desc' | 'total_holdings_usd_asc';

  /**
   * Query param: Page through results. Default value: 1
   */
  page?: number;

  /**
   * Query param: Total results per page. Default value: 250 Valid values: 1...250
   */
  per_page?: number;
}

export interface PublicTreasuryGetEntityIDParams {
  /**
   * Include holding amount change for specified timeframes, comma-separated if
   * querying more than 1 timeframe. Valid values: `7d`, `14d`, `30d`, `90d`, `1y`,
   * `ytd`
   */
  holding_amount_change?: string;

  /**
   * Include holding change percentage for specified timeframes, comma-separated if
   * querying more than 1 timeframe. Valid values: `7d`, `14d`, `30d`, `90d`, `1y`,
   * `ytd`
   */
  holding_change_percentage?: string;
}

export interface PublicTreasuryGetHoldingChartParams {
  /**
   * Path param: Public company or government entity ID. \*refers to
   * [`/entities/list`](/reference/entities-list).
   */
  entity_id: string;

  /**
   * Query param: Data up to number of days ago. Valid values: `7`, `14`, `30`, `90`,
   * `180`, `365`, `730`, `max`
   */
  days: string;

  /**
   * Query param: Include empty intervals with no transaction data. Default: `false`
   */
  include_empty_intervals?: boolean;
}

export interface PublicTreasuryGetTransactionHistoryParams {
  /**
   * Filter transactions by coin IDs, comma-separated if querying more than 1 coin.
   * \*refers to [`/coins/list`](/reference/coins-list).
   */
  coin_ids?: string;

  /**
   * Sort order of transactions. Default: `date_desc`
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
   * Page through results. Default value: 1
   */
  page?: number;

  /**
   * Total results per page. Default value: 100 Valid values: 1...250
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
