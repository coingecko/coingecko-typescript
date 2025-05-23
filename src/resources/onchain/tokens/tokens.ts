// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as InfoRecentlyUpdatedAPI from './info-recently-updated';
import {
  InfoRecentlyUpdated,
  InfoRecentlyUpdatedGetParams,
  InfoRecentlyUpdatedGetResponse,
} from './info-recently-updated';

export class Tokens extends APIResource {
  infoRecentlyUpdated: InfoRecentlyUpdatedAPI.InfoRecentlyUpdated =
    new InfoRecentlyUpdatedAPI.InfoRecentlyUpdated(this._client);
}

Tokens.InfoRecentlyUpdated = InfoRecentlyUpdated;

export declare namespace Tokens {
  export {
    InfoRecentlyUpdated as InfoRecentlyUpdated,
    type InfoRecentlyUpdatedGetResponse as InfoRecentlyUpdatedGetResponse,
    type InfoRecentlyUpdatedGetParams as InfoRecentlyUpdatedGetParams,
  };
}
