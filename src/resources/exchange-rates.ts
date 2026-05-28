// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ExchangeRates extends APIResource {
  /**
   * To query BTC exchange rates with other currencies
   */
  get(options?: RequestOptions): APIPromise<ExchangeRateGetResponse> {
    return this._client.get('/exchange_rates', options);
  }
}

export interface ExchangeRateGetResponse {
  /**
   * Exchange rates keyed by currency code
   */
  rates: { [key: string]: ExchangeRateGetResponse.Rates };
}

export namespace ExchangeRateGetResponse {
  export interface Rates {
    /**
     * Currency name
     */
    name: string;

    /**
     * Currency type: crypto, fiat, or commodity
     */
    type: string;

    /**
     * Currency unit symbol
     */
    unit: string;

    /**
     * Exchange rate value relative to BTC
     */
    value: number;
  }
}

export declare namespace ExchangeRates {
  export { type ExchangeRateGetResponse as ExchangeRateGetResponse };
}
