// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Ping extends APIResource {
  /**
   * To check the API server status
   */
  get(options?: RequestOptions): APIPromise<PingGetResponse> {
    return this._client.get('/ping', options);
  }
}

export interface PingGetResponse {
  /**
   * API server status message
   */
  gecko_says: string;
}

export declare namespace Ping {
  export { type PingGetResponse as PingGetResponse };
}
