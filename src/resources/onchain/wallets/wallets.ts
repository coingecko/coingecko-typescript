// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BalancesAPI from './balances';
import { BalanceGetParams, BalanceGetResponse, Balances } from './balances';

export class Wallets extends APIResource {
  balances: BalancesAPI.Balances = new BalancesAPI.Balances(this._client);
}

Wallets.Balances = Balances;

export declare namespace Wallets {
  export {
    Balances as Balances,
    type BalanceGetResponse as BalanceGetResponse,
    type BalanceGetParams as BalanceGetParams,
  };
}
