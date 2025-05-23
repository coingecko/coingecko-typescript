// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from 'coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ohlcv', () => {
  // skipped: tests are disabled for the time being
  test.skip('getTimeframe: only required params', async () => {
    const responsePromise = client.onchain.networks.pools.ohlcv.getTimeframe('day', {
      network: 'eth',
      pool_address: '0x06da0fd433c1a5d7a4faa01111c044910a184553',
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
  test.skip('getTimeframe: required and optional params', async () => {
    const response = await client.onchain.networks.pools.ohlcv.getTimeframe('day', {
      network: 'eth',
      pool_address: '0x06da0fd433c1a5d7a4faa01111c044910a184553',
      token: 'token',
      aggregate: 'aggregate',
      before_timestamp: 0,
      currency: 'usd',
      limit: 0,
    });
  });
});
