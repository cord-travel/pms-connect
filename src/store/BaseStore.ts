import { ITokenValue, IGeneratedTokens } from '../index';
export interface IBaseTokenStore {
  /**
   * Save both access token and refresh token
   * @param tokens
   */
  setTokens?(
    tokens: IGeneratedTokens
  ): Promise<IGeneratedTokens> | Promise<void> | void | IGeneratedTokens;
}
