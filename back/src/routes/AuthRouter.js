const express = require('express');
const AuthController = require('../controllers/AuthController');
const Autenticador = require('../middlewares/Autenticador');

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