<template>
  <div class="container">
    <div class="card" v-if="show">
      <h2 v-color:[type].blink="mycolor">Ди⁠рективы</h2>
      <div class="form-control">
        <label for="inp">Активный по умолчанию</label><br>
        <input type="text" id="inp" v-focus>
      </div>
      <button class="btn" @click="mycolor=mycolor==='darkblue'?'darkred':'darkblue'">Сделать синим</button>
      <button class="btn" @click="type=type==='color'?'background-color':'color'">Переключить тип</button>
      {{type}}
    </div>
  </div>
</template>

<script>
import focusDirective from "./focusDirective";
import colorDirective from "./colorDirective";

export default {
  data(){
    return {
      mycolor: 'darkred',
      type: 'color',
      show: true,
    }
  },
  mounted() {
    setTimeout(()=>{
      this.show = false
    },5000)
  },
  directives: {
    focus: focusDirective,
    color: colorDirective,
  }
}
</script>

