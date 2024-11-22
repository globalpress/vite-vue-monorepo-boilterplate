import HelloWorld from './components/HelloWorld.vue'

export { HelloWorld }

export default {
  install: (app: any) => {
    app.component('HelloWorld', HelloWorld)
  }
}
