<template>
  <div>
    <NavbarHealthCenter />
    <div class="body w-full h-full mt-0 font-sans antialiased bg-grey-lighter">
      <div class="CardNumber">
        <div class="mx-auto w-2/5 mt-10 pt-5 mb-0">
          <h2
            class="
              title-font
              text-2xl text-gray-700
              pb-5
              text-center
            "
          >
            Add Existing Patient to Queue
          <hr class="mt-2"/>
          </h2>
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
              placeholder="Enter Card Number"
              v-model="cardNumber"
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
              @click="addToQueue"
            >
              Add to Queue
            </button>
          </div>
          <!-- loading -->
          <h2 class="title-font text-center mt-5 text-blue-700" v-if="patientLoader">
            Loading..
          </h2>
          <!-- confirmation -->
          <h2 class="title-font text-center mt-5" v-if="!patientLoader" :class="getColor(searchResult)"> 
            {{ searchResult }}
          </h2>
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
              New Patient Registration
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
                    name="firstname"
                    type="text"
                    placeholder="First name"
                    v-model="firstname"
                  />
                  <span class="title-font text-center text-red-700">{{ firstnameError }}</span>
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
                    name="lastname"
                    type="text"
                    placeholder="Last name"
                    v-model="lastname"
                  />
                  <span class="title-font text-center text-red-700">{{ lastnameError }}</span>
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
                    name="age"
                    type="text"
                    placeholder="Age"
                    v-model="age"
                  />
                  <span class="title-font text-center text-red-700">{{ ageError }}</span>
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
                    name="screentime"
                    type="text"
                    placeholder="Average screen time per day"
                    v-model="screentime"
                  />
                  <span class="title-font text-center text-red-700">{{ screentimeError }}</span>
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
                    name="region"
                    placeholder="Addis Ababa"
                    v-model="region"
                  >
                    <option selected>Addis Ababa</option>
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
                    id="sub_city"
                    name="subcity"
                    placeholder=""
                    v-model="subcity"
                  >
                    <option selected>Addis Ababa</option>
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
                  <span class="title-font text-center text-red-700">{{ subcityError }}</span>
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
                    name="phoneno"
                    type="text"
                    placeholder="Phone Number"
                    v-model="phoneno"
                  />
                  <span class="title-font text-center text-red-700">{{ phonenoError }}</span>
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
                    name="gender"
                    placeholder=""
                    v-model="gender"
                  >
                    <option selected>Male</option>
                    <option>Female</option>
                  </select>
                  <span class="title-font text-center text-red-700">{{ genderError }}</span>
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
                  :disabled="!isValid"
                >
                  Register
                </button>

                <span class="text-blue-700 ml-10" v-if="registerLoader">
                  Loading...
                </span>
                <span class="ml-10" v-if="!registerLoader" :class="getColor2(registerResult)">
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
import { useForm, useField, useIsFormValid, useIsFieldDirty } from 'vee-validate';
import * as yup from 'yup';
import NavbarHealthCenter from "../components/navbarhealthcenter.vue";

export default defineComponent({
  name: "Reception",
  components: {
    NavbarHealthCenter,
  },
  setup() {
    const schema = yup.object({
      firstname: yup.string().required().min(3),
      lastname: yup.string().required().min(3),
      age: yup.string().required(),
      region: yup.string().required(),
      gender: yup.string().required(),
      subcity: yup.string().required(),
      phoneno: yup.string().required().min(10).max(10),
      screentime: yup.string().required()
    });
    // Create a form context with the validation schema
    useForm({
      validationSchema: schema,
    });

    const { value: firstname, errorMessage: firstnameError } = useField('firstname');
    const { value: lastname, errorMessage: lastnameError } = useField('lastname');
    const { value: age, errorMessage: ageError } = useField('age');
    const { value: region, errorMessage: regionError } = useField('region');
    const { value: gender, errorMessage: genderError } = useField('gender');
    const { value: subcity, errorMessage: subcityError } = useField('subcity');
    const { value: phoneno, errorMessage: phonenoError } = useField('phoneno');
    const { value: screentime, errorMessage: screentimeError } = useField('screentime');
    
    const isValid = computed(() => useIsFormValid().value && !useIsFieldDirty().value);

    const cardNumber = ref("");
    const searchResult = ref("");
    const registerResult = ref("");

    const store = useStore();

    const registerLoader = computed(() => store.state.patient.registerLoader);
    const patientLoader = computed(() => store.state.patient.patientLoader);

    const registerPatient = async function() {
      try {
        const patient = {
          firstname: firstname.value,
          lastname: lastname.value,
          age: age.value,
          region: region.value,
          city: subcity.value,
          gender: gender.value,
          phoneno: phoneno.value,
          comp_usage: screentime.value,
          healthcenter: "612cc8a77715aecd82c2ada1"
        }
        console.log(patient);
        // get healthcenter_id from the logged user
        await store.dispatch("patient/registerPatient", 
        patient
        , 
        {
          root: true,
        });
        registerResult.value = "Success";
        
        // CHECK IF A RELATION B/N PATIENT AND HC HAS BEEN CREATED
        
      } catch(error) {
        registerResult.value = "Error";
      }
      
    };

    const addToQueue = async function() {
      // get healthcenter_id from the logged user
      // for now, using healthcenter_id for blacklion
      const patientInfo = {
        healthcenter: "612cc8a77715aecd82c2ada1",
        cardNumber: cardNumber.value
      };
      try {
        await store.dispatch("patient/searchPatient", patientInfo, { root: true });
        searchResult.value = "Success";
      } catch(error) {
        searchResult.value = "Patient Not Found";
      }
    };

    function getColor(result) {
      if (result === "Patient Not Found") {
        return "text-red-600";
      }
      return "text-green-600";
    }

    function getColor2(result) {
      if (result === "Error") {
        return "text-red-600";
      }
      return "text-green-600";
    }

    return {
      registerResult,
      registerLoader,
      registerPatient,
      addToQueue,
      cardNumber,
      searchResult,
      patientLoader,
      getColor,
      firstname,
      lastname,
      age,
      region,
      gender,
      subcity,
      phoneno,
      screentime,
      firstnameError,
      lastnameError,
      ageError,
      regionError,
      genderError,
      subcityError,
      phonenoError,
      screentimeError,
      isValid,
      getColor2
    };
  }
});
</script>