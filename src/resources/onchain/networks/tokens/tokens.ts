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
import * as TopTradersAPI from './top-traders';
import { TopTraderGetParams, TopTraderGetResponse, TopTraders } from './top-traders';
import * as TradesAPI from './trades';
import { TradeGetParams, TradeGetResponse, Trades } from './trades';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Tokens extends APIResource {
  holdersChart: HoldersChartAPI.HoldersChart = new HoldersChartAPI.HoldersChart(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
  multi: MultiAPI.Multi = new MultiAPI.Multi(this._client);
  ohlcv: OhlcvAPI.Ohlcv = new OhlcvAPI.Ohlcv(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  topHolders: TopHoldersAPI.TopHolders = new TopHoldersAPI.TopHolders(this._client);
  topTraders: TopTradersAPI.TopTraders = new TopTradersAPI.TopTraders(this._client);
  trades: TradesAPI.Trades = new TradesAPI.Trades(this._client);

  /**
   * To query specific token data based on the provided token contract address on a
   * network
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

export interface TokenItem {
  /**
   * Token identifier
   */
  id: string;

  attributes: TokenItem.Attributes;

  relationships: TokenItem.Relationships;

  /**
   * Resource type
   */
  type: string;
}

export namespace TokenItem {
  export interface Attributes {
    /**
     * Token contract address
     */
    address: string;

    /**
     * CoinGecko coin ID
     */
    coingecko_coin_id: string | null;

    /**
     * Token decimals
     */
    decimals: number;

    /**
     * Fully diluted valuation in USD
     */
    fdv_usd: string | null;

    /**
     * Token image URL
     */
    image_url: string | null;

    /**
     * Market cap in USD
     */
    market_cap_usd: string | null;

    /**
     * Token name
     */
    name: string;

    /**
     * Normalized token total supply
     */
    normalized_total_supply: string;

    /**
     * Token price in USD
     */
    price_usd: string | null;

    /**
     * Token symbol
     */
    symbol: string;

    /**
     * Total reserve in USD across all pools
     */
    total_reserve_in_usd: string;

    /**
     * Token total supply
     */
    total_supply: string;

    /**
     * Volume in USD
     */
    volume_usd: Attributes.VolumeUsd;

    /**
     * Last trade timestamp in UNIX
     */
    last_trade_timestamp?: string;

    /**
     * Launchpad details for pump-style tokens
     */
    launchpad_details?: Attributes.LaunchpadDetails;
  }

  export namespace Attributes {
    /**
     * Volume in USD
     */
    export interface VolumeUsd {
      h24?: string;
    }

    /**
     * Launchpad details for pump-style tokens
     */
    export interface LaunchpadDetails {
      completed?: boolean;

      completed_at?: string | null;

      graduation_percentage?: number;

      migrated_destination_pool_address?: string | null;
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

export interface TokenGetAddressResponse {
  data: TokenItem;

  /**
   * Included top pool data, present when include=top_pools is specified
   */
  included?: Array<TokenGetAddressResponse.Included>;
}

export namespace TokenGetAddressResponse {
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

      fdv_usd?: string | null;

      last_trade_timestamp?: string;

      market_cap_usd?: string | null;

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
}

export interface TokenGetAddressParams {
  /**
   * Path param: Network ID. \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  network: string;

  /**
   * Query param: Attributes to include.
   */
  include?: 'top_pools';

  /**
   * Query param: Include pool composition. Default: `false`
   */
  include_composition?: boolean;

  /**
   * Query param: Include token data from inactive pools using the most recent swap.
   * Default: `false`
   */
  include_inactive_source?: boolean;
}

Tokens.HoldersChart = HoldersChart;
Tokens.Info = Info;
Tokens.Multi = Multi;
Tokens.Ohlcv = Ohlcv;
Tokens.Pools = Pools;
Tokens.TopHolders = TopHolders;
Tokens.TopTraders = TopTraders;
Tokens.Trades = Trades;

export declare namespace Tokens {
  export {
    type TokenItem as TokenItem,
    type TokenGetAddressResponse as TokenGetAddressResponse,
    type TokenGetAddressParams as TokenGetAddressParams,
  };

  export {
    HoldersChart as HoldersChart,
    type HoldersChartGetResponse as HoldersChartGetResponse,
    type HoldersChartGetParams as HoldersChartGetParams,
  };

  export { Info as Info, type InfoGetResponse as InfoGetResponse, type InfoGetParams as InfoGetParams };

  export {
    Multi as Multi,
    type MultiGetAddressesResponse as MultiGetAddressesResponse,
    type MultiGetAddressesParams as MultiGetAddressesParams,
  };

  export {
    Ohlcv as Ohlcv,
    type OhlcvGetTimeframeResponse as OhlcvGetTimeframeResponse,
    type OhlcvGetTimeframeParams as OhlcvGetTimeframeParams,
  };

  export { Pools as Pools, type PoolGetResponse as PoolGetResponse, type PoolGetParams as PoolGetParams };

  export {
    TopHolders as TopHolders,
    type TopHolderGetResponse as TopHolderGetResponse,
    type TopHolderGetParams as TopHolderGetParams,
  };

  export {
    TopTraders as TopTraders,
    type TopTraderGetResponse as TopTraderGetResponse,
    type TopTraderGetParams as TopTraderGetParams,
  };

  export {
    Trades as Trades,
    type TradeGetResponse as TradeGetResponse,
    type TradeGetParams as TradeGetParams,
  };
}
