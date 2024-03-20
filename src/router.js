import { createWebHistory, createRouter } from 'vue-router';
import TheList from './components/TheList.vue'
import TheHome from './components/TheHome.vue'
import TheDetail from './components/TheDetail.vue'
import TheAuthor from './components/TheAuthor.vue'
import TheComment from './components/TheComment.vue'

const routes = [
  {
    path: '/',
    component: TheHome,
  },
  {
    path: '/list',
    component: TheList,
  },
  {
    path: '/Detail/:id',
    component: TheDetail,
    children: [
      {
        path: 'author',
        component: TheAuthor,
      },
      {
        path: 'comment',
        component: TheComment,
      },
    ]
  },
  {
    path: '/error',
    component: TheDetail,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;