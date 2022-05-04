<template>
  <Navbar/>
  <router-view/>
</template>

<script>
import { defineComponent } from "@vue/runtime-core";
import Navbar from "@/components/Navbar.vue";

export default defineComponent({
  components: { Navbar }
})
</script>

<style>

</style>
