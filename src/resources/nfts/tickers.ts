// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tickers extends APIResource {
  /**
   * This endpoint allows you to **query the latest floor price and 24hr volume of a
   * NFT collection, on each NFT marketplace, e.g. OpenSea and LooksRare**
   *
   * @example
   * ```ts
   * const ticker = await client.nfts.tickers.get(
   *   'pudgy-penguins',
   * );
   * ```
   */
  get(id: string, options?: RequestOptions): APIPromise<TickerGetResponse> {
    return this._client.get(path`/nfts/${id}/tickers`, options);
  }
}

export interface TickerGetResponse {
  tickers?: Array<TickerGetResponse.Ticker>;
}

export namespace TickerGetResponse {
  export interface Ticker {
    /**
     * NFT collection floor price in native currency
     */
    floor_price_in_native_currency?: number;

    /**
     * NFT collection volume in 24 hours in native currency
     */
    h24_volume_in_native_currency?: number;

    /**
     * NFT marketplace image url
     */
    image?: string;

    /**
     * NFT marketplace name
     */
    name?: string;

    /**
     * NFT collection native currency
     */
    native_currency?: string;

    /**
     * NFT collection native currency symbol
     */
    native_currency_symbol?: string;

    /**
     * NFT collection url in the NFT marketplace
     */
    nft_collection_url?: string;

    /**
     * NFT marketplace ID
     */
    nft_marketplace_id?: string;

    /**
     * last updated time
     */
    updated_at?: string;
  }
}

export declare namespace Tickers {
  export { type TickerGetResponse as TickerGetResponse };
}
