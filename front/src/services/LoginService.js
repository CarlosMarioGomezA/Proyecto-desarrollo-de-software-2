import axios from "@/services/axios";

class LoginService{
    async iniciarSesion(objLogin){
        let response;
        response = await axios.post('/auth', objLogin);

        return response;
    }
}

export default LoginService;