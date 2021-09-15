<template>
  <NavbarAdmin />
  <div>
    <!-- Detail stat and graph -->
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
          Regional Stat
        </h2>
      </div>
      <div class="mt-5 divide-x">
        <div class="my-5 px-7 flex justify-center">
          <span class="font-medium self-center">Filter</span>
          <select
            class="appearance-none border rounded py-2 px-3 mx-3"
            id="age-group"
            placeholder="Age Group"
          >
            <option>Age Group</option>
            <option>Below 13</option>
            <option>13 - 19</option>
            <option>20 - 35</option>
            <option>36 - 50</option>
            <option>Above 50</option>
          </select>
          <select
            class="appearance-none border rounded py-2 px-3 mx-3"
            id="gender"
            placeholder="Gender"
          >
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>
          <select
            class="appearance-none border rounded py-2 px-3 mx-3"
            id="other-criteria"
            placeholder="Other Criteria"
          >
            <option>Other Criteria</option>
            <option>Computer User</option>
            <option>Criterion-2</option>
            <option>Criterion-3</option>
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
                  {{ highlevelStats.patientsDiagnosed }}
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
                  {{ highlevelStats.glaucomatous }}
                </h2>
                <p class="leading-relaxed">Glaucomatous</p>
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
                  {{ highlevelStats.nonGlaucomatous }}
                </h2>
                <p class="leading-relaxed">Non-Glaucomatous</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div class="mb-10 pt-10">
        <div class="md:w-2/3 mx-auto">
          <div>
            <canvas id="chart"></canvas>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { Chart, registerables } from "chart.js";
import NavbarAdmin from "../../components/navbaradmin.vue";

export default defineComponent({
  name: "AdminDashboard",
  components: {
    NavbarAdmin,
  },
  setup() {
    const highlevelStats = ref({
      patientsDiagnosed: 0,
      glaucomatous: 0,
      nonGlaucomatous: 0,
    });
    const chartData = {
      type: "bar",
      data: {
        labels: ["Addis Ababa", "Afar", "Amhara", "Benishangul", "Dire Dawa", "Gambela", "Harari", "Oromia", "Tigray", "SNNPR"],
        datasets: [
          {
            label: "Total Diagnosed",
            data: [340, 414, 231, 532, 541, 498, 677, 289, 902, 834],
            backgroundColor: "rgba(71, 183,132,.5)",
            borderColor: "#47b784",
            borderWidth: 3
          },
          {
            label: "Glaucomatous",
            data: [20, 30, 25, 50, 79, 82, 27, 14, 90, 64],
            backgroundColor: "rgba(54,73,93,.5)",
            borderColor: "#36495d",
            borderWidth: 3
          }
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        }
      },
    };

    const store = useStore();

    onMounted(async () => {
      await store.dispatch("patient/fetchAllPatients", { root: true });
      highlevelStats.value.patientsDiagnosed = store.getters["patient/patientCount"];
      highlevelStats.value.glaucomatous = store.getters["patient/glaucomatous"];
      highlevelStats.value.nonGlaucomatous = store.getters["patient/nonGlaucomatous"];
      
      // commenting this just to show the bar chart (we don't have diagnosed patients yet)
      // let barChartData = store.getters["patient/adminChartData"];
      // chartData.data.datasets[0].data = barChartData.total;
      // chartData.data.datasets[1].data = barChartData.glaucomatous;
      const ctx = document.getElementById("chart");
      Chart.register(...registerables);
      new Chart(ctx, chartData);
    });

    return {
      highlevelStats,
    };
  },
});
</script>

<style scoped>
</style>
