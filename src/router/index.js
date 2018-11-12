import Vue from 'vue'
import Router from 'vue-router'
import toastDemo from '@/view/demo/'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'toastDemo',
      component: toastDemo
    }
  ]
})
