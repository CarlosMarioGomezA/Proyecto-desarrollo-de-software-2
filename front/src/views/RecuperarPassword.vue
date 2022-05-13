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
          <form>
            <div class="form-outline mb-4">
              <label class="form-label" for="inputEmail">Correo eletronico</label>
              <input 
                v-model="email"
                id="inputEmail" 
                type="email" 
                class="form-control form-control-lg" 
                placeholder="Ingrese su direccion de correo eletronico" 
                required
              />
            </div>

            <div id="notificacion" v-if="muestraConfirmacion">
              Si el correo ingresado es correcto se envio un correo con la informacion para reestablecer la contraseña
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button 
                type="submit" 
                class="btn btn-primary btn-lg" 
                style="padding-left: 2.5rem; padding-right: 2.5rem;">
                Envia correo de recuperacion
              </button>
              <router-link to="/login">
                <button 
                  id="botonRegresar"
                  type="button"
                  class="btn btn-primary btn-lg" 
                  style="padding-left: 2.5rem; padding-right: 2.5rem;">
                  Regresar
                </button>
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
window.document.title = "Recuperar Contraseña";
export default {
  data() {
    return {
      email: "",
      muestraConfirmacion: false,
    };
  },

}
</script>

<style>

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

  #botonRegresar{
    margin: 0.3em;
    background-color: rgb(231, 10, 10);
    border-color: rgb(231, 10, 10);
  }

  #botonRegresar:hover{
    background-color: rgb(217, 0, 0);
    border-color: rgb(217, 0, 0);
  }

</style>