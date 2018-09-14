export default {
    state: {
        name: '灰灰',
        age: 2,
        color: 'black',
        count: 0
    },
    getters: {
        doubleDogCount (state) {
            return state.count * 2
        }
    },
    mutations: {
        incrementDog (state) {
            state.count++
            console.log('dog: mutations')
        }
    },
    actions: {
        incrementDog ({ commit }) {
            commit('incrementDog')
            console.log('dog: actions')
        }
    }
}
