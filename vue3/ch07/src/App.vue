<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
    <app-input
        placeholder="Введи имя"
        :error="errors.name"
        label="Как тебя зовут?"
        v-model:value="name"
    ></app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input type="number" id="age" v-model.number="age">
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="spb">Санкт-Петербург</option>
          <option value="msk">Москва</option>
          <option value="kzn">Казань</option>
          <option value="nsk">Новосибирск</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label><input type="radio" name="trip" v-model="relocate" value="yes"/> Да</label>
        </div>

           <div class="checkbox">
          <label><input type="radio" name="trip" v-model="relocate" value="no"/> Нет</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="Vuex"/> Vuex</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="CLI"/> Vue CLI</label>
        </div>
        <div class="checkbox">
          <label><input type="checkbox" v-model="skills" name="skills" value="Router"/> Vue Router</label>
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Правила компании</span>
        <div class="checkbox">
          <label><input type="checkbox" v-model="agree"/> Согласен</label>
        </div>
      </div>
        <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from "./AppInput"
export default {
 data() {
   return {
     name: '',
     age: 20,
     city: 'nsk',
     relocate: null,
     skills: [],
     agree: false,
     errors: {
       name:null,
     }
   }
 },
 methods: {
   formIsValid() {
     let isValid=true
     if (this.name.length===0) {
       this.errors.name = 'Введите непустое имя'
       isValid=false
     } else {
       this.errors.name = null
     }
     return isValid
   },
   submitHandler(){
     if (this.formIsValid()) {
       console.group('Form Data')
       console.log('Name', this.name)
       console.log('Age', this.age)
       console.log('City', this.city)
       console.log('To Tokio', this.relocate)
       console.log('Skills', this.skills)
       console.log('Rules agree', this.agree)
       console.groupEnd()
       // console.log('Age',typeof this.age)
       // console.log('Name',this.$refs.nameInput.value)
     }
   }
 },
  components: {AppInput},
}
</script>

<style>
.form-control small {color: #e53935}
.form-control.invalid input {border-color: #e53935}
</style>
