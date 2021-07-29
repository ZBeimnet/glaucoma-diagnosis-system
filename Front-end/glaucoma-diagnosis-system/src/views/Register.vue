<template>
<div class="w-full bg-grey-lightest mt-0 ">
            <div class="container mx-auto py-8">
            <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                    <div class="py-4 my-3 px-8 text-white text-xl border-b rounded-tl-lg bg-yellow-400">
                        Health Center Application
                    </div>
                   <div class="mx-4">
                     <form action="">
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="heatlhcentername"
                        placeholder="Health center name" />
                        
                        <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="region"
                        placeholder="Region" />
                        <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="city"
                        placeholder="City" />
                        
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="medical_license"
                        placeholder="Medical License" />
                
                    <div class="flex items-center justify-between mb-5">
                    <button
                        class="w-1/4 ml-10 text-center py-3 rounded bg-green-500 text-white hover:bg-blue-500 focus:outline-none my-3"
                        type="submit"
                    >Apply</button>
                    <div>
                    Already have an account? 
                    <a class="inline-block align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500" href="../login/">
                        Log in
                    </a>
                    </div>
                   
                    </div>

                     </form>
                    </div>

                   

                    
                </div>
                
               
            </div>
        </div>    
</template>

<style>
    
</style>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Register',
})
</script>