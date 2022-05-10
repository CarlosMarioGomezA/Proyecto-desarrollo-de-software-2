<template>
  <h1>Buscar usuario</h1>
  <input type="text" placeholder="Busqueda">
  <div class="row mt-5">
    <div class="col-lg-12">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Tipo documento</th>
          <th>Numero documento</th>
          <th>Correo</th>
          <th>Telefono</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="usuario in usuarios" :key="usuario.nombre">
          <td>{{usuario.nombre}}</td>
          <td>{{usuario.nombre}}</td>
          <td>{{usuario.nombre}}</td>
          <td>{{usuario.nombre}}</td>
          <td>{{usuario.nombre}}</td>
          <td>{{usuario.nombre}}</td>
        </tr>
      </tbody>

    </div>
  </div>
</template>

<script>
export default {
  data:() =>{
    return{
      usuarios: [
        
      ]
    }
  }
}
</script>

<style>

</style>