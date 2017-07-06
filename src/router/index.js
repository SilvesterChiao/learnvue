import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Chat from '@/components/Chat'
import Login from '@/components/Login'
import Film from '@/components/Film'
import Element from '@/components/Element'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
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
    }
  ]
})
