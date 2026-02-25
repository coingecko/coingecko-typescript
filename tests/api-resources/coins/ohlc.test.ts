// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from '@coingecko/coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ohlc', () => {
  // Mock server tests are disabled
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

  // Mock server tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.coins.ohlc.get('bitcoin', {
      days: '1',
      vs_currency: 'usd',
      interval: 'daily',
      precision: 'full',
    });
  });

  // Mock server tests are disabled
  test.skip('getRange: only required params', async () => {
    const responsePromise = client.coins.ohlc.getRange('bitcoin', {
      from: 'from',
      interval: 'daily',
      to: 'to',
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

  // Mock server tests are disabled
  test.skip('getRange: required and optional params', async () => {
    const response = await client.coins.ohlc.getRange('bitcoin', {
      from: 'from',
      interval: 'daily',
      to: 'to',
      vs_currency: 'usd',
    });
  });
});
