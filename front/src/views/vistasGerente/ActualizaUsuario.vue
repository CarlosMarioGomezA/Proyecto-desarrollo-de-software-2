<template>
  <h1>Actualización de usuario</h1>
  <form id="formulario" class="row g-3" @submit.prevent>
      
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

          limpiaCampos(){
            this.usuario.password = "";
            this.usuario.nombre = "";
            this.usuario.apellido = "";
            this.usuario.direccion = "";
            this.usuario.tipoDocumento = "";
            this.usuario.documento = "";
            this.usuario.correo = "";
            this.usuario.telefono = "";
            this.usuario.rol = 0;
            this.confirmarPassword="";
          },

          validarContraseñas(){
            let flag = false;

            if(this.usuario.password === this.confirmarPassword){
              flag = true;
            }
            return flag;
          },

          

          // async enviarDatos(){
          //   let usuario = this.usuario;
          //   let service = new UsuarioService();
          //   if(!this.validarContraseñas()){
          //     alert('Las contraseñas no coinciden')
          //   }else{
          //     try{
          //       await service.crearUsuario(usuario);
          //       alert('El usuario ha sido creado satisfactoriamente');
          //       this.limpiaCampos();
          //     }
          //     catch(error){
          //       let response = error.response.data.info;
          //       if(response === 'usuario con correo existente'){
          //         alert('El correo ya se encuentra en la aplicacion');
          //       }

          //       if(response === 'usuario con documento existente'){
          //         alert('El documento digitado ya se encuentra registrado en la aplicacion');
          //       }
          //       console.log("hola",response);
                
          //     }
              
          //   }
          // }
        }
}
</script>

<style>

</style>