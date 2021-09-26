<template>
  <div>
    <NavbarHealthCenter />

    <div class="body w-full bg-grey-lightest mt-0">
      <div class="container mx-auto py-8">
        <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
          <div
            class="py-4 my-3 px-8 text-white text-xl border-b rounded-tl-lg bg-blue-400"
          >
            Register User
          </div>
          <div class="mx-4">
            <form>
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                v-model="user.email"
                placeholder="Email"
              />

              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                v-model="user.password"
                placeholder="Password"
              />
                 <div class="text-gray-700 md:flex md:items-center">
                  <div class="mb-1 md:mb-0 md:w-1/5">
              <label class="text-left" style="max-width: 300px;">
                  
                <span class="text-gray-700">Role</span></label>
                </div>  
               
                <div class="md:w-2/3 md:flex-grow">
                <select class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 
                border border-grey-light rounded-lg appearance-none focus:shadow-outline">
                  <option>reception</option>
                  <option>doctor</option>
                </select>
                </div>
              </div>
             

              <div class="flex items-center justify-center mb-5">
                <button
                  class="w-1/4 ml-10 text-center py-3  bg-indigo-600 text-white hover:bg-blue-500 focus:outline-none ransition duration-300 my-3"
                  type="submit"
                >
                  Register
                </button>
                <div></div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, reactive } from "vue";
import { useStore } from "vuex";
import NavbarHealthCenter from "../components/navbarhealthcenter.vue";

export default defineComponent({
  name: "user",
  components: {
    NavbarHealthCenter,
  },
  setup() {
    const user = reactive({
      email: "",
      password: "",
      role: "",
    });
    return { user };
  },
});
</script>
