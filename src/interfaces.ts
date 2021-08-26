export type ITokenValue = string | number | null | undefined
export interface IGeneratedTokens {
    refresh_token?: ITokenValue
    access_token?: ITokenValue
}