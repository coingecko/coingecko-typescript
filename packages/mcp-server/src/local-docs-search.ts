// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MiniSearch from 'minisearch';
import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { getLogger } from './logger';

type MethodEntry = {
  name: string;
  endpoint: string;
  httpMethod: string;
  summary: string;
  description: string;
  stainlessPath: string;
  qualified: string;
  params?: string[];
  response?: string;
  markdown?: string;
};

type ProseChunk = {
  content: string;
  tag: string;
  sectionContext?: string;
  source?: string;
};

type MiniSearchDocument = {
  id: string;
  kind: 'http_method' | 'prose';
  name?: string;
  endpoint?: string;
  summary?: string;
  description?: string;
  qualified?: string;
  stainlessPath?: string;
  content?: string;
  sectionContext?: string;
  _original: Record<string, unknown>;
};

type SearchResult = {
  results: (string | Record<string, unknown>)[];
};

const EMBEDDED_METHODS: MethodEntry[] = [
  {
    name: 'get',
    endpoint: '/asset_platforms',
    httpMethod: 'get',
    summary: 'Asset Platforms List (ID Map)',
    description: 'This endpoint allows you to **query all the asset platforms on CoinGecko**',
    stainlessPath: '(resource) asset_platforms > (method) get',
    qualified: 'client.assetPlatforms.get',
    params: ["filter?: 'nft';"],
    response:
      '{ id?: string; chain_identifier?: number; image?: { large?: string; small?: string; thumb?: string; }; name?: string; native_coin_id?: string; shortname?: string; }[]',
    markdown:
      "## get\n\n`client.assetPlatforms.get(filter?: 'nft'): { id?: string; chain_identifier?: number; image?: object; name?: string; native_coin_id?: string; shortname?: string; }[]`\n\n**get** `/asset_platforms`\n\nThis endpoint allows you to **query all the asset platforms on CoinGecko**\n\n### Parameters\n\n- `filter?: 'nft'`\n  apply relevant filters to results\n\n### Returns\n\n- `{ id?: string; chain_identifier?: number; image?: { large?: string; small?: string; thumb?: string; }; name?: string; native_coin_id?: string; shortname?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst assetPlatforms = await client.assetPlatforms.get();\n\nconsole.log(assetPlatforms);\n```",
  },
  {
    name: 'get_id',
    endpoint: '/coins/{id}',
    httpMethod: 'get',
    summary: 'Coin Data by ID',
    description:
      'This endpoint allows you to **query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin from the CoinGecko coin page based on a particular coin ID**',
    stainlessPath: '(resource) coins > (method) get_id',
    qualified: 'client.coins.getID',
    params: [
      'id: string;',
      'community_data?: boolean;',
      'developer_data?: boolean;',
      "dex_pair_format?: 'contract_address' | 'symbol';",
      'include_categories_details?: boolean;',
      'localization?: boolean;',
      'market_data?: boolean;',
      'sparkline?: boolean;',
      'tickers?: boolean;',
    ],
    response:
      '{ id?: string; additional_notices?: string[]; asset_platform_id?: string; block_time_in_minutes?: number; categories?: string[]; categories_details?: object[]; community_data?: object; country_origin?: string; description?: object; detail_platforms?: object; developer_data?: object; genesis_date?: string; hashing_algorithm?: string; ico_data?: object; image?: object; last_updated?: string; links?: object; localization?: object; market_cap_rank?: number; market_cap_rank_with_rehypothecated?: number; market_data?: object; name?: string; platforms?: object; preview_listing?: boolean; public_notice?: string; sentiment_votes_down_percentage?: number; sentiment_votes_up_percentage?: number; status_updates?: string[]; symbol?: string; tickers?: object[]; watchlist_portfolio_users?: number; web_slug?: string; }',
    markdown:
      "## get_id\n\n`client.coins.getID(id: string, community_data?: boolean, developer_data?: boolean, dex_pair_format?: 'contract_address' | 'symbol', include_categories_details?: boolean, localization?: boolean, market_data?: boolean, sparkline?: boolean, tickers?: boolean): { id?: string; additional_notices?: string[]; asset_platform_id?: string; block_time_in_minutes?: number; categories?: string[]; categories_details?: object[]; community_data?: object; country_origin?: string; description?: object; detail_platforms?: object; developer_data?: object; genesis_date?: string; hashing_algorithm?: string; ico_data?: object; image?: object; last_updated?: string; links?: object; localization?: object; market_cap_rank?: number; market_cap_rank_with_rehypothecated?: number; market_data?: object; name?: string; platforms?: object; preview_listing?: boolean; public_notice?: string; sentiment_votes_down_percentage?: number; sentiment_votes_up_percentage?: number; status_updates?: string[]; symbol?: string; tickers?: object[]; watchlist_portfolio_users?: number; web_slug?: string; }`\n\n**get** `/coins/{id}`\n\nThis endpoint allows you to **query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin from the CoinGecko coin page based on a particular coin ID**\n\n### Parameters\n\n- `id: string`\n\n- `community_data?: boolean`\n  include community data, default: true\n\n- `developer_data?: boolean`\n  include developer data, default: true\n\n- `dex_pair_format?: 'contract_address' | 'symbol'`\n  set to `symbol` to display DEX pair base and target as symbols, default: `contract_address`\n\n- `include_categories_details?: boolean`\n  include categories details, default: false\n\n- `localization?: boolean`\n  include all the localized languages in the response, default: true\n\n- `market_data?: boolean`\n  include market data, default: true\n\n- `sparkline?: boolean`\n  include sparkline 7 days data, default: false\n\n- `tickers?: boolean`\n  include tickers data, default: true\n\n### Returns\n\n- `{ id?: string; additional_notices?: string[]; asset_platform_id?: string; block_time_in_minutes?: number; categories?: string[]; categories_details?: { id?: string; name?: string; }[]; community_data?: { facebook_likes?: number; reddit_accounts_active_48h?: number; reddit_average_comments_48h?: number; reddit_average_posts_48h?: number; reddit_subscribers?: number; telegram_channel_user_count?: number; }; country_origin?: string; description?: object; detail_platforms?: object; developer_data?: { closed_issues?: number; code_additions_deletions_4_weeks?: { additions?: number; deletions?: number; }; commit_count_4_weeks?: number; forks?: number; last_4_weeks_commit_activity_series?: number[]; pull_request_contributors?: number; pull_requests_merged?: number; stars?: number; subscribers?: number; total_issues?: number; }; genesis_date?: string; hashing_algorithm?: string; ico_data?: { accepting_currencies?: string; amount_for_sale?: number; base_pre_sale_amount?: number; base_public_sale_amount?: number; bounty_detail_url?: string; country_origin?: string; description?: string; hardcap_amount?: number; hardcap_currency?: string; ico_end_date?: string; ico_start_date?: string; kyc_required?: boolean; links?: object; pre_sale_available?: boolean; pre_sale_end_date?: string; pre_sale_ended?: boolean; pre_sale_start_date?: string; quote_pre_sale_amount?: number; quote_pre_sale_currency?: string; quote_public_sale_amount?: number; quote_public_sale_currency?: string; short_desc?: string; softcap_amount?: number; softcap_currency?: string; total_raised?: number; total_raised_currency?: string; whitelist_available?: boolean; whitelist_end_date?: string; whitelist_start_date?: string; whitelist_url?: string; }; image?: { large?: string; small?: string; thumb?: string; }; last_updated?: string; links?: { announcement_url?: string[]; bitcointalk_thread_identifier?: string; blockchain_site?: string[]; chat_url?: string[]; facebook_username?: string; homepage?: string[]; official_forum_url?: string[]; repos_url?: { bitbucket?: string[]; github?: string[]; }; snapshot_url?: string; subreddit_url?: string; telegram_channel_identifier?: string; twitter_screen_name?: string; whitepaper?: string[]; }; localization?: object; market_cap_rank?: number; market_cap_rank_with_rehypothecated?: number; market_data?: { ath?: { btc?: number; eur?: number; usd?: number; }; ath_change_percentage?: { btc?: number; eur?: number; usd?: number; }; ath_date?: { btc?: string; eur?: string; usd?: string; }; atl?: { btc?: number; eur?: number; usd?: number; }; atl_change_percentage?: { btc?: number; eur?: number; usd?: number; }; atl_date?: { btc?: string; eur?: string; usd?: string; }; circulating_supply?: number; current_price?: { btc?: number; eur?: number; usd?: number; }; fdv_to_tvl_ratio?: number; fully_diluted_valuation?: { btc?: number; eur?: number; usd?: number; }; high_24h?: { btc?: number; eur?: number; usd?: number; }; last_updated?: string; low_24h?: { btc?: number; eur?: number; usd?: number; }; market_cap?: { btc?: number; eur?: number; usd?: number; }; market_cap_change_24h?: number; market_cap_change_24h_in_currency?: { btc?: number; eur?: number; usd?: number; }; market_cap_change_percentage_24h?: number; market_cap_change_percentage_24h_in_currency?: { btc?: number; eur?: number; usd?: number; }; market_cap_fdv_ratio?: number; market_cap_rank?: number; market_cap_rank_with_rehypothecated?: number; max_supply?: number; mcap_to_tvl_ratio?: number; price_change_24h?: number; price_change_percentage_14d?: number; price_change_percentage_14d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_1h_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_1y?: number; price_change_percentage_1y_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_200d?: number; price_change_percentage_200d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_24h?: number; price_change_percentage_24h_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_30d?: number; price_change_percentage_30d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_60d?: number; price_change_percentage_60d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_7d?: number; price_change_percentage_7d_in_currency?: { btc?: number; eur?: number; usd?: number; }; roi?: number; total_supply?: number; total_value_locked?: number; total_volume?: { btc?: number; eur?: number; usd?: number; }; }; name?: string; platforms?: object; preview_listing?: boolean; public_notice?: string; sentiment_votes_down_percentage?: number; sentiment_votes_up_percentage?: number; status_updates?: string[]; symbol?: string; tickers?: { base?: string; bid_ask_spread_percentage?: number; coin_id?: string; converted_last?: { btc?: number; eth?: number; usd?: number; }; converted_volume?: { btc?: number; eth?: number; usd?: number; }; is_anomaly?: boolean; is_stale?: boolean; last?: number; last_fetch_at?: string; last_traded_at?: string; market?: { has_trading_incentive?: boolean; identifier?: string; name?: string; }; target?: string; target_coin_id?: string; timestamp?: string; token_info_url?: string; trade_url?: string; trust_score?: string; volume?: number; }[]; watchlist_portfolio_users?: number; web_slug?: string; }`\n\n  - `id?: string`\n  - `additional_notices?: string[]`\n  - `asset_platform_id?: string`\n  - `block_time_in_minutes?: number`\n  - `categories?: string[]`\n  - `categories_details?: { id?: string; name?: string; }[]`\n  - `community_data?: { facebook_likes?: number; reddit_accounts_active_48h?: number; reddit_average_comments_48h?: number; reddit_average_posts_48h?: number; reddit_subscribers?: number; telegram_channel_user_count?: number; }`\n  - `country_origin?: string`\n  - `description?: object`\n  - `detail_platforms?: object`\n  - `developer_data?: { closed_issues?: number; code_additions_deletions_4_weeks?: { additions?: number; deletions?: number; }; commit_count_4_weeks?: number; forks?: number; last_4_weeks_commit_activity_series?: number[]; pull_request_contributors?: number; pull_requests_merged?: number; stars?: number; subscribers?: number; total_issues?: number; }`\n  - `genesis_date?: string`\n  - `hashing_algorithm?: string`\n  - `ico_data?: { accepting_currencies?: string; amount_for_sale?: number; base_pre_sale_amount?: number; base_public_sale_amount?: number; bounty_detail_url?: string; country_origin?: string; description?: string; hardcap_amount?: number; hardcap_currency?: string; ico_end_date?: string; ico_start_date?: string; kyc_required?: boolean; links?: object; pre_sale_available?: boolean; pre_sale_end_date?: string; pre_sale_ended?: boolean; pre_sale_start_date?: string; quote_pre_sale_amount?: number; quote_pre_sale_currency?: string; quote_public_sale_amount?: number; quote_public_sale_currency?: string; short_desc?: string; softcap_amount?: number; softcap_currency?: string; total_raised?: number; total_raised_currency?: string; whitelist_available?: boolean; whitelist_end_date?: string; whitelist_start_date?: string; whitelist_url?: string; }`\n  - `image?: { large?: string; small?: string; thumb?: string; }`\n  - `last_updated?: string`\n  - `links?: { announcement_url?: string[]; bitcointalk_thread_identifier?: string; blockchain_site?: string[]; chat_url?: string[]; facebook_username?: string; homepage?: string[]; official_forum_url?: string[]; repos_url?: { bitbucket?: string[]; github?: string[]; }; snapshot_url?: string; subreddit_url?: string; telegram_channel_identifier?: string; twitter_screen_name?: string; whitepaper?: string[]; }`\n  - `localization?: object`\n  - `market_cap_rank?: number`\n  - `market_cap_rank_with_rehypothecated?: number`\n  - `market_data?: { ath?: { btc?: number; eur?: number; usd?: number; }; ath_change_percentage?: { btc?: number; eur?: number; usd?: number; }; ath_date?: { btc?: string; eur?: string; usd?: string; }; atl?: { btc?: number; eur?: number; usd?: number; }; atl_change_percentage?: { btc?: number; eur?: number; usd?: number; }; atl_date?: { btc?: string; eur?: string; usd?: string; }; circulating_supply?: number; current_price?: { btc?: number; eur?: number; usd?: number; }; fdv_to_tvl_ratio?: number; fully_diluted_valuation?: { btc?: number; eur?: number; usd?: number; }; high_24h?: { btc?: number; eur?: number; usd?: number; }; last_updated?: string; low_24h?: { btc?: number; eur?: number; usd?: number; }; market_cap?: { btc?: number; eur?: number; usd?: number; }; market_cap_change_24h?: number; market_cap_change_24h_in_currency?: { btc?: number; eur?: number; usd?: number; }; market_cap_change_percentage_24h?: number; market_cap_change_percentage_24h_in_currency?: { btc?: number; eur?: number; usd?: number; }; market_cap_fdv_ratio?: number; market_cap_rank?: number; market_cap_rank_with_rehypothecated?: number; max_supply?: number; mcap_to_tvl_ratio?: number; price_change_24h?: number; price_change_percentage_14d?: number; price_change_percentage_14d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_1h_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_1y?: number; price_change_percentage_1y_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_200d?: number; price_change_percentage_200d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_24h?: number; price_change_percentage_24h_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_30d?: number; price_change_percentage_30d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_60d?: number; price_change_percentage_60d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_7d?: number; price_change_percentage_7d_in_currency?: { btc?: number; eur?: number; usd?: number; }; roi?: number; total_supply?: number; total_value_locked?: number; total_volume?: { btc?: number; eur?: number; usd?: number; }; }`\n  - `name?: string`\n  - `platforms?: object`\n  - `preview_listing?: boolean`\n  - `public_notice?: string`\n  - `sentiment_votes_down_percentage?: number`\n  - `sentiment_votes_up_percentage?: number`\n  - `status_updates?: string[]`\n  - `symbol?: string`\n  - `tickers?: { base?: string; bid_ask_spread_percentage?: number; coin_id?: string; converted_last?: { btc?: number; eth?: number; usd?: number; }; converted_volume?: { btc?: number; eth?: number; usd?: number; }; is_anomaly?: boolean; is_stale?: boolean; last?: number; last_fetch_at?: string; last_traded_at?: string; market?: { has_trading_incentive?: boolean; identifier?: string; name?: string; }; target?: string; target_coin_id?: string; timestamp?: string; token_info_url?: string; trade_url?: string; trust_score?: string; volume?: number; }[]`\n  - `watchlist_portfolio_users?: number`\n  - `web_slug?: string`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.coins.getID('bitcoin');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/coins/categories',
    httpMethod: 'get',
    summary: 'Coins Categories List with Market Data',
    description:
      'This endpoint allows you to **query all the coins categories with market data (market cap, volume, ...) on CoinGecko**',
    stainlessPath: '(resource) coins.categories > (method) get',
    qualified: 'client.coins.categories.get',
    params: ['order?: string;'],
    response:
      '{ id?: string; content?: string; market_cap?: number; market_cap_change_24h?: number; name?: string; top_3_coins?: string[]; top_3_coins_id?: string[]; updated_at?: string; volume_24h?: number; }',
    markdown:
      "## get\n\n`client.coins.categories.get(order?: string): { id?: string; content?: string; market_cap?: number; market_cap_change_24h?: number; name?: string; top_3_coins?: string[]; top_3_coins_id?: string[]; updated_at?: string; volume_24h?: number; }`\n\n**get** `/coins/categories`\n\nThis endpoint allows you to **query all the coins categories with market data (market cap, volume, ...) on CoinGecko**\n\n### Parameters\n\n- `order?: string`\n  sort results by field, default: market_cap_desc\n\n### Returns\n\n- `{ id?: string; content?: string; market_cap?: number; market_cap_change_24h?: number; name?: string; top_3_coins?: string[]; top_3_coins_id?: string[]; updated_at?: string; volume_24h?: number; }`\n\n  - `id?: string`\n  - `content?: string`\n  - `market_cap?: number`\n  - `market_cap_change_24h?: number`\n  - `name?: string`\n  - `top_3_coins?: string[]`\n  - `top_3_coins_id?: string[]`\n  - `updated_at?: string`\n  - `volume_24h?: number`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst category = await client.coins.categories.get();\n\nconsole.log(category);\n```",
  },
  {
    name: 'get_list',
    endpoint: '/coins/categories/list',
    httpMethod: 'get',
    summary: 'Coins Categories List (ID Map)',
    description: 'This endpoint allows you to **query all the coins categories on CoinGecko**',
    stainlessPath: '(resource) coins.categories > (method) get_list',
    qualified: 'client.coins.categories.getList',
    response: '{ category_id?: string; name?: string; }',
    markdown:
      "## get_list\n\n`client.coins.categories.getList(): { category_id?: string; name?: string; }`\n\n**get** `/coins/categories/list`\n\nThis endpoint allows you to **query all the coins categories on CoinGecko**\n\n### Returns\n\n- `{ category_id?: string; name?: string; }`\n\n  - `category_id?: string`\n  - `name?: string`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.coins.categories.getList();\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/coins/list',
    httpMethod: 'get',
    summary: 'Coins List (ID Map)',
    description:
      'This endpoint allows you to **query all the supported coins on CoinGecko with coins ID, name and symbol**',
    stainlessPath: '(resource) coins.list > (method) get',
    qualified: 'client.coins.list.get',
    params: ['include_platform?: boolean;', "status?: 'active' | 'inactive';"],
    response: '{ id?: string; name?: string; platforms?: object; symbol?: string; }[]',
    markdown:
      "## get\n\n`client.coins.list.get(include_platform?: boolean, status?: 'active' | 'inactive'): { id?: string; name?: string; platforms?: object; symbol?: string; }[]`\n\n**get** `/coins/list`\n\nThis endpoint allows you to **query all the supported coins on CoinGecko with coins ID, name and symbol**\n\n### Parameters\n\n- `include_platform?: boolean`\n  include platform and token's contract addresses, default: false\n\n- `status?: 'active' | 'inactive'`\n  filter by status of coins, default: active\n\n### Returns\n\n- `{ id?: string; name?: string; platforms?: object; symbol?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst lists = await client.coins.list.get();\n\nconsole.log(lists);\n```",
  },
  {
    name: 'get_new',
    endpoint: '/coins/list/new',
    httpMethod: 'get',
    summary: '💼 Recently Added Coins',
    description:
      'This endpoint allows you to **query the latest 200 coins that recently listed on CoinGecko**',
    stainlessPath: '(resource) coins.list > (method) get_new',
    qualified: 'client.coins.list.getNew',
    response: '{ id?: string; activated_at?: number; name?: string; symbol?: string; }[]',
    markdown:
      "## get_new\n\n`client.coins.list.getNew(): { id?: string; activated_at?: number; name?: string; symbol?: string; }[]`\n\n**get** `/coins/list/new`\n\nThis endpoint allows you to **query the latest 200 coins that recently listed on CoinGecko**\n\n### Returns\n\n- `{ id?: string; activated_at?: number; name?: string; symbol?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.coins.list.getNew();\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/coins/markets',
    httpMethod: 'get',
    summary: 'Coins List with Market Data',
    description:
      'This endpoint allows you to **query all the supported coins with price, market cap, volume and market related data**',
    stainlessPath: '(resource) coins.markets > (method) get',
    qualified: 'client.coins.markets.get',
    params: [
      'vs_currency: string;',
      'category?: string;',
      'ids?: string;',
      'include_rehypothecated?: boolean;',
      "include_tokens?: 'top' | 'all';",
      'locale?: string;',
      'names?: string;',
      "order?: 'market_cap_asc' | 'market_cap_desc' | 'volume_asc' | 'volume_desc' | 'id_asc' | 'id_desc';",
      'page?: number;',
      'per_page?: number;',
      'precision?: string;',
      'price_change_percentage?: string;',
      'sparkline?: boolean;',
      'symbols?: string;',
    ],
    response:
      '{ id?: string; ath?: number; ath_change_percentage?: number; ath_date?: string; atl?: number; atl_change_percentage?: number; atl_date?: string; circulating_supply?: number; current_price?: number; fully_diluted_valuation?: number; high_24h?: number; image?: string; last_updated?: string; low_24h?: number; market_cap?: number; market_cap_change_24h?: number; market_cap_change_percentage_24h?: number; market_cap_rank?: number; market_cap_rank_with_rehypothecated?: number; max_supply?: number; name?: string; price_change_24h?: number; price_change_percentage_24h?: number; roi?: { currency: string; percentage: number; times: number; }; symbol?: string; total_supply?: number; total_volume?: number; }[]',
    markdown:
      "## get\n\n`client.coins.markets.get(vs_currency: string, category?: string, ids?: string, include_rehypothecated?: boolean, include_tokens?: 'top' | 'all', locale?: string, names?: string, order?: 'market_cap_asc' | 'market_cap_desc' | 'volume_asc' | 'volume_desc' | 'id_asc' | 'id_desc', page?: number, per_page?: number, precision?: string, price_change_percentage?: string, sparkline?: boolean, symbols?: string): { id?: string; ath?: number; ath_change_percentage?: number; ath_date?: string; atl?: number; atl_change_percentage?: number; atl_date?: string; circulating_supply?: number; current_price?: number; fully_diluted_valuation?: number; high_24h?: number; image?: string; last_updated?: string; low_24h?: number; market_cap?: number; market_cap_change_24h?: number; market_cap_change_percentage_24h?: number; market_cap_rank?: number; market_cap_rank_with_rehypothecated?: number; max_supply?: number; name?: string; price_change_24h?: number; price_change_percentage_24h?: number; roi?: object; symbol?: string; total_supply?: number; total_volume?: number; }[]`\n\n**get** `/coins/markets`\n\nThis endpoint allows you to **query all the supported coins with price, market cap, volume and market related data**\n\n### Parameters\n\n- `vs_currency: string`\n  target currency of coins and market data \n *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).\n\n- `category?: string`\n  filter based on coins' category \n *refers to [`/coins/categories/list`](/reference/coins-categories-list).\n\n- `ids?: string`\n  coins' IDs, comma-separated if querying more than 1 coin. \n *refers to [`/coins/list`](/reference/coins-list).\n\n- `include_rehypothecated?: boolean`\n  include rehypothecated tokens in results, default: false \n When true, returns `market_cap_rank_with_rehypothecated` field\n\n- `include_tokens?: 'top' | 'all'`\n  for `symbols` lookups, specify `all` to include all matching tokens \n Default `top` returns top-ranked tokens (by market cap or volume)\n\n- `locale?: string`\n  language background, default: en\n\n- `names?: string`\n  coins' names, comma-separated if querying more than 1 coin.\n\n- `order?: 'market_cap_asc' | 'market_cap_desc' | 'volume_asc' | 'volume_desc' | 'id_asc' | 'id_desc'`\n  sort result by field, default: market_cap_desc\n\n- `page?: number`\n  page through results, default: 1\n\n- `per_page?: number`\n  total results per page, default: 100 \n Valid values: 1...250\n\n- `precision?: string`\n  decimal place for currency price value\n\n- `price_change_percentage?: string`\n  include price change percentage timeframe, comma-separated if query more than 1 timeframe \n Valid values: 1h, 24h, 7d, 14d, 30d, 200d, 1y\n\n- `sparkline?: boolean`\n  include sparkline 7 days data, default: false\n\n- `symbols?: string`\n  coins' symbols, comma-separated if querying more than 1 coin.\n\n### Returns\n\n- `{ id?: string; ath?: number; ath_change_percentage?: number; ath_date?: string; atl?: number; atl_change_percentage?: number; atl_date?: string; circulating_supply?: number; current_price?: number; fully_diluted_valuation?: number; high_24h?: number; image?: string; last_updated?: string; low_24h?: number; market_cap?: number; market_cap_change_24h?: number; market_cap_change_percentage_24h?: number; market_cap_rank?: number; market_cap_rank_with_rehypothecated?: number; max_supply?: number; name?: string; price_change_24h?: number; price_change_percentage_24h?: number; roi?: { currency: string; percentage: number; times: number; }; symbol?: string; total_supply?: number; total_volume?: number; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst markets = await client.coins.markets.get({ vs_currency: 'usd' });\n\nconsole.log(markets);\n```",
  },
  {
    name: 'get',
    endpoint: '/coins/top_gainers_losers',
    httpMethod: 'get',
    summary: '💼 Top Gainers & Losers',
    description:
      'This endpoint allows you to **query the top 30 coins with largest price gain and loss by a specific time duration**',
    stainlessPath: '(resource) coins.top_gainers_losers > (method) get',
    qualified: 'client.coins.topGainersLosers.get',
    params: [
      'vs_currency: string;',
      "duration?: '1h' | '24h' | '7d' | '14d' | '30d' | '60d' | '1y';",
      'price_change_percentage?: string;',
      "top_coins?: '300' | '500' | '1000' | 'all';",
    ],
    response:
      '{ top_gainers?: { id?: string; image?: string; market_cap_rank?: number; name?: string; symbol?: string; usd?: number; usd_14d_change?: number; usd_1h_change?: number; usd_1y_change?: number; usd_200d_change?: number; usd_24h_change?: number; usd_24h_vol?: number; usd_30d_change?: number; usd_7d_change?: number; }[]; top_losers?: { id?: string; image?: string; market_cap_rank?: number; name?: string; symbol?: string; usd?: number; usd_14d_change?: number; usd_1h_change?: number; usd_1y_change?: number; usd_200d_change?: number; usd_24h_change?: number; usd_24h_vol?: number; usd_30d_change?: number; usd_7d_change?: number; }[]; }',
    markdown:
      "## get\n\n`client.coins.topGainersLosers.get(vs_currency: string, duration?: '1h' | '24h' | '7d' | '14d' | '30d' | '60d' | '1y', price_change_percentage?: string, top_coins?: '300' | '500' | '1000' | 'all'): { top_gainers?: object[]; top_losers?: object[]; }`\n\n**get** `/coins/top_gainers_losers`\n\nThis endpoint allows you to **query the top 30 coins with largest price gain and loss by a specific time duration**\n\n### Parameters\n\n- `vs_currency: string`\n  target currency of coins \n *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).\n\n- `duration?: '1h' | '24h' | '7d' | '14d' | '30d' | '60d' | '1y'`\n  filter result by time range \n Default value: `24h`\n\n- `price_change_percentage?: string`\n  include price change percentage timeframe, comma-separated if query more than 1 price change percentage timeframe \n Valid values: 1h, 24h, 7d, 14d, 30d, 200d, 1y\n\n- `top_coins?: '300' | '500' | '1000' | 'all'`\n  filter result by market cap ranking (top 300 to 1000) or all coins (including coins that do not have market cap) \n Default value: `1000`\n\n### Returns\n\n- `{ top_gainers?: { id?: string; image?: string; market_cap_rank?: number; name?: string; symbol?: string; usd?: number; usd_14d_change?: number; usd_1h_change?: number; usd_1y_change?: number; usd_200d_change?: number; usd_24h_change?: number; usd_24h_vol?: number; usd_30d_change?: number; usd_7d_change?: number; }[]; top_losers?: { id?: string; image?: string; market_cap_rank?: number; name?: string; symbol?: string; usd?: number; usd_14d_change?: number; usd_1h_change?: number; usd_1y_change?: number; usd_200d_change?: number; usd_24h_change?: number; usd_24h_vol?: number; usd_30d_change?: number; usd_7d_change?: number; }[]; }`\n\n  - `top_gainers?: { id?: string; image?: string; market_cap_rank?: number; name?: string; symbol?: string; usd?: number; usd_14d_change?: number; usd_1h_change?: number; usd_1y_change?: number; usd_200d_change?: number; usd_24h_change?: number; usd_24h_vol?: number; usd_30d_change?: number; usd_7d_change?: number; }[]`\n  - `top_losers?: { id?: string; image?: string; market_cap_rank?: number; name?: string; symbol?: string; usd?: number; usd_14d_change?: number; usd_1h_change?: number; usd_1y_change?: number; usd_200d_change?: number; usd_24h_change?: number; usd_24h_vol?: number; usd_30d_change?: number; usd_7d_change?: number; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst topGainersLoser = await client.coins.topGainersLosers.get({ vs_currency: 'usd' });\n\nconsole.log(topGainersLoser);\n```",
  },
  {
    name: 'get',
    endpoint: '/coins/{id}/circulating_supply_chart',
    httpMethod: 'get',
    summary: '👑 Circulating Supply Chart by ID',
    description:
      'This endpoint allows you to **query historical circulating supply of a coin by number of days away from now based on provided coin ID**',
    stainlessPath: '(resource) coins.circulating_supply_chart > (method) get',
    qualified: 'client.coins.circulatingSupplyChart.get',
    params: ['id: string;', 'days: string;', "interval?: '5m' | 'hourly' | 'daily';"],
    response: '{ circulating_supply?: number | string[][]; }',
    markdown:
      "## get\n\n`client.coins.circulatingSupplyChart.get(id: string, days: string, interval?: '5m' | 'hourly' | 'daily'): { circulating_supply?: number | string[][]; }`\n\n**get** `/coins/{id}/circulating_supply_chart`\n\nThis endpoint allows you to **query historical circulating supply of a coin by number of days away from now based on provided coin ID**\n\n### Parameters\n\n- `id: string`\n\n- `days: string`\n  data up to number of days ago \n Valid values: any integer or `max`\n\n- `interval?: '5m' | 'hourly' | 'daily'`\n  data interval\n\n### Returns\n\n- `{ circulating_supply?: number | string[][]; }`\n\n  - `circulating_supply?: number | string[][]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst circulatingSupplyChart = await client.coins.circulatingSupplyChart.get('bitcoin', { days: 'days' });\n\nconsole.log(circulatingSupplyChart);\n```",
  },
  {
    name: 'get_range',
    endpoint: '/coins/{id}/circulating_supply_chart/range',
    httpMethod: 'get',
    summary: '👑 Circulating Supply Chart within Time Range by ID',
    description:
      'This endpoint allows you to **query historical circulating supply of a coin, within a range of timestamp based on the provided coin ID**',
    stainlessPath: '(resource) coins.circulating_supply_chart > (method) get_range',
    qualified: 'client.coins.circulatingSupplyChart.getRange',
    params: ['id: string;', 'from: string;', 'to: string;'],
    response: '{ circulating_supply?: number | string[][]; }',
    markdown:
      "## get_range\n\n`client.coins.circulatingSupplyChart.getRange(id: string, from: string, to: string): { circulating_supply?: number | string[][]; }`\n\n**get** `/coins/{id}/circulating_supply_chart/range`\n\nThis endpoint allows you to **query historical circulating supply of a coin, within a range of timestamp based on the provided coin ID**\n\n### Parameters\n\n- `id: string`\n\n- `from: string`\n  starting date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp. \n **use ISO date string for best compatibility**\n\n- `to: string`\n  ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp. \n **use ISO date string for best compatibility**\n\n### Returns\n\n- `{ circulating_supply?: number | string[][]; }`\n\n  - `circulating_supply?: number | string[][]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.coins.circulatingSupplyChart.getRange('bitcoin', { from: 'from', to: 'to' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/coins/{id}/contract/{contract_address}',
    httpMethod: 'get',
    summary: 'Coin Data by Token Address',
    description:
      'This endpoint allows you to **query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin from the CoinGecko coin page based on an asset platform and a particular token contract address**',
    stainlessPath: '(resource) coins.contract > (method) get',
    qualified: 'client.coins.contract.get',
    params: ['id: string;', 'contract_address: string;'],
    response:
      '{ id?: string; additional_notices?: string[]; asset_platform_id?: string; block_time_in_minutes?: number; categories?: string[]; community_data?: object; country_origin?: string; description?: object; detail_platforms?: object; developer_data?: object; genesis_date?: string; hashing_algorithm?: string; image?: object; last_updated?: string; links?: object; localization?: object; market_cap_rank?: number; market_cap_rank_with_rehypothecated?: number; market_data?: object; name?: string; platforms?: object; preview_listing?: boolean; public_notice?: string; sentiment_votes_down_percentage?: number; sentiment_votes_up_percentage?: number; status_updates?: string[]; symbol?: string; tickers?: object[]; watchlist_portfolio_users?: number; web_slug?: string; }',
    markdown:
      "## get\n\n`client.coins.contract.get(id: string, contract_address: string): { id?: string; additional_notices?: string[]; asset_platform_id?: string; block_time_in_minutes?: number; categories?: string[]; community_data?: object; country_origin?: string; description?: object; detail_platforms?: object; developer_data?: object; genesis_date?: string; hashing_algorithm?: string; image?: object; last_updated?: string; links?: object; localization?: object; market_cap_rank?: number; market_cap_rank_with_rehypothecated?: number; market_data?: object; name?: string; platforms?: object; preview_listing?: boolean; public_notice?: string; sentiment_votes_down_percentage?: number; sentiment_votes_up_percentage?: number; status_updates?: string[]; symbol?: string; tickers?: object[]; watchlist_portfolio_users?: number; web_slug?: string; }`\n\n**get** `/coins/{id}/contract/{contract_address}`\n\nThis endpoint allows you to **query all the metadata (image, websites, socials, description, contract address, etc.) and market data (price, ATH, exchange tickers, etc.) of a coin from the CoinGecko coin page based on an asset platform and a particular token contract address**\n\n### Parameters\n\n- `id: string`\n\n- `contract_address: string`\n\n### Returns\n\n- `{ id?: string; additional_notices?: string[]; asset_platform_id?: string; block_time_in_minutes?: number; categories?: string[]; community_data?: { facebook_likes?: number; reddit_accounts_active_48h?: number; reddit_average_comments_48h?: number; reddit_average_posts_48h?: number; reddit_subscribers?: number; telegram_channel_user_count?: number; }; country_origin?: string; description?: object; detail_platforms?: object; developer_data?: { closed_issues?: number; code_additions_deletions_4_weeks?: { additions?: number; deletions?: number; }; commit_count_4_weeks?: number; forks?: number; last_4_weeks_commit_activity_series?: number[]; pull_request_contributors?: number; pull_requests_merged?: number; stars?: number; subscribers?: number; total_issues?: number; }; genesis_date?: string; hashing_algorithm?: string; image?: { large?: string; small?: string; thumb?: string; }; last_updated?: string; links?: { announcement_url?: string[]; bitcointalk_thread_identifier?: string; blockchain_site?: string[]; chat_url?: string[]; facebook_username?: string; homepage?: string[]; official_forum_url?: string[]; repos_url?: { bitbucket?: string[]; github?: string[]; }; snapshot_url?: string; subreddit_url?: string; telegram_channel_identifier?: string; twitter_screen_name?: string; whitepaper?: string[]; }; localization?: object; market_cap_rank?: number; market_cap_rank_with_rehypothecated?: number; market_data?: { ath?: { btc?: number; eur?: number; usd?: number; }; ath_change_percentage?: { btc?: number; eur?: number; usd?: number; }; ath_date?: { btc?: string; eur?: string; usd?: string; }; atl?: { btc?: number; eur?: number; usd?: number; }; atl_change_percentage?: { btc?: number; eur?: number; usd?: number; }; atl_date?: { btc?: string; eur?: string; usd?: string; }; circulating_supply?: number; current_price?: { btc?: number; eur?: number; usd?: number; }; fdv_to_tvl_ratio?: number; fully_diluted_valuation?: { btc?: number; eur?: number; usd?: number; }; high_24h?: { btc?: number; eur?: number; usd?: number; }; last_updated?: string; low_24h?: { btc?: number; eur?: number; usd?: number; }; market_cap?: { btc?: number; eur?: number; usd?: number; }; market_cap_change_24h?: number; market_cap_change_24h_in_currency?: { btc?: number; eur?: number; usd?: number; }; market_cap_change_percentage_24h?: number; market_cap_change_percentage_24h_in_currency?: { btc?: number; eur?: number; usd?: number; }; market_cap_fdv_ratio?: number; market_cap_rank?: number; market_cap_rank_with_rehypothecated?: number; max_supply?: number; mcap_to_tvl_ratio?: number; price_change_24h?: number; price_change_percentage_14d?: number; price_change_percentage_14d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_1h_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_1y?: number; price_change_percentage_1y_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_200d?: number; price_change_percentage_200d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_24h?: number; price_change_percentage_24h_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_30d?: number; price_change_percentage_30d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_60d?: number; price_change_percentage_60d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_7d?: number; price_change_percentage_7d_in_currency?: { btc?: number; eur?: number; usd?: number; }; roi?: number; total_supply?: number; total_value_locked?: number; total_volume?: { btc?: number; eur?: number; usd?: number; }; }; name?: string; platforms?: object; preview_listing?: boolean; public_notice?: string; sentiment_votes_down_percentage?: number; sentiment_votes_up_percentage?: number; status_updates?: string[]; symbol?: string; tickers?: { base?: string; bid_ask_spread_percentage?: number; coin_id?: string; converted_last?: { btc?: number; eth?: number; usd?: number; }; converted_volume?: { btc?: number; eth?: number; usd?: number; }; is_anomaly?: boolean; is_stale?: boolean; last?: number; last_fetch_at?: string; last_traded_at?: string; market?: { has_trading_incentive?: boolean; identifier?: string; name?: string; }; target?: string; target_coin_id?: string; timestamp?: string; token_info_url?: string; trade_url?: string; trust_score?: string; volume?: number; }[]; watchlist_portfolio_users?: number; web_slug?: string; }`\n\n  - `id?: string`\n  - `additional_notices?: string[]`\n  - `asset_platform_id?: string`\n  - `block_time_in_minutes?: number`\n  - `categories?: string[]`\n  - `community_data?: { facebook_likes?: number; reddit_accounts_active_48h?: number; reddit_average_comments_48h?: number; reddit_average_posts_48h?: number; reddit_subscribers?: number; telegram_channel_user_count?: number; }`\n  - `country_origin?: string`\n  - `description?: object`\n  - `detail_platforms?: object`\n  - `developer_data?: { closed_issues?: number; code_additions_deletions_4_weeks?: { additions?: number; deletions?: number; }; commit_count_4_weeks?: number; forks?: number; last_4_weeks_commit_activity_series?: number[]; pull_request_contributors?: number; pull_requests_merged?: number; stars?: number; subscribers?: number; total_issues?: number; }`\n  - `genesis_date?: string`\n  - `hashing_algorithm?: string`\n  - `image?: { large?: string; small?: string; thumb?: string; }`\n  - `last_updated?: string`\n  - `links?: { announcement_url?: string[]; bitcointalk_thread_identifier?: string; blockchain_site?: string[]; chat_url?: string[]; facebook_username?: string; homepage?: string[]; official_forum_url?: string[]; repos_url?: { bitbucket?: string[]; github?: string[]; }; snapshot_url?: string; subreddit_url?: string; telegram_channel_identifier?: string; twitter_screen_name?: string; whitepaper?: string[]; }`\n  - `localization?: object`\n  - `market_cap_rank?: number`\n  - `market_cap_rank_with_rehypothecated?: number`\n  - `market_data?: { ath?: { btc?: number; eur?: number; usd?: number; }; ath_change_percentage?: { btc?: number; eur?: number; usd?: number; }; ath_date?: { btc?: string; eur?: string; usd?: string; }; atl?: { btc?: number; eur?: number; usd?: number; }; atl_change_percentage?: { btc?: number; eur?: number; usd?: number; }; atl_date?: { btc?: string; eur?: string; usd?: string; }; circulating_supply?: number; current_price?: { btc?: number; eur?: number; usd?: number; }; fdv_to_tvl_ratio?: number; fully_diluted_valuation?: { btc?: number; eur?: number; usd?: number; }; high_24h?: { btc?: number; eur?: number; usd?: number; }; last_updated?: string; low_24h?: { btc?: number; eur?: number; usd?: number; }; market_cap?: { btc?: number; eur?: number; usd?: number; }; market_cap_change_24h?: number; market_cap_change_24h_in_currency?: { btc?: number; eur?: number; usd?: number; }; market_cap_change_percentage_24h?: number; market_cap_change_percentage_24h_in_currency?: { btc?: number; eur?: number; usd?: number; }; market_cap_fdv_ratio?: number; market_cap_rank?: number; market_cap_rank_with_rehypothecated?: number; max_supply?: number; mcap_to_tvl_ratio?: number; price_change_24h?: number; price_change_percentage_14d?: number; price_change_percentage_14d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_1h_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_1y?: number; price_change_percentage_1y_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_200d?: number; price_change_percentage_200d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_24h?: number; price_change_percentage_24h_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_30d?: number; price_change_percentage_30d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_60d?: number; price_change_percentage_60d_in_currency?: { btc?: number; eur?: number; usd?: number; }; price_change_percentage_7d?: number; price_change_percentage_7d_in_currency?: { btc?: number; eur?: number; usd?: number; }; roi?: number; total_supply?: number; total_value_locked?: number; total_volume?: { btc?: number; eur?: number; usd?: number; }; }`\n  - `name?: string`\n  - `platforms?: object`\n  - `preview_listing?: boolean`\n  - `public_notice?: string`\n  - `sentiment_votes_down_percentage?: number`\n  - `sentiment_votes_up_percentage?: number`\n  - `status_updates?: string[]`\n  - `symbol?: string`\n  - `tickers?: { base?: string; bid_ask_spread_percentage?: number; coin_id?: string; converted_last?: { btc?: number; eth?: number; usd?: number; }; converted_volume?: { btc?: number; eth?: number; usd?: number; }; is_anomaly?: boolean; is_stale?: boolean; last?: number; last_fetch_at?: string; last_traded_at?: string; market?: { has_trading_incentive?: boolean; identifier?: string; name?: string; }; target?: string; target_coin_id?: string; timestamp?: string; token_info_url?: string; trade_url?: string; trust_score?: string; volume?: number; }[]`\n  - `watchlist_portfolio_users?: number`\n  - `web_slug?: string`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst contract = await client.coins.contract.get('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', { id: 'ethereum' });\n\nconsole.log(contract);\n```",
  },
  {
    name: 'get',
    endpoint: '/coins/{id}/contract/{contract_address}/market_chart',
    httpMethod: 'get',
    summary: 'Coin Historical Chart Data by Token Address',
    description:
      'This endpoint allows you to **get the historical chart data including time in UNIX, price, market cap and 24hr volume based on asset platform and particular token contract address**',
    stainlessPath: '(resource) coins.contract.market_chart > (method) get',
    qualified: 'client.coins.contract.marketChart.get',
    params: [
      'id: string;',
      'contract_address: string;',
      'days: string;',
      'vs_currency: string;',
      "interval?: '5m' | 'hourly' | 'daily';",
      'precision?: string;',
    ],
    response: '{ market_caps?: number[][]; prices?: number[][]; total_volumes?: number[][]; }',
    markdown:
      "## get\n\n`client.coins.contract.marketChart.get(id: string, contract_address: string, days: string, vs_currency: string, interval?: '5m' | 'hourly' | 'daily', precision?: string): { market_caps?: number[][]; prices?: number[][]; total_volumes?: number[][]; }`\n\n**get** `/coins/{id}/contract/{contract_address}/market_chart`\n\nThis endpoint allows you to **get the historical chart data including time in UNIX, price, market cap and 24hr volume based on asset platform and particular token contract address**\n\n### Parameters\n\n- `id: string`\n\n- `contract_address: string`\n\n- `days: string`\n  data up to number of days ago \n You may use any integer or `max` for number of days\n\n- `vs_currency: string`\n  target currency of market data \n *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).\n\n- `interval?: '5m' | 'hourly' | 'daily'`\n  data interval, leave empty for auto granularity\n\n- `precision?: string`\n  decimal place for currency price value\n\n### Returns\n\n- `{ market_caps?: number[][]; prices?: number[][]; total_volumes?: number[][]; }`\n\n  - `market_caps?: number[][]`\n  - `prices?: number[][]`\n  - `total_volumes?: number[][]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst marketChart = await client.coins.contract.marketChart.get('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', {\n  id: 'ethereum',\n  days: 'days',\n  vs_currency: 'usd',\n});\n\nconsole.log(marketChart);\n```",
  },
  {
    name: 'get_range',
    endpoint: '/coins/{id}/contract/{contract_address}/market_chart/range',
    httpMethod: 'get',
    summary: 'Coin Historical Chart Data within Time Range by Token Address',
    description:
      'This endpoint allows you to **get the historical chart data within certain time range in UNIX along with price, market cap and 24hr volume based on asset platform and particular token contract address**',
    stainlessPath: '(resource) coins.contract.market_chart > (method) get_range',
    qualified: 'client.coins.contract.marketChart.getRange',
    params: [
      'id: string;',
      'contract_address: string;',
      'from: string;',
      'to: string;',
      'vs_currency: string;',
      "interval?: '5m' | 'hourly' | 'daily';",
      'precision?: string;',
    ],
    response: '{ market_caps?: number[][]; prices?: number[][]; total_volumes?: number[][]; }',
    markdown:
      "## get_range\n\n`client.coins.contract.marketChart.getRange(id: string, contract_address: string, from: string, to: string, vs_currency: string, interval?: '5m' | 'hourly' | 'daily', precision?: string): { market_caps?: number[][]; prices?: number[][]; total_volumes?: number[][]; }`\n\n**get** `/coins/{id}/contract/{contract_address}/market_chart/range`\n\nThis endpoint allows you to **get the historical chart data within certain time range in UNIX along with price, market cap and 24hr volume based on asset platform and particular token contract address**\n\n### Parameters\n\n- `id: string`\n\n- `contract_address: string`\n\n- `from: string`\n  starting date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp. \n **use ISO date string for best compatibility**\n\n- `to: string`\n  ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp. \n **use ISO date string for best compatibility**\n\n- `vs_currency: string`\n  target currency of market data \n *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).\n\n- `interval?: '5m' | 'hourly' | 'daily'`\n  data interval, leave empty for auto granularity\n\n- `precision?: string`\n  decimal place for currency price value\n\n### Returns\n\n- `{ market_caps?: number[][]; prices?: number[][]; total_volumes?: number[][]; }`\n\n  - `market_caps?: number[][]`\n  - `prices?: number[][]`\n  - `total_volumes?: number[][]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.coins.contract.marketChart.getRange('0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', {\n  id: 'ethereum',\n  from: 'from',\n  to: 'to',\n  vs_currency: 'usd',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/coins/{id}/history',
    httpMethod: 'get',
    summary: 'Coin Historical Data by ID',
    description:
      'This endpoint allows you to **query the historical data (price, market cap, 24hrs volume, ...) at a given date for a coin based on a particular coin ID**',
    stainlessPath: '(resource) coins.history > (method) get',
    qualified: 'client.coins.history.get',
    params: ['id: string;', 'date: string;', 'localization?: boolean;'],
    response:
      '{ id?: string; community_data?: { facebook_likes?: number; reddit_accounts_active_48h?: number; reddit_average_comments_48h?: number; reddit_average_posts_48h?: number; reddit_subscribers?: number; }; developer_data?: { closed_issues?: number; code_additions_deletions_4_weeks?: { additions?: number; deletions?: number; }; commit_count_4_weeks?: number; forks?: number; pull_request_contributors?: number; pull_requests_merged?: number; stars?: number; subscribers?: number; total_issues?: number; }; image?: { small?: string; thumb?: string; }; localization?: object; market_data?: { current_price?: { btc?: number; eur?: number; usd?: number; }; market_cap?: { btc?: number; eur?: number; usd?: number; }; total_volume?: { btc?: number; eur?: number; usd?: number; }; }; name?: string; public_interest_stats?: { alexa_rank?: number; bing_matches?: number; }; symbol?: string; }',
    markdown:
      "## get\n\n`client.coins.history.get(id: string, date: string, localization?: boolean): { id?: string; community_data?: object; developer_data?: object; image?: object; localization?: object; market_data?: object; name?: string; public_interest_stats?: object; symbol?: string; }`\n\n**get** `/coins/{id}/history`\n\nThis endpoint allows you to **query the historical data (price, market cap, 24hrs volume, ...) at a given date for a coin based on a particular coin ID**\n\n### Parameters\n\n- `id: string`\n\n- `date: string`\n  date of data snapshot (`YYYY-MM-DD`)\n\n- `localization?: boolean`\n  include all the localized languages in response, default: true\n\n### Returns\n\n- `{ id?: string; community_data?: { facebook_likes?: number; reddit_accounts_active_48h?: number; reddit_average_comments_48h?: number; reddit_average_posts_48h?: number; reddit_subscribers?: number; }; developer_data?: { closed_issues?: number; code_additions_deletions_4_weeks?: { additions?: number; deletions?: number; }; commit_count_4_weeks?: number; forks?: number; pull_request_contributors?: number; pull_requests_merged?: number; stars?: number; subscribers?: number; total_issues?: number; }; image?: { small?: string; thumb?: string; }; localization?: object; market_data?: { current_price?: { btc?: number; eur?: number; usd?: number; }; market_cap?: { btc?: number; eur?: number; usd?: number; }; total_volume?: { btc?: number; eur?: number; usd?: number; }; }; name?: string; public_interest_stats?: { alexa_rank?: number; bing_matches?: number; }; symbol?: string; }`\n\n  - `id?: string`\n  - `community_data?: { facebook_likes?: number; reddit_accounts_active_48h?: number; reddit_average_comments_48h?: number; reddit_average_posts_48h?: number; reddit_subscribers?: number; }`\n  - `developer_data?: { closed_issues?: number; code_additions_deletions_4_weeks?: { additions?: number; deletions?: number; }; commit_count_4_weeks?: number; forks?: number; pull_request_contributors?: number; pull_requests_merged?: number; stars?: number; subscribers?: number; total_issues?: number; }`\n  - `image?: { small?: string; thumb?: string; }`\n  - `localization?: object`\n  - `market_data?: { current_price?: { btc?: number; eur?: number; usd?: number; }; market_cap?: { btc?: number; eur?: number; usd?: number; }; total_volume?: { btc?: number; eur?: number; usd?: number; }; }`\n  - `name?: string`\n  - `public_interest_stats?: { alexa_rank?: number; bing_matches?: number; }`\n  - `symbol?: string`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst history = await client.coins.history.get('bitcoin', { date: 'date' });\n\nconsole.log(history);\n```",
  },
  {
    name: 'get',
    endpoint: '/coins/{id}/market_chart',
    httpMethod: 'get',
    summary: 'Coin Historical Chart Data by ID',
    description:
      'This endpoint allows you to **get the historical chart data of a coin including time in UNIX, price, market cap and 24hr volume based on particular coin ID**',
    stainlessPath: '(resource) coins.market_chart > (method) get',
    qualified: 'client.coins.marketChart.get',
    params: [
      'id: string;',
      'days: string;',
      'vs_currency: string;',
      "interval?: '5m' | 'hourly' | 'daily';",
      'precision?: string;',
    ],
    response: '{ market_caps?: number[][]; prices?: number[][]; total_volumes?: number[][]; }',
    markdown:
      "## get\n\n`client.coins.marketChart.get(id: string, days: string, vs_currency: string, interval?: '5m' | 'hourly' | 'daily', precision?: string): { market_caps?: number[][]; prices?: number[][]; total_volumes?: number[][]; }`\n\n**get** `/coins/{id}/market_chart`\n\nThis endpoint allows you to **get the historical chart data of a coin including time in UNIX, price, market cap and 24hr volume based on particular coin ID**\n\n### Parameters\n\n- `id: string`\n\n- `days: string`\n  data up to number of days ago \n You may use any integer or `max` for number of days\n\n- `vs_currency: string`\n  target currency of market data \n *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).\n\n- `interval?: '5m' | 'hourly' | 'daily'`\n  data interval, leave empty for auto granularity\n\n- `precision?: string`\n  decimal place for currency price value\n\n### Returns\n\n- `{ market_caps?: number[][]; prices?: number[][]; total_volumes?: number[][]; }`\n\n  - `market_caps?: number[][]`\n  - `prices?: number[][]`\n  - `total_volumes?: number[][]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst marketChart = await client.coins.marketChart.get('bitcoin', { days: 'days', vs_currency: 'usd' });\n\nconsole.log(marketChart);\n```",
  },
  {
    name: 'get_range',
    endpoint: '/coins/{id}/market_chart/range',
    httpMethod: 'get',
    summary: 'Coin Historical Chart Data within Time Range by ID',
    description:
      'This endpoint allows you to **get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hr volume based on particular coin ID**',
    stainlessPath: '(resource) coins.market_chart > (method) get_range',
    qualified: 'client.coins.marketChart.getRange',
    params: [
      'id: string;',
      'from: string;',
      'to: string;',
      'vs_currency: string;',
      "interval?: '5m' | 'hourly' | 'daily';",
      'precision?: string;',
    ],
    response: '{ market_caps?: number[][]; prices?: number[][]; total_volumes?: number[][]; }',
    markdown:
      "## get_range\n\n`client.coins.marketChart.getRange(id: string, from: string, to: string, vs_currency: string, interval?: '5m' | 'hourly' | 'daily', precision?: string): { market_caps?: number[][]; prices?: number[][]; total_volumes?: number[][]; }`\n\n**get** `/coins/{id}/market_chart/range`\n\nThis endpoint allows you to **get the historical chart data of a coin within certain time range in UNIX along with price, market cap and 24hr volume based on particular coin ID**\n\n### Parameters\n\n- `id: string`\n\n- `from: string`\n  starting date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp. \n **use ISO date string for best compatibility**\n\n- `to: string`\n  ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp. \n **use ISO date string for best compatibility**\n\n- `vs_currency: string`\n  target currency of market data \n *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).\n\n- `interval?: '5m' | 'hourly' | 'daily'`\n  data interval, leave empty for auto granularity\n\n- `precision?: string`\n  decimal place for currency price value\n\n### Returns\n\n- `{ market_caps?: number[][]; prices?: number[][]; total_volumes?: number[][]; }`\n\n  - `market_caps?: number[][]`\n  - `prices?: number[][]`\n  - `total_volumes?: number[][]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.coins.marketChart.getRange('bitcoin', {\n  from: 'from',\n  to: 'to',\n  vs_currency: 'usd',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/coins/{id}/ohlc',
    httpMethod: 'get',
    summary: 'Coin OHLC Chart by ID',
    description:
      'This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin ID**',
    stainlessPath: '(resource) coins.ohlc > (method) get',
    qualified: 'client.coins.ohlc.get',
    params: [
      'id: string;',
      "days: '1' | '7' | '14' | '30' | '90' | '180' | '365' | 'max';",
      'vs_currency: string;',
      "interval?: 'daily' | 'hourly';",
      'precision?: string;',
    ],
    response: 'number[][]',
    markdown:
      "## get\n\n`client.coins.ohlc.get(id: string, days: '1' | '7' | '14' | '30' | '90' | '180' | '365' | 'max', vs_currency: string, interval?: 'daily' | 'hourly', precision?: string): number[][]`\n\n**get** `/coins/{id}/ohlc`\n\nThis endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin based on particular coin ID**\n\n### Parameters\n\n- `id: string`\n\n- `days: '1' | '7' | '14' | '30' | '90' | '180' | '365' | 'max'`\n  data up to number of days ago\n\n- `vs_currency: string`\n  target currency of price data \n *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).\n\n- `interval?: 'daily' | 'hourly'`\n  data interval, leave empty for auto granularity\n\n- `precision?: string`\n  decimal place for currency price value\n\n### Returns\n\n- `number[][]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst ohlcs = await client.coins.ohlc.get('bitcoin', { days: '1', vs_currency: 'usd' });\n\nconsole.log(ohlcs);\n```",
  },
  {
    name: 'get_range',
    endpoint: '/coins/{id}/ohlc/range',
    httpMethod: 'get',
    summary: '💼 Coin OHLC Chart within Time Range by ID',
    description:
      'This endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin within a range of timestamp based on particular coin ID**',
    stainlessPath: '(resource) coins.ohlc > (method) get_range',
    qualified: 'client.coins.ohlc.getRange',
    params: [
      'id: string;',
      'from: string;',
      "interval: 'daily' | 'hourly';",
      'to: string;',
      'vs_currency: string;',
    ],
    response: 'number[][]',
    markdown:
      "## get_range\n\n`client.coins.ohlc.getRange(id: string, from: string, interval: 'daily' | 'hourly', to: string, vs_currency: string): number[][]`\n\n**get** `/coins/{id}/ohlc/range`\n\nThis endpoint allows you to **get the OHLC chart (Open, High, Low, Close) of a coin within a range of timestamp based on particular coin ID**\n\n### Parameters\n\n- `id: string`\n\n- `from: string`\n  starting date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp. \n **use ISO date string for best compatibility**\n\n- `interval: 'daily' | 'hourly'`\n  data interval\n\n- `to: string`\n  ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp. \n **use ISO date string for best compatibility**\n\n- `vs_currency: string`\n  target currency of price data \n *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).\n\n### Returns\n\n- `number[][]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.coins.ohlc.getRange('bitcoin', {\n  from: 'from',\n  interval: 'daily',\n  to: 'to',\n  vs_currency: 'usd',\n});\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/coins/{id}/tickers',
    httpMethod: 'get',
    summary: 'Coin Tickers by ID',
    description:
      'This endpoint allows you to **query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID**',
    stainlessPath: '(resource) coins.tickers > (method) get',
    qualified: 'client.coins.tickers.get',
    params: [
      'id: string;',
      'depth?: boolean;',
      "dex_pair_format?: 'contract_address' | 'symbol';",
      'exchange_ids?: string;',
      'include_exchange_logo?: boolean;',
      "order?: 'trust_score_desc' | 'trust_score_asc' | 'volume_desc' | 'volume_asc';",
      'page?: number;',
    ],
    response:
      '{ name?: string; tickers?: { base?: string; bid_ask_spread_percentage?: number; coin_id?: string; converted_last?: { btc?: number; eth?: number; usd?: number; }; converted_volume?: { btc?: number; eth?: number; usd?: number; }; cost_to_move_down_usd?: number; cost_to_move_up_usd?: number; is_anomaly?: boolean; is_stale?: boolean; last?: number; last_fetch_at?: string; last_traded_at?: string; market?: { has_trading_incentive: boolean; identifier: string; name: string; logo?: string; }; target?: string; target_coin_id?: string; timestamp?: string; token_info_url?: string; trade_url?: string; trust_score?: string; volume?: number; }[]; }',
    markdown:
      "## get\n\n`client.coins.tickers.get(id: string, depth?: boolean, dex_pair_format?: 'contract_address' | 'symbol', exchange_ids?: string, include_exchange_logo?: boolean, order?: 'trust_score_desc' | 'trust_score_asc' | 'volume_desc' | 'volume_asc', page?: number): { name?: string; tickers?: object[]; }`\n\n**get** `/coins/{id}/tickers`\n\nThis endpoint allows you to **query the coin tickers on both centralized exchange (CEX) and decentralized exchange (DEX) based on a particular coin ID**\n\n### Parameters\n\n- `id: string`\n\n- `depth?: boolean`\n  include 2% orderbook depth, ie. `cost_to_move_up_usd` and `cost_to_move_down_usd` \n Default: false\n\n- `dex_pair_format?: 'contract_address' | 'symbol'`\n  set to `symbol` to display DEX pair base and target as symbols, default: `contract_address`\n\n- `exchange_ids?: string`\n  exchange ID \n *refers to [`/exchanges/list`](/reference/exchanges-list).\n\n- `include_exchange_logo?: boolean`\n  include exchange logo, default: false\n\n- `order?: 'trust_score_desc' | 'trust_score_asc' | 'volume_desc' | 'volume_asc'`\n  use this to sort the order of responses, default: trust_score_desc\n\n- `page?: number`\n  page through results\n\n### Returns\n\n- `{ name?: string; tickers?: { base?: string; bid_ask_spread_percentage?: number; coin_id?: string; converted_last?: { btc?: number; eth?: number; usd?: number; }; converted_volume?: { btc?: number; eth?: number; usd?: number; }; cost_to_move_down_usd?: number; cost_to_move_up_usd?: number; is_anomaly?: boolean; is_stale?: boolean; last?: number; last_fetch_at?: string; last_traded_at?: string; market?: { has_trading_incentive: boolean; identifier: string; name: string; logo?: string; }; target?: string; target_coin_id?: string; timestamp?: string; token_info_url?: string; trade_url?: string; trust_score?: string; volume?: number; }[]; }`\n\n  - `name?: string`\n  - `tickers?: { base?: string; bid_ask_spread_percentage?: number; coin_id?: string; converted_last?: { btc?: number; eth?: number; usd?: number; }; converted_volume?: { btc?: number; eth?: number; usd?: number; }; cost_to_move_down_usd?: number; cost_to_move_up_usd?: number; is_anomaly?: boolean; is_stale?: boolean; last?: number; last_fetch_at?: string; last_traded_at?: string; market?: { has_trading_incentive: boolean; identifier: string; name: string; logo?: string; }; target?: string; target_coin_id?: string; timestamp?: string; token_info_url?: string; trade_url?: string; trust_score?: string; volume?: number; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst ticker = await client.coins.tickers.get('bitcoin');\n\nconsole.log(ticker);\n```",
  },
  {
    name: 'get',
    endpoint: '/coins/{id}/total_supply_chart',
    httpMethod: 'get',
    summary: '👑 Total Supply Chart by ID',
    description:
      'This endpoint allows you to **query historical total supply of a coin by number of days away from now based on provided coin ID**',
    stainlessPath: '(resource) coins.total_supply_chart > (method) get',
    qualified: 'client.coins.totalSupplyChart.get',
    params: ['id: string;', 'days: string;', "interval?: 'daily';"],
    response: '{ total_supply?: number | string[][]; }',
    markdown:
      "## get\n\n`client.coins.totalSupplyChart.get(id: string, days: string, interval?: 'daily'): { total_supply?: number | string[][]; }`\n\n**get** `/coins/{id}/total_supply_chart`\n\nThis endpoint allows you to **query historical total supply of a coin by number of days away from now based on provided coin ID**\n\n### Parameters\n\n- `id: string`\n\n- `days: string`\n  data up to number of days ago \n Valid values: any integer or `max`\n\n- `interval?: 'daily'`\n  data interval\n\n### Returns\n\n- `{ total_supply?: number | string[][]; }`\n\n  - `total_supply?: number | string[][]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst totalSupplyChart = await client.coins.totalSupplyChart.get('bitcoin', { days: 'days' });\n\nconsole.log(totalSupplyChart);\n```",
  },
  {
    name: 'get_range',
    endpoint: '/coins/{id}/total_supply_chart/range',
    httpMethod: 'get',
    summary: '👑 Total Supply Chart within time range by ID',
    description:
      'This endpoint allows you to **query historical total supply of a coin, within a range of timestamp based on the provided coin ID**',
    stainlessPath: '(resource) coins.total_supply_chart > (method) get_range',
    qualified: 'client.coins.totalSupplyChart.getRange',
    params: ['id: string;', 'from: string;', 'to: string;'],
    response: '{ total_supply?: number | string[][]; }',
    markdown:
      "## get_range\n\n`client.coins.totalSupplyChart.getRange(id: string, from: string, to: string): { total_supply?: number | string[][]; }`\n\n**get** `/coins/{id}/total_supply_chart/range`\n\nThis endpoint allows you to **query historical total supply of a coin, within a range of timestamp based on the provided coin ID**\n\n### Parameters\n\n- `id: string`\n\n- `from: string`\n  starting date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp. \n **use ISO date string for best compatibility**\n\n- `to: string`\n  ending date in ISO date string (`YYYY-MM-DD` or `YYYY-MM-DDTHH:MM`) or UNIX timestamp. \n **use ISO date string for best compatibility**\n\n### Returns\n\n- `{ total_supply?: number | string[][]; }`\n\n  - `total_supply?: number | string[][]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.coins.totalSupplyChart.getRange('bitcoin', { from: 'from', to: 'to' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/derivatives',
    httpMethod: 'get',
    summary: 'Derivatives Tickers List',
    description:
      'This endpoint allows you to **query all the tickers from derivatives exchanges on CoinGecko**',
    stainlessPath: '(resource) derivatives > (method) get',
    qualified: 'client.derivatives.get',
    response:
      '{ basis?: number; contract_type?: string; expired_at?: string; funding_rate?: number; index?: number; index_id?: string; last_traded_at?: number; market?: string; open_interest?: number; price?: string; price_percentage_change_24h?: number; spread?: number; symbol?: string; volume_24h?: number; }',
    markdown:
      "## get\n\n`client.derivatives.get(): { basis?: number; contract_type?: string; expired_at?: string; funding_rate?: number; index?: number; index_id?: string; last_traded_at?: number; market?: string; open_interest?: number; price?: string; price_percentage_change_24h?: number; spread?: number; symbol?: string; volume_24h?: number; }`\n\n**get** `/derivatives`\n\nThis endpoint allows you to **query all the tickers from derivatives exchanges on CoinGecko**\n\n### Returns\n\n- `{ basis?: number; contract_type?: string; expired_at?: string; funding_rate?: number; index?: number; index_id?: string; last_traded_at?: number; market?: string; open_interest?: number; price?: string; price_percentage_change_24h?: number; spread?: number; symbol?: string; volume_24h?: number; }`\n\n  - `basis?: number`\n  - `contract_type?: string`\n  - `expired_at?: string`\n  - `funding_rate?: number`\n  - `index?: number`\n  - `index_id?: string`\n  - `last_traded_at?: number`\n  - `market?: string`\n  - `open_interest?: number`\n  - `price?: string`\n  - `price_percentage_change_24h?: number`\n  - `spread?: number`\n  - `symbol?: string`\n  - `volume_24h?: number`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst derivative = await client.derivatives.get();\n\nconsole.log(derivative);\n```",
  },
  {
    name: 'get',
    endpoint: '/derivatives/exchanges',
    httpMethod: 'get',
    summary: 'Derivatives Exchanges List with Data',
    description:
      'This endpoint allows you to **query all the derivatives exchanges with related data (ID, name, open interest, ...) on CoinGecko**',
    stainlessPath: '(resource) derivatives.exchanges > (method) get',
    qualified: 'client.derivatives.exchanges.get',
    params: ['order?: string;', 'page?: number;', 'per_page?: number;'],
    response:
      '{ id?: string; country?: string; description?: string; image?: string; name?: string; number_of_futures_pairs?: number; number_of_perpetual_pairs?: number; open_interest_btc?: number; trade_volume_24h_btc?: string; url?: string; year_established?: number; }',
    markdown:
      "## get\n\n`client.derivatives.exchanges.get(order?: string, page?: number, per_page?: number): { id?: string; country?: string; description?: string; image?: string; name?: string; number_of_futures_pairs?: number; number_of_perpetual_pairs?: number; open_interest_btc?: number; trade_volume_24h_btc?: string; url?: string; year_established?: number; }`\n\n**get** `/derivatives/exchanges`\n\nThis endpoint allows you to **query all the derivatives exchanges with related data (ID, name, open interest, ...) on CoinGecko**\n\n### Parameters\n\n- `order?: string`\n  use this to sort the order of responses, default: open_interest_btc_desc\n\n- `page?: number`\n  page through results, default: 1\n\n- `per_page?: number`\n  total results per page\n\n### Returns\n\n- `{ id?: string; country?: string; description?: string; image?: string; name?: string; number_of_futures_pairs?: number; number_of_perpetual_pairs?: number; open_interest_btc?: number; trade_volume_24h_btc?: string; url?: string; year_established?: number; }`\n\n  - `id?: string`\n  - `country?: string`\n  - `description?: string`\n  - `image?: string`\n  - `name?: string`\n  - `number_of_futures_pairs?: number`\n  - `number_of_perpetual_pairs?: number`\n  - `open_interest_btc?: number`\n  - `trade_volume_24h_btc?: string`\n  - `url?: string`\n  - `year_established?: number`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst exchange = await client.derivatives.exchanges.get();\n\nconsole.log(exchange);\n```",
  },
  {
    name: 'get_id',
    endpoint: '/derivatives/exchanges/{id}',
    httpMethod: 'get',
    summary: 'Derivatives Exchange Data by ID',
    description:
      "This endpoint allows you to **query the derivatives exchange's related data (ID, name, open interest, ...) based on the exchanges' ID**",
    stainlessPath: '(resource) derivatives.exchanges > (method) get_id',
    qualified: 'client.derivatives.exchanges.getID',
    params: ['id: string;', "include_tickers?: 'all' | 'unexpired';"],
    response:
      '{ country?: string; description?: string; image?: string; name?: string; number_of_futures_pairs?: number; number_of_perpetual_pairs?: number; open_interest_btc?: number; tickers?: { base?: string; bid_ask_spread?: number; coin_id?: string; contract_type?: string; converted_last?: { btc?: string; eth?: string; usd?: string; }; converted_volume?: { btc?: string; eth?: string; usd?: string; }; expired_at?: string; funding_rate?: number; h24_percentage_change?: number; h24_volume?: number; index?: number; index_basis_percentage?: number; last?: number; last_traded?: number; open_interest_usd?: number; symbol?: string; target?: string; target_coin_id?: string; trade_url?: string; }[]; trade_volume_24h_btc?: number; url?: string; year_established?: number; }',
    markdown:
      "## get_id\n\n`client.derivatives.exchanges.getID(id: string, include_tickers?: 'all' | 'unexpired'): { country?: string; description?: string; image?: string; name?: string; number_of_futures_pairs?: number; number_of_perpetual_pairs?: number; open_interest_btc?: number; tickers?: object[]; trade_volume_24h_btc?: number; url?: string; year_established?: number; }`\n\n**get** `/derivatives/exchanges/{id}`\n\nThis endpoint allows you to **query the derivatives exchange's related data (ID, name, open interest, ...) based on the exchanges' ID**\n\n### Parameters\n\n- `id: string`\n\n- `include_tickers?: 'all' | 'unexpired'`\n  include tickers data\n\n### Returns\n\n- `{ country?: string; description?: string; image?: string; name?: string; number_of_futures_pairs?: number; number_of_perpetual_pairs?: number; open_interest_btc?: number; tickers?: { base?: string; bid_ask_spread?: number; coin_id?: string; contract_type?: string; converted_last?: { btc?: string; eth?: string; usd?: string; }; converted_volume?: { btc?: string; eth?: string; usd?: string; }; expired_at?: string; funding_rate?: number; h24_percentage_change?: number; h24_volume?: number; index?: number; index_basis_percentage?: number; last?: number; last_traded?: number; open_interest_usd?: number; symbol?: string; target?: string; target_coin_id?: string; trade_url?: string; }[]; trade_volume_24h_btc?: number; url?: string; year_established?: number; }`\n\n  - `country?: string`\n  - `description?: string`\n  - `image?: string`\n  - `name?: string`\n  - `number_of_futures_pairs?: number`\n  - `number_of_perpetual_pairs?: number`\n  - `open_interest_btc?: number`\n  - `tickers?: { base?: string; bid_ask_spread?: number; coin_id?: string; contract_type?: string; converted_last?: { btc?: string; eth?: string; usd?: string; }; converted_volume?: { btc?: string; eth?: string; usd?: string; }; expired_at?: string; funding_rate?: number; h24_percentage_change?: number; h24_volume?: number; index?: number; index_basis_percentage?: number; last?: number; last_traded?: number; open_interest_usd?: number; symbol?: string; target?: string; target_coin_id?: string; trade_url?: string; }[]`\n  - `trade_volume_24h_btc?: number`\n  - `url?: string`\n  - `year_established?: number`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.derivatives.exchanges.getID('binance_futures');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_list',
    endpoint: '/derivatives/exchanges/list',
    httpMethod: 'get',
    summary: 'Derivatives Exchanges List (ID Map)',
    description:
      'This endpoint allows you to **query all the derivatives exchanges with ID and name on CoinGecko**',
    stainlessPath: '(resource) derivatives.exchanges > (method) get_list',
    qualified: 'client.derivatives.exchanges.getList',
    response: '{ id?: string; name?: string; }',
    markdown:
      "## get_list\n\n`client.derivatives.exchanges.getList(): { id?: string; name?: string; }`\n\n**get** `/derivatives/exchanges/list`\n\nThis endpoint allows you to **query all the derivatives exchanges with ID and name on CoinGecko**\n\n### Returns\n\n- `{ id?: string; name?: string; }`\n\n  - `id?: string`\n  - `name?: string`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.derivatives.exchanges.getList();\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_list',
    endpoint: '/entities/list',
    httpMethod: 'get',
    summary: 'Entities List (ID Map)',
    description:
      'This endpoint allows you to **query all the supported entities on CoinGecko with entities ID, name, symbol, and country**',
    stainlessPath: '(resource) entities > (method) get_list',
    qualified: 'client.entities.getList',
    params: ["entity_type?: 'company' | 'government';", 'page?: number;', 'per_page?: number;'],
    response: '{ id?: string; country?: string; name?: string; symbol?: string; }[]',
    markdown:
      "## get_list\n\n`client.entities.getList(entity_type?: 'company' | 'government', page?: number, per_page?: number): { id?: string; country?: string; name?: string; symbol?: string; }[]`\n\n**get** `/entities/list`\n\nThis endpoint allows you to **query all the supported entities on CoinGecko with entities ID, name, symbol, and country**\n\n### Parameters\n\n- `entity_type?: 'company' | 'government'`\n  filter by entity type, default: false\n\n- `page?: number`\n  page through results, default: 1\n\n- `per_page?: number`\n  total results per page, default: 100 \n Valid values: 1...250\n\n### Returns\n\n- `{ id?: string; country?: string; name?: string; symbol?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.entities.getList();\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/exchange_rates',
    httpMethod: 'get',
    summary: 'BTC-to-Currency Exchange Rates',
    description: 'This endpoint allows you to **query BTC exchange rates with other currencies**',
    stainlessPath: '(resource) exchange_rates > (method) get',
    qualified: 'client.exchangeRates.get',
    response: '{ rates?: object; }',
    markdown:
      "## get\n\n`client.exchangeRates.get(): { rates?: object; }`\n\n**get** `/exchange_rates`\n\nThis endpoint allows you to **query BTC exchange rates with other currencies**\n\n### Returns\n\n- `{ rates?: object; }`\n\n  - `rates?: object`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst exchangeRate = await client.exchangeRates.get();\n\nconsole.log(exchangeRate);\n```",
  },
  {
    name: 'get',
    endpoint: '/exchanges',
    httpMethod: 'get',
    summary: 'Exchanges List with Data',
    description:
      "This endpoint allows you to **query all the supported exchanges with exchanges' data (ID, name, country, ...) that have active trading volumes on CoinGecko**",
    stainlessPath: '(resource) exchanges > (method) get',
    qualified: 'client.exchanges.get',
    params: ['page?: number;', 'per_page?: number;'],
    response:
      '{ id?: string; country?: string; description?: string; has_trading_incentive?: boolean; image?: string; name?: string; trade_volume_24h_btc?: number; trust_score?: number; trust_score_rank?: number; url?: string; year_established?: number; }',
    markdown:
      "## get\n\n`client.exchanges.get(page?: number, per_page?: number): { id?: string; country?: string; description?: string; has_trading_incentive?: boolean; image?: string; name?: string; trade_volume_24h_btc?: number; trust_score?: number; trust_score_rank?: number; url?: string; year_established?: number; }`\n\n**get** `/exchanges`\n\nThis endpoint allows you to **query all the supported exchanges with exchanges' data (ID, name, country, ...) that have active trading volumes on CoinGecko**\n\n### Parameters\n\n- `page?: number`\n  page through results, default: 1\n\n- `per_page?: number`\n  total results per page, default: 100 \n Valid values: 1...250\n\n### Returns\n\n- `{ id?: string; country?: string; description?: string; has_trading_incentive?: boolean; image?: string; name?: string; trade_volume_24h_btc?: number; trust_score?: number; trust_score_rank?: number; url?: string; year_established?: number; }`\n\n  - `id?: string`\n  - `country?: string`\n  - `description?: string`\n  - `has_trading_incentive?: boolean`\n  - `image?: string`\n  - `name?: string`\n  - `trade_volume_24h_btc?: number`\n  - `trust_score?: number`\n  - `trust_score_rank?: number`\n  - `url?: string`\n  - `year_established?: number`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst exchange = await client.exchanges.get();\n\nconsole.log(exchange);\n```",
  },
  {
    name: 'get_id',
    endpoint: '/exchanges/{id}',
    httpMethod: 'get',
    summary: 'Exchange Data by ID',
    description:
      "This endpoint allows you to **query exchange's data (name, year established, country, ...), exchange volume in BTC and top 100 tickers based on exchange's ID**",
    stainlessPath: '(resource) exchanges > (method) get_id',
    qualified: 'client.exchanges.getID',
    params: ['id: string;', "dex_pair_format?: 'contract_address' | 'symbol';"],
    response:
      '{ alert_notice?: string; centralized?: boolean; coins?: number; country?: string; description?: string; facebook_url?: string; has_trading_incentive?: boolean; image?: string; name?: string; other_url_1?: string; other_url_2?: string; pairs?: number; public_notice?: string; reddit_url?: string; slack_url?: string; telegram_url?: string; tickers?: { name?: string; tickers?: { base?: string; bid_ask_spread_percentage?: number; coin_id?: string; converted_last?: object; converted_volume?: object; cost_to_move_down_usd?: number; cost_to_move_up_usd?: number; is_anomaly?: boolean; is_stale?: boolean; last?: number; last_fetch_at?: string; last_traded_at?: string; market?: object; target?: string; target_coin_id?: string; timestamp?: string; token_info_url?: string; trade_url?: string; trust_score?: string; volume?: number; }[]; }[]; trade_volume_24h_btc?: number; trust_score?: number; trust_score_rank?: number; twitter_handle?: string; url?: string; year_established?: number; }',
    markdown:
      "## get_id\n\n`client.exchanges.getID(id: string, dex_pair_format?: 'contract_address' | 'symbol'): { alert_notice?: string; centralized?: boolean; coins?: number; country?: string; description?: string; facebook_url?: string; has_trading_incentive?: boolean; image?: string; name?: string; other_url_1?: string; other_url_2?: string; pairs?: number; public_notice?: string; reddit_url?: string; slack_url?: string; telegram_url?: string; tickers?: object[]; trade_volume_24h_btc?: number; trust_score?: number; trust_score_rank?: number; twitter_handle?: string; url?: string; year_established?: number; }`\n\n**get** `/exchanges/{id}`\n\nThis endpoint allows you to **query exchange's data (name, year established, country, ...), exchange volume in BTC and top 100 tickers based on exchange's ID**\n\n### Parameters\n\n- `id: string`\n\n- `dex_pair_format?: 'contract_address' | 'symbol'`\n  set to `symbol` to display DEX pair base and target as symbols, default: `contract_address`\n\n### Returns\n\n- `{ alert_notice?: string; centralized?: boolean; coins?: number; country?: string; description?: string; facebook_url?: string; has_trading_incentive?: boolean; image?: string; name?: string; other_url_1?: string; other_url_2?: string; pairs?: number; public_notice?: string; reddit_url?: string; slack_url?: string; telegram_url?: string; tickers?: { name?: string; tickers?: { base?: string; bid_ask_spread_percentage?: number; coin_id?: string; converted_last?: object; converted_volume?: object; cost_to_move_down_usd?: number; cost_to_move_up_usd?: number; is_anomaly?: boolean; is_stale?: boolean; last?: number; last_fetch_at?: string; last_traded_at?: string; market?: object; target?: string; target_coin_id?: string; timestamp?: string; token_info_url?: string; trade_url?: string; trust_score?: string; volume?: number; }[]; }[]; trade_volume_24h_btc?: number; trust_score?: number; trust_score_rank?: number; twitter_handle?: string; url?: string; year_established?: number; }`\n\n  - `alert_notice?: string`\n  - `centralized?: boolean`\n  - `coins?: number`\n  - `country?: string`\n  - `description?: string`\n  - `facebook_url?: string`\n  - `has_trading_incentive?: boolean`\n  - `image?: string`\n  - `name?: string`\n  - `other_url_1?: string`\n  - `other_url_2?: string`\n  - `pairs?: number`\n  - `public_notice?: string`\n  - `reddit_url?: string`\n  - `slack_url?: string`\n  - `telegram_url?: string`\n  - `tickers?: { name?: string; tickers?: { base?: string; bid_ask_spread_percentage?: number; coin_id?: string; converted_last?: { btc?: number; eth?: number; usd?: number; }; converted_volume?: { btc?: number; eth?: number; usd?: number; }; cost_to_move_down_usd?: number; cost_to_move_up_usd?: number; is_anomaly?: boolean; is_stale?: boolean; last?: number; last_fetch_at?: string; last_traded_at?: string; market?: { has_trading_incentive: boolean; identifier: string; name: string; logo?: string; }; target?: string; target_coin_id?: string; timestamp?: string; token_info_url?: string; trade_url?: string; trust_score?: string; volume?: number; }[]; }[]`\n  - `trade_volume_24h_btc?: number`\n  - `trust_score?: number`\n  - `trust_score_rank?: number`\n  - `twitter_handle?: string`\n  - `url?: string`\n  - `year_established?: number`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.exchanges.getID('binance');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_list',
    endpoint: '/exchanges/list',
    httpMethod: 'get',
    summary: 'Exchanges List (ID Map)',
    description: 'This endpoint allows you to **query all the exchanges with ID and name**',
    stainlessPath: '(resource) exchanges > (method) get_list',
    qualified: 'client.exchanges.getList',
    params: ["status?: 'active' | 'inactive';"],
    response: '{ id: string; name: string; }[]',
    markdown:
      "## get_list\n\n`client.exchanges.getList(status?: 'active' | 'inactive'): { id: string; name: string; }[]`\n\n**get** `/exchanges/list`\n\nThis endpoint allows you to **query all the exchanges with ID and name**\n\n### Parameters\n\n- `status?: 'active' | 'inactive'`\n  filter by status of exchanges, default: active\n\n### Returns\n\n- `{ id: string; name: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.exchanges.getList();\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/exchanges/{id}/tickers',
    httpMethod: 'get',
    summary: 'Exchange Tickers by ID',
    description: "This endpoint allows you to **query exchange's tickers based on exchange's ID**",
    stainlessPath: '(resource) exchanges.tickers > (method) get',
    qualified: 'client.exchanges.tickers.get',
    params: [
      'id: string;',
      'coin_ids?: string;',
      'depth?: boolean;',
      "dex_pair_format?: 'contract_address' | 'symbol';",
      'include_exchange_logo?: boolean;',
      'order?: string;',
      'page?: number;',
    ],
    response:
      '{ name?: string; tickers?: { base?: string; bid_ask_spread_percentage?: number; coin_id?: string; converted_last?: { btc?: number; eth?: number; usd?: number; }; converted_volume?: { btc?: number; eth?: number; usd?: number; }; cost_to_move_down_usd?: number; cost_to_move_up_usd?: number; is_anomaly?: boolean; is_stale?: boolean; last?: number; last_fetch_at?: string; last_traded_at?: string; market?: { has_trading_incentive: boolean; identifier: string; name: string; logo?: string; }; target?: string; target_coin_id?: string; timestamp?: string; token_info_url?: string; trade_url?: string; trust_score?: string; volume?: number; }[]; }',
    markdown:
      "## get\n\n`client.exchanges.tickers.get(id: string, coin_ids?: string, depth?: boolean, dex_pair_format?: 'contract_address' | 'symbol', include_exchange_logo?: boolean, order?: string, page?: number): { name?: string; tickers?: object[]; }`\n\n**get** `/exchanges/{id}/tickers`\n\nThis endpoint allows you to **query exchange's tickers based on exchange's ID**\n\n### Parameters\n\n- `id: string`\n\n- `coin_ids?: string`\n  filter tickers by coin IDs, comma-separated if querying more than 1 coin \n *refers to [`/coins/list`](/reference/coins-list).\n\n- `depth?: boolean`\n  include 2% orderbook depth (Example: cost_to_move_up_usd & cost_to_move_down_usd),default: false\n\n- `dex_pair_format?: 'contract_address' | 'symbol'`\n  set to `symbol` to display DEX pair base and target as symbols, default: `contract_address`\n\n- `include_exchange_logo?: boolean`\n  include exchange logo, default: false\n\n- `order?: string`\n  use this to sort the order of responses, default: trust_score_desc\n\n- `page?: number`\n  page through results\n\n### Returns\n\n- `{ name?: string; tickers?: { base?: string; bid_ask_spread_percentage?: number; coin_id?: string; converted_last?: { btc?: number; eth?: number; usd?: number; }; converted_volume?: { btc?: number; eth?: number; usd?: number; }; cost_to_move_down_usd?: number; cost_to_move_up_usd?: number; is_anomaly?: boolean; is_stale?: boolean; last?: number; last_fetch_at?: string; last_traded_at?: string; market?: { has_trading_incentive: boolean; identifier: string; name: string; logo?: string; }; target?: string; target_coin_id?: string; timestamp?: string; token_info_url?: string; trade_url?: string; trust_score?: string; volume?: number; }[]; }`\n\n  - `name?: string`\n  - `tickers?: { base?: string; bid_ask_spread_percentage?: number; coin_id?: string; converted_last?: { btc?: number; eth?: number; usd?: number; }; converted_volume?: { btc?: number; eth?: number; usd?: number; }; cost_to_move_down_usd?: number; cost_to_move_up_usd?: number; is_anomaly?: boolean; is_stale?: boolean; last?: number; last_fetch_at?: string; last_traded_at?: string; market?: { has_trading_incentive: boolean; identifier: string; name: string; logo?: string; }; target?: string; target_coin_id?: string; timestamp?: string; token_info_url?: string; trade_url?: string; trust_score?: string; volume?: number; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst ticker = await client.exchanges.tickers.get('binance');\n\nconsole.log(ticker);\n```",
  },
  {
    name: 'get',
    endpoint: '/exchanges/{id}/volume_chart',
    httpMethod: 'get',
    summary: 'Exchange Volume Chart by ID',
    description:
      "This endpoint allows you to **query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange's ID**",
    stainlessPath: '(resource) exchanges.volume_chart > (method) get',
    qualified: 'client.exchanges.volumeChart.get',
    params: ['id: string;', "days: '1' | '7' | '14' | '30' | '90' | '180' | '365';"],
    response: 'number[][]',
    markdown:
      "## get\n\n`client.exchanges.volumeChart.get(id: string, days: '1' | '7' | '14' | '30' | '90' | '180' | '365'): number[][]`\n\n**get** `/exchanges/{id}/volume_chart`\n\nThis endpoint allows you to **query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange's ID**\n\n### Parameters\n\n- `id: string`\n\n- `days: '1' | '7' | '14' | '30' | '90' | '180' | '365'`\n  data up to number of days ago\n\n### Returns\n\n- `number[][]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst volumeCharts = await client.exchanges.volumeChart.get('id', { days: '1' });\n\nconsole.log(volumeCharts);\n```",
  },
  {
    name: 'get_range',
    endpoint: '/exchanges/{id}/volume_chart/range',
    httpMethod: 'get',
    summary: '💼 Exchange Volume Chart within Time Range by ID',
    description:
      "This endpoint allows you to **query the historical volume chart data in BTC by specifying date range in UNIX based on exchange's ID**",
    stainlessPath: '(resource) exchanges.volume_chart > (method) get_range',
    qualified: 'client.exchanges.volumeChart.getRange',
    params: ['id: string;', 'from: number;', 'to: number;'],
    response: 'number[][]',
    markdown:
      "## get_range\n\n`client.exchanges.volumeChart.getRange(id: string, from: number, to: number): number[][]`\n\n**get** `/exchanges/{id}/volume_chart/range`\n\nThis endpoint allows you to **query the historical volume chart data in BTC by specifying date range in UNIX based on exchange's ID**\n\n### Parameters\n\n- `id: string`\n\n- `from: number`\n  starting date in UNIX timestamp \n\n- `to: number`\n  ending date in UNIX timestamp\n\n### Returns\n\n- `number[][]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.exchanges.volumeChart.getRange('id', { from: 0, to: 0 });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/global',
    httpMethod: 'get',
    summary: 'Crypto Global Market Data',
    description:
      'This endpoint allows you **query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc**',
    stainlessPath: '(resource) global > (method) get',
    qualified: 'client.global.get',
    response:
      '{ data?: { active_cryptocurrencies?: number; ended_icos?: number; market_cap_change_percentage_24h_usd?: number; market_cap_percentage?: { btc?: number; eth?: number; }; markets?: number; ongoing_icos?: number; total_market_cap?: { btc?: number; eth?: number; }; total_volume?: { btc?: number; eth?: number; }; upcoming_icos?: number; updated_at?: number; volume_change_percentage_24h_usd?: number; }; }',
    markdown:
      "## get\n\n`client.global.get(): { data?: object; }`\n\n**get** `/global`\n\nThis endpoint allows you **query cryptocurrency global data including active cryptocurrencies, markets, total crypto market cap and etc**\n\n### Returns\n\n- `{ data?: { active_cryptocurrencies?: number; ended_icos?: number; market_cap_change_percentage_24h_usd?: number; market_cap_percentage?: { btc?: number; eth?: number; }; markets?: number; ongoing_icos?: number; total_market_cap?: { btc?: number; eth?: number; }; total_volume?: { btc?: number; eth?: number; }; upcoming_icos?: number; updated_at?: number; volume_change_percentage_24h_usd?: number; }; }`\n\n  - `data?: { active_cryptocurrencies?: number; ended_icos?: number; market_cap_change_percentage_24h_usd?: number; market_cap_percentage?: { btc?: number; eth?: number; }; markets?: number; ongoing_icos?: number; total_market_cap?: { btc?: number; eth?: number; }; total_volume?: { btc?: number; eth?: number; }; upcoming_icos?: number; updated_at?: number; volume_change_percentage_24h_usd?: number; }`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst global = await client.global.get();\n\nconsole.log(global);\n```",
  },
  {
    name: 'get',
    endpoint: '/global/decentralized_finance_defi',
    httpMethod: 'get',
    summary: 'Global DeFi Market Data',
    description:
      'This endpoint allows you **query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume**',
    stainlessPath: '(resource) global.decentralized_finance_defi > (method) get',
    qualified: 'client.global.decentralizedFinanceDefi.get',
    response:
      '{ data?: { defi_dominance?: string; defi_market_cap?: string; defi_to_eth_ratio?: string; eth_market_cap?: string; top_coin_defi_dominance?: number; top_coin_name?: string; trading_volume_24h?: string; }; }',
    markdown:
      "## get\n\n`client.global.decentralizedFinanceDefi.get(): { data?: object; }`\n\n**get** `/global/decentralized_finance_defi`\n\nThis endpoint allows you **query top 100 cryptocurrency global decentralized finance (DeFi) data including DeFi market cap, trading volume**\n\n### Returns\n\n- `{ data?: { defi_dominance?: string; defi_market_cap?: string; defi_to_eth_ratio?: string; eth_market_cap?: string; top_coin_defi_dominance?: number; top_coin_name?: string; trading_volume_24h?: string; }; }`\n\n  - `data?: { defi_dominance?: string; defi_market_cap?: string; defi_to_eth_ratio?: string; eth_market_cap?: string; top_coin_defi_dominance?: number; top_coin_name?: string; trading_volume_24h?: string; }`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst decentralizedFinanceDefi = await client.global.decentralizedFinanceDefi.get();\n\nconsole.log(decentralizedFinanceDefi);\n```",
  },
  {
    name: 'get',
    endpoint: '/global/market_cap_chart',
    httpMethod: 'get',
    summary: '💼 Global Market Cap Chart Data',
    description:
      'This endpoint allows you to **query historical global market cap and volume data by number of days away from now**',
    stainlessPath: '(resource) global.market_cap_chart > (method) get',
    qualified: 'client.global.marketCapChart.get',
    params: ["days: '1' | '7' | '14' | '30' | '90' | '180' | '365' | 'max';", 'vs_currency?: string;'],
    response: '{ market_cap_chart?: { market_cap?: number[][]; volume?: number[][]; }; }',
    markdown:
      "## get\n\n`client.global.marketCapChart.get(days: '1' | '7' | '14' | '30' | '90' | '180' | '365' | 'max', vs_currency?: string): { market_cap_chart?: object; }`\n\n**get** `/global/market_cap_chart`\n\nThis endpoint allows you to **query historical global market cap and volume data by number of days away from now**\n\n### Parameters\n\n- `days: '1' | '7' | '14' | '30' | '90' | '180' | '365' | 'max'`\n  data up to number of days ago \n Valid values: any integer\n\n- `vs_currency?: string`\n  target currency of market cap, default: usd \n *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies)\n\n### Returns\n\n- `{ market_cap_chart?: { market_cap?: number[][]; volume?: number[][]; }; }`\n\n  - `market_cap_chart?: { market_cap?: number[][]; volume?: number[][]; }`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst marketCapChart = await client.global.marketCapChart.get({ days: '1' });\n\nconsole.log(marketCapChart);\n```",
  },
  {
    name: 'get',
    endpoint: '/key',
    httpMethod: 'get',
    summary: '💼 API Usage',
    description:
      "This endpoint allows you to **monitor your account's API usage, including rate limits, monthly total credits, remaining credits, and more**",
    stainlessPath: '(resource) key > (method) get',
    qualified: 'client.key.get',
    response:
      '{ api_key_monthly_call_credit?: number; api_key_rate_limit_request_per_minute?: number; current_remaining_monthly_calls?: number; current_total_monthly_calls?: number; monthly_call_credit?: number; plan?: string; rate_limit_request_per_minute?: number; }',
    markdown:
      "## get\n\n`client.key.get(): { api_key_monthly_call_credit?: number; api_key_rate_limit_request_per_minute?: number; current_remaining_monthly_calls?: number; current_total_monthly_calls?: number; monthly_call_credit?: number; plan?: string; rate_limit_request_per_minute?: number; }`\n\n**get** `/key`\n\nThis endpoint allows you to **monitor your account's API usage, including rate limits, monthly total credits, remaining credits, and more**\n\n### Returns\n\n- `{ api_key_monthly_call_credit?: number; api_key_rate_limit_request_per_minute?: number; current_remaining_monthly_calls?: number; current_total_monthly_calls?: number; monthly_call_credit?: number; plan?: string; rate_limit_request_per_minute?: number; }`\n\n  - `api_key_monthly_call_credit?: number`\n  - `api_key_rate_limit_request_per_minute?: number`\n  - `current_remaining_monthly_calls?: number`\n  - `current_total_monthly_calls?: number`\n  - `monthly_call_credit?: number`\n  - `plan?: string`\n  - `rate_limit_request_per_minute?: number`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst key = await client.key.get();\n\nconsole.log(key);\n```",
  },
  {
    name: 'get_id',
    endpoint: '/nfts/{id}',
    httpMethod: 'get',
    summary: 'NFTs Collection Data by ID',
    description:
      'This endpoint allows you to **query all the NFT data (name, floor price, 24hr volume ...) based on the NFT collection ID**',
    stainlessPath: '(resource) nfts > (method) get_id',
    qualified: 'client.nfts.getID',
    params: ['id: string;'],
    response:
      '{ id?: string; asset_platform_id?: string; ath?: object; ath_change_percentage?: object; ath_date?: object; banner_image?: object; contract_address?: string; description?: string; explorers?: object[]; floor_price?: object; floor_price_14d_percentage_change?: object; floor_price_1y_percentage_change?: object; floor_price_24h_percentage_change?: object; floor_price_30d_percentage_change?: object; floor_price_60d_percentage_change?: object; floor_price_7d_percentage_change?: object; floor_price_in_usd_24h_percentage_change?: number; image?: object; links?: object; market_cap?: object; market_cap_24h_percentage_change?: object; market_cap_rank?: number; name?: string; native_currency?: string; native_currency_symbol?: string; number_of_unique_addresses?: number; number_of_unique_addresses_24h_percentage_change?: number; one_day_average_sale_price?: number; one_day_average_sale_price_24h_percentage_change?: number; one_day_sales?: number; one_day_sales_24h_percentage_change?: number; symbol?: string; total_supply?: number; user_favorites_count?: number; volume_24h?: object; volume_24h_percentage_change?: object; volume_in_usd_24h_percentage_change?: number; }',
    markdown:
      "## get_id\n\n`client.nfts.getID(id: string): { id?: string; asset_platform_id?: string; ath?: object; ath_change_percentage?: object; ath_date?: object; banner_image?: object; contract_address?: string; description?: string; explorers?: object[]; floor_price?: object; floor_price_14d_percentage_change?: object; floor_price_1y_percentage_change?: object; floor_price_24h_percentage_change?: object; floor_price_30d_percentage_change?: object; floor_price_60d_percentage_change?: object; floor_price_7d_percentage_change?: object; floor_price_in_usd_24h_percentage_change?: number; image?: object; links?: object; market_cap?: object; market_cap_24h_percentage_change?: object; market_cap_rank?: number; name?: string; native_currency?: string; native_currency_symbol?: string; number_of_unique_addresses?: number; number_of_unique_addresses_24h_percentage_change?: number; one_day_average_sale_price?: number; one_day_average_sale_price_24h_percentage_change?: number; one_day_sales?: number; one_day_sales_24h_percentage_change?: number; symbol?: string; total_supply?: number; user_favorites_count?: number; volume_24h?: object; volume_24h_percentage_change?: object; volume_in_usd_24h_percentage_change?: number; }`\n\n**get** `/nfts/{id}`\n\nThis endpoint allows you to **query all the NFT data (name, floor price, 24hr volume ...) based on the NFT collection ID**\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ id?: string; asset_platform_id?: string; ath?: { native_currency?: number; usd?: number; }; ath_change_percentage?: { native_currency?: number; usd?: number; }; ath_date?: { native_currency?: string; usd?: string; }; banner_image?: { small?: string; }; contract_address?: string; description?: string; explorers?: { link?: string; name?: string; }[]; floor_price?: { native_currency?: number; usd?: number; }; floor_price_14d_percentage_change?: { native_currency?: number; usd?: number; }; floor_price_1y_percentage_change?: { native_currency?: number; usd?: number; }; floor_price_24h_percentage_change?: { native_currency?: number; usd?: number; }; floor_price_30d_percentage_change?: { native_currency?: number; usd?: number; }; floor_price_60d_percentage_change?: { native_currency?: number; usd?: number; }; floor_price_7d_percentage_change?: { native_currency?: number; usd?: number; }; floor_price_in_usd_24h_percentage_change?: number; image?: { small?: string; small_2x?: string; }; links?: { discord?: string; homepage?: string; twitter?: string; }; market_cap?: { native_currency?: number; usd?: number; }; market_cap_24h_percentage_change?: { native_currency?: number; usd?: number; }; market_cap_rank?: number; name?: string; native_currency?: string; native_currency_symbol?: string; number_of_unique_addresses?: number; number_of_unique_addresses_24h_percentage_change?: number; one_day_average_sale_price?: number; one_day_average_sale_price_24h_percentage_change?: number; one_day_sales?: number; one_day_sales_24h_percentage_change?: number; symbol?: string; total_supply?: number; user_favorites_count?: number; volume_24h?: { native_currency?: number; usd?: number; }; volume_24h_percentage_change?: { native_currency?: number; usd?: number; }; volume_in_usd_24h_percentage_change?: number; }`\n\n  - `id?: string`\n  - `asset_platform_id?: string`\n  - `ath?: { native_currency?: number; usd?: number; }`\n  - `ath_change_percentage?: { native_currency?: number; usd?: number; }`\n  - `ath_date?: { native_currency?: string; usd?: string; }`\n  - `banner_image?: { small?: string; }`\n  - `contract_address?: string`\n  - `description?: string`\n  - `explorers?: { link?: string; name?: string; }[]`\n  - `floor_price?: { native_currency?: number; usd?: number; }`\n  - `floor_price_14d_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `floor_price_1y_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `floor_price_24h_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `floor_price_30d_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `floor_price_60d_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `floor_price_7d_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `floor_price_in_usd_24h_percentage_change?: number`\n  - `image?: { small?: string; small_2x?: string; }`\n  - `links?: { discord?: string; homepage?: string; twitter?: string; }`\n  - `market_cap?: { native_currency?: number; usd?: number; }`\n  - `market_cap_24h_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `market_cap_rank?: number`\n  - `name?: string`\n  - `native_currency?: string`\n  - `native_currency_symbol?: string`\n  - `number_of_unique_addresses?: number`\n  - `number_of_unique_addresses_24h_percentage_change?: number`\n  - `one_day_average_sale_price?: number`\n  - `one_day_average_sale_price_24h_percentage_change?: number`\n  - `one_day_sales?: number`\n  - `one_day_sales_24h_percentage_change?: number`\n  - `symbol?: string`\n  - `total_supply?: number`\n  - `user_favorites_count?: number`\n  - `volume_24h?: { native_currency?: number; usd?: number; }`\n  - `volume_24h_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `volume_in_usd_24h_percentage_change?: number`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.nfts.getID('pudgy-penguins');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_list',
    endpoint: '/nfts/list',
    httpMethod: 'get',
    summary: 'NFTs List (ID Map)',
    description:
      'This endpoint allows you to **query all supported NFTs with ID, contract address, name, asset platform ID and symbol on CoinGecko**',
    stainlessPath: '(resource) nfts > (method) get_list',
    qualified: 'client.nfts.getList',
    params: ['order?: string;', 'page?: number;', 'per_page?: number;'],
    response:
      '{ id?: string; asset_platform_id?: string; contract_address?: string; name?: string; symbol?: string; }',
    markdown:
      "## get_list\n\n`client.nfts.getList(order?: string, page?: number, per_page?: number): { id?: string; asset_platform_id?: string; contract_address?: string; name?: string; symbol?: string; }`\n\n**get** `/nfts/list`\n\nThis endpoint allows you to **query all supported NFTs with ID, contract address, name, asset platform ID and symbol on CoinGecko**\n\n### Parameters\n\n- `order?: string`\n  use this to sort the order of responses\n\n- `page?: number`\n  page through results\n\n- `per_page?: number`\n  total results per page \n Valid values: 1...250\n\n### Returns\n\n- `{ id?: string; asset_platform_id?: string; contract_address?: string; name?: string; symbol?: string; }`\n\n  - `id?: string`\n  - `asset_platform_id?: string`\n  - `contract_address?: string`\n  - `name?: string`\n  - `symbol?: string`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.nfts.getList();\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_markets',
    endpoint: '/nfts/markets',
    httpMethod: 'get',
    summary: '💼 NFTs List with Market Data',
    description:
      'This endpoint allows you to **query all the supported NFT collections with floor price, market cap, volume and market related data on CoinGecko**',
    stainlessPath: '(resource) nfts > (method) get_markets',
    qualified: 'client.nfts.getMarkets',
    params: ['asset_platform_id?: string;', 'order?: string;', 'page?: number;', 'per_page?: number;'],
    response:
      '{ id?: string; asset_platform_id?: string; contract_address?: string; description?: string; floor_price?: { native_currency?: number; usd?: number; }; floor_price_24h_percentage_change?: { native_currency?: number; usd?: number; }; floor_price_in_usd_24h_percentage_change?: number; image?: { small?: string; small_2x?: string; }; market_cap?: { native_currency?: number; usd?: number; }; market_cap_24h_percentage_change?: { native_currency?: number; usd?: number; }; market_cap_rank?: number; name?: string; native_currency?: string; native_currency_symbol?: string; number_of_unique_addresses?: number; number_of_unique_addresses_24h_percentage_change?: number; one_day_average_sale_price?: number; one_day_average_sale_price_24h_percentage_change?: number; one_day_sales?: number; one_day_sales_24h_percentage_change?: number; symbol?: string; total_supply?: number; volume_24h?: { native_currency?: number; usd?: number; }; volume_24h_percentage_change?: { native_currency?: number; usd?: number; }; volume_in_usd_24h_percentage_change?: number; }[]',
    markdown:
      "## get_markets\n\n`client.nfts.getMarkets(asset_platform_id?: string, order?: string, page?: number, per_page?: number): { id?: string; asset_platform_id?: string; contract_address?: string; description?: string; floor_price?: object; floor_price_24h_percentage_change?: object; floor_price_in_usd_24h_percentage_change?: number; image?: object; market_cap?: object; market_cap_24h_percentage_change?: object; market_cap_rank?: number; name?: string; native_currency?: string; native_currency_symbol?: string; number_of_unique_addresses?: number; number_of_unique_addresses_24h_percentage_change?: number; one_day_average_sale_price?: number; one_day_average_sale_price_24h_percentage_change?: number; one_day_sales?: number; one_day_sales_24h_percentage_change?: number; symbol?: string; total_supply?: number; volume_24h?: object; volume_24h_percentage_change?: object; volume_in_usd_24h_percentage_change?: number; }[]`\n\n**get** `/nfts/markets`\n\nThis endpoint allows you to **query all the supported NFT collections with floor price, market cap, volume and market related data on CoinGecko**\n\n### Parameters\n\n- `asset_platform_id?: string`\n  filter result by asset platform (blockchain network) \n *refers to [`/asset_platforms`](/reference/asset-platforms-list) filter=`nft`\n\n- `order?: string`\n  sort results by field \n Default: `market_cap_usd_desc`\n\n- `page?: number`\n  page through results \n Default: `1`\n\n- `per_page?: number`\n  total results per page \n Valid values: any integer between 1 and 250 \n Default: `100`\n\n### Returns\n\n- `{ id?: string; asset_platform_id?: string; contract_address?: string; description?: string; floor_price?: { native_currency?: number; usd?: number; }; floor_price_24h_percentage_change?: { native_currency?: number; usd?: number; }; floor_price_in_usd_24h_percentage_change?: number; image?: { small?: string; small_2x?: string; }; market_cap?: { native_currency?: number; usd?: number; }; market_cap_24h_percentage_change?: { native_currency?: number; usd?: number; }; market_cap_rank?: number; name?: string; native_currency?: string; native_currency_symbol?: string; number_of_unique_addresses?: number; number_of_unique_addresses_24h_percentage_change?: number; one_day_average_sale_price?: number; one_day_average_sale_price_24h_percentage_change?: number; one_day_sales?: number; one_day_sales_24h_percentage_change?: number; symbol?: string; total_supply?: number; volume_24h?: { native_currency?: number; usd?: number; }; volume_24h_percentage_change?: { native_currency?: number; usd?: number; }; volume_in_usd_24h_percentage_change?: number; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.nfts.getMarkets();\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_contract_address',
    endpoint: '/nfts/{asset_platform_id}/contract/{contract_address}',
    httpMethod: 'get',
    summary: 'NFTs Collection Data by Contract Address',
    description:
      'This endpoint allows you to **query all the NFT data (name, floor price, 24hr volume ...) based on the NFT collection contract address and respective asset platform**',
    stainlessPath: '(resource) nfts.contract > (method) get_contract_address',
    qualified: 'client.nfts.contract.getContractAddress',
    params: ['asset_platform_id: string;', 'contract_address: string;'],
    response:
      '{ id?: string; asset_platform_id?: string; ath?: object; ath_change_percentage?: object; ath_date?: object; banner_image?: object; contract_address?: string; description?: string; explorers?: object[]; floor_price?: object; floor_price_14d_percentage_change?: object; floor_price_1y_percentage_change?: object; floor_price_24h_percentage_change?: object; floor_price_30d_percentage_change?: object; floor_price_60d_percentage_change?: object; floor_price_7d_percentage_change?: object; floor_price_in_usd_24h_percentage_change?: number; image?: object; links?: object; market_cap?: object; market_cap_24h_percentage_change?: object; market_cap_rank?: number; name?: string; native_currency?: string; native_currency_symbol?: string; number_of_unique_addresses?: number; number_of_unique_addresses_24h_percentage_change?: number; one_day_average_sale_price?: number; one_day_average_sale_price_24h_percentage_change?: number; one_day_sales?: number; one_day_sales_24h_percentage_change?: number; symbol?: string; total_supply?: number; user_favorites_count?: number; volume_24h?: object; volume_24h_percentage_change?: object; volume_in_usd_24h_percentage_change?: number; }',
    markdown:
      "## get_contract_address\n\n`client.nfts.contract.getContractAddress(asset_platform_id: string, contract_address: string): { id?: string; asset_platform_id?: string; ath?: object; ath_change_percentage?: object; ath_date?: object; banner_image?: object; contract_address?: string; description?: string; explorers?: object[]; floor_price?: object; floor_price_14d_percentage_change?: object; floor_price_1y_percentage_change?: object; floor_price_24h_percentage_change?: object; floor_price_30d_percentage_change?: object; floor_price_60d_percentage_change?: object; floor_price_7d_percentage_change?: object; floor_price_in_usd_24h_percentage_change?: number; image?: object; links?: object; market_cap?: object; market_cap_24h_percentage_change?: object; market_cap_rank?: number; name?: string; native_currency?: string; native_currency_symbol?: string; number_of_unique_addresses?: number; number_of_unique_addresses_24h_percentage_change?: number; one_day_average_sale_price?: number; one_day_average_sale_price_24h_percentage_change?: number; one_day_sales?: number; one_day_sales_24h_percentage_change?: number; symbol?: string; total_supply?: number; user_favorites_count?: number; volume_24h?: object; volume_24h_percentage_change?: object; volume_in_usd_24h_percentage_change?: number; }`\n\n**get** `/nfts/{asset_platform_id}/contract/{contract_address}`\n\nThis endpoint allows you to **query all the NFT data (name, floor price, 24hr volume ...) based on the NFT collection contract address and respective asset platform**\n\n### Parameters\n\n- `asset_platform_id: string`\n\n- `contract_address: string`\n\n### Returns\n\n- `{ id?: string; asset_platform_id?: string; ath?: { native_currency?: number; usd?: number; }; ath_change_percentage?: { native_currency?: number; usd?: number; }; ath_date?: { native_currency?: string; usd?: string; }; banner_image?: { small?: string; }; contract_address?: string; description?: string; explorers?: { link?: string; name?: string; }[]; floor_price?: { native_currency?: number; usd?: number; }; floor_price_14d_percentage_change?: { native_currency?: number; usd?: number; }; floor_price_1y_percentage_change?: { native_currency?: number; usd?: number; }; floor_price_24h_percentage_change?: { native_currency?: number; usd?: number; }; floor_price_30d_percentage_change?: { native_currency?: number; usd?: number; }; floor_price_60d_percentage_change?: { native_currency?: number; usd?: number; }; floor_price_7d_percentage_change?: { native_currency?: number; usd?: number; }; floor_price_in_usd_24h_percentage_change?: number; image?: { small?: string; small_2x?: string; }; links?: { discord?: string; homepage?: string; twitter?: string; }; market_cap?: { native_currency?: number; usd?: number; }; market_cap_24h_percentage_change?: { native_currency?: number; usd?: number; }; market_cap_rank?: number; name?: string; native_currency?: string; native_currency_symbol?: string; number_of_unique_addresses?: number; number_of_unique_addresses_24h_percentage_change?: number; one_day_average_sale_price?: number; one_day_average_sale_price_24h_percentage_change?: number; one_day_sales?: number; one_day_sales_24h_percentage_change?: number; symbol?: string; total_supply?: number; user_favorites_count?: number; volume_24h?: { native_currency?: number; usd?: number; }; volume_24h_percentage_change?: { native_currency?: number; usd?: number; }; volume_in_usd_24h_percentage_change?: number; }`\n\n  - `id?: string`\n  - `asset_platform_id?: string`\n  - `ath?: { native_currency?: number; usd?: number; }`\n  - `ath_change_percentage?: { native_currency?: number; usd?: number; }`\n  - `ath_date?: { native_currency?: string; usd?: string; }`\n  - `banner_image?: { small?: string; }`\n  - `contract_address?: string`\n  - `description?: string`\n  - `explorers?: { link?: string; name?: string; }[]`\n  - `floor_price?: { native_currency?: number; usd?: number; }`\n  - `floor_price_14d_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `floor_price_1y_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `floor_price_24h_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `floor_price_30d_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `floor_price_60d_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `floor_price_7d_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `floor_price_in_usd_24h_percentage_change?: number`\n  - `image?: { small?: string; small_2x?: string; }`\n  - `links?: { discord?: string; homepage?: string; twitter?: string; }`\n  - `market_cap?: { native_currency?: number; usd?: number; }`\n  - `market_cap_24h_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `market_cap_rank?: number`\n  - `name?: string`\n  - `native_currency?: string`\n  - `native_currency_symbol?: string`\n  - `number_of_unique_addresses?: number`\n  - `number_of_unique_addresses_24h_percentage_change?: number`\n  - `one_day_average_sale_price?: number`\n  - `one_day_average_sale_price_24h_percentage_change?: number`\n  - `one_day_sales?: number`\n  - `one_day_sales_24h_percentage_change?: number`\n  - `symbol?: string`\n  - `total_supply?: number`\n  - `user_favorites_count?: number`\n  - `volume_24h?: { native_currency?: number; usd?: number; }`\n  - `volume_24h_percentage_change?: { native_currency?: number; usd?: number; }`\n  - `volume_in_usd_24h_percentage_change?: number`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.nfts.contract.getContractAddress('0xBd3531dA5CF5857e7CfAA92426877b022e612cf8', { asset_platform_id: 'ethereum' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/nfts/{asset_platform_id}/contract/{contract_address}/market_chart',
    httpMethod: 'get',
    summary: '💼 NFTs Collection Historical Chart Data by Contract Address',
    description:
      'This endpoint allows you **query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now based on the provided contract address**',
    stainlessPath: '(resource) nfts.contract.market_chart > (method) get',
    qualified: 'client.nfts.contract.marketChart.get',
    params: ['asset_platform_id: string;', 'contract_address: string;', 'days: string;'],
    response:
      '{ floor_price_native?: number[][]; floor_price_usd?: number[][]; h24_volume_native?: number[][]; h24_volume_usd?: number[][]; market_cap_native?: number[][]; market_cap_usd?: number[][]; }',
    markdown:
      "## get\n\n`client.nfts.contract.marketChart.get(asset_platform_id: string, contract_address: string, days: string): { floor_price_native?: number[][]; floor_price_usd?: number[][]; h24_volume_native?: number[][]; h24_volume_usd?: number[][]; market_cap_native?: number[][]; market_cap_usd?: number[][]; }`\n\n**get** `/nfts/{asset_platform_id}/contract/{contract_address}/market_chart`\n\nThis endpoint allows you **query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now based on the provided contract address**\n\n### Parameters\n\n- `asset_platform_id: string`\n\n- `contract_address: string`\n\n- `days: string`\n  data up to number of days ago \n Valid values: any integer or max\n\n### Returns\n\n- `{ floor_price_native?: number[][]; floor_price_usd?: number[][]; h24_volume_native?: number[][]; h24_volume_usd?: number[][]; market_cap_native?: number[][]; market_cap_usd?: number[][]; }`\n\n  - `floor_price_native?: number[][]`\n  - `floor_price_usd?: number[][]`\n  - `h24_volume_native?: number[][]`\n  - `h24_volume_usd?: number[][]`\n  - `market_cap_native?: number[][]`\n  - `market_cap_usd?: number[][]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst marketChart = await client.nfts.contract.marketChart.get('0xBd3531dA5CF5857e7CfAA92426877b022e612cf8', { asset_platform_id: 'ethereum', days: 'days' });\n\nconsole.log(marketChart);\n```",
  },
  {
    name: 'get',
    endpoint: '/nfts/{id}/market_chart',
    httpMethod: 'get',
    summary: '💼 NFTs Collection Historical Chart Data by ID',
    description:
      'This endpoint allows you **query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now**',
    stainlessPath: '(resource) nfts.market_chart > (method) get',
    qualified: 'client.nfts.marketChart.get',
    params: ['id: string;', 'days: string;'],
    response:
      '{ floor_price_native?: number[][]; floor_price_usd?: number[][]; h24_volume_native?: number[][]; h24_volume_usd?: number[][]; market_cap_native?: number[][]; market_cap_usd?: number[][]; }',
    markdown:
      "## get\n\n`client.nfts.marketChart.get(id: string, days: string): { floor_price_native?: number[][]; floor_price_usd?: number[][]; h24_volume_native?: number[][]; h24_volume_usd?: number[][]; market_cap_native?: number[][]; market_cap_usd?: number[][]; }`\n\n**get** `/nfts/{id}/market_chart`\n\nThis endpoint allows you **query historical market data of a NFT collection, including floor price, market cap, and 24hr volume, by number of days away from now**\n\n### Parameters\n\n- `id: string`\n\n- `days: string`\n  data up to number of days \n Valid values: any integer or max\n\n### Returns\n\n- `{ floor_price_native?: number[][]; floor_price_usd?: number[][]; h24_volume_native?: number[][]; h24_volume_usd?: number[][]; market_cap_native?: number[][]; market_cap_usd?: number[][]; }`\n\n  - `floor_price_native?: number[][]`\n  - `floor_price_usd?: number[][]`\n  - `h24_volume_native?: number[][]`\n  - `h24_volume_usd?: number[][]`\n  - `market_cap_native?: number[][]`\n  - `market_cap_usd?: number[][]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst marketChart = await client.nfts.marketChart.get('pudgy-penguins', { days: 'days' });\n\nconsole.log(marketChart);\n```",
  },
  {
    name: 'get',
    endpoint: '/nfts/{id}/tickers',
    httpMethod: 'get',
    summary: '💼 NFTs Collection Tickers by ID',
    description:
      'This endpoint allows you to **query the latest floor price and 24hr volume of a NFT collection, on each NFT marketplace, e.g. OpenSea and LooksRare**',
    stainlessPath: '(resource) nfts.tickers > (method) get',
    qualified: 'client.nfts.tickers.get',
    params: ['id: string;'],
    response:
      '{ tickers?: { floor_price_in_native_currency?: number; h24_volume_in_native_currency?: number; image?: string; name?: string; native_currency?: string; native_currency_symbol?: string; nft_collection_url?: string; nft_marketplace_id?: string; updated_at?: string; }[]; }',
    markdown:
      "## get\n\n`client.nfts.tickers.get(id: string): { tickers?: object[]; }`\n\n**get** `/nfts/{id}/tickers`\n\nThis endpoint allows you to **query the latest floor price and 24hr volume of a NFT collection, on each NFT marketplace, e.g. OpenSea and LooksRare**\n\n### Parameters\n\n- `id: string`\n\n### Returns\n\n- `{ tickers?: { floor_price_in_native_currency?: number; h24_volume_in_native_currency?: number; image?: string; name?: string; native_currency?: string; native_currency_symbol?: string; nft_collection_url?: string; nft_marketplace_id?: string; updated_at?: string; }[]; }`\n\n  - `tickers?: { floor_price_in_native_currency?: number; h24_volume_in_native_currency?: number; image?: string; name?: string; native_currency?: string; native_currency_symbol?: string; nft_collection_url?: string; nft_marketplace_id?: string; updated_at?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst ticker = await client.nfts.tickers.get('pudgy-penguins');\n\nconsole.log(ticker);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/categories',
    httpMethod: 'get',
    summary: '💼 Categories List',
    description: 'This endpoint allows you to **query all the supported categories on GeckoTerminal**',
    stainlessPath: '(resource) onchain.categories > (method) get',
    qualified: 'client.onchain.categories.get',
    params: ['page?: number;', 'sort?: string;'],
    response:
      '{ data?: { id?: string; attributes?: { description?: string; fdv_usd?: string; h24_tx_count?: number; h24_volume_usd?: string; name?: string; reserve_in_usd?: string; volume_change_percentage?: object; }; type?: string; }[]; }',
    markdown:
      "## get\n\n`client.onchain.categories.get(page?: number, sort?: string): { data?: object[]; }`\n\n**get** `/onchain/categories`\n\nThis endpoint allows you to **query all the supported categories on GeckoTerminal**\n\n### Parameters\n\n- `page?: number`\n  page through results \n Default value: `1`\n\n- `sort?: string`\n  sort the categories by field \n Default value: `h6_volume_percentage_desc`\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { description?: string; fdv_usd?: string; h24_tx_count?: number; h24_volume_usd?: string; name?: string; reserve_in_usd?: string; volume_change_percentage?: object; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { description?: string; fdv_usd?: string; h24_tx_count?: number; h24_volume_usd?: string; name?: string; reserve_in_usd?: string; volume_change_percentage?: { h1?: string; h12?: string; h24?: string; h6?: string; }; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst category = await client.onchain.categories.get();\n\nconsole.log(category);\n```",
  },
  {
    name: 'get_pools',
    endpoint: '/onchain/categories/{category_id}/pools',
    httpMethod: 'get',
    summary: '💼 Pools by Category ID',
    description: 'This endpoint allows you to **query all the pools based on the provided category ID**',
    stainlessPath: '(resource) onchain.categories > (method) get_pools',
    qualified: 'client.onchain.categories.getPools',
    params: ['category_id: string;', 'include?: string;', 'page?: number;', 'sort?: string;'],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; fdv_usd?: string; h24_tx_count?: number; h24_volume_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; }; relationships?: { base_token?: object; dex?: object; network?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }',
    markdown:
      "## get_pools\n\n`client.onchain.categories.getPools(category_id: string, include?: string, page?: number, sort?: string): { data?: object[]; included?: object[]; }`\n\n**get** `/onchain/categories/{category_id}/pools`\n\nThis endpoint allows you to **query all the pools based on the provided category ID**\n\n### Parameters\n\n- `category_id: string`\n\n- `include?: string`\n  attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`, `network`. \n Example: `base_token` or `base_token,dex`\n\n- `page?: number`\n  page through results \n Default value: `1`\n\n- `sort?: string`\n  sort the pools by field \n Default value: `pool_created_at_desc`\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; fdv_usd?: string; h24_tx_count?: number; h24_volume_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; }; relationships?: { base_token?: object; dex?: object; network?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; fdv_usd?: string; h24_tx_count?: number; h24_volume_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; }; relationships?: { base_token?: { data?: { id?: string; type?: string; }; }; dex?: { data?: { id?: string; type?: string; }; }; network?: { data?: { id?: string; type?: string; }; }; quote_token?: { data?: { id?: string; type?: string; }; }; }; type?: string; }[]`\n  - `included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.onchain.categories.getPools('pump-fun');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/networks',
    httpMethod: 'get',
    summary: 'Supported Networks List (ID Map)',
    description: 'This endpoint allows you to **query all the supported networks on GeckoTerminal**',
    stainlessPath: '(resource) onchain.networks > (method) get',
    qualified: 'client.onchain.networks.get',
    params: ['page?: number;'],
    response:
      '{ data?: { id?: string; attributes?: { coingecko_asset_platform_id?: string; name?: string; }; type?: string; }[]; }',
    markdown:
      "## get\n\n`client.onchain.networks.get(page?: number): { data?: object[]; }`\n\n**get** `/onchain/networks`\n\nThis endpoint allows you to **query all the supported networks on GeckoTerminal**\n\n### Parameters\n\n- `page?: number`\n  page through results \n Default value: 1\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { coingecko_asset_platform_id?: string; name?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { coingecko_asset_platform_id?: string; name?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst network = await client.onchain.networks.get();\n\nconsole.log(network);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/networks/new_pools',
    httpMethod: 'get',
    summary: 'New Pools List',
    description:
      'This endpoint allows you to **query all the latest pools across all networks on GeckoTerminal**',
    stainlessPath: '(resource) onchain.networks.new_pools > (method) get',
    qualified: 'client.onchain.networks.newPools.get',
    params: ['include?: string;', 'include_gt_community_data?: boolean;', 'page?: number;'],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }',
    markdown:
      "## get\n\n`client.onchain.networks.newPools.get(include?: string, include_gt_community_data?: boolean, page?: number): { data?: object[]; included?: object[]; }`\n\n**get** `/onchain/networks/new_pools`\n\nThis endpoint allows you to **query all the latest pools across all networks on GeckoTerminal**\n\n### Parameters\n\n- `include?: string`\n  attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`, `network`\n\n- `include_gt_community_data?: boolean`\n  include GeckoTerminal community data (Sentiment votes, Suspicious reports) \n Default value: false\n\n- `page?: number`\n  page through results \n Default value: 1\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: { h1?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h24?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m15?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m30?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m5?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; }; volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; }; relationships?: { base_token?: { data?: { id?: string; type?: string; }; }; dex?: { data?: { id?: string; type?: string; }; }; quote_token?: { data?: { id?: string; type?: string; }; }; }; type?: string; }[]`\n  - `included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst newPool = await client.onchain.networks.newPools.get();\n\nconsole.log(newPool);\n```",
  },
  {
    name: 'get_network',
    endpoint: '/onchain/networks/{network}/new_pools',
    httpMethod: 'get',
    summary: 'New Pools by Network',
    description: 'This endpoint allows you to **query all the latest pools based on provided network**',
    stainlessPath: '(resource) onchain.networks.new_pools > (method) get_network',
    qualified: 'client.onchain.networks.newPools.getNetwork',
    params: [
      'network: string;',
      'include?: string;',
      'include_gt_community_data?: boolean;',
      'page?: number;',
    ],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }',
    markdown:
      "## get_network\n\n`client.onchain.networks.newPools.getNetwork(network: string, include?: string, include_gt_community_data?: boolean, page?: number): { data?: object[]; included?: object[]; }`\n\n**get** `/onchain/networks/{network}/new_pools`\n\nThis endpoint allows you to **query all the latest pools based on provided network**\n\n### Parameters\n\n- `network: string`\n\n- `include?: string`\n  attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`\n\n- `include_gt_community_data?: boolean`\n  include GeckoTerminal community data (Sentiment votes, Suspicious reports) \n Default value: false\n\n- `page?: number`\n  page through results \n Default value: 1\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: { h1?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h24?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m15?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m30?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m5?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; }; volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; }; relationships?: { base_token?: { data?: { id?: string; type?: string; }; }; dex?: { data?: { id?: string; type?: string; }; }; quote_token?: { data?: { id?: string; type?: string; }; }; }; type?: string; }[]`\n  - `included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.onchain.networks.newPools.getNetwork('eth');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/networks/trending_pools',
    httpMethod: 'get',
    summary: 'Trending Pools List',
    description:
      'This endpoint allows you to **query all the trending pools across all networks on GeckoTerminal**',
    stainlessPath: '(resource) onchain.networks.trending_pools > (method) get',
    qualified: 'client.onchain.networks.trendingPools.get',
    params: [
      "duration?: '5m' | '1h' | '6h' | '24h';",
      'include?: string;',
      'include_gt_community_data?: boolean;',
      'page?: number;',
    ],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }',
    markdown:
      "## get\n\n`client.onchain.networks.trendingPools.get(duration?: '5m' | '1h' | '6h' | '24h', include?: string, include_gt_community_data?: boolean, page?: number): { data?: object[]; included?: object[]; }`\n\n**get** `/onchain/networks/trending_pools`\n\nThis endpoint allows you to **query all the trending pools across all networks on GeckoTerminal**\n\n### Parameters\n\n- `duration?: '5m' | '1h' | '6h' | '24h'`\n  duration to sort trending list by \n Default value: 24h\n\n- `include?: string`\n  attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`, `network`. \n Example: `base_token` or `base_token,dex`\n\n- `include_gt_community_data?: boolean`\n  include GeckoTerminal community data (Sentiment votes, Suspicious reports) \n Default value: false\n\n- `page?: number`\n  page through results \n Default value: 1\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: { h1?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h24?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m15?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m30?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m5?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; }; volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; }; relationships?: { base_token?: { data?: { id?: string; type?: string; }; }; dex?: { data?: { id?: string; type?: string; }; }; quote_token?: { data?: { id?: string; type?: string; }; }; }; type?: string; }[]`\n  - `included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst trendingPool = await client.onchain.networks.trendingPools.get();\n\nconsole.log(trendingPool);\n```",
  },
  {
    name: 'get_network',
    endpoint: '/onchain/networks/{network}/trending_pools',
    httpMethod: 'get',
    summary: 'Trending Pools by Network',
    description: 'This endpoint allows you to **query the trending pools based on the provided network**',
    stainlessPath: '(resource) onchain.networks.trending_pools > (method) get_network',
    qualified: 'client.onchain.networks.trendingPools.getNetwork',
    params: [
      'network: string;',
      "duration?: '5m' | '1h' | '6h' | '24h';",
      'include?: string;',
      'include_gt_community_data?: boolean;',
      'page?: number;',
    ],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }',
    markdown:
      "## get_network\n\n`client.onchain.networks.trendingPools.getNetwork(network: string, duration?: '5m' | '1h' | '6h' | '24h', include?: string, include_gt_community_data?: boolean, page?: number): { data?: object[]; included?: object[]; }`\n\n**get** `/onchain/networks/{network}/trending_pools`\n\nThis endpoint allows you to **query the trending pools based on the provided network**\n\n### Parameters\n\n- `network: string`\n\n- `duration?: '5m' | '1h' | '6h' | '24h'`\n  duration to sort trending list by \n Default value: 24h\n\n- `include?: string`\n  attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`\n\n- `include_gt_community_data?: boolean`\n  include GeckoTerminal community data (Sentiment votes, Suspicious reports) \n Default value: false\n\n- `page?: number`\n  page through results \n Default value: 1\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: { h1?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h24?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m15?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m30?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m5?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; }; volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; }; relationships?: { base_token?: { data?: { id?: string; type?: string; }; }; dex?: { data?: { id?: string; type?: string; }; }; quote_token?: { data?: { id?: string; type?: string; }; }; }; type?: string; }[]`\n  - `included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.onchain.networks.trendingPools.getNetwork('eth');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/networks/{network}/dexes',
    httpMethod: 'get',
    summary: 'Supported Dexes List by Network (ID Map)',
    description:
      'This endpoint allows you to **query all the supported decentralized exchanges (DEXs) based on the provided network on GeckoTerminal**',
    stainlessPath: '(resource) onchain.networks.dexes > (method) get',
    qualified: 'client.onchain.networks.dexes.get',
    params: ['network: string;', 'page?: number;'],
    response: '{ data?: { id?: string; attributes?: { name?: string; }; type?: string; }[]; }',
    markdown:
      "## get\n\n`client.onchain.networks.dexes.get(network: string, page?: number): { data?: object[]; }`\n\n**get** `/onchain/networks/{network}/dexes`\n\nThis endpoint allows you to **query all the supported decentralized exchanges (DEXs) based on the provided network on GeckoTerminal**\n\n### Parameters\n\n- `network: string`\n\n- `page?: number`\n  page through results \n Default value: 1\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { name?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { name?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst dex = await client.onchain.networks.dexes.get('eth');\n\nconsole.log(dex);\n```",
  },
  {
    name: 'get_pools',
    endpoint: '/onchain/networks/{network}/dexes/{dex}/pools',
    httpMethod: 'get',
    summary: 'Top Pools by Dex',
    description:
      'This endpoint allows you to **query all the top pools based on the provided network and decentralized exchange (DEX)**',
    stainlessPath: '(resource) onchain.networks.dexes > (method) get_pools',
    qualified: 'client.onchain.networks.dexes.getPools',
    params: [
      'network: string;',
      'dex: string;',
      'include?: string;',
      'include_gt_community_data?: boolean;',
      'page?: number;',
      "sort?: 'h24_tx_count_desc' | 'h24_volume_usd_desc';",
    ],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }',
    markdown:
      "## get_pools\n\n`client.onchain.networks.dexes.getPools(network: string, dex: string, include?: string, include_gt_community_data?: boolean, page?: number, sort?: 'h24_tx_count_desc' | 'h24_volume_usd_desc'): { data?: object[]; included?: object[]; }`\n\n**get** `/onchain/networks/{network}/dexes/{dex}/pools`\n\nThis endpoint allows you to **query all the top pools based on the provided network and decentralized exchange (DEX)**\n\n### Parameters\n\n- `network: string`\n\n- `dex: string`\n\n- `include?: string`\n  attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`\n\n- `include_gt_community_data?: boolean`\n  include GeckoTerminal community data (Sentiment votes, Suspicious reports) \n Default value: false\n\n- `page?: number`\n  page through results \n Default value: 1\n\n- `sort?: 'h24_tx_count_desc' | 'h24_volume_usd_desc'`\n  sort the pools by field \n Default value: h24_tx_count_desc\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: { h1?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h24?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m15?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m30?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m5?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; }; volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; }; relationships?: { base_token?: { data?: { id?: string; type?: string; }; }; dex?: { data?: { id?: string; type?: string; }; }; quote_token?: { data?: { id?: string; type?: string; }; }; }; type?: string; }[]`\n  - `included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.onchain.networks.dexes.getPools('sushiswap', { network: 'eth' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/networks/{network}/pools',
    httpMethod: 'get',
    summary: 'Top Pools by Network',
    description: 'This endpoint allows you to **query all the top pools based on the provided network**',
    stainlessPath: '(resource) onchain.networks.pools > (method) get',
    qualified: 'client.onchain.networks.pools.get',
    params: [
      'network: string;',
      'include?: string;',
      'include_gt_community_data?: boolean;',
      'page?: number;',
      "sort?: 'h24_tx_count_desc' | 'h24_volume_usd_desc';",
    ],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }',
    markdown:
      "## get\n\n`client.onchain.networks.pools.get(network: string, include?: string, include_gt_community_data?: boolean, page?: number, sort?: 'h24_tx_count_desc' | 'h24_volume_usd_desc'): { data?: object[]; included?: object[]; }`\n\n**get** `/onchain/networks/{network}/pools`\n\nThis endpoint allows you to **query all the top pools based on the provided network**\n\n### Parameters\n\n- `network: string`\n\n- `include?: string`\n  attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`\n\n- `include_gt_community_data?: boolean`\n  include GeckoTerminal community data (Sentiment votes, Suspicious reports) \n Default value: false\n\n- `page?: number`\n  page through results \n Default value: 1\n\n- `sort?: 'h24_tx_count_desc' | 'h24_volume_usd_desc'`\n  sort the pools by field \n Default value: h24_tx_count_desc\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: { h1?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h24?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m15?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m30?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m5?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; }; volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; }; relationships?: { base_token?: { data?: { id?: string; type?: string; }; }; dex?: { data?: { id?: string; type?: string; }; }; quote_token?: { data?: { id?: string; type?: string; }; }; }; type?: string; }[]`\n  - `included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst pool = await client.onchain.networks.pools.get('eth');\n\nconsole.log(pool);\n```",
  },
  {
    name: 'get_address',
    endpoint: '/onchain/networks/{network}/pools/{address}',
    httpMethod: 'get',
    summary: 'Specific Pool Data by Pool Address',
    description:
      'This endpoint allows you to **query the specific pool based on the provided network and pool address**',
    stainlessPath: '(resource) onchain.networks.pools > (method) get_address',
    qualified: 'client.onchain.networks.pools.getAddress',
    params: [
      'network: string;',
      'address: string;',
      'include?: string;',
      'include_composition?: boolean;',
      'include_volume_breakdown?: boolean;',
    ],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; base_token_balance?: string; base_token_liquidity_usd?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; buy_volume_usd?: object; fdv_usd?: string; locked_liquidity_percentage?: string; market_cap_usd?: string; name?: string; net_buy_volume_usd?: object; pool_created_at?: string; pool_fee_percentage?: string; pool_name?: string; price_change_percentage?: object; quote_token_balance?: string; quote_token_liquidity_usd?: string; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sell_volume_usd?: object; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }',
    markdown:
      "## get_address\n\n`client.onchain.networks.pools.getAddress(network: string, address: string, include?: string, include_composition?: boolean, include_volume_breakdown?: boolean): { data?: object; included?: object[]; }`\n\n**get** `/onchain/networks/{network}/pools/{address}`\n\nThis endpoint allows you to **query the specific pool based on the provided network and pool address**\n\n### Parameters\n\n- `network: string`\n\n- `address: string`\n\n- `include?: string`\n  attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`\n\n- `include_composition?: boolean`\n  include pool composition, default: false\n\n- `include_volume_breakdown?: boolean`\n  include volume breakdown, default: false\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; base_token_balance?: string; base_token_liquidity_usd?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; buy_volume_usd?: object; fdv_usd?: string; locked_liquidity_percentage?: string; market_cap_usd?: string; name?: string; net_buy_volume_usd?: object; pool_created_at?: string; pool_fee_percentage?: string; pool_name?: string; price_change_percentage?: object; quote_token_balance?: string; quote_token_liquidity_usd?: string; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sell_volume_usd?: object; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; base_token_balance?: string; base_token_liquidity_usd?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; buy_volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; fdv_usd?: string; locked_liquidity_percentage?: string; market_cap_usd?: string; name?: string; net_buy_volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; pool_created_at?: string; pool_fee_percentage?: string; pool_name?: string; price_change_percentage?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; quote_token_balance?: string; quote_token_liquidity_usd?: string; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sell_volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; transactions?: { h1?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h24?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h6?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m15?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m30?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m5?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; }; volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; }; relationships?: { base_token?: { data?: { id?: string; type?: string; }; }; dex?: { data?: { id?: string; type?: string; }; }; quote_token?: { data?: { id?: string; type?: string; }; }; }; type?: string; }`\n  - `included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.onchain.networks.pools.getAddress('0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640', { network: 'eth' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_addresses',
    endpoint: '/onchain/networks/{network}/pools/multi/{addresses}',
    httpMethod: 'get',
    summary: 'Multiple Pools Data by Pool Addresses',
    description:
      'This endpoint allows you to **query multiple pools based on the provided network and pool address**',
    stainlessPath: '(resource) onchain.networks.pools.multi > (method) get_addresses',
    qualified: 'client.onchain.networks.pools.multi.getAddresses',
    params: [
      'network: string;',
      'addresses: string;',
      'include?: string;',
      'include_composition?: boolean;',
      'include_volume_breakdown?: boolean;',
    ],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; base_token_balance?: string; base_token_liquidity_usd?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; buy_volume_usd?: object; fdv_usd?: string; locked_liquidity_percentage?: string; market_cap_usd?: string; name?: string; net_buy_volume_usd?: object; pool_created_at?: string; pool_fee_percentage?: string; pool_name?: string; price_change_percentage?: object; quote_token_balance?: string; quote_token_liquidity_usd?: string; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sell_volume_usd?: object; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }',
    markdown:
      "## get_addresses\n\n`client.onchain.networks.pools.multi.getAddresses(network: string, addresses: string, include?: string, include_composition?: boolean, include_volume_breakdown?: boolean): { data?: object[]; included?: object[]; }`\n\n**get** `/onchain/networks/{network}/pools/multi/{addresses}`\n\nThis endpoint allows you to **query multiple pools based on the provided network and pool address**\n\n### Parameters\n\n- `network: string`\n\n- `addresses: string`\n\n- `include?: string`\n  attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`\n\n- `include_composition?: boolean`\n  include pool composition, default: false\n\n- `include_volume_breakdown?: boolean`\n  include volume breakdown, default: false\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; base_token_balance?: string; base_token_liquidity_usd?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; buy_volume_usd?: object; fdv_usd?: string; locked_liquidity_percentage?: string; market_cap_usd?: string; name?: string; net_buy_volume_usd?: object; pool_created_at?: string; pool_fee_percentage?: string; pool_name?: string; price_change_percentage?: object; quote_token_balance?: string; quote_token_liquidity_usd?: string; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sell_volume_usd?: object; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; base_token_balance?: string; base_token_liquidity_usd?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; buy_volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; fdv_usd?: string; locked_liquidity_percentage?: string; market_cap_usd?: string; name?: string; net_buy_volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; pool_created_at?: string; pool_fee_percentage?: string; pool_name?: string; price_change_percentage?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; quote_token_balance?: string; quote_token_liquidity_usd?: string; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sell_volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; transactions?: { h1?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h24?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h6?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m15?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m30?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m5?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; }; volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; }; relationships?: { base_token?: { data?: { id?: string; type?: string; }; }; dex?: { data?: { id?: string; type?: string; }; }; quote_token?: { data?: { id?: string; type?: string; }; }; }; type?: string; }[]`\n  - `included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.onchain.networks.pools.multi.getAddresses('addresses', { network: 'eth' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/networks/{network}/pools/{pool_address}/info',
    httpMethod: 'get',
    summary: 'Pool Tokens Info by Pool Address',
    description:
      'This endpoint allows you to **query pool metadata (base and quote token details, image, socials, websites, description, contract address, etc.) based on a provided pool contract address on a network**',
    stainlessPath: '(resource) onchain.networks.pools.info > (method) get',
    qualified: 'client.onchain.networks.pools.info.get',
    params: ['network: string;', 'pool_address: string;', "include?: 'pool';"],
    response:
      '{ data?: { data?: { id?: string; attributes?: object; type?: string; }; }[]; included?: { id?: string; attributes?: { base_token_address?: string; community_sus_report?: number; quote_token_address?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; }; type?: string; }[]; }',
    markdown:
      "## get\n\n`client.onchain.networks.pools.info.get(network: string, pool_address: string, include?: 'pool'): { data?: object[]; included?: object[]; }`\n\n**get** `/onchain/networks/{network}/pools/{pool_address}/info`\n\nThis endpoint allows you to **query pool metadata (base and quote token details, image, socials, websites, description, contract address, etc.) based on a provided pool contract address on a network**\n\n### Parameters\n\n- `network: string`\n\n- `pool_address: string`\n\n- `include?: 'pool'`\n  attributes to include\n\n### Returns\n\n- `{ data?: { data?: { id?: string; attributes?: object; type?: string; }; }[]; included?: { id?: string; attributes?: { base_token_address?: string; community_sus_report?: number; quote_token_address?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; }; type?: string; }[]; }`\n\n  - `data?: { data?: { id?: string; attributes?: { address?: string; categories?: string[]; coingecko_coin_id?: string; description?: string; discord_url?: string; farcaster_url?: string; freeze_authority?: string; gt_categories_id?: string[]; gt_score?: number; gt_score_details?: { creation?: number; holders?: number; info?: number; pool?: number; transaction?: number; }; holders?: { count?: number; distribution_percentage?: object; last_updated?: string; }; image?: { large?: string; small?: string; thumb?: string; }; image_url?: string; is_honeypot?: boolean | string; mint_authority?: string; name?: string; symbol?: string; telegram_handle?: string; twitter_handle?: string; websites?: string[]; zora_url?: string; }; type?: string; }; }[]`\n  - `included?: { id?: string; attributes?: { base_token_address?: string; community_sus_report?: number; quote_token_address?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst info = await client.onchain.networks.pools.info.get('0x06da0fd433c1a5d7a4faa01111c044910a184553', { network: 'eth' });\n\nconsole.log(info);\n```",
  },
  {
    name: 'get_timeframe',
    endpoint: '/onchain/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}',
    httpMethod: 'get',
    summary: 'Pool OHLCV chart by Pool Address',
    description:
      'This endpoint allows you to **get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool address on a network**',
    stainlessPath: '(resource) onchain.networks.pools.ohlcv > (method) get_timeframe',
    qualified: 'client.onchain.networks.pools.ohlcv.getTimeframe',
    params: [
      'network: string;',
      'pool_address: string;',
      "timeframe: 'day' | 'hour' | 'minute' | 'second';",
      'token?: string;',
      'aggregate?: string;',
      'before_timestamp?: number;',
      "currency?: 'usd' | 'token';",
      'include_empty_intervals?: boolean;',
      'limit?: number;',
    ],
    response:
      '{ data?: { id?: string; attributes?: { ohlcv_list?: number[][]; }; type?: string; }; meta?: { base?: { address?: string; coingecko_coin_id?: string; name?: string; symbol?: string; }; quote?: { address?: string; coingecko_coin_id?: string; name?: string; symbol?: string; }; }; }',
    markdown:
      "## get_timeframe\n\n`client.onchain.networks.pools.ohlcv.getTimeframe(network: string, pool_address: string, timeframe: 'day' | 'hour' | 'minute' | 'second', token?: string, aggregate?: string, before_timestamp?: number, currency?: 'usd' | 'token', include_empty_intervals?: boolean, limit?: number): { data?: object; meta?: object; }`\n\n**get** `/onchain/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}`\n\nThis endpoint allows you to **get the OHLCV chart (Open, High, Low, Close, Volume) of a pool based on the provided pool address on a network**\n\n### Parameters\n\n- `network: string`\n\n- `pool_address: string`\n\n- `timeframe: 'day' | 'hour' | 'minute' | 'second'`\n\n- `token?: string`\n  return OHLCV for token \n use this to invert the chart \n Available values: 'base', 'quote' or token address \n Default value: 'base'\n\n- `aggregate?: string`\n  time period to aggregate each OHLCV \n Available values (day): `1` \n Available values (hour): `1` , `4` , `12` \n Available values (minute): `1` , `5` , `15` \n Available values (second): `1`, `15`, `30` \n Default value: 1\n\n- `before_timestamp?: number`\n  return OHLCV data before this timestamp (integer seconds since epoch)\n\n- `currency?: 'usd' | 'token'`\n  return OHLCV in USD or quote token \n Default value: usd\n\n- `include_empty_intervals?: boolean`\n  include empty intervals with no trade data, default: false\n\n- `limit?: number`\n  number of OHLCV results to return, maximum 1000 \n Default value: 100\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { ohlcv_list?: number[][]; }; type?: string; }; meta?: { base?: { address?: string; coingecko_coin_id?: string; name?: string; symbol?: string; }; quote?: { address?: string; coingecko_coin_id?: string; name?: string; symbol?: string; }; }; }`\n\n  - `data?: { id?: string; attributes?: { ohlcv_list?: number[][]; }; type?: string; }`\n  - `meta?: { base?: { address?: string; coingecko_coin_id?: string; name?: string; symbol?: string; }; quote?: { address?: string; coingecko_coin_id?: string; name?: string; symbol?: string; }; }`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.onchain.networks.pools.ohlcv.getTimeframe('day', { network: 'eth', pool_address: '0x06da0fd433c1a5d7a4faa01111c044910a184553' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/networks/{network}/pools/{pool_address}/trades',
    httpMethod: 'get',
    summary: 'Past 24 Hour Trades by Pool Address',
    description:
      'This endpoint allows you to **query the last 300 trades in the past 24 hours based on the provided pool address**',
    stainlessPath: '(resource) onchain.networks.pools.trades > (method) get',
    qualified: 'client.onchain.networks.pools.trades.get',
    params: [
      'network: string;',
      'pool_address: string;',
      'token?: string;',
      'trade_volume_in_usd_greater_than?: number;',
    ],
    response:
      '{ data?: { id?: string; attributes?: { block_number?: number; block_timestamp?: string; from_token_address?: string; from_token_amount?: string; kind?: string; price_from_in_currency_token?: string; price_from_in_usd?: string; price_to_in_currency_token?: string; price_to_in_usd?: string; to_token_address?: string; to_token_amount?: string; tx_from_address?: string; tx_hash?: string; volume_in_usd?: string; }; type?: string; }[]; }',
    markdown:
      "## get\n\n`client.onchain.networks.pools.trades.get(network: string, pool_address: string, token?: string, trade_volume_in_usd_greater_than?: number): { data?: object[]; }`\n\n**get** `/onchain/networks/{network}/pools/{pool_address}/trades`\n\nThis endpoint allows you to **query the last 300 trades in the past 24 hours based on the provided pool address**\n\n### Parameters\n\n- `network: string`\n\n- `pool_address: string`\n\n- `token?: string`\n  return trades for token \n use this to invert the chart \n Available values: 'base', 'quote' or token address \n Default value: 'base'\n\n- `trade_volume_in_usd_greater_than?: number`\n  filter trades by trade volume in USD greater than this value \n Default value: 0\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { block_number?: number; block_timestamp?: string; from_token_address?: string; from_token_amount?: string; kind?: string; price_from_in_currency_token?: string; price_from_in_usd?: string; price_to_in_currency_token?: string; price_to_in_usd?: string; to_token_address?: string; to_token_amount?: string; tx_from_address?: string; tx_hash?: string; volume_in_usd?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { block_number?: number; block_timestamp?: string; from_token_address?: string; from_token_amount?: string; kind?: string; price_from_in_currency_token?: string; price_from_in_usd?: string; price_to_in_currency_token?: string; price_to_in_usd?: string; to_token_address?: string; to_token_amount?: string; tx_from_address?: string; tx_hash?: string; volume_in_usd?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst trade = await client.onchain.networks.pools.trades.get('0x06da0fd433c1a5d7a4faa01111c044910a184553', { network: 'eth' });\n\nconsole.log(trade);\n```",
  },
  {
    name: 'get_address',
    endpoint: '/onchain/networks/{network}/tokens/{address}',
    httpMethod: 'get',
    summary: 'Token Data by Token Address',
    description:
      'This endpoint allows you to **query specific token data based on the provided token contract address on a network**',
    stainlessPath: '(resource) onchain.networks.tokens > (method) get_address',
    qualified: 'client.onchain.networks.tokens.getAddress',
    params: [
      'network: string;',
      'address: string;',
      "include?: 'top_pools';",
      'include_composition?: boolean;',
      'include_inactive_source?: boolean;',
    ],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; fdv_usd?: string; image_url?: string; last_trade_timestamp?: number; market_cap_usd?: string; name?: string; normalized_total_supply?: string; price_usd?: string; symbol?: string; total_reserve_in_usd?: string; total_supply?: string; volume_usd?: object; }; relationships?: { top_pools?: object; }; type?: string; }; included?: { id?: string; attributes?: { address?: string; base_token_balance?: string; base_token_liquidity_usd?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_balance?: string; quote_token_liquidity_usd?: string; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; token_price_usd?: string; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; }',
    markdown:
      "## get_address\n\n`client.onchain.networks.tokens.getAddress(network: string, address: string, include?: 'top_pools', include_composition?: boolean, include_inactive_source?: boolean): { data?: object; included?: object[]; }`\n\n**get** `/onchain/networks/{network}/tokens/{address}`\n\nThis endpoint allows you to **query specific token data based on the provided token contract address on a network**\n\n### Parameters\n\n- `network: string`\n\n- `address: string`\n\n- `include?: 'top_pools'`\n  attributes to include\n\n- `include_composition?: boolean`\n  include pool composition, default: false\n\n- `include_inactive_source?: boolean`\n  include token data from inactive pools using the most recent swap, default: false\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; fdv_usd?: string; image_url?: string; last_trade_timestamp?: number; market_cap_usd?: string; name?: string; normalized_total_supply?: string; price_usd?: string; symbol?: string; total_reserve_in_usd?: string; total_supply?: string; volume_usd?: object; }; relationships?: { top_pools?: object; }; type?: string; }; included?: { id?: string; attributes?: { address?: string; base_token_balance?: string; base_token_liquidity_usd?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_balance?: string; quote_token_liquidity_usd?: string; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; token_price_usd?: string; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; fdv_usd?: string; image_url?: string; last_trade_timestamp?: number; market_cap_usd?: string; name?: string; normalized_total_supply?: string; price_usd?: string; symbol?: string; total_reserve_in_usd?: string; total_supply?: string; volume_usd?: { h24?: string; }; }; relationships?: { top_pools?: { data?: { id?: string; type?: string; }[]; }; }; type?: string; }`\n  - `included?: { id?: string; attributes?: { address?: string; base_token_balance?: string; base_token_liquidity_usd?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; quote_token_balance?: string; quote_token_liquidity_usd?: string; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; token_price_usd?: string; transactions?: { h1?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h24?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h6?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m15?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m30?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m5?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; }; volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; }; relationships?: { base_token?: { data?: { id?: string; type?: string; }; }; dex?: { data?: { id?: string; type?: string; }; }; quote_token?: { data?: { id?: string; type?: string; }; }; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.onchain.networks.tokens.getAddress('0xdac17f958d2ee523a2206206994597c13d831ec7', { network: 'eth' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_addresses',
    endpoint: '/onchain/networks/{network}/tokens/multi/{addresses}',
    httpMethod: 'get',
    summary: 'Tokens Data by Token Addresses',
    description:
      'This endpoint allows you to **query multiple tokens data based on the provided token contract addresses on a network**',
    stainlessPath: '(resource) onchain.networks.tokens.multi > (method) get_addresses',
    qualified: 'client.onchain.networks.tokens.multi.getAddresses',
    params: [
      'network: string;',
      'addresses: string;',
      "include?: 'top_pools';",
      'include_composition?: boolean;',
      'include_inactive_source?: boolean;',
    ],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; fdv_usd?: string; image_url?: string; last_trade_timestamp?: number; launchpad_details?: object; market_cap_usd?: string; name?: string; normalized_total_supply?: string; price_usd?: string; symbol?: string; total_reserve_in_usd?: string; total_supply?: string; volume_usd?: object; }; relationships?: { top_pools?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; base_token_balance?: string; base_token_liquidity_usd?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_balance?: string; quote_token_liquidity_usd?: string; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; }',
    markdown:
      "## get_addresses\n\n`client.onchain.networks.tokens.multi.getAddresses(network: string, addresses: string, include?: 'top_pools', include_composition?: boolean, include_inactive_source?: boolean): { data?: object[]; included?: object[]; }`\n\n**get** `/onchain/networks/{network}/tokens/multi/{addresses}`\n\nThis endpoint allows you to **query multiple tokens data based on the provided token contract addresses on a network**\n\n### Parameters\n\n- `network: string`\n\n- `addresses: string`\n\n- `include?: 'top_pools'`\n  attributes to include\n\n- `include_composition?: boolean`\n  include pool composition, default: false\n\n- `include_inactive_source?: boolean`\n  include tokens from inactive pools using the most recent swap, default: false\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; fdv_usd?: string; image_url?: string; last_trade_timestamp?: number; launchpad_details?: object; market_cap_usd?: string; name?: string; normalized_total_supply?: string; price_usd?: string; symbol?: string; total_reserve_in_usd?: string; total_supply?: string; volume_usd?: object; }; relationships?: { top_pools?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; base_token_balance?: string; base_token_liquidity_usd?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_balance?: string; quote_token_liquidity_usd?: string; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; fdv_usd?: string; image_url?: string; last_trade_timestamp?: number; launchpad_details?: { completed?: boolean; completed_at?: string; graduation_percentage?: number; migrated_destination_pool_address?: string; }; market_cap_usd?: string; name?: string; normalized_total_supply?: string; price_usd?: string; symbol?: string; total_reserve_in_usd?: string; total_supply?: string; volume_usd?: { h24?: string; }; }; relationships?: { top_pools?: { data?: { id?: string; type?: string; }[]; }; }; type?: string; }[]`\n  - `included?: { id?: string; attributes?: { address?: string; base_token_balance?: string; base_token_liquidity_usd?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; quote_token_balance?: string; quote_token_liquidity_usd?: string; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; transactions?: { h1?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h24?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h6?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m15?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m30?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m5?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; }; volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; }; relationships?: { base_token?: { data?: { id?: string; type?: string; }; }; dex?: { data?: { id?: string; type?: string; }; }; quote_token?: { data?: { id?: string; type?: string; }; }; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.onchain.networks.tokens.multi.getAddresses('addresses', { network: 'solana' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/networks/{network}/tokens/{address}/info',
    httpMethod: 'get',
    summary: 'Token Info by Token Address',
    description:
      'This endpoint allows you to **query token metadata (name, symbol,  CoinGecko ID, image, socials, websites, description, etc.) based on a provided token contract address on a network**',
    stainlessPath: '(resource) onchain.networks.tokens.info > (method) get',
    qualified: 'client.onchain.networks.tokens.info.get',
    params: ['network: string;', 'address: string;'],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; categories?: string[]; coingecko_coin_id?: string; description?: string; discord_url?: string; farcaster_url?: string; freeze_authority?: string; gt_categories_id?: string[]; gt_score?: number; gt_score_details?: object; holders?: object; image?: object; image_url?: string; is_honeypot?: boolean | string; mint_authority?: string; name?: string; symbol?: string; telegram_handle?: string; twitter_handle?: string; websites?: string[]; zora_url?: string; }; type?: string; }; }',
    markdown:
      "## get\n\n`client.onchain.networks.tokens.info.get(network: string, address: string): { data?: object; }`\n\n**get** `/onchain/networks/{network}/tokens/{address}/info`\n\nThis endpoint allows you to **query token metadata (name, symbol,  CoinGecko ID, image, socials, websites, description, etc.) based on a provided token contract address on a network**\n\n### Parameters\n\n- `network: string`\n\n- `address: string`\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; categories?: string[]; coingecko_coin_id?: string; description?: string; discord_url?: string; farcaster_url?: string; freeze_authority?: string; gt_categories_id?: string[]; gt_score?: number; gt_score_details?: object; holders?: object; image?: object; image_url?: string; is_honeypot?: boolean | string; mint_authority?: string; name?: string; symbol?: string; telegram_handle?: string; twitter_handle?: string; websites?: string[]; zora_url?: string; }; type?: string; }; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; categories?: string[]; coingecko_coin_id?: string; description?: string; discord_url?: string; farcaster_url?: string; freeze_authority?: string; gt_categories_id?: string[]; gt_score?: number; gt_score_details?: { creation?: number; holders?: number; info?: number; pool?: number; transaction?: number; }; holders?: { count?: number; distribution_percentage?: { 11_30?: number; 31_50?: number; rest?: number; top_10?: number; }; last_updated?: string; }; image?: { large?: string; small?: string; thumb?: string; }; image_url?: string; is_honeypot?: boolean | string; mint_authority?: string; name?: string; symbol?: string; telegram_handle?: string; twitter_handle?: string; websites?: string[]; zora_url?: string; }; type?: string; }`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst info = await client.onchain.networks.tokens.info.get('0xdac17f958d2ee523a2206206994597c13d831ec7', { network: 'eth' });\n\nconsole.log(info);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/networks/{network}/tokens/{address}/top_holders',
    httpMethod: 'get',
    summary: '💼 Top Token Holders by Token Address',
    description:
      'This endpoint allows you to **query top token holders based on the provided token contract address on a network**',
    stainlessPath: '(resource) onchain.networks.tokens.top_holders > (method) get',
    qualified: 'client.onchain.networks.tokens.topHolders.get',
    params: ['network: string;', 'address: string;', 'holders?: string;', 'include_pnl_details?: boolean;'],
    response:
      '{ data?: { id?: string; attributes?: { holders?: object[]; last_updated_at?: string; }; type?: string; }; }',
    markdown:
      "## get\n\n`client.onchain.networks.tokens.topHolders.get(network: string, address: string, holders?: string, include_pnl_details?: boolean): { data?: object; }`\n\n**get** `/onchain/networks/{network}/tokens/{address}/top_holders`\n\nThis endpoint allows you to **query top token holders based on the provided token contract address on a network**\n\n### Parameters\n\n- `network: string`\n\n- `address: string`\n\n- `holders?: string`\n  number of top token holders to return, you may use any integer or `max` \n Default value: 10\n\n- `include_pnl_details?: boolean`\n  include PnL details for token holders, default: false\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { holders?: object[]; last_updated_at?: string; }; type?: string; }; }`\n\n  - `data?: { id?: string; attributes?: { holders?: { address?: string; amount?: string; average_buy_price_usd?: string; explorer_url?: string; label?: string; percentage?: string; rank?: number; realized_pnl_percentage?: string; realized_pnl_usd?: string; total_buy_count?: number; total_sell_count?: number; unrealized_pnl_percentage?: string; unrealized_pnl_usd?: string; value?: string; }[]; last_updated_at?: string; }; type?: string; }`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst topHolder = await client.onchain.networks.tokens.topHolders.get('0x6921b130d297cc43754afba22e5eac0fbf8db75b', { network: 'base' });\n\nconsole.log(topHolder);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/networks/{network}/tokens/{token_address}/holders_chart',
    httpMethod: 'get',
    summary: '💼 Historical Token Holders Chart by Token Address',
    description:
      'This endpoint allows you to **get the historical token holders chart based on the provided token contract address on a network**',
    stainlessPath: '(resource) onchain.networks.tokens.holders_chart > (method) get',
    qualified: 'client.onchain.networks.tokens.holdersChart.get',
    params: ['network: string;', 'token_address: string;', "days?: '7' | '30' | 'max';"],
    response:
      '{ data?: { id?: string; attributes?: { token_holders_list?: string[][]; }; type?: string; }; meta?: { token?: { address?: string; coingecko_coin_id?: string; name?: string; symbol?: string; }; }; }',
    markdown:
      "## get\n\n`client.onchain.networks.tokens.holdersChart.get(network: string, token_address: string, days?: '7' | '30' | 'max'): { data?: object; meta?: object; }`\n\n**get** `/onchain/networks/{network}/tokens/{token_address}/holders_chart`\n\nThis endpoint allows you to **get the historical token holders chart based on the provided token contract address on a network**\n\n### Parameters\n\n- `network: string`\n\n- `token_address: string`\n\n- `days?: '7' | '30' | 'max'`\n  number of days to return the historical token holders chart \n Default value: 7\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { token_holders_list?: string[][]; }; type?: string; }; meta?: { token?: { address?: string; coingecko_coin_id?: string; name?: string; symbol?: string; }; }; }`\n\n  - `data?: { id?: string; attributes?: { token_holders_list?: string[][]; }; type?: string; }`\n  - `meta?: { token?: { address?: string; coingecko_coin_id?: string; name?: string; symbol?: string; }; }`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst holdersChart = await client.onchain.networks.tokens.holdersChart.get('0xdac17f958d2ee523a2206206994597c13d831ec7', { network: 'eth' });\n\nconsole.log(holdersChart);\n```",
  },
  {
    name: 'get_timeframe',
    endpoint: '/onchain/networks/{network}/tokens/{token_address}/ohlcv/{timeframe}',
    httpMethod: 'get',
    summary: '💼 Token OHLCV chart by Token Address',
    description:
      'This endpoint allows you to **get the OHLCV chart (Open, High, Low, Close, Volume) of a token based on the provided token address on a network**',
    stainlessPath: '(resource) onchain.networks.tokens.ohlcv > (method) get_timeframe',
    qualified: 'client.onchain.networks.tokens.ohlcv.getTimeframe',
    params: [
      'network: string;',
      'token_address: string;',
      "timeframe: 'day' | 'hour' | 'minute' | 'second';",
      'aggregate?: string;',
      'before_timestamp?: number;',
      "currency?: 'usd' | 'token';",
      'include_empty_intervals?: boolean;',
      'include_inactive_source?: boolean;',
      'limit?: number;',
    ],
    response:
      '{ data?: { id?: string; attributes?: { ohlcv_list?: number[][]; }; type?: string; }; meta?: { base?: { address?: string; coingecko_coin_id?: string; name?: string; symbol?: string; }; quote?: { address?: string; coingecko_coin_id?: string; name?: string; symbol?: string; }; }; }',
    markdown:
      "## get_timeframe\n\n`client.onchain.networks.tokens.ohlcv.getTimeframe(network: string, token_address: string, timeframe: 'day' | 'hour' | 'minute' | 'second', aggregate?: string, before_timestamp?: number, currency?: 'usd' | 'token', include_empty_intervals?: boolean, include_inactive_source?: boolean, limit?: number): { data?: object; meta?: object; }`\n\n**get** `/onchain/networks/{network}/tokens/{token_address}/ohlcv/{timeframe}`\n\nThis endpoint allows you to **get the OHLCV chart (Open, High, Low, Close, Volume) of a token based on the provided token address on a network**\n\n### Parameters\n\n- `network: string`\n\n- `token_address: string`\n\n- `timeframe: 'day' | 'hour' | 'minute' | 'second'`\n\n- `aggregate?: string`\n  time period to aggregate each OHLCV \n Available values (day): `1` \n Available values (hour): `1` , `4` , `12` \n Available values (minute): `1` , `5` , `15` \n Available values (second): `1`, `15`, `30` \n Default value: 1\n\n- `before_timestamp?: number`\n  return OHLCV data before this timestamp (integer seconds since epoch)\n\n- `currency?: 'usd' | 'token'`\n  return OHLCV in USD or quote token \n Default value: usd\n\n- `include_empty_intervals?: boolean`\n  include empty intervals with no trade data, default: false\n\n- `include_inactive_source?: boolean`\n  include token data from inactive pools using the most recent swap, default: false\n\n- `limit?: number`\n  number of OHLCV results to return, maximum 1000 \n Default value: 100\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { ohlcv_list?: number[][]; }; type?: string; }; meta?: { base?: { address?: string; coingecko_coin_id?: string; name?: string; symbol?: string; }; quote?: { address?: string; coingecko_coin_id?: string; name?: string; symbol?: string; }; }; }`\n\n  - `data?: { id?: string; attributes?: { ohlcv_list?: number[][]; }; type?: string; }`\n  - `meta?: { base?: { address?: string; coingecko_coin_id?: string; name?: string; symbol?: string; }; quote?: { address?: string; coingecko_coin_id?: string; name?: string; symbol?: string; }; }`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.onchain.networks.tokens.ohlcv.getTimeframe('day', { network: 'solana', token_address: 'So11111111111111111111111111111111111111112' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/networks/{network}/tokens/{token_address}/pools',
    httpMethod: 'get',
    summary: 'Top Pools by Token Address',
    description:
      'This endpoint allows you to **query top pools based on the provided token contract address on a network**',
    stainlessPath: '(resource) onchain.networks.tokens.pools > (method) get',
    qualified: 'client.onchain.networks.tokens.pools.get',
    params: [
      'network: string;',
      'token_address: string;',
      'include?: string;',
      'include_gt_community_data?: boolean;',
      'include_inactive_source?: boolean;',
      'page?: number;',
      "sort?: 'h24_volume_usd_liquidity_desc' | 'h24_tx_count_desc' | 'h24_volume_usd_desc';",
    ],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; last_trade_timestamp?: number; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }',
    markdown:
      "## get\n\n`client.onchain.networks.tokens.pools.get(network: string, token_address: string, include?: string, include_gt_community_data?: boolean, include_inactive_source?: boolean, page?: number, sort?: 'h24_volume_usd_liquidity_desc' | 'h24_tx_count_desc' | 'h24_volume_usd_desc'): { data?: object[]; included?: object[]; }`\n\n**get** `/onchain/networks/{network}/tokens/{token_address}/pools`\n\nThis endpoint allows you to **query top pools based on the provided token contract address on a network**\n\n### Parameters\n\n- `network: string`\n\n- `token_address: string`\n\n- `include?: string`\n  attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`\n\n- `include_gt_community_data?: boolean`\n  include GeckoTerminal community data (Sentiment votes, Suspicious reports) \n Default value: false\n\n- `include_inactive_source?: boolean`\n  include tokens from inactive pools using the most recent swap, default: false\n\n- `page?: number`\n  page through results \n Default value: 1\n\n- `sort?: 'h24_volume_usd_liquidity_desc' | 'h24_tx_count_desc' | 'h24_volume_usd_desc'`\n  sort the pools by field \n Default value: h24_volume_usd_liquidity_desc\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; last_trade_timestamp?: number; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; community_sus_report?: number; fdv_usd?: string; last_trade_timestamp?: number; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; sentiment_vote_negative_percentage?: number; sentiment_vote_positive_percentage?: number; transactions?: { h1?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h24?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m15?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m30?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m5?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; }; volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; }; relationships?: { base_token?: { data?: { id?: string; type?: string; }; }; dex?: { data?: { id?: string; type?: string; }; }; quote_token?: { data?: { id?: string; type?: string; }; }; }; type?: string; }[]`\n  - `included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst pool = await client.onchain.networks.tokens.pools.get('0xdac17f958d2ee523a2206206994597c13d831ec7', { network: 'eth' });\n\nconsole.log(pool);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/networks/{network}/tokens/{token_address}/trades',
    httpMethod: 'get',
    summary: '💼 Past 24 Hour Trades by Token Address',
    description:
      'This endpoint allows you to **query the last 300 trades in the past 24 hours, across all pools, based on the provided token contract address on a network**',
    stainlessPath: '(resource) onchain.networks.tokens.trades > (method) get',
    qualified: 'client.onchain.networks.tokens.trades.get',
    params: ['network: string;', 'token_address: string;', 'trade_volume_in_usd_greater_than?: number;'],
    response:
      '{ data?: { id?: string; attributes?: { block_number?: number; block_timestamp?: string; from_token_address?: string; from_token_amount?: string; kind?: string; pool_address?: string; pool_dex?: string; price_from_in_currency_token?: string; price_from_in_usd?: string; price_to_in_currency_token?: string; price_to_in_usd?: string; to_token_address?: string; to_token_amount?: string; tx_from_address?: string; tx_hash?: string; volume_in_usd?: string; }; type?: string; }[]; }',
    markdown:
      "## get\n\n`client.onchain.networks.tokens.trades.get(network: string, token_address: string, trade_volume_in_usd_greater_than?: number): { data?: object[]; }`\n\n**get** `/onchain/networks/{network}/tokens/{token_address}/trades`\n\nThis endpoint allows you to **query the last 300 trades in the past 24 hours, across all pools, based on the provided token contract address on a network**\n\n### Parameters\n\n- `network: string`\n\n- `token_address: string`\n\n- `trade_volume_in_usd_greater_than?: number`\n  filter trades by trade volume in USD greater than this value \n Default value: 0\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { block_number?: number; block_timestamp?: string; from_token_address?: string; from_token_amount?: string; kind?: string; pool_address?: string; pool_dex?: string; price_from_in_currency_token?: string; price_from_in_usd?: string; price_to_in_currency_token?: string; price_to_in_usd?: string; to_token_address?: string; to_token_amount?: string; tx_from_address?: string; tx_hash?: string; volume_in_usd?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { block_number?: number; block_timestamp?: string; from_token_address?: string; from_token_amount?: string; kind?: string; pool_address?: string; pool_dex?: string; price_from_in_currency_token?: string; price_from_in_usd?: string; price_to_in_currency_token?: string; price_to_in_usd?: string; to_token_address?: string; to_token_amount?: string; tx_from_address?: string; tx_hash?: string; volume_in_usd?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst trade = await client.onchain.networks.tokens.trades.get('0xdac17f958d2ee523a2206206994597c13d831ec7', { network: 'eth' });\n\nconsole.log(trade);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/networks/{network_id}/tokens/{token_address}/top_traders',
    httpMethod: 'get',
    summary: '💼 Top Token Traders by Token Address',
    description:
      'This endpoint allows you to **query top token traders based on the provided token contract address on a network**',
    stainlessPath: '(resource) onchain.networks.tokens.top_traders > (method) get',
    qualified: 'client.onchain.networks.tokens.topTraders.get',
    params: [
      'network_id: string;',
      'token_address: string;',
      'include_address_label?: boolean;',
      "sort?: 'realized_pnl_usd_desc' | 'unrealized_pnl_usd_desc' | 'total_buy_usd_desc' | 'total_sell_usd_desc';",
      'traders?: string;',
    ],
    response: '{ data?: { id?: string; attributes?: { traders?: object[]; }; type?: string; }; }',
    markdown:
      "## get\n\n`client.onchain.networks.tokens.topTraders.get(network_id: string, token_address: string, include_address_label?: boolean, sort?: 'realized_pnl_usd_desc' | 'unrealized_pnl_usd_desc' | 'total_buy_usd_desc' | 'total_sell_usd_desc', traders?: string): { data?: object; }`\n\n**get** `/onchain/networks/{network_id}/tokens/{token_address}/top_traders`\n\nThis endpoint allows you to **query top token traders based on the provided token contract address on a network**\n\n### Parameters\n\n- `network_id: string`\n\n- `token_address: string`\n\n- `include_address_label?: boolean`\n  include address label data, default: false\n\n- `sort?: 'realized_pnl_usd_desc' | 'unrealized_pnl_usd_desc' | 'total_buy_usd_desc' | 'total_sell_usd_desc'`\n  sort the traders by field \n Default value: realized_pnl_usd_desc\n\n- `traders?: string`\n  number of top token traders to return, you may use any integer or `max` \n Default value: 10\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { traders?: object[]; }; type?: string; }; }`\n\n  - `data?: { id?: string; attributes?: { traders?: { address?: string; average_buy_price_usd?: string; average_sell_price_usd?: string; explorer_url?: string; label?: string; name?: string; realized_pnl_usd?: string; token_balance?: string; total_buy_count?: number; total_buy_token_amount?: string; total_buy_usd?: string; total_sell_count?: number; total_sell_token_amount?: string; total_sell_usd?: string; type?: string; unrealized_pnl_usd?: string; }[]; }; type?: string; }`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst topTrader = await client.onchain.networks.tokens.topTraders.get('0x6921b130d297cc43754afba22e5eac0fbf8db75b', { network_id: 'base' });\n\nconsole.log(topTrader);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/pools/megafilter',
    httpMethod: 'get',
    summary: '🔥 Megafilter for Pools',
    description:
      'This endpoint allows you to **query pools based on various filters across all networks on GeckoTerminal**',
    stainlessPath: '(resource) onchain.pools.megafilter > (method) get',
    qualified: 'client.onchain.pools.megafilter.get',
    params: [
      'buy_tax_percentage_max?: number;',
      'buy_tax_percentage_min?: number;',
      "buys_duration?: '5m' | '1h' | '6h' | '24h';",
      'buys_max?: number;',
      'buys_min?: number;',
      'checks?: string;',
      'dexes?: string;',
      'fdv_usd_max?: number;',
      'fdv_usd_min?: number;',
      'h24_volume_usd_max?: number;',
      'h24_volume_usd_min?: number;',
      'include?: string;',
      'include_unknown_honeypot_tokens?: boolean;',
      'networks?: string;',
      'page?: number;',
      'pool_created_hour_max?: number;',
      'pool_created_hour_min?: number;',
      "price_change_percentage_duration?: '5m' | '1h' | '6h' | '24h';",
      'price_change_percentage_max?: number;',
      'price_change_percentage_min?: number;',
      'reserve_in_usd_max?: number;',
      'reserve_in_usd_min?: number;',
      'sell_tax_percentage_max?: number;',
      'sell_tax_percentage_min?: number;',
      "sells_duration?: '5m' | '1h' | '6h' | '24h';",
      'sells_max?: number;',
      'sells_min?: number;',
      'sort?: string;',
      "tx_count_duration?: '5m' | '1h' | '6h' | '24h';",
      'tx_count_max?: number;',
      'tx_count_min?: number;',
    ],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }',
    markdown:
      "## get\n\n`client.onchain.pools.megafilter.get(buy_tax_percentage_max?: number, buy_tax_percentage_min?: number, buys_duration?: '5m' | '1h' | '6h' | '24h', buys_max?: number, buys_min?: number, checks?: string, dexes?: string, fdv_usd_max?: number, fdv_usd_min?: number, h24_volume_usd_max?: number, h24_volume_usd_min?: number, include?: string, include_unknown_honeypot_tokens?: boolean, networks?: string, page?: number, pool_created_hour_max?: number, pool_created_hour_min?: number, price_change_percentage_duration?: '5m' | '1h' | '6h' | '24h', price_change_percentage_max?: number, price_change_percentage_min?: number, reserve_in_usd_max?: number, reserve_in_usd_min?: number, sell_tax_percentage_max?: number, sell_tax_percentage_min?: number, sells_duration?: '5m' | '1h' | '6h' | '24h', sells_max?: number, sells_min?: number, sort?: string, tx_count_duration?: '5m' | '1h' | '6h' | '24h', tx_count_max?: number, tx_count_min?: number): { data?: object[]; included?: object[]; }`\n\n**get** `/onchain/pools/megafilter`\n\nThis endpoint allows you to **query pools based on various filters across all networks on GeckoTerminal**\n\n### Parameters\n\n- `buy_tax_percentage_max?: number`\n  maximum buy tax percentage\n\n- `buy_tax_percentage_min?: number`\n  minimum buy tax percentage\n\n- `buys_duration?: '5m' | '1h' | '6h' | '24h'`\n  duration for buy transactions metric \n Default value: 24h\n\n- `buys_max?: number`\n  maximum number of buy transactions\n\n- `buys_min?: number`\n  minimum number of buy transactions\n\n- `checks?: string`\n  filter options for various checks, comma-separated if more than one \n Available values: `no_honeypot`, `good_gt_score`, `on_coingecko`, `has_social`\n\n- `dexes?: string`\n  filter pools by DEXes, comma-separated if more than one \n DEX ID refers to [/networks/{network}/dexes](/reference/dexes-list)\n\n- `fdv_usd_max?: number`\n  maximum fully diluted value in USD\n\n- `fdv_usd_min?: number`\n  minimum fully diluted value in USD\n\n- `h24_volume_usd_max?: number`\n  maximum 24hr volume in USD\n\n- `h24_volume_usd_min?: number`\n  minimum 24hr volume in USD\n\n- `include?: string`\n  attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`, `network`\n\n- `include_unknown_honeypot_tokens?: boolean`\n  when `checks` includes `no_honeypot`, set to **`true`** to also include 'unknown honeypot' tokens. Default value: `false`\n\n- `networks?: string`\n  filter pools by networks, comma-separated if more than one \n Network ID refers to [/networks](/reference/networks-list)\n\n- `page?: number`\n  page through results \n Default value: 1\n\n- `pool_created_hour_max?: number`\n  maximum pool age in hours\n\n- `pool_created_hour_min?: number`\n  minimum pool age in hours\n\n- `price_change_percentage_duration?: '5m' | '1h' | '6h' | '24h'`\n  duration for price change percentage metric\n\n- `price_change_percentage_max?: number`\n  maximum price change percentage\n\n- `price_change_percentage_min?: number`\n  minimum price change percentage\n\n- `reserve_in_usd_max?: number`\n  maximum reserve in USD\n\n- `reserve_in_usd_min?: number`\n  minimum reserve in USD\n\n- `sell_tax_percentage_max?: number`\n  maximum sell tax percentage\n\n- `sell_tax_percentage_min?: number`\n  minimum sell tax percentage\n\n- `sells_duration?: '5m' | '1h' | '6h' | '24h'`\n  duration for sell transactions metric \n Default value: 24h\n\n- `sells_max?: number`\n  maximum number of sell transactions\n\n- `sells_min?: number`\n  minimum number of sell transactions\n\n- `sort?: string`\n  sort the pools by field \n Default value: h6_trending\n\n- `tx_count_duration?: '5m' | '1h' | '6h' | '24h'`\n  duration for transaction count metric \n Default value: 24h\n\n- `tx_count_max?: number`\n  maximum transaction count\n\n- `tx_count_min?: number`\n  minimum transaction count\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; transactions?: { h1?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h24?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m15?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m30?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m5?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; }; volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; }; relationships?: { base_token?: { data?: { id?: string; type?: string; }; }; dex?: { data?: { id?: string; type?: string; }; }; quote_token?: { data?: { id?: string; type?: string; }; }; }; type?: string; }[]`\n  - `included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst megafilter = await client.onchain.pools.megafilter.get();\n\nconsole.log(megafilter);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/pools/trending_search',
    httpMethod: 'get',
    summary: '💼 Trending Search Pools',
    description:
      'This endpoint allows you to **query all the trending search pools across all networks on GeckoTerminal**',
    stainlessPath: '(resource) onchain.pools.trending_search > (method) get',
    qualified: 'client.onchain.pools.trendingSearch.get',
    params: ['include?: string;', 'pools?: number;'],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; reserve_in_usd?: string; trending_rank?: number; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; network?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }',
    markdown:
      "## get\n\n`client.onchain.pools.trendingSearch.get(include?: string, pools?: number): { data?: object[]; included?: object[]; }`\n\n**get** `/onchain/pools/trending_search`\n\nThis endpoint allows you to **query all the trending search pools across all networks on GeckoTerminal**\n\n### Parameters\n\n- `include?: string`\n  attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`, `network`\n\n- `pools?: number`\n  number of pools to return, maximum 10 \n Default value: 4\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; reserve_in_usd?: string; trending_rank?: number; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; network?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; reserve_in_usd?: string; trending_rank?: number; volume_usd?: { h24?: string; }; }; relationships?: { base_token?: { data?: { id?: string; type?: string; }; }; dex?: { data?: { id?: string; type?: string; }; }; network?: { data?: { id?: string; type?: string; }; }; quote_token?: { data?: { id?: string; type?: string; }; }; }; type?: string; }[]`\n  - `included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst trendingSearch = await client.onchain.pools.trendingSearch.get();\n\nconsole.log(trendingSearch);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/search/pools',
    httpMethod: 'get',
    summary: 'Search Pools',
    description: 'This endpoint allows you to **search for pools on a network**',
    stainlessPath: '(resource) onchain.search.pools > (method) get',
    qualified: 'client.onchain.search.pools.get',
    params: ['include?: string;', 'network?: string;', 'page?: number;', 'query?: string;'],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }',
    markdown:
      "## get\n\n`client.onchain.search.pools.get(include?: string, network?: string, page?: number, query?: string): { data?: object[]; included?: object[]; }`\n\n**get** `/onchain/search/pools`\n\nThis endpoint allows you to **search for pools on a network**\n\n### Parameters\n\n- `include?: string`\n  attributes to include, comma-separated if more than one to include \n Available values: `base_token`, `quote_token`, `dex`\n\n- `network?: string`\n  network ID \n *refers to [/networks](/reference/networks-list)\n\n- `page?: number`\n  page through results \n Default value: 1\n\n- `query?: string`\n  search query\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: object; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; transactions?: object; volume_usd?: object; }; relationships?: { base_token?: object; dex?: object; quote_token?: object; }; type?: string; }[]; included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; base_token_price_native_currency?: string; base_token_price_quote_token?: string; base_token_price_usd?: string; fdv_usd?: string; market_cap_usd?: string; name?: string; pool_created_at?: string; price_change_percentage?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; quote_token_price_base_token?: string; quote_token_price_native_currency?: string; quote_token_price_usd?: string; reserve_in_usd?: string; transactions?: { h1?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; h24?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m15?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m30?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; m5?: { buyers?: number; buys?: number; sellers?: number; sells?: number; }; }; volume_usd?: { h1?: string; h24?: string; h6?: string; m15?: string; m30?: string; m5?: string; }; }; relationships?: { base_token?: { data?: { id?: string; type?: string; }; }; dex?: { data?: { id?: string; type?: string; }; }; quote_token?: { data?: { id?: string; type?: string; }; }; }; type?: string; }[]`\n  - `included?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; decimals?: number; image_url?: string; name?: string; symbol?: string; }; type?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst pool = await client.onchain.search.pools.get();\n\nconsole.log(pool);\n```",
  },
  {
    name: 'get_addresses',
    endpoint: '/onchain/simple/networks/{network}/token_price/{addresses}',
    httpMethod: 'get',
    summary: 'Token Price by Token Addresses',
    description:
      'This endpoint allows you to **get token price based on the provided token contract address on a network**',
    stainlessPath: '(resource) onchain.simple.networks.token_price > (method) get_addresses',
    qualified: 'client.onchain.simple.networks.tokenPrice.getAddresses',
    params: [
      'network: string;',
      'addresses: string;',
      'include_24hr_price_change?: boolean;',
      'include_24hr_vol?: boolean;',
      'include_inactive_source?: boolean;',
      'include_market_cap?: boolean;',
      'include_total_reserve_in_usd?: boolean;',
      'mcap_fdv_fallback?: boolean;',
    ],
    response:
      '{ data?: { id?: string; attributes?: { h24_price_change_percentage?: object; h24_volume_usd?: object; last_trade_timestamp?: object; market_cap_usd?: object; token_prices?: object; total_reserve_in_usd?: object; }; type?: string; }; }',
    markdown:
      "## get_addresses\n\n`client.onchain.simple.networks.tokenPrice.getAddresses(network: string, addresses: string, include_24hr_price_change?: boolean, include_24hr_vol?: boolean, include_inactive_source?: boolean, include_market_cap?: boolean, include_total_reserve_in_usd?: boolean, mcap_fdv_fallback?: boolean): { data?: object; }`\n\n**get** `/onchain/simple/networks/{network}/token_price/{addresses}`\n\nThis endpoint allows you to **get token price based on the provided token contract address on a network**\n\n### Parameters\n\n- `network: string`\n\n- `addresses: string`\n\n- `include_24hr_price_change?: boolean`\n  include 24hr price change, default: false\n\n- `include_24hr_vol?: boolean`\n  include 24hr volume, default: false\n\n- `include_inactive_source?: boolean`\n  include token price data from inactive pools using the most recent swap, default: false\n\n- `include_market_cap?: boolean`\n  include market capitalization, default: false\n\n- `include_total_reserve_in_usd?: boolean`\n  include total reserve in USD, default: false\n\n- `mcap_fdv_fallback?: boolean`\n  return FDV if market cap is not available, default: false\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { h24_price_change_percentage?: object; h24_volume_usd?: object; last_trade_timestamp?: object; market_cap_usd?: object; token_prices?: object; total_reserve_in_usd?: object; }; type?: string; }; }`\n\n  - `data?: { id?: string; attributes?: { h24_price_change_percentage?: object; h24_volume_usd?: object; last_trade_timestamp?: object; market_cap_usd?: object; token_prices?: object; total_reserve_in_usd?: object; }; type?: string; }`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.onchain.simple.networks.tokenPrice.getAddresses('addresses', { network: 'eth' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/onchain/tokens/info_recently_updated',
    httpMethod: 'get',
    summary: 'Most Recently Updated Tokens List',
    description:
      'This endpoint allows you to **query 100 most recently updated tokens info of a specific network or across all networks on GeckoTerminal**',
    stainlessPath: '(resource) onchain.tokens.info_recently_updated > (method) get',
    qualified: 'client.onchain.tokens.infoRecentlyUpdated.get',
    params: ["include?: 'network';", 'network?: string;'],
    response:
      '{ data?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; description?: string; gt_score?: number; image_url?: string; metadata_updated_at?: string; name?: string; symbol?: string; websites?: string[]; }; relationships?: { network?: object; }; type?: string; }; }',
    markdown:
      "## get\n\n`client.onchain.tokens.infoRecentlyUpdated.get(include?: 'network', network?: string): { data?: object; }`\n\n**get** `/onchain/tokens/info_recently_updated`\n\nThis endpoint allows you to **query 100 most recently updated tokens info of a specific network or across all networks on GeckoTerminal**\n\n### Parameters\n\n- `include?: 'network'`\n  Attributes for related resources to include, which will be returned under the top-level 'included' key\n\n- `network?: string`\n  filter tokens by provided network \n *refers to [/networks](/reference/networks-list)\n\n### Returns\n\n- `{ data?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; description?: string; gt_score?: number; image_url?: string; metadata_updated_at?: string; name?: string; symbol?: string; websites?: string[]; }; relationships?: { network?: object; }; type?: string; }; }`\n\n  - `data?: { id?: string; attributes?: { address?: string; coingecko_coin_id?: string; description?: string; gt_score?: number; image_url?: string; metadata_updated_at?: string; name?: string; symbol?: string; websites?: string[]; }; relationships?: { network?: { data?: { id?: string; type?: string; }; }; }; type?: string; }`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst infoRecentlyUpdated = await client.onchain.tokens.infoRecentlyUpdated.get();\n\nconsole.log(infoRecentlyUpdated);\n```",
  },
  {
    name: 'get',
    endpoint: '/ping',
    httpMethod: 'get',
    summary: 'Check API server status',
    description: 'This endpoint allows you to **check the API server status**',
    stainlessPath: '(resource) ping > (method) get',
    qualified: 'client.ping.get',
    response: '{ gecko_says?: string; }',
    markdown:
      "## get\n\n`client.ping.get(): { gecko_says?: string; }`\n\n**get** `/ping`\n\nThis endpoint allows you to **check the API server status**\n\n### Returns\n\n- `{ gecko_says?: string; }`\n\n  - `gecko_says?: string`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst ping = await client.ping.get();\n\nconsole.log(ping);\n```",
  },
  {
    name: 'get_coin_id',
    endpoint: '/{entity}/public_treasury/{coin_id}',
    httpMethod: 'get',
    summary: 'Crypto Treasury Holdings by Coin ID',
    description:
      "This endpoint allows you **query public companies & governments' cryptocurrency holdings** by Coin ID",
    stainlessPath: '(resource) public_treasury > (method) get_coin_id',
    qualified: 'client.publicTreasury.getCoinID',
    params: [
      "entity: 'companies' | 'governments';",
      'coin_id: string;',
      "order?: 'total_holdings_usd_desc' | 'total_holdings_usd_asc';",
      'page?: number;',
      'per_page?: number;',
    ],
    response:
      '{ companies: { country?: string; name?: string; percentage_of_total_supply?: number; symbol?: string; total_current_value_usd?: number; total_entry_value_usd?: number; total_holdings?: number; }[]; market_cap_dominance: number; total_holdings: number; total_value_usd: number; } | { governments: { country?: string; name?: string; percentage_of_total_supply?: number; symbol?: string; total_current_value_usd?: number; total_entry_value_usd?: number; total_holdings?: number; }[]; market_cap_dominance: number; total_holdings: number; total_value_usd: number; }',
    markdown:
      "## get_coin_id\n\n`client.publicTreasury.getCoinID(entity: 'companies' | 'governments', coin_id: string, order?: 'total_holdings_usd_desc' | 'total_holdings_usd_asc', page?: number, per_page?: number): { companies: object[]; market_cap_dominance: number; total_holdings: number; total_value_usd: number; } | { governments: object[]; market_cap_dominance: number; total_holdings: number; total_value_usd: number; }`\n\n**get** `/{entity}/public_treasury/{coin_id}`\n\nThis endpoint allows you **query public companies & governments' cryptocurrency holdings** by Coin ID\n\n### Parameters\n\n- `entity: 'companies' | 'governments'`\n\n- `coin_id: string`\n\n- `order?: 'total_holdings_usd_desc' | 'total_holdings_usd_asc'`\n  Sort order for results\n\n- `page?: number`\n  Page number to return\n\n- `per_page?: number`\n  Number of results to return per page\n\n### Returns\n\n- `{ companies: { country?: string; name?: string; percentage_of_total_supply?: number; symbol?: string; total_current_value_usd?: number; total_entry_value_usd?: number; total_holdings?: number; }[]; market_cap_dominance: number; total_holdings: number; total_value_usd: number; } | { governments: { country?: string; name?: string; percentage_of_total_supply?: number; symbol?: string; total_current_value_usd?: number; total_entry_value_usd?: number; total_holdings?: number; }[]; market_cap_dominance: number; total_holdings: number; total_value_usd: number; }`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.publicTreasury.getCoinID('bitcoin', { entity: 'companies' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_entity_id',
    endpoint: '/public_treasury/{entity_id}',
    httpMethod: 'get',
    summary: 'Crypto Treasury Holdings by Entity ID',
    description:
      "This endpoint allows you **query public companies & governments' cryptocurrency holdings** by Entity ID",
    stainlessPath: '(resource) public_treasury > (method) get_entity_id',
    qualified: 'client.publicTreasury.getEntityID',
    params: ['entity_id: string;', 'holding_amount_change?: string;', 'holding_change_percentage?: string;'],
    response:
      '{ id?: string; country?: string; holdings?: { amount?: number; amount_per_share?: number; average_entry_value_usd?: number; coin_id?: string; current_value_usd?: number; entity_value_usd_percentage?: number; holding_amount_change?: { 14d?: number; 1y?: number; 30d?: number; 7d?: number; 90d?: number; ytd?: number; }; holding_change_percentage?: { 14d?: number; 1y?: number; 30d?: number; 7d?: number; 90d?: number; ytd?: number; }; percentage_of_total_supply?: number; total_entry_value_usd?: number; unrealized_pnl?: number; }[]; m_nav?: number; name?: string; symbol?: string; total_asset_value_per_share_usd?: number; total_treasury_value_usd?: number; twitter_screen_name?: string; type?: string; unrealized_pnl?: number; website_url?: string; }',
    markdown:
      "## get_entity_id\n\n`client.publicTreasury.getEntityID(entity_id: string, holding_amount_change?: string, holding_change_percentage?: string): { id?: string; country?: string; holdings?: object[]; m_nav?: number; name?: string; symbol?: string; total_asset_value_per_share_usd?: number; total_treasury_value_usd?: number; twitter_screen_name?: string; type?: string; unrealized_pnl?: number; website_url?: string; }`\n\n**get** `/public_treasury/{entity_id}`\n\nThis endpoint allows you **query public companies & governments' cryptocurrency holdings** by Entity ID\n\n### Parameters\n\n- `entity_id: string`\n\n- `holding_amount_change?: string`\n  include holding amount change for specified timeframes, comma-separated if querying more than 1 timeframe \n Valid values: 7d, 14d, 30d, 90d, 1y, ytd\n\n- `holding_change_percentage?: string`\n  include holding change percentage for specified timeframes, comma-separated if querying more than 1 timeframe \n Valid values: 7d, 14d, 30d, 90d, 1y, ytd\n\n### Returns\n\n- `{ id?: string; country?: string; holdings?: { amount?: number; amount_per_share?: number; average_entry_value_usd?: number; coin_id?: string; current_value_usd?: number; entity_value_usd_percentage?: number; holding_amount_change?: { 14d?: number; 1y?: number; 30d?: number; 7d?: number; 90d?: number; ytd?: number; }; holding_change_percentage?: { 14d?: number; 1y?: number; 30d?: number; 7d?: number; 90d?: number; ytd?: number; }; percentage_of_total_supply?: number; total_entry_value_usd?: number; unrealized_pnl?: number; }[]; m_nav?: number; name?: string; symbol?: string; total_asset_value_per_share_usd?: number; total_treasury_value_usd?: number; twitter_screen_name?: string; type?: string; unrealized_pnl?: number; website_url?: string; }`\n\n  - `id?: string`\n  - `country?: string`\n  - `holdings?: { amount?: number; amount_per_share?: number; average_entry_value_usd?: number; coin_id?: string; current_value_usd?: number; entity_value_usd_percentage?: number; holding_amount_change?: { 14d?: number; 1y?: number; 30d?: number; 7d?: number; 90d?: number; ytd?: number; }; holding_change_percentage?: { 14d?: number; 1y?: number; 30d?: number; 7d?: number; 90d?: number; ytd?: number; }; percentage_of_total_supply?: number; total_entry_value_usd?: number; unrealized_pnl?: number; }[]`\n  - `m_nav?: number`\n  - `name?: string`\n  - `symbol?: string`\n  - `total_asset_value_per_share_usd?: number`\n  - `total_treasury_value_usd?: number`\n  - `twitter_screen_name?: string`\n  - `type?: string`\n  - `unrealized_pnl?: number`\n  - `website_url?: string`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.publicTreasury.getEntityID('strategy');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_holding_chart',
    endpoint: '/public_treasury/{entity_id}/{coin_id}/holding_chart',
    httpMethod: 'get',
    summary: 'Crypto Treasury Holdings Historical Chart Data by ID',
    description:
      'This endpoint allows you to **query historical cryptocurrency holdings chart of public companies & governments** by Entity ID and Coin ID',
    stainlessPath: '(resource) public_treasury > (method) get_holding_chart',
    qualified: 'client.publicTreasury.getHoldingChart',
    params: ['entity_id: string;', 'coin_id: string;', 'days: string;', 'include_empty_intervals?: boolean;'],
    response: '{ holding_value_in_usd?: number[][]; holdings?: number[][]; }',
    markdown:
      "## get_holding_chart\n\n`client.publicTreasury.getHoldingChart(entity_id: string, coin_id: string, days: string, include_empty_intervals?: boolean): { holding_value_in_usd?: number[][]; holdings?: number[][]; }`\n\n**get** `/public_treasury/{entity_id}/{coin_id}/holding_chart`\n\nThis endpoint allows you to **query historical cryptocurrency holdings chart of public companies & governments** by Entity ID and Coin ID\n\n### Parameters\n\n- `entity_id: string`\n\n- `coin_id: string`\n\n- `days: string`\n  data up to number of days ago \n Valid values: `7, 14, 30, 90, 180, 365, 730, max`\n\n- `include_empty_intervals?: boolean`\n  include empty intervals with no transaction data, default: false\n\n### Returns\n\n- `{ holding_value_in_usd?: number[][]; holdings?: number[][]; }`\n\n  - `holding_value_in_usd?: number[][]`\n  - `holdings?: number[][]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.publicTreasury.getHoldingChart('bitcoin', { entity_id: 'strategy', days: 'days' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_transaction_history',
    endpoint: '/public_treasury/{entity_id}/transaction_history',
    httpMethod: 'get',
    summary: 'Crypto Treasury Transaction History by Entity ID',
    description:
      "This endpoint allows you **query public companies & governments' cryptocurrency transaction history** by Entity ID",
    stainlessPath: '(resource) public_treasury > (method) get_transaction_history',
    qualified: 'client.publicTreasury.getTransactionHistory',
    params: [
      'entity_id: string;',
      'coin_ids?: string;',
      'order?: string;',
      'page?: number;',
      'per_page?: number;',
    ],
    response:
      "{ transactions?: { average_entry_value_usd?: number; coin_id?: string; date?: number; holding_balance?: number; holding_net_change?: number; source_url?: string; transaction_value_usd?: number; type?: 'buy' | 'sell'; }[]; }",
    markdown:
      "## get_transaction_history\n\n`client.publicTreasury.getTransactionHistory(entity_id: string, coin_ids?: string, order?: string, page?: number, per_page?: number): { transactions?: object[]; }`\n\n**get** `/public_treasury/{entity_id}/transaction_history`\n\nThis endpoint allows you **query public companies & governments' cryptocurrency transaction history** by Entity ID\n\n### Parameters\n\n- `entity_id: string`\n\n- `coin_ids?: string`\n  filter transactions by coin IDs, comma-separated if querying more than 1 coin \n *refers to [`/coins/list`](/reference/coins-list).\n\n- `order?: string`\n  use this to sort the order of transactions, default: `date_desc`\n\n- `page?: number`\n  page through results, default: `1`\n\n- `per_page?: number`\n  total results per page, default: `100` \n Valid values: 1...250\n\n### Returns\n\n- `{ transactions?: { average_entry_value_usd?: number; coin_id?: string; date?: number; holding_balance?: number; holding_net_change?: number; source_url?: string; transaction_value_usd?: number; type?: 'buy' | 'sell'; }[]; }`\n\n  - `transactions?: { average_entry_value_usd?: number; coin_id?: string; date?: number; holding_balance?: number; holding_net_change?: number; source_url?: string; transaction_value_usd?: number; type?: 'buy' | 'sell'; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.publicTreasury.getTransactionHistory('strategy');\n\nconsole.log(response);\n```",
  },
  {
    name: 'get',
    endpoint: '/search',
    httpMethod: 'get',
    summary: 'Search Queries',
    description:
      'This endpoint allows you to **search for coins, categories and markets listed on CoinGecko**',
    stainlessPath: '(resource) search > (method) get',
    qualified: 'client.search.get',
    params: ['query: string;'],
    response:
      '{ categories?: { id?: string; name?: string; }[]; coins?: { id?: string; api_symbol?: string; large?: string; market_cap_rank?: number; name?: string; symbol?: string; thumb?: string; }[]; exchanges?: { id?: string; large?: string; market_type?: string; name?: string; thumb?: string; }[]; icos?: string[]; nfts?: { id?: string; name?: string; symbol?: string; thumb?: string; }[]; }',
    markdown:
      "## get\n\n`client.search.get(query: string): { categories?: object[]; coins?: object[]; exchanges?: object[]; icos?: string[]; nfts?: object[]; }`\n\n**get** `/search`\n\nThis endpoint allows you to **search for coins, categories and markets listed on CoinGecko**\n\n### Parameters\n\n- `query: string`\n  search query\n\n### Returns\n\n- `{ categories?: { id?: string; name?: string; }[]; coins?: { id?: string; api_symbol?: string; large?: string; market_cap_rank?: number; name?: string; symbol?: string; thumb?: string; }[]; exchanges?: { id?: string; large?: string; market_type?: string; name?: string; thumb?: string; }[]; icos?: string[]; nfts?: { id?: string; name?: string; symbol?: string; thumb?: string; }[]; }`\n\n  - `categories?: { id?: string; name?: string; }[]`\n  - `coins?: { id?: string; api_symbol?: string; large?: string; market_cap_rank?: number; name?: string; symbol?: string; thumb?: string; }[]`\n  - `exchanges?: { id?: string; large?: string; market_type?: string; name?: string; thumb?: string; }[]`\n  - `icos?: string[]`\n  - `nfts?: { id?: string; name?: string; symbol?: string; thumb?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst search = await client.search.get({ query: 'query' });\n\nconsole.log(search);\n```",
  },
  {
    name: 'get',
    endpoint: '/search/trending',
    httpMethod: 'get',
    summary: 'Trending Search List',
    description:
      'This endpoint allows you **query trending search coins, NFTs and categories on CoinGecko in the last 24 hours**',
    stainlessPath: '(resource) search.trending > (method) get',
    qualified: 'client.search.trending.get',
    params: ['show_max?: string;'],
    response:
      '{ categories?: { id?: number; coins_count?: number; data?: { market_cap?: number; market_cap_btc?: number; market_cap_change_percentage_24h?: object; sparkline?: string; total_volume?: number; total_volume_btc?: number; }; market_cap_1h_change?: number; name?: string; slug?: string; }[]; coins?: { id?: string; coin_id?: number; data?: { content?: string; market_cap?: string; market_cap_btc?: string; price?: number; price_btc?: string; price_change_percentage_24h?: object; sparkline?: string; total_volume?: string; total_volume_btc?: string; }; large?: string; market_cap_rank?: number; name?: string; price_btc?: number; score?: number; slug?: string; small?: string; symbol?: string; thumb?: string; }[]; nfts?: { id?: string; data?: { content?: string; floor_price?: string; floor_price_in_usd_24h_percentage_change?: string; h24_average_sale_price?: string; h24_volume?: string; sparkline?: string; }; floor_price_24h_percentage_change?: number; floor_price_in_native_currency?: number; name?: string; native_currency_symbol?: string; nft_contract_id?: number; symbol?: string; thumb?: string; }[]; }',
    markdown:
      "## get\n\n`client.search.trending.get(show_max?: string): { categories?: object[]; coins?: object[]; nfts?: object[]; }`\n\n**get** `/search/trending`\n\nThis endpoint allows you **query trending search coins, NFTs and categories on CoinGecko in the last 24 hours**\n\n### Parameters\n\n- `show_max?: string`\n  show max number of results available for the given type \n Available values: `coins`, `nfts`, `categories` \n Example: `coins` or `coins,nfts,categories`\n\n### Returns\n\n- `{ categories?: { id?: number; coins_count?: number; data?: { market_cap?: number; market_cap_btc?: number; market_cap_change_percentage_24h?: object; sparkline?: string; total_volume?: number; total_volume_btc?: number; }; market_cap_1h_change?: number; name?: string; slug?: string; }[]; coins?: { id?: string; coin_id?: number; data?: { content?: string; market_cap?: string; market_cap_btc?: string; price?: number; price_btc?: string; price_change_percentage_24h?: object; sparkline?: string; total_volume?: string; total_volume_btc?: string; }; large?: string; market_cap_rank?: number; name?: string; price_btc?: number; score?: number; slug?: string; small?: string; symbol?: string; thumb?: string; }[]; nfts?: { id?: string; data?: { content?: string; floor_price?: string; floor_price_in_usd_24h_percentage_change?: string; h24_average_sale_price?: string; h24_volume?: string; sparkline?: string; }; floor_price_24h_percentage_change?: number; floor_price_in_native_currency?: number; name?: string; native_currency_symbol?: string; nft_contract_id?: number; symbol?: string; thumb?: string; }[]; }`\n\n  - `categories?: { id?: number; coins_count?: number; data?: { market_cap?: number; market_cap_btc?: number; market_cap_change_percentage_24h?: { btc?: number; usd?: number; }; sparkline?: string; total_volume?: number; total_volume_btc?: number; }; market_cap_1h_change?: number; name?: string; slug?: string; }[]`\n  - `coins?: { id?: string; coin_id?: number; data?: { content?: string; market_cap?: string; market_cap_btc?: string; price?: number; price_btc?: string; price_change_percentage_24h?: { btc?: number; usd?: number; }; sparkline?: string; total_volume?: string; total_volume_btc?: string; }; large?: string; market_cap_rank?: number; name?: string; price_btc?: number; score?: number; slug?: string; small?: string; symbol?: string; thumb?: string; }[]`\n  - `nfts?: { id?: string; data?: { content?: string; floor_price?: string; floor_price_in_usd_24h_percentage_change?: string; h24_average_sale_price?: string; h24_volume?: string; sparkline?: string; }; floor_price_24h_percentage_change?: number; floor_price_in_native_currency?: number; name?: string; native_currency_symbol?: string; nft_contract_id?: number; symbol?: string; thumb?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst trending = await client.search.trending.get();\n\nconsole.log(trending);\n```",
  },
  {
    name: 'get',
    endpoint: '/simple/price',
    httpMethod: 'get',
    summary: 'Coin Price by IDs',
    description:
      'This endpoint allows you to **query the prices of one or more coins by using their unique Coin API IDs**',
    stainlessPath: '(resource) simple.price > (method) get',
    qualified: 'client.simple.price.get',
    params: [
      'vs_currencies: string;',
      'ids?: string;',
      'include_24hr_change?: boolean;',
      'include_24hr_vol?: boolean;',
      'include_last_updated_at?: boolean;',
      'include_market_cap?: boolean;',
      "include_tokens?: 'top' | 'all';",
      'names?: string;',
      'precision?: string;',
      'symbols?: string;',
    ],
    response: 'object',
    markdown:
      "## get\n\n`client.simple.price.get(vs_currencies: string, ids?: string, include_24hr_change?: boolean, include_24hr_vol?: boolean, include_last_updated_at?: boolean, include_market_cap?: boolean, include_tokens?: 'top' | 'all', names?: string, precision?: string, symbols?: string): object`\n\n**get** `/simple/price`\n\nThis endpoint allows you to **query the prices of one or more coins by using their unique Coin API IDs**\n\n### Parameters\n\n- `vs_currencies: string`\n  target currency of coins, comma-separated if querying more than 1 currency. \n *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).\n\n- `ids?: string`\n  coins' IDs, comma-separated if querying more than 1 coin. \n *refers to [`/coins/list`](/reference/coins-list).\n\n- `include_24hr_change?: boolean`\n  include 24hr change percentage, default: false\n\n- `include_24hr_vol?: boolean`\n  include 24hr volume, default: false\n\n- `include_last_updated_at?: boolean`\n  include last updated price time in UNIX, default: false\n\n- `include_market_cap?: boolean`\n  include market capitalization, default: false\n\n- `include_tokens?: 'top' | 'all'`\n  for `symbols` lookups, specify `all` to include all matching tokens \n Default `top` returns top-ranked tokens (by market cap or volume)\n\n- `names?: string`\n  coins' names, comma-separated if querying more than 1 coin.\n\n- `precision?: string`\n  decimal place for currency price value\n\n- `symbols?: string`\n  coins' symbols, comma-separated if querying more than 1 coin.\n\n### Returns\n\n- `object`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst price = await client.simple.price.get({ vs_currencies: 'vs_currencies' });\n\nconsole.log(price);\n```",
  },
  {
    name: 'get',
    endpoint: '/simple/supported_vs_currencies',
    httpMethod: 'get',
    summary: 'Supported Currencies List',
    description: 'This endpoint allows you to **query all the supported currencies on CoinGecko**',
    stainlessPath: '(resource) simple.supported_vs_currencies > (method) get',
    qualified: 'client.simple.supportedVsCurrencies.get',
    response: 'string[]',
    markdown:
      "## get\n\n`client.simple.supportedVsCurrencies.get(): string[]`\n\n**get** `/simple/supported_vs_currencies`\n\nThis endpoint allows you to **query all the supported currencies on CoinGecko**\n\n### Returns\n\n- `string[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst supportedVsCurrencies = await client.simple.supportedVsCurrencies.get();\n\nconsole.log(supportedVsCurrencies);\n```",
  },
  {
    name: 'get_id',
    endpoint: '/simple/token_price/{id}',
    httpMethod: 'get',
    summary: 'Coin Price by Token Addresses',
    description:
      'This endpoint allows you to **query one or more token prices using their token contract addresses**',
    stainlessPath: '(resource) simple.token_price > (method) get_id',
    qualified: 'client.simple.tokenPrice.getID',
    params: [
      'id: string;',
      'contract_addresses: string;',
      'vs_currencies: string;',
      'include_24hr_change?: boolean;',
      'include_24hr_vol?: boolean;',
      'include_last_updated_at?: boolean;',
      'include_market_cap?: boolean;',
      'precision?: string;',
    ],
    response:
      '{ last_updated_at?: number; usd?: number; usd_24h_change?: number; usd_24h_vol?: number; usd_market_cap?: number; }',
    markdown:
      "## get_id\n\n`client.simple.tokenPrice.getID(id: string, contract_addresses: string, vs_currencies: string, include_24hr_change?: boolean, include_24hr_vol?: boolean, include_last_updated_at?: boolean, include_market_cap?: boolean, precision?: string): { last_updated_at?: number; usd?: number; usd_24h_change?: number; usd_24h_vol?: number; usd_market_cap?: number; }`\n\n**get** `/simple/token_price/{id}`\n\nThis endpoint allows you to **query one or more token prices using their token contract addresses**\n\n### Parameters\n\n- `id: string`\n\n- `contract_addresses: string`\n  the contract addresses of tokens, comma-separated if querying more than 1 token's contract address\n\n- `vs_currencies: string`\n  target currency of coins, comma-separated if querying more than 1 currency. \n *refers to [`/simple/supported_vs_currencies`](/reference/simple-supported-currencies).\n\n- `include_24hr_change?: boolean`\n  include 24hr change \n default: false\n\n- `include_24hr_vol?: boolean`\n  include 24hr volume, default: false\n\n- `include_last_updated_at?: boolean`\n  include last updated price time in UNIX , default: false\n\n- `include_market_cap?: boolean`\n  include market capitalization, default: false\n\n- `precision?: string`\n  decimal place for currency price value\n\n### Returns\n\n- `{ last_updated_at?: number; usd?: number; usd_24h_change?: number; usd_24h_vol?: number; usd_market_cap?: number; }`\n\n  - `last_updated_at?: number`\n  - `usd?: number`\n  - `usd_24h_change?: number`\n  - `usd_24h_vol?: number`\n  - `usd_market_cap?: number`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.simple.tokenPrice.getID('ethereum', { contract_addresses: 'contract_addresses', vs_currencies: 'vs_currencies' });\n\nconsole.log(response);\n```",
  },
  {
    name: 'get_all_json',
    endpoint: '/token_lists/{asset_platform_id}/all.json',
    httpMethod: 'get',
    summary: 'Token Lists by Asset Platform ID',
    description:
      'This endpoint allows you to **get full list of tokens of a blockchain network (asset platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)**',
    stainlessPath: '(resource) token_lists > (method) get_all_json',
    qualified: 'client.tokenLists.getAllJson',
    params: ['asset_platform_id: string;'],
    response:
      '{ keywords?: string[]; logoURI?: string; name?: string; timestamp?: string; tokens?: { address?: string; chainId?: number; decimals?: number; logoURI?: string; name?: string; symbol?: string; }[]; }',
    markdown:
      "## get_all_json\n\n`client.tokenLists.getAllJson(asset_platform_id: string): { keywords?: string[]; logoURI?: string; name?: string; timestamp?: string; tokens?: object[]; }`\n\n**get** `/token_lists/{asset_platform_id}/all.json`\n\nThis endpoint allows you to **get full list of tokens of a blockchain network (asset platform) that is supported by [Ethereum token list standard](https://tokenlists.org/)**\n\n### Parameters\n\n- `asset_platform_id: string`\n\n### Returns\n\n- `{ keywords?: string[]; logoURI?: string; name?: string; timestamp?: string; tokens?: { address?: string; chainId?: number; decimals?: number; logoURI?: string; name?: string; symbol?: string; }[]; }`\n\n  - `keywords?: string[]`\n  - `logoURI?: string`\n  - `name?: string`\n  - `timestamp?: string`\n  - `tokens?: { address?: string; chainId?: number; decimals?: number; logoURI?: string; name?: string; symbol?: string; }[]`\n\n### Example\n\n```typescript\nimport Coingecko from '@coingecko/coingecko-typescript';\n\nconst client = new Coingecko();\n\nconst response = await client.tokenLists.getAllJson('ethereum');\n\nconsole.log(response);\n```",
  },
];

const INDEX_OPTIONS = {
  fields: [
    'name',
    'endpoint',
    'summary',
    'description',
    'qualified',
    'stainlessPath',
    'content',
    'sectionContext',
  ],
  storeFields: ['kind', '_original'],
  searchOptions: {
    prefix: true,
    fuzzy: 0.2,
    boost: {
      name: 3,
      endpoint: 2,
      summary: 2,
      qualified: 2,
      content: 1,
    } as Record<string, number>,
  },
};

/**
 * Self-contained local search engine backed by MiniSearch.
 * Method data is embedded at SDK build time; prose documents
 * can be loaded from an optional docs directory at runtime.
 */
export class LocalDocsSearch {
  private methodIndex: MiniSearch<MiniSearchDocument>;
  private proseIndex: MiniSearch<MiniSearchDocument>;

  private constructor() {
    this.methodIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
    this.proseIndex = new MiniSearch<MiniSearchDocument>(INDEX_OPTIONS);
  }

  static async create(opts?: { docsDir?: string }): Promise<LocalDocsSearch> {
    const instance = new LocalDocsSearch();
    instance.indexMethods(EMBEDDED_METHODS);
    if (opts?.docsDir) {
      await instance.loadDocsDirectory(opts.docsDir);
    }
    return instance;
  }

  // Note: Language is accepted for interface consistency with remote search, but currently has no
  // effect since this local search only supports TypeScript docs.
  search(props: {
    query: string;
    language?: string;
    detail?: string;
    maxResults?: number;
    maxLength?: number;
  }): SearchResult {
    const { query, detail = 'default', maxResults = 5, maxLength = 100_000 } = props;

    const useMarkdown = detail === 'verbose' || detail === 'high';

    // Search both indices and merge results by score
    const methodHits = this.methodIndex
      .search(query)
      .map((hit) => ({ ...hit, _kind: 'http_method' as const }));
    const proseHits = this.proseIndex.search(query).map((hit) => ({ ...hit, _kind: 'prose' as const }));
    const merged = [...methodHits, ...proseHits].sort((a, b) => b.score - a.score);
    const top = merged.slice(0, maxResults);

    const fullResults: (string | Record<string, unknown>)[] = [];

    for (const hit of top) {
      const original = (hit as Record<string, unknown>)['_original'];
      if (hit._kind === 'http_method') {
        const m = original as MethodEntry;
        if (useMarkdown && m.markdown) {
          fullResults.push(m.markdown);
        } else {
          fullResults.push({
            method: m.qualified,
            summary: m.summary,
            description: m.description,
            endpoint: `${m.httpMethod.toUpperCase()} ${m.endpoint}`,
            ...(m.params ? { params: m.params } : {}),
            ...(m.response ? { response: m.response } : {}),
          });
        }
      } else {
        const c = original as ProseChunk;
        fullResults.push({
          content: c.content,
          ...(c.source ? { source: c.source } : {}),
        });
      }
    }

    let totalLength = 0;
    const results: (string | Record<string, unknown>)[] = [];
    for (const result of fullResults) {
      const len = typeof result === 'string' ? result.length : JSON.stringify(result).length;
      totalLength += len;
      if (totalLength > maxLength) break;
      results.push(result);
    }

    if (results.length < fullResults.length) {
      results.unshift(`Truncated; showing ${results.length} of ${fullResults.length} results.`);
    }

    return { results };
  }

  private indexMethods(methods: MethodEntry[]): void {
    const docs: MiniSearchDocument[] = methods.map((m, i) => ({
      id: `method-${i}`,
      kind: 'http_method' as const,
      name: m.name,
      endpoint: m.endpoint,
      summary: m.summary,
      description: m.description,
      qualified: m.qualified,
      stainlessPath: m.stainlessPath,
      _original: m as unknown as Record<string, unknown>,
    }));
    if (docs.length > 0) {
      this.methodIndex.addAll(docs);
    }
  }

  private async loadDocsDirectory(docsDir: string): Promise<void> {
    let entries;
    try {
      entries = await fs.readdir(docsDir, { withFileTypes: true });
    } catch (err) {
      getLogger().warn({ err, docsDir }, 'Could not read docs directory');
      return;
    }

    const files = entries
      .filter((e) => e.isFile())
      .filter((e) => e.name.endsWith('.md') || e.name.endsWith('.markdown') || e.name.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(docsDir, file.name);
        const content = await fs.readFile(filePath, 'utf-8');

        if (file.name.endsWith('.json')) {
          const texts = extractTexts(JSON.parse(content));
          if (texts.length > 0) {
            this.indexProse(texts.join('\n\n'), file.name);
          }
        } else {
          this.indexProse(content, file.name);
        }
      } catch (err) {
        getLogger().warn({ err, file: file.name }, 'Failed to index docs file');
      }
    }
  }

  private indexProse(markdown: string, source: string): void {
    const chunks = chunkMarkdown(markdown);
    const baseId = this.proseIndex.documentCount;

    const docs: MiniSearchDocument[] = chunks.map((chunk, i) => ({
      id: `prose-${baseId + i}`,
      kind: 'prose' as const,
      content: chunk.content,
      ...(chunk.sectionContext != null ? { sectionContext: chunk.sectionContext } : {}),
      _original: { ...chunk, source } as unknown as Record<string, unknown>,
    }));

    if (docs.length > 0) {
      this.proseIndex.addAll(docs);
    }
  }
}

/** Lightweight markdown chunker — splits on headers, chunks by word count. */
function chunkMarkdown(markdown: string): { content: string; tag: string; sectionContext?: string }[] {
  // Strip YAML frontmatter
  const stripped = markdown.replace(/^---\n[\s\S]*?\n---\n?/, '');
  const lines = stripped.split('\n');

  const chunks: { content: string; tag: string; sectionContext?: string }[] = [];
  const headers: string[] = [];
  let current: string[] = [];

  const flush = () => {
    const text = current.join('\n').trim();
    if (!text) return;
    const sectionContext = headers.length > 0 ? headers.join(' > ') : undefined;
    // Split into ~200-word chunks
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i += 200) {
      const slice = words.slice(i, i + 200).join(' ');
      if (slice) {
        chunks.push({ content: slice, tag: 'p', ...(sectionContext != null ? { sectionContext } : {}) });
      }
    }
    current = [];
  };

  for (const line of lines) {
    const headerMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headerMatch) {
      flush();
      const level = headerMatch[1]!.length;
      const text = headerMatch[2]!.trim();
      while (headers.length >= level) headers.pop();
      headers.push(text);
    } else {
      current.push(line);
    }
  }
  flush();

  return chunks;
}

/** Recursively extracts string values from a JSON structure. */
function extractTexts(data: unknown, depth = 0): string[] {
  if (depth > 10) return [];
  if (typeof data === 'string') return data.trim() ? [data] : [];
  if (Array.isArray(data)) return data.flatMap((item) => extractTexts(item, depth + 1));
  if (typeof data === 'object' && data !== null) {
    return Object.values(data).flatMap((v) => extractTexts(v, depth + 1));
  }
  return [];
}
