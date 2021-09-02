export default  {
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
    actions:{
        incrementAsync({commit}, payload) {
            setTimeout( ()=>{
                commit('add',{value:10})
            },payload.delay)
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
}