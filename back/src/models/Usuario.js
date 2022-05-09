const bcrypt = require('bcrypt'); //libreria usada para encriptar
const res = require('express/lib/response');

class Usuario {

    constructor(password, nombre, apellido, direccion, tipoDocumento, documento, correo, rol, telefono, estado, intentos){
        this.password_usuario = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.tipo_documento = tipoDocumento;
        this.numero_documento = documento;
        this.email = correo;
        this.id_rol = rol;
        this.telefono = telefono;
        this.id_estado = estado; 
        this.intentos = intentos;
    }

    //getters and setters a usar
    getPassword = () =>{
        return this.password_usuario;
    }

    setPassword = (password) =>{
        this.password_usuario = password;
    }

    getEstado = () =>{
        return this.estado;
    }

    setEstado = (estado) =>{
        this.estado = estado;
    }

    //retorna password encriptado
    encriptarPassword = async(password) => {
        let salt = await bcrypt.genSalt(10);  //argumento necesario para encriptar
        return await bcrypt.hash(password, salt);   
    }

    //retorna booleano con resultado de la comparación
    compararPassword = async(passwordAcomparar, passwordBD) => {
        return await bcrypt.compare(passwordAcomparar, passwordBD); 
    }

}

module.exports = Usuario;

