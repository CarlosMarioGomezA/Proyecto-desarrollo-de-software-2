const express = require('express');
const AuthController = require('../controllers/AuthController');

class AuthRouter{

    constructor(){
        this.router = express.Router();
        this.config();
    }

    config(){
        //instance to controller
        const ctrl = new AuthController();
        this.router.post('/auth',ctrl.login);
    }

}

module.exports = AuthRouter;