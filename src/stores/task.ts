import { defineStore } from 'pinia'
import { Task, NewTask, NewTaskResponse, UpdateTask, UpdateTaskResponse } from '../types/task'

import * as TaskService from '../common/service/task'

interface TaskState {
   tasks: Task[]
   showTask: Task
   errors: any
}

export const useTaskStore = defineStore('tasks', {
   state: (): TaskState => ({
      tasks: [],
      showTask: {
         id: '',
         detail: '',
         done: false,
         created_at: null,
         updated_at: null,
      },
      errors: '',
   }),
   getters: {
      getTasks: (state) => state.tasks,
      getshowTask: (state) => state.showTask,
      getErrors: (state) => state.errors,
   },
   actions: {
      async createTask(data: NewTask) {
         const res = await TaskService.create(data)
         if (res.result) {
            this.tasks.push(res.task)
         } else {
            this.errors = res.error
         }
      },
      async queryTasks() {
         const res = await TaskService.get()
         if(res.tasks) {
            this.tasks = res.tasks
         }
      },
      async showTask(id: string) {
         const res = await TaskService.show(id)
         this.showTask = res.task
      },
      async updateTask(id: string, data: UpdateTask) {
         const res = await TaskService.update(id, data)
         if(res.result) {
            this.tasks.map((task, index) => {
               if(task.id === id) {
                  this.tasks[index].detail = data.detail
               }
            })
         } else {
            this.errors = res.error
         }
      },
      async destroyTask(id: string) {
         const res = await TaskService.destroy(id)
         if(res.result) {
            this.tasks.filter(task => task.id === id)
         } else {
            this.errors = res.error
         }
      },
   },
})
