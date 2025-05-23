// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from 'coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource price', () => {
  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = client.simple.price.get({ vs_currencies: 'vs_currencies' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: required and optional params', async () => {
    const response = await client.simple.price.get({
      vs_currencies: 'vs_currencies',
      ids: 'ids',
      include_24hr_change: true,
      include_24hr_vol: true,
      include_last_updated_at: true,
      include_market_cap: true,
      include_tokens: 'top',
      names: 'names',
      precision: 'full',
      symbols: 'symbols',
    });
  });
});
