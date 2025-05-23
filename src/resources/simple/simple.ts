// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PriceAPI from './price';
import { Price, PriceGetParams, PriceGetResponse } from './price';
import * as SupportedVsCurrenciesAPI from './supported-vs-currencies';
import { SupportedVsCurrencies, SupportedVsCurrencyGetResponse } from './supported-vs-currencies';
import * as TokenPriceAPI from './token-price';
import { TokenPrice, TokenPriceGetIDParams, TokenPriceGetIDResponse } from './token-price';

export class Simple extends APIResource {
  price: PriceAPI.Price = new PriceAPI.Price(this._client);
  supportedVsCurrencies: SupportedVsCurrenciesAPI.SupportedVsCurrencies =
    new SupportedVsCurrenciesAPI.SupportedVsCurrencies(this._client);
  tokenPrice: TokenPriceAPI.TokenPrice = new TokenPriceAPI.TokenPrice(this._client);
}

Simple.Price = Price;
Simple.SupportedVsCurrencies = SupportedVsCurrencies;
Simple.TokenPrice = TokenPrice;

export declare namespace Simple {
  export { Price as Price, type PriceGetResponse as PriceGetResponse, type PriceGetParams as PriceGetParams };

  export {
    SupportedVsCurrencies as SupportedVsCurrencies,
    type SupportedVsCurrencyGetResponse as SupportedVsCurrencyGetResponse,
  };

  export {
    TokenPrice as TokenPrice,
    type TokenPriceGetIDResponse as TokenPriceGetIDResponse,
    type TokenPriceGetIDParams as TokenPriceGetIDParams,
  };
}
