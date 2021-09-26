<template>
    <nav class="bg-white shadow-lg">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-7">
                    <div class="flex items-center py-4 px-2">
                        
                                <span class="font-semibold text-gray-500 text-lg">GDS</span>
                                
                    </div>

                </div>
                <!-- Secondary Navbar items -->
                <div class="hidden md:flex items-center space-x-3 ">
                    <router-link
                        to="/register"
                        class="py-2 px-2 font-medium text-gray-500 
                        rounded hover:bg-blue-500 hover:text-white transition duration-300"
                    >Apply</router-link>
                     <router-link
                    to="/"
                    class="py-2 px-2 font-medium text-gray-500 rounded 
                    hover:bg-blue-500 hover:text-white transition duration-300"
                >Log In</router-link>
                </div>

               

            </div>
        </div>

    </nav>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavbarLogin"
});
</script>


<style>
</style>
