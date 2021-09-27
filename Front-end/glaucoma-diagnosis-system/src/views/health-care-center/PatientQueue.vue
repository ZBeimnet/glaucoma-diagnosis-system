<template>
  <NavbarHealthCenter />
  <div class="mx-20 mt-10 mb-20">
    <div class="body">
      <div class="flex mt-3 ml-3">
        <ul class="flex border-b">
          <li class="-mb-px mr-1">
            <a
              class="
                bg-white
                inline-block
                border-l border-t border-r
                rounded-t
                py-2
                px-4
                text-blue-700
                font-semibold
              "
              href="#"
              >Patient Queue</a
            >
          </li>
        </ul>
      </div>

      <!-- error message -->
      <div
        v-if="errorMessage"
        class="flex flex-col justify-center items-center mt-10"
      >
        <h2 class="title-font text-center mt-5 text-red-700"> 
          {{ errorMessage }}
        </h2>
      </div>

      <!-- no patient in queue -->
      <div
        v-if="patients.length === 0 && !patientLoading"
        class="flex flex-col justify-center items-center mt-10"
      >
        <h2 class="title-font text-center mt-5 text-gray-700"> 
          No Patient in Queue
        </h2>
      </div>

      <div
        v-if="patientLoading"
        class="flex flex-col justify-center items-center mt-40"
      >
        <Loader :loaderColor="loaderColor" />
      </div>

      <div class="flex flex-col my-5" v-if="!patientLoading && !errorMessage && patients.length !== 0">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="
                shadow
                overflow-hidden
                border-b border-gray-200
                sm:rounded-lg
              "
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      First Name
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Last Name
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Age
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                      "
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="patient in patients"
                    :key="patient._id"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900">
                        {{ patient.firstname }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ patient.lastname }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ patient.age }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ patient.gender }}
                      </div>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {{ patient.phoneno }}
                    </td>
                    <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-right text-sm
                        font-medium
                      "
                    >
                      <button
                        class="
                          bg-blue-500
                          hover:bg-gray-700
                          text-white
                          font-bold
                          py-2
                          px-4
                          rounded
                        "
                      >
                        <router-link :to="`/diagnose/${patient._id}`">Treat this Patient</router-link>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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
import NavbarHealthCenter from "../../components/navbarhealthcenter.vue";
import Loader from "../../components/Loader.vue";

export default defineComponent({
  name: "PatientQueue",
  components: {
    NavbarHealthCenter,
    Loader,
  },
  setup() {
    const errorMessage = ref("");

    const store = useStore();

    const patientLoading = computed(() => store.state.patient.patientLoader);
    const patients = computed(() => store.state.patient.patientsByHealthcenter);

    onMounted(async () => {
      // get healthcenter_id from the logged user
      try{
        await store.dispatch("patient/fetchPatientsByHealthcenter", {healthcenterId: "612cc8a77715aecd82c2ada1", query: ""}, {
          root: true,
        });
        console.log(patients);
      } catch(error) {
        errorMessage.value = error.message;
      }
    });

    return {
      patients,
      patientLoading,
      errorMessage,
      loaderColor: "#2196f3"
    };
  },
});
</script>

<style>
</style>
