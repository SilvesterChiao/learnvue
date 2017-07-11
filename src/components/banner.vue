<template>
    <div>
        <p>{{ msg }}</p>
        <p>{{ number }}</p>
        <button @click="emitMyEvent">emit</button>
        <slot name="header">no slot</slot>
        <p>中间</p>
        <slot name="footer">no slot</slot>
    </div>
</template>

<script>
export default {
    name: 'banner',
    data() {
        return {
            msg: 'banner'
        }
    },
    props: ['number'],
    methods: {
        emitMyEvent() {
            this.$emit('my-event', this.msg)
        }
    }
}
</script>
