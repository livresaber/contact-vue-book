import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Maska from 'maska'
import App from './App.vue'
import router from './router'
import './assets/main.scss'

createApp(App).use(createPinia()).use(router).use(Maska).mount('#app')
