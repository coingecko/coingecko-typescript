// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from 'coingecko';

const client = new Coingecko({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource list', () => {
  // skipped: tests are disabled for the time being
  test.skip('all', async () => {
    const responsePromise = client.coins.list.all();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('all: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.coins.list.all(
        { include_platform: true, status: 'active' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Coingecko.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('recentlyAdded', async () => {
    const responsePromise = client.coins.list.recentlyAdded();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('topGainersLosers: only required params', async () => {
    const responsePromise = client.coins.list.topGainersLosers({ vs_currency: 'usd' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('topGainersLosers: required and optional params', async () => {
    const response = await client.coins.list.topGainersLosers({
      vs_currency: 'usd',
      duration: '1h',
      top_coins: '300',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('withMarketData: only required params', async () => {
    const responsePromise = client.coins.list.withMarketData({ vs_currency: 'usd' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('withMarketData: required and optional params', async () => {
    const response = await client.coins.list.withMarketData({
      vs_currency: 'usd',
      category: 'layer-1',
      ids: 'ids',
      include_tokens: 'top',
      locale: 'ar',
      names: 'names',
      order: 'market_cap_asc',
      page: 0,
      per_page: 0,
      precision: 'full',
      price_change_percentage: 'price_change_percentage',
      sparkline: true,
      symbols: 'symbols',
    });
  });
});
