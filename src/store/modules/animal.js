export default {
    state: {
        name: '小马',
        age: 3,
        color: 'white',
        count: 0
    },
    getters: {
        doubleAnimalCount (state, getters, rootState) {
            return state.count * 2
        }
    },
    mutations: {
        incrementAnimal (state) {
            state.count++
            console.log('animal: mutations')
        }
    },
    actions: {
        incrementAnimal ({ state, commit, rootState }) {
            commit('incrementAnimal')
            console.log('animal: actions')
            console.log('rootState', rootState)
        }
    }
}
