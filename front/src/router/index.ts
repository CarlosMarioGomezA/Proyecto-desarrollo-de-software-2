import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    alias: '/login',
    name: 'login',
    component: () => import('@/views/vistaIniciarSesion.vue'),
  },
  {
    path: '/registrar-usuario',
    name: 'RegistarUsuario',
    component: () => import('@/views/vistaRegistrarUsuario.vue')
  },
  {
    path: '/buscar-usuario',
    name: 'BuscarUsuario',
    component: () => import('@/views/vistaBuscarUsuario.vue')
  },
  {
    path: '/actualizar-usuario',
    name: 'ActualizarUsuario',
    component: () => import('@/views/vistaActualizarUsuario.vue')
  },
  {
    path: '/recuperar-pass',
    name: 'RecuperarPassword',
    component: () => import('@/views/vistaRecuperarPassword.vue')
  },
  {
    path: '/preguntas-seguridad',
    name: 'PreguntasSeguridad',
    component: () => import('@/views/vistaPreguntasSeguridad.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
