import { createStore }  from 'vuex'
export default createStore({
    state() {
        return {
            counter: 1,
        }
    },
    mutations: {
        increment(state){
            state.counter++
        },
        add(state,payload){
            state.counter+=payload.value
        },
    },
    getters:{
      counter(state) {
        if (state.counter >10) return state.counter + ' !'
        return state.counter
      },
        doubleCounter(state, getters) {
            if (state.counter <= 10) return state.counter*2
            else return 0
        },
    },
})