<template>
  <div class="container">
    <div class="card">
    <h3>{{$i18n('app.title')}}</h3>
      <button class="btn" @click="changeLang">Переключить язык</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    changeLang() {
      console.log('changeLang')
    }
  }
}
</script>

