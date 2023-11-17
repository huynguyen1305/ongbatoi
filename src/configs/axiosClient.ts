/* eslint-disable no-param-reassign */
import type {
  AxiosError,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from 'axios';

import axios from 'axios';

const baseUrl = 'https://ongbatoi2.ghost.io/ghost/api/content';

export const defaultConfigAxios: CreateAxiosDefaults = {
  timeout: 30000,
  baseURL: `${baseUrl}`,
  headers: {
    common: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  },
};

export const axiosClient = axios.create(defaultConfigAxios);

export const onRequestSuccess = async (config: InternalAxiosRequestConfig) => {
  // const accessToken = localStorage.getItem('accessToken');
  // config.headers = config.headers ?? {};
  // if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  config.params = { ...config.params, key: '9bc14f97b360251d6b64d68575', include: 'tags' };
  return config;
};

export const onRequestError = (error: AxiosError | Error): Promise<AxiosError> =>
  Promise.reject(error);

export const onResponseSuccess = (response: AxiosResponse) => response.data;

export const onResponseError = async (error: AxiosError) => {
  if (error.response?.status !== 401) {
    const errMessage = error.response?.data || error?.response || error;
    return Promise.reject(errMessage);
  }
  return error;
};

axiosClient.interceptors.request.use(onRequestSuccess, onRequestError);

axiosClient.interceptors.response.use(onResponseSuccess, onResponseError);
