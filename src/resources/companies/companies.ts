// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PublicTreasuryAPI from './public-treasury';
import { PublicTreasury, PublicTreasuryGetCoinIDResponse } from './public-treasury';

export class Companies extends APIResource {
  publicTreasury: PublicTreasuryAPI.PublicTreasury = new PublicTreasuryAPI.PublicTreasury(this._client);
}

Companies.PublicTreasury = PublicTreasury;

export declare namespace Companies {
  export {
    PublicTreasury as PublicTreasury,
    type PublicTreasuryGetCoinIDResponse as PublicTreasuryGetCoinIDResponse,
  };
}
