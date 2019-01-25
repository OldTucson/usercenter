import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Index from './views/Index'
import Page1 from './views/Page1'
import Edit from './views/Edit'
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/menu/edit/:id',
      component: Edit
    }, {
      path: '/page1',
      component: Page1
    }
  ]
})
