import { createRouter, createWebHashHistory } from 'vue-router';
import TopView from '../views/TopView.vue';
import MemoView from '../views/MemoView.vue';
import EditView from '../views/EditView.vue';

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
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
