import { request } from './api'
import { Task, NewTask, UpdateTask } from '../../types/task'

export const get = async (): Promise<any> => {
   return await request('get', '/api/attach')
}

export const create = async (data: NewTask): Promise<any> => {
   return await request('post', '/api/attach', data, false)
}

export const show = async (id: string): Promise<any> => {
   return await request('get', `/api/attach/${id}`)
}

export const update = async (id: string, data: UpdateTask): Promise<any> => {
   return await request('put', `/api/attach/${id}`, data, false)
}

export const destroy = async (id: string) => {
   return await request('delete', `/api/attach/${id}`)
}
