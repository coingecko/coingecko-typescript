// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from '@coingecko/coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource dexes', () => {
  // Prism tests are disabled
  test.skip('get', async () => {
    const responsePromise = client.onchain.networks.dexes.get('eth');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('get: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.onchain.networks.dexes.get('eth', { page: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Coingecko.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('getPools: only required params', async () => {
    const responsePromise = client.onchain.networks.dexes.getPools('sushiswap', { network: 'eth' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('getPools: required and optional params', async () => {
    const response = await client.onchain.networks.dexes.getPools('sushiswap', {
      network: 'eth',
      include: 'include',
      include_gt_community_data: true,
      page: 0,
      sort: 'h24_tx_count_desc',
    });
  });
});
