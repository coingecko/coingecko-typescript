// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BalancesAPI from './balances';
import { BalanceGetParams, BalanceGetResponse, Balances } from './balances';
import * as PnlAPI from './pnl';
import { Pnl, PnlGetParams, PnlGetResponse } from './pnl';

export class Wallets extends APIResource {
  balances: BalancesAPI.Balances = new BalancesAPI.Balances(this._client);
  pnl: PnlAPI.Pnl = new PnlAPI.Pnl(this._client);
}

Wallets.Balances = Balances;
Wallets.Pnl = Pnl;

export declare namespace Wallets {
  export {
    Balances as Balances,
    type BalanceGetResponse as BalanceGetResponse,
    type BalanceGetParams as BalanceGetParams,
  };

  export { Pnl as Pnl, type PnlGetResponse as PnlGetResponse, type PnlGetParams as PnlGetParams };
}
