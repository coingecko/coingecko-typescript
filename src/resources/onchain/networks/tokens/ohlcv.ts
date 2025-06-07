// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Ohlcv extends APIResource {
  /**
   * This endpoint allows you to **get the OHLCV chart (Open, High, Low, Close,
   * Volume) of a token based on the provided token address on a network**
   *
   * @example
   * ```ts
   * const response =
   *   await client.onchain.networks.tokens.ohlcv.getTimeframe(
   *     'day',
   *     {
   *       network: 'solana',
   *       token_address:
   *         'So11111111111111111111111111111111111111112',
   *     },
   *   );
   * ```
   */
  getTimeframe(
    timeframe: 'day' | 'hour' | 'minute',
    params: OhlcvGetTimeframeParams,
    options?: RequestOptions,
  ): APIPromise<OhlcvGetTimeframeResponse> {
    const { network, token_address, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/tokens/${token_address}/ohlcv/${timeframe}`, {
      query,
      ...options,
    });
  }
}

export interface OhlcvGetTimeframeResponse {
  data?: OhlcvGetTimeframeResponse.Data;

  meta?: OhlcvGetTimeframeResponse.Meta;
}

export namespace OhlcvGetTimeframeResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      ohlcv_list?: Array<Array<number>>;
    }
  }

  export interface Meta {
    base?: Meta.Base;

    quote?: Meta.Quote;
  }

  export namespace Meta {
    export interface Base {
      address?: string;

      coingecko_coin_id?: string;

      name?: string;

      symbol?: string;
    }

    export interface Quote {
      address?: string;

      coingecko_coin_id?: string;

      name?: string;

      symbol?: string;
    }
  }
}

export interface OhlcvGetTimeframeParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Path param: token contract address
   */
  token_address: string;

  /**
   * Query param: time period to aggregate each OHLCV Available values (day): `1`
   * Available values (hour): `1` , `4` , `12` Available values (minute): `1` , `5` ,
   * `15` Default value: 1
   */
  aggregate?: string;

  /**
   * Query param: return OHLCV data before this timestamp (integer seconds since
   * epoch)
   */
  before_timestamp?: number;

  /**
   * Query param: return OHLCV in USD or quote token Default value: usd
   */
  currency?: 'usd' | 'token';

  /**
   * Query param: include empty intervals with no trade data, default: false
   */
  include_empty_intervals?: boolean;

  /**
   * Query param: number of OHLCV results to return, maximum 1000 Default value: 100
   */
  limit?: number;
}

export declare namespace Ohlcv {
  export {
    type OhlcvGetTimeframeResponse as OhlcvGetTimeframeResponse,
    type OhlcvGetTimeframeParams as OhlcvGetTimeframeParams,
  };
}
