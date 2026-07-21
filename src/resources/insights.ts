// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Insights extends APIResource {
  /**
   * To query the latest coin insights on CoinGecko
   */
  get(
    query: InsightGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InsightGetResponse> {
    return this._client.get('/insights', { query, ...options });
  }
}

export type InsightGetResponse = Array<InsightGetResponse.InsightGetResponseItem>;

export namespace InsightGetResponse {
  export interface InsightGetResponseItem {
    /**
     * Insight description
     */
    description: string;

    /**
     * Insight posted timestamp in ISO 8601 format
     */
    posted_at: string;

    /**
     * Related coin IDs
     */
    related_coin_ids: Array<string>;

    /**
     * Insight title
     */
    title: string;
  }
}

export interface InsightGetParams {
  /**
   * Filter insights by coin ID. \*refers to [`/coins/list`](/reference/coins-list).
   */
  coin_id?: string;

  /**
   * Starting date in ISO date string (`YYYY-MM-DD`).
   */
  from?: string;

  /**
   * Page through results. Default value: 1 Valid values: 1...20
   */
  page?: number;

  /**
   * Total results per page. Default value: 10 Valid values: 1...20
   */
  per_page?: number;

  /**
   * Ending date in ISO date string (`YYYY-MM-DD`).
   */
  to?: string;
}

export declare namespace Insights {
  export { type InsightGetResponse as InsightGetResponse, type InsightGetParams as InsightGetParams };
}
