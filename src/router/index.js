import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import {resolve} from 'path';

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['../components/handers/home.vue'], resolve),
      children: [
        {
          path: '/',
          name: 'index',
          component: resolve => require(['../components/admin/homePage.vue'], resolve),
         },
        // {
        //   path: '/',
        //   name: 'index',
        //   component: resolve => require(['../components/index/index.vue'], resolve),
        // },
      ]
    }
  ]
})
