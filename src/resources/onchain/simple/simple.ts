// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TokenPriceAPI from './token-price';
import { TokenPrice, TokenPriceGetMultiParams, TokenPriceGetMultiResponse } from './token-price';
import * as NetworksAPI from './networks/networks';
import { Networks } from './networks/networks';

export class Simple extends APIResource {
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
  tokenPrice: TokenPriceAPI.TokenPrice = new TokenPriceAPI.TokenPrice(this._client);
}

Simple.Networks = Networks;
Simple.TokenPrice = TokenPrice;

export declare namespace Simple {
  export { Networks as Networks };

  export {
    TokenPrice as TokenPrice,
    type TokenPriceGetMultiResponse as TokenPriceGetMultiResponse,
    type TokenPriceGetMultiParams as TokenPriceGetMultiParams,
  };
}
