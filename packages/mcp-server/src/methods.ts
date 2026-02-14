// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.assetPlatforms.get',
    fullyQualifiedName: 'assetPlatforms.get',
    httpMethod: 'get',
    httpPath: '/asset_platforms',
  },
  {
    clientCallName: 'client.coins.getID',
    fullyQualifiedName: 'coins.getID',
    httpMethod: 'get',
    httpPath: '/coins/{id}',
  },
  {
    clientCallName: 'client.coins.categories.get',
    fullyQualifiedName: 'coins.categories.get',
    httpMethod: 'get',
    httpPath: '/coins/categories',
  },
  {
    clientCallName: 'client.coins.categories.getList',
    fullyQualifiedName: 'coins.categories.getList',
    httpMethod: 'get',
    httpPath: '/coins/categories/list',
  },
  {
    clientCallName: 'client.coins.list.get',
    fullyQualifiedName: 'coins.list.get',
    httpMethod: 'get',
    httpPath: '/coins/list',
  },
  {
    clientCallName: 'client.coins.list.getNew',
    fullyQualifiedName: 'coins.list.getNew',
    httpMethod: 'get',
    httpPath: '/coins/list/new',
  },
  {
    clientCallName: 'client.coins.markets.get',
    fullyQualifiedName: 'coins.markets.get',
    httpMethod: 'get',
    httpPath: '/coins/markets',
  },
  {
    clientCallName: 'client.coins.topGainersLosers.get',
    fullyQualifiedName: 'coins.topGainersLosers.get',
    httpMethod: 'get',
    httpPath: '/coins/top_gainers_losers',
  },
  {
    clientCallName: 'client.coins.circulatingSupplyChart.get',
    fullyQualifiedName: 'coins.circulatingSupplyChart.get',
    httpMethod: 'get',
    httpPath: '/coins/{id}/circulating_supply_chart',
  },
  {
    clientCallName: 'client.coins.circulatingSupplyChart.getRange',
    fullyQualifiedName: 'coins.circulatingSupplyChart.getRange',
    httpMethod: 'get',
    httpPath: '/coins/{id}/circulating_supply_chart/range',
  },
  {
    clientCallName: 'client.coins.contract.get',
    fullyQualifiedName: 'coins.contract.get',
    httpMethod: 'get',
    httpPath: '/coins/{id}/contract/{contract_address}',
  },
  {
    clientCallName: 'client.coins.contract.marketChart.get',
    fullyQualifiedName: 'coins.contract.marketChart.get',
    httpMethod: 'get',
    httpPath: '/coins/{id}/contract/{contract_address}/market_chart',
  },
  {
    clientCallName: 'client.coins.contract.marketChart.getRange',
    fullyQualifiedName: 'coins.contract.marketChart.getRange',
    httpMethod: 'get',
    httpPath: '/coins/{id}/contract/{contract_address}/market_chart/range',
  },
  {
    clientCallName: 'client.coins.history.get',
    fullyQualifiedName: 'coins.history.get',
    httpMethod: 'get',
    httpPath: '/coins/{id}/history',
  },
  {
    clientCallName: 'client.coins.marketChart.get',
    fullyQualifiedName: 'coins.marketChart.get',
    httpMethod: 'get',
    httpPath: '/coins/{id}/market_chart',
  },
  {
    clientCallName: 'client.coins.marketChart.getRange',
    fullyQualifiedName: 'coins.marketChart.getRange',
    httpMethod: 'get',
    httpPath: '/coins/{id}/market_chart/range',
  },
  {
    clientCallName: 'client.coins.ohlc.get',
    fullyQualifiedName: 'coins.ohlc.get',
    httpMethod: 'get',
    httpPath: '/coins/{id}/ohlc',
  },
  {
    clientCallName: 'client.coins.ohlc.getRange',
    fullyQualifiedName: 'coins.ohlc.getRange',
    httpMethod: 'get',
    httpPath: '/coins/{id}/ohlc/range',
  },
  {
    clientCallName: 'client.coins.tickers.get',
    fullyQualifiedName: 'coins.tickers.get',
    httpMethod: 'get',
    httpPath: '/coins/{id}/tickers',
  },
  {
    clientCallName: 'client.coins.totalSupplyChart.get',
    fullyQualifiedName: 'coins.totalSupplyChart.get',
    httpMethod: 'get',
    httpPath: '/coins/{id}/total_supply_chart',
  },
  {
    clientCallName: 'client.coins.totalSupplyChart.getRange',
    fullyQualifiedName: 'coins.totalSupplyChart.getRange',
    httpMethod: 'get',
    httpPath: '/coins/{id}/total_supply_chart/range',
  },
  {
    clientCallName: 'client.derivatives.get',
    fullyQualifiedName: 'derivatives.get',
    httpMethod: 'get',
    httpPath: '/derivatives',
  },
  {
    clientCallName: 'client.derivatives.exchanges.get',
    fullyQualifiedName: 'derivatives.exchanges.get',
    httpMethod: 'get',
    httpPath: '/derivatives/exchanges',
  },
  {
    clientCallName: 'client.derivatives.exchanges.getID',
    fullyQualifiedName: 'derivatives.exchanges.getID',
    httpMethod: 'get',
    httpPath: '/derivatives/exchanges/{id}',
  },
  {
    clientCallName: 'client.derivatives.exchanges.getList',
    fullyQualifiedName: 'derivatives.exchanges.getList',
    httpMethod: 'get',
    httpPath: '/derivatives/exchanges/list',
  },
  {
    clientCallName: 'client.entities.getList',
    fullyQualifiedName: 'entities.getList',
    httpMethod: 'get',
    httpPath: '/entities/list',
  },
  {
    clientCallName: 'client.exchangeRates.get',
    fullyQualifiedName: 'exchangeRates.get',
    httpMethod: 'get',
    httpPath: '/exchange_rates',
  },
  {
    clientCallName: 'client.exchanges.get',
    fullyQualifiedName: 'exchanges.get',
    httpMethod: 'get',
    httpPath: '/exchanges',
  },
  {
    clientCallName: 'client.exchanges.getID',
    fullyQualifiedName: 'exchanges.getID',
    httpMethod: 'get',
    httpPath: '/exchanges/{id}',
  },
  {
    clientCallName: 'client.exchanges.getList',
    fullyQualifiedName: 'exchanges.getList',
    httpMethod: 'get',
    httpPath: '/exchanges/list',
  },
  {
    clientCallName: 'client.exchanges.tickers.get',
    fullyQualifiedName: 'exchanges.tickers.get',
    httpMethod: 'get',
    httpPath: '/exchanges/{id}/tickers',
  },
  {
    clientCallName: 'client.exchanges.volumeChart.get',
    fullyQualifiedName: 'exchanges.volumeChart.get',
    httpMethod: 'get',
    httpPath: '/exchanges/{id}/volume_chart',
  },
  {
    clientCallName: 'client.exchanges.volumeChart.getRange',
    fullyQualifiedName: 'exchanges.volumeChart.getRange',
    httpMethod: 'get',
    httpPath: '/exchanges/{id}/volume_chart/range',
  },
  {
    clientCallName: 'client.global.get',
    fullyQualifiedName: 'global.get',
    httpMethod: 'get',
    httpPath: '/global',
  },
  {
    clientCallName: 'client.global.decentralizedFinanceDefi.get',
    fullyQualifiedName: 'global.decentralizedFinanceDefi.get',
    httpMethod: 'get',
    httpPath: '/global/decentralized_finance_defi',
  },
  {
    clientCallName: 'client.global.marketCapChart.get',
    fullyQualifiedName: 'global.marketCapChart.get',
    httpMethod: 'get',
    httpPath: '/global/market_cap_chart',
  },
  {
    clientCallName: 'client.key.get',
    fullyQualifiedName: 'key.get',
    httpMethod: 'get',
    httpPath: '/key',
  },
  {
    clientCallName: 'client.nfts.getID',
    fullyQualifiedName: 'nfts.getID',
    httpMethod: 'get',
    httpPath: '/nfts/{id}',
  },
  {
    clientCallName: 'client.nfts.getList',
    fullyQualifiedName: 'nfts.getList',
    httpMethod: 'get',
    httpPath: '/nfts/list',
  },
  {
    clientCallName: 'client.nfts.getMarkets',
    fullyQualifiedName: 'nfts.getMarkets',
    httpMethod: 'get',
    httpPath: '/nfts/markets',
  },
  {
    clientCallName: 'client.nfts.contract.getContractAddress',
    fullyQualifiedName: 'nfts.contract.getContractAddress',
    httpMethod: 'get',
    httpPath: '/nfts/{asset_platform_id}/contract/{contract_address}',
  },
  {
    clientCallName: 'client.nfts.contract.marketChart.get',
    fullyQualifiedName: 'nfts.contract.marketChart.get',
    httpMethod: 'get',
    httpPath: '/nfts/{asset_platform_id}/contract/{contract_address}/market_chart',
  },
  {
    clientCallName: 'client.nfts.marketChart.get',
    fullyQualifiedName: 'nfts.marketChart.get',
    httpMethod: 'get',
    httpPath: '/nfts/{id}/market_chart',
  },
  {
    clientCallName: 'client.nfts.tickers.get',
    fullyQualifiedName: 'nfts.tickers.get',
    httpMethod: 'get',
    httpPath: '/nfts/{id}/tickers',
  },
  {
    clientCallName: 'client.onchain.categories.get',
    fullyQualifiedName: 'onchain.categories.get',
    httpMethod: 'get',
    httpPath: '/onchain/categories',
  },
  {
    clientCallName: 'client.onchain.categories.getPools',
    fullyQualifiedName: 'onchain.categories.getPools',
    httpMethod: 'get',
    httpPath: '/onchain/categories/{category_id}/pools',
  },
  {
    clientCallName: 'client.onchain.networks.get',
    fullyQualifiedName: 'onchain.networks.get',
    httpMethod: 'get',
    httpPath: '/onchain/networks',
  },
  {
    clientCallName: 'client.onchain.networks.newPools.get',
    fullyQualifiedName: 'onchain.networks.newPools.get',
    httpMethod: 'get',
    httpPath: '/onchain/networks/new_pools',
  },
  {
    clientCallName: 'client.onchain.networks.newPools.getNetwork',
    fullyQualifiedName: 'onchain.networks.newPools.getNetwork',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/new_pools',
  },
  {
    clientCallName: 'client.onchain.networks.trendingPools.get',
    fullyQualifiedName: 'onchain.networks.trendingPools.get',
    httpMethod: 'get',
    httpPath: '/onchain/networks/trending_pools',
  },
  {
    clientCallName: 'client.onchain.networks.trendingPools.getNetwork',
    fullyQualifiedName: 'onchain.networks.trendingPools.getNetwork',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/trending_pools',
  },
  {
    clientCallName: 'client.onchain.networks.dexes.get',
    fullyQualifiedName: 'onchain.networks.dexes.get',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/dexes',
  },
  {
    clientCallName: 'client.onchain.networks.dexes.getPools',
    fullyQualifiedName: 'onchain.networks.dexes.getPools',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/dexes/{dex}/pools',
  },
  {
    clientCallName: 'client.onchain.networks.pools.get',
    fullyQualifiedName: 'onchain.networks.pools.get',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/pools',
  },
  {
    clientCallName: 'client.onchain.networks.pools.getAddress',
    fullyQualifiedName: 'onchain.networks.pools.getAddress',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/pools/{address}',
  },
  {
    clientCallName: 'client.onchain.networks.pools.multi.getAddresses',
    fullyQualifiedName: 'onchain.networks.pools.multi.getAddresses',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/pools/multi/{addresses}',
  },
  {
    clientCallName: 'client.onchain.networks.pools.info.get',
    fullyQualifiedName: 'onchain.networks.pools.info.get',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/pools/{pool_address}/info',
  },
  {
    clientCallName: 'client.onchain.networks.pools.ohlcv.getTimeframe',
    fullyQualifiedName: 'onchain.networks.pools.ohlcv.getTimeframe',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}',
  },
  {
    clientCallName: 'client.onchain.networks.pools.trades.get',
    fullyQualifiedName: 'onchain.networks.pools.trades.get',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/pools/{pool_address}/trades',
  },
  {
    clientCallName: 'client.onchain.networks.tokens.getAddress',
    fullyQualifiedName: 'onchain.networks.tokens.getAddress',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/tokens/{address}',
  },
  {
    clientCallName: 'client.onchain.networks.tokens.multi.getAddresses',
    fullyQualifiedName: 'onchain.networks.tokens.multi.getAddresses',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/tokens/multi/{addresses}',
  },
  {
    clientCallName: 'client.onchain.networks.tokens.info.get',
    fullyQualifiedName: 'onchain.networks.tokens.info.get',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/tokens/{address}/info',
  },
  {
    clientCallName: 'client.onchain.networks.tokens.topHolders.get',
    fullyQualifiedName: 'onchain.networks.tokens.topHolders.get',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/tokens/{address}/top_holders',
  },
  {
    clientCallName: 'client.onchain.networks.tokens.holdersChart.get',
    fullyQualifiedName: 'onchain.networks.tokens.holdersChart.get',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/tokens/{token_address}/holders_chart',
  },
  {
    clientCallName: 'client.onchain.networks.tokens.ohlcv.getTimeframe',
    fullyQualifiedName: 'onchain.networks.tokens.ohlcv.getTimeframe',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/tokens/{token_address}/ohlcv/{timeframe}',
  },
  {
    clientCallName: 'client.onchain.networks.tokens.pools.get',
    fullyQualifiedName: 'onchain.networks.tokens.pools.get',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/tokens/{token_address}/pools',
  },
  {
    clientCallName: 'client.onchain.networks.tokens.trades.get',
    fullyQualifiedName: 'onchain.networks.tokens.trades.get',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network}/tokens/{token_address}/trades',
  },
  {
    clientCallName: 'client.onchain.networks.tokens.topTraders.get',
    fullyQualifiedName: 'onchain.networks.tokens.topTraders.get',
    httpMethod: 'get',
    httpPath: '/onchain/networks/{network_id}/tokens/{token_address}/top_traders',
  },
  {
    clientCallName: 'client.onchain.pools.megafilter.get',
    fullyQualifiedName: 'onchain.pools.megafilter.get',
    httpMethod: 'get',
    httpPath: '/onchain/pools/megafilter',
  },
  {
    clientCallName: 'client.onchain.pools.trendingSearch.get',
    fullyQualifiedName: 'onchain.pools.trendingSearch.get',
    httpMethod: 'get',
    httpPath: '/onchain/pools/trending_search',
  },
  {
    clientCallName: 'client.onchain.search.pools.get',
    fullyQualifiedName: 'onchain.search.pools.get',
    httpMethod: 'get',
    httpPath: '/onchain/search/pools',
  },
  {
    clientCallName: 'client.onchain.simple.networks.tokenPrice.getAddresses',
    fullyQualifiedName: 'onchain.simple.networks.tokenPrice.getAddresses',
    httpMethod: 'get',
    httpPath: '/onchain/simple/networks/{network}/token_price/{addresses}',
  },
  {
    clientCallName: 'client.onchain.tokens.infoRecentlyUpdated.get',
    fullyQualifiedName: 'onchain.tokens.infoRecentlyUpdated.get',
    httpMethod: 'get',
    httpPath: '/onchain/tokens/info_recently_updated',
  },
  {
    clientCallName: 'client.ping.get',
    fullyQualifiedName: 'ping.get',
    httpMethod: 'get',
    httpPath: '/ping',
  },
  {
    clientCallName: 'client.publicTreasury.getCoinID',
    fullyQualifiedName: 'publicTreasury.getCoinID',
    httpMethod: 'get',
    httpPath: '/{entity}/public_treasury/{coin_id}',
  },
  {
    clientCallName: 'client.publicTreasury.getEntityID',
    fullyQualifiedName: 'publicTreasury.getEntityID',
    httpMethod: 'get',
    httpPath: '/public_treasury/{entity_id}',
  },
  {
    clientCallName: 'client.publicTreasury.getHoldingChart',
    fullyQualifiedName: 'publicTreasury.getHoldingChart',
    httpMethod: 'get',
    httpPath: '/public_treasury/{entity_id}/{coin_id}/holding_chart',
  },
  {
    clientCallName: 'client.publicTreasury.getTransactionHistory',
    fullyQualifiedName: 'publicTreasury.getTransactionHistory',
    httpMethod: 'get',
    httpPath: '/public_treasury/{entity_id}/transaction_history',
  },
  {
    clientCallName: 'client.search.get',
    fullyQualifiedName: 'search.get',
    httpMethod: 'get',
    httpPath: '/search',
  },
  {
    clientCallName: 'client.search.trending.get',
    fullyQualifiedName: 'search.trending.get',
    httpMethod: 'get',
    httpPath: '/search/trending',
  },
  {
    clientCallName: 'client.simple.price.get',
    fullyQualifiedName: 'simple.price.get',
    httpMethod: 'get',
    httpPath: '/simple/price',
  },
  {
    clientCallName: 'client.simple.supportedVsCurrencies.get',
    fullyQualifiedName: 'simple.supportedVsCurrencies.get',
    httpMethod: 'get',
    httpPath: '/simple/supported_vs_currencies',
  },
  {
    clientCallName: 'client.simple.tokenPrice.getID',
    fullyQualifiedName: 'simple.tokenPrice.getID',
    httpMethod: 'get',
    httpPath: '/simple/token_price/{id}',
  },
  {
    clientCallName: 'client.tokenLists.getAllJson',
    fullyQualifiedName: 'tokenLists.getAllJson',
    httpMethod: 'get',
    httpPath: '/token_lists/{asset_platform_id}/all.json',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
