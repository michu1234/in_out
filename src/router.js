import Vue from 'vue'
import Router from 'vue-router'
import Todo from './views/TodoApp.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    }
  ]
})