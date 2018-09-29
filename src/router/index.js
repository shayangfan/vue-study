import Vue from 'vue'
import Router from 'vue-router'
import CodeMirror from '@/components/CodeMirror'
import index from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/CodeMirror',
      name: 'CodeMirror',
      component: CodeMirror
    }
  ]
})
