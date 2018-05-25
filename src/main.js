// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import animate from 'animate.css'
import 'animate.css/animate.css'
import App from './App'
import Index from './Index'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(animate)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<Index/>',
    components: { Index }
})
