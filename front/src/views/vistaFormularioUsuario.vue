import { default } from '../components/Navbar.vue';

<template>
 <form id="formulario" class="row g-3" @submit.prevent="enviarDatos">
      
      <!--Nombre de Usuario-->
      <div class="col-md-4">
        <label for="inputUsername" class="form-label">Nombre De Usuario</label>
        <input
          v-model="nombreUsuario"
          type="text"
          class="form-control"
          id="inputUsername"
          placeholder="Ej: Juanfranco"
        />
      </div>

      <!--Contraseña-->
      <div class="col-md-4">
        <label for="inputPassword" class="form-label">Contraseña</label>
        <input
          v-model="password"
          type="password" 
          class="form-control"
          id="inputPassword"
          placeholder="*************"
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
        />
      </div>
      <!--Nombres-->
      <div class="col-md-4">
        <label for="inputNombre" class="form-label">Nombres</label>
        <input
          v-model="nombre"
          type="text"
          class="form-control"
          id="inputNombre"
          placeholder="Ej: Sebastián"
        />
      </div>

      <!--Apellidos-->
      <div class="col-md-4">
        <label for="inputApellido" class="form-label">Apellidos</label>
        <input
          v-model="apellido"
          type="text"
          class="form-control"
          id="inputApellido"
          placeholder="Ej: González"
        />
      </div>
       <!--Direccion-->
      <div class="col-4">
        <label for="inputDireccion" class="form-label">Direccion</label>
        <input
          v-model="direccion"
          type="text"
          class="form-control"
          id="inputDireccion"
          placeholder="Ej: cll13 #03-33"
        />
      </div>

      <!--Tipo De Documento-->
      <div class="col-md-4">
        <label for="inputTipoDocumento" class="form-label">Tipo de documento</label>
        <select v-model="tipoDocumento" id="inputTipoDocumento" class="form-select">
          <option selected="true" disabled="disabled">Selecciona tipo de documento</option>
          <option>C.C</option>
          <option>T.I</option>
        </select>
      </div>

      <!--# de Documento-->
      <div class="col-md-4">
        <label for="inputNumeroDocumento" class="form-label">Número de documento</label>
        <input
          v-model="numeroDocumento"
          type="number"
          class="form-control"
          id="inputNumeroDocumento"
          placeholder="Ej: 102020202"
        />
      </div>

      <!--Telefono-->
      <div class="col-md-4">
        <label for="inputTelefono" class="form-label">Telefono</label>
        <input
          v-model="telefono"
          type="tel"
          class="form-control"
          id="inputTelefono"
          placeholder="Ej: 9900281"
        />
      </div>

      <!--Email-->
      <div class="col-md-4">
        <label for="inputEmail" class="form-label">Correo electronico</label>
        <input
          v-model="correo"
          type="email"
          class="form-control"
          id="inputEmail"
          placeholder="Ej: juanito@gmail.com"
        />
      </div>

      <!--Cargo-->
      <div class="col-md-4">
        <label for="inputCargo" class="form-label">Cargo</label>
        <select class="form-select" id="inputCargo" v-model="cargo">
          <option selected="true" disabled="disabled">Selecciona un rol</option>
          <option value="1">Gerente</option>
          <option value="2">Coordinador de transporte</option>
          <option value="3">Conductor</option>
        </select>
      </div>
      <div class=" col-4"></div>

      <!-- Lo siguiente creo que se puede tomar como otro componente -->

      <!-- Pregunta de seguridad #1 -->
      <div class="col-md-4">
        <label for="inputCargo" class="form-label">Pregunta de Seguridad #1</label>
        <select class="form-select" id="inputCargo" v-model="preguntaSeguridad1">
          <option selected="true" disabled="disabled">Selecciona una pregunta</option>
        </select>
      </div>

      <!-- Pregunta de seguridad #2 -->
      <div class="col-md-4">
        <label for="inputCargo" class="form-label">Pregunta de Seguridad #2</label>
        <select class="form-select" id="inputCargo" v-model="preguntaSeguridad2">
          <option selected="true" disabled="disabled">Selecciona una pregunta</option>
        </select>
      </div>
      
      <!--Botón-->
      <div class="col-10">
        <button type="submit" class="btn btn-dark">Crear</button>
      </div>

      
    </form>
</template>

<script>
    export default{
        name: 'formularioUsuarios',
        data : ()=> {
          return{
            nombreUsuario: "",
            password: "",
            confirmarPassword: "",
            nombre: "",
            apellido: "",
            direccion: "",
            tipoDocumento: "",
            numeroDocumento: "",
            telefono: "",
            correo: "",
            cargo: "",
            preguntaSeguridad1: "",
            preguntaSeguridad2: ""
          }
          
        },
        // methods:{
        //   enviarDatos(){
        //     return console.log("");
        //   }
        // }

    }
    
</script>

<style scoped>
    #formulario{
     margin: 50px;
     margin-top: 0%;
    }
    
</style>