// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from '@coingecko/coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pools', () => {
  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.onchain.networks.tokens.pools.get(
      '0xdac17f958d2ee523a2206206994597c13d831ec7',
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

  // Prism tests are disabled
  test.skip('get: required and optional params', async () => {
    const response = await client.onchain.networks.tokens.pools.get(
      '0xdac17f958d2ee523a2206206994597c13d831ec7',
      { network: 'eth', include: 'include', page: 0, sort: 'h24_volume_usd_liquidity_desc' },
    );
  });
});
