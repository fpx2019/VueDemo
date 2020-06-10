import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import mint from '@/components/mint-ui'
import note from '@/components/notepad'
import bar from '@/components/0420router'
import notFound from '@/components/notFound'
import axio from '@/components/axios'
import promise from '@/components/promise'
import dashboard from '@/components/dashboard'
import detail from '@/components/detail'
import joke from '@/components/joke'
import subDetail from '@/components/0427detail'
import vuex from '@/components/0428vuex'
import todo from '@/components/todolist'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/notFound',
      name: 'notFound',
      component: notFound
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mint',
      name: 'mint',
      component: mint
    },
    {
      path: '/note',
      name: 'note',
      component: note
    },
    {
      path: '/bar/:sku',
      name: 'bar',
      component: bar,
      //单个路由的守卫
      beforeEnter: (to, from, next) => {
        if (localStorage.getItem('className') != 'class1') {
          alert('禁止入内!')
        }
        next()
      }
    },
    {
      path: '*',
      redirect: '/notFound'
    },
    {
      path: '/axio',
      name: 'axio',
      component: axio
    },
    {
      path: '/promise',
      name: 'promise',
      component: promise
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/detail/:sid',
      name: 'detail',
      component: detail
    },
    {
      path: '/joke',
      name: 'joke',
      component: joke,
      children: [
        {
          path: ':sid',
          name: 'subDetail',
          component: subDetail,
        }
      ]
    },
    {
      path: '/vuex',
      name: 'vuex',
      component: vuex
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo
    },


  ]
})
