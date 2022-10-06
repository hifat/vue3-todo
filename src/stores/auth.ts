import { defineStore } from 'pinia'
import { AuthUser, Credentials } from '../types/auth'
import * as AuthService from "../common/service/auth"
import * as TokenService from "../common/service/token"
import router from '../routers'

interface AuthState {
   isAuth: boolean
   authUser: AuthUser
   errors: any
}

export const useAuthStore = defineStore('auth', {
   state: (): AuthState => ({
      isAuth: !!TokenService.getRefreshToken(),
      authUser: {
         id: "",
         username: "",
         name: "",
         created_at: null,
         updated_at: null,
      },
      errors: '',
   }),
   getters: {
      getAuthUser: ({ authUser }) => authUser,
      getErrors: ({ errors }) => errors,
      getIsAuth: ({ isAuth }) => isAuth,
   },
   actions: {
      async login(credentials: Credentials) {
         const res = await AuthService.login(credentials)

         if(res.auth) {
            this.authUser = {
               ...this.authUser,
               ...res.auth.user,
            }
            this.isAuth = true
   
            TokenService.saveRefreshToken(res.auth.refresh_token)
            TokenService.saveAccessToken(res.auth.access_token)

            router.push({ name: 'Task' })
         } else {
            this.errors = res.error
         }
      }
   },
})