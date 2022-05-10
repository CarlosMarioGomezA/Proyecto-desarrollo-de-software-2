import axios from "@/services/axios";
class UsuarioService{

    async crearUsuario(usuario){
        await axios.post('/usuarios', usuario);
    }

    async obtenerUsuarios(){
        await axios.get('/usuarios');
    }
}
export default UsuarioService;


