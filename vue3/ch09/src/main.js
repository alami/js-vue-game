import { createApp } from 'vue'
import App from './App.vue'
import alertMixin from './AlertMixin'
import './theme.css'

createApp(App)
    .mixin(alertMixin)
    .mount('#app')
