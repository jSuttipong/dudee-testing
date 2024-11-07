import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// CSS
import '../src/assets/css/main.css'
import '../src/assets/css/bootstrap/bootstrap.css'
import '../src/assets/css/bootstrap/bootstrap.min.css'

const pinia = createPinia()
const app = createApp(App)


app.use(router)
app.use(pinia)
app.mount('#app')