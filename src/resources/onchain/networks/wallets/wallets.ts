// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as TradesAPI from './trades';
import { TradeGetParams, TradeGetResponse, Trades } from './trades';
import * as TransfersAPI from './transfers';
import { TransferGetParams, TransferGetResponse, Transfers } from './transfers';

export class Wallets extends APIResource {
  trades: TradesAPI.Trades = new TradesAPI.Trades(this._client);
  transfers: TransfersAPI.Transfers = new TransfersAPI.Transfers(this._client);
}

Wallets.Trades = Trades;
Wallets.Transfers = Transfers;

export declare namespace Wallets {
  export {
    Trades as Trades,
    type TradeGetResponse as TradeGetResponse,
    type TradeGetParams as TradeGetParams,
  };

  export {
    Transfers as Transfers,
    type TransferGetResponse as TransferGetResponse,
    type TransferGetParams as TransferGetParams,
  };
}
