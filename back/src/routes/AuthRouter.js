const express = require('express');
const AuthController = require('../controllers/AuthController');
const Autenticador = require('../middlewares/Autenticador');

/**
   *
   * @author Juanfran 
*/

/* Es una clase de enrutador que tiene un método de configuración que configura las rutas para el
controlador. */
class AuthRouter{

    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        //instance to controller
        const ctrl = new AuthController();
        const auth = new Autenticador();
        this.router.post('/auth', auth.validaBloqueo, ctrl.login);
        this.router.post('/auth/:token', ctrl.validaToken);
    }

}

module.exports = AuthRouter;