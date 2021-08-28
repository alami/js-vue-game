<template>
  <div class="container">
    <app-alert
        v-if="alert"
        title="Внимание!"
        text="Это важное сообщение, будте бдительны"
        type="danger"
        closable
        @close="alert=false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">{{alert?'Скрыть':'Показать'}} сообщение</button>
    </div>
  </div>
</template>

<script>
import AppAlert from './components/AppAlert'
export default {
  data(){
    return {
      alert: false
    }
  },
  methods: {
    toggleAlert() {
      this.alert = !this.alert
    },
  },
  components: {AppAlert},
}
</script>

