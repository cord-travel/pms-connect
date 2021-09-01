import { ITokenValue, IGeneratedTokens } from '../index';
import { IBaseTokenStore } from './BaseStore';

interface IMemoryStore {
  at: ITokenValue;
  rt: ITokenValue;
}

export class StoreInMemory implements IBaseTokenStore {
  store: IMemoryStore = { at: '', rt: '' };

  setTokens(
    tokens: IGeneratedTokens
  ): void | IGeneratedTokens | Promise<IGeneratedTokens> | Promise<void> {
    this.store = { at: tokens.access_token, rt: tokens.refresh_token };
  }
}
