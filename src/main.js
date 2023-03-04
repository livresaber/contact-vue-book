import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { vMaska } from "maska"
import App from './App.vue'
import router from './router'
import './assets/main.scss'

createApp(App).directive("maska", vMaska).use(createPinia()).use(router).mount('#app')
