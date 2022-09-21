import { request } from './api'
import { Task, NewTask, UpdateTask } from '../../types/task'

export const get = async (): Promise<any> => {
   return await request('get', '/api/tasks')
}

export const create = async (data: NewTask): Promise<any> => {
   return await request('post', '/api/tasks', data, false)
}

export const show = async (id: string): Promise<any> => {
   return await request('get', `/api/tasks/${id}`)
}

export const update = async (id: string, data: UpdateTask): Promise<any> => {
   return await request('put', `/api/tasks/${id}`, data, false)
}

export const destroy = async (id: string) => {
   return await request('delete', `/api/tasks/${id}`)
}
