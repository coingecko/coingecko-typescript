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
   * To query all the tickers from derivatives exchanges on CoinGecko
   */
  get(options?: RequestOptions): APIPromise<DerivativeGetResponse> {
    return this._client.get('/derivatives', options);
  }
}

export type DerivativeGetResponse = Array<DerivativeGetResponse.DerivativeGetResponseItem>;

export namespace DerivativeGetResponse {
  export interface DerivativeGetResponseItem {
    /**
     * Difference of derivative price and index price
     */
    basis: number;

    /**
     * Derivative contract type
     */
    contract_type: string;

    /**
     * Derivative expiry time in UNIX timestamp
     */
    expired_at: number | null;

    /**
     * Derivative funding rate
     */
    funding_rate: number;

    /**
     * Derivative underlying asset price
     */
    index: number;

    /**
     * Derivative underlying asset
     */
    index_id: string;

    /**
     * Derivative last traded time in UNIX timestamp
     */
    last_traded_at: number;

    /**
     * Derivative market name
     */
    market: string;

    /**
     * Derivative open interest
     */
    open_interest: number;

    /**
     * Derivative ticker price
     */
    price: string;

    /**
     * Derivative ticker price percentage change in 24 hours
     */
    price_percentage_change_24h: number;

    /**
     * Derivative bid-ask spread
     */
    spread: number;

    /**
     * Derivative ticker symbol
     */
    symbol: string;

    /**
     * Derivative trading volume in 24 hours
     */
    volume_24h: number;
  }
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
