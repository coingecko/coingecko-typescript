// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from '@coingecko/coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource topTraders', () => {
  // Mock server tests are disabled
  test.skip('get: only required params', async () => {
    const responsePromise = client.onchain.networks.tokens.topTraders.get(
      '0x6921b130d297cc43754afba22e5eac0fbf8db75b',
      { network_id: 'base' },
    );
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
    const response = await client.onchain.networks.tokens.topTraders.get(
      '0x6921b130d297cc43754afba22e5eac0fbf8db75b',
      {
        network_id: 'base',
        include_address_label: true,
        sort: 'realized_pnl_usd_desc',
        traders: 'traders',
      },
    );
  });
});
