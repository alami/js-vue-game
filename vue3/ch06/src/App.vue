<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{now}}</h2>
      <app-news title="This is title N-1"></app-news>
      <app-news title="This is title N-2"></app-news>
      <app-news title="This is title N-3"></app-news>
    </div>
  </div>
</template>

<script>
import  AppNews from './AppNews'

export default {
  data  (){
    return {
      now: new Date().toLocaleDateString(),
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
