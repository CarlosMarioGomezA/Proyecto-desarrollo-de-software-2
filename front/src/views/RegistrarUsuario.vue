<template>
  <h1>Registrar usuario</h1>
  <form id="formulario" class="row g-3" @submit.prevent="enviarDatos">
      
       <!--Email-->
      <div class="col-md-4">
        <label for="inputEmail" class="form-label">Correo electronico</label>
        <input
          v-model="usuario.correo"
          type="email"
          class="form-control"
          id="inputEmail"
          placeholder="Ej: juanito@gmail.com"
          required
        />
      </div>

      <!--Contraseña-->
      <div class="col-md-4">
        <label for="inputPassword" class="form-label">Contraseña</label>
        <input
          v-model="usuario.password"
          type="password" 
          class="form-control"
          id="inputPassword"
          placeholder="*************"
          required
        />
      </div>

      <!--Confirmar contraseña-->
      <div class="col-md-4">
        <label for="inputPassword2" class="form-label">Confirmar contraseña</label>
        <input
          v-model="confirmarPassword"
          type="password"
          class="form-control"
          id="inputPassword2"
          placeholder="***********"
          required
        />
      </div>
      <!--Nombres-->
      <div class="col-md-4">
        <label for="inputNombre" class="form-label">Nombres</label>
        <input
          v-model="usuario.nombre"
          type="text"
          class="form-control"
          id="inputNombre"
          placeholder="Ej: Sebastián"
          required
        />
      </div>

      <!--Apellidos-->
      <div class="col-md-4">
        <label for="inputApellido" class="form-label">Apellidos</label>
        <input
          v-model="usuario.apellido"
          type="text"
          class="form-control"
          id="inputApellido"
          placeholder="Ej: González"
          required
        />
      </div>
       <!--Direccion-->
      <div class="col-4">
        <label for="inputDireccion" class="form-label">Direccion</label>
        <input
          v-model="usuario.direccion"
          type="text"
          class="form-control"
          id="inputDireccion"
          placeholder="Ej: cll13 #03-33"
          required
        />
      </div>

      <!--Tipo De Documento-->
      <div class="col-md-4">
        <label for="inputTipoDocumento" class="form-label">Tipo de documento</label>
        <select v-model="usuario.tipoDocumento" id="inputTipoDocumento" class="form-select" required>
          <option selected="true" disabled>Selecciona tipo de documento</option>
          <option>C.C</option>
          <option>T.I</option>
        </select>
      </div>

      <!--# de Documento-->
      <div class="col-md-4">
        <label for="inputNumeroDocumento" class="form-label">Número de documento</label>
        <input
          v-model="usuario.documento"
          type="text"
          class="form-control"
          id="inputNumeroDocumento"
          placeholder="Ej: 102020202"
          required
        />
      </div>

      <!--Telefono-->
      <div class="col-md-4">
        <label for="inputTelefono" class="form-label">Telefono</label>
        <input
          v-model="usuario.telefono"
          type="tel"
          class="form-control"
          id="inputTelefono"
          placeholder="Ej: 9900281"
          required
        />
      </div>

      <!--Cargo-->
      <div class="col-md-4">
        <label for="inputCargo" class="form-label">Cargo</label>
        <select class="form-select" id="inputCargo" v-model="usuario.rol" required>
          <option selected="true" disabled>Selecciona un cargo</option>
          <option value=1>Gerente</option>
          <option value=2>Coordinador de transporte</option>
          <option value=3>Conductor</option>
        </select>
      </div>
      

      <!-- Lo siguiente creo que se puede tomar como otro componente -->

      <!-- Pregunta de seguridad #1 -->
      <div class="col-md-4">
        <label for="inputCargo" class="form-label">Pregunta de Seguridad #1</label>
        <select class="form-select" id="inputPregunta1" v-model="preguntaSeguridad1">
          <option selected="true" disabled>Selecciona una pregunta</option>
        </select>
      </div>

      <!-- Pregunta de seguridad #2 -->
      <div class="col-md-4">
        <label for="inputCargo" class="form-label">Pregunta de Seguridad #2</label>
        <select class="form-select" id="inputPregunta2" v-model="preguntaSeguridad2">
          <option selected="true" disabled>Selecciona una pregunta</option>
        </select>
      </div>
      
      <!--Botón-->
      <div class="col-10">
        <button type="submit" class="btn btn-dark">Guardar Información</button>
      </div>

      
    </form>
</template>

<script>
import UsuarioService from "@/services/UsuarioService"
export default {
data:() => {
          return{
            usuario:{
              password: "",
              nombre: "",
              apellido:"",
              direccion: "",
              tipoDocumento:"",
              documento: "",
              correo:"",
              telefono:"",
              rol:0
            },
            confirmarPassword: "",
            preguntaSeguridad1:"",
            preguntaSeguridad2:"",
          }
        },

        methods: {

          validarContraseñas(){
            let flag = true;
            if(this.usuario.contraseña === this.confirmarPassword)
            {
              flag = false;
            }
            return flag;
          },

         async enviarDatos(){
            let usuario = this.usuario;
            let service = new UsuarioService();
            if(this.validarContraseñas === false){
              alert('Las contraseñas no coinciden');
            }
            await service.crearUsuario(usuario);
          }
        }
}
</script>

<style>
  #formulario{
    margin: 50px;
    margin-top: 0%;
  }
</style>