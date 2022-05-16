import { createStore } from "vuex";


export const store = createStore({
    state: {
        usuario: null,
        token: localStorage.getItem('token')
    },
    actions: {
        setUsuario(context, usuario){
            context.commit('setUser', usuario);
        },
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