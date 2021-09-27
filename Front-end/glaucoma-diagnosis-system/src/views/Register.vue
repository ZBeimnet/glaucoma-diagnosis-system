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
              <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="hc_name"
                    >Health Center Name</label
                  >
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="name"
                id="hc_name"
                placeholder="Health center name"
                v-model="name"
              />
              
              <span class="title-font text-center text-red-700">{{ nameError }}</span>
<!-- 
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="region"
                placeholder="Region"
                v-model="healthcenter.region"
              /> -->
              <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="hc_region"
                    >Region</label
                  >
              <select
                    class="
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-grey-darker
                    "
                    id="hc_region"
                         name="region"
                placeholder="Region"
                    v-model="region"
                  >
                    <option>Addis Ababa</option>
                    <option>Afar</option>
                    <option>Amhara</option>
                    <option>Benishangul</option>
                    <option>Dire Dawa</option>
                    <option>Gambela</option>
                    <option>Harari</option>
                    <option>Oromia</option>
                    <option>Tigray</option>
                    <option>SNNPR</option>
                  </select>
              <span class="title-font text-center text-red-700">{{ regionError }}</span>
              <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="hc_city"
                    >City</label
                  >
              <select
                    class="
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-grey-darker
                    "
                    id="hc_city"
                    name="city"
                placeholder="City"
                v-model="city"
                  >
                    <option>Addis Ababa</option>
                    <option>Adama</option>
                    <option>Bahir Dar</option>
                    <option>Hawasa</option>
                    <option>Dire Dawa</option>
                    <option>Gambela</option>
                    <option>Harara</option>
                    <option>Argoba</option>
                    <option>Mekele</option>
                    <option>Jijiga</option>
                  </select>
                <span class="title-font text-center text-red-700">{{ cityError }}</span>
                <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="hc_email"
                    >Email</label
                  >
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                id="hc_email"
                placeholder="Email"
                v-model="email"
              />
              <span class="title-font text-center text-red-700">{{ emailError }}</span>
              <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="hc_password"
                    >Password</label
                  >
              <input
                type="password"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="password"
                id="hc_password"
                placeholder="Password"
                v-model="password"
              />
              <span class="title-font text-center text-red-700">{{ passwordError }}</span>
              <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="hc_md"
                    >Medical License</label
                  >
              <input
                type="text"
                class="block border border-grey-light w-full p-3 rounded mb-4"
                name="medicallicense"
                id="hc_md"
                placeholder="Medical License"
                v-model="medicallicense"
              />
              <span class="title-font text-center text-red-700">{{ medicallicenseError }}</span>
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
                  :disabled="!isValid"
                  @click="onSubmit"
                >
                  Apply
                </button>
                <span class="text-blue-700 ml-10" v-if="registerLoader">
                  Loading...
                </span>
                <span class="ml-10" v-if="!registerLoader && registerResult" :class="getColor(registerResult)">
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
import { useForm, useField, useIsFormValid, useIsFieldDirty, useResetForm } from 'vee-validate';
import * as yup from 'yup';
import NavbarLogin from "../components/navbarlogin.vue";

export default defineComponent({
  name: "Register",
  components: {
    NavbarLogin,
  },
  setup() {
    const schema = yup.object({
      name: yup.string().required().min(3),
      region: yup.string().required(),
      city: yup.string().required(),
      email: yup.string().required().email(),
      password: yup.string().required().min(4),
      medicallicense: yup.string().required().min(5)
    });

    useForm({
      validationSchema: schema,
    });

    const { value: name, errorMessage: nameError } = useField('name');
    const { value: region, errorMessage: regionError } = useField('region');
    const { value: city, errorMessage: cityError } = useField('city');
    const { value: email, errorMessage: emailError } = useField('email');
    const { value: password, errorMessage: passwordError } = useField('password');
    const { value: medicallicense, errorMessage: medicallicenseError } = useField('medicallicense');

    const store = useStore();
    
    const registerResult = computed(() => store.state.healthcenter.registerResult);
    const registerLoader = computed(() => store.state.healthcenter.registerLoader);

    const isValid = computed(() => useIsFormValid().value && !useIsFieldDirty().value);
    const resetForm = useResetForm();

    const onSubmit = async (e) => {
      e.preventDefault();
      const healthcenter = {
        name: name.value,
        region: region.value,
        city: city.value,
        email: email.value,
        password: password.value,
        medicallicense: medicallicense.value,
      }
      await store.dispatch('healthcenter/registerHealthcenter', healthcenter, {root:true});
      resetForm();
    };

    function getColor(result) {
      if (result === "Success!") {
        return "text-green-600";
      }
      return "text-red-600";
    }

    return { 
      registerResult,
      registerLoader,
      onSubmit,
      name,
      region,
      city,
      email,
      password,
      medicallicense,
      nameError,
      regionError,
      cityError,
      emailError,
      passwordError,
      medicallicenseError,
      isValid,
      getColor
    };
  },
});
</script>