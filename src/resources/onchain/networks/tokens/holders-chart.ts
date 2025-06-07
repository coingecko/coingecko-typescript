// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class HoldersChart extends APIResource {
  /**
   * This endpoint allows you to **get the historical token holders chart based on
   * the provided token contract address on a network**
   *
   * @example
   * ```ts
   * const holdersChart =
   *   await client.onchain.networks.tokens.holdersChart.get(
   *     '0xdac17f958d2ee523a2206206994597c13d831ec7',
   *     { network: 'eth' },
   *   );
   * ```
   */
  get(
    tokenAddress: string,
    params: HoldersChartGetParams,
    options?: RequestOptions,
  ): APIPromise<HoldersChartGetResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/tokens/${tokenAddress}/holders_chart`, {
      query,
      ...options,
    });
  }
}

export interface HoldersChartGetResponse {
  data?: HoldersChartGetResponse.Data;

  meta?: HoldersChartGetResponse.Meta;
}

export namespace HoldersChartGetResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      token_holders_list?: Array<Array<string>>;
    }
  }

  export interface Meta {
    token?: Meta.Token;
  }

  export namespace Meta {
    export interface Token {
      address?: string;

      coingecko_coin_id?: string;

      name?: string;

      symbol?: string;
    }
  }
}

export interface HoldersChartGetParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: number of days to return the historical token holders chart Default
   * value: 7
   */
  days?: '7' | '30' | 'max';
}

export declare namespace HoldersChart {
  export {
    type HoldersChartGetResponse as HoldersChartGetResponse,
    type HoldersChartGetParams as HoldersChartGetParams,
  };
}
