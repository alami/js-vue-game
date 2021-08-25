<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто: {{ openRate }} | Прочитано: {{ readRate }}</span>
    </div>
    <app-news
        v-for="item in news" :key="item.id"
        :title="item.title"
        :id="item.id"
        :is-open="item.isOpen"
        :was-read="item.wasRead"
        @open-news="openNews"
        @read-news="readNews"
    ></app-news>
  </div>
</template>

<script>
import  AppNews from './AppNews'

export default {
  data  (){
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRate: 0,
      news: [
        {title: 'Джо победил на выборах', id: 1, isOpen: false, wasRead:false},
        {title: 'Вью 3 работате успешно', id: 2, isOpen: false, wasRead:false},
      ],
    }
  },
  methods: {
    openNews() {
      this.openRate++
    },
    readNews (id) {
      const idx = this.news.findIndex(news => news.id === id)
      this.news[idx].wasRead = true
      this.readRate++
    }
  },
  components: {
    'app-news': AppNews,
  }
}
</script>

<style>

</style>
