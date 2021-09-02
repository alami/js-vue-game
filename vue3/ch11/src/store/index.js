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
    mutations: {
        changeTitle(state,payload) {
            state.appTitle = payload
        }
    },
    actions: {
        changeTitle({commit},payload) {
            commit('changeTitle',payload)
        }
    },

    getters: {
        upperCaseTitle(state) {
            return state.appTitle.toUpperCase()
        }
    },
})