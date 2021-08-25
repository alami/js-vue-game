<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{now}}</h2>
      <app-news
          v-for="item in news" :key="item.id"
          :title="item.title"
          :id="item.id"
          :is-open="item.isOpen"
      ></app-news>
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
        {title: 'Джо победил на выборах', id: 2},
        {title: 'Вью 3 работате успешно', id: 2},
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
