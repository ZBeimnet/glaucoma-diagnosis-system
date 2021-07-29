<template>
    <div class="font-sans bg-blue-600 antialiased" id="app">
  <nav class="flex items-center justify-between flex-wrap bg-teal p-6">
    <div class="flex items-center flex-no-shrink text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">GDS</span>
    </div>
   
    <div class="w-full mx-5 flex-grow sm:flex sm:items-center sm:w-auto">
      <div class="text-lg flex justify-center sm:flex-grow">
        <a href="#" class="no-underline text-lg block mt-4 sm:inline-block sm:mt-0 text-white mr-8">
          Home  
        </a>
        <a href="#" class="no-underline text-lg block mt-4 sm:inline-block sm:mt-0 text-white mr-8">
          Diagnose
        </a>
        <a href="#" class="no-underline text-lg block mt-4 sm:inline-block sm:mt-0 text-white">
          Register
        </a>
      </div>
      <div>
        <a href="/login/" class="no-underline inline-block text-sm px-4 py-2 leading-none border rounded text-white  hover:border-transparent mt-4 sm:mt-0">Logout</a>
      </div>
    </div>
  </nav>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navbar',
})
</script>

<style>

</style>
