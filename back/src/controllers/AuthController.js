const jwt = require('jsonwebtoken');
const Usuario = require('../models/Usuario');
const ConexionBD = require("../database/conexionBD");
const conexion = ConexionBD.getPool();

/**
   *
   * @author Juanfran 
*/

class AuthController {

    
    /* Una función que se llama cuando el usuario intenta iniciar sesión. */
    login(req, res) {
        let { correo, password } = req.body;
        let usu = new Usuario();

        conexion.query('select * from usuarios where email = ?', correo,  (err, data) => {
            if (err) {
                res.status(500).json({ err });  
            } else {
                try {
                    let passDB = data[0].password_usuario;
                    let coincidePassword =  usu.desencriptarPassword(passDB) === password? true : false; 
		    
                    if (coincidePassword) { 
                        conexion.query('update usuarios set intentos = ? where email = ?', [0, correo]);

                        let payload = { id: data[0].id };
                        let token = jwt.sign(payload, process.env.PRIVATE_KEY);
                        usu = data[0];
                        res.status(200).json({ token, usuario: usu });
                    } else {
                        conexion.query('update usuarios set intentos = intentos + 1 where email = ?', correo)
                        res.status(401).json({ info: 'Credenciales inválidas' });
                    }
                } catch (error) {
                    res.status(401).json({ info: 'Credenciales inválidas' });
                }
            }
        });
    };

   /**
    * Toma un token de la solicitud, lo verifica y luego devuelve los datos del usuario si el token es
    * válido.
    * @param req - solicitud
    * @param res - El objeto de respuesta.
    */
    validaToken(req, res){
        let token = req.params.token;

        let decoded = jwt.verify(token, process.env.PRIVATE_KEY);

        conexion.query('select * from usuarios where id = ?', decoded.id,  (err, data) => {
            if (err) {
                res.status(500).json({ err });  
            } else {
                if(data[0] !== undefined && data[0] !== null){
                    let usu = data[0];
                    res.status(200).json({ usuario: usu });
                }else{
                    res.status(401).send()
                }
            }
        });

    }

}



module.exports = AuthController;