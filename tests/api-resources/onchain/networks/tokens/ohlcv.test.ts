// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from '@coingecko/coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ohlcv', () => {
  // Prism tests are disabled
  test.skip('getTimeframe: only required params', async () => {
    const responsePromise = client.onchain.networks.tokens.ohlcv.getTimeframe('day', {
      network: 'solana',
      token_address: 'So11111111111111111111111111111111111111112',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getTimeframe: required and optional params', async () => {
    const response = await client.onchain.networks.tokens.ohlcv.getTimeframe('day', {
      network: 'solana',
      token_address: 'So11111111111111111111111111111111111111112',
      aggregate: 'aggregate',
      before_timestamp: 0,
      currency: 'usd',
      include_empty_intervals: true,
      include_inactive_source: true,
      limit: 0,
    });
  });
});
