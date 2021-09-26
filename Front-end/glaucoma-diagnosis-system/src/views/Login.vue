<template>
  <div>
    <NavbarLogin />

    <div class="body w-full bg-grey-lightest mt-0">
      <div class="container mx-auto py-8">
        <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
          <div
            class="
              py-4
              my-3
              px-8
              text-white text-xl
              border-b
              rounded-tl-lg
              bg-blue-400
            "
          >
            Sign in
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

              <div class="flex items-center justify-center mb-5">
                <button
                  @click="onSubmit"
                  class="
                    w-1/4
                    ml-10
                    text-center
                    py-3
                    bg-indigo-600
                    text-white
                    hover:bg-blue-500
                    focus:outline-none
                    ransition
                    duration-300
                    my-3
                  "
                  type="submit"
                >
                  Login
                </button>
                <!-- error message -->
                <div
                  v-if="errorMessage && !userLoader"
                >
                  <h2 class="title-font text-center ml-5 text-red-700">
                    {{ errorMessage }}
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
import { defineComponent, computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import NavbarLogin from "../components/navbarlogin.vue";

export default defineComponent({
  name: "Login",
  components: {
    NavbarLogin,
  },
  setup() {
    const user = ref({
      email:'',
      password:''
    });
    const errorMessage = ref("");
    
    const store = useStore();
    const router = useRouter();

    const userLoader = computed(() => store.state.user.userLoader);

    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        await store.dispatch(
          "user/login",
          user.value,
          {
            root: true,
          }
        );
        // Clear login form
        user.value.email = "";
        user.value.password = "";

        const fetchedUser = store.state.user.user;
        if(fetchedUser.role === "gds_admin"){
          router.push({ name: "AdminDashboard"});
        } else if (fetchedUser.role === "admin") {
          router.push({ name: "HCDashboard"});
        } else if (fetchedUser.role === 'doctor') {
          router.push({ name: "PatientQueue"});
        } else if (fetchedUser.role === 'reception') {
          router.push({ name: "Reception"});
        }
      } catch(error) {
        errorMessage.value = error.message;
      }
  
    }

    return { 
      user,
      onSubmit,
      userLoader,
      errorMessage
    };
  },
});
</script>
<style>
</style>