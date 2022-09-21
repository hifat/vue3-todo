<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Login } from '../types/auth'

const formData = ref<Login>({
   username: '',
   password: '',
})

function onSubmit() {
   console.log(formData.value)
}
</script>

<template>
   <h2 class="mt-10 md:mt-28 text-center text-4xl text-bold">Vue3 Todo Login</h2>
   <div class="flex justify-center">
      <form @submit.prevent="onSubmit">
         <div class="mt-6 p-12 bg-yellow-400 rounded-lg">
            <div class="text-center mb-6">
               <input v-model="formData.username" type="text" class="form-control rounded-full" placeholder="Username" />
            </div>
            <div class="text-center mb-6">
               <input v-model="formData.password" type="password" class="form-control rounded-full" placeholder="Password" />
            </div>
            <div class="text-right">
               <button type="submit" class="btn btn-butter">Login</button>
            </div>
         </div>
      </form>
   </div>
</template>
