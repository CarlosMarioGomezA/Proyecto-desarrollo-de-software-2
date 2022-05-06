import { Usuario } from "@/interfaces/Usuario";
import axios from "@/services/axios";

export class UsuarioService{

    async crearUsuario(usuario: Usuario){
        await axios.post('/usuarios', usuario);
    }

    async obtenerUsuarios(){
        await axios.get('/usuarios');
    }
}

