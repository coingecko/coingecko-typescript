// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class PublicTreasury extends APIResource {
  /**
   * This endpoint allows you **query public companies & governments' cryptocurrency
   * holdings** by Entity ID
   *
   * @example
   * ```ts
   * const response = await client.publicTreasury.getEntityID(
   *   'strategy',
   * );
   * ```
   */
  getEntityID(entityID: string, options?: RequestOptions): APIPromise<PublicTreasuryGetEntityIDResponse> {
    return this._client.get(path`/public_treasury/${entityID}`, options);
  }
}

export interface PublicTreasuryGetEntityIDResponse {
  /**
   * entity ID
   */
  id?: string;

  /**
   * country code of company or government location
   */
  country?: string;

  /**
   * list of cryptocurrency assets held by the entity
   */
  holdings?: Array<PublicTreasuryGetEntityIDResponse.Holding>;

  /**
   * entity name
   */
  name?: string;

  /**
   * stock market symbol for public company
   */
  symbol?: string;

  /**
   * official Twitter handle of the entity
   */
  twitter_screen_name?: string;

  /**
   * entity type: company or government
   */
  type?: string;

  /**
   * official website URL of the entity
   */
  website_url?: string;
}

export namespace PublicTreasuryGetEntityIDResponse {
  export interface Holding {
    /**
     * amount of the cryptocurrency held
     */
    amount?: number;

    /**
     * coin ID
     */
    coin_id?: string;

    /**
     * percentage of total crypto supply
     */
    percentage_of_total_supply?: number;
  }
}

export declare namespace PublicTreasury {
  export { type PublicTreasuryGetEntityIDResponse as PublicTreasuryGetEntityIDResponse };
}
