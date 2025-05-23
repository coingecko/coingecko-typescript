// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from 'coingecko';

const client = new Coingecko({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource pools', () => {
  // skipped: tests are disabled for the time being
  test.skip('listTrendingSearch', async () => {
    const responsePromise = client.onchain.pools.listTrendingSearch();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('listTrendingSearch: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.onchain.pools.listTrendingSearch(
        { include: 'include', pools: 0 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Coingecko.NotFoundError);
  });

  // skipped: tests are disabled for the time being
  test.skip('megafilter', async () => {
    const responsePromise = client.onchain.pools.megafilter();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('megafilter: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.onchain.pools.megafilter(
        {
          buy_tax_percentage_max: 0,
          buy_tax_percentage_min: 0,
          buys_duration: '5m',
          buys_max: 0,
          buys_min: 0,
          checks: 'checks',
          dexes: 'dexes',
          fdv_usd_max: 0,
          fdv_usd_min: 0,
          h24_volume_usd_max: 0,
          h24_volume_usd_min: 0,
          include: 'include',
          networks: 'networks',
          page: 0,
          pool_created_hour_max: 0,
          pool_created_hour_min: 0,
          reserve_in_usd_max: 0,
          reserve_in_usd_min: 0,
          sell_tax_percentage_max: 0,
          sell_tax_percentage_min: 0,
          sells_duration: '5m',
          sells_max: 0,
          sells_min: 0,
          sort: 'm5_trending',
          tx_count_duration: '5m',
          tx_count_max: 0,
          tx_count_min: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Coingecko.NotFoundError);
  });
});
