import type { HttpClient } from '@/api/types';

export const exampleModule = (httpClient: HttpClient) => ({
  loadExampleList() {
    return httpClient.get('/v1/examples');
  },
});
