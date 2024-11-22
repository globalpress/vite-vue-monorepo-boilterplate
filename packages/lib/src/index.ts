import { App } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import './style.css'

export { HelloWorld }

export default {
  install: (app: App) => {
    app.component('HelloWorld', HelloWorld)
  }
}
