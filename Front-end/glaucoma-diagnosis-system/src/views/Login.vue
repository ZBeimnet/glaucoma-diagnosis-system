<template>
<div>
  <NavbarLogin/>

  <div class="w-full bg-grey-lightest mt-0">
            <div class="container mx-auto py-8">
            <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                    <div class="py-4 my-3 px-8 text-white text-xl border-b rounded-tl-lg bg-blue-400">
                        Sign in
                    </div>
                   <div class="mx-4">
                     <form>
                   
                        
                    <input 
                        type="text"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        v-model="user.email"
                          placeholder="Email" />

                    <input 
                        type="password"
                        class="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        v-model="user.password"
                        placeholder="Password" />
                   
                
                    <div class="flex items-center justify-center mb-5">
                    <button
                    @click="onSubmit"
                        class="w-1/4 ml-10 text-center py-3  bg-indigo-600 text-white hover:bg-blue-500 focus:outline-none my-3"
                        type="submit"
                    >Login</button>
                    <div>
                     
                    </div>
                   
                    </div>

                     </form>
                    </div>

                   

                    
                </div>
                
               
            </div>
        </div>  
        </div>  
</template>


<script lang="ts">
import { defineComponent, reactive } from 'vue'
import NavbarLogin from '../components/navbarlogin.vue';
import router from '../router/index';

export default defineComponent({
  name: 'Login',
  components:{
    NavbarLogin
  },
   setup(){
    
    const user = reactive({
      email:'',
      password:''
    })

    const onSubmit = (e) => {
      e.preventDefault();
      
      if(user.email=='admin'){
       router.push('Manage');
      }
      else{
        router.push('Reception');
      }
      console.log(user);
      user.password='';
    }
    return {user,onSubmit}
  }
})
   
</script>