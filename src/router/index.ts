import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './routes';

const router = createRouter({
  history: createWebHistory(BASE_URL),
  routes,
});

export default router;
export * from './enums';
