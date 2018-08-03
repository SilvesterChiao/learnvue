<template>
    <div>
        <h3>过渡效果</h3>
        <button @click="show = !show">
            toggle
        </button>
        <transition name="fade">
            <p v-if="show">hello</p>
        </transition>
    </div>
</template>

<script>
// 进入/离开 & 列表过渡
export default {
    name: 'transitions',
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
