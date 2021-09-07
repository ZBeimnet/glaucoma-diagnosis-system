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
                  class="
                    w-1/4
                    ml-10
                    text-center
                    py-3
                    bg-indigo-600
                    text-white
                    hover:bg-blue-500
                    focus:outline-none
                    my-3
                  "
                  type="submit"
                  @click="onSubmit"
                >
                  Apply
                </button>
                <span class="text-blue-700 ml-10" v-if="registerLoader">
                  Loading...
                </span>
                <span class="text-green-700 ml-10" v-if="!registerLoader">
                  {{ registerResult }}
                </span>
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
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import NavbarLogin from "../components/navbarlogin.vue";

export default defineComponent({
  name: "Register",
  components: {
    NavbarLogin,
  },
  setup() {
    const healthcenter = ref({
      name: "",
      region: "",
      city: "",
      email: "",
      password: "",
      medicallicense: "",
    });

    const store = useStore();
    
    const registerResult = computed(() => store.state.admin.registerResult);
    const registerLoader = computed(() => store.state.admin.registerLoader);

    const onSubmit = async (e) => {
      e.preventDefault();
      await store.dispatch('admin/registerHealthcenter', healthcenter.value, {root:true});
      // clear form
      healthcenter.value.name = "";
      healthcenter.value.region = "";
      healthcenter.value.city = "";
      healthcenter.value.email = "";
      healthcenter.value.password = "";
      healthcenter.value.medicallicense = "";
    };

    return { 
      healthcenter,
      registerResult,
      registerLoader,
      onSubmit 
    };
  },
});
</script>