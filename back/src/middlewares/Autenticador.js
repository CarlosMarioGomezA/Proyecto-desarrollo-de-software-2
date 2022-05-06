const jwt = require('jsonwebtoken');
const conexion = require("../database/conexionBD");

class Autenticador {

    verificaToken(req, res, next) {
        try {
            let token; 

            if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
                token = req.headers.authorization.split(' ')[1];
            }

            if (!token) {
                return res.status(403).json({ info: "No encontro token" });
            }

            //token decodificado
            let decoded = jwt.verify(token, process.env.PRIVATE_KEY);
            req.idUsuario = decoded.id;
            conexion.query('select * from usuario where id = ?',req.idUsuario , (err, data) => {
                if (err) {
                    res.status(404).json({ info: "Usuario no encontrado" });
                } else {
                    next();
                }
            });
        } catch (error) {
            res.status(401).json({info: "No está autenticado"});
        }
    }

    verificaEsAdmin(req, res , next){
        conexion.query('select * from usuario where id = ?',req.idUsuario , (err, data) => {
            if (err) {
                res.status(404).json({ info: "Usuario no encontrado" });
            } else {
                let rolUsuario = data[0].id_rol;

                if(rolUsuario !== 1){
                    res.status(403).json({info: "No está autorizado"});
                }else{
                    next();
                }
            }
        });
    }

}

module.exports = Autenticador;