import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from "../translatePlugin";

const app=createApp(App)

const ru={
    app: {
        title: 'Как работают плагины во Вью ?'
    }
}
const en={
    app: {
        title: 'How is plugins working in Vue ?'
    }
}

app.use(translatePlugin, ru)
app.mount('#app')
