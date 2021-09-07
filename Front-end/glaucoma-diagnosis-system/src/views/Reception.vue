<template>
  <div>
    <NavbarHealthCenter />
    <div class="body w-full h-full mt-0 font-sans antialiased bg-grey-lighter">
      <div class="CardNumber">
        <div class="w-1/4 mr-20 flex mt-5 mb-0 float-right">
          <div class="relative text-gray-700">
            <input
              class="
                w-full
                h-10
                pl-3
                pr-8
                text-base
                placeholder-gray-600
                border
                rounded-lg
                focus:shadow-outline
              "
              type="text"
              placeholder="Card Number"
            />
            <button
              class="
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-4
                font-bold
                text-white
                bg-indigo-600
                rounded-r-lg
                hover:bg-blue-500
                focus:bg-indigo-700
              "
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div class="w-full bg-grey-lightest mt-0" style="padding-top: 4rem">
        <div class="container mx-auto py-8">
          <div class="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
            <div
              class="
                py-4
                px-8
                text-white text-xl
                border-b
                rounded-tl-lg
                bg-blue-400
              "
            >
              Patient Registration
            </div>
            <div class="py-4 px-8">
              <div class="flex mb-4">
                <div class="w-1/2 mr-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="first_name"
                    >First Name</label
                  >
                  <input
                    class="
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-grey-darker
                    "
                    id="first_name"
                    type="text"
                    placeholder="First name"
                    v-model="patient.firstname"
                  />
                </div>
                <div class="w-1/2 ml-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="last_name"
                    >Last Name</label
                  >
                  <input
                    class="
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-grey-darker
                    "
                    id="last_name"
                    type="text"
                    placeholder="Last name"
                    v-model="patient.lastname"
                  />
                </div>
              </div>
              <div class="flex mb-4">
                <div class="w-1/2 mr-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="age"
                    >Age</label
                  >
                  <input
                    class="
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-grey-darker
                    "
                    id="age"
                    type="text"
                    placeholder="Age"
                    v-model="patient.age"
                  />
                </div>
                <div class="w-1/2 ml-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="screen_time"
                    >Screen Time</label
                  >
                  <input
                    class="
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-grey-darker
                    "
                    id="screen_time"
                    type="text"
                    placeholder="Average screen time per day"
                    v-model="patient.screentime"
                  />
                </div>
              </div>
              <div class="flex mb-4">
                <div class="w-1/2 mr-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="region"
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
                    id="region"
                    placeholder="Addis Ababa"
                    v-model="patient.region"
                  >
                    <option>Addis Abaa</option>
                    <option>Afar</option>
                    <option>Amhara</option>
                    <option>Benishangul-Gumuz</option>
                    <option>Dire Dawa</option>
                    <option>Gambela</option>
                    <option>Harari</option>
                    <option>Oromia</option>
                    <option>Sidama</option>
                    <option>Somali</option>
                    <option>
                      Southern Nation and Nationalities and People
                    </option>
                    <option>Tigray</option>
                  </select>
                </div>
                <div class="w-1/2 mr-1">
                  <label
                    class="
                      block
                      text-grey-darker
                      background-white
                      text-sm
                      font-bold
                      mb-2
                    "
                    for="sub_city"
                    >Sub City</label
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
                    id="sub_city"
                    placeholder=""
                    v-model="patient.subcity"
                  >
                    <option>Addis Abaa</option>
                    <option>Afar</option>
                    <option>Amhara</option>
                    <option>Benishangul-Gumuz</option>
                    <option>Dire Dawa</option>
                    <option>Gambela</option>
                    <option>Harari</option>
                    <option>Oromia</option>
                    <option>Sidama</option>
                    <option>Somali</option>
                    <option>
                      Southern Nation and Nationalities and People
                    </option>
                    <option>Tigray</option>
                  </select>
                </div>
              </div>
              <div class="flex mb-4">
                <div class="w-1/2 mr-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="phone_nubmer"
                    >Phone Number</label
                  >
                  <input
                    class="
                      appearance-none
                      border
                      rounded
                      w-full
                      py-2
                      px-3
                      text-grey-darker
                    "
                    id="phone_number"
                    type="text"
                    placeholder="Phone Number"
                    v-model="patient.phoneno"
                  />
                </div>
                <div class="w-1/2 mr-1">
                  <label
                    class="block text-grey-darker text-sm font-bold mb-2"
                    for="gender"
                    >Gender</label
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
                    id="gender"
                    placeholder=""
                    v-model="patient.gender"
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div class="relative text-gray-700">
                <button
                  class="
                    bg-indigo-600
                    text-white
                    hover:bg-blue-500
                    font-bold
                    py-2
                    px-4
                    border border-blue-700
                  "
                  @click="registerPatient"
                >
                  Register
                </button>
                <label class="text-gray-700 ml-5">
                  <input type="checkbox" value="" />
                  <span class="ml-1">Create new patient</span>
                </label>
                <span class="text-blue-700 ml-10" v-if="registerLoader">
                  Loading...
                </span>
                <span class="text-green-700 ml-10" v-if="!registerLoader">
                  {{ registerResult }}
                </span>
              </div>
            </div>
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
import NavbarHealthCenter from "../components/navbarhealthcenter.vue";

export default defineComponent({
  name: "Reception",
  components: {
    NavbarHealthCenter,
  },
  setup() {
    const patient = ref({
      firstname: '',
      lastname: '',
      age: '',
      region: '',
      subcity: '',
      gender: '',
      phoneno: '',
      screentime: ''
    });
    const store = useStore();
    
    const registerResult = computed(() => store.state.patient.registerResult);
    const registerLoader = computed(() => store.state.patient.registerLoader);
    
    const registerPatient = function() {
      store.dispatch('patient/registerPatient', patient.value, {root:true});
      // clear form
      patient.value.firstname = '';
      patient.value.lastname = '';
      patient.value.age = '';
      patient.value.region = '';
      patient.value.subcity = '';
      patient.value.gender = '';
      patient.value.phoneno = '';
      patient.value.screentime = '';
    }

    return {
      patient,
      registerResult,
      registerLoader,
      registerPatient
    };
  },
});
</script>