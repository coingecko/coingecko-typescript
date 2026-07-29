// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as InfoAPI from './info';
import { Info, InfoGetParams, InfoGetResponse } from './info';
import * as MultiAPI from './multi';
import { Multi, MultiGetAddressesParams, MultiGetAddressesResponse } from './multi';
import * as OhlcvAPI from './ohlcv';
import { Ohlcv, OhlcvGetTimeframeParams, OhlcvGetTimeframeResponse } from './ohlcv';
import * as TradesAPI from './trades';
import { TradeGetParams, TradeGetResponse, Trades } from './trades';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Pools extends APIResource {
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
  multi: MultiAPI.Multi = new MultiAPI.Multi(this._client);
  ohlcv: OhlcvAPI.Ohlcv = new OhlcvAPI.Ohlcv(this._client);
  trades: TradesAPI.Trades = new TradesAPI.Trades(this._client);

  /**
   * To query all the top pools based on the provided network
   */
  get(
    network: string,
    query: PoolGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PoolGetResponse> {
    return this._client.get(path`/onchain/networks/${network}/pools`, { query, ...options });
  }

  /**
   * To query the specific pool based on the provided network and pool address
   */
  getAddress(
    address: string,
    params: PoolGetAddressParams,
    options?: RequestOptions,
  ): APIPromise<PoolGetAddressResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/pools/${address}`, { query, ...options });
  }
}

export interface PoolAddressItem {
  /**
   * Pool identifier
   */
  id: string;

  attributes: PoolAddressItem.Attributes;

  /**
   * Related resources
   */
  relationships: PoolAddressItem.Relationships;

  /**
   * Resource type
   */
  type: string;
}

export namespace PoolAddressItem {
  export interface Attributes {
    /**
     * Pool contract address
     */
    address: string;

    /**
     * Base token price in native currency
     */
    base_token_price_native_currency: string;

    /**
     * Base token price in quote token
     */
    base_token_price_quote_token: string;

    /**
     * Base token price in USD
     */
    base_token_price_usd: string;

    /**
     * Fully diluted valuation in USD
     */
    fdv_usd: string | null;

    /**
     * Locked liquidity percentage
     */
    locked_liquidity_percentage: string;

    /**
     * Market cap in USD
     */
    market_cap_usd: string | null;

    /**
     * Pool name with fee tier
     */
    name: string;

    /**
     * Pool creation timestamp
     */
    pool_created_at: string;

    /**
     * Pool fee percentage
     */
    pool_fee_percentage: string;

    /**
     * Pool name without fee tier
     */
    pool_name: string;

    /**
     * Price change percentage over various timeframes
     */
    price_change_percentage: Attributes.PriceChangePercentage;

    /**
     * Quote token price in base token
     */
    quote_token_price_base_token: string;

    /**
     * Quote token price in native currency
     */
    quote_token_price_native_currency: string;

    /**
     * Quote token price in USD
     */
    quote_token_price_usd: string;

    /**
     * Total reserve in USD
     */
    reserve_in_usd: string;

    /**
     * Transaction counts over various timeframes
     */
    transactions: Attributes.Transactions;

    /**
     * Volume in USD over various timeframes
     */
    volume_usd: Attributes.VolumeUsd;

    /**
     * Base token balance in pool
     */
    base_token_balance?: string;

    /**
     * Base token liquidity in USD
     */
    base_token_liquidity_usd?: string;

    /**
     * Buy volume in USD over various timeframes
     */
    buy_volume_usd?: Attributes.BuyVolumeUsd;

    /**
     * Net buy volume in USD over various timeframes
     */
    net_buy_volume_usd?: Attributes.NetBuyVolumeUsd;

    /**
     * Quote token balance in pool
     */
    quote_token_balance?: string;

    /**
     * Quote token liquidity in USD
     */
    quote_token_liquidity_usd?: string;

    /**
     * Sell volume in USD over various timeframes
     */
    sell_volume_usd?: Attributes.SellVolumeUsd;
  }

  export namespace Attributes {
    /**
     * Price change percentage over various timeframes
     */
    export interface PriceChangePercentage {
      h1?: string;

      h24?: string;

      h6?: string;

      m15?: string;

      m30?: string;

      m5?: string;
    }

    /**
     * Transaction counts over various timeframes
     */
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

    /**
     * Volume in USD over various timeframes
     */
    export interface VolumeUsd {
      h1?: string;

      h24?: string;

      h6?: string;

      m15?: string;

      m30?: string;

      m5?: string;
    }

    /**
     * Buy volume in USD over various timeframes
     */
    export interface BuyVolumeUsd {
      h1?: string;

      h24?: string;

      h6?: string;

      m15?: string;

      m30?: string;

      m5?: string;
    }

    /**
     * Net buy volume in USD over various timeframes
     */
    export interface NetBuyVolumeUsd {
      h1?: string;

      h24?: string;

      h6?: string;

      m15?: string;

      m30?: string;

      m5?: string;
    }

    /**
     * Sell volume in USD over various timeframes
     */
    export interface SellVolumeUsd {
      h1?: string;

      h24?: string;

      h6?: string;

      m15?: string;

      m30?: string;

      m5?: string;
    }
  }

  /**
   * Related resources
   */
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

export interface PoolGetResponse {
  data: Array<PoolGetResponse.Data>;

  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<PoolGetResponse.Included>;
}

export namespace PoolGetResponse {
  export interface Data {
    /**
     * Pool identifier
     */
    id: string;

    attributes: Data.Attributes;

    /**
     * Related resources
     */
    relationships: Data.Relationships;

    /**
     * Resource type
     */
    type: string;
  }

  export namespace Data {
    export interface Attributes {
      /**
       * Pool contract address
       */
      address: string;

      /**
       * Base token price in native currency
       */
      base_token_price_native_currency: string | null;

      /**
       * Base token price in quote token
       */
      base_token_price_quote_token: string | null;

      /**
       * Base token price in USD
       */
      base_token_price_usd: string;

      /**
       * Fully diluted valuation in USD
       */
      fdv_usd: string | null;

      /**
       * Market cap in USD
       */
      market_cap_usd: string | null;

      /**
       * Pool name
       */
      name: string;

      /**
       * Pool creation timestamp
       */
      pool_created_at: string;

      /**
       * Price change percentage over various timeframes
       */
      price_change_percentage: Attributes.PriceChangePercentage;

      /**
       * Quote token price in base token
       */
      quote_token_price_base_token: string | null;

      /**
       * Quote token price in native currency
       */
      quote_token_price_native_currency: string | null;

      /**
       * Quote token price in USD
       */
      quote_token_price_usd: string;

      /**
       * Total reserve in USD
       */
      reserve_in_usd: string | null;

      /**
       * Transaction counts over various timeframes
       */
      transactions: Attributes.Transactions;

      /**
       * Volume in USD over various timeframes
       */
      volume_usd: Attributes.VolumeUsd;

      /**
       * GeckoTerminal community suspicious reports count
       */
      community_sus_report?: number;

      /**
       * GeckoTerminal community negative sentiment vote percentage
       */
      sentiment_vote_negative_percentage?: number;

      /**
       * GeckoTerminal community positive sentiment vote percentage
       */
      sentiment_vote_positive_percentage?: number;

      /**
       * Price of the queried token in USD, present when querying pools by token address
       */
      token_price_usd?: string;
    }

    export namespace Attributes {
      /**
       * Price change percentage over various timeframes
       */
      export interface PriceChangePercentage {
        h1?: string;

        h24?: string;

        h6?: string;

        m15?: string;

        m30?: string;

        m5?: string;
      }

      /**
       * Transaction counts over various timeframes
       */
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

      /**
       * Volume in USD over various timeframes
       */
      export interface VolumeUsd {
        h1?: string;

        h24?: string;

        h6?: string;

        m15?: string;

        m30?: string;

        m5?: string;
      }
    }

    /**
     * Related resources
     */
    export interface Relationships {
      base_token?: Relationships.BaseToken;

      dex?: Relationships.Dex;

      network?: Relationships.Network;

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

      export interface Network {
        data?: Network.Data;
      }

      export namespace Network {
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

      coingecko_asset_platform_id?: string;

      coingecko_coin_id?: string | null;

      decimals?: number;

      image_url?: string | null;

      name?: string;

      symbol?: string;
    }
  }
}

export interface PoolGetAddressResponse {
  data: PoolAddressItem;

  /**
   * Included related resources, present when include parameter is specified
   */
  included?: Array<PoolGetAddressResponse.Included>;
}

export namespace PoolGetAddressResponse {
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

export interface PoolGetParams {
  /**
   * Attributes to include, comma-separated if more than one. Available values:
   * `base_token`, `quote_token`, `dex`
   */
  include?: string;

  /**
   * Include GeckoTerminal community data (sentiment votes, suspicious reports).
   * Default: `false`
   */
  include_gt_community_data?: boolean;

  /**
   * Page through results. Default value: 1
   */
  page?: number;

  /**
   * Sort the pools by field. Default: `h24_tx_count_desc`
   */
  sort?: 'h24_tx_count_desc' | 'h24_volume_usd_desc';
}

export interface PoolGetAddressParams {
  /**
   * Path param: Network ID. \*refers to
   * [`/onchain/networks`](/reference/networks-list).
   */
  network: string;

  /**
   * Query param: Attributes to include, comma-separated if more than one. Available
   * values: `base_token`, `quote_token`, `dex`
   */
  include?: string;

  /**
   * Query param: Include pool composition. Default: `false`
   */
  include_composition?: boolean;

  /**
   * Query param: Include volume breakdown. Default: `false`
   */
  include_volume_breakdown?: boolean;
}

Pools.Info = Info;
Pools.Multi = Multi;
Pools.Ohlcv = Ohlcv;
Pools.Trades = Trades;

export declare namespace Pools {
  export {
    type PoolAddressItem as PoolAddressItem,
    type PoolGetResponse as PoolGetResponse,
    type PoolGetAddressResponse as PoolGetAddressResponse,
    type PoolGetParams as PoolGetParams,
    type PoolGetAddressParams as PoolGetAddressParams,
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

  export {
    Trades as Trades,
    type TradeGetResponse as TradeGetResponse,
    type TradeGetParams as TradeGetParams,
  };
}
