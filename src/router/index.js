import Vue from 'vue';
import Auth from './Auth';
import Store from '@/store';
import VueRouter from 'vue-router';
import Dashboard from './Dashboard';
import Home from '../views/Static/Home.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/Static/About.vue')
  },
  Auth,
  Dashboard
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  // Check if the user is logged i
  const isUserLoggedIn = Store.getters['Auth/isAuthenticated']
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isUserLoggedIn) {
      Store.dispatch('Auth/logOut')
      next({
        path: '/auth/login',
        query: {
          redirect: to.fullPath
        }
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router