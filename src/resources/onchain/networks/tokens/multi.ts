// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Multi extends APIResource {
  /**
   * This endpoint allows you to **query multiple tokens data based on the provided
   * token contract addresses on a network**
   *
   * @example
   * ```ts
   * const response =
   *   await client.onchain.networks.tokens.multi.getAddresses(
   *     'addresses',
   *     { network: 'eth' },
   *   );
   * ```
   */
  getAddresses(
    addresses: string,
    params: MultiGetAddressesParams,
    options?: RequestOptions,
  ): APIPromise<MultiGetAddressesResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/tokens/multi/${addresses}`, {
      query,
      ...options,
    });
  }
}

export interface MultiGetAddressesResponse {
  data?: MultiGetAddressesResponse.Data;

  included?: Array<MultiGetAddressesResponse.Included>;
}

export namespace MultiGetAddressesResponse {
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

export interface MultiGetAddressesParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: attributes to include
   */
  include?: 'top_pools';
}

export declare namespace Multi {
  export {
    type MultiGetAddressesResponse as MultiGetAddressesResponse,
    type MultiGetAddressesParams as MultiGetAddressesParams,
  };
}
