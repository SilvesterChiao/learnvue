import Vue from 'vue'
import Vuex from 'vuex'
import animal from './modules/animal.js'
import dog from './modules/dog.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        number: 0
    },
    getters: {
        isZh (state) {
            if (state.number > 0) {
                return true
            } else {
                return false
            }
        }
    },
    mutations: {
        add (state) {
            state.number++
        },
        fu (state) {
            state.number = -state.number
        }
    },
    actions: {
        changFu (context, plolad) {
            return new Promise((resolve, reject) => {
                if (plolad.flag) {
                    setTimeout(() => {
                        context.commit('fu')
                        resolve()
                    }, 2000)
                } else {
                    reject()
                }
            })
        }
    },
    modules: {
        a: animal,
        b: dog
    }
})
