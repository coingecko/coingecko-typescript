# Ping

Types:

- <code><a href="./src/resources/ping.ts">PingCheckStatusResponse</a></code>

Methods:

- <code title="get /ping">client.ping.<a href="./src/resources/ping.ts">checkStatus</a>() -> PingCheckStatusResponse</code>

# Key

Types:

- <code><a href="./src/resources/key.ts">KeyRetrieveResponse</a></code>

Methods:

- <code title="get /key">client.key.<a href="./src/resources/key.ts">retrieve</a>() -> KeyRetrieveResponse</code>

# Simple

Types:

- <code><a href="./src/resources/simple.ts">SimpleGetPriceResponse</a></code>
- <code><a href="./src/resources/simple.ts">SimpleGetTokenPriceResponse</a></code>
- <code><a href="./src/resources/simple.ts">SimpleListSupportedCurrenciesResponse</a></code>

Methods:

- <code title="get /simple/price">client.simple.<a href="./src/resources/simple.ts">getPrice</a>({ ...params }) -> SimpleGetPriceResponse</code>
- <code title="get /simple/token_price/{id}">client.simple.<a href="./src/resources/simple.ts">getTokenPrice</a>(id, { ...params }) -> SimpleGetTokenPriceResponse</code>
- <code title="get /simple/supported_vs_currencies">client.simple.<a href="./src/resources/simple.ts">listSupportedCurrencies</a>() -> SimpleListSupportedCurrenciesResponse</code>

# Coins

Types:

- <code><a href="./src/resources/coins/coins.ts">CoinsData</a></code>
- <code><a href="./src/resources/coins/coins.ts">CoinsTickers</a></code>

## List

Types:

- <code><a href="./src/resources/coins/list.ts">ListAllResponse</a></code>
- <code><a href="./src/resources/coins/list.ts">ListRecentlyAddedResponse</a></code>
- <code><a href="./src/resources/coins/list.ts">ListTopGainersLosersResponse</a></code>
- <code><a href="./src/resources/coins/list.ts">ListWithMarketDataResponse</a></code>

Methods:

- <code title="get /coins/list">client.coins.list.<a href="./src/resources/coins/list.ts">all</a>({ ...params }) -> ListAllResponse</code>
- <code title="get /coins/list/new">client.coins.list.<a href="./src/resources/coins/list.ts">recentlyAdded</a>() -> ListRecentlyAddedResponse</code>
- <code title="get /coins/top_gainers_losers">client.coins.list.<a href="./src/resources/coins/list.ts">topGainersLosers</a>({ ...params }) -> ListTopGainersLosersResponse</code>
- <code title="get /coins/markets">client.coins.list.<a href="./src/resources/coins/list.ts">withMarketData</a>({ ...params }) -> ListWithMarketDataResponse</code>

## Retrieve

Types:

- <code><a href="./src/resources/coins/retrieve.ts">RetrieveHistoricalDataByIDResponse</a></code>

Methods:

- <code title="get /coins/{id}">client.coins.retrieve.<a href="./src/resources/coins/retrieve.ts">byID</a>(id, { ...params }) -> CoinsData</code>
- <code title="get /coins/{id}/history">client.coins.retrieve.<a href="./src/resources/coins/retrieve.ts">historicalDataByID</a>(id, { ...params }) -> RetrieveHistoricalDataByIDResponse</code>
- <code title="get /coins/{id}/tickers">client.coins.retrieve.<a href="./src/resources/coins/retrieve.ts">tickersByID</a>(id, { ...params }) -> CoinsTickers</code>

## MarketChart

Types:

- <code><a href="./src/resources/coins/market-chart.ts">CoinsMarketChart</a></code>
- <code><a href="./src/resources/coins/market-chart.ts">CoinsMarketChartRange</a></code>

Methods:

- <code title="get /coins/{id}/market_chart">client.coins.marketChart.<a href="./src/resources/coins/market-chart.ts">retrieveByID</a>(id, { ...params }) -> CoinsMarketChart</code>
- <code title="get /coins/{id}/market_chart/range">client.coins.marketChart.<a href="./src/resources/coins/market-chart.ts">retrieveRangeByID</a>(id, { ...params }) -> CoinsMarketChartRange</code>

## Ohlc

Types:

- <code><a href="./src/resources/coins/ohlc.ts">OhlcRetrieveByIDResponse</a></code>
- <code><a href="./src/resources/coins/ohlc.ts">OhlcRetrieveRangeByIDResponse</a></code>

Methods:

- <code title="get /coins/{id}/ohlc">client.coins.ohlc.<a href="./src/resources/coins/ohlc.ts">retrieveByID</a>(id, { ...params }) -> OhlcRetrieveByIDResponse</code>
- <code title="get /coins/{id}/ohlc/range">client.coins.ohlc.<a href="./src/resources/coins/ohlc.ts">retrieveRangeByID</a>(id, { ...params }) -> OhlcRetrieveRangeByIDResponse</code>

## Contract

Methods:

- <code title="get /coins/{id}/contract/{contract_address}">client.coins.contract.<a href="./src/resources/coins/contract/contract.ts">retrieveByAddress</a>(contractAddress, { ...params }) -> CoinsData</code>

### MarketChart

Methods:

- <code title="get /coins/{id}/contract/{contract_address}/market_chart">client.coins.contract.marketChart.<a href="./src/resources/coins/contract/market-chart.ts">retrieveByAddress</a>(contractAddress, { ...params }) -> CoinsMarketChart</code>
- <code title="get /coins/{id}/contract/{contract_address}/market_chart/range">client.coins.contract.marketChart.<a href="./src/resources/coins/contract/market-chart.ts">retrieveRangeByAddress</a>(contractAddress, { ...params }) -> CoinsMarketChartRange</code>

## CirculatingSupplyChart

Types:

- <code><a href="./src/resources/coins/circulating-supply-chart.ts">CirculatingSupplyChartBase</a></code>

Methods:

- <code title="get /coins/{id}/circulating_supply_chart">client.coins.circulatingSupplyChart.<a href="./src/resources/coins/circulating-supply-chart.ts">retrieveByID</a>(id, { ...params }) -> CirculatingSupplyChartBase</code>
- <code title="get /coins/{id}/circulating_supply_chart/range">client.coins.circulatingSupplyChart.<a href="./src/resources/coins/circulating-supply-chart.ts">retrieveRangeByID</a>(id, { ...params }) -> CirculatingSupplyChartBase</code>

## TotalSupplyChart

Types:

- <code><a href="./src/resources/coins/total-supply-chart.ts">TotalSupplyChartBase</a></code>

Methods:

- <code title="get /coins/{id}/total_supply_chart">client.coins.totalSupplyChart.<a href="./src/resources/coins/total-supply-chart.ts">retrieveByID</a>(id, { ...params }) -> TotalSupplyChartBase</code>
- <code title="get /coins/{id}/total_supply_chart/range">client.coins.totalSupplyChart.<a href="./src/resources/coins/total-supply-chart.ts">retrieveRangeByID</a>(id, { ...params }) -> TotalSupplyChartBase</code>

## Categories

### List

Types:

- <code><a href="./src/resources/coins/categories/list.ts">ListAllResponse</a></code>
- <code><a href="./src/resources/coins/categories/list.ts">ListWithMarketDataResponse</a></code>

Methods:

- <code title="get /coins/categories/list">client.coins.categories.list.<a href="./src/resources/coins/categories/list.ts">all</a>() -> ListAllResponse</code>
- <code title="get /coins/categories">client.coins.categories.list.<a href="./src/resources/coins/categories/list.ts">withMarketData</a>({ ...params }) -> ListWithMarketDataResponse</code>

# AssetPlatforms

Types:

- <code><a href="./src/resources/asset-platforms.ts">AssetPlatformListResponse</a></code>

Methods:

- <code title="get /asset_platforms">client.assetPlatforms.<a href="./src/resources/asset-platforms.ts">list</a>({ ...params }) -> AssetPlatformListResponse</code>

# TokenLists

Types:

- <code><a href="./src/resources/token-lists.ts">TokenListRetrieveAllResponse</a></code>

Methods:

- <code title="get /token_lists/{asset_platform_id}/all.json">client.tokenLists.<a href="./src/resources/token-lists.ts">retrieveAll</a>(assetPlatformID) -> TokenListRetrieveAllResponse</code>

# Exchanges

Types:

- <code><a href="./src/resources/exchanges/exchanges.ts">ExchangeRetrieveResponse</a></code>
- <code><a href="./src/resources/exchanges/exchanges.ts">ExchangeListResponse</a></code>
- <code><a href="./src/resources/exchanges/exchanges.ts">ExchangeListIDMapResponse</a></code>

Methods:

- <code title="get /exchanges/{id}">client.exchanges.<a href="./src/resources/exchanges/exchanges.ts">retrieve</a>(id) -> ExchangeRetrieveResponse</code>
- <code title="get /exchanges">client.exchanges.<a href="./src/resources/exchanges/exchanges.ts">list</a>({ ...params }) -> ExchangeListResponse</code>
- <code title="get /exchanges/list">client.exchanges.<a href="./src/resources/exchanges/exchanges.ts">listIDMap</a>({ ...params }) -> ExchangeListIDMapResponse</code>
- <code title="get /exchanges/{id}/tickers">client.exchanges.<a href="./src/resources/exchanges/exchanges.ts">retrieveTickers</a>(id, { ...params }) -> CoinsTickers</code>

## VolumeChart

Types:

- <code><a href="./src/resources/exchanges/volume-chart.ts">VolumeChartRetrieveResponse</a></code>
- <code><a href="./src/resources/exchanges/volume-chart.ts">VolumeChartRetrieveRangeResponse</a></code>

Methods:

- <code title="get /exchanges/{id}/volume_chart">client.exchanges.volumeChart.<a href="./src/resources/exchanges/volume-chart.ts">retrieve</a>(id, { ...params }) -> VolumeChartRetrieveResponse</code>
- <code title="get /exchanges/{id}/volume_chart/range">client.exchanges.volumeChart.<a href="./src/resources/exchanges/volume-chart.ts">retrieveRange</a>(id, { ...params }) -> VolumeChartRetrieveRangeResponse</code>

# Derivatives

Types:

- <code><a href="./src/resources/derivatives/derivatives.ts">TickersList</a></code>

Methods:

- <code title="get /derivatives">client.derivatives.<a href="./src/resources/derivatives/derivatives.ts">list</a>() -> TickersList</code>

## Exchanges

Types:

- <code><a href="./src/resources/derivatives/exchanges.ts">ExchangeRetrieveResponse</a></code>
- <code><a href="./src/resources/derivatives/exchanges.ts">ExchangeListResponse</a></code>
- <code><a href="./src/resources/derivatives/exchanges.ts">ExchangeIDMapResponse</a></code>

Methods:

- <code title="get /derivatives/exchanges/{id}">client.derivatives.exchanges.<a href="./src/resources/derivatives/exchanges.ts">retrieve</a>(id, { ...params }) -> ExchangeRetrieveResponse</code>
- <code title="get /derivatives/exchanges">client.derivatives.exchanges.<a href="./src/resources/derivatives/exchanges.ts">list</a>({ ...params }) -> ExchangeListResponse</code>
- <code title="get /derivatives/exchanges/list">client.derivatives.exchanges.<a href="./src/resources/derivatives/exchanges.ts">idMap</a>() -> ExchangeIDMapResponse</code>

# NFTs

Types:

- <code><a href="./src/resources/nfts/nfts.ts">NFTData</a></code>
- <code><a href="./src/resources/nfts/nfts.ts">NFTMarketChart</a></code>
- <code><a href="./src/resources/nfts/nfts.ts">NFTListResponse</a></code>
- <code><a href="./src/resources/nfts/nfts.ts">NFTListWithMarketDataResponse</a></code>
- <code><a href="./src/resources/nfts/nfts.ts">NFTRetrieveTickersResponse</a></code>

Methods:

- <code title="get /nfts/{id}">client.nfts.<a href="./src/resources/nfts/nfts.ts">retrieve</a>(id) -> NFTData</code>
- <code title="get /nfts/list">client.nfts.<a href="./src/resources/nfts/nfts.ts">list</a>({ ...params }) -> NFTListResponse</code>
- <code title="get /nfts/markets">client.nfts.<a href="./src/resources/nfts/nfts.ts">listWithMarketData</a>({ ...params }) -> NFTListWithMarketDataResponse</code>
- <code title="get /nfts/{id}/market_chart">client.nfts.<a href="./src/resources/nfts/nfts.ts">retrieveMarketChart</a>(id, { ...params }) -> NFTMarketChart</code>
- <code title="get /nfts/{id}/tickers">client.nfts.<a href="./src/resources/nfts/nfts.ts">retrieveTickers</a>(id) -> NFTRetrieveTickersResponse</code>

## Contract

Methods:

- <code title="get /nfts/{asset_platform_id}/contract/{contract_address}">client.nfts.contract.<a href="./src/resources/nfts/contract.ts">retrieve</a>(contractAddress, { ...params }) -> NFTData</code>
- <code title="get /nfts/{asset_platform_id}/contract/{contract_address}/market_chart">client.nfts.contract.<a href="./src/resources/nfts/contract.ts">retrieveMarketChart</a>(contractAddress, { ...params }) -> NFTMarketChart</code>

# ExchangeRates

Types:

- <code><a href="./src/resources/exchange-rates.ts">ExchangeRateListResponse</a></code>

Methods:

- <code title="get /exchange_rates">client.exchangeRates.<a href="./src/resources/exchange-rates.ts">list</a>() -> ExchangeRateListResponse</code>

# Search

Types:

- <code><a href="./src/resources/search.ts">SearchRetrieveResponse</a></code>
- <code><a href="./src/resources/search.ts">SearchListTrendingResponse</a></code>

Methods:

- <code title="get /search">client.search.<a href="./src/resources/search.ts">retrieve</a>({ ...params }) -> SearchRetrieveResponse</code>
- <code title="get /search/trending">client.search.<a href="./src/resources/search.ts">listTrending</a>({ ...params }) -> SearchListTrendingResponse</code>

# Global

Types:

- <code><a href="./src/resources/global.ts">GlobalRetrieveResponse</a></code>
- <code><a href="./src/resources/global.ts">GlobalRetrieveDecentralizedFinanceResponse</a></code>
- <code><a href="./src/resources/global.ts">GlobalRetrieveMarketCapChartResponse</a></code>

Methods:

- <code title="get /global">client.global.<a href="./src/resources/global.ts">retrieve</a>() -> GlobalRetrieveResponse</code>
- <code title="get /global/decentralized_finance_defi">client.global.<a href="./src/resources/global.ts">retrieveDecentralizedFinance</a>() -> GlobalRetrieveDecentralizedFinanceResponse</code>
- <code title="get /global/market_cap_chart">client.global.<a href="./src/resources/global.ts">retrieveMarketCapChart</a>({ ...params }) -> GlobalRetrieveMarketCapChartResponse</code>

# Companies

Types:

- <code><a href="./src/resources/companies.ts">CompanyRetrievePublicTreasuryResponse</a></code>

Methods:

- <code title="get /companies/public_treasury/{coin_id}">client.companies.<a href="./src/resources/companies.ts">retrievePublicTreasury</a>(coinID) -> CompanyRetrievePublicTreasuryResponse</code>

# Onchain

## Simple

### Networks

Types:

- <code><a href="./src/resources/onchain/simple/networks.ts">NetworkGetTokenPriceResponse</a></code>

Methods:

- <code title="get /onchain/simple/networks/{network}/token_price/{addresses}">client.onchain.simple.networks.<a href="./src/resources/onchain/simple/networks.ts">getTokenPrice</a>(addresses, { ...params }) -> NetworkGetTokenPriceResponse</code>

## Networks

Types:

- <code><a href="./src/resources/onchain/networks/networks.ts">NetworkListResponse</a></code>

Methods:

- <code title="get /onchain/networks">client.onchain.networks.<a href="./src/resources/onchain/networks/networks.ts">list</a>({ ...params }) -> NetworkListResponse</code>

### Dexes

Types:

- <code><a href="./src/resources/onchain/networks/dexes.ts">DexListResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/dexes">client.onchain.networks.dexes.<a href="./src/resources/onchain/networks/dexes.ts">list</a>(network, { ...params }) -> DexListResponse</code>
- <code title="get /onchain/networks/{network}/dexes/{dex}/pools">client.onchain.networks.dexes.<a href="./src/resources/onchain/networks/dexes.ts">listTopPools</a>(dex, { ...params }) -> Pool</code>

### TrendingPools

Types:

- <code><a href="./src/resources/onchain/networks/trending-pools.ts">Pool</a></code>

Methods:

- <code title="get /onchain/networks/trending_pools">client.onchain.networks.trendingPools.<a href="./src/resources/onchain/networks/trending-pools.ts">list</a>({ ...params }) -> Pool</code>
- <code title="get /onchain/networks/{network}/trending_pools">client.onchain.networks.trendingPools.<a href="./src/resources/onchain/networks/trending-pools.ts">listByNetwork</a>(network, { ...params }) -> Pool</code>

### Pools

Types:

- <code><a href="./src/resources/onchain/networks/pools.ts">PoolInfo</a></code>
- <code><a href="./src/resources/onchain/networks/pools.ts">PoolListRecentTradesResponse</a></code>
- <code><a href="./src/resources/onchain/networks/pools.ts">PoolRetrieveOhlcvResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/pools/{address}">client.onchain.networks.pools.<a href="./src/resources/onchain/networks/pools.ts">retrieve</a>(address, { ...params }) -> PoolInfo</code>
- <code title="get /onchain/networks/{network}/pools/{pool_address}/trades">client.onchain.networks.pools.<a href="./src/resources/onchain/networks/pools.ts">listRecentTrades</a>(poolAddress, { ...params }) -> PoolListRecentTradesResponse</code>
- <code title="get /onchain/networks/{network}/pools">client.onchain.networks.pools.<a href="./src/resources/onchain/networks/pools.ts">listTop</a>(network, { ...params }) -> Pool</code>
- <code title="get /onchain/networks/{network}/pools/{pool_address}/info">client.onchain.networks.pools.<a href="./src/resources/onchain/networks/pools.ts">retrieveInfo</a>(poolAddress, { ...params }) -> TokenInfo</code>
- <code title="get /onchain/networks/{network}/pools/multi/{addresses}">client.onchain.networks.pools.<a href="./src/resources/onchain/networks/pools.ts">retrieveMultiple</a>(addresses, { ...params }) -> PoolInfo</code>
- <code title="get /onchain/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}">client.onchain.networks.pools.<a href="./src/resources/onchain/networks/pools.ts">retrieveOhlcv</a>(timeframe, { ...params }) -> PoolRetrieveOhlcvResponse</code>

### NewPools

Methods:

- <code title="get /onchain/networks/new_pools">client.onchain.networks.newPools.<a href="./src/resources/onchain/networks/new-pools.ts">list</a>({ ...params }) -> Pool</code>
- <code title="get /onchain/networks/{network}/new_pools">client.onchain.networks.newPools.<a href="./src/resources/onchain/networks/new-pools.ts">listByNetwork</a>(network, { ...params }) -> Pool</code>

### Tokens

Types:

- <code><a href="./src/resources/onchain/networks/tokens.ts">Token</a></code>
- <code><a href="./src/resources/onchain/networks/tokens.ts">TokenInfo</a></code>
- <code><a href="./src/resources/onchain/networks/tokens.ts">TokenListTopHoldersResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/tokens/{address}">client.onchain.networks.tokens.<a href="./src/resources/onchain/networks/tokens.ts">retrieve</a>(address, { ...params }) -> Token</code>
- <code title="get /onchain/networks/{network}/tokens/{address}/top_holders">client.onchain.networks.tokens.<a href="./src/resources/onchain/networks/tokens.ts">listTopHolders</a>(address, { ...params }) -> TokenListTopHoldersResponse</code>
- <code title="get /onchain/networks/{network}/tokens/{token_address}/pools">client.onchain.networks.tokens.<a href="./src/resources/onchain/networks/tokens.ts">listTopPools</a>(tokenAddress, { ...params }) -> Pool</code>
- <code title="get /onchain/networks/{network}/tokens/{address}/info">client.onchain.networks.tokens.<a href="./src/resources/onchain/networks/tokens.ts">retrieveInfo</a>(address, { ...params }) -> TokenInfo</code>
- <code title="get /onchain/networks/{network}/tokens/multi/{addresses}">client.onchain.networks.tokens.<a href="./src/resources/onchain/networks/tokens.ts">retrieveMultiple</a>(addresses, { ...params }) -> Token</code>

## Pools

Types:

- <code><a href="./src/resources/onchain/pools.ts">PoolListTrendingSearchResponse</a></code>

Methods:

- <code title="get /onchain/pools/trending_search">client.onchain.pools.<a href="./src/resources/onchain/pools.ts">listTrendingSearch</a>({ ...params }) -> PoolListTrendingSearchResponse</code>
- <code title="get /onchain/pools/megafilter">client.onchain.pools.<a href="./src/resources/onchain/pools.ts">megafilter</a>({ ...params }) -> Pool</code>

## Search

Methods:

- <code title="get /onchain/search/pools">client.onchain.search.<a href="./src/resources/onchain/search.ts">pools</a>({ ...params }) -> Pool</code>

## Tokens

Methods:

- <code title="get /onchain/tokens/info_recently_updated">client.onchain.tokens.<a href="./src/resources/onchain/tokens.ts">listRecentlyUpdated</a>({ ...params }) -> TokenInfo</code>

## Categories

Types:

- <code><a href="./src/resources/onchain/categories.ts">CategoryListResponse</a></code>
- <code><a href="./src/resources/onchain/categories.ts">CategoryListPoolsByCategoryResponse</a></code>

Methods:

- <code title="get /onchain/categories">client.onchain.categories.<a href="./src/resources/onchain/categories.ts">list</a>({ ...params }) -> CategoryListResponse</code>
- <code title="get /onchain/categories/{category_id}/pools">client.onchain.categories.<a href="./src/resources/onchain/categories.ts">listPoolsByCategory</a>(categoryID, { ...params }) -> CategoryListPoolsByCategoryResponse</code>
