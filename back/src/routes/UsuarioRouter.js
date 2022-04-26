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
        this.router.get('/usuarios',crtl.obtenerUsuarios);
        // this.router.delete('/users',crtl.deleteUser);
        // this.router.put('/users',crtl.updateUser);

    }

}

module.exports = UsuarioRouter;