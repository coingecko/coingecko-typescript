// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Key extends APIResource {
  /**
   * This endpoint allows you to **monitor your account's API usage, including rate
   * limits, monthly total credits, remaining credits, and more**
   *
   * @example
   * ```ts
   * const key = await client.key.get();
   * ```
   */
  get(options?: RequestOptions): APIPromise<KeyGetResponse> {
    return this._client.get('/key', options);
  }
}

export interface KeyGetResponse {
  current_remaining_monthly_calls?: number;

  current_total_monthly_calls?: number;

  monthly_call_credit?: number;

  plan?: string;

  rate_limit_request_per_minute?: number;
}

export declare namespace Key {
  export { type KeyGetResponse as KeyGetResponse };
}
