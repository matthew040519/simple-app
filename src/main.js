import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const csrfToken = document.querySelector('meta[name="csrf-token"]').content;
const app = createApp(App)

app.use(router)

app.mount('#app')

