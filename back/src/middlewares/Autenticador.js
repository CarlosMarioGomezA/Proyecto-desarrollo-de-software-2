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
            conexion.query('select * from usuarios where id = ?', req.idUsuario, (err, data) => {
                if (err) {
                    res.status(404).json({ info: "Usuario no encontrado" });
                } else {
                    next();
                }
            });
        } catch (error) {
            res.status(401).json({ info: "No está autenticado" });
        }
    }

    verificaEstado(req, res, next) {
        conexion.query('select * from usuarios where id = ?', req.idUsuario, (err, data) => {
            if (data[0].id_estado !== 2) {
                next();
            } else {
                res.status(401).json({ info: 'Acceso bloqueado' });
            }
        });
    }

    verificaEsAdmin(req, res, next) {
        conexion.query('select * from usuarios where id = ?', req.idUsuario, (err, data) => {
            if (err) {
                res.status(404).json({ info: "Usuario no encontrado" });
            } else {
                let rolUsuario = data[0].id_rol;

                if (rolUsuario !== 1) {
                    res.status(403).json({ info: "No está autorizado" });
                } else {
                    next();
                }
            }
        });
    }

    validaBloqueo(req, res, next) {
        let { correo } = req.body;
        conexion.query('select * from usuarios where email = ?', correo, (err, data) => {
            if (err) {
                res.status(500).json({ err });
            } else {
                if (data[0] !== null && data[0] !== undefined){
                    if (data[0].intentos < 3 && data[0].id_estado !== 2) {
                        next();
                    } else {
                        let fechaBD = new Date(data[0].fecha_bloqueo);
                        let fechaActual = new Date();
                        const difFechas = fechaActual - fechaBD;
                        const tiempoBloqueo = 1200000;
                        let tiempoRestante = tiempoBloqueo - difFechas;
    
                        if (data[0].intentos > 2 && data[0].fecha_bloqueo == undefined) {
                            fechaActual = new Date().toString();
                            conexion.query('update usuarios set id_estado = 2, fecha_bloqueo = ? where email = ?', [fechaActual, correo]);
                            let payload = { id: data[0].id };
                            let token = jwt.sign(payload, process.env.PRIVATE_KEY, { expiresIn: '1200s' });
                            res.status(401).json({ info: 'Usuario bloqueado', token });
                        } else {
                            tiempoRestante = tiempoRestante.toString();
    
                            if (difFechas < tiempoBloqueo) {
                                let payload = { id: data[0].id };
                                let token = jwt.sign(payload, process.env.PRIVATE_KEY, { expiresIn: tiempoRestante });
                                res.status(401).json({ info: 'Usuario bloqueado', token });
                            } else {
                                conexion.query("update usuarios set id_estado = 1, intentos = 0 ,fecha_bloqueo = ? where email = ?", [null, correo]);
                                res.status(401).json({ info: 'Inicie nuevamente' });
                            }
    
                        }
                    }
                }else{
                    res.status(401).json({ info: 'Credenciales inválidas' });
                }
                
            }
        });
    }

    validaUsuarioExistente(req, res, next){
        let {documento, correo} = req.body;
        conexion.query('select * from usuarios where numero_documento = ?', documento, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (data[0] !== null && data[0] !== undefined){
                    res.status(500).json({info: "usuario con documento existente"});
                }else{
                    conexion.query('select * from usuarios where email = ?', correo, (err, data) => {
                        if (err) {
                            res.status(500).send(err);
                        } else {
                            if (data[0] !== null && data[0] !== undefined){
                                res.status(500).json({info: "usuario con correo existente"});
                            }else{
                                next();
                            }
                        }
                    });
                }
            }
        });
    }

    validaCorreoExistente(req, res, next){
        let {documento, correo} = req.body;
        conexion.query('select * from usuarios where email = ?', correo, (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                if (data[0] !== null && data[0] !== undefined){

                    if (data[0].numero_documento === documento){
                        next();
                    }else{
                        res.status(500).json({info: "correo existente"});
                    }
                }else{
                    next();
                }
            }
        });
    }

}

module.exports = Autenticador;