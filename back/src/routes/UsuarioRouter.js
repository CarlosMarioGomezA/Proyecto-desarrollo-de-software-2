const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');

class UsuarioRouter{

    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        //instance to controller
        const crtl = new UsuarioController();
        this.router.post('/usuarios',crtl.crearUsuario);
        this.router.get('/usuarios',crtl.obtenerUsuariosActivos);
        this.router.get('/usuarios/:id',crtl.obtenerUsuario);
        this.router.put('/usuarios/:id',crtl.actualizarUsuario);
    }

}

module.exports = UsuarioRouter;