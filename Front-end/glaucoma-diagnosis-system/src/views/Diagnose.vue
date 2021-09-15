<template>
  <div>
    <NavbarHealthCenter />

    <!-- error message -->
    <div
      v-if="errorMessage"
      class="flex flex-col justify-center items-center mt-10"
    >
      <h2 class="title-font text-center mt-5 text-red-700">
        {{ errorMessage }}
      </h2>
    </div>

    <!-- patient loading -->
    <div
      v-if="patientLoading"
      class="flex flex-col justify-center items-center my-40 pb-40"
    >
      <Loader :loaderColor="loaderColor" />
    </div>

    <div class="body bg-gray-100" v-if="!errorMessage && !patientLoading">
      <div class="container mx-auto my-5 p-5">
        <button
          class="
            bg-gray-700
            hover:bg-blue-400
            text-white
            font-bold
            py-2
            px-4
            rounded
            mb-5
          "
        >
          <router-link to="/patientQueue"
            > Back To Patient Queue</router-link
          >
        </button>
        <div class="md:flex no-wrap md:-mx-2">
          <div
            class="
              flex flex-col
              justify-center
              items-center
              border border-blue-300
              shadow
              rounded-md
              p-4
              max-w-sm
              w-full
              mx-auto
            "
          >
            <img v-if="!loading" :src="image_url" class="rounded-md" />
            <div
              v-if="!loading && Object.keys(prediction_result).length !== 0"
              class="text-center"
              :class="getColor(prediction_result.tagName)"
            >
              <p class="">{{ prediction_result.tagName }}</p>
              <p>Probability: {{ prediction_result.probability }}</p>
            </div>
            <Loader :loaderColor="loaderColor" v-if="loading" />
            <!-- <div class="animate-pulse flex space-x-4 hidden" id="result">
              <div class="flex-1 space-y-4 py-1">
                <div class="h-4 bg-blue-400 rounded w-3/4"></div>
                <div class="space-y-2">
                  <div class="h-4 bg-blue-400 rounded"></div>
                  <div class="h-4 bg-blue-400 rounded w-5/6"></div>
                </div>
              </div>
            </div> -->
            <div class="flex mt-10 hidden" id="accept">
              <button class="w-1/2">
                <i class="fa fa-check fa-2x" style="color: green"></i>
              </button>
              <button>
                <i class="fas fa-times-circle fa-2x" style="color: red"></i>
              </button>
            </div>
          </div>

          <div class="w-full md:w-9/12 mx-2 h-64">
            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div
                class="
                  flex
                  items-center
                  space-x-2
                  font-semibold
                  text-gray-900
                  leading-8
                "
              >
                <h1 class="w-1/2 mb-5 text-green-500 font-thick text-lg ml-5">
                  Card Number
                  <span class="float-right">{{ patient.cardNumber }}</span>
                </h1>
              </div>
              <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">First Name</div>
                    <div class="px-4 py-2">{{ patient.firstname }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Last Name</div>
                    <div class="px-4 py-2">{{ patient.lastname }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Gender</div>
                    <div class="px-4 py-2">{{ patient.gender }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Contact No.</div>
                    <div class="px-4 py-2">{{ patient.phoneno }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Region</div>
                    <div class="px-4 py-2">{{ patient.region }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Subcity</div>
                    <div class="px-4 py-2">{{ patient.subcity }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Age</div>
                    <div class="px-4 py-2">{{ patient.age }}</div>
                  </div>
                </div>
              </div>
              <div class="inline-flex mt-5 w-2/3">
                <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="get_result">
                    Diagnose
                </button> -->
                <div class="relative text-gray-700 w-full">
                <form id="form" @submit.prevent="getResult">
                  <input
                    class="
                      overflow-clip overflow-hidden
                      w-full
                      text-base
                      placeholder-gray-600
                      border
                      rounded-lg
                      focus:shadow-outline
                    "
                    type="file"
                    name="file"
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
                      type="submit"
                    >
                      Diagnose
                    </button>
                  </form>
                </div>
                <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  ml-5 fas fa-arrow-right" @click="get_next_patient">
                    
                </button> -->
              </div>
            </div>

            <div class="my-4"></div>

            <div class="bg-white p-3 shadow-sm rounded-sm">
              <div class="bg-white">
                <nav class="flex flex-col sm:flex-row">
                  <button
                    class="
                      text-gray-600
                      py-4
                      px-6
                      block
                      hover:text-blue-500
                      focus:outline-none
                      text-blue-500
                      border-b-2
                      font-medium
                      border-blue-500
                    "
                  >
                    Patient History
                  </button>
                </nav>

                <!-- new patient -->
                <div
                  v-if="patient.patientresult.length === 0"
                  class="flex flex-col justify-center items-center mb-10"
                >
                  <h2 class="title-font text-center mt-5 text-gray-700">
                    No Previous Record Found!
                  </h2>
                </div>
                <!-- display patient history here -->
                <div v-else>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import NavbarHealthCenter from "../components/navbarhealthcenter.vue";
import Loader from "../components/Loader.vue";
import func from "../../vue-temp/vue-editor-bridge";

export default {
  name: "Diagnose",
  components: {
    NavbarHealthCenter,
    Loader,
  },
  setup() {
    const store = useStore();

    const prediction_result = computed(
      () => store.state.diagnose.predictionResult
    );
    const loading = computed(() => store.state.diagnose.predictionLoader);
    const image_url = computed(() => store.state.diagnose.imageUrl);

    const getResult = () => {
      let form = document.getElementById('form');
      let formData = new FormData(form);
      formData.append("upload_preset", "cehkc3gq");
      store.dispatch("diagnose/fetchPredictionResult", formData, {
        root: true,
      });
    }

    function getColor(virdict) {
      if (virdict === "Glaucoma Positive") {
        return "text-red-600";
      }
      if (virdict === "Glaucoma Negative") {
        return "text-green-600";
      }
    }

    const errorMessage = ref("");
    const route = useRoute();

    const patient = computed(() => store.state.patient.singlePatient);
    const patientLoading = computed(() => store.state.patient.patientLoader);

    onMounted(async () => {
      // get healthcenter_id from the logged user
      try {
        await store.dispatch(
          "patient/fetchSinglePatient",
          route.params.patientId,
          {
            root: true,
          }
        );
        console.log(patient);
      } catch (error) {
        errorMessage.value = error.message;
      }
    });

    return {
      prediction_result,
      loading,
      loaderColor: "#2196f3",
      image_url,
      getColor,
      getResult,
      patient,
      patientLoading,
      errorMessage,
    };
  },
};
</script>

<style scoped>
</style>