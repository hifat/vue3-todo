<script setup lang="ts">
import { ref } from 'vue'
import { Credentials } from '../types/auth'
import { useAuthStore } from '../stores/auth';

const formData = ref<Credentials>({
   username: '',
   password: '',
})

const authStore = useAuthStore()

async function onSubmit() {
   await authStore.login(formData.value)
}
</script>

<template>
   <h2 class="pt-10 md:pt-28 text-center text-4xl text-bold">Vue3 Todo Login</h2>
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
