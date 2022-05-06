<template>
  <h1>Registrar Usuarios</h1>
  <hr />
  <formularioUsuarios :usuario="usuario" @enviarDatos="registraUsuario"></formularioUsuarios>
</template>

<script lang="ts">
import formularioUsuarios from "@/components/FormularioCrearUsuario.vue";
import { Usuario } from "@/interfaces/Usuario";

export default{
    name: 'registrarUsuario',
    components: {
        formularioUsuarios
    },
    data : ()=> {
        return{
            usuario: {} as Usuario
        }
    },
    methods: {
        // registrarUsuario(){

        // }
    }

}

</script>