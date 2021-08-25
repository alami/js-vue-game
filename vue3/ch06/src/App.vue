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
        {title: 'Джо победил на выборах', id: 2},
        {title: 'Вью 3 работате успешно', id: 2},
      ],
    }
  },
  methods: {
    openNews() {
      this.openRate++
    },
    readNews () {
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
