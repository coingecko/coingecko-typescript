// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class SupportedVsCurrencies extends APIResource {
  /**
   * This endpoint allows you to **query all the supported currencies on CoinGecko**
   *
   * @example
   * ```ts
   * const supportedVsCurrencies =
   *   await client.simple.supportedVsCurrencies.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<SupportedVsCurrencyGetResponse> {
    return this._client.get('/simple/supported_vs_currencies', options);
  }
}

export type SupportedVsCurrencyGetResponse = Array<string>;

export declare namespace SupportedVsCurrencies {
  export { type SupportedVsCurrencyGetResponse as SupportedVsCurrencyGetResponse };
}
