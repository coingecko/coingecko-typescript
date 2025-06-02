// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from '@coingecko/coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tickers', () => {
  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = client.exchanges.tickers.get('binance');
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
      client.exchanges.tickers.get(
        'binance',
        {
          coin_ids: 'coin_ids',
          depth: true,
          dex_pair_format: 'contract_address',
          include_exchange_logo: true,
          order: 'trust_score_desc',
          page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Coingecko.NotFoundError);
  });
});
