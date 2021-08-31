import { IBaseTokenStore, createStore } from '.';
import { RestRequestDriver } from '../request';

test('Custom Token store  ', async () => {
  let imaginaryDB: any = { at: '', rt: '' };

  // Request

  let restClient = new RestRequestDriver({
    refreshToken: 'old rt',
    baseUrl: '',
    generteAccessToken: () => {
      return { access_token: 'new at', refresh_token: 'new rt' };
    }
  });

  // Set custom token store

  let customStore: IBaseTokenStore = {
    setTokens: async (token) => {
      imaginaryDB = { at: token.access_token, rt: token.refresh_token };
    }
  };

  restClient.setTokenStore(customStore);

  await restClient.generteAccessToken();

  expect(imaginaryDB.at).toBe('new at');
});

test('Custom store with creatStore utility function', async () => {
  let xyzDB: any = { access_token: '', refresh_token: '' };

  // Request

  let restClient = new RestRequestDriver({
    refreshToken: 'xyz rt',
    baseUrl: '',
    generteAccessToken: () => {
      return { access_token: 'xyz at', refresh_token: 'xyz rt' };
    }
  });

  let xyzTokenStore = createStore((tokens) => {
    xyzDB = tokens;
  });

  restClient.setTokenStore(xyzTokenStore);

  await restClient.generteAccessToken();

  expect(xyzDB.access_token).toBe('xyz at');
});
