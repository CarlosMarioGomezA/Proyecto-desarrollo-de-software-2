const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');

class UsuarioRouter{

    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        //instance to controller
        const ctrl = new UsuarioController();
        this.router.post('/usuarios',ctrl.crearUsuario);
        this.router.get('/usuarios',ctrl.obtenerUsuariosActivos);
        this.router.get('/usuarios/:id',ctrl.obtenerUsuario);
        this.router.put('/usuarios/:id',ctrl.actualizarUsuario);
        this.router.post('/usuarios/auth',ctrl.login);
    }

}

module.exports = UsuarioRouter;