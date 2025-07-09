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
  multi: MultiAPI.Multi = new MultiAPI.Multi(this._client);
  info: InfoAPI.Info = new InfoAPI.Info(this._client);
  ohlcv: OhlcvAPI.Ohlcv = new OhlcvAPI.Ohlcv(this._client);
  trades: TradesAPI.Trades = new TradesAPI.Trades(this._client);

  /**
   * This endpoint allows you to **query all the top pools based on the provided
   * network**
   *
   * @example
   * ```ts
   * const pool = await client.onchain.networks.pools.get('eth');
   * ```
   */
  get(
    network: string,
    query: PoolGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<PoolGetResponse> {
    return this._client.get(path`/onchain/networks/${network}/pools`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query the specific pool based on the provided
   * network and pool address**
   *
   * @example
   * ```ts
   * const response =
   *   await client.onchain.networks.pools.getAddress(
   *     '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640',
   *     { network: 'eth' },
   *   );
   * ```
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

export interface PoolGetResponse {
  data?: Array<PoolGetResponse.Data>;

  included?: Array<PoolGetResponse.Included>;
}

export namespace PoolGetResponse {
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

export interface PoolGetAddressResponse {
  data?: PoolGetAddressResponse.Data;

  included?: Array<PoolGetAddressResponse.Included>;
}

export namespace PoolGetAddressResponse {
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

      pool_fee_percentage?: string;

      pool_name?: string;

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

export interface PoolGetAddressParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: attributes to include, comma-separated if more than one to include
   * Available values: `base_token`, `quote_token`, `dex`
   */
  include?: string;

  /**
   * Query param: include volume breakdown, default: false
   */
  include_volume_breakdown?: boolean;
}

Pools.Multi = Multi;
Pools.Info = Info;
Pools.Ohlcv = Ohlcv;
Pools.Trades = Trades;

export declare namespace Pools {
  export {
    type PoolGetResponse as PoolGetResponse,
    type PoolGetAddressResponse as PoolGetAddressResponse,
    type PoolGetParams as PoolGetParams,
    type PoolGetAddressParams as PoolGetAddressParams,
  };

  export {
    Multi as Multi,
    type MultiGetAddressesResponse as MultiGetAddressesResponse,
    type MultiGetAddressesParams as MultiGetAddressesParams,
  };

  export { Info as Info, type InfoGetResponse as InfoGetResponse, type InfoGetParams as InfoGetParams };

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
