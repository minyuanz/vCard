import './assets/main.css'

import { createApp } from 'vue'

import App from './App.vue'
import appUse from './use'

const app = createApp(App)

appUse(app)

app.mount('#app')
