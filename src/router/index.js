import Vue from 'vue'
import Router from 'vue-router'

// Vue官网教程
import Hello from '@/pages/v/Hello'
import Introduce from '@/pages/v/Introduce'
import Template from '@/pages/v/Template'
import Computed from '@/pages/v/Computed'
import Vbind from '@/pages/v/Vbind'
import Vif from '@/pages/v/Vif'
import Vfor from '@/pages/v/Vfor'
import Von from '@/pages/v/Von'
import Vmodel from '@/pages/v/Vmodel'
import Component from '@/pages/v/Component'
import Transitions from '@/pages/v/Transitions'

// ElementUI
import Elementui from '@/pages/element/Element'
import Film from '@/pages/element/Film'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/introduce',
            name: 'Introduce',
            component: Introduce
        },
        {
            path: '/template',
            name: 'Template',
            component: Template
        },
        {
            path: '/computed',
            name: 'Computed',
            component: Computed
        },
        {
            path: '/v-bind',
            name: 'V-bind',
            component: Vbind
        },
        {
            path: '/v-if',
            name: 'V-if',
            component: Vif
        },
        {
            path: '/v-for',
            name: 'V-for',
            component: Vfor
        },
        {
            path: '/v-on',
            name: 'V-on',
            component: Von
        },
        {
            path: '/v-model',
            name: 'V-model',
            component: Vmodel
        },
        {
            path: '/component',
            name: 'Component',
            component: Component
        },
        {
            path: '/transitions',
            name: 'Transitions',
            component: Transitions
        },
        {
            path: '/element',
            name: 'Element',
            component: Elementui
        },
        {
            path: '/film',
            name: 'Film',
            component: Film
        }
    ]
})
