<template>
  <div>
  <div class="bg-blue-300 flex">
  <div class="flex-col flex ml-auto mr-auto items-center w-full lg:w-2/3 md:w-3/5">
    <h1 class="font-bold text-2xl my-10 text-white"> Login </h1>
 <form @submit.prevent="onSubmit" class="mt-2 flex flex-col lg:w-1/2 w-8/12">
          <div class="flex flex-wrap items-stretch w-full mb-4 relative h-15 bg-white items-center rounded mb-6 pr-10">
            <div class="flex -mr-px justify-center w-15 p-4">
              <span
                class="flex items-center leading-normal bg-white px-3 border-0 rounded rounded-r-none text-2xl text-gray-600"
              >
                <i class="fas fa-user-circle"></i>
              </span>
            </div>
            <input
              type="text"
              class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 border-0 h-10 border-grey-light rounded rounded-l-none px-3 self-center relative  font-roboto text-xl outline-none"
              placeholder="Email"
              v-model="user.email"
            />
          </div>
          <div class="flex flex-wrap items-stretch w-full relative h-15 bg-white items-center rounded mb-4">
            <div class="flex -mr-px justify-center w-15 p-4">
              <span
                class="flex items-center leading-normal bg-white rounded rounded-r-none 
                text-xl px-3 whitespace-no-wrap text-gray-600"
                > 
                <i class="fas fa-lock"></i>
                  </span>
            </div>
            <input
              type="password"
              class="flex-shrink flex-grow flex-auto leading-normal w-px flex-1 
              border-0 h-10 px-3 relative self-center font-roboto text-xl outline-none"
              placeholder="Password"
              v-model="user.password"
            />
            <div class="flex -mr-px">
              <span
                class="flex items-center leading-normal bg-white rounded rounded-l-none 
                border-0 px-3 whitespace-no-wrap text-gray-600"
                >
                <i class="fas fa-eye-slash"></i>
                </span>
            </div>
          </div>
          <a href="#" class="text-base text-white text-right font-roboto leading-normal 
          hover:underline mb-6">Forget Password ?</a>
         <button class="bg-blue-300 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded">
  Log in
</button>
        </form>
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