<!--*
 * @author SebasRome
 *-->
<template>
  <div id="RegistrarVehiculo">
    <h1>Registrar Vehiculo</h1>
  </div>

  <form id="formulario" class="row g-3" @submit.prevent="enviarDatos">

      <div id="contenedorInformacion" class="row g-3">
        <a id="tituloContenedor">Informacion del Vehiculo</a>
        <!--Placa-->
        <div class="col-md-6">
          <label for="inputPlaca" class="form-label">Placa</label>
          <input
            v-model="vehiculo.placa"
            type="text"
            class="form-control"
            id="inputPlaca"
            placeholder="Ej: ABC123"
            required
          />
        </div>

        <!--Marca-->
        <div class="col-md-6">
          <label for="inputMarca" class="form-label">Marca</label>
          <input
            v-model="vehiculo.marca"
            type="text"
            class="form-control"
            id="inputMarca"
            placeholder="Ej: AKT"
            required
          />
        </div>
        <!--Modelo-->
        <div class="col-md-3">
          <label for="inputDireccion" class="form-label">Modelo</label>
          <input
            v-model="vehiculo.modelo"
            type="text"
            class="form-control"
            id="inputModelo"
            placeholder="Ej: NKD"
            required
          />
        </div>

        <!--Tipo De Combustible-->
        <div class="col-md-3">
          <label for="inputTipoDocumento" class="form-label"
            >Tipo de Combustible</label>
          <select
            v-model="vehiculo.tipoCombustible"
            id="inputTipoCombustible"
            class="form-select"
            required>
            <option disabled selected>Selecciona tipo de Combustible</option>
            <option>Gasolina</option>
            <option>Acpm</option>
          </select>
        </div>

        <!--Consumo de combustible-->
        <div class="col-md-6">
          <label for="inputNumeroDocumento" class="form-label">Consumo de Combustible</label>
          <input
            v-model="vehiculo.consumoCombustible"
            type="num"
            class="form-control"
            id="inputConsumoCombustible"
            placeholder="Ej: 102020202"
            required
          />
        </div>

        <!--Impuesto-->
        <div class="col-md-6">
          <label for="inputTelefono" class="form-label">Impuesto del vehiculo</label>
          <input
            v-model="vehiculo.impuestoVehiculo"
            type="tel"
            class="form-control"
            id="inputImpuesto"
            placeholder="Ej: 9900281"
            required
          />
        </div>

        <!--Avaluo-->
        <div class="col-md-6">
          <label for="inputTelefono" class="form-label">Avaluo</label>
          <input
            v-model="vehiculo.avaluo"
            type="text"
            class="form-control"
            id="inputAvaluo"
            placeholder="Ej: 100000"
            required
          />
        </div>

        <!--# de Licencia de transito-->
        <div class="col-md-6">
          <label for="inputLicencia" class="form-label">Licencia de transito</label>
          <input
            v-model="vehiculo.licenciaTransito"
            type="text"
            class="form-control"
            id="inputLicencia"
            placeholder="Ej: 1221900281"
            required
          />
        </div>

        <!--Propietario-->
        <div class="col-md-6">
          <label for="inputPropietario" class="form-label">Cedula del Propietario</label>
          <input
            v-model="vehiculo.cedulaPropietario"
            type="text"
            class="form-control"
            id="inputPropietario"
            placeholder="Ej: 1221900281"
            required
          />
        </div>
        
        <!--Tarjeta de operaciones-->
        <div class="col-md-6">
          <label for="inputTarjetaOperaciones" class="form-label">Tarjeta de Operaciones</label>
          <input
            v-model="vehiculo.tarjetaOperaciones"
            type="text"
            class="form-control"
            id="inputTarjertaOperaciones"
            placeholder="Ej: 1221900281"
            required
          />
        </div>
        <!--Tipo De Vehiculo-->
         <div class="col-md-6">
          <label for="inputTipoVehiculo" class="form-label">Tipo de Vehiculo</label>
          <select
            class="form-select"
            id="inputTipoVehiculo"
            v-model="vehiculo.tipoVehiculo"
            required>
            <option selected="true" disabled>Selecciona un Tipo de Vehiculo</option>
            <option >Bus</option>
            <option >Buseta</option>
          </select>
        </div>

         <!--Tipo De Aceite de Motor-->

         <div class="col-md-6">
          <label for="inputAceiteMotor" class="form-label">Tipo de Aceite de Motor</label>
          <select
            class="form-select"
            id="inputAceiteMotor"
            v-model="vehiculo.aceiteMotor"
            required>
            <option selected="true" disabled>Selecciona un Tipo de Aceite Por referencia</option>
            <option value="RP0001">0W30</option>
            <option value="RP0002">5W30</option>
            <option value="RP0002">20W50</option>
          </select>
        </div>

        <!--Tipo De Aceite de Transmision-->

         <div class="col-md-6">
          <label for="inputAceiteTransmision" class="form-label">Tipo de Aceite de Transmisión</label>
          <select
            class="form-select"
            id="inputAceiteTransmision"
            v-model="vehiculo.aceiteTransmision"
            required>
            <option selected="true" disabled>Selecciona un Tipo de Aceite Por referencia</option>
            <option value="RP0004">XT-5-QMC</option>
            <option value="RP0005">XT-6-QSP</option>
            <option value="RP0006">XT-11-QDC</option>
          </select>
        </div>

        <!--Tipos de frenos Delanteros -->

         <div class="col-md-6">
          <label for="inputFrenosDelanteros" class="form-label">Tipos de frenos frontales</label>
          <select
            class="form-select"
            id="inputFrenosDelanteros"
            v-model="vehiculo.frenosDelanteros"
            required>
            <option selected="true" disabled>Selecciona un Tipo de Frenos Por referencia</option>
            <option value="RP0007">SDB000624</option>
            <option value="RP0008">M235I</option>
          </select>
        </div>


        <!--Tipos de frenos Traseros -->

         <div class="col-md-6">
          <label for="inputFrenosTraseros" class="form-label">Tipos de frenos trasero</label>
          <select
            class="form-select"
            id="inputFrenosTraseros"
            v-model="vehiculo.frenosTraseros"
            required>
            <option selected="true" disabled>Selecciona un Tipo de Frenos Por referencia</option>
            <option value="RP0007">SDB000624</option>
            <option value="RP0008">M235I</option>
          </select>
        </div>

        <!--Bateria Principal -->

         <div class="col-md-6">
          <label for="inputBateriaPrincipal" class="form-label">Bateria Principal</label>
          <select
            class="form-select"
            id="inputBateriaPrincipal"
            v-model="vehiculo.bateriaPrincipal"
            required>
            <option selected="true" disabled>Selecciona un Tipo de Bateria por referencia</option>
            <option value="RP0011">185/80R14</option>
            <option value="RP0012">265/70R19.5</option>
            <option value="RP0013">305/70R19.5</option>
          </select>
        </div>

         <!--Bateria Secundaria -->

         <div class="col-md-6">
          <label for="inputFrenosDelanteros" class="form-label">Bateria Secundaria</label>
          <select
            class="form-select"
            id="inputFrenosDelanteros"
            v-model="vehiculo.bateriaSecundaria"
            required>
            <option selected="true" disabled>Selecciona un Tipo de Bateria por referencia</option>
            <option value="RP0011">185/80R14</option>
            <option value="RP0012">265/70R19.5</option>
            <option value="RP0013">305/70R19.5</option>
          </select>
        </div>

         <!--Suspención Delantera -->

         <div class="col-md-6">
          <label for="inputSuspencionDelantera" class="form-label">Suspención Delantera</label>
          <select
            class="form-select"
            id="inputSuspencionDelantera"
            v-model="vehiculo.suspencionDelantera"
            required>
            <option selected="true" disabled>Selecciona un Tipo de suspención por referencia</option>
            <option value="RP0009">SP55819</option>
            <option value="RP0010">207.335-01</option>
          </select>
        </div>

         <!--Suspención Trasera -->

         <div class="col-md-6">
          <label for="inputFrenosDelanteros" class="form-label">Suspención Trasera</label>
          <select
            class="form-select"
            id="inputFrenosDelanteros"
            v-model="vehiculo.suspencionTrasera"
            required>
            <option selected="true" disabled>Selecciona un Tipo de Suspención por referencia</option>
            <option value="RP0009">SP55819</option>
            <option value="RP0010">207.335-01</option>
          </select>
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
</template>

<script>
import VehiculoService from '@/services/VehiculoService';

export default {
data: () => {
  return {
      vehiculo:{
        placa: "",
        marca: "",
        modelo:"",
        tipoCombustible: "",
        consumoCombustible: "",
        impuestoVehiculo: "",
        avaluo: "",
        licenciaTransito: "",
        cedulaPropietario: "",
        tarjetaOperaciones: "",
        tipoVehiculo: "",
        aceiteMotor: "",
        aceiteTransmision: "",
        frenosDelanteros: "",
        frenosTraseros: "",
        bateriaPrincipal: "",
        bateriaSecundaria: "",
        suspencionDelantera: "",
        suspencionTrasera: "",
      }   
  }
},

methods: {

  async enviarDatos(){
    let vehiculo = this.vehiculo;
    let service = new VehiculoService();

    try {
      service.crearVehiculo(vehiculo);
      alert('El vehiculo se creo satisfactoriamente');
    } catch (error) {
      let response = error.response.data.info;
      alert(response);
      
    }
  }
}
}
</script>

<style scoped>

#RegistrarVehiculo{
  margin-top: 4.5rem;
}

</style>