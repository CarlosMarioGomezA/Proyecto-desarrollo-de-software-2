const conexion = require("../database/conexionBD");
const Usuario = require("../models/Usuario");


class UsuarioController {

    //metodo para crear usuario en bd
    crearUsuario(req, res) {
        let body = req.body;
        let usuario = new Usuario(body["nombreUsuario"], body["password"], body["nombre"],
            body["apellido"], body["direccion"], body["tipoDocumento"],
            body["documento"], body["correo"], body["rol"], body["telefono"]);

        conexion.query('insert into usuario set ?', [usuario], (err, data) => {
            if (err) {
                res.status(500).send();
            } else {
                res.status(201).send();
            }
        });

    }

    //metodo que obtiene todos los usuarios con estado activo de bd
    obtenerUsuariosActivos(req, res) {
        conexion.query("select * from usuario where estado = 'Activo' ", (err, data) => {
            if (err) {
                res.status(500).send();
            } else {
                res.status(200).send(data);
            }
        });
    }

    //metodo que obtiene un usuario en especifico de bd
    obtenerUsuario(req, res) {
        let id = req.params.id;

        if(id !== null && id !== undefined && id !== ""){
            conexion.query('select * from usuario where id = ?',[id],(err, data) => {
                if (err) {
                    res.status(500).send();
                } else {
                    res.status(200).send();
                }
            });
        }else{
            res.status(400).send();
        }
        
    }

    //metodo que actualiza los datos de un usuario en especifico de bd
    actualizarUsuario(req, res){
        let id = req.params.id;
        let body = req.body;
        let usuario = new Usuario(body["nombreUsuario"], body["password"], body["nombre"],
            body["apellido"], body["direccion"], body["tipoDocumento"],
            body["documento"], body["correo"], body["rol"], body["telefono"],body["estado"]);

        if(id !== null && id !== undefined && id !== ""){
            conexion.query('update usuario set ? where id = ?',[usuario,id],(err, data) => {
                if (err) {
                    res.status(500).send();
                } else {
                    res.status(200).send();
                }
            });
        }else{
            res.status(400).send();
        }
    }
    
}

module.exports = UsuarioController;