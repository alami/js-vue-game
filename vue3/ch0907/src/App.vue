<template>
  <div class="container">
    <div class="card">
    <h3>{{$i18n('app.title')}}</h3>
      <button class="btn" @click="changeLang">{{$i18n('app.changeBtn')}}</button>
    </div>
  </div>
</template>

<script>
export default {
  inject:['changeI18N'],
  methods: {
    changeLang() {
      this.changeI18N('en')
      this.$forceUpdate()
    }
  }
}
</script>

