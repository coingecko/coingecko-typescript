# AssetPlatforms

Types:

- <code><a href="./src/resources/asset-platforms.ts">AssetPlatformGetResponse</a></code>

Methods:

- <code title="get /asset_platforms">client.assetPlatforms.<a href="./src/resources/asset-platforms.ts">get</a>({ ...params }) -> AssetPlatformGetResponse</code>

# Coins

Types:

- <code><a href="./src/resources/coins/coins.ts">CoinGetIDResponse</a></code>

Methods:

- <code title="get /coins/{id}">client.coins.<a href="./src/resources/coins/coins.ts">getID</a>(id, { ...params }) -> CoinGetIDResponse</code>

## Categories

Types:

- <code><a href="./src/resources/coins/categories.ts">CategoryGetResponse</a></code>
- <code><a href="./src/resources/coins/categories.ts">CategoryGetListResponse</a></code>

Methods:

- <code title="get /coins/categories">client.coins.categories.<a href="./src/resources/coins/categories.ts">get</a>({ ...params }) -> CategoryGetResponse</code>
- <code title="get /coins/categories/list">client.coins.categories.<a href="./src/resources/coins/categories.ts">getList</a>() -> CategoryGetListResponse</code>

## List

Types:

- <code><a href="./src/resources/coins/list.ts">ListGetResponse</a></code>
- <code><a href="./src/resources/coins/list.ts">ListGetNewResponse</a></code>

Methods:

- <code title="get /coins/list">client.coins.list.<a href="./src/resources/coins/list.ts">get</a>({ ...params }) -> ListGetResponse</code>
- <code title="get /coins/list/new">client.coins.list.<a href="./src/resources/coins/list.ts">getNew</a>() -> ListGetNewResponse</code>

## Markets

Types:

- <code><a href="./src/resources/coins/markets.ts">MarketGetResponse</a></code>

Methods:

- <code title="get /coins/markets">client.coins.markets.<a href="./src/resources/coins/markets.ts">get</a>({ ...params }) -> MarketGetResponse</code>

## TopGainersLosers

Types:

- <code><a href="./src/resources/coins/top-gainers-losers.ts">TopGainersLoserGetResponse</a></code>

Methods:

- <code title="get /coins/top_gainers_losers">client.coins.topGainersLosers.<a href="./src/resources/coins/top-gainers-losers.ts">get</a>({ ...params }) -> TopGainersLoserGetResponse</code>

## CirculatingSupplyChart

Types:

- <code><a href="./src/resources/coins/circulating-supply-chart.ts">CirculatingSupplyChartGetResponse</a></code>
- <code><a href="./src/resources/coins/circulating-supply-chart.ts">CirculatingSupplyChartGetRangeResponse</a></code>

Methods:

- <code title="get /coins/{id}/circulating_supply_chart">client.coins.circulatingSupplyChart.<a href="./src/resources/coins/circulating-supply-chart.ts">get</a>(id, { ...params }) -> CirculatingSupplyChartGetResponse</code>
- <code title="get /coins/{id}/circulating_supply_chart/range">client.coins.circulatingSupplyChart.<a href="./src/resources/coins/circulating-supply-chart.ts">getRange</a>(id, { ...params }) -> CirculatingSupplyChartGetRangeResponse</code>

## Contract

Types:

- <code><a href="./src/resources/coins/contract/contract.ts">ContractGetResponse</a></code>

Methods:

- <code title="get /coins/{id}/contract/{contract_address}">client.coins.contract.<a href="./src/resources/coins/contract/contract.ts">get</a>(contractAddress, { ...params }) -> ContractGetResponse</code>

### MarketChart

Types:

- <code><a href="./src/resources/coins/contract/market-chart.ts">MarketChartGetResponse</a></code>
- <code><a href="./src/resources/coins/contract/market-chart.ts">MarketChartGetRangeResponse</a></code>

Methods:

- <code title="get /coins/{id}/contract/{contract_address}/market_chart">client.coins.contract.marketChart.<a href="./src/resources/coins/contract/market-chart.ts">get</a>(contractAddress, { ...params }) -> MarketChartGetResponse</code>
- <code title="get /coins/{id}/contract/{contract_address}/market_chart/range">client.coins.contract.marketChart.<a href="./src/resources/coins/contract/market-chart.ts">getRange</a>(contractAddress, { ...params }) -> MarketChartGetRangeResponse</code>

## History

Types:

- <code><a href="./src/resources/coins/history.ts">HistoryGetResponse</a></code>

Methods:

- <code title="get /coins/{id}/history">client.coins.history.<a href="./src/resources/coins/history.ts">get</a>(id, { ...params }) -> HistoryGetResponse</code>

## MarketChart

Types:

- <code><a href="./src/resources/coins/market-chart.ts">MarketChartGetResponse</a></code>
- <code><a href="./src/resources/coins/market-chart.ts">MarketChartGetRangeResponse</a></code>

Methods:

- <code title="get /coins/{id}/market_chart">client.coins.marketChart.<a href="./src/resources/coins/market-chart.ts">get</a>(id, { ...params }) -> MarketChartGetResponse</code>
- <code title="get /coins/{id}/market_chart/range">client.coins.marketChart.<a href="./src/resources/coins/market-chart.ts">getRange</a>(id, { ...params }) -> MarketChartGetRangeResponse</code>

## Ohlc

Types:

- <code><a href="./src/resources/coins/ohlc.ts">OhlcGetResponse</a></code>
- <code><a href="./src/resources/coins/ohlc.ts">OhlcGetRangeResponse</a></code>

Methods:

- <code title="get /coins/{id}/ohlc">client.coins.ohlc.<a href="./src/resources/coins/ohlc.ts">get</a>(id, { ...params }) -> OhlcGetResponse</code>
- <code title="get /coins/{id}/ohlc/range">client.coins.ohlc.<a href="./src/resources/coins/ohlc.ts">getRange</a>(id, { ...params }) -> OhlcGetRangeResponse</code>

## Tickers

Types:

- <code><a href="./src/resources/coins/tickers.ts">TickerGetResponse</a></code>

Methods:

- <code title="get /coins/{id}/tickers">client.coins.tickers.<a href="./src/resources/coins/tickers.ts">get</a>(id, { ...params }) -> TickerGetResponse</code>

## TotalSupplyChart

Types:

- <code><a href="./src/resources/coins/total-supply-chart.ts">TotalSupplyChartGetResponse</a></code>
- <code><a href="./src/resources/coins/total-supply-chart.ts">TotalSupplyChartGetRangeResponse</a></code>

Methods:

- <code title="get /coins/{id}/total_supply_chart">client.coins.totalSupplyChart.<a href="./src/resources/coins/total-supply-chart.ts">get</a>(id, { ...params }) -> TotalSupplyChartGetResponse</code>
- <code title="get /coins/{id}/total_supply_chart/range">client.coins.totalSupplyChart.<a href="./src/resources/coins/total-supply-chart.ts">getRange</a>(id, { ...params }) -> TotalSupplyChartGetRangeResponse</code>

# Derivatives

Types:

- <code><a href="./src/resources/derivatives/derivatives.ts">DerivativeGetResponse</a></code>

Methods:

- <code title="get /derivatives">client.derivatives.<a href="./src/resources/derivatives/derivatives.ts">get</a>() -> DerivativeGetResponse</code>

## Exchanges

Types:

- <code><a href="./src/resources/derivatives/exchanges.ts">ExchangeGetResponse</a></code>
- <code><a href="./src/resources/derivatives/exchanges.ts">ExchangeGetIDResponse</a></code>
- <code><a href="./src/resources/derivatives/exchanges.ts">ExchangeGetListResponse</a></code>

Methods:

- <code title="get /derivatives/exchanges">client.derivatives.exchanges.<a href="./src/resources/derivatives/exchanges.ts">get</a>({ ...params }) -> ExchangeGetResponse</code>
- <code title="get /derivatives/exchanges/{id}">client.derivatives.exchanges.<a href="./src/resources/derivatives/exchanges.ts">getID</a>(id, { ...params }) -> ExchangeGetIDResponse</code>
- <code title="get /derivatives/exchanges/list">client.derivatives.exchanges.<a href="./src/resources/derivatives/exchanges.ts">getList</a>() -> ExchangeGetListResponse</code>

# Entities

Types:

- <code><a href="./src/resources/entities.ts">EntityGetListResponse</a></code>

Methods:

- <code title="get /entities/list">client.entities.<a href="./src/resources/entities.ts">getList</a>({ ...params }) -> EntityGetListResponse</code>

# ExchangeRates

Types:

- <code><a href="./src/resources/exchange-rates.ts">ExchangeRateGetResponse</a></code>

Methods:

- <code title="get /exchange_rates">client.exchangeRates.<a href="./src/resources/exchange-rates.ts">get</a>() -> ExchangeRateGetResponse</code>

# Exchanges

Types:

- <code><a href="./src/resources/exchanges/exchanges.ts">ExchangeGetResponse</a></code>
- <code><a href="./src/resources/exchanges/exchanges.ts">ExchangeGetIDResponse</a></code>
- <code><a href="./src/resources/exchanges/exchanges.ts">ExchangeGetListResponse</a></code>

Methods:

- <code title="get /exchanges">client.exchanges.<a href="./src/resources/exchanges/exchanges.ts">get</a>({ ...params }) -> ExchangeGetResponse</code>
- <code title="get /exchanges/{id}">client.exchanges.<a href="./src/resources/exchanges/exchanges.ts">getID</a>(id, { ...params }) -> ExchangeGetIDResponse</code>
- <code title="get /exchanges/list">client.exchanges.<a href="./src/resources/exchanges/exchanges.ts">getList</a>({ ...params }) -> ExchangeGetListResponse</code>

## Tickers

Types:

- <code><a href="./src/resources/exchanges/tickers.ts">TickerGetResponse</a></code>

Methods:

- <code title="get /exchanges/{id}/tickers">client.exchanges.tickers.<a href="./src/resources/exchanges/tickers.ts">get</a>(id, { ...params }) -> TickerGetResponse</code>

## VolumeChart

Types:

- <code><a href="./src/resources/exchanges/volume-chart.ts">VolumeChartGetResponse</a></code>
- <code><a href="./src/resources/exchanges/volume-chart.ts">VolumeChartGetRangeResponse</a></code>

Methods:

- <code title="get /exchanges/{id}/volume_chart">client.exchanges.volumeChart.<a href="./src/resources/exchanges/volume-chart.ts">get</a>(id, { ...params }) -> VolumeChartGetResponse</code>
- <code title="get /exchanges/{id}/volume_chart/range">client.exchanges.volumeChart.<a href="./src/resources/exchanges/volume-chart.ts">getRange</a>(id, { ...params }) -> VolumeChartGetRangeResponse</code>

# Global

Types:

- <code><a href="./src/resources/global/global.ts">GlobalGetResponse</a></code>

Methods:

- <code title="get /global">client.global.<a href="./src/resources/global/global.ts">get</a>() -> GlobalGetResponse</code>

## DecentralizedFinanceDefi

Types:

- <code><a href="./src/resources/global/decentralized-finance-defi.ts">DecentralizedFinanceDefiGetResponse</a></code>

Methods:

- <code title="get /global/decentralized_finance_defi">client.global.decentralizedFinanceDefi.<a href="./src/resources/global/decentralized-finance-defi.ts">get</a>() -> DecentralizedFinanceDefiGetResponse</code>

## MarketCapChart

Types:

- <code><a href="./src/resources/global/market-cap-chart.ts">MarketCapChartGetResponse</a></code>

Methods:

- <code title="get /global/market_cap_chart">client.global.marketCapChart.<a href="./src/resources/global/market-cap-chart.ts">get</a>({ ...params }) -> MarketCapChartGetResponse</code>

# Key

Types:

- <code><a href="./src/resources/key.ts">KeyGetResponse</a></code>

Methods:

- <code title="get /key">client.key.<a href="./src/resources/key.ts">get</a>() -> KeyGetResponse</code>

# NFTs

Types:

- <code><a href="./src/resources/nfts/nfts.ts">NFTGetIDResponse</a></code>
- <code><a href="./src/resources/nfts/nfts.ts">NFTGetListResponse</a></code>
- <code><a href="./src/resources/nfts/nfts.ts">NFTGetMarketsResponse</a></code>

Methods:

- <code title="get /nfts/{id}">client.nfts.<a href="./src/resources/nfts/nfts.ts">getID</a>(id) -> NFTGetIDResponse</code>
- <code title="get /nfts/list">client.nfts.<a href="./src/resources/nfts/nfts.ts">getList</a>({ ...params }) -> NFTGetListResponse</code>
- <code title="get /nfts/markets">client.nfts.<a href="./src/resources/nfts/nfts.ts">getMarkets</a>({ ...params }) -> NFTGetMarketsResponse</code>

## Contract

Types:

- <code><a href="./src/resources/nfts/contract/contract.ts">ContractGetContractAddressResponse</a></code>

Methods:

- <code title="get /nfts/{asset_platform_id}/contract/{contract_address}">client.nfts.contract.<a href="./src/resources/nfts/contract/contract.ts">getContractAddress</a>(contractAddress, { ...params }) -> ContractGetContractAddressResponse</code>

### MarketChart

Types:

- <code><a href="./src/resources/nfts/contract/market-chart.ts">MarketChartGetResponse</a></code>

Methods:

- <code title="get /nfts/{asset_platform_id}/contract/{contract_address}/market_chart">client.nfts.contract.marketChart.<a href="./src/resources/nfts/contract/market-chart.ts">get</a>(contractAddress, { ...params }) -> MarketChartGetResponse</code>

## MarketChart

Types:

- <code><a href="./src/resources/nfts/market-chart.ts">MarketChartGetResponse</a></code>

Methods:

- <code title="get /nfts/{id}/market_chart">client.nfts.marketChart.<a href="./src/resources/nfts/market-chart.ts">get</a>(id, { ...params }) -> MarketChartGetResponse</code>

## Tickers

Types:

- <code><a href="./src/resources/nfts/tickers.ts">TickerGetResponse</a></code>

Methods:

- <code title="get /nfts/{id}/tickers">client.nfts.tickers.<a href="./src/resources/nfts/tickers.ts">get</a>(id) -> TickerGetResponse</code>

# Onchain

## Categories

Types:

- <code><a href="./src/resources/onchain/categories.ts">CategoryGetResponse</a></code>
- <code><a href="./src/resources/onchain/categories.ts">CategoryGetPoolsResponse</a></code>

Methods:

- <code title="get /onchain/categories">client.onchain.categories.<a href="./src/resources/onchain/categories.ts">get</a>({ ...params }) -> CategoryGetResponse</code>
- <code title="get /onchain/categories/{category_id}/pools">client.onchain.categories.<a href="./src/resources/onchain/categories.ts">getPools</a>(categoryID, { ...params }) -> CategoryGetPoolsResponse</code>

## Networks

Types:

- <code><a href="./src/resources/onchain/networks/networks.ts">NetworkGetResponse</a></code>

Methods:

- <code title="get /onchain/networks">client.onchain.networks.<a href="./src/resources/onchain/networks/networks.ts">get</a>({ ...params }) -> NetworkGetResponse</code>

### NewPools

Types:

- <code><a href="./src/resources/onchain/networks/new-pools.ts">NewPoolGetResponse</a></code>
- <code><a href="./src/resources/onchain/networks/new-pools.ts">NewPoolGetNetworkResponse</a></code>

Methods:

- <code title="get /onchain/networks/new_pools">client.onchain.networks.newPools.<a href="./src/resources/onchain/networks/new-pools.ts">get</a>({ ...params }) -> NewPoolGetResponse</code>
- <code title="get /onchain/networks/{network}/new_pools">client.onchain.networks.newPools.<a href="./src/resources/onchain/networks/new-pools.ts">getNetwork</a>(network, { ...params }) -> NewPoolGetNetworkResponse</code>

### TrendingPools

Types:

- <code><a href="./src/resources/onchain/networks/trending-pools.ts">TrendingPoolGetResponse</a></code>
- <code><a href="./src/resources/onchain/networks/trending-pools.ts">TrendingPoolGetNetworkResponse</a></code>

Methods:

- <code title="get /onchain/networks/trending_pools">client.onchain.networks.trendingPools.<a href="./src/resources/onchain/networks/trending-pools.ts">get</a>({ ...params }) -> TrendingPoolGetResponse</code>
- <code title="get /onchain/networks/{network}/trending_pools">client.onchain.networks.trendingPools.<a href="./src/resources/onchain/networks/trending-pools.ts">getNetwork</a>(network, { ...params }) -> TrendingPoolGetNetworkResponse</code>

### Dexes

Types:

- <code><a href="./src/resources/onchain/networks/dexes.ts">DexGetResponse</a></code>
- <code><a href="./src/resources/onchain/networks/dexes.ts">DexGetPoolsResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/dexes">client.onchain.networks.dexes.<a href="./src/resources/onchain/networks/dexes.ts">get</a>(network, { ...params }) -> DexGetResponse</code>
- <code title="get /onchain/networks/{network}/dexes/{dex}/pools">client.onchain.networks.dexes.<a href="./src/resources/onchain/networks/dexes.ts">getPools</a>(dex, { ...params }) -> DexGetPoolsResponse</code>

### Pools

Types:

- <code><a href="./src/resources/onchain/networks/pools/pools.ts">PoolGetResponse</a></code>
- <code><a href="./src/resources/onchain/networks/pools/pools.ts">PoolGetAddressResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/pools">client.onchain.networks.pools.<a href="./src/resources/onchain/networks/pools/pools.ts">get</a>(network, { ...params }) -> PoolGetResponse</code>
- <code title="get /onchain/networks/{network}/pools/{address}">client.onchain.networks.pools.<a href="./src/resources/onchain/networks/pools/pools.ts">getAddress</a>(address, { ...params }) -> PoolGetAddressResponse</code>

#### Multi

Types:

- <code><a href="./src/resources/onchain/networks/pools/multi.ts">MultiGetAddressesResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/pools/multi/{addresses}">client.onchain.networks.pools.multi.<a href="./src/resources/onchain/networks/pools/multi.ts">getAddresses</a>(addresses, { ...params }) -> MultiGetAddressesResponse</code>

#### Info

Types:

- <code><a href="./src/resources/onchain/networks/pools/info.ts">InfoGetResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/pools/{pool_address}/info">client.onchain.networks.pools.info.<a href="./src/resources/onchain/networks/pools/info.ts">get</a>(poolAddress, { ...params }) -> InfoGetResponse</code>

#### Ohlcv

Types:

- <code><a href="./src/resources/onchain/networks/pools/ohlcv.ts">OhlcvGetTimeframeResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/pools/{pool_address}/ohlcv/{timeframe}">client.onchain.networks.pools.ohlcv.<a href="./src/resources/onchain/networks/pools/ohlcv.ts">getTimeframe</a>(timeframe, { ...params }) -> OhlcvGetTimeframeResponse</code>

#### Trades

Types:

- <code><a href="./src/resources/onchain/networks/pools/trades.ts">TradeGetResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/pools/{pool_address}/trades">client.onchain.networks.pools.trades.<a href="./src/resources/onchain/networks/pools/trades.ts">get</a>(poolAddress, { ...params }) -> TradeGetResponse</code>

### Tokens

Types:

- <code><a href="./src/resources/onchain/networks/tokens/tokens.ts">TokenGetAddressResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/tokens/{address}">client.onchain.networks.tokens.<a href="./src/resources/onchain/networks/tokens/tokens.ts">getAddress</a>(address, { ...params }) -> TokenGetAddressResponse</code>

#### Multi

Types:

- <code><a href="./src/resources/onchain/networks/tokens/multi.ts">MultiGetAddressesResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/tokens/multi/{addresses}">client.onchain.networks.tokens.multi.<a href="./src/resources/onchain/networks/tokens/multi.ts">getAddresses</a>(addresses, { ...params }) -> MultiGetAddressesResponse</code>

#### Info

Types:

- <code><a href="./src/resources/onchain/networks/tokens/info.ts">InfoGetResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/tokens/{address}/info">client.onchain.networks.tokens.info.<a href="./src/resources/onchain/networks/tokens/info.ts">get</a>(address, { ...params }) -> InfoGetResponse</code>

#### TopHolders

Types:

- <code><a href="./src/resources/onchain/networks/tokens/top-holders.ts">TopHolderGetResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/tokens/{address}/top_holders">client.onchain.networks.tokens.topHolders.<a href="./src/resources/onchain/networks/tokens/top-holders.ts">get</a>(address, { ...params }) -> TopHolderGetResponse</code>

#### HoldersChart

Types:

- <code><a href="./src/resources/onchain/networks/tokens/holders-chart.ts">HoldersChartGetResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/tokens/{token_address}/holders_chart">client.onchain.networks.tokens.holdersChart.<a href="./src/resources/onchain/networks/tokens/holders-chart.ts">get</a>(tokenAddress, { ...params }) -> HoldersChartGetResponse</code>

#### Ohlcv

Types:

- <code><a href="./src/resources/onchain/networks/tokens/ohlcv.ts">OhlcvGetTimeframeResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/tokens/{token_address}/ohlcv/{timeframe}">client.onchain.networks.tokens.ohlcv.<a href="./src/resources/onchain/networks/tokens/ohlcv.ts">getTimeframe</a>(timeframe, { ...params }) -> OhlcvGetTimeframeResponse</code>

#### Pools

Types:

- <code><a href="./src/resources/onchain/networks/tokens/pools.ts">PoolGetResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/tokens/{token_address}/pools">client.onchain.networks.tokens.pools.<a href="./src/resources/onchain/networks/tokens/pools.ts">get</a>(tokenAddress, { ...params }) -> PoolGetResponse</code>

#### Trades

Types:

- <code><a href="./src/resources/onchain/networks/tokens/trades.ts">TradeGetResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network}/tokens/{token_address}/trades">client.onchain.networks.tokens.trades.<a href="./src/resources/onchain/networks/tokens/trades.ts">get</a>(tokenAddress, { ...params }) -> TradeGetResponse</code>

#### TopTraders

Types:

- <code><a href="./src/resources/onchain/networks/tokens/top-traders.ts">TopTraderGetResponse</a></code>

Methods:

- <code title="get /onchain/networks/{network_id}/tokens/{token_address}/top_traders">client.onchain.networks.tokens.topTraders.<a href="./src/resources/onchain/networks/tokens/top-traders.ts">get</a>(tokenAddress, { ...params }) -> TopTraderGetResponse</code>

## Pools

### Megafilter

Types:

- <code><a href="./src/resources/onchain/pools/megafilter.ts">MegafilterGetResponse</a></code>

Methods:

- <code title="get /onchain/pools/megafilter">client.onchain.pools.megafilter.<a href="./src/resources/onchain/pools/megafilter.ts">get</a>({ ...params }) -> MegafilterGetResponse</code>

### TrendingSearch

Types:

- <code><a href="./src/resources/onchain/pools/trending-search.ts">TrendingSearchGetResponse</a></code>

Methods:

- <code title="get /onchain/pools/trending_search">client.onchain.pools.trendingSearch.<a href="./src/resources/onchain/pools/trending-search.ts">get</a>({ ...params }) -> TrendingSearchGetResponse</code>

## Search

### Pools

Types:

- <code><a href="./src/resources/onchain/search/pools.ts">PoolGetResponse</a></code>

Methods:

- <code title="get /onchain/search/pools">client.onchain.search.pools.<a href="./src/resources/onchain/search/pools.ts">get</a>({ ...params }) -> PoolGetResponse</code>

## Simple

### Networks

#### TokenPrice

Types:

- <code><a href="./src/resources/onchain/simple/networks/token-price.ts">TokenPriceGetAddressesResponse</a></code>

Methods:

- <code title="get /onchain/simple/networks/{network}/token_price/{addresses}">client.onchain.simple.networks.tokenPrice.<a href="./src/resources/onchain/simple/networks/token-price.ts">getAddresses</a>(addresses, { ...params }) -> TokenPriceGetAddressesResponse</code>

## Tokens

### InfoRecentlyUpdated

Types:

- <code><a href="./src/resources/onchain/tokens/info-recently-updated.ts">InfoRecentlyUpdatedGetResponse</a></code>

Methods:

- <code title="get /onchain/tokens/info_recently_updated">client.onchain.tokens.infoRecentlyUpdated.<a href="./src/resources/onchain/tokens/info-recently-updated.ts">get</a>({ ...params }) -> InfoRecentlyUpdatedGetResponse</code>

# Ping

Types:

- <code><a href="./src/resources/ping.ts">PingGetResponse</a></code>

Methods:

- <code title="get /ping">client.ping.<a href="./src/resources/ping.ts">get</a>() -> PingGetResponse</code>

# PublicTreasury

Types:

- <code><a href="./src/resources/public-treasury.ts">PublicTreasuryGetCoinIDResponse</a></code>
- <code><a href="./src/resources/public-treasury.ts">PublicTreasuryGetEntityIDResponse</a></code>
- <code><a href="./src/resources/public-treasury.ts">PublicTreasuryGetHoldingChartResponse</a></code>
- <code><a href="./src/resources/public-treasury.ts">PublicTreasuryGetTransactionHistoryResponse</a></code>

Methods:

- <code title="get /{entity}/public_treasury/{coin_id}">client.publicTreasury.<a href="./src/resources/public-treasury.ts">getCoinID</a>(coinID, { ...params }) -> PublicTreasuryGetCoinIDResponse</code>
- <code title="get /public_treasury/{entity_id}">client.publicTreasury.<a href="./src/resources/public-treasury.ts">getEntityID</a>(entityID, { ...params }) -> PublicTreasuryGetEntityIDResponse</code>
- <code title="get /public_treasury/{entity_id}/{coin_id}/holding_chart">client.publicTreasury.<a href="./src/resources/public-treasury.ts">getHoldingChart</a>(coinID, { ...params }) -> PublicTreasuryGetHoldingChartResponse</code>
- <code title="get /public_treasury/{entity_id}/transaction_history">client.publicTreasury.<a href="./src/resources/public-treasury.ts">getTransactionHistory</a>(entityID, { ...params }) -> PublicTreasuryGetTransactionHistoryResponse</code>

# Search

Types:

- <code><a href="./src/resources/search/search.ts">SearchGetResponse</a></code>

Methods:

- <code title="get /search">client.search.<a href="./src/resources/search/search.ts">get</a>({ ...params }) -> SearchGetResponse</code>

## Trending

Types:

- <code><a href="./src/resources/search/trending.ts">TrendingGetResponse</a></code>

Methods:

- <code title="get /search/trending">client.search.trending.<a href="./src/resources/search/trending.ts">get</a>({ ...params }) -> TrendingGetResponse</code>

# Simple

## Price

Types:

- <code><a href="./src/resources/simple/price.ts">PriceGetResponse</a></code>

Methods:

- <code title="get /simple/price">client.simple.price.<a href="./src/resources/simple/price.ts">get</a>({ ...params }) -> PriceGetResponse</code>

## SupportedVsCurrencies

Types:

- <code><a href="./src/resources/simple/supported-vs-currencies.ts">SupportedVsCurrencyGetResponse</a></code>

Methods:

- <code title="get /simple/supported_vs_currencies">client.simple.supportedVsCurrencies.<a href="./src/resources/simple/supported-vs-currencies.ts">get</a>() -> SupportedVsCurrencyGetResponse</code>

## TokenPrice

Types:

- <code><a href="./src/resources/simple/token-price.ts">TokenPriceGetIDResponse</a></code>

Methods:

- <code title="get /simple/token_price/{id}">client.simple.tokenPrice.<a href="./src/resources/simple/token-price.ts">getID</a>(id, { ...params }) -> TokenPriceGetIDResponse</code>

# TokenLists

Types:

- <code><a href="./src/resources/token-lists.ts">TokenListGetAllJsonResponse</a></code>

Methods:

- <code title="get /token_lists/{asset_platform_id}/all.json">client.tokenLists.<a href="./src/resources/token-lists.ts">getAllJson</a>(assetPlatformID) -> TokenListGetAllJsonResponse</code>
