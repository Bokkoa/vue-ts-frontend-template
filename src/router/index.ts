import { createRouter, createWebHashHistory } from 'vue-router'

import fooRouter from '@/modules/foo/router';
import Home from '@/views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/foo',
    ...fooRouter
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
