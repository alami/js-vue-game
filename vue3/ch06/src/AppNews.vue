<template>
  <div class="card">
    <h3>{{title}}</h3>
    <app-button @action="open" :text="isNewsOpen?'Close':'Open'"></app-button>
    <app-button color="danger" text="Отметить непрочитанной" v-if="wasRead" @action="$emit('unmark', id)"></app-button>
    <div v-if="isNewsOpen">
      <hr />
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, odit.</p>
      <app-button v-if="!wasRead" color="primary" @action="mark" text="Read news"></app-button>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton'
export default {
  props: //['title',],
      {
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
    /*unmark () {
      this.$emit('unmark', this.id)
    },*/
  },
  components: {AppButton}
}
</script>

