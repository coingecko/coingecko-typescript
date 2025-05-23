// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from 'coingecko';

const client = new Coingecko({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource pools', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.onchain.networks.pools.retrieve(
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.onchain.networks.pools.retrieve(
      '0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640',
      { network: 'eth', include: 'include' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('listRecentTrades: only required params', async () => {
    const responsePromise = client.onchain.networks.pools.listRecentTrades(
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

  // skipped: tests are disabled for the time being
  test.skip('listRecentTrades: required and optional params', async () => {
    const response = await client.onchain.networks.pools.listRecentTrades(
      '0x06da0fd433c1a5d7a4faa01111c044910a184553',
      { network: 'eth', token: 'token', trade_volume_in_usd_greater_than: 0 },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('listTop', async () => {
    const responsePromise = client.onchain.networks.pools.listTop('eth');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTop: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.onchain.networks.pools.listTop(
        'eth',
        { include: 'include', page: 0, sort: 'h24_tx_count_desc' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Coingecko.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveInfo: only required params', async () => {
    const responsePromise = client.onchain.networks.pools.retrieveInfo(
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

  // skipped: tests are disabled for the time being
  test.skip('retrieveInfo: required and optional params', async () => {
    const response = await client.onchain.networks.pools.retrieveInfo(
      '0x06da0fd433c1a5d7a4faa01111c044910a184553',
      { network: 'eth' },
    );
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMultiple: only required params', async () => {
    const responsePromise = client.onchain.networks.pools.retrieveMultiple('addresses', { network: 'eth' });
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
    const response = await client.onchain.networks.pools.retrieveMultiple('addresses', {
      network: 'eth',
      include: 'include',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveOhlcv: only required params', async () => {
    const responsePromise = client.onchain.networks.pools.retrieveOhlcv('day', {
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
  test.skip('retrieveOhlcv: required and optional params', async () => {
    const response = await client.onchain.networks.pools.retrieveOhlcv('day', {
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
