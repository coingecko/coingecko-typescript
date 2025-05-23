// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NetworksTokensAPI from './networks/tokens';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';

export class Tokens extends APIResource {
  /**
   * This endpoint allows you to **query 100 most recently updated tokens info of a
   * specific network or across all networks on GeckoTerminal**
   *
   * @example
   * ```ts
   * const tokenInfo =
   *   await client.onchain.tokens.listRecentlyUpdated();
   * ```
   */
  listRecentlyUpdated(
    query: TokenListRecentlyUpdatedParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<NetworksTokensAPI.TokenInfo> {
    return this._client.get('/onchain/tokens/info_recently_updated', { query, ...options });
  }
}

export interface TokenListRecentlyUpdatedParams {
  /**
   * Attributes for related resources to include, which will be returned under the
   * top-level 'included' key
   */
  include?: 'network';

  /**
   * filter tokens by provided network \*refers to
   * [/networks](/reference/networks-list)
   */
  network?: string;
}

export declare namespace Tokens {
  export { type TokenListRecentlyUpdatedParams as TokenListRecentlyUpdatedParams };
}
