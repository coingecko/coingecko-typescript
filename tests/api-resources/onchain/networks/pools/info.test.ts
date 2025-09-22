// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from '@coingecko/coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource info', () => {
  // Prism tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.onchain.networks.pools.info.get(
      '0x06da0fd433c1a5d7a4faa01111c044910a184553',
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
    const response = await client.onchain.networks.pools.info.get(
      '0x06da0fd433c1a5d7a4faa01111c044910a184553',
      { network: 'eth', include: 'pool' },
    );
  });
});
