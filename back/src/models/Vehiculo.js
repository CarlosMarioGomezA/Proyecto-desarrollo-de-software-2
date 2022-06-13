/**
   *
   * @author Juanfran 
*/

class Vehiculo{

    constructor(placa, marca, modelo, tipo_combustible, consumo_combustible, impuesto_vehiculo, avaluo, licencia_transito, tarjeta_operaciones, cedula_propietario, tipo_vehiculo){
        this.placa = placa;
        this.marca = marca;
        this.avaluo = avaluo;
        this.impuesto_vehiculo = impuesto_vehiculo;
        this.modelo = modelo;
        this.cedula_propietario = cedula_propietario;
        this.tipo_combustible = tipo_combustible;
        this.consumo_combustible = consumo_combustible;
        this.licencia_transito = licencia_transito;
        this.tarjeta_operaciones = tarjeta_operaciones;
        this.tipo_vehiculo = tipo_vehiculo;
    }

    getPlaca(){
        return this.placa;
    }

    getMarca(){
        return this.marca;
    }   

    getModelo(){    
        return this.modelo;
    }

    getTipoCombustible(){
        return this.tipo_combustible;
    }

    getConsumoCombustible(){
        return this.consumo_combustible;
    }

    getImpuestoVehiculo(){
        return this.impuesto_vehiculo;
    }

    getAvaluo(){
        return this.avaluo;
    }

    getLicenciaTransito(){
        return this.licencia_transito;
    }

    getTarjetaOperaciones(){
        return this.tarjeta_operaciones;
    }

    getCedulaPropietario(){
        return this.cedula_propietario;
    }
    
    getTipoVehiculo(){
        return this.tipo_vehiculo;
    }

    setPlaca(placa){
        this.placa = placa;
    }

    setMarca(marca){
        this.marca = marca;
    }

    setModelo(modelo){
        this.modelo = modelo;
    }

    setTipoCombustible(tipo_combustible){
        this.tipo_combustible = tipo_combustible;
    }

    setConsumoCombustible(consumo_combustible){
        this.consumo_combustible = consumo_combustible;
    }

    setImpuestoVehiculo(impuesto_vehiculo){
        this.impuesto_vehiculo = impuesto_vehiculo;
    }

    setAvaluo(avaluo){
        this.avaluo = avaluo;
    }

    setLicenciaTransito(licencia_transito){
        this.licencia_transito = licencia_transito;
    }

    setTarjetaOperaciones(tarjeta_operaciones){
        this.tarjeta_operaciones = tarjeta_operaciones;
    }

    setCedulaPropietario(cedula_propietario){
        this.cedula_propietario = cedula_propietario;
    }

    setTipoVehiculo(tipo_vehiculo){
        this.tipo_vehiculo = tipo_vehiculo;
    }

}

module.exports = Vehiculo;