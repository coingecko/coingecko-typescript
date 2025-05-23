// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from 'coingecko';

const client = new Coingecko({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource contract', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieveByAddress: only required params', async () => {
    const responsePromise = client.coins.contract.retrieveByAddress(
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      { id: 'ethereum' },
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
  test.skip('retrieveByAddress: required and optional params', async () => {
    const response = await client.coins.contract.retrieveByAddress(
      '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      { id: 'ethereum' },
    );
  });
});
