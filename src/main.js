import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Maska from 'maska'

import App from './App.vue'
import router from './router'

import './assets/main.scss'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(Maska)

app.mount('#app')
