import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import about from '@/components/about'
import gallery from '@/components/gallery'
import mall from '@/components/mall'
import single from '@/components/single'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery
    },
    {
      path: '/mall',
      name: 'mall',
      component: mall
    },
    {
      path: '/single',
      name: 'single',
      component: single
    }
  ]
})
