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
                res.status(500).json({ error });
            } else {
                if (data !== null && data !== undefined) {
                    let passDB = data[0].password_usuario;
                    let coincidePassword = await usu.compararPassword(password, passDB); //compara el password del usuario con la de bd
                                                                                      
                    if (coincidePassword) {
                        let payload = { id: data.id };
                        let token = jwt.sign(payload, process.env.PRIVATE_KEY); //le asigna token 
                        res.status(200).json({ token });
                    } else {
                        res.status(401).json({ info: 'Credenciales inválidas' });
                    }
                } else {
                    res.status(401).json({ info: 'Credenciales inválidas' });
                }
            }
        });
    }
}

module.exports = AuthController;