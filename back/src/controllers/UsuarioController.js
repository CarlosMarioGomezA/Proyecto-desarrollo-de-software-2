const Usuario = require("../models/Usuario");
const Pregunta = require("../models/Pregunta")
const ConexionBD = require("../database/conexionBD");
const conexion = ConexionBD.getPool();
/**
   *
   * @author Juanfran
*/


/* Una clase de controlador que maneja las solicitudes del usuario. */
class UsuarioController {
    
    /**
     * Estoy tratando de insertar un nuevo usuario en la base de datos, pero necesito insertar una
     * nueva fila en otra tabla con la identificación del usuario y la respuesta a una pregunta.
     * </código>
     * @param req - solicitud
     * @param res - el objeto de respuesta
     */
    crearUsuario(req, res) {
        let body = req.body;
        let pregunta = new Pregunta(body["pregunta"], body["respuestaPregunta"]);
        let usuario = new Usuario(body["password"], body["nombre"],
            body["apellido"], body["direccion"], body["tipoDocumento"],
            body["documento"], body["correo"], body["rol"], body["telefono"], 1, 0);

        let pass = usuario.getPassword();
        let passHash = usuario.encriptarPassword(pass);
        usuario.setPassword(passHash);
        
        conexion.query('insert into usuarios set ?',[usuario], (err, data) =>{
            if (err) {
                res.status(500).send(err);
            } else {
                conexion.query('insert into detalles_preguntas_usuarios (id_pregunta, cedula_usuario, respuesta_pregunta) values (?, ?, ?)', 
                [pregunta.getPregunta(), usuario.getDocumento(), pregunta.getRespuesta()], (err, data) => {
                    if (err) {
                        res.status(500).send(err);
                    } else {
                        res.status(201).json({ info: "usuario creado!" });
                    }
                });
            }
        });
        
    }

    
    /**
     * Es una función que devuelve una lista de usuarios de una base de datos.
     * @param req - solicitud
     * @param res - El objeto de respuesta.
     */
    obtenerUsuariosActivos(req, res) {
        conexion.query("select * from usuarios where id_estado <> 3 ", (err, data) => {
            if (err) {
                res.status(500).send(err);
            } else {
                res.status(200).send(data);
            }
        });
    }

    
    /**
     * Obtiene un usuario de la base de datos por id.
     * @param req - solicitud
     * @param res - El objeto de respuesta.
     */
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

    
    /**
     * Actualiza un usuario en la base de datos, si el usuario está bloqueado, también actualiza la
     * fecha del bloqueo.
     * @param req - solicitud
     * @param res - el objeto de respuesta
     */
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