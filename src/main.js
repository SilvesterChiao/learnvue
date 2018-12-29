// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import animate from 'animate.css'
import 'animate.css/animate.css'
import App from './App'
import router from './router'
import store from './store/index'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI, { size: 'small' })
Vue.use(animate)

Vue.prototype.axios = axios

// 注册一个全局自定义指令 'v-focus'
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时......
    inserted: function (el) {
        // 聚焦元素
        el.focus()
    }
})

Vue.component('component-main', {
    template: '<div>component-main</div>'
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
