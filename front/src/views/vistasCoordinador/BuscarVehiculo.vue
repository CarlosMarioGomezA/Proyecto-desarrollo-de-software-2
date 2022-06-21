<!--*
 * @author SebasRome
 *-->
<template>

<div id="BuscarVehiculo">
    <h1>Buscar Vehiculo</h1>
</div>

 <!--Formulario para buscar por cedula-->
    <form class="formularioBusqueda" @submit.prevent="buscarVehiculo">
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
            </tr>
          </thead>
          <tbody>
            <tr v-for="(vehiculo, index) in vehiculos" :key="index">
              <!--Ciclo que recorre el arreglo de usuarios que vienen de las B.D-->
              <td>{{ vehiculo.placa }}</td>
              <td>{{ vehiculo.tipo_vehiculo }}</td>
              <td>{{ vehiculo.marca }}</td>
              <td>{{ vehiculo.modelo }}</td>
              <td>{{ vehiculo.avaluo }}</td>
              <td>{{ vehiculo.licencia_transito }}</td>
              <td>{{ vehiculo.cedula_propietario }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
        
  
</template>

<script>
window.document.title = "Buscar Vehiculo";
import VehiculoService from '../../services/VehiculoService.js';

export default {
data: () => {
    return {
      vehiculos: [],
      busqueda: "",

    };
  },

  mounted() {
    this.getVehiculosBack();
  },

  methods: {
     async getVehiculosBack() {
      let service = new VehiculoService();
      let response = await service.obtenerVehiculos();
      let arrayPeticion = response.data;
      let vehiculoBd = {};
      for (let i = 0; i < arrayPeticion.length; i++) {
        vehiculoBd = arrayPeticion[i];
        this.vehiculos.push(vehiculoBd);
      }
    },
    buscarVehiculo() {
      let busqueda = this.busqueda;
      let resultadoBusqueda = [];
      let vehiculo;
      let placa;

      if (busqueda !== "") {
        for (let i = 0; i < this.vehiculos.length; i++) {
          vehiculo = this.vehiculos[i];
          placa = vehiculo.placa;

          if (busqueda === placa) {
            resultadoBusqueda.push(vehiculo);
          }
        }
        this.vehiculos = resultadoBusqueda;
      } else {
        alert("Ingrese numero de documento");
      }
    },
  }
}
</script>

<style scoped>

#BuscarVehiculo{
    margin-top: 4.5rem;
}
.formularioBusqueda{
    margin-left: 2em;
    padding-top: 1vw;
  }
 #botonBuscar{
    padding: 0.15em 0.4em;
    margin-left: 1em;
    border-radius: 50%;
  }

  #campoPlaca{
    margin-right: 0.5rem;
    height: 2rem;
    border-style: none none solid none;
    border-color: lightgray;
    border-radius: 1rem;
    padding: 0.5rem;
    transition: 0.5s;
    background-color: white;
  }

</style>