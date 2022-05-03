require('dotenv').config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const UsuarioRouter  = require("./routes/UsuarioRouter");
const AuthRouter = require('./routes/AuthRouter');

class Server {

    constructor (){
        this.app = express();
        this.config();
    }

    config(){
        this.app.set('port', process.env.PORT || 3000);

        //Middlewares
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(cors());   //permite conexiones de origen cruzado

        //Ruta raíz del servidor
        let router = express.Router();
        router.get('/', (req, res) => {
            res.status(200).json({ "message": "All ok" });
        });

        //Rutas a usar
        this.app.use(router);
        
        let objUsuRouter = new UsuarioRouter();
        let objAuthRouter = new AuthRouter();
        this.app.use(objUsuRouter.router);
        this.app.use(objAuthRouter.router);

        //Servidor a la escucha
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'));
        });
    }

}

new Server();