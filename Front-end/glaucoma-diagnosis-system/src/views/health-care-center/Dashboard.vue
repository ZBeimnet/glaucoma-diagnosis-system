<template>
  <div>
    <NavbarHealthCenter />
      <div>
        <h2
          class="
            title-font
            font-medium
            text-3xl text-gray-900
            mt-10
            text-center
          "
        >
          Health Center Stat
        </h2>
      </div>
      <div class="mt-5 divide-x">
        <div class="my-5 px-7 flex justify-center">
          <span class="font-medium self-center">Filter</span>
          <select
            class="appearance-none border rounded py-2 px-3 mx-3"
            id="age-group"
            placeholder="Age Group"
            v-model="filter.ageGroup"
          >
            <option value="" disabled selected hidden>Age Group</option>
            <option>All</option>
            <option>0-12</option>
            <option>13-18</option>
            <option>19-30</option>
            <option>31-50</option>
            <option>>50</option>
          </select>
          <select
            class="appearance-none border rounded py-2 px-3 mx-3"
            id="gender"
            placeholder="Gender"
            v-model="filter.gender"
          >
            <option value="" disabled selected hidden>Gender</option>
            <option>All</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <select
            class="appearance-none border rounded py-2 px-3 mx-3"
            id="other-criteria"
            placeholder="Other Criteria"
            v-model="filter.screenTime"
          >
            <option value="" disabled selected hidden>Average Screen Time per Day</option>
            <option>All</option>
            <option>0-3</option>
            <option>4-7</option>
            <option>8-13</option>
            <option>>13</option>
          </select>
        </div>
      </div>
    <!-- Highlevel stats -->
    <div class="body">
      <section class="text-gray-600 body-font">
        <div class="mx-10 px-10 pt-5 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path
                    d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"
                  ></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  {{ patientsDiagnosed }}
                </h2>
                <p class="leading-relaxed">Patient Diagnosed</p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path
                    d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"
                  ></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  {{ glaucomatous }}
                </h2>
                <p class="leading-relaxed">Glaucoma Positive</p>
              </div>
            </div>
            <div class="p-4 md:w-1/3 sm:w-1/2 w-full">
              <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="text-indigo-500 w-12 h-12 mb-3 inline-block"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path
                    d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"
                  ></path>
                </svg>
                <h2 class="title-font font-medium text-3xl text-gray-900">
                  {{ nonGlaucomatous }}
                </h2>
                <p class="leading-relaxed">Glaucoma Negative</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div class="mb-10 pt-10">
        <div class="lg:w-1/3 md:w-2/3 mx-auto">
          <Loader class="mt-5 mx-auto" :loaderColor="loaderColor" v-if="patientLoader" />
          <div v-else>
            <canvas id="chart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { Chart, registerables } from "chart.js";
import NavbarHealthCenter from "../../components/navbarhealthcenter.vue";
import Loader from "../../components/Loader.vue";

export default defineComponent({
  name: "HCDashboard",
  components: {
    NavbarHealthCenter,
    Loader
  },
  setup() {
    const filter = ref({
      ageGroup: "",
      gender: "",
      screenTime: ""
    });

    const chartData = {
      type: "doughnut",
      data: {
        labels: ["Glaucoma Negative", "Glaucoma Positive"],
        datasets: [
          {
            data: [0, 0],
          },
        ],
      },
      options: {
        datasets: {
          doughnut: {
            backgroundColor: ["rgba(71, 183,132,.5)", "rgba(54,73,93,.5)"],
            borderColor: ["36495d", "47b784"],
          },
        },
      },
    };

    const store = useStore();

    const patientLoader = computed(() => store.state.patient.patientLoader);

    const patientsDiagnosed = computed(() => store.getters["patient/hcPatientCount"]);
    const glaucomatous = computed(() => store.getters["patient/hcGlaucomatous"]);
    const nonGlaucomatous = computed(() => store.getters["patient/hcNonGlaucomatous"]);
    
    const loggedUser = JSON.parse(localStorage.getItem('user'));

    watch(filter.value, async (currentValue) => {
      const queries = [];
      if (currentValue.ageGroup !== "All" && currentValue.ageGroup !== "") {
        queries.push(`age_group=${currentValue.ageGroup}`);
      }
      if (currentValue.gender !== "All" && currentValue.gender !== "") {
        queries.push(`gender=${currentValue.gender}`);
      }
      if (currentValue.screenTime !== "All" && currentValue.screenTime !== "") {
        queries.push(`screentime=${currentValue.screenTime}`);
      }
      const finalQuery = queries.join('&');
      
      await store.dispatch(
        "patient/fetchPatientsByHealthcenter", {
          healthcenterId: loggedUser.healthcenter,
          query: finalQuery 
        },
        { root: true }
      );

      const ctx = document.getElementById("chart");
      Chart.register(...registerables);
      chartData.data.datasets[0].data = [nonGlaucomatous.value,
                                         glaucomatous.value];
      new Chart(ctx, chartData);

    });

    onMounted(async () => {
      // get healthcenter_id from the logged user
      await store.dispatch(
        "patient/fetchPatientsByHealthcenter",{
          healthcenterId: loggedUser.healthcenter,
          query: "" 
        },
        { root: true }
      );
      
      const ctx = document.getElementById("chart");
      Chart.register(...registerables);
      chartData.data.datasets[0].data = [nonGlaucomatous.value,
                                         glaucomatous.value];
      new Chart(ctx, chartData);
    });

    return {
      patientsDiagnosed,
      glaucomatous,
      nonGlaucomatous,
      filter,
      patientLoader,
      loaderColor: "#2196f3",
    };
  },
});
</script>

<style scoped>
</style>
