<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light" v-if="muestra">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/inicio-admin">Pioneros</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
            <router-link to="/inicio-admin" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de Usuarios
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/registrar-usuario" class="dropdown-item">Registrar Usuario</router-link></li>
            <li><router-link to="/buscar-usuario" class="dropdown-item">Buscar Usuario</router-link></li>
          </ul>
        </li>
        <li id="logout" class="nav-item dropdown">
            <a href="javascript:void(0)" @click="cerrarSesion" class="nav-link">Cerrar sesión</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { mapGetters } from "vuex";

export default{
  data(){
    return {
      muestra: false
    }
  },
  mounted(){
   // this.pintaNavbar();
  },
  methods: {
    pintaNavbar(){
      if(this.usuario){
        this.muestra = true
      }
    },
    cerrarSesion(){
      localStorage.removeItem('token');
      this.$store.dispatch('user', null);
      this.$router.push('/');
    }
  },
  computed: {
    ...mapGetters(['usuario'])
  }
}

</script>

<style>

</style>
