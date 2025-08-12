// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from '@coingecko/coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource markets', () => {
  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.coins.markets.get({ vs_currency: 'usd' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.coins.markets.get({
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
