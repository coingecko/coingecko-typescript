// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class HoldersChart extends APIResource {
  /**
   * To get the historical token holders chart based on the provided token contract
   * address on a network
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
  data: HoldersChartGetResponse.Data;

  meta: HoldersChartGetResponse.Meta;
}

export namespace HoldersChartGetResponse {
  export interface Data {
    /**
     * Request ID
     */
    id: string;

    attributes: Data.Attributes;

    /**
     * Resource type
     */
    type: string;
  }

  export namespace Data {
    export interface Attributes {
      /**
       * Historical token holders as [timestamp, holder_count] pairs
       */
      token_holders_list: Array<Array<string | number>>;
    }
  }

  export interface Meta {
    token?: Meta.Token;
  }

  export namespace Meta {
    export interface Token {
      /**
       * Token contract address
       */
      address?: string;

      /**
       * CoinGecko coin ID
       */
      coingecko_coin_id?: string | null;

      /**
       * Token name
       */
      name?: string;

      /**
       * Token symbol
       */
      symbol?: string;
    }
  }
}

export interface HoldersChartGetParams {
  /**
   * Path param: Network ID. \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  network: string;

  /**
   * Query param: Number of days to return the historical token holders chart.
   * Default value: 7
   */
  days?: '7' | '30' | 'max';
}

export declare namespace HoldersChart {
  export {
    type HoldersChartGetResponse as HoldersChartGetResponse,
    type HoldersChartGetParams as HoldersChartGetParams,
  };
}
