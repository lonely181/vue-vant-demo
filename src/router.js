import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/goods',
      name: 'goods',
      component: () => import(/* webpackChunkName: "about" */  './views/goods/index.vue')
    },
    {
      path: '/tabbar',
      name: 'tabbar',
      component: () => import('./views/tabbar/index.vue')
    },
    {
      path: '/second',
      name: 'second',
      component: ()=>import('./views/tabbar/second.vue')
    },
    {
      path: '/page3',
      name: 'page3',
      component: ()=>import('./views/tabbar/page3.vue')
    },
    {
      path: '/tabbar/page/details',
      name: 'pageDetails',
      component: ()=>import('./views/tabbar/details.vue')
    },
    {
      path: '/travel',
      name: 'travel',
      component: ()=>import('./views/travel')
    },

    {
      path:'/dynamic',
      name:'dynamic',
      component: ()=>import('./views/vue/dynamic-component/dynamic.vue')
    }
  ],
    // 解决滚动到底部影响到其它页面
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
