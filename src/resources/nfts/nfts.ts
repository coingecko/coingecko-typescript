// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MarketChartAPI from './market-chart';
import { MarketChart, MarketChartGetParams, MarketChartGetResponse } from './market-chart';
import * as TickersAPI from './tickers';
import { TickerGetResponse, Tickers } from './tickers';
import * as ContractAPI from './contract/contract';
import {
  Contract,
  ContractGetContractAddressParams,
  ContractGetContractAddressResponse,
} from './contract/contract';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class NFTs extends APIResource {
  contract: ContractAPI.Contract = new ContractAPI.Contract(this._client);
  marketChart: MarketChartAPI.MarketChart = new MarketChartAPI.MarketChart(this._client);
  tickers: TickersAPI.Tickers = new TickersAPI.Tickers(this._client);

  /**
   * This endpoint allows you to **query all the NFT data (name, floor price, 24hr
   * volume ...) based on the NFT collection ID**
   *
   * @example
   * ```ts
   * const response = await client.nfts.getID('pudgy-penguins');
   * ```
   */
  getID(id: string, options?: RequestOptions): APIPromise<NFTGetIDResponse> {
    return this._client.get(path`/nfts/${id}`, options);
  }

  /**
   * This endpoint allows you to **query all supported NFTs with ID, contract
   * address, name, asset platform ID and symbol on CoinGecko**
   *
   * @example
   * ```ts
   * const response = await client.nfts.getList();
   * ```
   */
  getList(
    query: NFTGetListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NFTGetListResponse> {
    return this._client.get('/nfts/list', { query, ...options });
  }

  /**
   * This endpoint allows you to **query all the supported NFT collections with floor
   * price, market cap, volume and market related data on CoinGecko**
   *
   * @example
   * ```ts
   * const response = await client.nfts.getMarkets();
   * ```
   */
  getMarkets(
    query: NFTGetMarketsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NFTGetMarketsResponse> {
    return this._client.get('/nfts/markets', { query, ...options });
  }
}

export interface NFTGetIDResponse {
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
  ath?: NFTGetIDResponse.Ath;

  /**
   * NFT collection all time highs change percentage
   */
  ath_change_percentage?: NFTGetIDResponse.AthChangePercentage;

  /**
   * NFT collection all time highs date
   */
  ath_date?: NFTGetIDResponse.AthDate;

  /**
   * NFT collection banner image url
   */
  banner_image?: NFTGetIDResponse.BannerImage;

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
  explorers?: Array<NFTGetIDResponse.Explorer>;

  /**
   * NFT collection floor price
   */
  floor_price?: NFTGetIDResponse.FloorPrice;

  /**
   * NFT collection floor price 14 days percentage change
   */
  floor_price_14d_percentage_change?: NFTGetIDResponse.FloorPrice14dPercentageChange;

  /**
   * NFT collection floor price 1 year percentage change
   */
  floor_price_1y_percentage_change?: NFTGetIDResponse.FloorPrice1yPercentageChange;

  floor_price_24h_percentage_change?: NFTGetIDResponse.FloorPrice24hPercentageChange;

  /**
   * NFT collection floor price 30 days percentage change
   */
  floor_price_30d_percentage_change?: NFTGetIDResponse.FloorPrice30dPercentageChange;

  /**
   * NFT collection floor price 60 days percentage change
   */
  floor_price_60d_percentage_change?: NFTGetIDResponse.FloorPrice60dPercentageChange;

  /**
   * NFT collection floor price 7 days percentage change
   */
  floor_price_7d_percentage_change?: NFTGetIDResponse.FloorPrice7dPercentageChange;

  /**
   * NFT collection floor price in usd 24 hours percentage change
   */
  floor_price_in_usd_24h_percentage_change?: number;

  /**
   * NFT collection image url
   */
  image?: NFTGetIDResponse.Image;

  /**
   * NFT collection links
   */
  links?: NFTGetIDResponse.Links;

  /**
   * NFT collection market cap
   */
  market_cap?: NFTGetIDResponse.MarketCap;

  /**
   * NFT collection market cap 24 hours percentage change
   */
  market_cap_24h_percentage_change?: NFTGetIDResponse.MarketCap24hPercentageChange;

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
  volume_24h?: NFTGetIDResponse.Volume24h;

  /**
   * NFT collection volume in 24 hours percentage change
   */
  volume_24h_percentage_change?: NFTGetIDResponse.Volume24hPercentageChange;

  /**
   * NFT collection volume in usd 24 hours percentage change
   */
  volume_in_usd_24h_percentage_change?: number;
}

export namespace NFTGetIDResponse {
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

export interface NFTGetListResponse {
  /**
   * NFT collection ID
   */
  id?: string;

  /**
   * NFT collection asset platform ID
   */
  asset_platform_id?: string;

  /**
   * NFT collection contract address
   */
  contract_address?: string;

  /**
   * NFT collection name
   */
  name?: string;

  /**
   * NFT collection symbol
   */
  symbol?: string;
}

export type NFTGetMarketsResponse = Array<NFTGetMarketsResponse.NFTGetMarketsResponseItem>;

export namespace NFTGetMarketsResponse {
  export interface NFTGetMarketsResponseItem {
    /**
     * NFT collection ID
     */
    id?: string;

    /**
     * NFT collection asset platform ID
     */
    asset_platform_id?: string;

    /**
     * NFT collection contract address
     */
    contract_address?: string;

    /**
     * NFT collection description
     */
    description?: string;

    /**
     * NFT collection floor price
     */
    floor_price?: NFTGetMarketsResponseItem.FloorPrice;

    /**
     * NFT collection floor price 24 hours percentage change
     */
    floor_price_24h_percentage_change?: NFTGetMarketsResponseItem.FloorPrice24hPercentageChange;

    /**
     * NFT collection floor price in usd 24 hours percentage change
     */
    floor_price_in_usd_24h_percentage_change?: number;

    /**
     * NFT collection image url
     */
    image?: NFTGetMarketsResponseItem.Image;

    /**
     * NFT collection market cap
     */
    market_cap?: NFTGetMarketsResponseItem.MarketCap;

    /**
     * NFT collection market cap 24 hours percentage change
     */
    market_cap_24h_percentage_change?: NFTGetMarketsResponseItem.MarketCap24hPercentageChange;

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
     * NFT collection volume in 24 hours
     */
    volume_24h?: NFTGetMarketsResponseItem.Volume24h;

    /**
     * NFT collection volume in 24 hours percentage change
     */
    volume_24h_percentage_change?: NFTGetMarketsResponseItem.Volume24hPercentageChange;

    /**
     * NFT collection volume in usd 24 hours percentage change
     */
    volume_in_usd_24h_percentage_change?: number;
  }

  export namespace NFTGetMarketsResponseItem {
    /**
     * NFT collection floor price
     */
    export interface FloorPrice {
      native_currency?: number;

      usd?: number;
    }

    /**
     * NFT collection floor price 24 hours percentage change
     */
    export interface FloorPrice24hPercentageChange {
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
}

export interface NFTGetListParams {
  /**
   * use this to sort the order of responses
   */
  order?:
    | 'h24_volume_usd_asc'
    | 'h24_volume_usd_desc'
    | 'h24_volume_native_asc'
    | 'h24_volume_native_desc'
    | 'floor_price_native_asc'
    | 'floor_price_native_desc'
    | 'market_cap_native_asc'
    | 'market_cap_native_desc'
    | 'market_cap_usd_asc'
    | 'market_cap_usd_desc';

  /**
   * page through results
   */
  page?: number;

  /**
   * total results per page Valid values: 1...250
   */
  per_page?: number;
}

export interface NFTGetMarketsParams {
  /**
   * filter result by asset platform (blockchain network) \*refers to
   * [`/asset_platforms`](/reference/asset-platforms-list) filter=`nft`
   */
  asset_platform_id?: string;

  /**
   * sort results by field Default: `market_cap_usd_desc`
   */
  order?:
    | 'h24_volume_native_asc'
    | 'h24_volume_native_desc'
    | 'h24_volume_usd_asc'
    | 'h24_volume_usd_desc'
    | 'market_cap_usd_asc'
    | 'market_cap_usd_desc';

  /**
   * page through results Default: `1`
   */
  page?: number;

  /**
   * total results per page Valid values: any integer between 1 and 250 Default:
   * `100`
   */
  per_page?: number;
}

NFTs.Contract = Contract;
NFTs.MarketChart = MarketChart;
NFTs.Tickers = Tickers;

export declare namespace NFTs {
  export {
    type NFTGetIDResponse as NFTGetIDResponse,
    type NFTGetListResponse as NFTGetListResponse,
    type NFTGetMarketsResponse as NFTGetMarketsResponse,
    type NFTGetListParams as NFTGetListParams,
    type NFTGetMarketsParams as NFTGetMarketsParams,
  };

  export {
    Contract as Contract,
    type ContractGetContractAddressResponse as ContractGetContractAddressResponse,
    type ContractGetContractAddressParams as ContractGetContractAddressParams,
  };

  export {
    MarketChart as MarketChart,
    type MarketChartGetResponse as MarketChartGetResponse,
    type MarketChartGetParams as MarketChartGetParams,
  };

  export { Tickers as Tickers, type TickerGetResponse as TickerGetResponse };
}
