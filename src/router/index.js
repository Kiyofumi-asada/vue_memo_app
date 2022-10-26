import { createRouter, createWebHashHistory } from 'vue-router';
import TopView from '../views/TopView.vue';
import MemoView from '../views/MemoView.vue';

const routes = [
  {
    path: '/',
    name: 'top',
    component: TopView,
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
