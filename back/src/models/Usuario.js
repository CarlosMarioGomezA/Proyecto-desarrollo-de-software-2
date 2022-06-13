const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotallySecretKey');

/**
   *
   * @author Juanfran 
*/


/* Una clase que representa a un usuario. */
class Usuario {

    constructor(password, nombre, apellido, direccion, tipoDocumento, documento, correo, rol, telefono, estado, intentos){
        this.password_usuario = password;
        this.nombres = nombre;
        this.apellidos = apellido;
        this.direccion = direccion;
        this.tipo_documento = tipoDocumento;
        this.numero_documento = documento;
        this.email = correo;
        this.id_rol = rol;
        this.telefono = telefono;
        this.id_estado = estado; 
        this.intentos = intentos;
        this.fecha_bloqueo = "";
    }

    //getters and setters a usar
    getPassword = () =>{
        return this.password_usuario;
    }

    setPassword = (password) =>{
        this.password_usuario = password;
    }

    getEstado = () =>{
        return this.id_estado;
    }
    
    setEstado = (estado) =>{
        this.id_estado = estado;
    }

    setDocumento = (documento) =>{
        this.numero_documento = documento;
    }

    getDocumento = () =>{
        return this.numero_documento;
    }


    getPregunta = () =>{
        return this.pregunta;
    }

    setPregunta = (pregunta) =>{
        this.pregunta = pregunta;
    }

    //retorna password encriptado
    encriptarPassword = (password) => {
        return cryptr.encrypt(password);   
    }

    //retorna booleano con resultado de la comparación
    desencriptarPassword = (passwordBD) => {
        return cryptr.decrypt(passwordBD);
    }

}

module.exports = Usuario;

