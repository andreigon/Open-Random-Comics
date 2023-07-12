import { createApp } from 'vue'
import { createPinia } from 'pinia'

import axios from 'axios'

import App from './App.vue'
import router from './router'

import './assets/normalize.css'

const app = createApp(App)
// app.use(axios)
app.use(createPinia())
app.use(router)
app.mount('axios')
app.mount('#app')
