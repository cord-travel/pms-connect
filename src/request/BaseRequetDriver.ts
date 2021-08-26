import { ITokenValue , IGeneratedTokens } from '../index'
import { IBaseTokenStore, StoreInMemory} from '../store'
export interface IRequestDriverOptions {
    
    refreshToken: ITokenValue
    accessToken?: ITokenValue
    baseUrl?: string
    generteAccessToken?(refreshToken: ITokenValue): Promise<IGeneratedTokens> | IGeneratedTokens
}

export interface IBaseRequestDriver {
    tokenStore:IBaseTokenStore
    refreshToken: ITokenValue
    accessToken?: ITokenValue
    baseUrl: string
    generteAccessToken(): Promise<IGeneratedTokens> | IGeneratedTokens | Promise<null> | void
    setTokenStore(token:IBaseTokenStore): void
    
}

export abstract class BaseRequestDriver implements IBaseRequestDriver {

    accessToken: ITokenValue
    refreshToken: ITokenValue
    baseUrl: string = "/"

    tokenStore: IBaseTokenStore = new StoreInMemory()

    protected options: IRequestDriverOptions;

 
 
    constructor(options: IRequestDriverOptions) {

        this.options = options
        this.accessToken = options.accessToken
        this.refreshToken = options.refreshToken
        this.baseUrl = options.baseUrl || '/'
        
    }
    generteAccessToken() {
        throw new Error("Method not implemented.");
    }

    setTokenStore(_tokenStore: IBaseTokenStore) {

        this.tokenStore = _tokenStore;
        
    }
 
    async saveTokens(tokens: IGeneratedTokens) {

        this.accessToken = tokens.access_token || this.accessToken
        this.refreshToken = tokens.refresh_token || this.refreshToken

        await this.tokenStore.setTokens(tokens)
        
    }
    

}

