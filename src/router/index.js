import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/UserHome.vue'),
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/UserListProducts.vue'),
  },
  {
    path: '/location',
    component: () => import('../views/UserLocation.vue'),
  },
  {
    path: '/adopt',
    component: () => import('../views/UserAdoptPage.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes,
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
