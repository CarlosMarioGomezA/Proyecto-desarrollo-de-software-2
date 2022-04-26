class Usuario {

    constructor(nombreUsuario, password, nombre, apellido, direccion, tipoDocumento, documento, correo, rol, telefono,estado){
        this.nombre_usuario = nombreUsuario;
        this.password_usuario = password;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.tipo_documento = tipoDocumento;
        this.numero_documento = documento;
        this.email = correo;
        this.id_rol = rol;
        this.telefono = telefono;
        if(!this.estado){
            this.estado = "Activo";
        }else{
            this.estado = estado;
        }
    }

}

module.exports = Usuario;

