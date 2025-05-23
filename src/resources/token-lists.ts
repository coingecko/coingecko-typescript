// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class TokenLists extends APIResource {
  /**
   * This endpoint allows you to **get full list of tokens of a blockchain network
   * (asset platform) that is supported by
   * [Ethereum token list standard](https://tokenlists.org/)**
   *
   * @example
   * ```ts
   * const response = await client.tokenLists.getAllJson(
   *   'ethereum',
   * );
   * ```
   */
  getAllJson(assetPlatformID: string, options?: RequestOptions): APIPromise<TokenListGetAllJsonResponse> {
    return this._client.get(path`/token_lists/${assetPlatformID}/all.json`, options);
  }
}

export interface TokenListGetAllJsonResponse {
  keywords?: Array<string>;

  logoURI?: string;

  name?: string;

  timestamp?: string;

  tokens?: Array<TokenListGetAllJsonResponse.Token>;
}

export namespace TokenListGetAllJsonResponse {
  export interface Token {
    /**
     * token contract address
     */
    address?: string;

    /**
     * chainlist's chain ID
     */
    chainId?: number;

    /**
     * token decimals
     */
    decimals?: number;

    /**
     * token image url
     */
    logoURI?: string;

    /**
     * token name
     */
    name?: string;

    /**
     * token symbol
     */
    symbol?: string;
  }
}

export declare namespace TokenLists {
  export { type TokenListGetAllJsonResponse as TokenListGetAllJsonResponse };
}
