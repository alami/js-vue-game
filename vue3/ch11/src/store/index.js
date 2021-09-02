import { createStore }  from 'vuex'
import counterModule  from './modules/counters'
import mutations  from './mutations'
import actions  from './actions'

export default createStore({
    modules: {
        count: counterModule
    },
    state() {
        return {
            appTitle: 'Vuex working !'
        }
    },
    mutations,
    actions,
    getters: {
        upperCaseTitle(state) {
            return state.appTitle.toUpperCase()
        }
    },
})