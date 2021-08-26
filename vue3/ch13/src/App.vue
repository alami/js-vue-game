<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Динамические и Асинхронные компоненты</h2>
      <app-button
          :color="active==='one'?'primary':''"
          @action="active='one'"
      >One</app-button>
      <app-button
          :color="active==='two'?'primary':''"
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
    }
  },
 components: {AppButton,AppTextOne,AppTextTwo},
}
</script>

<style>

</style>
