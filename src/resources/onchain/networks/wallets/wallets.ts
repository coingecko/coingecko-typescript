// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TransfersAPI from './transfers';
import { TransferGetParams, TransferGetResponse, Transfers } from './transfers';

export class Wallets extends APIResource {
  transfers: TransfersAPI.Transfers = new TransfersAPI.Transfers(this._client);
}

Wallets.Transfers = Transfers;

export declare namespace Wallets {
  export {
    Transfers as Transfers,
    type TransferGetResponse as TransferGetResponse,
    type TransferGetParams as TransferGetParams,
  };
}
