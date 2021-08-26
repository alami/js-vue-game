<template>
  <div class="card">
    <h2>{{title}}</h2>
    <app-button @action="open">{{isNewsOpen?'Close':'Open'}}</app-button>
    <app-button color="danger" v-if="wasRead" @action="$emit('unmark', id)">Отметить непрочитанной</app-button>
    <div v-if="isNewsOpen">
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, odit.</p>
      <app-button v-if="!wasRead" color="primary" @action="mark">Read news</app-button>

      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton'
import AppNewsList from './AppNewsList'
export default {
  props: {
        title: String,
        id: Number,
        isOpen: Boolean,
        wasRead: Boolean
      },
  emits: {
    'open-news': null,
    'read-news'(id) {
      if (id) {
        return true
      }
      console.warn('Empty "id" parameter for emit("read-news")')
      return false
    },
    unmark: null,
  },
  data() {
    return {
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open() {
      this.isNewsOpen=!this.isNewsOpen
      if (this.isNewsOpen) {
        this.$emit('open-news')
      }
    },
    mark(){
      this.isNewsOpen=false
      this.$emit('read-news', this.id)
    },
  },
  components: {AppButton, AppNewsList}
}
</script>

