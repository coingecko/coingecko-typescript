// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from '@coingecko/coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource publicTreasury', () => {
  // Mock server tests are disabled
  test.skip('getCoinID: only required params', async () => {
    const responsePromise = client.publicTreasury.getCoinID('bitcoin', { entity: 'companies' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getCoinID: required and optional params', async () => {
    const response = await client.publicTreasury.getCoinID('bitcoin', {
      entity: 'companies',
      order: 'total_holdings_usd_desc',
      page: 1,
      per_page: 250,
    });
  });

  // Mock server tests are disabled
  test.skip('getEntityID', async () => {
    const responsePromise = client.publicTreasury.getEntityID('strategy');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getEntityID: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.publicTreasury.getEntityID(
        'strategy',
        {
          holding_amount_change: 'holding_amount_change',
          holding_change_percentage: 'holding_change_percentage',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Coingecko.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('getHoldingChart: only required params', async () => {
    const responsePromise = client.publicTreasury.getHoldingChart('bitcoin', {
      entity_id: 'strategy',
      days: 'days',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getHoldingChart: required and optional params', async () => {
    const response = await client.publicTreasury.getHoldingChart('bitcoin', {
      entity_id: 'strategy',
      days: 'days',
      include_empty_intervals: true,
    });
  });

  // Mock server tests are disabled
  test.skip('getTransactionHistory', async () => {
    const responsePromise = client.publicTreasury.getTransactionHistory('strategy');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('getTransactionHistory: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.publicTreasury.getTransactionHistory(
        'strategy',
        {
          coin_ids: 'coin_ids',
          order: 'date_desc',
          page: 0,
          per_page: 0,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Coingecko.NotFoundError);
  });
});
