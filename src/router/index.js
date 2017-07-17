import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Chat from '@/components/Chat'
import Login from '@/components/Login'
import Film from '@/components/Film'
import Element from '@/components/Element'
import Computed from '@/components/Computed'
import Vbind from '@/components/Vbind'
import Vif from '@/components/Vif'
import Vfor from '@/components/Vfor'
import Von from '@/components/Von'
import Vmodel from '@/components/Vmodel'
import Component from '@/components/Component'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/chat',
            name: 'Chat',
            component: Chat
        },
        {
            path: '/film',
            name: 'Film',
            component: Film
        },
        {
            path: '/element',
            name: 'Element',
            component: Element
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
        }
    ]
})
