import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    alias: '/login',
    name: 'login',
    component: () => import('@/views/vistaIniciarSesion.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
