import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bulma/css/bulma.min.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

axios.defaults.baseURL = "http://127.0.0.1:8000"

const app = createApp(App)

app.use(router, axios)

app.mount('#app')
