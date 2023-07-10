import { exampleModule } from './example';
import type { HttpClient } from '@/api/types';

export const createApiClient = (httpClient: HttpClient) => ({
  example: exampleModule(httpClient),
});
