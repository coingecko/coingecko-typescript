// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from 'coingecko';

const client = new Coingecko({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource contract', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.nfts.contract.retrieve('0xBd3531dA5CF5857e7CfAA92426877b022e612cf8', {
      asset_platform_id: 'ethereum',
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
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.nfts.contract.retrieve('0xBd3531dA5CF5857e7CfAA92426877b022e612cf8', {
      asset_platform_id: 'ethereum',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieveMarketChart: only required params', async () => {
    const responsePromise = client.nfts.contract.retrieveMarketChart(
      '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
      { asset_platform_id: 'ethereum', days: 'days' },
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
  test.skip('retrieveMarketChart: required and optional params', async () => {
    const response = await client.nfts.contract.retrieveMarketChart(
      '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
      { asset_platform_id: 'ethereum', days: 'days' },
    );
  });
});
