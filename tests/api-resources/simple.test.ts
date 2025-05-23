// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from 'coingecko';

const client = new Coingecko({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource simple', () => {
  // skipped: tests are disabled for the time being
  test.skip('getPrice: only required params', async () => {
    const responsePromise = client.simple.getPrice({ vs_currencies: 'vs_currencies' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getPrice: required and optional params', async () => {
    const response = await client.simple.getPrice({
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

  // skipped: tests are disabled for the time being
  test.skip('getTokenPrice: only required params', async () => {
    const responsePromise = client.simple.getTokenPrice('ethereum', {
      contract_addresses: 'contract_addresses',
      vs_currencies: 'vs_currencies',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getTokenPrice: required and optional params', async () => {
    const response = await client.simple.getTokenPrice('ethereum', {
      contract_addresses: 'contract_addresses',
      vs_currencies: 'vs_currencies',
      include_24hr_change: true,
      include_24hr_vol: true,
      include_last_updated_at: true,
      include_market_cap: true,
      precision: 'full',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('listSupportedCurrencies', async () => {
    const responsePromise = client.simple.listSupportedCurrencies();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
