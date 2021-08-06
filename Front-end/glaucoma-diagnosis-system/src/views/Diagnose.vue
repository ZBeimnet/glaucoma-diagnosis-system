<template>
  <div>
    <NavbarHealthCenter />
    <div class="bg-gray-100">
      <div class="container mx-auto my-5 p-5">
        <div class="md:flex no-wrap md:-mx-2">
          <div
            class="
              border border-blue-300
              shadow
              rounded-md
              p-4
              max-w-sm
              w-full
              mx-auto
            "
          >
            <div>
              <p>{{ this.prediction_result.tagName }}</p>
              <p>{{ this.prediction_result.probability }}</p>
            </div>
            <div class="animate-pulse flex space-x-4 hidden" id="result">
              <div class="flex-1 space-y-4 py-1">
                <div class="h-4 bg-blue-400 rounded w-3/4"></div>
                <div class="space-y-2">
                  <div class="h-4 bg-blue-400 rounded"></div>
                  <div class="h-4 bg-blue-400 rounded w-5/6"></div>
                </div>
              </div>
            </div>
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
                      hover:bg-indigo-500
                      focus:bg-indigo-700
                    "
                    @click="get_result"
                  >
                    Dianose
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
import { defineComponent, reactive } from "vue";
import axios from "axios";
import NavbarHealthCenter from "../components/navbarhealthcenter.vue";

export default defineComponent({
  name: "Diagnose",
  components: {
    NavbarHealthCenter,
  },
  data() {
    return {
      loading: false,
      image_url: "",
      prediction_result: {},
      card_number: "112",
      first_name: "John",
      last_name: "Doe",
      age: 42,
      gender: "M",
      computer_usage: 4,
      image: "file://dir",
      region: "Addis Ababa",
      sub_city: "Gullele",
      phone_number: "0922",
    };
  },
  methods: {
    get_result() {
      document.getElementById("result").style.display = "block";
      this.loading = true;
      const api =
        "https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/d74c4bc4-30bd-4477-ad1d-f5e30e90600d/classify/iterations/glaucoma/url";
      const headers = {
        "Content-Type": "application/json",
        "Prediction-Key": "4d317fce897d495ea95ea0f104e37c1f",
      };
      axios
        .post(
          api,
          {
            Url: this.image_url,
          },
          {
            headers: headers,
          }
        )
        .then((response) => {
          this.prediction_result = response.data.predictions[0];
          console.log(this.prediction_result);
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.loading = false;
          document.getElementById("result").style.display = "None";
        });
    },
    // get_next_patient(){
    //     document.getElementById("result").style.display = 'None'
    //     document.getElementById("accept").style.display = 'None'
    // }
  },
});
</script>
