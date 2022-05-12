import axios from "@/services/axios";
class UsuarioService{

    async crearUsuario(usuario){
       let array = await axios.post('/usuarios', usuario);
       return array;
    }

    async obtenerUsuarios(){
        let array = await axios.get('/usuarios');
        return array;
       
    }
    
}
export default UsuarioService;


