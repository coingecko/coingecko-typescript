// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TokenPriceAPI from './token-price';
import { TokenPrice, TokenPriceGetAddressesParams, TokenPriceGetAddressesResponse } from './token-price';

export class Networks extends APIResource {
  tokenPrice: TokenPriceAPI.TokenPrice = new TokenPriceAPI.TokenPrice(this._client);
}

Networks.TokenPrice = TokenPrice;

export declare namespace Networks {
  export {
    TokenPrice as TokenPrice,
    type TokenPriceGetAddressesResponse as TokenPriceGetAddressesResponse,
    type TokenPriceGetAddressesParams as TokenPriceGetAddressesParams,
  };
}
