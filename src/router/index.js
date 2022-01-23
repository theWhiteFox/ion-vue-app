import { createRouter, createWebHistory } from "@ionic/vue-router";
import Home from '../pages/Home.vue'
import Page from '../pages/Page.vue'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/page',
    name: 'Page',
    component: Page
  },
  {
    path: "/memories",
    component: () => import("../pages/MemoriesPage.vue"),
  },
  {
    path: "/memories/:id",
    component: () => import("../pages/MemoryDetailsPage.vue"),
  },
  {
    path: "/memories/add",
    component: () => import("../pages/AddMemoryPage.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;


import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/Home.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;