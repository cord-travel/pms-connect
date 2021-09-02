import axios, { AxiosInstance, AxiosError } from 'axios';
import {
  BaseRequestDriver,
  IBaseRequestDriver,
  IRequestDriverOptions
} from './BaseRequetDriver';
export interface IRequestDriverRest extends IBaseRequestDriver {
  http: AxiosInstance;
}

export class RestRequestDriver extends BaseRequestDriver {
  private _http: AxiosInstance;

  private defaultOptions: IRequestDriverOptions = {
    refreshToken: null,
    accessToken: null,
    baseUrl: '/'
  };

  constructor(options: IRequestDriverOptions) {
    super(options);
    this.options = { ...this.defaultOptions, ...options };

    this._http = this.creareHttp();

    this.initiateErrorHander();
  }

  creareHttp(): AxiosInstance {
    return axios.create({
      baseURL: this.baseUrl,
      timeout: 10000,
      headers: { Authorization: `Bearer ${this.accessToken}` }
    });
  }

  public get http(): AxiosInstance {
    return this._http;
  }

  setHeaderToken() {
    this._http.defaults.headers['Authorization'] = `Bearer ${this.accessToken}`;
  }

  async generteAccessToken() {
    if (this.options.generteAccessToken) {
      const tokens = await this.options.generteAccessToken(this.refreshToken);

      await this.saveTokens(tokens);
      this.setHeaderToken();
      return tokens;
    }

    throw new Error(`RestRequestDriver : no generteAccessToken function`);
  }

  initiateErrorHander() {
    this._http.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (error && !error.response) {
          throw error;
        }
        if (error.response && error.response.status !== 401) {
          throw error;
        }

        // If error 401 then create new access token and retry the previous request

        let originalRequest = error.config;
        try {
          const data = await this.generteAccessToken();

          if (!data) {
            return Promise.reject('Cant create refresh token');
          }

          originalRequest.headers[
            'Authorization'
          ] = `Bearer ${this.accessToken}`;

          return this._http(originalRequest);
        } catch (e) {
          return Promise.reject(e);
        }
      }
    );
  }
}
