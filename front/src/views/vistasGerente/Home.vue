<template>
  <navbar/>
  <h1>Inicio</h1>
  <img src="@/assets/mantenimiento.jpg" alt="Estamos en mantenimiento">
</template>

<script>
import Navbar from '../../components/Navbar.vue';
export default {
  components: { Navbar },

}
</script>

<style>
img{
  margin-left: 30%;
  max-height: 500px;
}
</style>