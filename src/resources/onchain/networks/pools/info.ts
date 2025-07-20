// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Info extends APIResource {
  /**
   * This endpoint allows you to **query pool metadata (base and quote token details,
   * image, socials, websites, description, contract address, etc.) based on a
   * provided pool contract address on a network**
   *
   * @example
   * ```ts
   * const info = await client.onchain.networks.pools.info.get(
   *   '0x06da0fd433c1a5d7a4faa01111c044910a184553',
   *   { network: 'eth' },
   * );
   * ```
   */
  get(poolAddress: string, params: InfoGetParams, options?: RequestOptions): APIPromise<InfoGetResponse> {
    const { network } = params;
    return this._client.get(path`/onchain/networks/${network}/pools/${poolAddress}/info`, options);
  }
}

export interface InfoGetResponse {
  data?: InfoGetResponse.Data;
}

export namespace InfoGetResponse {
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

      image?: Attributes.Image;

      image_url?: string;

      is_honeypot?: boolean;

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

      export interface Image {
        large?: string;

        small?: string;

        thumb?: string;
      }
    }
  }
}

export interface InfoGetParams {
  /**
   * network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;
}

export declare namespace Info {
  export { type InfoGetResponse as InfoGetResponse, type InfoGetParams as InfoGetParams };
}
