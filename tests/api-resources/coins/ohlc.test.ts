// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from 'coingecko';

const client = new Coingecko({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource ohlc', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveByID: only required params', async () => {
    const responsePromise = client.coins.ohlc.retrieveByID('bitcoin', { days: '1', vs_currency: 'usd' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveByID: required and optional params', async () => {
    const response = await client.coins.ohlc.retrieveByID('bitcoin', {
      days: '1',
      vs_currency: 'usd',
      interval: 'daily',
      precision: 'full',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveRangeByID: only required params', async () => {
    const responsePromise = client.coins.ohlc.retrieveRangeByID('bitcoin', {
      from: 0,
      interval: 'daily',
      to: 0,
      vs_currency: 'usd',
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
  test.skip('retrieveRangeByID: required and optional params', async () => {
    const response = await client.coins.ohlc.retrieveRangeByID('bitcoin', {
      from: 0,
      interval: 'daily',
      to: 0,
      vs_currency: 'usd',
    });
  });
});
