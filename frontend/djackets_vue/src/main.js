import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bulma/css/bulma.min.css';

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import store from './store';
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';

axios.defaults.baseURL = "http://127.0.0.1:8000"

const app = createApp(App)

app.use(router)
app.use(store)
app.use(ToastPlugin)


app.mount('#app')
