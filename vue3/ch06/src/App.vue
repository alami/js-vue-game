<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{now}}</h2>
      <app-news></app-news>
      <app-news></app-news>
      <app-news></app-news>
    </div>
  </div>
</template>

<script>
import  AppNews from './AppNews'

export default {
  data  (){
    return {
      now: new Date().toLocaleDateString(),
      isOpen: false,
      news: [
          'Джо победил на выборах',
          'Вью 3 работате успешно',
      ],
    }
  },
  components: {
    'app-news': AppNews,
  }
}
</script>

<style>

</style>
