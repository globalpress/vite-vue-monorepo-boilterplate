import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import ViteVueLib from '@vite-vue-monorepo/lib'

const app = createApp(App)
app.use(ViteVueLib)
app.mount('#app')
