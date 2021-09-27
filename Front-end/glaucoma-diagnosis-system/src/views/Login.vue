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
                v-model="email"
                placeholder="Email"
              />
              <span class="title-font text-center text-red-700">{{ emailError }}</span>

              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                v-model="password"
                placeholder="Password"
              />
              <span class="title-font text-center text-red-700">{{ passwordError }}</span>

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
                  :disabled="!isValid"
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
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useForm, useField, useIsFormValid, useIsFieldDirty } from 'vee-validate';
import * as yup from 'yup';
import NavbarLogin from "../components/navbarlogin.vue";

export default defineComponent({
  name: "Login",
  components: {
    NavbarLogin,
  },
  setup() {
    // Validation
    // Define a validation schema
    const schema = yup.object({
      email: yup.string().required().email(),
      password: yup.string().required().min(4),
    });
    // Create a form context with the validation schema
    useForm({
      validationSchema: schema,
    });

    // No need to define rules for fields
    const { value: email, errorMessage: emailError } = useField('email');
    const { value: password, errorMessage: passwordError } = useField('password');

    const isValid = computed(() => useIsFormValid().value && !useIsFieldDirty().value);
    
    const errorMessage = ref("");
    
    const store = useStore();
    const router = useRouter();

    const userLoader = computed(() => store.state.user.userLoader);

    const onSubmit = async (e) => {
      e.preventDefault();
      try {
        await store.dispatch(
          "user/login",
          {
            email: email.value,
            password: password.value
          },
          {
            root: true,
          }
        );

        const fetchedUser = JSON.parse(localStorage.getItem('user'));
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
      onSubmit,
      userLoader,
      errorMessage,
      emailError,
      passwordError,
      email,
      password,
      isValid
    };
  },
});
</script>

<style scoped>

</style>