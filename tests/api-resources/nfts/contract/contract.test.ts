// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Coingecko from '@coingecko/coingecko-typescript';

const client = new Coingecko({
  proAPIKey: 'My Pro API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource contract', () => {
  // Mock server tests are disabled
  test.skip('getContractAddress: only required params', async () => {
    const responsePromise = client.nfts.contract.getContractAddress(
      '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
      { asset_platform_id: 'ethereum' },
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
  test.skip('getContractAddress: required and optional params', async () => {
    const response = await client.nfts.contract.getContractAddress(
      '0xBd3531dA5CF5857e7CfAA92426877b022e612cf8',
      { asset_platform_id: 'ethereum' },
    );
  });
});
