// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Issuers extends APIResource {
  /**
   * To query the market data (market cap, volume, etc.) and tokens of an issuer
   * based on a particular issuer ID
   */
  getID(id: string, options?: RequestOptions): APIPromise<IssuerGetIDResponse> {
    return this._client.get(path`/rwas/issuers/${id}`, options);
  }

  /**
   * To query all the supported RWA issuers on CoinGecko
   */
  getList(options?: RequestOptions): APIPromise<IssuerGetListResponse> {
    return this._client.get('/rwas/issuers/list', options);
  }
}

export interface IssuerGetIDResponse {
  /**
   * Issuer ID
   */
  id: string;

  /**
   * Issuer market cap in USD
   */
  market_cap: number | null;

  /**
   * 24-hour issuer market cap change in USD
   */
  market_cap_change_24h: number | null;

  /**
   * Issuer name
   */
  name: string;

  /**
   * Issuer last updated timestamp
   */
  updated_at: string;

  /**
   * 24-hour issuer trading volume in USD
   */
  volume_24h: number | null;

  /**
   * Issuer image URLs
   */
  image?: IssuerGetIDResponse.Image;

  /**
   * Tokens issued by this issuer
   */
  tokens?: Array<IssuerGetIDResponse.Token>;
}

export namespace IssuerGetIDResponse {
  /**
   * Issuer image URLs
   */
  export interface Image {
    /**
     * Large image URL
     */
    large?: string;

    /**
     * Small image URL
     */
    small?: string;

    /**
     * Thumbnail image URL
     */
    thumb?: string;
  }

  export interface Token {
    /**
     * Token ID
     */
    id?: string;

    /**
     * Token name
     */
    name?: string;

    /**
     * Token asset platform and contract address
     */
    platforms?: { [key: string]: string };

    /**
     * Token symbol
     */
    symbol?: string;
  }
}

export type IssuerGetListResponse = Array<IssuerGetListResponse.IssuerGetListResponseItem>;

export namespace IssuerGetListResponse {
  export interface IssuerGetListResponseItem {
    /**
     * Issuer ID
     */
    id: string;

    /**
     * Issuer name
     */
    name: string;
  }
}

export declare namespace Issuers {
  export {
    type IssuerGetIDResponse as IssuerGetIDResponse,
    type IssuerGetListResponse as IssuerGetListResponse,
  };
}
