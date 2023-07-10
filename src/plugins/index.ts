import store from '@/store';
import router from '@/router';
import localization from '@/localization';
import type { App } from 'vue';

export function registerPlugins(app: App) {
  app.use(router)
    .use(store)
    .use(localization);
}
