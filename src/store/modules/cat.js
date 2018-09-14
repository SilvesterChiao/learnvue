export default {
    state: {
        name: '花花',
        age: 3,
        color: 'orange',
        count: 0
    },
    getters: {
        doubleCatCount (state) {
            return state.count * 2
        }
    },
    mutations: {
        incrementCat (state) {
            state.count++
            console.log('cat: mutations')
        }
    },
    actions: {
        incrementCat ({ commit }) {
            commit('incrementCat')
            console.log('cat: actions')
        }
    }
}
