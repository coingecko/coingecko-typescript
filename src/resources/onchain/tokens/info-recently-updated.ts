// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class InfoRecentlyUpdated extends APIResource {
  /**
   * This endpoint allows you to **query 100 most recently updated tokens info of a
   * specific network or across all networks on GeckoTerminal**
   *
   * @example
   * ```ts
   * const infoRecentlyUpdated =
   *   await client.onchain.tokens.infoRecentlyUpdated.get();
   * ```
   */
  get(
    query: InfoRecentlyUpdatedGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<InfoRecentlyUpdatedGetResponse> {
    return this._client.get('/onchain/tokens/info_recently_updated', { query, ...options });
  }
}

export interface InfoRecentlyUpdatedGetResponse {
  data?: InfoRecentlyUpdatedGetResponse.Data;
}

export namespace InfoRecentlyUpdatedGetResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      address?: string;

      categories?: Array<string>;

      coingecko_coin_id?: string;

      description?: string;

      discord_url?: string;

      freeze_authority?: string;

      gt_categories_id?: Array<string>;

      gt_score?: number;

      gt_score_details?: Attributes.GtScoreDetails;

      holders?: Attributes.Holders;

      image_url?: string;

      mint_authority?: string;

      name?: string;

      symbol?: string;

      telegram_handle?: string;

      twitter_handle?: string;

      websites?: Array<string>;
    }

    export namespace Attributes {
      export interface GtScoreDetails {
        creation?: number;

        holders?: number;

        info?: number;

        pool?: number;

        transaction?: number;
      }

      export interface Holders {
        count?: number;

        distribution_percentage?: Holders.DistributionPercentage;

        last_updated?: string;
      }

      export namespace Holders {
        export interface DistributionPercentage {
          '11_30'?: number;

          '31_50'?: number;

          rest?: number;

          top_10?: number;
        }
      }
    }
  }
}

export interface InfoRecentlyUpdatedGetParams {
  /**
   * Attributes for related resources to include, which will be returned under the
   * top-level 'included' key
   */
  include?: 'network';

  /**
   * filter tokens by provided network \*refers to
   * [/networks](/reference/networks-list)
   */
  network?: string;
}

export declare namespace InfoRecentlyUpdated {
  export {
    type InfoRecentlyUpdatedGetResponse as InfoRecentlyUpdatedGetResponse,
    type InfoRecentlyUpdatedGetParams as InfoRecentlyUpdatedGetParams,
  };
}
