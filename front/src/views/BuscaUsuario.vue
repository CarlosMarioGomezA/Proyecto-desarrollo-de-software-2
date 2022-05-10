<template>
  <h1>Administración de Usuarios</h1>
  <!--Formulario para buscar por cedula-->
  <form class="formularioBusqueda" @submit.prevent="buscarUsuario">
    <input
      class="form-label"
      v-model="busqueda"
      type="text"
      placeholder="Digite la cedula del usuario"
    />
    <button type="submit" class="btn btn-dark">Buscar Usuario</button>
  </form>

  <div class="row mt-2 m-1 p-3">
    <div class="col-lg-20">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Tipo documento</th>
            <th>Numero documento</th>
            <th>Correo</th>
            <th>Telefono</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(usuario, index) in usuarios" :key="index">
            <td>{{ usuario.nombres }}</td>
            <td>{{ usuario.apellidos }}</td>
            <td>{{ usuario.tipo_documento }}</td>
            <td>{{ usuario.numero_documento }}</td>
            <td>{{ usuario.email }}</td>
            <td>{{ usuario.telefono }}</td>
            <td>
              <button type="button" class="btn btn-primary" title="Editar"><i class="fa-solid fa-pen"></i></button>
              <button type="button" class="btn btn-danger" title="Eliminar"><i class="fa-solid fa-circle-xmark"></i></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import UsuarioService from "@/services/UsuarioService";
export default {
  data: () => {
    return {
      usuarios: [],
      busqueda: "",
    };
  },
  mounted() {
    this.getUsuariosBack();
  },

  methods: {
    async getUsuariosBack() {
      let service = new UsuarioService();
      let response = await service.obtenerUsuarios();
      let arrayPeticion = response.data;
      let usuarioBd = {};
      for (let i = 0; i < arrayPeticion.length; i++) {
        usuarioBd = arrayPeticion[i];
        this.usuarios.push(usuarioBd);
      }
    },

    buscarUsuario() {
      let busqueda = this.busqueda;
      let resultadoBusqueda = [];
      let usuario;
      let cedulaUsuario;

      if (busqueda !== "") {
        for (let i = 0; i < this.usuarios.length; i++) {
          usuario = this.usuarios[i];
          cedulaUsuario = usuario.numero_documento;

          if (busqueda === cedulaUsuario) {
            resultadoBusqueda.push(usuario);
          }
        }
        this.usuarios = resultadoBusqueda;
      }else{
        alert('Ingrese numero de documento');
      }
    },
  },
};
</script>

<style scoped>
button {
  margin: 5px;
}
input {
  margin-left: 25px;
}
</style>