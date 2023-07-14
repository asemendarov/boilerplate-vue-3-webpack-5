import { defineAsyncComponent } from 'vue';
import { LayoutName } from './enums';

export const DefaultLayout = defineAsyncComponent(() => import('./DefaultLayout.vue'));
export const ErrorLayout = defineAsyncComponent(() => import('./ErrorLayout.vue'));
export const EmptyLayout = defineAsyncComponent(() => import('./EmptyLayout.vue'));

export const layoutMatcher = {
  [LayoutName.DEFAULT]: DefaultLayout,
  [LayoutName.ERROR]: ErrorLayout,
  [LayoutName.EMPTY]: EmptyLayout,
};

export * from './enums';
