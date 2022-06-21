<!--*
 * @author SebasRome
 *-->
<template>
<div id="vistaBuscar">
    <!--Formulario para buscar por cedula-->
    <form class="formularioBusqueda" @submit.prevent="">
      <h1>Administración de vehículos</h1>
      <input
        id="campoPlaca"
        class="form-label"
        v-model="busqueda"
        type="text"
        placeholder="Digite la placa del vehiculo"
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
              <th>Placa</th>
              <th>Tipo de Vehiculo</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Avaluo</th>
              <th>Licencia de Transito</th>
              <th>Cedula de Propietario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(vehiculo, index) in vehiculos" :key="index">
              <!--Ciclo que recorre el arreglo de usuarios que vienen de las B.D-->
              <td>{{ vehiculo.placa }}</td>
              <td>{{ vehiculo.tipoVehiculo }}</td>
              <td>{{ vehiculo.marca }}</td>
              <td>{{ vehiculo.modelo }}</td>
              <td>{{ vehiculo.avaluo}}</td>
              <td>{{ vehiculo.licenciaTransito }}</td>
              <td>{{ vehiculo.cedulaPropietario}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
</div>
</template>

<script>
export default {
data: () => {
    return {
      vehiculos: [],
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
}
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