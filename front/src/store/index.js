import Vuex from "vuex";

export default new Vuex.Store({
    state: {
        usuario: null
    },
    actions: {
        user(context, user){
            context.commit('user', user);
        }
    },
    mutations: {
        user(state, user){
            state.usuario = user;
        }
    },
    getters: {
        usuario: (state) => {
            return state.usuario;
        }
    }
});