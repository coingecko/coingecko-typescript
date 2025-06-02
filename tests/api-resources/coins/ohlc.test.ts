// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from '@coingecko/coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ohlc', () => {
  // skipped: tests are disabled for the time being
  test.skip('get: only required params', async () => {
    const responsePromise = client.coins.ohlc.get('bitcoin', { days: '1', vs_currency: 'usd' });
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
    const response = await client.coins.ohlc.get('bitcoin', {
      days: '1',
      vs_currency: 'usd',
      interval: 'daily',
      precision: 'full',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('getRange: only required params', async () => {
    const responsePromise = client.coins.ohlc.getRange('bitcoin', {
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
  test.skip('getRange: required and optional params', async () => {
    const response = await client.coins.ohlc.getRange('bitcoin', {
      from: 0,
      interval: 'daily',
      to: 0,
      vs_currency: 'usd',
    });
  });
});
