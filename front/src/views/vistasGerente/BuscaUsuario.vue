<!--*
 * @author SebasRome
 *-->
<template>
  <div id="vistaBuscar">
    <!--Formulario para buscar por cedula-->
    <form class="formularioBusqueda" @submit.prevent="buscarUsuario">
      <h1>Administración de Usuarios</h1>
      <input
        id="campoCedula"
        class="form-label"
        v-model="busqueda"
        type="text"
        placeholder="Digite la cedula del usuario"
      />
      <button id="botonBuscar" type="submit" class="btn btn-primary btn-lg">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </form>

    <!--Tabla de usuarios-->

    <div class="row mt-2 m-1 p-3">
      <div class="col-lg-20">
        <table class="table table-responsive table-striped">
          <thead>
            <tr>
              <th>Nombres</th>
              <th>Apellidos</th>
              <th>Tipo documento</th>
              <th># documento</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(usuario, index) in usuarios" :key="index">
              <!--Ciclo que recorre el arreglo de usuarios que vienen de las B.D-->
              <td>{{ usuario.nombres }}</td>
              <td>{{ usuario.apellidos }}</td>
              <td>{{ usuario.tipo_documento }}</td>
              <td>{{ usuario.numero_documento }}</td>
              <td>{{ usuario.email }}</td>
              <td>{{ usuario.telefono }}</td>
              <td v-if="usuario.id_estado === 1">Activo</td>
              <td v-if="usuario.id_estado === 2">Bloqueado</td>
              <td>
                <button
                  type="button"
                  class="btn btn-success"
                  title="Editar"
                  @click="abrirModalEditar(usuario)"
                  data-bs-toggle="modal"
                  data-bs-target="#modalEditar"
                >
                  <i class="fa-solid fa-user-pen"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  title="Eliminar"
                  @click="eliminarUsuario(usuario)"
                >
                  <i class="fa-solid fa-user-slash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    

  
    <!-- Modal Editar-Usuario -->
    <div
      class="modal fade"
      id="modalEditar"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog p-20">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Editar Usuario</h5>
            <!--Titulo-->
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <!--Boton superior para cerrar-->
          </div>
          <form>
            <div class="modal-body">
              <!--Cuerpo del modal-->

              <!--Nombres-->
              <div class="col-md-10">
                <label for="inputNombre" class="form-label">Nombres</label>
                <input
                  v-model="usuarioEditar.nombre"
                  type="text"
                  class="form-control"
                  id="inputNombre"
                  placeholder="Ej: Sebastián"
                  required
                />
              </div>

              <!--Apellidos-->
              <div class="col-md-10">
                <label for="inputApellido" class="form-label">Apellidos</label>
                <input
                  v-model="usuarioEditar.apellido"
                  type="text"
                  class="form-control"
                  id="inputApellido"
                  placeholder="Ej: González"
                  required
                />
              </div>
              <!--Direccion-->
              <div class="col-md-10">
                <label for="inputDireccion" class="form-label">Direccion</label>
                <input
                  v-model="usuarioEditar.direccion"
                  type="text"
                  class="form-control"
                  id="inputDireccion"
                  placeholder="Ej: cll13 #03-33"
                  required
                />
              </div>

              <!--Telefono-->
              <div class="col-md-10">
                <label for="inputTelefono" class="form-label">Telefono</label>
                <input
                  v-model="usuarioEditar.telefono"
                  type="tel"
                  class="form-control"
                  id="inputTelefono"
                  placeholder="Ej: 9900281"
                  required
                />
              </div>

              <!--Cargo-->
              <div class="col-md-10">
                <label for="inputCargo" class="form-label">Cargo</label>
                <select
                  v-model="usuarioEditar.rol"
                  class="form-select"
                  id="inputCargo"
                  required
                >
                  <option id="opcionLista" selected="true" disabled>Selecciona un cargo</option>
                  <option id="opcionLista" value="1">Gerente</option>
                  <option id="opcionLista" value="2">Coordinador de transporte</option>
                </select>
              </div>
              <!-- Estado -->
              <div class="col-md-10">
                <label for="inputEstado" class="form-label">Estado</label>
                <select
                  v-model="usuarioEditar.estado"
                  class="form-select"
                  id="inputEstado"
                  required
                >
                  <option selected="true" disabled>Selecciona un cargo</option>
                  <option value="1">Activo</option>
                  <option value="2">Bloqueado</option>
                </select>
              </div>
            </div>
          </form>
          <div class="modal-footer">
            <button
              type="submit"
              class="btn btn-primary"
              @click="editarUsuario"
            >
              Actualizar
              <i class="fa-solid fa-user-check"></i>
            </button>
            <button
              type="button"
              class="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cancelar
              <i class="fa-solid fa-circle-arrow-left"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
window.document.title = "Buscar Usuario";
import UsuarioService from "@/services/UsuarioService";
export default {
  data: () => {
    return {
      usuarios: [],
      busqueda: "",

      usuarioEditar: {
        password: "",
        nombre: "",
        apellido: "",
        direccion: "",
        tipoDocumento: "",
        documento: "",
        correo: "",
        rol: 0,
        telefono: "",
        estado: 0,
      },
      //Validaciones
      confirmarPassword: "",
      btnActualizar: false,
    };
  },
  mounted() {
    this.getUsuariosBack();
    this.myModal = this.$refs.modalEditar;
  },

  methods: {

    verificaCamposVacios() {
      let resultado = true;
      if (
        this.usuarioEditar.nombre === "" ||
        this.usuarioEditar.apellido === "" ||
        this.usuarioEditar.tipoDocumento === "" ||
        this.usuarioEditar.documento === "" ||
        this.usuarioEditar.direccion === "" ||
        this.usuarioEditar.telefono === "" ||
        this.usuarioEditar.correo === "" ||
        this.usuarioEditar.rol === 0 ||
        this.usuarioEditar.estado === 0
      ) {
        resultado = false;
      }
      return resultado;
    },

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

    abrirModalEditar(datos) {
      this.usuarioEditar = {
        password: datos.password_usuario,
        tipoDocumento: datos.tipo_documento,
        nombre: datos.nombres,
        apellido: datos.apellidos,
        direccion: datos.direccion,
        documento: datos.numero_documento,
        correo: datos.email,
        rol: datos.id_rol,
        telefono: datos.telefono,
        estado: datos.id_estado,
      };
    },

    async editarUsuario() {
      let service = new UsuarioService();
      if (!this.verificaCamposVacios()) {
        alert("No se permiten los campos en blanco");
      } else {
        let usuario = this.usuarioEditar;
        await service.ActualizarUsuario(usuario);
        alert("El Usuario ha sido actualizado satisfactoriamente");
        this.usuarios = [];
        this.getUsuariosBack();
      }
    },

    async eliminarUsuario(datos) {
      let service = new UsuarioService();
      this.usuarioEditar = {
        password: datos.password_usuario,
        nombre: datos.nombres,
        tipoDocumento: datos.tipo_documento,
        apellido: datos.apellidos,
        direccion: datos.direccion,
        documento: datos.numero_documento,
        correo: datos.email,
        rol: datos.id_rol,
        telefono: datos.telefono,
        estado: 3,
      };
      let usuario = this.usuarioEditar;
      await service.ActualizarUsuario(usuario);
      alert("Usuario eliminado satisfactoriamente");
      this.usuarios = [];
      this.getUsuariosBack();
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
      } else {
        alert("Ingrese numero de documento");
      }
    },
  },
};
</script>

<style scoped>
  #vistaBuscar{
    margin-top: 5rem;
  }

  #botonBuscar{
    padding: 0.15em 0.4em;
    margin-left: 1em;
    border-radius: 50%;
  }

  #campoCedula, 
  #inputPassword, 
  #inputPassword2, 
  #inputNombre, 
  #inputApellido, 
  #inputDireccion,
  #inputTelefono,
  #inputCargo,
  #inputEstado{
    margin-right: 0.5rem;
    height: 2rem;
    border-style: none none solid none;
    border-color: lightgray;
    border-radius: 1rem;
    padding: 0.5rem;
    transition: 0.5s;
    background-color: white;
  }

  #campoCedula:hover,
  #inputPassword:hover, 
  #inputPassword2:hover, 
  #inputNombre:hover, 
  #inputApellido:hover, 
  #inputDireccion:hover,
  #inputTelefono:hover,
  #inputCargo:hover,
  #inputEstado:hover{
    background-color: rgba(105, 183, 255, 0.178);
    color: rgb(0, 0, 0);
    transition: 0.5s;
  }

  #opcionLista:hover{
    background-color: rgba(105, 183, 255, 0.178);
    color: rgb(0, 0, 0);
  }

  .col-lg-20{
    margin: 0.5em;
  }

  .formularioBusqueda{
    margin-left: 2em;
    padding-top: 1vw;
  }

  button {
    margin: 5px;
  }
  input {
    margin-left: 21px;
    margin-right: 30px;
  }
  select {
    margin-left: 21px;
    margin-right: 30px;
  }

  .btn-lg{
    transition: 0.5s;
  }

  .btn-lg:hover{
    transition: 0.5s;
    background-color: rgb(0, 73, 207);
    border-color: rgb(0, 73, 207);
  }
  
  .btn-success{    
    transition: 0.5s;
    background-color: rgb(34, 111, 255);
    border-color: rgb(34, 111, 255);
  }

    .btn-success:hover{
    transition: 0.5s;
    background-color: rgb(0, 73, 207);
    border-color: rgb(0, 73, 207);
  }

</style>