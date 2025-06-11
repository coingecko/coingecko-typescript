// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import get_asset_platforms from './asset-platforms/get-asset-platforms';
import get_id_coins from './coins/get-id-coins';
import get_list_coins_categories from './coins/categories/get-list-coins-categories';
import get_coins_list from './coins/list/get-coins-list';
import get_new_coins_list from './coins/list/get-new-coins-list';
import get_coins_markets from './coins/markets/get-coins-markets';
import get_coins_top_gainers_losers from './coins/top-gainers-losers/get-coins-top-gainers-losers';
import get_coins_contract from './coins/contract/get-coins-contract';
import get_range_contract_coins_market_chart from './coins/contract/market-chart/get-range-contract-coins-market-chart';
import get_coins_history from './coins/history/get-coins-history';
import get_range_coins_market_chart from './coins/market-chart/get-range-coins-market-chart';
import get_range_coins_ohlc from './coins/ohlc/get-range-coins-ohlc';
import get_global from './global/get-global';
import get_id_nfts from './nfts/get-id-nfts';
import get_list_nfts from './nfts/get-list-nfts';
import get_nfts_market_chart from './nfts/market-chart/get-nfts-market-chart';
import get_onchain_categories from './onchain/categories/get-onchain-categories';
import get_pools_onchain_categories from './onchain/categories/get-pools-onchain-categories';
import get_onchain_networks from './onchain/networks/get-onchain-networks';
import get_networks_onchain_new_pools from './onchain/networks/new-pools/get-networks-onchain-new-pools';
import get_network_networks_onchain_new_pools from './onchain/networks/new-pools/get-network-networks-onchain-new-pools';
import get_networks_onchain_trending_pools from './onchain/networks/trending-pools/get-networks-onchain-trending-pools';
import get_network_networks_onchain_trending_pools from './onchain/networks/trending-pools/get-network-networks-onchain-trending-pools';
import get_networks_onchain_dexes from './onchain/networks/dexes/get-networks-onchain-dexes';
import get_pools_networks_onchain_dexes from './onchain/networks/dexes/get-pools-networks-onchain-dexes';
import get_networks_onchain_pools from './onchain/networks/pools/get-networks-onchain-pools';
import get_address_networks_onchain_pools from './onchain/networks/pools/get-address-networks-onchain-pools';
import get_pools_networks_onchain_info from './onchain/networks/pools/info/get-pools-networks-onchain-info';
import get_timeframe_pools_networks_onchain_ohlcv from './onchain/networks/pools/ohlcv/get-timeframe-pools-networks-onchain-ohlcv';
import get_pools_networks_onchain_trades from './onchain/networks/pools/trades/get-pools-networks-onchain-trades';
import get_address_networks_onchain_tokens from './onchain/networks/tokens/get-address-networks-onchain-tokens';
import get_tokens_networks_onchain_info from './onchain/networks/tokens/info/get-tokens-networks-onchain-info';
import get_tokens_networks_onchain_top_holders from './onchain/networks/tokens/top-holders/get-tokens-networks-onchain-top-holders';
import get_tokens_networks_onchain_holders_chart from './onchain/networks/tokens/holders-chart/get-tokens-networks-onchain-holders-chart';
import get_timeframe_tokens_networks_onchain_ohlcv from './onchain/networks/tokens/ohlcv/get-timeframe-tokens-networks-onchain-ohlcv';
import get_tokens_networks_onchain_pools from './onchain/networks/tokens/pools/get-tokens-networks-onchain-pools';
import get_tokens_networks_onchain_trades from './onchain/networks/tokens/trades/get-tokens-networks-onchain-trades';
import get_pools_onchain_megafilter from './onchain/pools/megafilter/get-pools-onchain-megafilter';
import get_pools_onchain_trending_search from './onchain/pools/trending-search/get-pools-onchain-trending-search';
import get_search_onchain_pools from './onchain/search/pools/get-search-onchain-pools';
import get_addresses_networks_simple_onchain_token_price from './onchain/simple/networks/token-price/get-addresses-networks-simple-onchain-token-price';
import get_search from './search/get-search';
import get_search_trending from './search/trending/get-search-trending';
import get_simple_price from './simple/price/get-simple-price';
import get_simple_supported_vs_currencies from './simple/supported-vs-currencies/get-simple-supported-vs-currencies';
import get_id_simple_token_price from './simple/token-price/get-id-simple-token-price';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(get_asset_platforms);
addEndpoint(get_id_coins);
addEndpoint(get_list_coins_categories);
addEndpoint(get_coins_list);
addEndpoint(get_new_coins_list);
addEndpoint(get_coins_markets);
addEndpoint(get_coins_top_gainers_losers);
addEndpoint(get_coins_contract);
addEndpoint(get_range_contract_coins_market_chart);
addEndpoint(get_coins_history);
addEndpoint(get_range_coins_market_chart);
addEndpoint(get_range_coins_ohlc);
addEndpoint(get_global);
addEndpoint(get_id_nfts);
addEndpoint(get_list_nfts);
addEndpoint(get_nfts_market_chart);
addEndpoint(get_onchain_categories);
addEndpoint(get_pools_onchain_categories);
addEndpoint(get_onchain_networks);
addEndpoint(get_networks_onchain_new_pools);
addEndpoint(get_network_networks_onchain_new_pools);
addEndpoint(get_networks_onchain_trending_pools);
addEndpoint(get_network_networks_onchain_trending_pools);
addEndpoint(get_networks_onchain_dexes);
addEndpoint(get_pools_networks_onchain_dexes);
addEndpoint(get_networks_onchain_pools);
addEndpoint(get_address_networks_onchain_pools);
addEndpoint(get_pools_networks_onchain_info);
addEndpoint(get_timeframe_pools_networks_onchain_ohlcv);
addEndpoint(get_pools_networks_onchain_trades);
addEndpoint(get_address_networks_onchain_tokens);
addEndpoint(get_tokens_networks_onchain_info);
addEndpoint(get_tokens_networks_onchain_top_holders);
addEndpoint(get_tokens_networks_onchain_holders_chart);
addEndpoint(get_timeframe_tokens_networks_onchain_ohlcv);
addEndpoint(get_tokens_networks_onchain_pools);
addEndpoint(get_tokens_networks_onchain_trades);
addEndpoint(get_pools_onchain_megafilter);
addEndpoint(get_pools_onchain_trending_search);
addEndpoint(get_search_onchain_pools);
addEndpoint(get_addresses_networks_simple_onchain_token_price);
addEndpoint(get_search);
addEndpoint(get_search_trending);
addEndpoint(get_simple_price);
addEndpoint(get_simple_supported_vs_currencies);
addEndpoint(get_id_simple_token_price);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
