<template>
    <div>
        <div>
            <h3>vuex</h3>
            <div>
                <h5></h5>
                <div>
                    <p>{{ number }}</p>
                    <p>{{ isZh }}</p>
                    <button @click="add">add</button>
                    <button @click="changeFu">changeFu</button>
                </div>
            </div>
            <div>
                <h5>modules</h5>
                <div>
                    <p>动物数量: {{ animalCount }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    computed: {
        number () {
            return this.$store.state.number
        },
        isZh () {
            return this.$store.getters.isZh
        },
        animalCount () {
            return this.$store.state.a.count
        }
    },
    methods: {
        add () {
            this.$store.commit('add')
            this.$store.commit('increment')
        },
        changeFu () {
            this.$store.dispatch('changFu', {
                flag: true
            }).then(() => {
                console.log('action')
            })
        }
    },
    created () {
    }
}
</script>

<style scoped>
</style>
