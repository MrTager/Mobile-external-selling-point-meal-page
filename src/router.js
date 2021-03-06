import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
          path: '/home',
          name: 'home',
          component: Home
      },
     /* {
          path: '/home',
          name: 'home',
          component: () => import('./views/Home.vue')
      },*/
    {
      path: '/about',
      name: 'about',
      component: () => import( './views/About.vue')
    },

    {
        path: '/shop',
        name: 'shop',
        component: () => import('./views/shop.vue')
    },

  ]
})
