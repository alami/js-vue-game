import { createApp, defineAsyncComponent } from 'vue'

import App from './App.vue'
// import App from './App_ch13slot.vue'

import './theme.css'

const app = createApp(App)
//global
app.component('async-component', defineAsyncComponent(()=>{
    return import('./AppAsyncComponent')
}))
app.mount('#app')
