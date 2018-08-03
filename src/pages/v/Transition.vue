<template>
    <div>
        <button @click="show = !show">
            toggle
        </button>
    </div>
</template>

<script>
export default {
    name: 'transition',
    data () {
        return {
            show: true
        }
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0;
}
</style>
