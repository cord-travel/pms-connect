import { IBaseTokenStore } from '.';
import { IGeneratedTokens } from '../index';
export function createStore(
  cb: (tokens: IGeneratedTokens) => void
): IBaseTokenStore {
  return {
    setTokens: cb
  };
}
