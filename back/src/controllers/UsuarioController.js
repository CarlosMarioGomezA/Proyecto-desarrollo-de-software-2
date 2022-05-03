const jwt = require('jsonwebtoken')
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
                let payload = {id: data.id};
                let token = jwt.sign(payload,process.env.PRIVATE_KEY);
                res.status(201).json({token});
            }
        });

    }

    login(req,res){
        let {correo, password} = req.body;

        conexion.query('select * from usuario where email = ? and password_usuario = ?',[correo, password], (err, data) => {
            if(err){
                res.status(500).json({error});
            }else{
                if(data !== null && data !== undefined){
                    let payload = {id: data.id};
                    let token = jwt.sign(payload,process.env.PRIVATE_KEY);
                    res.status(200).json({token});
                }else{
                    res.status(401).json({info: 'Credenciales inválidas'});
                }
            }
        })
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
                    res.status(200).send(data);
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