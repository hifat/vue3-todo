import { defineStore } from 'pinia'
import { Task, NewTask, NewTaskResponse, UpdateTask, UpdateTaskResponse } from '../types/task'

import * as TaskAPI from '../utilities/service/task'

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
   },
   actions: {
      async createTask(data: NewTask) {
         const res = await TaskAPI.create(data)
         if (res.result) {
            this.tasks.push(res.task)
         } else {
            this.errors = res.error
         }
      },
      async getTasks() {
         const res = await TaskAPI.get()
         this.tasks = res.tasks
      },
      async showTask(id: string) {
         const res = await TaskAPI.show(id)
         this.showTask = res.task
      },
      async updateTask(id: string, data: UpdateTask) {
         const res = await TaskAPI.update(id, data)
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
         const res = await TaskAPI.destroy(id)
         if(res.result) {
            this.tasks.filter(task => task.id === id)
         } else {
            this.errors = res.error
         }
      },
   },
})
