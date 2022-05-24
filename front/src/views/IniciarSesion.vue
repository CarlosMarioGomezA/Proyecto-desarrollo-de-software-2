<template>
<section class="vh-100">
    <div class="container-fluid h-custom">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-9 col-lg-6 col-xl-5">
          <img
            id="imagenLogoEmpresarial"
            src="@/assets/logoPioneros600x338.png" 
            class="img-fluid" 
            alt="Sample image"
          >
        </div>
        <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
          <form @submit.prevent="login">
            <div class="form-outline mb-4">
              <label class="form-label" for="inputEmail">Correo electrónico</label>
              <input 
                v-model="email"
                id="inputEmail" 
                type="email" 
                class="form-control form-control-lg" 
                placeholder="Ingrese su direccion de correo electrónico" 
                required
              />
            </div>

            <div class="form-outline mb-3">
              <label class="form-label" for="inputPassword">Contraseña</label>
              <input 
                v-model="password"
                id="inputPassword" 
                type="password" 
                class="form-control form-control-lg" 
                placeholder="Ingrese la contraseña de usuario" 
                required
              />
            </div>

            <div class="d-flex justify-content-between align-items-center">
              <router-link id="textoLink" to="/recuperar-pass">Olvidó su contraseña?</router-link>
            </div>

            <div id="Error" v-if="muestraError">
              Usuario y/o contraseña incorrectas
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button 
                id="boton"
                type="submit" 
                class="btn btn-primary btn-lg" 
                style="padding-left: 2.5rem; padding-right: 2.5rem;">
                Iniciar sesion
                <i class="fa-solid fa-door-open"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section> 

</template>

<script>
window.document.title = "Iniciar Sesion";
import { mapActions } from "vuex";
import UsuarioService from "@/services/LoginService";
export default {
  data() {
    return {
      email: "",
      password: "",
      muestraError: false,
    };
  },
  methods: {
    ...mapActions(['setUsuario']),

    limpiaCampos() {
      this.email = "";
      this.password = "";
    },

    redireccionaXrol(usuario) {
      if (usuario.id_rol === 1) {
        this.$router.push("/inicio-admin");
      }else{
        this.$router.push("/inicio-coordinador");
      }
    },

    async login() {
      let objLogin = {
        correo: this.email,
        password: this.password,
      };

      try {
        let service = new UsuarioService();
        let res = await service.iniciarSesion(objLogin);
        let token = res.data.token;
        let usuario = res.data.usuario;

        if (token) {
          localStorage.setItem("token", token);
          this.setUsuario(usuario);
          this.redireccionaXrol(usuario);

        }
      } catch (error) {
        let response = error.response.data.info;
        let token;
        switch (response) {
          case "Credenciales inválidas":
            this.muestraError = true;
            alert("Credenciales inválidas");
            break;

          case "Usuario bloqueado":
            this.muestraError = true;
            token = error.response.data.token;
            alert("Usuario bloqueado por demasiados intentos");
            localStorage.setItem("token", token);
            this.limpiaCampos();
            break;

          case "Inicie nuevamente":
            this.muestraError = true;
            alert("Inicie nuevamente");
            break;
        }
      }
    },
  }
};

</script>

<style scoped>
  #Error {
    color: red;
    font-weight: 200;
  }
  .divider:after, 
  .divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
  }
  .h-custom {
    height: calc(100% - 73px);
  }
  @media (max-width: 450px) {
    .h-custom {
      height: 100%;
    }
  }

  #imagenLogoEmpresarial{
    margin: auto auto;
  }

  #inputEmail, #inputPassword{
    border-style: none none solid none;
    border-color: rgb(167, 167, 167);
    background: white;
    border-radius: 1rem;
  }

  #inputEmail:hover, #inputPassword:hover{
    background: rgba(105, 183, 255, 0.178);
    color: rgb(0, 0, 0);
    transition: 0.5s;
  }

  #textoLink{
    text-decoration: none;
    color: rgb(0, 89, 255);
  }
  
  .btn-lg{
    transition: 0.5s;
  }

  .btn-lg:hover{
    transition: 0.5s;
    background-color: rgb(0, 64, 184);
    border-color: rgb(0, 64, 184);
  }

</style>