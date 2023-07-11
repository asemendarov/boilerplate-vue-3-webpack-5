import store from '@/store';
import router from '@/router';
import i18n from '@/i18n';
import type { App } from 'vue';

export function registerPlugins(app: App) {
  app.use(router)
    .use(store)
    .use(i18n);
}
