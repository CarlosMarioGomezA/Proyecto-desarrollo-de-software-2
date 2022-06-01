import axios from "axios";
/**
 * @author SebasRome & Juanfran
 */

class UsuarioService {

    constructor(){
        this.baseURL = 'http://localhost:3000/';
    }
    
    /* Una función que toma el token del almacenamiento local y lo devuelve. */
    tomaToken = () => {
        let token = localStorage.getItem('token');
        if (token) {
            return { 'Authorization': 'Bearer ' + token }
        }
    }

    /**
     * Toma un token del almacenamiento local, lo envía al servidor y devuelve la respuesta
     * @returns La respuesta del servidor.
     */

    async validaToken() {
        let token = localStorage.getItem('token');
        let response = await axios.post(this.baseURL + 'auth/' + token);
        return response;
    }

    /**
     * Crea un usuario.
     * @param usuario - el objeto que contiene los datos que se enviarán al servidor.
     * @returns La respuesta del servidor.
     */
    
    async crearUsuario(usuario) {
        let array = await axios.post(this.baseURL + 'usuarios', usuario, {headers: this.tomaToken()});
        return array;
    }


   /**
    * Obtiene los usuarios de la base de datos.
    * @returns La matriz de usuarios.
    */
    async obtenerUsuarios() {
        let array = await axios.get(this.baseURL + 'usuarios', {headers: this.tomaToken()});
        return array;

    }

    /**
     * Actualiza la información del usuario.
     * @param usuario - Este es el objeto que contiene los datos a actualizar.
     * @returns El usuario actualizado.
     */
    async ActualizarUsuario(usuario) {
        let array = await axios.put(this.baseURL + 'usuarios/' + usuario.documento, usuario, {headers: this.tomaToken()});
        return array;
    }

    

}
export default UsuarioService;


