<template>
<div>
  <NavbarAdmin/>
  <!-- Highlevel stats -->
  <div class="body">
  <section class="text-gray-600 body-font">
    <div class="mx-10 px-10 pt-16 mx-auto">
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
              <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">12800</h2>
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
              <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">5800</h2>
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
              <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
            </svg>
            <h2 class="title-font font-medium text-3xl text-gray-900">7000</h2>
            <p class="leading-relaxed">Non-Glaucomatous</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Detail stat and graph -->
  <div>
    <h2
      class="
        title-font
        font-medium
        text-3xl text-gray-900
        mt-10
        pt-5
        text-center
      "
    >
      Detailed Regional Stat
    </h2>
  </div>
  <div class="mt-5 grid grid-cols-2 divide-x">
    <div class="my-5 px-7 flex justify-end">
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
    <div class="my-5 pl-10">
      <span class="font-medium">Compare </span>
      <select
        class="appearance-none border rounded py-2 px-3 mx-3"
        id="region-one"
        placeholder="Region One"
      >
        <option>Region One</option>
        <option>Addis Ababa</option>
        <option>Afar</option>
        <option>Amhara</option>
        <option>Benishangul</option>
        <option>Dire Dawa</option>
        <option>Gambela</option>
        <option>Harari</option>
        <option>Oromia</option>
        <option>Sidama</option>
        <option>Somali</option>
        <option>SNNPR</option>
        <option>Tigray</option>
      </select>
      <select
        class="appearance-none border rounded py-2 px-3 mx-3"
        id="region-two"
        placeholder="Region Two"
      >
        <option>Region Two</option>
        <option>Addis Ababa</option>
        <option>Afar</option>
        <option>Amhara</option>
        <option>Benishangul</option>
        <option>Dire Dawa</option>
        <option>Gambela</option>
        <option>Harari</option>
        <option>Oromia</option>
        <option>Sidama</option>
        <option>Somali</option>
        <option>SNNPR</option>
        <option>Tigray</option>
      </select>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-20 ml-10 mr-5 pt-10">
    <div class="bg-white shadow-md rounded mb-6">
      <table class="min-w-max w-full table-auto">
        <thead>
          <tr
            class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
          >
            <th class="py-3 px-6 text-left">Region</th>
            <th class="py-3 px-6 text-left">Total Diagnosed</th>
            <th class="py-3 px-6 text-center">Glaucomatous</th>
            <th class="py-3 px-6 text-center">Non-Glaucomatous</th>
          </tr>
        </thead>
        <tbody class="text-gray-600 text-sm font-light">
          <tr
            v-for="_ in 6"
            class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100"
          >
            <td class="py-3 px-6 text-center">
              <span class="font-medium">Addis Ababa</span>
            </td>
            <td class="py-3 px-6 text-center">
              <span class="font-medium">1000</span>
            </td>
            <td class="py-3 px-6 text-center">
              <span class="font-medium">50</span>
            </td>
            <td class="py-3 px-6 text-center">
              <span class="font-medium">950</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <RegionChart />
    </div>
  </div>
  </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RegionChart from "../../components/RegionChart.vue";
import NavbarAdmin from '../../components/navbaradmin.vue';

export default defineComponent({
  name: "AdminDashboard",
  components: {
    RegionChart,
    NavbarAdmin
  },
});
</script>

<style scoped>
</style>
