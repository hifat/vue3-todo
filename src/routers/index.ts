import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import Task from '../pages/Task.vue'
import Login from '../pages/Login.vue'
import NotFound from '../pages/NotFound.vue'

const routes = [
   {
      path: '/',
      name: 'Task',
      component: Task,
      meta: {
         requiresAuth: true,
      }
   },
   {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
         requiresAuth: false,
      }
   },
   {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: NotFound,
      meta: {
         requiresAuth: false,
      }
   },
]

const router = createRouter({
   history: createWebHistory(),
   routes,
})

router.beforeEach((to, from, next) => {
   const authStore = useAuthStore()
   const isAuth = authStore.getIsAuth

   if (to.matched.some(({ meta }) => meta.requiresAuth) && !isAuth) {
      next({ name: 'Login' })
   }
   next()
})

export default router
