import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/pages/v/Hello'

// Vue官网教程
import V from '@/pages/v/Index'
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
import Mixin from '@/pages/v/Mixin'

// vue-router教程
import R from '@/pages/r/Index'
import GuildDefault from '@/pages/r/GuildDefault'
import GuildLeft from '@/pages/r/GuildLeft'

// vuex教程
import X from '@/pages/x/Index'

// ElementUI
import Elementui from '@/pages/element/Introduce'
import Film from '@/pages/element/Film'

// 工具箱
import Markdown from '@/pages/toolbox/Markdown'
import ToolList from '@/pages/toolbox/ToolList'
import Layout from '@/pages/toolbox/Layout'
import Animate from '@/pages/toolbox/Animate'

// 算法
import Algorithm from '@/pages/algorithm/Index'
import Structure from '@/pages/structure/Index'

Vue.use(Router)

let router = new Router({
    mode: 'history',
    base: '/learnvue/',
    routes: [
        // vue
        {
            path: '/',
            name: 'Hello',
            component: Hello,
            meta: {
                CName: '首页'
            }
        },
        {
            path: '/v',
            name: 'VueIndex',
            component: V,
            meta: {
                CName: 'Vue'
            },
            children: [
                {
                    path: '',
                    meta: {
                        CName: '简介'
                    }
                },
                {
                    path: 'template',
                    name: 'Template',
                    component: Template,
                    meta: {
                        CName: '模板语法'
                    }
                },
                {
                    path: 'computed',
                    name: 'Computed',
                    component: Computed,
                    meta: {
                        CName: '计算属性'
                    }
                },
                {
                    path: 'v-bind',
                    name: 'V-bind',
                    component: Vbind,
                    meta: {
                        CName: '数据绑定'
                    }
                },
                {
                    path: 'v-if',
                    name: 'V-if',
                    component: Vif,
                    meta: {
                        CName: '条件渲染'
                    }
                },
                {
                    path: 'v-for',
                    name: 'V-for',
                    component: Vfor,
                    meta: {
                        CName: '列表渲染'
                    }
                },
                {
                    path: 'v-on',
                    name: 'V-on',
                    component: Von,
                    meta: {
                        CName: '事件处理'
                    }
                },
                {
                    path: 'v-model',
                    name: 'V-model',
                    component: Vmodel,
                    meta: {
                        CName: '表单输入绑定'
                    }
                },
                {
                    path: 'components',
                    name: 'Components',
                    component: Components,
                    meta: {
                        CName: '组件'
                    }
                },
                {
                    path: 'prop',
                    name: 'Prop',
                    component: Prop,
                    meta: {
                        CName: '属性'
                    }
                },
                {
                    path: 'events',
                    name: 'Events',
                    component: Events,
                    meta: {
                        CName: '自定义事件'
                    }
                },
                {
                    path: 'slot',
                    name: 'Slot',
                    component: Slot,
                    meta: {
                        CName: '插槽'
                    }
                },
                {
                    path: 'dynamic',
                    name: 'Dynamic',
                    component: Dynamic,
                    meta: {
                        CName: '动态组件'
                    }
                },
                {
                    path: 'transitions',
                    name: 'Transitions',
                    component: Transitions,
                    meta: {
                        CName: '过渡效果'
                    }
                },
                {
                    path: 'mixin',
                    name: 'Mixin',
                    component: Mixin,
                    meta: {
                        CName: '混入'
                    }
                }
            ]
        },
        // vue-router
        {
            path: '/r',
            name: 'RouterIndex',
            component: R,
            meta: {
                CName: '路由'
            },
            children: [
                {
                    path: '',
                    name: 'GuideChildren',
                    components: {
                        default: GuildDefault,
                        left: GuildLeft
                    },
                    meta: {
                        CName: '简介'
                    },
                    beforeEnter (to, from, next) {
                        console.log('beforeEnter', to)
                        next()
                    }
                }
            ]
        },
        // vuex
        {
            path: '/x',
            name: 'XIndex',
            component: X,
            meta: {
                CName: '状态管理器'
            }
        },
        // elementUI
        {
            path: '/elementui',
            name: 'Elementui',
            component: Elementui,
            meta: {
                CName: 'ElementUI'
            }
        },
        {
            path: '/film',
            name: 'Film',
            component: Film,
            meta: {
                CName: '影片管理'
            }
        },
        // 工具箱
        {
            path: '/markdown',
            name: 'Markdown',
            component: Markdown,
            meta: {
                CName: 'Markdown'
            }
        },
        {
            path: '/toollist',
            name: 'ToolList',
            component: ToolList,
            meta: {
                CName: 'TodoList'
            }
        },
        {
            path: '/layout',
            name: 'Layout',
            component: Layout,
            meta: {
                CName: '布局'
            }
        },
        {
            path: '/animate',
            name: 'Animate',
            component: Animate,
            meta: {
                CName: '动画'
            }
        },
        // 算法, 数据结构, 设计模式
        {
            path: '/algorithm',
            name: 'Algorithm',
            component: Algorithm,
            meta: {
                CName: '算法'
            }
        },
        {
            path: '/structure',
            name: 'Structure',
            component: Structure,
            meta: {
                CName: '数据结构'
            }
        }
    ]
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
    console.log('beforeEach', to)
    next()
})

router.beforeResolve((to, from, next) => {
    console.log('beforeResolve', to)
    next()
})

router.afterEach((to, from) => {
    console.log('afterEach', to)
})

export default router
