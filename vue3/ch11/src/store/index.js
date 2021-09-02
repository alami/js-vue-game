import { createStore }  from 'vuex'
import counterModule  from './modules/counters'

export default createStore({
    modules: {
        count: counterModule
    },
    state() {
        return {
            appTitle: 'Vuex working !'
        }
    },
    getters: {
        upperCaseTitle(state) {
            return state.appTitle.toUpperCase()
        }
    },
})