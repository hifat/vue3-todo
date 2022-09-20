export type Task = {
   id: string
   detail: string
   done: boolean
   created_at: Date | null,
   updated_at: Date | null,
}

export type NewTask = {
   detail: string
}

export type NewTaskResponse = {
   result: boolean,
   task: Task,
   error?: any,
}

export type UpdateTask = {
   detail: string
}

export type UpdateTaskResponse = {
   result: boolean,
   task: Task,
   error?: any,
}