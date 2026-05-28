// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from '@coingecko/coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource publicTreasury', () => {
  // Mock server tests are disabled
  test.skip('getCoinID: only required params', async () => {
    const responsePromise = client.publicTreasury.getCoinID('coin_id', { entity: 'companies' });
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
    const response = await client.publicTreasury.getCoinID('coin_id', {
      entity: 'companies',
      order: 'total_holdings_usd_desc',
      page: 0,
      per_page: 0,
    });
  });

  // Mock server tests are disabled
  test.skip('getEntityID', async () => {
    const responsePromise = client.publicTreasury.getEntityID('entity_id');
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
        'entity_id',
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
    const responsePromise = client.publicTreasury.getHoldingChart('coin_id', {
      entity_id: 'entity_id',
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
    const response = await client.publicTreasury.getHoldingChart('coin_id', {
      entity_id: 'entity_id',
      days: 'days',
      include_empty_intervals: true,
    });
  });

  // Mock server tests are disabled
  test.skip('getTransactionHistory', async () => {
    const responsePromise = client.publicTreasury.getTransactionHistory('entity_id');
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
        'entity_id',
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
