# Replace `YOUR_API_KEY_HERE` with your CoinGecko Pro API key.
API_KEY := CG-x6qBM1ueJ47Fetaa8AyvsUZX

# Replace `pro` with `demo` to access the CoinGecko Demo API.
CG_ENV := pro

run:
	@npx -y @modelcontextprotocol/inspector \
	node ./packages/mcp-server/dist/index.js \
	-e COINGECKO_PRO_API_KEY=$(API_KEY) \
	-e COINGECKO_ENVIRONMENT=$(CG_ENV)

build:
	@yarn
	@yarn build

.PHONY: run build