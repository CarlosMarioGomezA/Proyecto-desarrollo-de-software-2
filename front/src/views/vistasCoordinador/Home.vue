<template>
  <div>
    <navbar/>
    <h1>Inicio</h1>
    <img src="@/assets/mantenimiento.jpg" alt="Estamos en mantenimiento" />
  </div>
</template>

<script>
import Navbar from '../../components/Navbar.vue';
export default {
  components: { Navbar },};
</script>

<style scoped>
img {
  margin-left: 30%;
  max-height: 500px;
}
</style>