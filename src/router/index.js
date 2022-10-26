import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MemoView from '../views/MemoView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/memo',
    name: 'memo',
    component: MemoView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
