import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/dashboard/DashboardLogin.vue'),
  },
  {
    path: '/dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    children: [{
      path: 'products',
      component: () => import('@/views/dashboard/DashboardProducts.vue'),
    },
    {
      path: 'orders',
      component: () => import('@/views/dashboard/DashboardOrders.vue'),
    },
    {
      path: 'coupon',
      component: () => import('@/views/dashboard/DashboardCoupon.vue'),
    },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
