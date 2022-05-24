<template>
  <div id="vistaRegistrar">

    <div class="contenedor">
      <h1>Registro de usuarios</h1>
    </div>
    <div class="contenedorLogo">
      <img
        id="logo"
        src="@/assets/logoPioneros600x338.png" 
        alt="logoEmpresarial"
        >
    </div>

    <form id="formulario" class="row g-3" @submit.prevent="enviarDatos">

      <div id="contenedorInformacion" class="row g-3">
        <a id="tituloContenedor">Informacion de usuario</a>
        <!--Nombres-->
        <div class="col-md-6">
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
        <div class="col-md-6">
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
        <div class="col-md-3">
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
        <div class="col-md-3">
          <label for="inputTipoDocumento" class="form-label"
            >Tipo de documento</label>
          <select
            v-model="usuario.tipoDocumento"
            id="inputTipoDocumento"
            class="form-select"
            required>
            <option disabled selected>Selecciona tipo de documento</option>
            <option>C.C</option>
            <option>C.E</option>
            <option>Pasaporte</option>
            <option>T.I</option>
          </select>
        </div>

        <!--# de Documento-->
        <div class="col-md-6">
          <label for="inputNumeroDocumento" class="form-label">Número de documento</label>
          <input
            v-model="usuario.documento"
            type="num"
            class="form-control"
            id="inputNumeroDocumento"
            placeholder="Ej: 102020202"
            required
          />
        </div>

        <!--Telefono-->
        <div class="col-md-6">
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
        <div class="col-md-6">
          <label for="inputCargo" class="form-label">Cargo</label>
          <select
            class="form-select"
            id="inputCargo"
            v-model="usuario.rol"
            required>
            <option selected="true" disabled>Selecciona un cargo</option>
            <option value="1">Gerente</option>
            <option value="2">Coordinador de transporte</option>
          </select>
        </div>
      </div>

      <div id="contenedorInformacion" class="row g-3">
        <a id="tituloContenedor">Acceso</a>
        <!--Email-->
        <div class="col-md-6">
          <label for="inputEmail" class="form-label">Correo electronico</label>
          <input
            v-model="usuario.correo"
            type="email"
            class="form-control"
            id="inputEmail"
            placeholder="Ej: juanito@gmail.com"
            required/>
        </div>

        <!--Contraseña-->
        <div class="col-md-3">
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
        <div class="col-md-3">
          <label for="inputPassword2" class="form-label"
            >Confirmar contraseña</label>
          <input
            v-model="confirmarPassword"
            type="password"
            class="form-control"
            id="inputPassword2"
            placeholder="***********"
            required
          />
        </div>
      </div>

      <!-- Lo siguiente creo que se puede tomar como otro componente -->

      <div id="contenedorInformacion" class="row g-3">
        <a id="tituloContenedor">Seguridad</a>
        <!-- Pregunta de seguridad #1 -->
        <div class="col-md-6">
          <label for="inputCargo" class="form-label">Pregunta de Seguridad</label>
          <select
            class="form-select"
            id="inputPregunta1"
            v-model="usuario.pregunta"
            required>
            <option selected="true" disabled>Selecciona una pregunta</option>
            <option value=1>¿Cuál es el nombre de tu macota?</option>
            <option value=2>¿En qué ciudad nació?</option>
          </select>
        </div>

        <!--Respuesta 1-->
        <div class="col-md-6">
          <label for="inputRespuesta1" class="form-label">Respuesta</label>
          <input
            v-model="usuario.respuestaPregunta"
            type="text"
            class="form-control"
            id="inputRespuesta1"
            placeholder="Ingrese respuesta"
            required
          />
        </div>
 
      </div>

      <!--Botón-->
      <div class="contenedor">
        <button type="submit" class="btn btn-primary btn-lg">
          <i class="fa-solid fa-user-plus"></i>
          Registrar
        </button>
      </div>
    </form>
    
  </div>
</template>

<script>
window.document.title = "Registrar Usuarios";
import UsuarioService from "@/services/UsuarioService";
export default {
  data: () => {
    return {
      usuario: {
        password: "",
        nombre: "",
        apellido: "",
        direccion: "",
        tipoDocumento: "",
        documento: "",
        correo: "",
        telefono: "",
        rol: 0,
        pregunta: "",
        respuestaPregunta: "",
      },
      confirmarPassword: "",
    };
  },

  methods: {
    limpiaCampos() {
      this.usuario.password = "";
      this.usuario.nombre = "";
      this.usuario.apellido = "";
      this.usuario.direccion = "";
      this.usuario.tipoDocumento = "";
      this.usuario.documento = "";
      this.usuario.correo = "";
      this.usuario.telefono = "";
      this.usuario.rol = 0;
      this.usuario.pregunta = 0;
      this.usuario.respuestaPregunta = "";
      this.confirmarPassword = "";
    },

    validarContraseñas() {
      let flag = false;

      if (this.usuario.password === this.confirmarPassword) {
        flag = true;
      }
      return flag;
    },

    async enviarDatos() {
      let usuario = this.usuario;
      let service = new UsuarioService();
      if (!this.validarContraseñas()) {
        alert("Las contraseñas no coinciden");
      } else {
        try {
          await service.crearUsuario(usuario);
          alert("El usuario ha sido creado satisfactoriamente");
          this.limpiaCampos();
        } catch (error) {
          let response = error.response.data.info;
          if (response === "usuario con correo existente") {
            alert("El correo ya se encuentra en la aplicacion");
          }

          if (response === "usuario con documento existente") {
            alert(
              "El documento digitado ya se encuentra registrado en la aplicacion"
            );
          }
        }
      }
    },
  },
};
</script>

<style scoped>
  #vistaRegistrar{
    margin-top: 5rem;
  }

  #contenedorFormulario {
    position: relative;
    display: block;
    z-index: -1;
    background-color: aquamarine;

  }

  #formulario{
    opacity: 100%;
    margin: 50px;
    margin-top: 0%;
  }

  .contenedor{
    text-align: center;
    margin-top: calc(1em + 1vw);
    margin-bottom: 2rem;
  }

  #logo{
    position: relative;
    opacity: 20%;
    width: 60%;
    margin-left: auto;
    margin-right: auto;
  }

  .contenedorLogo{
    /*background-color: aqua;*/
    text-align: center;
    z-index: -1;
    width: 100%;
    position: fixed;
  }

  #contenedorInformacion{
    padding: 1rem 1rem 2rem;
    border: 1px solid;
    border-radius: 2rem;
    border-color: lightgray;
  }

  #tituloContenedor{
    margin-left: 12px;
    margin-top: -1.9rem;
    background: white;
    color:#5d5e5f;
    position: absolute;
    width: auto;
    font-size: 1rem;
    font-weight: bold;
  }

  h1{
    font-weight: bold;
  }

  .btn-lg{
    transition: 0.5s;
  }

  .btn-lg:hover{
    transition: 0.5s;
    background-color: rgb(0, 64, 184);
    border-color: rgb(0, 64, 184);
  }

  input{
    border-style: none none solid none;
    border-color: lightgray;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.288);
    transition: 0.5s;
  }

  input:hover{
    background: rgba(105, 183, 255, 0.178);
    color: rgb(0, 0, 0);
    transition: 0.5s;
  }

  select{
    border-style: none none solid none;
    border-color: lightgray;
    border-radius: 1rem;
    background-color: rgba(255, 255, 255, 0.288);
    transition: 0.5s;
  }

  select:hover{
    background-color: rgba(105, 183, 255, 0.178);
    color: rgb(0, 0, 0);
    transition: 0.5s;
  }

</style>