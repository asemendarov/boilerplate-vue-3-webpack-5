import qs from 'qs';
import axios from 'axios';
import { createApiClient } from '@/api/modules';
import { registerInterceptors } from '@/api/interceptors';

export const httpClient = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  paramsSerializer: {
    serialize: (p) => qs.stringify(p, { arrayFormat: 'brackets' }),
  },
});

const apiClient = createApiClient(httpClient);

registerInterceptors(httpClient, apiClient);

export const useApi = () => apiClient;

export * from './enums';
export * from './types';
