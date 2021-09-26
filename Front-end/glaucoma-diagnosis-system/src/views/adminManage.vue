<template>
  <NavbarAdmin />
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
              >Requested</a
            >
          </li>
        </ul>
      </div>

      <div v-if="healthcenterLoading" class="flex flex-col justify-center items-center">
        <Loader :loaderColor="loaderColor"/>
      </div>

      <div class="flex flex-col my-5" v-if="!healthcenterLoading">
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
                      Name
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
                      Email
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
                      Region
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
                      City
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
                      Medical License
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
                    v-for="healthcenter in healthcenters.requested"
                    :key="healthcenter._id"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900">
                        {{ healthcenter.name }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ healthcenter.email }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ healthcenter.region }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ healthcenter.city }}
                      </div>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {{ healthcenter.medicallicense }}
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
                          bg-green-500
                          hover:bg-green-700
                          text-white
                          font-bold
                          py-2
                          px-4
                          rounded
                          mr-3
                        "
                        @click="approve(healthcenter._id)"
                      >
                        Approve
                        <span v-if="actionLoader === `${healthcenter._id}-approve`"> Loading... </span>
                      </button>
                      <button
                        class="
                          bg-red-500
                          hover:bg-red-700
                          text-white
                          font-bold
                          py-2
                          px-4
                          rounded
                        "
                        @click="deny(healthcenter._id)"
                      >
                        Deny
                        <span v-if="actionLoader === `${healthcenter._id}-deny`"> Loading... </span>
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
  <div class="mx-20 mb-10 -mt-20">
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
              >Approved</a
            >
          </li>
        </ul>
      </div>

      <div v-if="healthcenterLoading" class="flex flex-col justify-center items-center">
        <Loader :loaderColor="loaderColor"/>
      </div>

      <div class="flex flex-col my-5" v-if="!healthcenterLoading">
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
                      Name
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
                      Email
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
                      Region
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
                      City
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
                      Medical License
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
                    v-for="healthcenter in healthcenters.granted"
                    :key="healthcenter._id"
                  >
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm font-medium text-gray-900">
                        {{ healthcenter.name }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ healthcenter.email }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ healthcenter.region }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">
                        {{ healthcenter.city }}
                      </div>
                    </td>
                    <td
                      class="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                    >
                      {{ healthcenter.medicallicense }}
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
                          bg-red-500
                          hover:bg-red-700
                          text-white
                          font-bold
                          py-2
                          px-4
                          rounded
                        "
                        @click="deny(healthcenter._id)"
                      >
                        Deny
                        <span v-if="actionLoader === `${healthcenter._id}-deny`"> Loading... </span>
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
import NavbarAdmin from "../components/navbaradmin.vue";
import Loader from "../components/Loader.vue";

export default defineComponent({
  name: "adminmanage",
  components: {
    NavbarAdmin,
    Loader
  },
  setup() {
    const healthcenters = ref({
      granted: [],
      requested: [],
    });

    const store = useStore();

    const actionLoader = computed(() => store.state.healthcenter.actionLoader);
    const healthcenterLoading = computed(() => store.state.healthcenter.healthcenterLoader);

    onMounted(async () => {
      await store.dispatch("healthcenter/fetchAllHealthcenters", { root: true });
      healthcenters.value.granted = store.getters["healthcenter/granted"];
      healthcenters.value.requested = store.getters["healthcenter/requested"];
    });

    const approve = async (id) => {
      await store.dispatch("healthcenter/grantAccess", id, { root: true });
      // delete from healthcenters.requested and add to granted
      let approved_hc = {};
      healthcenters.value.requested = healthcenters.value.requested.filter(function(hc) {
        if (hc._id === id) {
          approved_hc = hc;
          return false;
        }
        return true;
      });
      healthcenters.value.granted.unshift(approved_hc);
    };

    const deny = async (id) => {
      // not implemented at the backend yet
      await store.dispatch("healthcenter/deleteHealthcenter", id, { root: true });
      // delete from healthcenters.requested & healthcenters.granted
      healthcenters.value.requested = healthcenters.value.requested.filter((hc) => hc._id !== id);
      healthcenters.value.granted = healthcenters.value.granted.filter((hc) => hc._id !== id);
    }
    
    return {
      healthcenters,
      approve,
      deny,
      actionLoader,
      healthcenterLoading,
      loaderColor: "#2196f3"
    };
  },
});
</script>

<style>
</style>
