export default {
    state: {
        name: '小马',
        age: 3,
        color: 'white',
        count: 0
    },
    getters: {
        doubleAnimalCount (state) {
            return state.count * 2
        }
    },
    mutations: {
        increment (state) {
            state.count++
            console.log('animal: mutations')
        }
    },
    actions: {
        increment ({ commit }) {
            commit('increment')
            console.log('animal: actions')
        }
    }
}
