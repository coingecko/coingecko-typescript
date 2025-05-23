// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TrendingPoolsAPI from './trending-pools';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Tokens extends APIResource {
  /**
   * This endpoint allows you to **query specific token data based on the provided
   * token contract address on a network**
   *
   * @example
   * ```ts
   * const token = await client.onchain.networks.tokens.retrieve(
   *   '0xdac17f958d2ee523a2206206994597c13d831ec7',
   *   { network: 'eth' },
   * );
   * ```
   */
  retrieve(address: string, params: TokenRetrieveParams, options?: RequestOptions): APIPromise<Token> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/tokens/${address}`, { query, ...options });
  }

  /**
   * This endpoint allows you to **query top token holders based on the provided
   * token contract address on a network**
   *
   * @example
   * ```ts
   * const response =
   *   await client.onchain.networks.tokens.listTopHolders(
   *     '0x6921b130d297cc43754afba22e5eac0fbf8db75b',
   *     { network: 'base' },
   *   );
   * ```
   */
  listTopHolders(
    address: string,
    params: TokenListTopHoldersParams,
    options?: RequestOptions,
  ): APIPromise<TokenListTopHoldersResponse> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/tokens/${address}/top_holders`, {
      query,
      ...options,
    });
  }

  /**
   * This endpoint allows you to **query top pools based on the provided token
   * contract address on a network**
   *
   * @example
   * ```ts
   * const pool =
   *   await client.onchain.networks.tokens.listTopPools(
   *     '0xdac17f958d2ee523a2206206994597c13d831ec7',
   *     { network: 'eth' },
   *   );
   * ```
   */
  listTopPools(
    tokenAddress: string,
    params: TokenListTopPoolsParams,
    options?: RequestOptions,
  ): APIPromise<TrendingPoolsAPI.Pool> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/tokens/${tokenAddress}/pools`, {
      query,
      ...options,
    });
  }

  /**
   * This endpoint allows you to **query token metadata (name, symbol, CoinGecko ID,
   * image, socials, websites, description, etc.) based on a provided token contract
   * address on a network**
   *
   * @example
   * ```ts
   * const tokenInfo =
   *   await client.onchain.networks.tokens.retrieveInfo(
   *     '0xdac17f958d2ee523a2206206994597c13d831ec7',
   *     { network: 'eth' },
   *   );
   * ```
   */
  retrieveInfo(
    address: string,
    params: TokenRetrieveInfoParams,
    options?: RequestOptions,
  ): APIPromise<TokenInfo> {
    const { network } = params;
    return this._client.get(path`/onchain/networks/${network}/tokens/${address}/info`, options);
  }

  /**
   * This endpoint allows you to **query multiple tokens data based on the provided
   * token contract addresses on a network**
   *
   * @example
   * ```ts
   * const token =
   *   await client.onchain.networks.tokens.retrieveMultiple(
   *     'addresses',
   *     { network: 'eth' },
   *   );
   * ```
   */
  retrieveMultiple(
    addresses: string,
    params: TokenRetrieveMultipleParams,
    options?: RequestOptions,
  ): APIPromise<Token> {
    const { network, ...query } = params;
    return this._client.get(path`/onchain/networks/${network}/tokens/multi/${addresses}`, {
      query,
      ...options,
    });
  }
}

export interface Token {
  data?: Token.Data;

  included?: Array<Token.Included>;
}

export namespace Token {
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

export interface TokenInfo {
  data?: TokenInfo.Data;
}

export namespace TokenInfo {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      address?: string;

      categories?: Array<string>;

      coingecko_coin_id?: string;

      description?: string;

      discord_url?: string;

      freeze_authority?: string;

      gt_categories_id?: Array<string>;

      gt_score?: number;

      gt_score_details?: Attributes.GtScoreDetails;

      holders?: Attributes.Holders;

      image_url?: string;

      mint_authority?: string;

      name?: string;

      symbol?: string;

      telegram_handle?: string;

      twitter_handle?: string;

      websites?: Array<string>;
    }

    export namespace Attributes {
      export interface GtScoreDetails {
        creation?: number;

        holders?: number;

        info?: number;

        pool?: number;

        transaction?: number;
      }

      export interface Holders {
        count?: number;

        distribution_percentage?: Holders.DistributionPercentage;

        last_updated?: string;
      }

      export namespace Holders {
        export interface DistributionPercentage {
          '11_30'?: number;

          '31_50'?: number;

          rest?: number;

          top_10?: number;
        }
      }
    }
  }
}

export interface TokenListTopHoldersResponse {
  data?: TokenListTopHoldersResponse.Data;
}

export namespace TokenListTopHoldersResponse {
  export interface Data {
    id?: string;

    attributes?: Data.Attributes;

    type?: string;
  }

  export namespace Data {
    export interface Attributes {
      holders?: Array<Attributes.Holder>;

      last_updated_at?: string;
    }

    export namespace Attributes {
      export interface Holder {
        address?: string;

        amount?: string;

        label?: string;

        percentage?: string;

        rank?: number;

        value?: string;
      }
    }
  }
}

export interface TokenRetrieveParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: attributes to include
   */
  include?: 'top_pools';
}

export interface TokenListTopHoldersParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: number of top token holders to return, you may use any integer or
   * `max` Default value: 10
   */
  holders?: string;
}

export interface TokenListTopPoolsParams {
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
   * Query param: page through results Default value: 1
   */
  page?: number;

  /**
   * Query param: sort the pools by field Default value:
   * h24_volume_usd_liquidity_desc
   */
  sort?: 'h24_volume_usd_liquidity_desc' | 'h24_tx_count_desc' | 'h24_volume_usd_desc';
}

export interface TokenRetrieveInfoParams {
  /**
   * network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;
}

export interface TokenRetrieveMultipleParams {
  /**
   * Path param: network ID \*refers to [/networks](/reference/networks-list)
   */
  network: string;

  /**
   * Query param: attributes to include
   */
  include?: 'top_pools';
}

export declare namespace Tokens {
  export {
    type Token as Token,
    type TokenInfo as TokenInfo,
    type TokenListTopHoldersResponse as TokenListTopHoldersResponse,
    type TokenRetrieveParams as TokenRetrieveParams,
    type TokenListTopHoldersParams as TokenListTopHoldersParams,
    type TokenListTopPoolsParams as TokenListTopPoolsParams,
    type TokenRetrieveInfoParams as TokenRetrieveInfoParams,
    type TokenRetrieveMultipleParams as TokenRetrieveMultipleParams,
  };
}
