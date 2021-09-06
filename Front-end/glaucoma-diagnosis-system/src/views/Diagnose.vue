<template>
  <div>
    <NavbarHealthCenter />
    <div class="body bg-gray-100">
      <div class="container mx-auto my-5 p-5 ">
        <div class="md:flex no-wrap md:-mx-2">
          <div
            class="
              flex flex-col justify-center items-center
              border border-blue-300
              shadow
              rounded-md
              p-4
              max-w-sm
              w-full
              mx-auto
            "
          >
            <img v-if="!loading" :src="image_url" class="rounded-md"/>
            <div v-if="!loading && Object.keys(prediction_result).length !== 0" class="text-center" :class="getColor(prediction_result.tagName)">
              <p class="">{{ prediction_result.tagName }}</p>
              <p>Probability: {{ prediction_result.probability }}</p>
            </div>
            <Loader :loaderColor="loaderColor" v-if="loading"/>
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
                  Card Number <span class="float-right">{{ card_number }}</span>
                </h1>
              </div>
              <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">First Name</div>
                    <div class="px-4 py-2">{{ first_name }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Last Name</div>
                    <div class="px-4 py-2">{{ last_name }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Gender</div>
                    <div class="px-4 py-2">{{ gender }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Contact No.</div>
                    <div class="px-4 py-2">{{ phone_number }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Region</div>
                    <div class="px-4 py-2">{{ region }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Subcity</div>
                    <div class="px-4 py-2">{{ sub_city }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Age</div>
                    <div class="px-4 py-2">{{ age }}</div>
                  </div>
                  <div class="grid grid-cols-2">
                    <div class="px-4 py-2 font-semibold">Image</div>
                    <div class="px-4 py-2">
                      <button><i class="fas fa-expand"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="inline-flex mt-5 w-1/2">
                <!-- <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="get_result">
                    Diagnose
                </button> -->
                <div class="relative text-gray-700 w-full">
                  <input
                    v-model="image_url"
                    class="
                      overflow-clip overflow-hidden
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
                    placeholder="Enter Image Url"
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
                    @click="getResult"
                  >
                    Diagnose
                  </button>
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
                    Patient Info
                  </button>
                  <button
                    class="
                      text-gray-600
                      py-4
                      px-6
                      block
                      hover:text-blue-500
                      focus:outline-none
                      click:
                    "
                  >
                    Patient History
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
<<<<<<< HEAD
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
=======
import { defineComponent, reactive } from "vue";
import { computed, ref } from 'vue';
import { useStore, mapState } from "vuex";
>>>>>>> d0912ba ([web] Modularize store)
import NavbarHealthCenter from "../components/navbarhealthcenter.vue";
import Loader from "../components/Loader.vue";
import func from "../../vue-temp/vue-editor-bridge";

export default({
  name: "Diagnose",
  components: {
    NavbarHealthCenter,
    Loader
  },
  setup() {
    const loaderColor = "#2196f3";
    const image_url = ref("");
    const card_number = "112";
    const first_name = "John";
    const last_name = "Doe";
    const age = 42;
    const gender = "M"
    const computer_usage = 4;
    const image = "file://dir";
    const region = "Addis Ababa";
    const sub_city = "Gullele";
    const phone_number = "0922";

    const store = useStore();
    const prediction_result = computed(() => store.state.diagnose.predictionResult);
    const loading = computed(() => store.state.diagnose.predictionLoader);
<<<<<<< HEAD
    const getResult = () => store.dispatch('diagnose/fetchPredictionResult', image_url.value, {root:true});
=======
    const getResult = () => store.dispatch('fetchPredictionResult', image_url.value);
>>>>>>> d0912ba ([web] Modularize store)

    function getColor(virdict) {
      if (virdict === "Glaucoma Positive") {
        return "text-red-600"
      }
      if (virdict === "Glaucoma Negative") {
        return "text-green-600"
      }
    }

    return {
      prediction_result,
      loading,
      loaderColor,
      image_url,
      card_number,
      first_name,
      last_name,
      age,
      gender,
      computer_usage,
      image,
      region,
      sub_city,
      phone_number,
      getColor,
      getResult
    };
  }
});
</script>

<style scoped>

</style>