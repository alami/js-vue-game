<template>
<app-alert
    v-if="alert"
    title="Работаем с Composition"
    type="primary"
    @click="close"
></app-alert>
<div class="card">
  <h1>Переиспользование</h1>
  <button class="btn primary" @click="toggle">{{ alert?'Закрыть':'Показать' }} сообщение</button>
  <button class="btn" @click="navigate">Перейти на главную</button>
</div>
</template>

<script>
import {ref} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import AppAlert from '../AppAlert'
export default {
  setup(){
    const alert = ref(false)
    const router = useRouter()
    const route = useRoute()
    const navigate = () => router.push('/')
    const toggle = () => alert.value = !alert.value
    const close = () => alert.value = false
    return {
      navigate, alert, toggle, close,
    }
  },
  components: {AppAlert},
}
</script>

<style scoped>

</style>