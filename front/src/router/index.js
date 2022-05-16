import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    alias: '/login',
    name: 'login',
    component: () => import('@/views/IniciarSesion.vue'),
  },
  {
    path: '/inicio-admin',
    name: 'InicioAdmin',
    component: () => import('@/views/vistasGerente/Home.vue')
  },
  {
    path: '/inicio-coordinador',
    name: 'InicioCoordinador',
    component: () => import('@/views/vistasCoordinador/Home.vue')
  },
  {
    path: '/registrar-usuario',
    name: 'RegistarUsuario',
    component: () => import('@/views/vistasGerente/RegistrarUsuario.vue')
  },
  {
    path: '/buscar-usuario',
    name: 'BuscarUsuario',
    component: () => import('@/views/vistasGerente/BuscaUsuario.vue')
  },
  {
    path: '/recuperar-pass',
    name: 'RecuperarPassword',
    component: () => import('@/views/RecuperarPassword.vue')
  },
  {
    path: '/preguntas-seguridad',
    name: 'PreguntasSeguridad',
    component: () => import('@/views/PreguntasSeguridad.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
