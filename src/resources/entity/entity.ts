// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as PublicTreasuryAPI from './public-treasury';
import {
  PublicTreasury,
  PublicTreasuryGetCoinIDParams,
  PublicTreasuryGetCoinIDResponse,
} from './public-treasury';

export class Entity extends APIResource {
  publicTreasury: PublicTreasuryAPI.PublicTreasury = new PublicTreasuryAPI.PublicTreasury(this._client);
}

Entity.PublicTreasury = PublicTreasury;

export declare namespace Entity {
  export {
    PublicTreasury as PublicTreasury,
    type PublicTreasuryGetCoinIDResponse as PublicTreasuryGetCoinIDResponse,
    type PublicTreasuryGetCoinIDParams as PublicTreasuryGetCoinIDParams,
  };
}
