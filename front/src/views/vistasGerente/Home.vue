<!--*
 * @author Juanfran
 *-->
<template>
    <div id="vistaHome">
      <div class="contenedorPrincipal" >
        <p id="titulo" class="align-items-center">Sistema de control de Vehiculos</p>
      </div>
      <div id="logoPrincipal" class="contenedorPrincipal">
        <img
          src="@/assets/logoPionerosHoldingGroup900px.png"
          class="img-fluid" 
          alt="Logo Empresarial"
        >
      </div>
  </div>
</template>

<script>
window.document.title = "Gerente";
import { mapGetters } from "vuex";
export default {
  
  computed: {
    ...mapGetters(['getUsuario'])
  }
};
</script>

<style scoped>
#vistaHome{
    margin-top: 5rem;
  }
  .contenedorPrincipal{
    padding: 1rem 1rem;
    text-align: center;
  }

  #titulo{
    text-align: center;
    font-weight: bold;
    font-size: calc(1em + 1vw) ;
  }
</style>