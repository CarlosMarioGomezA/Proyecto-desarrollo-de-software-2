import axios from "axios";

class LoginService {

    constructor() {
        this.baseURL = 'http://localhost:3000/';
    }


    async iniciarSesion(objLogin) {
        let response;
        response = await axios.post(this.baseURL + 'auth', objLogin);

        return response;
    }
}

export default LoginService;