// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from '@coingecko/coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pools', () => {
  // skipped: tests are disabled for the time being
  test.skip('get', async () => {
    const responsePromise = client.onchain.networks.pools.get('eth');
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
      client.onchain.networks.pools.get(
        'eth',
        { include: 'include', page: 0, sort: 'h24_tx_count_desc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Coingecko.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('getAddress: only required params', async () => {
    const responsePromise = client.onchain.networks.pools.getAddress(
      '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640',
      { network: 'eth' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('getAddress: required and optional params', async () => {
    const response = await client.onchain.networks.pools.getAddress(
      '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640',
      { network: 'eth', include: 'include', include_volume_breakdown: true },
    );
  });
});
