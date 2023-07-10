import type { AxiosInstance } from 'axios';
import type { createApiClient } from '@/api/modules';

export type HttpClient = AxiosInstance;
export type ApiClient = ReturnType<typeof createApiClient>;
