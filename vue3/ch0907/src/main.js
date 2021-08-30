import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'
import translatePlugin from "../translatePlugin";

const app=createApp(App)

const ru={
    app: {
        title: 'Как работают плагины во Вью ?',
        changeBtn: 'Переключить язык',
    }
}
const en={
    app: {
        title: 'How is plugins working in Vue ?',
        changeBtn: 'Toggle language',
    }
}

app.use(translatePlugin, {ru, en})
app.mount('#app')
