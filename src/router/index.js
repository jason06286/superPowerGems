import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/frontDesk',
    name: 'frontDesk',
    component: () => import('@/views/frontDesk/FrontDesk.vue'),
    children: [{
      path: 'products',
      component: () => import('@/views/frontDesk/FrontDeskProducts.vue'),
    },
    {
      path: 'product/:id',
      component: () => import('@/views/frontDesk/FrontDeskProduct.vue'),
    },
    {
      path: 'quiz',
      component: () => import('@/views/frontDesk/FrontDeskQuiz.vue'),
    },
    {
      path: 'coupon',
      component: () => import('@/views/frontDesk/FrontDeskCoupon.vue'),
    },
    {
      path: 'carts',
      component: () => import('@/views/frontDesk/FrontDeskCarts.vue'),
    },
    {
      path: 'pay/:id',
      component: () => import('@/views/frontDesk/FrontDeskPay.vue'),
    },
    ],
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
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'Home',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
