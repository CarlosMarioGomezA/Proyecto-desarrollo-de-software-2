const Vehiculo = require('../models/Vehiculo');
const ConexionBD = require("../database/conexionBD");
const conexion = ConexionBD.getPool();

/**
   *
   * @author Juanfran
*/

/* Es una clase que tiene un método que crea un vehículo y otro método que obtiene la información de un
vehículo. */
class VehiculoController {

    crearVehiculo(req, res) {
        let body = req.body;
        let vehiculo = new Vehiculo(body["placa"], body["marca"], body["modelo"],body["tipoCombustible"], 
        body["consumoCombustible"], body["impuestoVehiculo"], body["avaluo"], body["licenciaTransito"], 
        body["tarjetaOperaciones"], body["cedulaPropietario"], body["tipoVehiculo"], body["aceiteMotor"], 
        body["aceiteTransmision"], body["frenosDelanteros"], body["frenosTraseros"], body["bateriaPrincipal"], 
        body["bateriaSecundaria"], body["suspencionDelantera"], body["suspencionTrasera"]);

        conexion.query("call registrar_vehiculos(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
        [vehiculo.getPlaca(), vehiculo.getMarca(), vehiculo.getAvaluo(), vehiculo.getImpuestoVehiculo(), 
            vehiculo.getModelo(), vehiculo.getCedulaPropietario(), vehiculo.getTipoCombustible(), vehiculo.getConsumoCombustible(), 
            vehiculo.getLicenciaTransito(), vehiculo.getTarjetaOperaciones(), vehiculo.getTipoVehiculo(), vehiculo.getAceite(0), 
            vehiculo.getAceite(1), vehiculo.getFreno(0), vehiculo.getFreno(1), vehiculo.getBateria(0), vehiculo.getBateria(1), 
            vehiculo.getSuspencion(0), vehiculo.getSuspencion(1)], (err, result) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(201).json({ info: "Vehiculo creado!" });
            }
        });
    }

    obtenerVehiculo(req, res) {
        let placa = req.params.placa;
        conexion.query("call obtener_informacion_vehiculo(?)", placa, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                console.log(data)
                res.status(200).json(data[0]);
            }
        });
    }

    obtenerVehiculos(req, res) {
        conexion.query("call obtener_vehiculos()", (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).json(data[0]);
            }
        });
    }


}

module.exports = VehiculoController;