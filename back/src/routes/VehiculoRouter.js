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
            this.router.post('/vehiculos',  ctrl.crearVehiculo);
            this.router.get('/vehiculos/:placa', ctrl.obtenerVehiculos);
            // this.router.get('/vehiculos/:id', [auth.verificaToken, auth.verificaEstado, auth.verificaEsAdmin], ctrl.obtenerVehiculo);
            // this.router.put('/vehiculos/:id', [auth.verificaToken, auth.verificaEstado, auth.verificaEsAdmin], ctrl.actualizarVehiculo);
        }
    
}

module.exports = VehiculoRouter;