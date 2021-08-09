<template>
    <nav class="bg-white shadow-lg">
        <div class="max-w-6xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-7">
                    <div class="flex items-center py-4 px-2">
                        <!-- Website Logo -->
                            <img
                        
                                src="../assets/logo.png"
                                alt="Logo"
                                class="h-8 w-8 mr-2"
                            >
                                <span class="font-semibold text-gray-500 text-lg">GDS Admin</span>
                                
                    </div>
                    <!-- Primary Navbar items -->
						<div class="flex items-center ml-5 space-x-1">
                            

							<router-link to="/admin/dashboard" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300 ">Dashboard</router-link>

						


							<router-link to="/manage" class="py-4 px-2 text-gray-500 font-semibold hover:text-blue-500 transition duration-300">Manage Health center</router-link>
							
						</div>
                      
                </div>
                <!-- Secondary Navbar items -->
                <div class="hidden md:flex items-center space-x-3 ">
                   
                     <router-link
                    to="/"
                    class="py-2 px-2 font-medium text-gray-500 rounded 
                    hover:bg-blue-400 hover:text-white transition duration-300"
                >Log out</router-link>
                </div>

               

            </div>
        </div>

    </nav>
</template>


<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavbarAdmin"
});
</script>


<style>
</style>
