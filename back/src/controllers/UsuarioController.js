const conexion = require("../database/conexionBD");
const Usuario = require("../models/Usuario");
const Pregunta = require("../models/Pregunta")


class UsuarioController {

    //metodo para crear usuario en bd
    crearUsuario(req, res) {
        let body = req.body;
        let pregunta = new Pregunta(body["pregunta"], body["respuestaPregunta"]);
        let usuario = new Usuario(body["password"], body["nombre"],
            body["apellido"], body["direccion"], body["tipoDocumento"],
            body["documento"], body["correo"], body["rol"], body["telefono"], 1, 0);

        //encripta contraseña
        let pass = usuario.getPassword();
        let passHash = usuario.encriptarPassword(pass);
        usuario.setPassword(passHash);
        
        conexion.query('insert into usuarios set ?',[usuario], () =>{
            conexion.query('insert into detalles_preguntas_usuarios (id_pregunta, cedula_usuario, respuesta_pregunta) values (?, ?, ?)', 
            [pregunta.getPregunta(), usuario.getDocumento(), pregunta.getRespuesta()], (err, data) => {
                if (err) {
                    res.status(500).send(err);
                } else {
                    res.status(201).json({ info: "usuario creado!" });
                }
            });
        });
        
    }

    //metodo que obtiene todos los usuarios con estado activo de bd
    obtenerUsuariosActivos(req, res) {
        conexion.query("select * from usuarios where id_estado <> 3 ", (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(data);
            }
        });
    }

    //metodo que obtiene un usuario en especifico de bd
    obtenerUsuario(req, res) {
        let id = req.params.id;

        if (id !== null && id !== undefined && id !== "") {
            conexion.query('select * from usuarios where id = ?', [id], (err, data) => {
                if (err) {
                    res.status(500).send();
                } else {
                    res.status(200).send(data);
                }
            });
        } else {
            res.status(400).send();
        }

    }

    //metodo que actualiza los datos de un usuario en especifico de bd
    actualizarUsuario(req, res) {
        let documento = req.params.documento;
        let body = req.body;
        let usuario = new Usuario(body["password"], body["nombre"],
            body["apellido"], body["direccion"], body["tipoDocumento"],
            body["documento"], body["correo"], body["rol"], body["telefono"], body["estado"], 0);
        let fechaActual;
        
        if (documento !== null && documento !== undefined && documento !== "") {
            if(usuario.getEstado() === '2'){
                fechaActual = new Date().toString();
                conexion.query('update usuarios set ?, fecha_bloqueo = ? where numero_documento = ?', [usuario, fechaActual, documento], (err, data) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.status(200).send();
                    }
                });
            }else{
                conexion.query('update usuarios set ? where numero_documento = ?', [usuario, documento], (err, data) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.status(200).send();
                    }
                });
            }
        } else {
            res.status(400).send();
        }
    }

}

module.exports = UsuarioController;