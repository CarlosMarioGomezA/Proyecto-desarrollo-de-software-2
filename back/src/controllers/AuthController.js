const jwt = require('jsonwebtoken');
const conexion = require("../database/conexionBD");
const Usuario = require('../models/Usuario');

class AuthController {

    //metodo que autentica a los usuarios
    login(req, res) {
        let { correo, password } = req.body;
        let usu = new Usuario();

        conexion.query('select * from usuario where email = ?', correo, async (err, data) => {
            if (err) {
                res.status(500).json({ err });  //devuelve error al consultar de manera erronea a bd
            } else {
                try {
                    if (data[0].intentos < 3 && data[0].id_estado !== 2) { //valida que usuario no este bloqueado
                        let passDB = data[0].password_usuario;
                        let coincidePassword = await usu.compararPassword(password, passDB); //compara el password del usuario con la de bd

                        if (coincidePassword) { //valida si coincide el password
                            conexion.query('update usuario set intentos = ? where email = ?', [0, correo]);
                            let payload = { id: data[0].id };
                            let token = jwt.sign(payload, process.env.PRIVATE_KEY);
                            res.status(200).json({ token });
                        } else {
                            conexion.query('update usuario set intentos = intentos + 1 where email = ?', correo)
                            res.status(401).json({ info: 'Credenciales inválidas' });
                        }
                    } else {
                        if (data[0].intentos > 2) {
                            conexion.query('update usuario set id_estado = 2 where email = ?', correo);
                            let payload = { id: data[0].id };
                            let token = jwt.sign(payload, process.env.PRIVATE_KEY, { expiresIn: '12s' });
                            res.status(401).json({ info: 'Usuario bloqueado', token });
                        }else{
                            let payload = { id: data[0].id };
                            let token = jwt.sign(payload, process.env.PRIVATE_KEY, { expiresIn: '12s' });
                            res.status(401).json({ info: 'Usuario bloqueado', token });
                        }

                    }
                } catch (error) {
                    res.status(401).json({ info: 'Credenciales inválidas' });
                } 
            }
        });
    }
}



module.exports = AuthController;