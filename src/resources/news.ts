// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class News extends APIResource {
  /**
   * To query the latest crypto news and guides on CoinGecko
   */
  get(query: NewsGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<NewsGetResponse> {
    return this._client.get('/news', { query, ...options });
  }
}

export type NewsGetResponse = Array<NewsGetResponse.NewsGetResponseItem>;

export namespace NewsGetResponse {
  export interface NewsGetResponseItem {
    /**
     * News article author
     */
    author: string;

    /**
     * News article image URL
     */
    image: string;

    /**
     * News article published timestamp in ISO 8601 format
     */
    posted_at: string;

    /**
     * Related coin IDs
     */
    related_coin_ids: Array<string>;

    /**
     * News article source name
     */
    source_name: string;

    /**
     * News article title
     */
    title: string;

    /**
     * News article type
     */
    type: 'news' | 'guide';

    /**
     * News article URL
     */
    url: string;
  }
}

export interface NewsGetParams {
  /**
   * Filter news by coin ID. \*refers to [`/coins/list`](/reference/coins-list).
   */
  coin_id?: string;

  /**
   * Filter news by language. Default: `en`
   */
  language?:
    | 'en'
    | 'ru'
    | 'de'
    | 'pl'
    | 'es'
    | 'vi'
    | 'fr'
    | 'pt-br'
    | 'ar'
    | 'bg'
    | 'cs'
    | 'da'
    | 'el'
    | 'fi'
    | 'he'
    | 'hi'
    | 'hr'
    | 'hu'
    | 'id'
    | 'it'
    | 'ja'
    | 'ko'
    | 'lt'
    | 'nl'
    | 'no'
    | 'ro'
    | 'sk'
    | 'sl'
    | 'sv'
    | 'th'
    | 'tr'
    | 'uk'
    | 'zh'
    | 'zh-tw';

  /**
   * Page through results. Default value: 1 Valid values: 1...20
   */
  page?: number;

  /**
   * Total results per page. Default value: 10 Valid values: 1...20
   */
  per_page?: number;

  /**
   * Filter news by type. Default: `all` Note: `guides` filter is only applicable if
   * `coin_id` is specified and valid.
   */
  type?: 'all' | 'news' | 'guides';
}

export declare namespace News {
  export { type NewsGetResponse as NewsGetResponse, type NewsGetParams as NewsGetParams };
}
