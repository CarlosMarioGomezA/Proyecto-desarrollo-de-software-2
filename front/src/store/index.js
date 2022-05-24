import { createStore } from "vuex";
import UsuarioService from "../services/UsuarioService";


export const store = createStore({
    state: {
        usuario: null,
        token: localStorage.getItem('token')
    },
    actions: {
        setUsuario(context, usuario){
            context.commit('setUser', usuario);
        },
        async validaToken(context){
            let usu = new UsuarioService();
            let res = await usu.validaToken();
            let usuario = res.data.usuario;
            context.commit('setUser', usuario);
        }   
    },
    mutations: {
        setUser(state, usuario){
            state.usuario = usuario;
        },
    },
    getters: {
        getUsuario: (state) => {
            return state.usuario;
        },
        
        getToken(state){
            return state.token;
        }
    }
});