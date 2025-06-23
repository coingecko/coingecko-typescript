// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as HoldersChartAPI from './holders-chart';
import { HoldersChart, HoldersChartGetParams, HoldersChartGetResponse } from './holders-chart';
import * as InfoAPI from './info';
import { Info, InfoGetParams, InfoGetResponse } from './info';
import * as MultiAPI from './multi';
import { Multi, MultiGetAddressesParams, MultiGetAddressesResponse } from './multi';
import * as OhlcvAPI from './ohlcv';
import { Ohlcv, OhlcvGetTimeframeParams, OhlcvGetTimeframeResponse } from './ohlcv';
import * as PoolsAPI from './pools';
import { PoolGetParams, PoolGetResponse, Pools } from './pools';
import * as TopHoldersAPI from './top-holders';
import { TopHolderGetParams, TopHolderGetResponse, TopHolders } from './top-holders';
import * as TradesAPI from './trades';
import { TradeGetParams, TradeGetResponse, Trades } from './trades';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Tokens extends APIResource {
  multi: MultiAPI.Multi = new MultiAPI.Multi(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
  topHolders: TopHoldersAPI.TopHolders = new TopHoldersAPI.TopHolders(this._client);
  holdersChart: HoldersChartAPI.HoldersChart = new HoldersChartAPI.HoldersChart(this._client);
  ohlcv: OhlcvAPI.Ohlcv = new OhlcvAPI.Ohlcv(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  trades: TradesAPI.Trades = new TradesAPI.Trades(this._client);

  /**
   * This endpoint allows you to **query specific token data based on the provided
   * token contract address on a network**
   *
   * @example
   * ```ts
   * const response =
   *   await client.onchain.networks.tokens.getAddress(
   *     '0xdac17f958d2ee523a2206206994597c13d831ec7',
   *     { network: 'eth' },
   *   );
   * ```
   */
  getAddress(
    address: string,
    params: TokenGetAddressParams,
    options?: RequestOptions,
  ): APIPromise<TokenGetAddressResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/tokens/${address}`, { query, ...options });
  }
}

export interface TokenGetAddressResponse {
  data?: TokenGetAddressResponse.Data;

  included?: Array<TokenGetAddressResponse.Included>;
}

export namespace TokenGetAddressResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    relationships?: Data.Relationships;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      address?: string;

      coingecko_coin_id?: string;

      decimals?: number;

      fdv_usd?: string;

      image_url?: string;

      market_cap_usd?: string;

      name?: string;

      normalized_total_supply?: string;

      price_usd?: string;

      symbol?: string;

      total_reserve_in_usd?: string;

      total_supply?: string;

      volume_usd?: Attributes.VolumeUsd;
    }

    export namespace Attributes {
      export interface VolumeUsd {
        h24?: string;
      }
    }

    export interface Relationships {
      top_pools?: Relationships.TopPools;
    }

    export namespace Relationships {
      export interface TopPools {
        data?: Array<TopPools.Data>;
      }

      export namespace TopPools {
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

    relationships?: Included.Relationships;

    type?: string;
  }

  export namespace Included {
    export interface Attributes {
      address?: string;

      base_token_price_native_currency?: string;

      base_token_price_quote_token?: string;

      base_token_price_usd?: string;

      fdv_usd?: string;

      market_cap_usd?: string;

      name?: string;

      pool_created_at?: string;

      price_change_percentage?: Attributes.PriceChangePercentage;

      quote_token_price_base_token?: string;

      quote_token_price_native_currency?: string;

      quote_token_price_usd?: string;

      reserve_in_usd?: string;

      token_price_usd?: string;

      transactions?: Attributes.Transactions;

      volume_usd?: Attributes.VolumeUsd;
    }

    export namespace Attributes {
      export interface PriceChangePercentage {
        h1?: string;

        h24?: string;

        h6?: string;

        m15?: string;

        m30?: string;

        m5?: string;
      }

      export interface Transactions {
        h1?: Transactions.H1;

        h24?: Transactions.H24;

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
}

export interface TokenGetAddressParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: attributes to include
   */
  include?: 'top_pools';
}

Tokens.Multi = Multi;
Tokens.Info = Info;
Tokens.TopHolders = TopHolders;
Tokens.HoldersChart = HoldersChart;
Tokens.Ohlcv = Ohlcv;
Tokens.Pools = Pools;
Tokens.Trades = Trades;

export declare namespace Tokens {
  export {
    type TokenGetAddressResponse as TokenGetAddressResponse,
    type TokenGetAddressParams as TokenGetAddressParams,
  };

  export {
    Multi as Multi,
    type MultiGetAddressesResponse as MultiGetAddressesResponse,
    type MultiGetAddressesParams as MultiGetAddressesParams,
  };

  export { Info as Info, type InfoGetResponse as InfoGetResponse, type InfoGetParams as InfoGetParams };

  export {
    TopHolders as TopHolders,
    type TopHolderGetResponse as TopHolderGetResponse,
    type TopHolderGetParams as TopHolderGetParams,
  };

  export {
    HoldersChart as HoldersChart,
    type HoldersChartGetResponse as HoldersChartGetResponse,
    type HoldersChartGetParams as HoldersChartGetParams,
  };

  export {
    Ohlcv as Ohlcv,
    type OhlcvGetTimeframeResponse as OhlcvGetTimeframeResponse,
    type OhlcvGetTimeframeParams as OhlcvGetTimeframeParams,
  };

  export { Pools as Pools, type PoolGetResponse as PoolGetResponse, type PoolGetParams as PoolGetParams };

  export {
    Trades as Trades,
    type TradeGetResponse as TradeGetResponse,
    type TradeGetParams as TradeGetParams,
  };
}
