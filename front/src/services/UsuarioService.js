import axios from "@/services/axios";
class UsuarioService{

    async crearUsuario(usuario){
        await axios.post('/usuarios', usuario);
    }

    async obtenerUsuarios(){
        let array = await axios.get('/usuarios');
        return array;
       
    }
    
}
export default UsuarioService;


