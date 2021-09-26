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
                <select v-model="user.role" class="w-full h-10 pl-3 pr-6 text-base placeholder-gray-600 
                border border-grey-light rounded-lg appearance-none focus:shadow-outline">
                  <option>reception</option>
                  <option>doctor</option>
                </select>
                </div>
              </div>
             

              <div class="flex items-center justify-center mb-5">
                <button
                  @click="onSubmit"
                  class="w-1/4 ml-10 text-center py-3  bg-indigo-600 text-white hover:bg-blue-500 focus:outline-none ransition duration-300 my-3"
                  type="submit"
                >
                  Register
                </button>
                <div
                  v-if="errorMessage && !userLoader"
                >
                  <h2 class="title-font text-center ml-5 text-red-700">
                    {{ errorMessage }}
                  </h2>
                </div>
                <div
                  v-if="successMessage && !userLoader"
                >
                  <h2 class="title-font text-center ml-5 text-green-700">
                    {{ successMessage }}
                  </h2>
                </div>
                <!-- loading -->
                <div
                  v-if="userLoader"
                >
                  <h2 class="title-font text-center ml-5 text-blue-700">
                      Loading...
                  </h2>
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
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import NavbarHealthCenter from "../components/navbarhealthcenter.vue";

export default defineComponent({
  name: "user",
  components: {
    NavbarHealthCenter,
  },
  setup() {
    const user = ref({
      email: "",
      password: "",
      role: "doctor",
      healthcenter: JSON.parse(localStorage.getItem('user')).healthcenter
    });
    const errorMessage = ref("");
    const successMessage = ref("");
    
    const store = useStore();

    const userLoader = computed(() => store.state.user.userLoader);

    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        await store.dispatch(
          "user/registerUser",
          user.value,
          {
            root: true,
          }
        );
        // Clear login form
        user.value.email = "";
        user.value.password = "";

        successMessage.value = "Success!"

      } catch(error) {
        errorMessage.value = error.message;
      }
  
    }

    return { 
     user,
     errorMessage,
     successMessage,
     userLoader,
     onSubmit
    };
  },
});
</script>
