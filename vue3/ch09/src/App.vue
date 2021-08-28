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
      <button class="btn primary" @click="alert=true">показать сообщение</button>
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
  components: {AppAlert},
}
</script>

