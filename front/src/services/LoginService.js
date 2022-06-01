import axios from "axios";

/**
 * @author SebasGonza & Juanfran
 */

class LoginService {

    constructor() {
        this.baseURL = 'http://localhost:3000/';
    }


    /**
     * Envía una solicitud POST al servidor con las credenciales del usuario y devuelve la respuesta.
     * @param objLogin - Este es el objeto que contiene el nombre de usuario y la contraseña.
     * @returns La respuesta del servidor.
     */
    async iniciarSesion(objLogin) {
        let response;
        response = await axios.post(this.baseURL + 'auth', objLogin);

        return response;
    }
}

export default LoginService;