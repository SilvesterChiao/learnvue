<template>
    <div>
        <h3>guild</h3>
        <p>
            default
        </p>
        <img :src="VueRouterHook" alt="vue-router导航守卫">
    </div>
</template>
<script>
import VueRouterHook from './../../assets/images/vue_router_hook.png'

export default {
    data () {
        return {
            VueRouterHook
        }
    },
    created () {
        console.log('created')
    }
}
</script>
<style scoped>
</style>
