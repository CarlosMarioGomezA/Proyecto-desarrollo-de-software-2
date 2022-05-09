const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const Autenticador = require('../middlewares/Autenticador');

class UsuarioRouter {

    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        //instance to controller
        const ctrl = new UsuarioController();
        const auth = new Autenticador();
        this.router.post('/usuarios', [auth.verificaToken, auth.verificaEstado, auth.verificaEsAdmin], ctrl.crearUsuario);
        this.router.get('/usuarios', [auth.verificaToken, auth.verificaEstado, auth.verificaEsAdmin], ctrl.obtenerUsuariosActivos);
        this.router.get('/usuarios/:id', [auth.verificaToken, auth.verificaEstado, auth.verificaEsAdmin], ctrl.obtenerUsuario);
        this.router.put('/usuarios/:id', [auth.verificaToken, auth.verificaEstado, auth.verificaEsAdmin], ctrl.actualizarUsuario);
    }

}

module.exports = UsuarioRouter;