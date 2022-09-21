<script setup lang="ts">
import { Task } from "../types/task"

defineProps<{ tasks: Array<Task> }>()
</script>

<template>
   <div class="card">
      <div class="bg-yellow-500 card-header flex justify-between items-center text-white px-3">
         <span class="text-lg text-bold">Task</span>
         <span class="text-lg text-bold">Action</span>
      </div>
      <div v-for="task in tasks" :key="task.id" class="item-list">
         <span> {{ task.detail }} </span>
         <span class="text-right whitespace-nowrap">
            <button type="button" class="btn btn-pill btn-outline-butter mr-1">
               <i class="fa-solid fa-check fa-sm"></i>
            </button>
            <button type="button" class="btn btn-pill btn-outline-butter">
               <i class="fa-solid fa-trash fa-sm"></i>
            </button>
         </span>
      </div>
   </div>
</template>
