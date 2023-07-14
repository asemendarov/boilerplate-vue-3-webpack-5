import 'vue-router';
import type { LayoutName } from '@/layouts';

export {};

declare module 'vue-router' {
  interface RouteMeta {
    layout?: LayoutName;
  }
}
