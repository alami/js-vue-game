<template>
  <div class="container">
    <app-alert
        :alert="alert"
        @close="alert=null"
    ></app-alert>
    <form class="card" @submit.prevent="creatPerson">
      <h2>Работа с базой данных</h2>

      <div class="form-control">
        <label for="name"></label>
        <input type="text" id="name" v-model.trim="name">
      </div>

      <button class="btn primary" :disabled="name.length === 0">Создать человека</button>
    </form>

    <app-loader v-if="loading"></app-loader>

    <app-people-list
      v-else
      :people="people"
      @load="loadPeople"
      @remove="removePerson"
    ></app-people-list>
  </div>
</template>

<script>
import AppPeopleList from './AppPeopleList'
import AppLoader from './AppLoader'
import AppAlert from './AppAlert'
import axios from 'axios'
export default {
  data() {
    return {
      urlfb: '',
      name: '',
      people: [],
      alert: null,
      loading: false,
    }
  },
  mounted() {
    this.loadPeople()
  },
  methods: {
    async creatPerson() {
      const response =
await fetch(this.urlfb+'people.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              firstName: this.name
            })
          })
      const firebasedata = await response.json  //console.log(firebasedata)
      this.people.push({
        firstName: this.name,
        id: firebasedata.name
      })
      this.name = ''
    },
    async loadPeople () {
      try {
        this.loading = true
setTimeout(async ()=>{
        const {data} =
            await axios.get(this.urlfb+'people.json')
        if (!data) {
          throw new Error('Список людей пуст')
        }
//setTimeout(()=>{
        const res = Object.keys(data).map(key => {
          return {
            id: key,
            ...data[key]    // firstName: data[key].firstName
          }
        })
        this.people = res   // console.log(res)
        this.loading = false
},1500)
      } catch (e) {
        this.alert = {//console.log(e.message)
          type: 'danger',
          title: 'Ошибка!',
          text: e.message,
        }
        this.loading = false
      }
    },
    async removePerson (id) {
      try {
        const name = this.people.find(person => person.id === id).firstName
        await axios.delete(this.urlfb+`people/${id}.json`)
        this.people = this.people.filter(person => person.id !== id)
        this.alert = {
          type: 'primary',
          title: 'Успешно!',
          text: `Пользователь ${name} удален`,
        }
      } catch (e) {
          console.log(e.message)
      }
    },
  },
  components: {AppPeopleList, AppAlert, AppLoader},
}
</script>

<style>

</style>
