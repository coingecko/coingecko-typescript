// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Ohlcv extends APIResource {
  /**
   * To get the OHLCV chart (Open, High, Low, Close, Volume) of a token based on the
   * provided token address on a network
   */
  getTimeframe(
    timeframe: 'day' | 'hour' | 'minute' | 'second',
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
  data: OhlcvGetTimeframeResponse.Data;

  meta: OhlcvGetTimeframeResponse.Meta;
}

export namespace OhlcvGetTimeframeResponse {
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
       * OHLCV data as [timestamp, open, high, low, close, volume] arrays
       */
      ohlcv_list: Array<Array<number>>;
    }
  }

  export interface Meta {
    /**
     * Base token metadata
     */
    base?: Meta.Base;

    /**
     * Quote token metadata
     */
    quote?: Meta.Quote;
  }

  export namespace Meta {
    /**
     * Base token metadata
     */
    export interface Base {
      address?: string;

      coingecko_coin_id?: string | null;

      name?: string;

      symbol?: string;
    }

    /**
     * Quote token metadata
     */
    export interface Quote {
      address?: string;

      coingecko_coin_id?: string | null;

      name?: string;

      symbol?: string;
    }
  }
}

export interface OhlcvGetTimeframeParams {
  /**
   * Path param: Network ID. \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  network: string;

  /**
   * Path param: Token contract address.
   */
  token_address: string;

  /**
   * Query param: Time period to aggregate each OHLCV. Available values (day): `1`
   * Available values (hour): `1`, `4`, `12` Available values (minute): `1`, `5`,
   * `15` Available values (second): `1`, `15`, `30` Default value: 1
   */
  aggregate?: string;

  /**
   * Query param: Return OHLCV data before this timestamp (integer seconds since
   * epoch).
   */
  before_timestamp?: number;

  /**
   * Query param: Return OHLCV in USD or quote token. Default: `usd`
   */
  currency?: 'usd' | 'token';

  /**
   * Query param: Include empty intervals with no trade data. Default: `false`
   */
  include_empty_intervals?: boolean;

  /**
   * Query param: Include token data from inactive pools using the most recent swap.
   * Default: `false`
   */
  include_inactive_source?: boolean;

  /**
   * Query param: Number of OHLCV results to return, maximum 1000. Default value: 100
   */
  limit?: number;
}

export declare namespace Ohlcv {
  export {
    type OhlcvGetTimeframeResponse as OhlcvGetTimeframeResponse,
    type OhlcvGetTimeframeParams as OhlcvGetTimeframeParams,
  };
}
