require('dotenv').config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const UsuarioRouter  = require("./routes/UsuarioRouter");
const AuthRouter = require('./routes/AuthRouter');
const VehiculoRouter = require('./routes/VehiculoRouter');

/**
   *
   * @author Juanfran 
*/


/* Crea un servidor. */
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
        this.app.use(cors()); 

        //Ruta raíz del servidor
        let router = express.Router();
        router.get('/', (req, res) => {
            res.status(200).json({ "message": "All ok" });
        });

        //Rutas a usar
        this.app.use(router);
        
        let objUsuRouter = new UsuarioRouter();
        let objAuthRouter = new AuthRouter();
        let objVehiculoRouter = new VehiculoRouter();
        this.app.use(objUsuRouter.router);
        this.app.use(objAuthRouter.router);
        this.app.use(objVehiculoRouter.router);

        //Servidor a la escucha
        this.app.listen(this.app.get('port'), () => {
            console.log("Servidor corriendo por el puerto => ", this.app.get('port'));
        });
    }

}

new Server();