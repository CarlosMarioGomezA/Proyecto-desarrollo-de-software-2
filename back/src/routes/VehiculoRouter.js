const express = require('express');
const VehiculoController = require('../controllers/VehiculoController');
const Autenticador = require('../middlewares/Autenticador');

/**
   *
   * @author Juanfran 
*/

class VehiculoRouter{
    
        constructor(){
            this.router = express.Router();
            this.config();
        }
    
        config(){
            //instance to controller
            const ctrl = new VehiculoController();
            const auth = new Autenticador();
            this.router.post('/vehiculos', [auth.verificaToken, auth.verificaEstado], ctrl.crearVehiculo);
            this.router.get('/vehiculos', [auth.verificaToken, auth.verificaEstado], ctrl.obtenerVehiculos);
            this.router.get('/vehiculos/:placa', [auth.verificaToken, auth.verificaEstado], ctrl.obtenerVehiculo);
        }
    
}

module.exports = VehiculoRouter;