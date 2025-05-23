// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as MarketChartAPI from './market-chart';
import { MarketChart, MarketChartGetParams, MarketChartGetResponse } from './market-chart';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Contract extends APIResource {
  marketChart: MarketChartAPI.MarketChart = new MarketChartAPI.MarketChart(this._client);

  /**
   * This endpoint allows you to **query all the NFT data (name, floor price, 24hr
   * volume ...) based on the NFT collection contract address and respective asset
   * platform**
   *
   * @example
   * ```ts
   * const response =
   *   await client.nfts.contract.getContractAddress(
   *     '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
   *     { asset_platform_id: 'ethereum' },
   *   );
   * ```
   */
  getContractAddress(
    contractAddress: string,
    params: ContractGetContractAddressParams,
    options?: RequestOptions,
  ): APIPromise<ContractGetContractAddressResponse> {
    const { asset_platform_id } = params;
    return this._client.get(path`/nfts/${asset_platform_id}/contract/${contractAddress}`, options);
  }
}

export interface ContractGetContractAddressResponse {
  /**
   * NFT collection ID
   */
  id?: string;

  /**
   * NFT collection asset platform ID
   */
  asset_platform_id?: string;

  /**
   * NFT collection all time highs
   */
  ath?: ContractGetContractAddressResponse.Ath;

  /**
   * NFT collection all time highs change percentage
   */
  ath_change_percentage?: ContractGetContractAddressResponse.AthChangePercentage;

  /**
   * NFT collection all time highs date
   */
  ath_date?: ContractGetContractAddressResponse.AthDate;

  /**
   * NFT collection banner image url
   */
  banner_image?: ContractGetContractAddressResponse.BannerImage;

  /**
   * NFT collection contract address
   */
  contract_address?: string;

  /**
   * NFT collection description
   */
  description?: string;

  /**
   * NFT collection block explorers links
   */
  explorers?: Array<ContractGetContractAddressResponse.Explorer>;

  /**
   * NFT collection floor price
   */
  floor_price?: ContractGetContractAddressResponse.FloorPrice;

  /**
   * NFT collection floor price 14 days percentage change
   */
  floor_price_14d_percentage_change?: ContractGetContractAddressResponse.FloorPrice14dPercentageChange;

  /**
   * NFT collection floor price 1 year percentage change
   */
  floor_price_1y_percentage_change?: ContractGetContractAddressResponse.FloorPrice1yPercentageChange;

  floor_price_24h_percentage_change?: ContractGetContractAddressResponse.FloorPrice24hPercentageChange;

  /**
   * NFT collection floor price 30 days percentage change
   */
  floor_price_30d_percentage_change?: ContractGetContractAddressResponse.FloorPrice30dPercentageChange;

  /**
   * NFT collection floor price 60 days percentage change
   */
  floor_price_60d_percentage_change?: ContractGetContractAddressResponse.FloorPrice60dPercentageChange;

  /**
   * NFT collection floor price 7 days percentage change
   */
  floor_price_7d_percentage_change?: ContractGetContractAddressResponse.FloorPrice7dPercentageChange;

  /**
   * NFT collection floor price in usd 24 hours percentage change
   */
  floor_price_in_usd_24h_percentage_change?: number;

  /**
   * NFT collection image url
   */
  image?: ContractGetContractAddressResponse.Image;

  /**
   * NFT collection links
   */
  links?: ContractGetContractAddressResponse.Links;

  /**
   * NFT collection market cap
   */
  market_cap?: ContractGetContractAddressResponse.MarketCap;

  /**
   * NFT collection market cap 24 hours percentage change
   */
  market_cap_24h_percentage_change?: ContractGetContractAddressResponse.MarketCap24hPercentageChange;

  /**
   * coin market cap rank
   */
  market_cap_rank?: number;

  /**
   * NFT collection name
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
   * number of unique address owning the NFTs
   */
  number_of_unique_addresses?: number;

  /**
   * number of unique address owning the NFTs 24 hours percentage change
   */
  number_of_unique_addresses_24h_percentage_change?: number;

  /**
   * NFT collection one day average sale price
   */
  one_day_average_sale_price?: number;

  /**
   * NFT collection one day average sale price 24 hours percentage change
   */
  one_day_average_sale_price_24h_percentage_change?: number;

  /**
   * NFT collection one day sales
   */
  one_day_sales?: number;

  /**
   * NFT collection one day sales 24 hours percentage change
   */
  one_day_sales_24h_percentage_change?: number;

  /**
   * NFT collection symbol
   */
  symbol?: string;

  /**
   * NFT collection total supply
   */
  total_supply?: number;

  /**
   * NFT collection user favorites count
   */
  user_favorites_count?: number;

  /**
   * NFT collection volume in 24 hours
   */
  volume_24h?: ContractGetContractAddressResponse.Volume24h;

  /**
   * NFT collection volume in 24 hours percentage change
   */
  volume_24h_percentage_change?: ContractGetContractAddressResponse.Volume24hPercentageChange;

  /**
   * NFT collection volume in usd 24 hours percentage change
   */
  volume_in_usd_24h_percentage_change?: number;
}

export namespace ContractGetContractAddressResponse {
  /**
   * NFT collection all time highs
   */
  export interface Ath {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection all time highs change percentage
   */
  export interface AthChangePercentage {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection all time highs date
   */
  export interface AthDate {
    native_currency?: string;

    usd?: string;
  }

  /**
   * NFT collection banner image url
   */
  export interface BannerImage {
    small?: string;
  }

  export interface Explorer {
    link?: string;

    name?: string;
  }

  /**
   * NFT collection floor price
   */
  export interface FloorPrice {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection floor price 14 days percentage change
   */
  export interface FloorPrice14dPercentageChange {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection floor price 1 year percentage change
   */
  export interface FloorPrice1yPercentageChange {
    native_currency?: number;

    usd?: number;
  }

  export interface FloorPrice24hPercentageChange {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection floor price 30 days percentage change
   */
  export interface FloorPrice30dPercentageChange {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection floor price 60 days percentage change
   */
  export interface FloorPrice60dPercentageChange {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection floor price 7 days percentage change
   */
  export interface FloorPrice7dPercentageChange {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection image url
   */
  export interface Image {
    small?: string;

    small_2x?: string;
  }

  /**
   * NFT collection links
   */
  export interface Links {
    discord?: string;

    homepage?: string;

    twitter?: string;
  }

  /**
   * NFT collection market cap
   */
  export interface MarketCap {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection market cap 24 hours percentage change
   */
  export interface MarketCap24hPercentageChange {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection volume in 24 hours
   */
  export interface Volume24h {
    native_currency?: number;

    usd?: number;
  }

  /**
   * NFT collection volume in 24 hours percentage change
   */
  export interface Volume24hPercentageChange {
    native_currency?: number;

    usd?: number;
  }
}

export interface ContractGetContractAddressParams {
  /**
   * asset platform ID \*refers to
   * [`/asset_platforms`](/reference/asset-platforms-list)
   */
  asset_platform_id: string;
}

Contract.MarketChart = MarketChart;

export declare namespace Contract {
  export {
    type ContractGetContractAddressResponse as ContractGetContractAddressResponse,
    type ContractGetContractAddressParams as ContractGetContractAddressParams,
  };

  export {
    MarketChart as MarketChart,
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetParams as MarketChartGetParams,
  };
}
