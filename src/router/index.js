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
import Components from '@/pages/v/Components'
import Prop from '@/pages/v/Prop'
import Events from '@/pages/v/Events'
import Slot from '@/pages/v/Slot'
import Dynamic from '@/pages/v/Dynamic'
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
            path: '/components',
            name: 'Components',
            component: Components
        },
        {
            path: '/transitions',
            name: 'Transitions',
            component: Transitions
        },
        {
            path: '/prop',
            name: 'Prop',
            component: Prop
        },
        {
            path: '/events',
            name: 'Events',
            component: Events
        },
        {
            path: '/slot',
            name: 'Slot',
            component: Slot
        },
        {
            path: '/dynamic',
            name: 'Dynamic',
            component: Dynamic
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
