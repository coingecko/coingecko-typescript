// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class News extends APIResource {
  /**
   * This endpoint allows you to **query the latest crypto news and guides on
   * CoinGecko**
   *
   * @example
   * ```ts
   * const news = await client.news.get();
   * ```
   */
  get(query: NewsGetParams | null | undefined = {}, options?: RequestOptions): APIPromise<NewsGetResponse> {
    return this._client.get('/news', { query, ...options });
  }
}

export type NewsGetResponse = Array<NewsGetResponse.NewsGetResponseItem>;

export namespace NewsGetResponse {
  export interface NewsGetResponseItem {
    /**
     * news article author
     */
    author?: string;

    /**
     * news article image URL
     */
    image?: string;

    /**
     * news article published timestamp in ISO 8601 format
     */
    posted_at?: string;

    /**
     * related coin IDs
     */
    related_coin_ids?: Array<string>;

    /**
     * news article source name
     */
    source_name?: string;

    /**
     * news article title
     */
    title?: string;

    /**
     * news article type
     */
    type?: 'news' | 'guide';

    /**
     * news article URL
     */
    url?: string;
  }
}

export interface NewsGetParams {
  /**
   * filter news by coin ID \*refers to [`/coins/list`](/reference/coins-list).
   */
  coin_id?: string;

  /**
   * filter news by language Default value: **en**
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
   * page through results Default value: **1**
   */
  page?: number;

  /**
   * total results per page Default value: **10**
   */
  per_page?: number;

  /**
   * filter news by type Default value: **all** Note: `guides` filter is only
   * applicable if `coin_id` is specified and valid
   */
  type?: 'all' | 'news' | 'guides';
}

export declare namespace News {
  export { type NewsGetResponse as NewsGetResponse, type NewsGetParams as NewsGetParams };
}
