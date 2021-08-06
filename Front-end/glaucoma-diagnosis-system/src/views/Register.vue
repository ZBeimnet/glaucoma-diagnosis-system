<template>
    <div>
        <NavbarLogin/>
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
                                placeholder="Health center name"
                                v-model="healthcenter.name"
                            />

                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="region"
                                placeholder="Region"
                                v-model="healthcenter.region"
                            />
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="city"
                                placeholder="City"
                                v-model="healthcenter.city"
                            />

                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="email"
                                placeholder="Email"
                                v-model="healthcenter.email"
                            />

                            <input
                                type="password"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="password"
                                placeholder="Password"
                                v-model="healthcenter.password"
                            />
                            <input
                                type="text"
                                class="block border border-grey-light w-full p-3 rounded mb-4"
                                name="medical_license"
                                placeholder="Medical License"
                                v-model="healthcenter.medicallicense"
                            />

                            <div class="flex items-center justify-center mb-5">
                                <button
                                    class="w-1/4 ml-10 text-center py-3 rounded bg-green-500 text-white hover:bg-blue-500 focus:outline-none my-3"
                                    type="submit"
                                    @click="onSubmit"
                                >Apply</button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<style>
</style>
<script lang="ts">

import { defineComponent, reactive } from 'vue'
import NavbarLogin from "../components/navbarlogin.vue";

export default defineComponent({
  name: "Register",
  components: {
    NavbarLogin
  },
  setup(){
       const healthcenter = reactive({
           name:'',
           region:'',
           city:'',
           email:'',
            password:'',
            medicallicense:'',
    })
    const onSubmit = (e) => {
      e.preventDefault();
      
    
      console.log(healthcenter);
      healthcenter.name=''
      healthcenter.region=''
      healthcenter.city=''
      healthcenter.email=''
      healthcenter.password=''
      healthcenter.medicallicense=  ''
    }
    return {healthcenter,onSubmit}

  }

});
</script>