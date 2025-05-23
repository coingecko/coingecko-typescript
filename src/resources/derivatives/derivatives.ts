// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ExchangesAPI from './exchanges';
import {
  ExchangeGetIDParams,
  ExchangeGetIDResponse,
  ExchangeGetListResponse,
  ExchangeGetParams,
  ExchangeGetResponse,
  Exchanges,
} from './exchanges';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Derivatives extends APIResource {
  exchanges: ExchangesAPI.Exchanges = new ExchangesAPI.Exchanges(this._client);

  /**
   * This endpoint allows you to **query all the tickers from derivatives exchanges
   * on CoinGecko**
   *
   * @example
   * ```ts
   * const derivative = await client.derivatives.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<DerivativeGetResponse> {
    return this._client.get('/derivatives', options);
  }
}

export interface DerivativeGetResponse {
  /**
   * difference of derivative price and index price
   */
  basis?: number;

  /**
   * derivative contract type
   */
  contract_type?: string;

  expired_at?: string | null;

  /**
   * derivative funding rate
   */
  funding_rate?: number;

  /**
   * derivative underlying asset price
   */
  index?: number;

  /**
   * derivative underlying asset
   */
  index_id?: string;

  /**
   * derivative last updated time
   */
  last_traded_at?: number;

  /**
   * derivative market name
   */
  market?: string;

  /**
   * derivative open interest
   */
  open_interest?: number;

  /**
   * derivative ticker price
   */
  price?: string;

  /**
   * derivative ticker price percentage change in 24 hours
   */
  price_percentage_change_24h?: number;

  /**
   * derivative bid ask spread
   */
  spread?: number;

  /**
   * derivative ticker symbol
   */
  symbol?: string;

  /**
   * derivative volume in 24 hours
   */
  volume_24h?: number;
}

Derivatives.Exchanges = Exchanges;

export declare namespace Derivatives {
  export { type DerivativeGetResponse as DerivativeGetResponse };

  export {
    Exchanges as Exchanges,
    type ExchangeGetResponse as ExchangeGetResponse,
    type ExchangeGetIDResponse as ExchangeGetIDResponse,
    type ExchangeGetListResponse as ExchangeGetListResponse,
    type ExchangeGetParams as ExchangeGetParams,
    type ExchangeGetIDParams as ExchangeGetIDParams,
  };
}
