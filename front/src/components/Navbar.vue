<!--*
 * @author Juanfran & SebasRome
 *-->
<template>
  <nav id="navbar" class="navbar fixed-top navbar-expand-lg navbar-light bg-light" v-if="getUsuario">
  <div class="container-fluid">
    <router-link v-if="getUsuario.id_rol===1" class="navbar-brand" to="/inicio-admin">
      <img
        id="logoNavbar"
        src="@/assets/logoPioneros200x113.png" 
        alt="Pioneros"
      >
    </router-link>
    <router-link v-if="getUsuario.id_rol===2" class="navbar-brand" to="/inicio-coordinador">
      <img
        id="logoNavbar"
        src="@/assets/logoPioneros200x113.png"
        alt="Pioneros"
      >
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li v-if="getUsuario.id_rol===1" class="nav-item dropdown">
            <router-link to="/inicio-admin" class="nav-link">Inicio</router-link>
        </li>
        <li v-if="getUsuario.id_rol===2" class="nav-item dropdown">
            <router-link to="/inicio-coordinador" class="nav-link">Inicio</router-link>
        </li>
        <li class="nav-item dropdown">
          <a v-if="getUsuario.id_rol===1" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de Usuarios
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/registrar-usuario" class="dropdown-item">Registrar Usuario</router-link></li>
            <li><router-link to="/buscar-usuario" class="dropdown-item">Buscar Usuario</router-link></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a v-if="getUsuario.id_rol===1" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Gestión de Vehiculos
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link to="/registrar-vehiculo" class="dropdown-item">Registrar Vehiculo</router-link></li>
            <li><router-link to="/buscar-vehiculo" class="dropdown-item">Buscar Vehiculo</router-link></li>
          </ul>
        </li>
        <li id="logout" class="nav-item dropdown">
            <a @click="cerrarSesion" href="/" class="nav-link">
              Cerrar sesión
              <i class="fa-solid fa-door-closed"></i>
            </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import { mapGetters, mapActions} from "vuex";

export default{
  data(){
    return {

    }
  },
  mounted(){
    if(this.getToken){
      this.validaToken();
    }
  },
  methods: {
    ...mapActions(['setUsuario', 'validaToken']),

    cerrarSesion(){
      localStorage.removeItem('token');
      this.setUsuario(null);
    }
  },
  computed: {
    ...mapGetters(['getUsuario','getToken'])
  }
}

</script>

<style>

  #logoNavbar{
    width: 6rem;
  }

  *{
    font-weight: bold;
  }

  #navbar{
    background: rgb(255,255,255);
    background: linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(97, 179, 255, 0.616) 100%); 
  }

  

</style>
