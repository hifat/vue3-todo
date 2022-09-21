import { createRouter, createWebHistory } from 'vue-router'
import Task from '../pages/Task.vue'
import Login from '../pages/Login.vue'

const routes = [
   {
      path: '/',
      name: 'Task',
      component: Task,
   },
   {
      path: '/login',
      name: 'Login',
      component: Login,
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes,
})

export default router
