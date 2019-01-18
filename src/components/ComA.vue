<template>
    <div>
        <slot name="header">
            <h3>{{ title }}</h3>
        </slot>
        <slot></slot>
    </div>
</template>
<script>
// props, slot, methods, event
// data, computed, watch
export default {
    props: {
        title: {
            type: String,
            require: true
        }
    },
    data () { },
    computed: {},
    watch: {},
    methods: {},
    created () { },
    mounted () {

    }
}
</script>
<style lang="scss" scoped>
</style>
