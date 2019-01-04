<template>
    <div style="flex: 1;">
        计算属性
    </div>
</template>
<script>
// 计算属性
export default {
    data () {
        return {
            numbers: [1, 2, 3, 4]
        }
    },
    computed: {
        nmf: {
            get () {
                return this.numbers.map(item => item * 2)
            },
            set () {

            }
        }
    }
}
</script>
<style scoped>
</style>
