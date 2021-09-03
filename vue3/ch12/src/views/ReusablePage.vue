<template>
<app-alert
    v-if="simpleAlert"
    title="Работаем с Composition"
    type="primary"
    @click="close"
></app-alert>
<div class="card">
  <h1>Переиспользование</h1>
  <pre>{{alert}}</pre>
  <button class="btn primary" @click="toggle">{{ simpleAlert?'Закрыть':'Показать' }} сообщение</button>
  <button class="btn" @click="navigate">Перейти на главную</button>
</div>
</template>

<script>
import {useRouter, useRoute} from 'vue-router'
import AppAlert from '../AppAlert'
import {useAlert} from "../use/alert";
import {reactive} from "vue";
export default {
  setup(){
    const {alert:simpleAlert,toggle,close} = useAlert()
    const router = useRouter()
    const route = useRoute()
    const navigate = () => router.push('/')
    const alert = reactive({
      type:'warning', title:'REactive Alert'
    })
    return {
      navigate, alert, simpleAlert, toggle, close,
    }
  },
  components: {AppAlert},
}
</script>

<style scoped>

</style>