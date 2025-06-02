// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from '@coingecko/coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource exchanges', () => {
  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = client.derivatives.exchanges.get();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.derivatives.exchanges.get(
        { order: 'name_asc', page: 0, per_page: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Coingecko.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getID', async () => {
    const responsePromise = client.derivatives.exchanges.getID('binance_futures');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getID: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.derivatives.exchanges.getID(
        'binance_futures',
        { include_tickers: 'all' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Coingecko.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getList', async () => {
    const responsePromise = client.derivatives.exchanges.getList();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
