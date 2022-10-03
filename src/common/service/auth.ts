import { request } from "./api"
import { Credentials } from '../../types/auth'

export const get = async (): Promise<any> => {
   return await request('get', '/api/tasks')
}

export const login = async (data: Credentials): Promise<any> => {
   return await request('post', '/api/auth/login', data, false)
}
