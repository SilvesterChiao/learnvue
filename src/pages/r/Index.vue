<template>
    <div style="flex: 1;">
        <h1>vue-router基础</h1>
        <div>
            <h3>安装</h3>
            <p>
                1. npm install --save vue-router <br> 2. import Vue from 'vue' <br> import VueRouter from 'vue-router' <br> 3. Vue.use(VueRouter)
                <br>
                <img :src="RouterImg" alt="">
            </p>
            <input type="text" name="link" id="link" v-model="link">
            <button @click="toRouter">转到{{ link }}</button>
            <div>
                <h3>命名视图</h3>
                <p>
                    需要定义多个子组件
                </p>
                <div>
                    <router-view name="default"></router-view>
                    <router-view name="left"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// vue-router基础
import RouterImg from './../../assets/images/vue_router.png'

export default {
    data () {
        return {
            RouterImg,
            link: '/'
        }
    },
    methods: {
        toRouter () {
            this.$router.push(this.link)
            // 不会添加到history记录
            // this.$router.replace(this.link)
            // 前进/后退
            // this.$router.go(1)
        }
    },
    beforeCreate () {
        console.log('beforeCreate')
    },
    created () {
        console.log('created')
    },
    beforeRouteEnter (to, from, next) {
        console.log('beforeRouteEnter', to)
        next()
    },
    beforeRouteUpdate (to, from, next) {
        console.log('beforeRouteUpdate', to)
        next()
    },
    beforeRouteLeave (to, from, next) {
        console.log('beforeRouteLeave', to)
        next()
    }
}
</script>
<style scoped>
</style>
