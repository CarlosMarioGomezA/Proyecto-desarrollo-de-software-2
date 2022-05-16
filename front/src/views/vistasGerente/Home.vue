<template>
  <div>
    <h1>Inicio</h1>
    <img src="@/assets/mantenimiento.jpg" alt="Estamos en mantenimiento" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  // mounted() {
  //   console.log(this.getUsuario)
  // },
  computed: {
    ...mapGetters(['getUsuario'])
  }
};
</script>

<style scoped>
img {
  margin-left: 30%;
  max-height: 500px;
}
</style>