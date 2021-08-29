import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from "../translatePlugin";

const app=createApp(App)
app.use(translatePlugin, {test:1})
app.mount('#app')
