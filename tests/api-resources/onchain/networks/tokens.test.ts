// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from 'coingecko';

const client = new Coingecko({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource tokens', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.onchain.networks.tokens.retrieve(
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

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.onchain.networks.tokens.retrieve(
      '0xdac17f958d2ee523a2206206994597c13d831ec7',
      { network: 'eth', include: 'top_pools' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('listTopHolders: only required params', async () => {
    const responsePromise = client.onchain.networks.tokens.listTopHolders(
      '0x6921b130d297cc43754afba22e5eac0fbf8db75b',
      { network: 'base' },
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
  test.skip('listTopHolders: required and optional params', async () => {
    const response = await client.onchain.networks.tokens.listTopHolders(
      '0x6921b130d297cc43754afba22e5eac0fbf8db75b',
      { network: 'base', holders: 'holders' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('listTopPools: only required params', async () => {
    const responsePromise = client.onchain.networks.tokens.listTopPools(
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

  // skipped: tests are disabled for the time being
  test.skip('listTopPools: required and optional params', async () => {
    const response = await client.onchain.networks.tokens.listTopPools(
      '0xdac17f958d2ee523a2206206994597c13d831ec7',
      { network: 'eth', include: 'include', page: 0, sort: 'h24_volume_usd_liquidity_desc' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveInfo: only required params', async () => {
    const responsePromise = client.onchain.networks.tokens.retrieveInfo(
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

  // skipped: tests are disabled for the time being
  test.skip('retrieveInfo: required and optional params', async () => {
    const response = await client.onchain.networks.tokens.retrieveInfo(
      '0xdac17f958d2ee523a2206206994597c13d831ec7',
      { network: 'eth' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMultiple: only required params', async () => {
    const responsePromise = client.onchain.networks.tokens.retrieveMultiple('addresses', { network: 'eth' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMultiple: required and optional params', async () => {
    const response = await client.onchain.networks.tokens.retrieveMultiple('addresses', {
      network: 'eth',
      include: 'top_pools',
    });
  });
});
