import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from '@/services/axios'

const tomaToken = () => {
    let token = localStorage.getItem('token');
    if (token){
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
    }
}

tomaToken();

createApp(App).use(router, axios).mount('#app')
