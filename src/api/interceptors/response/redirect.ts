import axios from 'axios';
import { HttpCodes } from '@/api/enums';
import type { HttpClient, ApiClient } from '@/api/types';

export const registerRedirectInterceptor = (httpClient: HttpClient, apiClient: ApiClient) => {
  httpClient.interceptors.response.use(
    undefined,
    async (error) => {
      if (!axios.isAxiosError(error)) {
        // ...

        throw error;
      }

      console.error('redirect interceptor', error);

      const status = error.response?.status;

      if (status == null) throw error;

      if (status >= HttpCodes.INTERNAL_SERVER_ERROR) {
        // ...

        throw error;
      }

      if (status === HttpCodes.FORBIDDEN) {
        // ...

        throw error;
      }

      if (status === HttpCodes.UNAUTHORIZED) {
        // ...

        throw error;
      }

      throw error;
    },
  );
};
