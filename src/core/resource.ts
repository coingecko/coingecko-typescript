// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Coingecko } from '../client';

export abstract class APIResource {
  protected _client: Coingecko;

  constructor(client: Coingecko) {
    this._client = client;
  }
}
