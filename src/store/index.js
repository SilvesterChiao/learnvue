import Vue from 'vue'
import Vuex from 'vuex'
import animal from './modules/animal.js'
import dog from './modules/dog.js'
import cat from './modules/cat.js'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        number: 0
    },
    getters: {
        isZh (state, getters) {
            console.log('getters', getters)
            if (state.number > 0) {
                return true
            } else {
                return false
            }
        },
        isFu: state => number => {
            return state.number === number
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
                    }, 500)
                } else {
                    reject()
                }
            })
        }
    },
    modules: {
        a: animal,
        d: dog,
        c: cat
    }
})
