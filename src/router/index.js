import Vue from 'vue'
import Router from 'vue-router'

// Vue官网教程
import Hello from '@/pages/v/Hello'
import Introduce from '@/pages/v/Introduce'
import Template from '@/pages/v/Template'
import Vbind from '@/pages/v/Vbind'
import Vif from '@/pages/v/Vif'
import Vfor from '@/pages/v/Vfor'
import Von from '@/pages/v/Von'
import Vmodel from '@/pages/v/Vmodel'
import Component from '@/pages/v/Component'
import Transition from '@/pages/v/Transition'

// ElementUI
import Element from '@/pages/element/Element'
import Film from '@/pages/element/Film'

Vue.use(Router)

export default new Router({
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
            path: '/transition',
            name: 'Transition',
            component: Transition
        },
        {
            path: '/element',
            name: 'Element',
            component: Element
        },
        {
            path: '/film',
            name: 'Film',
            component: Film
        }
    ]
})
