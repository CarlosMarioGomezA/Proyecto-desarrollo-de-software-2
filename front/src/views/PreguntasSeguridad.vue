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
              <label class="form-label" for="inputEmail">Pregunta de seguridad</label>
              <p 
                id="preguntaSeguridad" 
                class="form-control form-control-lg"
              >
              cuantos perritos tiene?
              </p>
            </div>
            <div class="form-outline mb-4">
              <label class="form-label" for="inputEmail">Respuesta</label>
              <input 
                id="inputRespuesta" 
                type="text" 
                class="form-control form-control-lg" 
                placeholder="Ingrese su direccion de correo eletronico" 
                required
              />
            </div>

            <div class="text-center text-lg-start mt-4 pt-2">
              <button 
                type="submit" 
                class="btn btn-primary btn-lg" 
                style="padding-left: 2.5rem; padding-right: 2.5rem;">
                Enviar
              </button>
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

  #preguntaSeguridad{
    border: 0;
  }

  #inputRespuesta{
    border-style: none none solid none;
    border-color: lightgray;
    border-radius: 1rem;
    transition: 0.5s;
  }

  #inputRespuesta:hover{
    background-color: rgba(105, 183, 255, 0.178);
    color: rgb(0, 0, 0);
    transition: 0.5s;
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