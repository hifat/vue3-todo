<script setup lang="ts">
import { ref } from 'vue'
import TaskList from './components/TaskList.vue'
import { Task } from './types/task'

const tasks = ref<Task[]>([
   {
      id: '1',
      detail: 'Buy some milk',
      done: false,
      created_at: new Date(),
      updated_at: new Date(),
   },
   {
      id: '2',
      detail: 'Play tailwind',
      done: true,
      created_at: new Date(),
      updated_at: new Date(),
   },
   {
      id: '3',
      detail: 'Learning golang',
      done: false,
      created_at: new Date(),
      updated_at: new Date(),
   },
])
</script>

<template>
   <h2 class="mt-10 text-center text-4xl text-bold">Vue3 Todo</h2>
   <div class="w-full mt-6">
      <div class="mx-auto text-center mb-6">
         <input type="text" class="form-control" placeholder="Enter Todo" />
         <button type="button" class="submit-button">
            <i class="fa-solid fa-plus fa-lg"></i>
         </button>
      </div>
      <div class="card max-w-4xl drop-shadow-md min-h-[500px] mx-auto">
         <div class="card-body">
            <h3 class="text-2xl font-bold mb-4">Todo List</h3>
            <TaskList :tasks="tasks" />
         </div>
      </div>
   </div>
</template>
