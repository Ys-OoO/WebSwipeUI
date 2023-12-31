import axios, { AxiosError, AxiosResponse } from 'axios';
import errorCatcher, { Response } from './errorCatcher';

//扩展合并 AxiosRequestConfig
declare module 'axios' {
  export interface AxiosRequestConfig {
    noToken?: boolean;
    noValidate?: boolean;
    noGlobalMessage?: boolean;
  }
}

const requestInstance = axios.create({
  baseURL: 'http://localhost:8080',
  timeout: 15000,
});

requestInstance.interceptors.request.use((requestConfig) => {
  //token
  if (!requestConfig.noToken) {
    const webSwipeToken = localStorage.getItem('webSwipeToken');

    if (!webSwipeToken) {
      // message.error('请重新登陆');
    } else {
      requestConfig.headers.set('webSwipeToken', webSwipeToken);
    }
  }

  return requestConfig;
});

requestInstance.interceptors.response.use(
  (response) => {
    const config = response.config;
    const data = response.data as Response;
    //validate
    if (!config.noValidate) {
      if (data.code !== 0) errorCatcher(false, response, config.noGlobalMessage);
    }
    return (data as AxiosResponse) || response;
  },
  (error: AxiosError) => {
    if (error.message === 'cancel') {
      throw error;
    }
    if (error.config?.url === '/user/current') {
      throw error;
    }
    errorCatcher(true, error.response as AxiosResponse<Response>, error.config?.noGlobalMessage);
    return;
  },
);

export default requestInstance;
