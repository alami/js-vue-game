<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и Асинхронные компоненты</h2>
      <app-button
          :color="oneColor"
          @action="active='one'"
      >One</app-button>
      <app-button
          :color="twoColor"
          @action="active='two'"
      >Two</app-button>
    </div>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import AppButton from "./AppButton"
import AppTextOne from "./AppTextOne"
import AppTextTwo from "./AppTextTwo"

export default {
  data() {
    return {
      active: 'one' //two
    }
  },
  computed: {
    componentName() {
      /*if (this.active === 'one') return 'app-text-one'
            return 'app-text-two'*/
      return 'app-text-'+this.active
    },
    oneColor () { return this.active==='one'?'primary':''},
    twoColor () { return this.active==='two'?'primary':''},
  },
 components: {AppButton,AppTextOne,AppTextTwo},
}
</script>

<style>

</style>
