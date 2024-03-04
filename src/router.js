import { createWebHistory, createRouter } from 'vue-router';
import TheList from './components/TheList.vue'
import TheHome from './components/TheHome.vue'

const routes = [
  {
    path: '/',
    component: TheHome,
  },
  {
    path: '/list',
    component: TheList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;