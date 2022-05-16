<template>
    <div>
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
window.document.title = "Coordinador";
export default {
};
</script>

<style scoped>

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