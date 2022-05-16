import axios from "axios";
class UsuarioService {

    constructor(){
        this.baseURL = 'http://localhost:3000/';
    }
    
    tomaToken = () => {
        let token = localStorage.getItem('token');
        if (token) {
            return { 'Authorization': 'Bearer ' + token }
        }
    }

    async crearUsuario(usuario) {
        let array = await axios.post(this.baseURL + 'usuarios', usuario, {headers: this.tomaToken()});
        return array;
    }


    async obtenerUsuarios() {
        let array = await axios.get(this.baseURL + 'usuarios', {headers: this.tomaToken()});
        return array;

    }

    async ActualizarUsuario(usuario) {
        let array = await axios.put(this.baseURL + 'usuarios/' + usuario.documento, usuario, {headers: this.tomaToken()});
        return array;
    }

}
export default UsuarioService;


