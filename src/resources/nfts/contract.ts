// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NFTsAPI from './nfts';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Contract extends APIResource {
  /**
   * This endpoint allows you to **query all the NFT data (name, floor price, 24hr
   * volume ...) based on the NFT collection contract address and respective asset
   * platform**
   *
   * @example
   * ```ts
   * const nftData = await client.nfts.contract.retrieve(
   *   '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
   *   { asset_platform_id: 'ethereum' },
   * );
   * ```
   */
  retrieve(
    contractAddress: string,
    params: ContractRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<NFTsAPI.NFTData> {
    const { asset_platform_id } = params;
    return this._client.get(path`/nfts/${asset_platform_id}/contract/${contractAddress}`, options);
  }

  /**
   * This endpoint allows you **query historical market data of a NFT collection,
   * including floor price, market cap, and 24hr volume, by number of days away from
   * now based on the provided contract address**
   *
   * @example
   * ```ts
   * const nftMarketChart =
   *   await client.nfts.contract.retrieveMarketChart(
   *     '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
   *     { asset_platform_id: 'ethereum', days: 'days' },
   *   );
   * ```
   */
  retrieveMarketChart(
    contractAddress: string,
    params: ContractRetrieveMarketChartParams,
    options?: RequestOptions,
  ): APIPromise<NFTsAPI.NFTMarketChart> {
    const { asset_platform_id, ...query } = params;
    return this._client.get(path`/nfts/${asset_platform_id}/contract/${contractAddress}/market_chart`, {
      query,
      ...options,
    });
  }
}

export interface ContractRetrieveParams {
  /**
   * asset platform ID \*refers to
   * [`/asset_platforms`](/reference/asset-platforms-list)
   */
  asset_platform_id: string;
}

export interface ContractRetrieveMarketChartParams {
  /**
   * Path param: asset platform ID \*refers to
   * [`/asset_platforms`](/reference/asset-platforms-list)
   */
  asset_platform_id: string;

  /**
   * Query param: data up to number of days ago Valid values: any integer or max
   */
  days: string;
}

export declare namespace Contract {
  export {
    type ContractRetrieveParams as ContractRetrieveParams,
    type ContractRetrieveMarketChartParams as ContractRetrieveMarketChartParams,
  };
}
