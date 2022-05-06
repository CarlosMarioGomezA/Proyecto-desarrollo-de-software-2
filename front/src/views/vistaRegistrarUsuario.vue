<template>
    <h1>Registrar Usuarios</h1>
    <hr>
    <formularioUsuarios></formularioUsuarios>
    
 
</template>

<script>
import formularioUsuarios from "@/views/vistaFormularioUsuario.vue";

export default{
    name: 'registrarUsuario',
    components: {
        formularioUsuarios
    }
}

</script>