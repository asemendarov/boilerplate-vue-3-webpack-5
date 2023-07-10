import { defineStore } from 'pinia';
import { useApi } from '@/api';
import { StoreId } from '@/store';
import type { ExampleState } from './types';

const api = useApi();

export const useExampleStore = defineStore(StoreId.EXAMPLE, {
  state: (): ExampleState => ({
    examples: undefined,
  }),
  getters: {
    // pass
  },
  actions: {
    async loadExampleList() {
      try {
        await api.example.loadExampleList();
      } catch (error) {
        console.error('store', error);
      }
    },
  },
});

export * from './enums';
export * from './types';
