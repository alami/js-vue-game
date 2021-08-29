import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'

createApp(App)
    .directive('focus',{
        mounted(el){
            el.focus() //console.log('Focus el',el)
        }
    })
    .mount('#app')
