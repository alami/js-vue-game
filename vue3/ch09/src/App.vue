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
    <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from './components/AppAlert'
import AppBlock from './components/AppBlock'
import alertMixin from './AlertMixin'

export default {
  mixins: [alertMixin],
  components: {AppAlert, AppBlock},
}
</script>

