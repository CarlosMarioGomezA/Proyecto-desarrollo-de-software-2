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

    async ActualizarUsuario(usuario){
        let array = await axios.put('/usuarios/' + usuario.documento, usuario);
        return array;
     }
    
}
export default UsuarioService;


