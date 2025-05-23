// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TokensAPI from './tokens';
import * as TrendingPoolsAPI from './trending-pools';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Pools extends APIResource {
  /**
   * This endpoint allows you to **query the specific pool based on the provided
   * network and pool address**
   *
   * @example
   * ```ts
   * const poolInfo =
   *   await client.onchain.networks.pools.retrieve(
   *     '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640',
   *     { network: 'eth' },
   *   );
   * ```
   */
  retrieve(address: string, params: PoolRetrieveParams, options?: RequestOptions): APIPromise<PoolInfo> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/pools/${address}`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query the last 300 trades in the past 24 hours
   * based on the provided pool address**
   *
   * @example
   * ```ts
   * const response =
   *   await client.onchain.networks.pools.listRecentTrades(
   *     '0x06da0fd433c1a5d7a4faa01111c044910a184553',
   *     { network: 'eth' },
   *   );
   * ```
   */
  listRecentTrades(
    poolAddress: string,
    params: PoolListRecentTradesParams,
    options?: RequestOptions,
  ): APIPromise<PoolListRecentTradesResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/pools/${poolAddress}/trades`, {
      query,
      ...options,
    });
  }

  /**
   * This endpoint allows you to **query all the top pools based on the provided
   * network**
   *
   * @example
   * ```ts
   * const pool = await client.onchain.networks.pools.listTop(
   *   'eth',
   * );
   * ```
   */
  listTop(
    network: string,
    query: PoolListTopParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TrendingPoolsAPI.Pool> {
    return this._client.get(path`/onchain/networks/${network}/pools`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query pool metadata (base and quote token details,
   * image, socials, websites, description, contract address, etc.) based on a
   * provided pool contract address on a network**
   *
   * @example
   * ```ts
   * const tokenInfo =
   *   await client.onchain.networks.pools.retrieveInfo(
   *     '0x06da0fd433c1a5d7a4faa01111c044910a184553',
   *     { network: 'eth' },
   *   );
   * ```
   */
  retrieveInfo(
    poolAddress: string,
    params: PoolRetrieveInfoParams,
    options?: RequestOptions,
  ): APIPromise<TokensAPI.TokenInfo> {
    const { network } = params;
    return this._client.get(path`/onchain/networks/${network}/pools/${poolAddress}/info`, options);
  }

  /**
   * This endpoint allows you to **query multiple pools based on the provided network
   * and pool address**
   *
   * @example
   * ```ts
   * const poolInfo =
   *   await client.onchain.networks.pools.retrieveMultiple(
   *     'addresses',
   *     { network: 'eth' },
   *   );
   * ```
   */
  retrieveMultiple(
    addresses: string,
    params: PoolRetrieveMultipleParams,
    options?: RequestOptions,
  ): APIPromise<PoolInfo> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/pools/multi/${addresses}`, {
      query,
      ...options,
    });
  }

  /**
   * This endpoint allows you to **get the OHLCV chart (Open, High, Low, Close,
   * Volume) of a pool based on the provided pool address on a network**
   *
   * @example
   * ```ts
   * const response =
   *   await client.onchain.networks.pools.retrieveOhlcv('day', {
   *     network: 'eth',
   *     pool_address:
   *       '0x06da0fd433c1a5d7a4faa01111c044910a184553',
   *   });
   * ```
   */
  retrieveOhlcv(
    timeframe: 'day' | 'hour' | 'minute',
    params: PoolRetrieveOhlcvParams,
    options?: RequestOptions,
  ): APIPromise<PoolRetrieveOhlcvResponse> {
    const { network, pool_address, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/pools/${pool_address}/ohlcv/${timeframe}`, {
      query,
      ...options,
    });
  }
}

export interface PoolInfo {
  data?: Array<PoolInfo.Data>;

  included?: Array<PoolInfo.Included>;
}

export namespace PoolInfo {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      address?: string;

      base_token_price_native_currency?: string;

      base_token_price_quote_token?: string;

      base_token_price_usd?: string;

      fdv_usd?: string;

      locked_liquidity_percentage?: string;

      market_cap_usd?: string;

      name?: string;

      pool_created_at?: string;

      price_change_percentage?: Attributes.PriceChangePercentage;

      quote_token_price_base_token?: string;

      quote_token_price_native_currency?: string;

      quote_token_price_usd?: string;

      reserve_in_usd?: string;

      transactions?: Attributes.Transactions;

      volume_usd?: Attributes.VolumeUsd;
    }

    export namespace Attributes {
      export interface PriceChangePercentage {
        h1?: string;

        h24?: string;

        h6?: string;

        m5?: string;
      }

      export interface Transactions {
        h1?: Transactions.H1;

        h24?: Transactions.H24;

        h6?: Transactions.H6;

        m15?: Transactions.M15;

        m30?: Transactions.M30;

        m5?: Transactions.M5;
      }

      export namespace Transactions {
        export interface H1 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }

        export interface H24 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }

        export interface H6 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }

        export interface M15 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }

        export interface M30 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }

        export interface M5 {
          buyers?: number;

          buys?: number;

          sellers?: number;

          sells?: number;
        }
      }

      export interface VolumeUsd {
        h1?: string;

        h24?: string;

        h6?: string;

        m15?: string;

        m30?: string;

        m5?: string;
      }
    }

    export interface Relationships {
      base_token?: Relationships.BaseToken;

      dex?: Relationships.Dex;

      quote_token?: Relationships.QuoteToken;
    }

    export namespace Relationships {
      export interface BaseToken {
        data?: BaseToken.Data;
      }

      export namespace BaseToken {
        export interface Data {
          id?: string;

          type?: string;
        }
      }

      export interface Dex {
        data?: Dex.Data;
      }

      export namespace Dex {
        export interface Data {
          id?: string;

          type?: string;
        }
      }

      export interface QuoteToken {
        data?: QuoteToken.Data;
      }

      export namespace QuoteToken {
        export interface Data {
          id?: string;

          type?: string;
        }
      }
    }
  }

  export interface Included {
    id?: string;

    attributes?: Included.Attributes;

    type?: string;
  }

  export namespace Included {
    export interface Attributes {
      address?: string;

      coingecko_coin_id?: string;

      decimals?: number;

      image_url?: string;

      name?: string;

      symbol?: string;
    }
  }
}

export interface PoolListRecentTradesResponse {
  data?: Array<PoolListRecentTradesResponse.Data>;
}

export namespace PoolListRecentTradesResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      block_number?: number;

      block_timestamp?: string;

      from_token_address?: string;

      from_token_amount?: string;

      kind?: string;

      price_from_in_currency_token?: string;

      price_from_in_usd?: string;

      price_to_in_currency_token?: string;

      price_to_in_usd?: string;

      to_token_address?: string;

      to_token_amount?: string;

      tx_from_address?: string;

      tx_hash?: string;

      volume_in_usd?: string;
    }
  }
}

export interface PoolRetrieveOhlcvResponse {
  data?: PoolRetrieveOhlcvResponse.Data;

  meta?: PoolRetrieveOhlcvResponse.Meta;
}

export namespace PoolRetrieveOhlcvResponse {
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

export interface PoolRetrieveParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: attributes to include, comma-separated if more than one to include
   * Available values: `base_token`, `quote_token`, `dex`
   */
  include?: string;
}

export interface PoolListRecentTradesParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: return trades for token use this to invert the chart Available
   * values: 'base', 'quote' or token address Default value: 'base'
   */
  token?: string;

  /**
   * Query param: filter trades by trade volume in USD greater than this value
   * Default value: 0
   */
  trade_volume_in_usd_greater_than?: number;
}

export interface PoolListTopParams {
  /**
   * attributes to include, comma-separated if more than one to include Available
   * values: `base_token`, `quote_token`, `dex`
   */
  include?: string;

  /**
   * page through results Default value: 1
   */
  page?: number;

  /**
   * sort the pools by field Default value: h24_tx_count_desc
   */
  sort?: 'h24_tx_count_desc' | 'h24_volume_usd_desc';
}

export interface PoolRetrieveInfoParams {
  /**
   * network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;
}

export interface PoolRetrieveMultipleParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: attributes to include, comma-separated if more than one to include
   * Available values: `base_token`, `quote_token`, `dex`
   */
  include?: string;
}

export interface PoolRetrieveOhlcvParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Path param: pool contract address
   */
  pool_address: string;

  /**
   * Query param: return OHLCV for token use this to invert the chart Available
   * values: 'base', 'quote' or token address Default value: 'base'
   */
  token?: string;

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
   * Query param: number of OHLCV results to return, maximum 1000 Default value: 100
   */
  limit?: number;
}

export declare namespace Pools {
  export {
    type PoolInfo as PoolInfo,
    type PoolListRecentTradesResponse as PoolListRecentTradesResponse,
    type PoolRetrieveOhlcvResponse as PoolRetrieveOhlcvResponse,
    type PoolRetrieveParams as PoolRetrieveParams,
    type PoolListRecentTradesParams as PoolListRecentTradesParams,
    type PoolListTopParams as PoolListTopParams,
    type PoolRetrieveInfoParams as PoolRetrieveInfoParams,
    type PoolRetrieveMultipleParams as PoolRetrieveMultipleParams,
    type PoolRetrieveOhlcvParams as PoolRetrieveOhlcvParams,
  };
}
