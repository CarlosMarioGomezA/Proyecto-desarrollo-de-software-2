import { createRouter, createWebHistory } from 'vue-router';


const routes = [
  {
    path: '/',
    alias: '/login',
    name: 'login',
    component: () => import('@/views/IniciarSesion.vue'),
  },
  {
    path: '/registrar-usuario',
    name: 'RegistarUsuario',
    component: () => import('@/views/RegistrarUsuario.vue')
  },
  {
    path: '/buscar-usuario',
    name: 'BuscarUsuario',
    component: () => import('@/views/BuscaUsuario.vue')
  },
  {
    path: '/actualizar-usuario',
    name: 'ActualizarUsuario',
    component: () => import('@/views/ActualizaUsuario.vue')
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
