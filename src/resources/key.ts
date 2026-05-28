// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Key extends APIResource {
  /**
   * To monitor your account's API usage, including rate limits, monthly total
   * credits, remaining credits, and more
   */
  get(options?: RequestOptions): APIPromise<KeyGetResponse> {
    return this._client.get('/key', options);
  }
}

export interface KeyGetResponse {
  /**
   * Total API calls made this month by this API key
   */
  api_key_current_total_monthly_calls: number;

  /**
   * Monthly call credit limit configured for this API key
   */
  api_key_monthly_call_credit: number;

  /**
   * Rate limit per minute configured for this API key
   */
  api_key_rate_limit_request_per_minute: number;

  /**
   * Remaining API call credits this month
   */
  current_remaining_monthly_calls: number;

  /**
   * Total API calls made this month
   */
  current_total_monthly_calls: number;

  /**
   * Total monthly API call credits for the plan
   */
  monthly_call_credit: number;

  /**
   * Current subscription plan
   */
  plan: string;

  /**
   * Rate limit per minute for the plan
   */
  rate_limit_request_per_minute: number;
}

export declare namespace Key {
  export { type KeyGetResponse as KeyGetResponse };
}
