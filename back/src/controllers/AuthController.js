const jwt = require('jsonwebtoken');
const conexion = require("../database/conexionBD");
const Usuario = require('../models/Usuario');

class AuthController {

    //metodo que autentica a los usuarios
    login(req, res) {
        let { correo, password } = req.body;
        let usu = new Usuario();

        conexion.query('select * from usuarios where email = ?', correo,  (err, data) => {
            if (err) {
                res.status(500).json({ err });  //devuelve error al consultar de manera erronea a bd
            } else {
                try {
                    let passDB = data[0].password_usuario;
                    let coincidePassword =  usu.desencriptarPassword(passDB) === password? true : false; //compara el password del usuario con la de bd
		    
                    if (coincidePassword) { //valida si coincide el password

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

    validaToken(req, res){
        let token = req.params.token;

        //token decodificado
        let decoded = jwt.verify(token, process.env.PRIVATE_KEY);

        conexion.query('select * from usuarios where id = ?', decoded.id,  (err, data) => {
            if (err) {
                res.status(500).json({ err });  //devuelve error al consultar de manera erronea a bd
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

    // recuperarPassword(req, res){
    //     let { correo } = req.body;

    //     conexion.query('select * from usuarios where email = ?', correo, (err, data) => {
    //         if (err) {
    //             res.status(500).send(err);
    //         } else {
    //             if (data[0] !== null && data[0] !== undefined){
    //                 let payload = { id: data[0].id };
    //                 let token = jwt.sign(payload, process.env.PRIVATE_KEY);
    //                 usu = data[0];
    //                 res.status(200).json({ token, usuario: usu });
    //             }else{
    //                 res.status(404).json({ info: 'Correo no encontrado' });
    //             }
    //         }
    //     });
    // }
}



module.exports = AuthController;