// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class TokenLists extends APIResource {
  /**
   * To get full list of tokens of a blockchain network (asset platform) that is
   * supported by [Ethereum token list standard](https://tokenlists.org/)
   */
  getAllJson(assetPlatformID: string, options?: RequestOptions): APIPromise<TokenListGetAllJsonResponse> {
    return this._client.get(path`/token_lists/${assetPlatformID}/all.json`, options);
  }
}

export interface TokenListGetAllJsonResponse {
  /**
   * Token list keywords
   */
  keywords: Array<string>;

  /**
   * Token list logo URL
   */
  logoURI: string;

  /**
   * Token list name
   */
  name: string;

  /**
   * Token list generation timestamp
   */
  timestamp: string;

  /**
   * List of tokens
   */
  tokens: Array<TokenListGetAllJsonResponse.Token>;

  /**
   * Token list version
   */
  version: TokenListGetAllJsonResponse.Version;
}

export namespace TokenListGetAllJsonResponse {
  export interface Token {
    /**
     * Token contract address
     */
    address: string;

    /**
     * Chainlist's chain ID
     */
    chainId: number;

    /**
     * Token decimals
     */
    decimals: number;

    /**
     * Token image URL
     */
    logoURI: string;

    /**
     * Token name
     */
    name: string;

    /**
     * Token symbol
     */
    symbol: string;
  }

  /**
   * Token list version
   */
  export interface Version {
    /**
     * Major version
     */
    major?: number;

    /**
     * Minor version
     */
    minor?: number;

    /**
     * Patch version
     */
    patch?: number;
  }
}

export declare namespace TokenLists {
  export { type TokenListGetAllJsonResponse as TokenListGetAllJsonResponse };
}
