import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from "./routers"
import App from './App.vue'
import './style.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App)
app.use(router)
app.use(createPinia()).mount('#app')
