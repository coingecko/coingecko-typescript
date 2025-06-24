// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class ExchangeRates extends APIResource {
  /**
   * This endpoint allows you to **query BTC exchange rates with other currencies**
   *
   * @example
   * ```ts
   * const exchangeRate = await client.exchangeRates.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<ExchangeRateGetResponse> {
    return this._client.get('/exchange_rates', options);
  }
}

export interface ExchangeRateGetResponse {
  rates?: { [key: string]: ExchangeRateGetResponse.Rates };
}

export namespace ExchangeRateGetResponse {
  export interface Rates {
    /**
     * name of the currency
     */
    name?: string;

    /**
     * type of the currency
     */
    type?: string;

    /**
     * unit of the currency
     */
    unit?: string;

    /**
     * value of the currency
     */
    value?: number;
  }
}

export declare namespace ExchangeRates {
  export { type ExchangeRateGetResponse as ExchangeRateGetResponse };
}
