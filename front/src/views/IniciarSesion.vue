<template>
  <div id="cajaLogin">
    <form id="formulario" class="row g-3" @submit.prevent="login">
      <h1 id="titulo">Iniciar sesion</h1>

      <!--Email-->
      <div class="col-md-12">
        <label for="inputEmail" class="form-label">Correo electronico</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="inputEmail"
          placeholder="Ingrese email"
          required
        />
      </div>

      <!--Contraseña-->
      <div id="password" class="col-md-12">
        <label for="inputPassword" class="form-label">Contraseña</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="inputPassword"
          placeholder="Ingrese contraseña"
          required
        />
      </div>

      <div id="olvidePass">
        <router-link to="/recuperar-pass">Olvidé mi contraseña</router-link>
      </div>

      <div id="Error" v-if="muestraError">
        Usuario y/o contraseña incorrectas
      </div>

      <!--Botón-->
      <div class="col-10">
        <button id="boton" type="submit" class="btn btn-dark">
          Iniciar sesión
        </button>
      </div>
    </form>
  </div>
</template>

<script>
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
            break;

          case "Inicie nuevamente":
            this.muestraError = true;
            alert("Inicie nuevamente");
            break;
        }
      }
    },
  },
};
</script>

<style scoped>
#cajaLogin {
  border: 1px solid rgba(35, 38, 44, 0.781);
  border-radius: 10px;
  width: 30%;
  text-align: center;
  margin: 0 auto;
  margin-top: 8%;
  padding: 20px 50px;
}
#password {
  margin-top: 20px;
}
#olvidePass {
  margin: 10px 10px;
}
#boton {
  margin-top: 20px;
  margin-left: 50px;
}
#Error {
  color: red;
}
</style>