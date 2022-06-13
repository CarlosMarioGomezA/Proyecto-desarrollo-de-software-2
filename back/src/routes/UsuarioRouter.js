const express = require('express');
const UsuarioController = require('../controllers/UsuarioController');
const Autenticador = require('../middlewares/Autenticador');

/**
   *
   * @author Juanfran 
*/


/* Una clase de controlador que maneja las solicitudes del usuario. */
class UsuarioRouter {

    constructor() {
        this.router = express.Router();
        this.config();
    }

    config() {
        //instance to controller
        const ctrl = new UsuarioController();
        const auth = new Autenticador();
        this.router.post('/usuarios', [auth.verificaToken, auth.verificaEstado, auth.verificaEsAdmin, auth.validaUsuarioExistente], ctrl.crearUsuario);
        this.router.get('/usuarios', [auth.verificaToken, auth.verificaEstado, auth.verificaEsAdmin], ctrl.obtenerUsuariosActivos);
        // this.router.get('/usuarios/:id', [auth.verificaToken, auth.verificaEstado, auth.verificaEsAdmin], ctrl.obtenerUsuario);
        this.router.put('/usuarios/:documento', [auth.verificaToken, auth.verificaEstado, auth.verificaEsAdmin, auth.validaCorreoExistente], ctrl.actualizarUsuario);
    }

}

module.exports = UsuarioRouter;