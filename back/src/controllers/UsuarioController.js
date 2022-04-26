const conexion = require("../database/conexionBD");
const Usuario = require("../models/Usuario");


class UsuarioController{

    //metodo para crear usuario en bd
    crearUsuario(req,res){
        let body = req.body;
        let usuario = new Usuario(body["nombreUsuario"],body["password"],body["nombre"],
                                    body["apellido"],body["direccion"],body["tipoDocumento"],
                                    body["documento"], body["correo"],body["rol"],body["telefono"]);

        req.getConnection((err,conn)=>{
            conn.query('insert into usuario set ?',[usuario], (err,data) => {
                if(err){
                    res.status(500).send();
                }else{
                    res.status(201).send();
                }
            });
        });
    }

    //metodo que obtiene todos los usuarios de bd
    obtenerUsuarios(req,res){
        // req.getConnection((err,conn)=>{
        //     conn.query('select * from usuario', (err,data) => {
        //         if(err){
        //             res.status(500).send();
        //         }else{
        //             res.status(200).send(data);
        //         }
        //     });
        // });

        conexion.query('select * from usuario', (err,data) => {
                    if(err){
                        res.status(500).send();
                    }else{
                        res.status(200).send(data);
                    }
        });
    }

    //metodo que obtiene un usuario en especifico de bd
    obtenerUsuario(req,res){
        req.getConnection((err,conn)=>{
            conn.query('select * from usuario', (err,data) => {
                if(err){
                    res.status(500).send();
                }else{
                    res.status(200).send(data);
                }
            });
        });
    }
}

module.exports = UsuarioController;