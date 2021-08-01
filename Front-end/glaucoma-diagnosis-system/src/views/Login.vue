<template>
  <div class="w-full bg-grey-lightest mt-0">
            <div class="container mx-auto py-8">
            <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                    <div class="py-4 my-3 px-8 text-white text-xl border-b rounded-tl-lg bg-yellow-400">
                        Sign in
                    </div>
                   <div class="mx-4">
                     <form action="">
                   
                        
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
                   
                
                    <div class="flex items-center justify-between mb-5">
                    <button
                        class="w-1/4 ml-10 text-center py-3 rounded bg-green-500 text-white hover:bg-blue-500 focus:outline-none my-3"
                        type="submit"
                    >Login</button>
                    <div>
                    have no account? 
                    <a class="inline-block align-baseline font-light text-sm text-indigo-600 hover:text-indigo-500" href="/register/">
                        Apply
                    </a>
                    </div>
                   
                    </div>

                     </form>
                    </div>

                   

                    
                </div>
                
               
            </div>
        </div>    
</template>


<script lang="ts">
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: 'Login',
   setup(){
    
    const user = reactive({
      email:'',
      password:''
    })

    const onSubmit = () => {
      console.log(user);
      user.email='';
      user.password='';
    }
    return {user,onSubmit}
  }
})
</script>