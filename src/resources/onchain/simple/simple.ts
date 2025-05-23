// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NetworksAPI from './networks';
import { NetworkGetTokenPriceParams, NetworkGetTokenPriceResponse, Networks } from './networks';

export class Simple extends APIResource {
  networks: NetworksAPI.Networks = new NetworksAPI.Networks(this._client);
}

Simple.Networks = Networks;

export declare namespace Simple {
  export {
    Networks as Networks,
    type NetworkGetTokenPriceResponse as NetworkGetTokenPriceResponse,
    type NetworkGetTokenPriceParams as NetworkGetTokenPriceParams,
  };
}
